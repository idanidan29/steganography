"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

export const FileUpload = ({ onChange }: { onChange?: (files: File[]) => void }) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    if (newFiles.length > 0) {
      setFiles([newFiles[0]]);
      onChange?.([newFiles[0]]);
    }
  };

  const handleClick = () => fileInputRef.current?.click();

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
  });

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        className="p-10 block rounded-lg cursor-pointer w-full border border-gray-300 text-center"
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />

        <p className="font-bold text-lg text-gray-800">Upload file</p>
        <p className="text-gray-600 mt-2">Drag or drop files here or click to upload</p>

        {files.length > 0 ? (
          <div className="mt-4 bg-gray-100 p-4 rounded-md border border-gray-300">
            <p className="text-gray-800 truncate">{files[0].name}</p>
            <p className="text-sm text-gray-600 mt-1">{(files[0].size / 1024 / 1024).toFixed(2)} MB</p>
            <p className="text-sm text-gray-600">Modified {new Date(files[0].lastModified).toLocaleDateString()}</p>
          </div>
        ) : (
          <motion.div className="mt-4 bg-gray-100 flex items-center justify-center h-32 w-32 mx-auto rounded-md border border-gray-300">
            {isDragActive ? (
              <p className="text-gray-700 flex flex-col items-center">
                Drop it
                <IconUpload className="h-6 w-6 text-gray-600" />
              </p>
            ) : (
              <IconUpload className="h-6 w-6 text-gray-600" />
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
