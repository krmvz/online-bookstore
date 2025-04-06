import { Outlet } from "react-router-dom";
import { MainMenu } from "../menu/main.menu";

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