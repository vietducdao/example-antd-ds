import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action: PayloadAction<User>) => {
      const newUser: User = {
        key: action.payload.key,
        name: action.payload.name,
        age: action.payload.age,
        address: action.payload.address,
        tags: [],
      };
      state.users.push(newUser);
    },
    deleteuser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.key !== action.payload);
    },
    updateuser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.key === action.payload.key
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { adduser, deleteuser, updateuser } = userSlice.actions;

export default userSlice.reducer;
