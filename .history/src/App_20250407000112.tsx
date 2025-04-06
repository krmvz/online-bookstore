import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { AboutPage } from "./pages/About.page";
import { HomePage } from "./pages/Home.page";
import { BooksPage } from "./pages/Books.page";
import { BookPage } from "./pages/Book.page";
import { MainLayout } from "./layouts/MainLayout";
import { CategoriesPage } from "./pages/Categories.page";
import { CartPage } from "./pages/Cart.page";
import { LoginPage } from "./pages/Login.page";
import { RegisterPage } from "./pages/Register.page";
import { ProfilePage } from "./pages/Profile.page";
import { ProtectedRoute } from "./components/MainMenu/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;