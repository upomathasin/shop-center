"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full bg-slate-300 ">
      <div className="flex  flex-col justify-center items-center pt-[300px]">
        <h2 className="h2 text-red-500">
          Something went wrong! Please Try Again !
        </h2>

        <button className="font-bold mt-2" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
