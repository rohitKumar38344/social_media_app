import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex h-full flex-1">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
}
