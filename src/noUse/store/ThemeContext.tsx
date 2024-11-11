// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface ThemeContextProps {
//   isDark: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [isDark, setIsDark] = useState<boolean>(false);

//   const toggleTheme = () => {
//     setIsDark((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   return context || { isDark: false, toggleTheme: () => {} };
// };
// Ở cuối mỗi file, thêm:
export {};
