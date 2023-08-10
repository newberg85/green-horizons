"use client"

import { useRef } from "react";
import { slideUp, opacity, sliderHead } from './animation';
import { useInView, motion } from "framer-motion";

export default function Description() {
    const phrase = "EXPLORE O MUNDO COM A GENTE!";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="flex flex-col sm:flex-colunm w-full sm:w-full md:px-0  justify-between">
            <div className="w-full">
                <p className="mt-0 text-center">
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className="sm:text-6xl text-3xl leading-9 font-bold mr-2 mask"><motion.span variants={sliderHead} initial="initial" custom={index} animate={isInView ? "enter" : ""} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>

            </div>
            <div className=" w-full ">
                <motion.p variants={opacity} className="text-center text-sm" animate={isInView ? "open" : "closed"}>Mergulhe nesse mundo maravilhoso e descubra destinos fascinantes com a nossa agência. Somos apaixonados por viagens que proporcionaram conexões profundas com a natureza, aventuras e momentos inesquecíveis.</motion.p>
            </div>
        </div>
    )
}