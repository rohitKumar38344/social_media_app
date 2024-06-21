import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

import {
  Home,
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";

/*
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element="Home" />
      <Route path="/sign-in" element="SigninForm" />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
*/
export default function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* private routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}
