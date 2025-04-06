import { Outlet } from "react-router-dom";
import { MainMenu } from "../components/MainMenu/MainMenu";

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