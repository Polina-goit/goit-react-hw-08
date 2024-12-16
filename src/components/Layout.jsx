import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <header>
        <AppBar />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
