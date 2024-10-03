import React, { createContext, useContext, useState } from "react";

interface FavoriteContextProps {
  favoriteCount: number;
  setFavoriteCount: React.Dispatch<React.SetStateAction<number>>;
  cartLenght: number;
  setCartLenght: React.Dispatch<React.SetStateAction<number>>;
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined
);

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [cartLenght, setCartLenght] = useState(0);

  return (
    <FavoriteContext.Provider
      value={{ favoriteCount, setFavoriteCount, cartLenght, setCartLenght }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
