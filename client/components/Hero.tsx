import { motion } from "framer-motion";
import React, { useState } from "react";
import DragCloseDrawer from "@/components/ui/DragCloseDrawer";

export const Hero = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-white text-indigo-900">
            <div className="mx-auto max-w-screen-xl px-6 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h1
                        className="text-4xl font-extrabold sm:text-6xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Save Your Data. 
                        <strong className="font-extrabold text-indigo-500 sm:block">
                            Secure Your Password.
                        </strong>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg text-indigo-500 sm:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    >
                        Over 80% of data breaches are due to weak or stolen passwords.
                        <br />
                        Encrypt your password using Steganography.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:ring-4 focus:outline-none sm:w-auto"
                            href="#Encoder"
                        >
                            Encrypt
                        </a>

                        <button
                            className="block w-full rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-400 shadow-md hover:bg-indigo-800 focus:ring-4 focus:outline-none sm:w-auto"
                            onClick={() => setOpen(true)}
                        >
                            What is Steganography?
                        </button>
                    </div>
                </div>
            </div>
            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className="mx-auto max-w-2xl space-y-4 text-indigo-700">
                    <h2 className="pt-3 text-4xl font-bold text-indigo-800">What is Steganography?</h2>
                    <p>
                        Steganography is the technique of hiding information inside a file, such as an image, audio, or video,
                        without making it obvious. Unlike encryption, which makes data unreadable to outsiders,
                        steganography conceals data in a way that looks completely normal.
                    </p>
                    <p>
                        This method is widely used for secure communication, digital watermarking, and protecting sensitive information.
                        In our application, we use steganography to safely store passwords inside images,
                        keeping them hidden from unauthorized access while still being easily retrievable when needed.
                    </p>
                    <p>
                        Because the hidden data is invisible to the human eye, steganography provides an extra layer of security.
                        Even if someone gains access to the image, they won’t immediately suspect that it contains sensitive information.
                        This makes it a powerful tool for keeping passwords safe and private.
                    </p>
                    <h2 className="pt-3 text-4xl font-bold text-indigo-800">How do I use it?</h2>
                    <p>
                        Using steganography to secure your passwords is simple. Here’s how:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <strong>Choose an image:</strong> Start by selecting an image file. This image will act as the carrier for your password.
                            It’s important to choose a file that looks normal, as the hidden data should remain undetectable.
                        </li>
                        <li>
                            <strong>Enter the password:</strong> Input the password you wish to securely store. This is the information that will be hidden inside the image.
                        </li>
                        <li>
                            <strong>Encrypt the password:</strong> The password is then embedded within the image using our application. You can download the image, now containing the hidden password.
                        </li>
                        <li>
                            <strong>Decrypt the password:</strong> To retrieve your password, simply upload the image again. The application will extract the hidden data, revealing the original password.
                        </li>
                    </ol>
                    <p>
                        The process is secure and ensures that your password is protected in a way that is virtually undetectable to unauthorized users.
                    </p>
                </div>
            </DragCloseDrawer>
        </section>
    );
};

export default Hero;
