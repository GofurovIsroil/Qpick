import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="relative bg-[#101010] rounded-[30px] pt-[58px] pb-[65px] px-[50px] overflow-hidden">
      <h2 className="text-white text-3xl text-center font-semibold w-[643px]">
        Аксессуары для
        <br />
        Iphone 13 Pro Max
      </h2>

      <Image
        className="absolute right-[163px] -bottom-3 object-none"
        src="/banner-background-image.png"
        alt="banner"
        width={321}
        height={226}
      />
    </div>
  );
};
