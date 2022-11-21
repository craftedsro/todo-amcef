import React, { createContext, useMemo, useState } from "react";
import useCustomEffect from "../hooks/useCustomEffect.hook";
import { StringType, VoidType } from "../components/types";

export interface ThemeContextProps {
  theme: StringType;
  setTheme: (theme: StringType) => VoidType;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "default",
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  value = "default",
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<StringType>(value);

  useCustomEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    applyTheme(storeTheme || "default");
  }, []);

  const applyTheme = (theme: string = "default") => {
    let newTheme = theme;
    const html = document.getElementsByTagName("html")[0];
    localStorage.setItem("theme", theme);
    (html as any).setAttribute("data-theme", newTheme);
  };

  const handleThemeChange = (theme: StringType): VoidType => {
    setTheme(theme);
    applyTheme(theme);
  };

  const val = useMemo(
    () => ({
      theme,
      setTheme: handleThemeChange,
    }),
    [theme, handleThemeChange]
  );

  return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>;
};
