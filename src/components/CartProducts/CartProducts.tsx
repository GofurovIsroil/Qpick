"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../interfaces";
import Image from "next/image";
import { useFavorite } from "../../../context/FavoriteContext";
import Link from "next/link";

const CartProducts = () => {
  const [cart, setCart] = useState<Product[] | null>(null);
  const { setCartLenght } = useFavorite();

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, []);

  const deleteFromCartClickHandler = async (id: string) => {
    try {
      await fetch("http://localhost:8000/cart/" + id, {
        method: "DELETE",
      });
      setCart((prevCart) => prevCart?.filter((item) => item.id !== id) || null);

      const updatedCart = await fetch("http://localhost:8000/cart/").then(
        (res) => res.json()
      );
      setCartLenght(updatedCart.length);
    } catch (error) {
      console.error(error);
    }
  };

  return cart?.length !== 0 && cart !== null ? (
    <div className="mt-[29px] container mx-auto mb-[106px]">
      <h2 className="text-[#1C1C27] text-xl leading-[24.38px] font-semibold">
        Корзина
      </h2>

      <div className="flex gap-[127px] mt-[13px]">
        <div className="flex flex-col gap-6">
          {cart !== null &&
            cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[30px] p-5 flex flex-col min-w-[633px] relative"
                >
                  <div className="flex items-center gap-[23px]">
                    <Image
                      src={item.path}
                      alt="product"
                      width={146}
                      height={136}
                    />
                    <div className="flex flex-col gap-3">
                      <p className="text-[#1C1C27] text-[17px] leading-[20.72px] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[#AAAAAA] text-[15px] leading-[18.29px] font-semibold">
                        {item.price} ₸
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[17px]">
                    <div className="flex  gap-[23px] items-center">
                      <button className="bg-[#FFCE7F] rounded-full text-white w-[35px] h-[30px]">
                        -
                      </button>
                      1
                      <button className="bg-[#FFCE7F] rounded-full text-white w-[35px] h-[30px]">
                        +
                      </button>
                    </div>
                    <p className="text-[#1C1C27] text-[15px] leading-[18.29px] font-semibold">
                      {item.price} ₸
                    </p>
                  </div>
                  <Image
                    src="/trash.svg"
                    alt="trash"
                    width={19.93}
                    height={17}
                    className="absolute top-[18px] right-[28.13px] cursor-pointer"
                    onClick={() => deleteFromCartClickHandler(item.id)}
                  />
                </div>
              );
            })}
          <div className="bg-white rounded-[30px] p-5 flex flex-col min-w-[633px] relative">
            <h2 className="text-black text-xl leading-[24.38px] font-semibold">
              Доставка
            </h2>
            <div className="relative w-full h-[174px] mt-[17px]">
              <Image src="/map.png" alt="map" fill />
            </div>
            <div className="flex items-center justify-between mt-[18px]">
              <div className="flex items-center gap-[11.72px]">
                <Image
                  src="/delivery.svg"
                  alt="delivery"
                  width={21.1}
                  height={13}
                />
                <p className="text-black text-[15px] leading-[18.29px] font-semibold">
                  Доставка курьером
                </p>
              </div>
              <p className="text-[#1C1C27] text-[15px] leading-[18.29px] font-semibold">
                499 ₸
              </p>
            </div>
            <Image
              src="/arrow-down.svg"
              alt="arrow-down"
              width={14.7}
              height={8}
              className="absolute bottom-6 left-2/4 translate-x-[-50%]"
            />
          </div>
        </div>
        {cart !== null && (
          <div className="bg-white rounded-[30px] h-fit w-full max-w-[550px]">
            <p className="p-5 flex items-center justify-between text-black text-[15px] leading-[18.29px] font-medium">
              ИТОГО{" "}
              <span>
                {cart?.reduce((acc, item) => acc + item.price, 0) || 0} ₸
              </span>
            </p>
            <div className="bg-[#101010] rounded-[20px] overflow-hidden">
              <button className="p-5 text-white text-[17px] leading-[20.72px] font-semibold text-center w-full transition-all hover:bg-orange-500">
                Перейти к оформлению
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="mt-[29px] container mx-auto mb-[106px] flex flex-col">
      <Image
        src="/empty-cart.svg"
        alt="empty-cart"
        width={409.88}
        height={315}
        className="mx-auto"
      />
      <h2 className="text-[#101010] text-[30px] leading-[36.57px] font-medium text-center mt-[30px]">
        Корзина пуста
      </h2>
      <p className="text-[#838383] text-xl leading-[27.32px] font-semibold text-center">
        Но это никогда не поздно исправить :)
      </p>
      <button className="min-w-[540px] mt-[30px] mx-auto bg-[#101010] rounded-[20px] text-white p-5 text-xl leading-[24.38px] font-semibold">
        <Link href="/">В каталог товаров</Link>
      </button>
    </div>
  );
};

export default CartProducts;
