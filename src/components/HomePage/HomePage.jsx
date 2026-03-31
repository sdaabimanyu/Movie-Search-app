import React, { useEffect, useState } from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import { Link } from "react-router";

export default function HomePage() {
    
  return (
    <section className="w-screen h-screen bg-black md:px-5">
      <header className="w-full h-[50px] flex justify-between items-center text-white px-4 md:px-10 py-6">
        <h1 className="font-bold">
          LE <span className="text-purple-500">CINEMA</span>
        </h1>
        <div className="hidden lg:flex gap-x-3 text-[14px]">
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Popular</a>
          <a href="">Top Rating</a>
        </div>

        <Link
        to="/SearchPage">
          <input

            type="text"
            placeholder="Search For Movies"
            className="bg-white text-black rounded-full w-60 md:w-[380px] h-[25px] px-[10px] text-[12px] outline-none"
          />
        </Link>
      </header>
      <BannerSlider />
    </section>
  );
}
