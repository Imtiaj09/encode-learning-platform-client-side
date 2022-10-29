import React from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Privates = () => {
  const course = useLoaderData();

  const { image_url, title, price, time, vat } = course;

  const showCongrats = () => {
    toast.success("Congrats you have successfully purchased.");
  };

  return (
    <div className="flex gap-4 justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
      </div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
            <p className="dark:text-gray-100">Price: {price}$</p>
            <p className="dark:text-gray-100">
              Time: {time}
              <spam className="font-thin">hours</spam>
            </p>
            <p className="dark:text-gray-100">Vat: {vat}$</p>
          </div>
          <button
            onClick={showCongrats}
            type="button"
            className="flex items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Purchase
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Privates;
