"use client"

import React from 'react'
import { FileUpload } from './ui/file-upload'
import { EncryptButton } from './EncryptButton '

export const Encoder = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <FileUpload />
        <EncryptButton />
    </div>

  )
}

