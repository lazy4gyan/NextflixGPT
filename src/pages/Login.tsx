/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Header from "../components/Header";
import { AVATAR_URL, BACKGROUND_IMAGE, PROFILE_AVATAR_IMAGE } from "../utils/constants";
import {
  ErrorMessage,
  ValidateFormData,
  validateData,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [toggleSignIn, setToggleSignIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    email: "",
    passowrd: "",
    authenticationError: "",
  });
  const toggleSignInForm = () => {
    setToggleSignIn((prev) => !prev);
  };

  const handleClick = () => {
    const formData: ValidateFormData = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };
    // validate the form data
    setErrorMessage(validateData(formData));

    if (!toggleSignIn) {
      // sign up
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((userCredential: any) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameRef?.current?.value,
            photoURL: AVATAR_URL ? AVATAR_URL:PROFILE_AVATAR_IMAGE,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser || {};
              const photoURL = AVATAR_URL ? AVATAR_URL:PROFILE_AVATAR_IMAGE;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              console.log(error)
              // ...
            });
        })
        .catch((error: any) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage((prev) => ({
            ...prev,
            authenticationError: errorMessage,
          }));
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-image bg-cover bg-center min-h-screen object-cover">
        <img src={BACKGROUND_IMAGE} alt="Movie Wallpaper" />
      </div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        className="bg-black w-3/12 p-8 absolute mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!toggleSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Name"
            ref={nameRef}
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email Address"
          ref={emailRef}
        />
        {errorMessage.email !== "" && (
          <p className="text-red-500 text-sm text-bold mb-1 text-left">
            {errorMessage.email}
          </p>
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        {(errorMessage.passowrd !== "" ||
          errorMessage.authenticationError !== "") && (
          <p className="text-red-500 text-sm text-bold mb-1 text-left">
            {errorMessage.passowrd !== ""
              ? errorMessage.passowrd
              : errorMessage.authenticationError}
          </p>
        )}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm px-2 cursor-pointer" onClick={toggleSignInForm}>
          {toggleSignIn
            ? "Are you new to Netflix? Sign Up Now"
            : "Already an user ? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
