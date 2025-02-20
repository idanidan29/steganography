"use client";

import React, { useState } from "react";
import { FileUpload } from "./ui/file-upload";
import { EncryptButton } from "./EncryptButton ";
import { SliderToggle } from "./ui/SliderToggle";
import { RiLockPasswordFill } from "react-icons/ri";

export const Encoder = () => {
  const [selected, setSelected] = useState<"Encrypt" | "Decrypt">("Encrypt");

  return (
    <div className="flex flex-col items-center justify-center mx-auto bg-white shadow-lg rounded-lg p-6 w-[600px]">
      <div className="relative w-full ">
        <input
          type="text"
          className="my-4 w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your password"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
          <RiLockPasswordFill />
        </div>
      </div>

      <FileUpload />
      <EncryptButton />
    </div>
  );
};
