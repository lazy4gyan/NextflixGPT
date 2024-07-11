import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
import { FaSignOutAlt } from "react-icons/fa";
interface AccountMenuProps {
  visible?: boolean;
  avatar?: string;
  userName?:string;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible, avatar,userName }) => {
  if (!visible) {
    return null;
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
        // error page
      });
  };
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-600 flex ">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex  flex-col gap-3 items-center w-full">
        <div className="flex items-center justify-between">
          <img src={avatar} alt="avatar-image" className="w-12 rounded-md" />
          <p className="text-white text-sm group-hover/item:underline">
            {userName}
          </p>
        </div>
          <hr className="bottom-0 border-gray-600 h-px my-4 w-56" />
          <div
            onClick={handleSignOut}
            className="px-3 text-center text-white text-sm hover:underline flex items-center gap-2"
          >
           <FaSignOutAlt /> Sign out of Netflix
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
