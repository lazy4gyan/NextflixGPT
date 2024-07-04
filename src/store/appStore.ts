import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserState } from "./userSlice"; // Adjust the path as needed
import movieReducer, { MovieState } from "./movieSlice"; // Adjust the path as needed

export interface RootState {
  user: UserState;
  movies: MovieState; // Assuming you have a MovieState defined elsewhere
}

// Create the store with reducers
const appStore = configureStore({
  reducer: { user: userReducer, movies: movieReducer },
});

export type AppDispatch = typeof appStore.dispatch;
export default appStore;
