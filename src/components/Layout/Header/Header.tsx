import Image from "next/image";
import { useFavorite } from "../../../../context/FavoriteContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../../../interfaces";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { favoriteCount, setFavoriteCount, cartLenght, setCartLenght } =
    useFavorite();
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/cart/")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setCartLenght(data.length);
      });
  }, [cartLenght]);

  useEffect(() => {
    setFavoriteCount(Number(localStorage.getItem("fovoriteCounter")));
  }, []);

  return (
    <header className="container mx-auto pt-[3px] pb-[7px] pr-[31.31px]">
      <nav className="flex items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={105} height={50} />
        </Link>
        <div className="flex flex-grow items-center ml-[65px]">
          <Image
            src="/phone-model.svg"
            alt="phone-model"
            width={15}
            height={21}
          />
          <p className="ml-[15px] mr-[5px]">Выбрать модель телефона</p>
          <Image src="/arrow.svg" alt="arrow" width={8} height={5} />
        </div>
        <div className="flex items-center gap-[45px]">
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/favorites")}
          >
            <Image src="/favorite.svg" alt="favorite" width={22} height={20} />
            <p className="bg-[#FFA542] absolute -top-2 -right-[10.91px] rounded-full text-white pl-[3.51px] pr-[2.89px] text-[15px] leading-[18.29px] text-center font-medium">
              {favoriteCount}
            </p>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <Image src="/cart.svg" alt="cart" width={23.2} height={23.2} />
            <p className="bg-[#FFA542] absolute -top-2 -right-[10.91px] rounded-full text-white pl-[3.51px] pr-[2.89px] text-[15px] leading-[18.29px] text-center font-medium">
              {cartLenght}
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};
