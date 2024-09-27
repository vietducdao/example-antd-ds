import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  key: string;
  name: string;
  age: number;
  address: string;
}
interface UserState {
  users: User[];
}
const initialState: UserState = {
  users: [],
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    adduser: (state, action: PayloadAction<User>) => {
      const newUser: User = {
        key: action.payload.key,
        name: action.payload.name,
        age: action.payload.age,
        address: action.payload.address,
      };
      state.users.push(newUser);
    },
  },
});

export const { adduser } = UserSlice.actions;

export default UserSlice.reducer;
