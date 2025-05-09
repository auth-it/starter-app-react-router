import "./App.css";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

export function Layout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
