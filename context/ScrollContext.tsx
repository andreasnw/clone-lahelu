import React, { createContext, useRef, ReactNode } from "react";
import { Animated } from "react-native";

interface ScrollContextType {
  scrollY: Animated.Value;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollY: new Animated.Value(0),
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
