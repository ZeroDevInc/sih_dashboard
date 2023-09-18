"use client"
import React, { useState, useEffect } from "react";
import People from "./Bookings/page";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 15000);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="mb-5 w-full h-[500px]">
        {isLoading ? (
          <div className="flex justify-center items-center  h-full">
            <div className="loader flex"><Loader /></div>
          </div>
        ) : (
          <img src="./Live.gif" alt="Live" onLoad={handleLoad} />
        )}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-danger text-3xl font-extrabold">LIVE</p>
        </div>
      </div>
      <People />
    </>
  );
}
