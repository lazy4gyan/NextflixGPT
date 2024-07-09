import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
interface AccountMenuProps {
  visible?: boolean;
  avatar?: string;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible, avatar }) => {
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
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-100 flex ">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex  flex-col gap-3 items-center w-full">
          <img src={avatar} alt="avatar-image" className="w-8 rounded-md" />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
          <hr className="bg-gray-600 bottom-0 h-px my-4" />
          <div
            onClick={handleSignOut}
            className="px-3 text-center text-white text-sm hover:underline"
          >
            Sign out of Netflix
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
