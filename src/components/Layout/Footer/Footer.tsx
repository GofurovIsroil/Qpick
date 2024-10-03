import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="container mx-auto bg-white rounded-t-[30px] pt-[29px] pl-[29px] pr-[26.9px] pb-[32.48px] flex max-h-[149px] mt-auto">
      <div className="relative w-[85px] h-[30px]">
        <Link href="/">
          <Image
            src="/footer-logo.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>
      <div className="ml-[233px] flex gap-[174px] pt-[4.72px]">
        <ul className="flex flex-col gap-2.5">
          <li className="text-[#000000] text-[17px] leading-[20.72px] font-normal">
            Избранное
          </li>
          <li className="text-[#000000] text-[17px] leading-[20.72px] font-normal">
            Корзина
          </li>
          <li className="text-[#000000] text-[17px] leading-[20.72px] font-normal">
            Контакты
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className="text-[#000000] text-[17px] leading-[20.72px] font-normal">
            Условия сервиса
          </li>
          <ul className="flex items-center gap-[15px] mt-auto">
            <li>
              <Image src="/globe.svg" alt="globe" width={20} height={20} />
            </li>
            <li className="text-[#101010] text-[15px] leading-[18.29px] font-medium">
              Каз
            </li>
            <li className="text-[#FFA542] text-[15px] leading-[18.29px] font-medium">
              Рус
            </li>
            <li className="text-[#101010] text-[15px] leading-[18.29px] font-medium">
              Eng
            </li>
          </ul>
        </ul>
      </div>
      <ul className="flex gap-[18px] items-center h-max ml-auto">
        <li>
          <Image src="/VK.svg" alt="VK" width={30.1} height={20.64} />
        </li>
        <li>
          <Image
            src="/Instagram.svg"
            alt="Instagram"
            width={30.1}
            height={30.1}
          />
        </li>
        <li>
          <Image
            src="/Telegram.svg"
            alt="Telegram"
            width={30.1}
            height={30.1}
          />
        </li>
        <li>
          <Image
            src="/Whatsapp.svg"
            alt="Whatsapp"
            width={30.1}
            height={30.1}
          />
        </li>
      </ul>
    </footer>
  );
};
