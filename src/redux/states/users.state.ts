import Profile1 from "../../assets/profile-icons/profile-12.png";
import Profile2 from "../../assets/profile-icons/profile-11.png";
import Profile3 from "../../assets/profile-icons/profile-07.png";
import { Profile } from "../../pages";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: Profile[] = [
  {
    id: "1",
    name: "ManuDev",
    icon: {
      src: Profile1,
      alt: "Profile1",
    },
  },
  {
    id: "2",
    name: "Some friend",
    icon: {
      src: Profile2,
      alt: "Profile2",
    },
  },
  {
    id: "3",
    name: "Kids",
    icon: {
      src: Profile3,
      alt: "Profile3",
    },
  },
];

const SetLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

const GetLocalStorage = (key: string) => localStorage.getItem(key);

export const usersSlice = createSlice({
  name: "users",
  initialState: GetLocalStorage("userList")
    ? JSON.parse(GetLocalStorage("userList") as string)
    : initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
      SetLocalStorage("userList", state);
    },
    modifyUser: (state, action) => {
      const editedUser = action.payload;
      const foundUser = state.find(
        (user: Profile) => user.id === editedUser.id
      );
      if (editedUser.name) foundUser.name = editedUser.name;
      if (editedUser.icon) foundUser.icon = editedUser.icon;
      SetLocalStorage("userList", state);
    },
    deleteUser: (state, action) => {
      const userID = action.payload;
      state = state.filter((user: Profile) => user.id !== userID);
      SetLocalStorage("userList", state);
    },
    resetUser: () => initialState,
  },
});

export const { createUser, modifyUser, deleteUser, resetUser } =
  usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
