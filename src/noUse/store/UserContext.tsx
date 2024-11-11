// import React, { createContext, useState, ReactNode, useContext } from "react";

// export interface User {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// interface UserContextProps {
//   users: User[];
//   addUser: (user: User) => void;
//   deleteUser: (key: string) => void;
//   updateUser: (user: User) => void;
// }

// const initialUsers: User[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

// const defaultContextValue: UserContextProps = {
//   users: initialUsers,
//   addUser: () => {},
//   deleteUser: () => {},
//   updateUser: () => {},
// };

// export const UserContext = createContext<UserContextProps>(defaultContextValue);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [users, setUsers] = useState<User[]>(initialUsers);

//   const addUser = (user: User) => {
//     setUsers((prevUsers) => [...prevUsers, user]);
//   };

//   const deleteUser = (key: string) => {
//     setUsers((prevUsers) => prevUsers.filter((user) => user.key !== key));
//   };

//   const updateUser = (updatedUser: User) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.key === updatedUser.key ? updatedUser : user
//       )
//     );
//   };

//   return (
//     <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   return useContext(UserContext);
// };
// Ở cuối mỗi file, thêm:
export {};
