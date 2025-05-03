import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { IconButton, Modal, TextField, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchProdsNav = () => {
  const products = useSelector((state) => state.shop.products);
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFilteredProducts(products);
    setFilteredProducts((prev) =>
      prev.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
  return (
    <div>
      <Search
        sx={{
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "28px",
          alignSelf: "center",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setOpenModalSearch(true);
        }}
      />

      <Modal open={openModalSearch} onClose={() => setOpenModalSearch(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 600,
            bgcolor: "background.paper",
            borderRadius: "12px",
            boxShadow: 24,
            p: 4,
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setOpenModalSearch(false)}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <h2 style={{ marginBottom: 16 }}>Search Products</h2>

          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={(e) => handleSearchTerm(e)}
            onClick={(e) => {
              e.stopPropagation();
            }}
            autoFocus
          />

          <Box sx={{ mt: 2, maxHeight: "300px", overflowY: "auto" }}>
            {filteredProducts.length === 0 ? (
              <p>No matching products.</p>
            ) : (
              filteredProducts.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    p: 1,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                  onClick={() => {
                    navigate(`products/${item.id}`);
                    setOpenModalSearch(false);
                  }}
                >
                  <div className="flex flex-row gap-2">
                    <img src={item.image} width={50} /> {item.title}
                  </div>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchProdsNav;
