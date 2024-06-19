import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col justify-center items-center py-10 flex-1">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="w-1/2 object-cover bg-no-repeat hidden xl:block"
          />
        </>
      )}
    </>
  );
}
