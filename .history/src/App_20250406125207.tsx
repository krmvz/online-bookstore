import { Route, Routes } from "react-router-dom";
// import "./App.css";  // Keep original path for now
import { AboutUsPage } from "./pages/About.page";
import { HomePage } from "./pages/Home.page";
import { BooksPage } from "./pages/Books.page";
import { UserPage as BookPage } from "./pages/Book.page";
import { MainLayout } from "./layouts/MainLayout";
import { CategoriesPage } from "./pages/Categories.page";
import React from "react";



function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;