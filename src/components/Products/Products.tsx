"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFavorite } from "../../../context/FavoriteContext";
import { useRouter } from "next/navigation";
import { Case, Product } from "../../../interfaces";

export const Products = () => {
  const [cases, setCases] = useState<Case[] | null>(null);
  const [headphones, setHeadphones] = useState<Product[] | null>(null);
  const [airphones, setAirphones] = useState<Product[] | null>(null);
  const { setFavoriteCount } = useFavorite();

  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/case")
      .then((res) => res.json())
      .then((data) => setCases(data));
    fetch("http://localhost:8000/headphones")
      .then((res) => res.json())
      .then((data) => setHeadphones(data));
    fetch("http://localhost:8000/airphones")
      .then((res) => res.json())
      .then((data) => setAirphones(data));
  }, []);

  useEffect(() => {
    const totalFavoriteCount =
      (headphones?.filter((item) => item.isFavorite).length || 0) +
      (airphones?.filter((item) => item.isFavorite).length || 0);

    localStorage.setItem("fovoriteCounter", String(totalFavoriteCount));

    const favoriteFromStorage = localStorage.getItem("fovoriteCounter");

    setFavoriteCount(Number(favoriteFromStorage));
  }, [headphones, airphones, setFavoriteCount]);

  const onFavoriteClickHandler = async (id: string) => {
    try {
      setHeadphones((prevHeadphones) =>
        prevHeadphones
          ? prevHeadphones.map((headphone) =>
              headphone.id === id
                ? { ...headphone, isFavorite: !headphone.isFavorite }
                : headphone
            )
          : null
      );

      fetch(`http://localhost:8000/headphones/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isFavorite: !headphones?.find((headphone) => headphone.id === id)
            ?.isFavorite,
        }),
      });
    } catch (error) {}
  };

  const onFavoriteClickHandler2 = async (id: string) => {
    try {
      setAirphones((prevAirphones) =>
        prevAirphones
          ? prevAirphones.map((airphone) =>
              airphone.id === id
                ? { ...airphone, isFavorite: !airphone.isFavorite }
                : airphone
            )
          : null
      );

      fetch(`http://localhost:8000/airphones/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isFavorite: !airphones?.find((airphone) => airphone.id === id)
            ?.isFavorite,
        }),
      });
    } catch (error) {}
  };

  return (
    <div>
      <p className="text-[#838383] text-xl leading-6 font-semibold mb-5">
        Чехлы
      </p>
      <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {cases?.map((i) => {
          return (
            <div
              key={i.id}
              className="pb-[49.65px] pt-[25px] w-full flex-shrink bg-white rounded-[30px]"
            >
              <Image
                src={i.path}
                alt="img"
                width={151}
                height={292}
                className="mx-auto"
              />
              <p className="text-[#1C1C27] text-[17px] leading-[20.72px] font-semibold mx-auto text-center mt-5">
                {i.title}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-[#838383] text-xl leading-6 font-semibold mt-[30px] mb-5">
        Наушники
      </p>
      <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {headphones?.map((i) => {
          return (
            <div
              key={i.id}
              className="relative cursor-pointer pb-[32.65px] pt-[15.1px] pl-[21.96px] pr-[21px] bg-white rounded-[30px] min-w-[350px] min-h-[407.65px] hover:scale-105 transition-all"
            >
              <Image
                src={
                  i.isFavorite
                    ? "/picked-favorite.svg"
                    : "/not-picked-favorite.svg"
                }
                alt="favorite"
                width={20}
                height={18.48}
                className="absolute left-[22px] top-[15.35px] cursor-pointer"
                onClick={() => onFavoriteClickHandler(i.id)}
              />
              <div onClick={() => router.push(`/product/headphones/${i.id}`)}>
                <div className="relative w-[219.61px] h-[237.45px] mx-auto">
                  <Image src={i.path} alt="img" fill />
                </div>
                <div className="flex items-center justify-between mt-[54.45px]">
                  <p className="text-[#1C1C27] text-[17px] leading-[20.72px] font-semibold">
                    {i.title}
                  </p>
                  <p className="text-[#FFA542] text-[17px] leading-[20.72px] font-semibold">
                    {i.price} ₸
                  </p>
                </div>
                <div className="flex items-center gap-2.5 mt-[25px]">
                  <Image
                    src="/rate.png"
                    alt="rate"
                    width={23.33}
                    height={21.96}
                  />
                  <p className="text-[#838383] text-[17px] leading-[20.72px] font-semibold">
                    {i.rate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[#838383] text-xl leading-6 font-semibold mt-[30px] mb-5">
        Беспроводные наушники
      </p>
      <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {airphones?.map((i) => {
          return (
            <div
              key={i.id}
              className="relative cursor-pointer pb-[32.65px] pt-[15.1px] pl-[21.96px] pr-[21px] bg-white rounded-[30px] min-w-[350px] min-h-[407.65px] hover:scale-105 transition-all"
            >
              <Image
                src={
                  i.isFavorite
                    ? "/picked-favorite.svg"
                    : "/not-picked-favorite.svg"
                }
                alt="favorite"
                width={20}
                height={18.48}
                className="absolute left-[22px] top-[15.35px] cursor-pointer"
                onClick={() => onFavoriteClickHandler2(i.id)}
              />
              <div onClick={() => router.push(`product/airphones/${i.id}`)}>
                <div className="relative w-[219.61px] h-[237.45px] mx-auto">
                  <Image src={i.path} alt="img" fill />
                </div>
                <div className="flex items-center justify-between mt-[54.45px]">
                  <p className="text-[#1C1C27] text-[17px] leading-[20.72px] font-semibold">
                    {i.title}
                  </p>
                  <p className="text-[#FFA542] text-[17px] leading-[20.72px] font-semibold">
                    {i.price} ₸
                  </p>
                </div>
                <div className="flex items-center gap-2.5 mt-[25px]">
                  <Image
                    src="/rate.png"
                    alt="rate"
                    width={23.33}
                    height={21.96}
                  />
                  <p className="text-[#838383] text-[17px] leading-[20.72px] font-semibold">
                    {i.rate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
