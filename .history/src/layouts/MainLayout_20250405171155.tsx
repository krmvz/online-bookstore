import { Outlet } from "react-router-dom";
import { MainMenu } from "../components/MainMenu/MainMenu";
import { MainMenu } from "../components/MainMenu/MainMenu";  // This path doesn't exist yet

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

export { MainLayout };