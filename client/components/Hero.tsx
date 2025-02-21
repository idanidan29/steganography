import { motion } from "framer-motion";
import React from "react";

export const Hero = () => {
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
                        Encrypt your password using our unique method.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:ring-4 focus:outline-none sm:w-auto"
                            href="#Encoder"
                        >
                            Encrypt
                        </a>

                        <a
                            className="block w-full rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-400 shadow-md hover:bg-indigo-800 focus:ring-4 focus:outline-none sm:w-auto"
                            href="#"
                        >
                            Decrypt
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
