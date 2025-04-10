import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        throw new Error("Email is already in use");
      }
      if (error.code === "auth/weak-password") {
        throw new Error("Password should be at least 6 characters");
      }
      throw new Error("Failed to create an account");
    }
  };

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        throw new Error("Incorrect password or Email");
      } else if (error.code === "auth/user-not-found") {
        throw new Error("No account found with this email");
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email format");
      } else if (error.code === "auth/too-many-requests") {
        throw new Error("Too many attempts, please try again later");
      }
    }
  };
  const resetPassword = async (email) => {
    if (!email) throw new Error("Email is required");

    try {
      return await sendPasswordResetEmail(auth, email);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        throw new Error("No account found with this email");
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email format");
      } else if (error.code === "auth/too-many-requests") {
        throw new Error("Too many attempts, please try again later");
      }
      throw new Error(error.message || "Failed to reset password");
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Failed to log out:", error.message);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signUp, logout, login, resetPassword }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
