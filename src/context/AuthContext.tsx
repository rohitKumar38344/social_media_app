import { getCurrentUser } from "@/lib/appwrite/api";
import { IContextType, IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const INITTIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITTIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IUser>(INITTIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const checkAuthUser = async () => {
    try {
      setIsLoading(true);
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // localStorage.getItem("cookieFallback") === null
    if (
      localStorage.getItem("cookieFallback") === "[]" ||
      localStorage.getItem("cookieFallback") === null
    )
      navigate("/sign-in");
    checkAuthUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        checkAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useUserContext = () => useContext(AuthContext);
