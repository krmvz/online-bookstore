import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import { AboutUsPage } from "./pages/About.page";
import { HomePage } from "./pages/Home.page";
import { UsersPage } from "./pages/Books.page";
import { UserPage } from "./pages/Book.page";
import { MainMenu } from "./menu/main.menu";
import { RequestsPage } from "./pages/Requests.page";
import { OldRequestsPage } from "./pages/OldRequests.page";

function MainLayout() {
  return (
    <div style={{width: "1200px"}}>
      <MainMenu />

      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/old-requests" element={<OldRequestsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
