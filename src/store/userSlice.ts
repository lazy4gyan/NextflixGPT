// userSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  uid: string;
  email: string;
  displayName: string;
  photoURL:string;
}

const userSlice = createSlice({
  name: "user",
  initialState: null as UserState | null,
  reducers: {
    addUser: (state, action) => {
      console.log(state);
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
