import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentContext";
import { PaymentPage } from "./pages/Payment.page";
import { PaymentSuccessPage } from "./pages/PaymentSuccess.page";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/Home.page";
import { BooksPage } from "./pages/Books.page";
import { BookPage } from "./pages/Book.page";
import { BookComparisonPage } from "./pages/BookComparison.page";
import { CartPage } from "./pages/Cart.page";
import { LoginPage } from "./pages/Login.page";
import { RegisterPage } from "./pages/Register.page";
import { ProfilePage } from "./pages/Profile.page";
import { AboutPage } from "./pages/About.page";
import { StoresPage } from "./pages/Stores.page";
import { ProtectedRoute } from "./components/MainMenu/ProtectedRoute";
import { BookSearchProvider } from './context/BookSearchContext';


function App() {
  return (
    <AuthProvider>
      <BookSearchProvider>
        <CartProvider>
          <PaymentProvider>
            <AppContent />
          </PaymentProvider>
        </CartProvider>
      </BookSearchProvider>
    </AuthProvider>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/book-comparison" element={<BookComparisonPage />} />
        <Route path="/stores" element={<StoresPage />} />
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
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Route>
    </Routes>
  );
}

export default App;