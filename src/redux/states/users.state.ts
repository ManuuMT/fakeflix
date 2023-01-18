import Profile1 from "../../assets/profile-icons/profile-12.png";
import Profile2 from "../../assets/profile-icons/profile-11.png";
import Profile3 from "../../assets/profile-icons/profile-07.png";
import { Profile } from "../../pages";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: Profile[] = [
  {
    id: 1,
    name: "ManuDev",
    icon: {
      src: Profile1,
      alt: "Profile1",
    },
  },
  {
    id: 2,
    name: "Some friend",
    icon: {
      src: Profile2,
      alt: "Profile2",
    },
  },
  {
    id: 3,
    name: "Kids",
    icon: {
      src: Profile3,
      alt: "Profile3",
    },
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    modifyUser: (state, action) => {
      const { id, name, icon } = action.payload;
      const foundUser = state.find((user) => user.id === id);
      if (foundUser) {
        foundUser.name = name;
        foundUser.icon = icon;
      }
    },
    resetUser: () => initialState,
  },
});

export const { createUser, modifyUser, resetUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
