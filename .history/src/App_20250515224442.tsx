import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/Home.page";
import { BooksPage } from "./pages/Books.page";
import { BookPage } from "./pages/Book.page";
// import { BookComparisonPage } from "./pages/BookComparison.page";
import { CartPage } from "./pages/Cart.page";
import { LoginPage } from "./pages/Login.page";
import { RegisterPage } from "./pages/Register.page";
import { ProfilePage } from "./pages/Profile.page";
import { AboutPage } from "./pages/About.page";
// import { StoresPage } from "./pages/Stores.page";
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
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/book-comparison" element={<BookComparisonPage />} />
          <Route path="/stores" element={<StoresPag />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route path="/cart" element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          } />
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