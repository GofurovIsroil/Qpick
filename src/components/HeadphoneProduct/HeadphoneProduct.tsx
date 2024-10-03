"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../interfaces";
import { useFavorite } from "../../../context/FavoriteContext";

const HeadphoneProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isInCart, setIsInCart] = useState(false);

  const { setCartLenght } = useFavorite();

  useEffect(() => {
    fetch("http://localhost:8000/headphones/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    fetch("http://localhost:8000/cart/" + id)
      .then((res) => res.json())
      .then((data: Product) => {
        if (data.id === id) {
          setIsInCart(true);
        }
      });
  }, [id]);

  const onCartAddClickHandler = async (id: string) => {
    try {
      await fetch("http://localhost:8000/cart", {
        method: "POST",
        body: JSON.stringify({
          title: product?.id === id && product.title,
          path: product?.id === id && product.path,
          id: product?.id === id && product.id,
          price: product?.id === id && product.price,
          rate: product?.id === id && product.rate,
          isFavorite: product?.id === id && product.isFavorite,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsInCart(true);

      const updatedCart = await fetch("http://localhost:8000/cart/").then(
        (res) => res.json()
      );
      setCartLenght(updatedCart.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-[58px]">
      <div className="relative flex flex-col items-center justify-between bg-white rounded-[30px] w-full min-h-[668px] p-[25px] pt-[50px]">
        <Image
          src={
            product?.isFavorite
              ? "/picked-favorite.svg"
              : "/not-picked-favorite.svg"
          }
          alt="favorite"
          className="absolute top-[19.83px] left-6"
          width={22}
          height={21.84}
        />
        <Image
          src="/ldnio.png"
          alt="favorite"
          className="absolute top-[11px] right-[25px]"
          width={86}
          height={53}
        />
        <div>
          <Image
            src={product?.path || ""}
            alt="product"
            width={350}
            height={390}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#1C1C27] text-[25px] leading-[30.48px] font-semibold">
            {product?.title}
          </p>
          <p className="text-[#DF6464] text-[28px] leading-[34.13px] font-semibold">
            {product?.price} ₸
          </p>
        </div>
      </div>
      <div className="mt-[23px] mb-[19px] flex gap-[31px]">
        <div className="rounded-[15px] overflow-hidden bg-[#F9F9F9] w-[75%]">
          <div className="bg-white py-[20.5px] px-[23px] rounded-b-[15px]">
            <p className="text-[#1C1C27] text-[20px] leading-[24.38px] font-semibold">
              Описание и характеристики
            </p>
          </div>
          <div className="px-[23px] py-6">
            <ul className="flex flex-col gap-2.5">
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Активное шумоподавление: Нет
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Вес: 10 гр
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Влагозащита: Нет
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Длина кабеля: 1.2 м
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Комплектация: Наушники
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Материал корпуса: Пластик, резина
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Микрофон: Да
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Назначение: Проводные наушники
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Ответить/закончить разговор: Да
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Разъем наушников: Lightning
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Регулятор громкости: Да
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Тип крепления: Без крепления
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Тип наушников: Вкладыши ("таблетки")
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Тип подключения: Проводное
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Частотный диапазон: 20 Гц - 20000 Гц
              </li>
              <li className="text-[#1C1C27] text-[15px] leading-[18.29px] font-medium">
                Чувствительность: 109 дБ
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] w-[25%]">
          <button className="bg-[#101010] rounded-[10px] py-[13.5px] text-center text-white text-[15px] leading-[18.29px] font-medium shadow-[0px_0px_15px_0px_#00000080] transition-all hover:drop-shadow-2xl">
            Купить!
          </button>
          <button
            className="bg-[#101010] rounded-[10px] py-[13.5px] text-center text-white text-[15px] leading-[18.29px] font-medium shadow-[0px_0px_15px_0px_#00000080] transition-all hover:drop-shadow-2xl disabled:bg-slate-700 disabled:drop-shadow-none disabled:cursor-not-allowed"
            onClick={() => onCartAddClickHandler(product?.id as string)}
            disabled={isInCart}
          >
            {isInCart ? "В корзине" : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneProduct;
