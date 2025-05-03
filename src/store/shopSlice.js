import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`); //forgot await
      if (!response.ok) {
        throw new Error("Could not fetch products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchSingleProduct = createAsyncThunk(
  "shop/fetchSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Could not fetch single product");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  categoryTitle: [],
  singleProduct: {},
  cart: [],
  wishlist: [],
  loading: false,
};

const shop = createSlice({
  name: "shop",
  initialState,
  reducers: {
    restoreWishlist(state, action) {
      state.wishlist = action.payload; // for populating the wishlist when app loads
    },
    addToWishList(state, action) {
      if (state.wishlist.some((item) => item.id === action.payload)) {
        return;
      }
      const item = state.products.find((item) => item.id === action.payload); // nu filter, daca e cu filter trebuie sa scrii in loc de item, item[0]
      if (item) {
        state.wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      //
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    filterByCategory(state, action) {
      state.categoryTitle = state.products.filter(
        (item) => item.category === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      });
  },
});

export const actionsShop = shop.actions;
export const reducerShop = shop.reducer;
