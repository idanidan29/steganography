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
                        Encrypt your password using our unique Steganography method.
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
                        Steganography is the practice of concealing information within another medium, 
                        such as an image, audio, or video file. Unlike encryption, which scrambles data 
                        to make it unreadable, steganography hides data in plain sight.
                    </p>
                    <p>
                        This technique is widely used for secure communication, watermarking, and digital forensics. 
                        In our application, we use steganography to embed passwords within images securely.
                    </p>
                </div>
            </DragCloseDrawer>
        </section>
    );
};

export default Hero;
