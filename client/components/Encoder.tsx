"use client";

import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FileUpload } from "./ui/file-upload";
import { EncryptButton } from "./ui/EncryptButton ";

export const Encoder = () => {
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection from FileUpload component
  const handleFileChange = (selectedFiles: File[]) => {
    setFile(selectedFiles.length > 0 ? selectedFiles[0] : null);
  };

  const handleEncrypt = async () => {
    if (!file || !password) {
      alert("Please enter a password and upload a PNG file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("password", password);
    formData.append("image", file);

    try {
      const response = await fetch("https://steganography-yz64.onrender.com/stego/encode", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Encryption failed");
      }

      // Get the encrypted file blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link to trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "encrypted.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to encrypt the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-7 flex flex-col items-center justify-center mx-auto bg-white shadow-xl border rounded-md p-6 w-full max-w-sm sm:max-w-md md:max-w-lg">
      <div className="flex justify-center items-center min-h-scree">
        <h3 className=" sm:text-5xl lg:text-4xl font-extrabold text-indigo-500 bg-indigo-500 bg-clip-text text-transparent">
          Encoder
        </h3>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          className="my-4 w-full pl-3 pr-10 py-3 bg-transparent placeholder:text-slate-400 text-slate-600 text-base border border-slate-200 rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
          <RiLockPasswordFill className="text-lg" />
        </div>
      </div>

      {/* FileUpload component now passes selected file to Encoder */}
      <FileUpload onChange={handleFileChange} />

      <EncryptButton onClick={handleEncrypt} disabled={loading} />
    </div>
  );
};
