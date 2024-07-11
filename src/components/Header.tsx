/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import Navbar from "./navbar/Navbar";
import ShimmerNavbar from "./shimmer-ui/ShimmerNavbarItem";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    return <ShimmerNavbar />;
  }

  return (
    <>
      <Navbar user={user} />
    </>
  );
};

export default Header;
