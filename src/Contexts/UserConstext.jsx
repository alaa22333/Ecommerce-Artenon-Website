import {
  createContext,
  useContext,
  useEffect,

  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { errorFun } from "../utlis/constants";
import { useNavigate, useLocation } from "react-router-dom";

import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../config";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location?.state?.pathname || "/";
  //sign in with google

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        toast.success("You 've successfully logged In!");
        navigate(redirect, { replace: true });
      });
    } catch (error) {
      toast.error("Invalid Sign In try again!");
    }
  };
  //sign in with faceBook
  const signInWithFaceBook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        toast.success("You 've successfully logged In!");
        navigate(redirect, { replace: true });
      });
    } catch (error) {
      toast.error("Invalid Sign In try again!");
    }
  };
  //sign in
  const handleSignIn = async (e, email, password) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate(redirect, { replace: true });
      toast.success("you successfully logged in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      errorFun("The email address is already in use");
      if (error.code == "auth/email-already-in-use") {
        errorFun("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        errorFun("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        errorFun("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        errorFun("The password is too weak.");
      }
    }
  };
  //sign up
  const handleSignUp = async (e, email, password) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const docRef = await setDoc(doc(db, "user", user.uid), {
        uid: user.uid,
        email,
        email: user.email,
      });
      navigate(redirect, { replace: true });

      toast.success("you've already signed up!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      errorFun("The email address is already in use");
      if (error.code == "auth/email-already-in-use") {
        errorFun("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        errorFun("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        errorFun("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        errorFun("The password is too weak.");
      }
    }
  };

  //log out
  const logOut = async () => {
    try {
      await signOut(auth);

      navigate("/sign in");

      toast.success("You are logged out please, sign in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      errorFun(error.message);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unSubscribe();
  }, [auth]);


  return (
    <UserContext.Provider
      value={{
        signInWithGoogle,
        signInWithFaceBook,
        logOut,
        handleSignIn,
        handleSignUp,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
