"use client"

import React, { useState } from 'react'
import { FileUpload } from './ui/file-upload'
import { EncryptButton } from './EncryptButton '
import { SliderToggle } from './ui/SliderToggle'

export const Encoder = () => {
  const [selected, setSelected] = useState("Encrypt");
  
  return (
    <div className="flex flex-col items-center justify-center">
        <div
      className={`grid h-[200px] place-content-center px-4 transition-colors }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
        <FileUpload />
        <EncryptButton />
    </div>

  )
}

