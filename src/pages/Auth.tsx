import { useCallback, useState } from "react";
import Input from "../components/Input";
import { AVATAR_URL, BACKGROUND_IMAGE, PROFILE_AVATAR_IMAGE } from "../utils/constants";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../store/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
// import { ErrorMessage } from "../utils/validate";

const Auth = () => {
  const dispatch = useDispatch()
  const [variant, setVariant] = useState("signin");
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
  //   email: "",
  //   passowrd: "",
  //   authenticationError: "",
  // });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "signin" ? "signup" : "signin"
    );
  }, []);

  const handleClick = () => {
    if (!(variant === 'signin')) {
      // sign up
      createUserWithEmailAndPassword(auth, formState.email, formState.password)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((userCredential: any) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: formState.username,
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
            });
        })
        .catch((error: any) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // setErrorMessage((prev) => ({
          //   ...prev,
          //   authenticationError: errorMessage,
          // }));
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(auth, formState.email, formState.password)
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
    <div className="relative h-screen w-full bg-no-repeat bg-fixed bg-center bg-cover" style={{backgroundImage:`url(${BACKGROUND_IMAGE})`}}>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/* <nav className="px-12 py-5">
          <img src={LOGO} alt="logo" className="h-16" />
        </nav> */}
        <Header/>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "signin" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "signup" && (
                <Input
                  label="Username"
                  onChange={handleChange}
                  id="username"
                  type="username"
                  value={formState.username}
                />
              )}
              <Input
                label="Email"
                // onChange={(event: any) => handleChange(event)}
                onChange={handleChange}
                id="email"
                type="email"
                value={formState.email}
              />
              <Input
                label="Password"
                // onChange={(event: any) => handleChange(event)}
                onChange={handleChange}
                id="password"
                type="password"
                value={formState.password}
              />
            </div>
            <button onClick={handleClick} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "signin"?"Login":"Create an account"}
            </button>
            <p className="text-neutral-500 mt-12 text-center">
              {variant === "signup"
                ? "Already an user? "
                : "First time using Netflix? "}
              <span
                onClick={toggleVariant}
                className="text-white text-sm ml-1 hover:underline cursor-pointer"
              >
                {variant === "signup" ? "Sign in" : "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
