import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUsPage } from "./pages/About.page";
import { HomePage } from "./pages/Home.page";
import { BooksPage } from "./pages/Books.page";
import { UserPage as BookPage } from "./pages/Book.page";
import { MainMenu } from "./menu/main.menu";
import { RequestsPage } from "./pages/Requests.page";
import { OldRequestsPage } from "./pages/OldRequests.page";

function MainLayout() {
  return (
    <div className="main-layout">
      <MainMenu />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/old-requests" element={<OldRequestsPage />} />
      </Route>
    </Routes>
  );
}

export default App;