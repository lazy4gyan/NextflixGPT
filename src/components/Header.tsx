/* eslint-disable @typescript-eslint/no-explicit-any */
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { FaPlay} from "react-icons/fa";
import Navbar from "./navbar/Navbar";
// import { MdOutlineArrowDropDown } from "react-icons/md";
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

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    // <div className="absolute w-screen flex flex-col md:flex-row items-center md:justify-between md:items-center md:px-8 px-2 py-4 bg-gradient-to-b from-black z-10">
    //   <img className="w-48" src={LOGO} alt="Netflix" />
    //   {user && (
    //     <div className="flex items-center gap-8 text-white">
    //       <button className="flex justify-center gap-2 items-center bg-red-600 p-2 rounded-lg cursor-pointer hover:opacity-70 ">
    //         Try PilotGPT <FaPlay />
    //       </button>
    //       <img
    //         className="h-20 w-20"
    //         src={user?.photoURL}
    //         alt=""
    //         title={`${user?.displayName}`}
    //       />
    //       <button 
    //       // className="font-bold bg-red-600 p-2 rounded-lg" 
    //       onClick={handleSignOut}>
    //         Sign Out
    //       </button>
    //       {/* <MdOutlineArrowDropDown width={10} height={10}/> */}
    //     </div>
    //   )}
    // </div>
    <>
    <Navbar />
    </>
  );
};

export default Header;
