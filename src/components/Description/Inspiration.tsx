"use client"
import { useRef } from "react";
import { slideUp, opacity } from './animation';
import { useInView, motion } from "framer-motion";

export default function Description() {
    const phrase = "“Como a literatura, o amor e a dor, as viagens são uma bela ocasião para nos encontrarmos com nós próprios”";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="flex flex-col sm:flex-colunm w-full sm:w-full md:px-0  justify-between">
            <div className="w-full flex justify-center">
                <p className="mt-0 sm:text-center sm:w-[1100px]">
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className="sm:text-3xl text-[16px] sm:leading-9 leading-normal  font-bold mr-2 mask"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>

            </div>
            <div className=" w-full ">
                <motion.p variants={opacity} className="text-sm sm:text-lg" animate={isInView ? "open" : "closed"}>-Marguerite Yourcenar</motion.p>
            </div>
        </div>
    )
}