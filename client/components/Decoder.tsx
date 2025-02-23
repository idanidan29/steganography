"use client";

import { useState } from "react";
import { FileUpload } from "./ui/file-upload";
import { DecryptButton } from "./ui/DecryptButton";

export const Decoder = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [decodedPassword, setDecodedPassword] = useState<string | null>(null);

  // Handle file selection from FileUpload component
  const handleFileChange = (selectedFiles: File[]) => {
    setFile(selectedFiles.length > 0 ? selectedFiles[0] : null);
    // Reset any previous decoded password when a new file is selected
    setDecodedPassword(null);
  };

  const handleDecode = async () => {
    if (!file) {
      alert("Please upload an encoded PNG file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Replace with your actual Flask backend URL
      const response = await fetch("https://steganography-yz64.onrender.com/stego/decode", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Decoding failed");
      }

      // Parse the JSON response to get the decoded password
      const data = await response.json();
      setDecodedPassword(data.decoded_password);
    } catch (error) {
      console.error(error);
      alert("Failed to decode the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Decoder" className="mt-7 flex flex-col items-center justify-center mx-auto bg-white shadow-xl border rounded-md p-6 w-full max-w-sm sm:max-w-md md:max-w-lg">
      <div className="flex justify-center items-center min-h-scree">
        <h3 className="mb-3 sm:text-5xl lg:text-4xl font-extrabold text-white bg-indigo-500 bg-clip-text text-transparent">
          Decoder
        </h3>
      </div>
      
      {/* FileUpload component for selecting the encoded image */}
      <FileUpload onChange={handleFileChange} />

      {/* Button to trigger decoding */}
      <DecryptButton onClick={handleDecode} disabled={loading}/>


      {/* Display the decoded password */}
      {decodedPassword && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-lg font-semibold text-indigo-700">Decoded Password:</p>
          <p className="text-base text-indigo-600">{decodedPassword}</p>
        </div>
      )}
    </div>
  );
};
