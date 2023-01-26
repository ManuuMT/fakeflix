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
      SetLocalStorage("userList", state);
      state.push(action.payload);
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
    resetUser: () => initialState,
  },
});

export const { createUser, modifyUser, resetUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
