"use client"

import { useRef } from "react";
import { slideUp, opacity } from './animation';
import { useInView, motion } from "framer-motion";

export default function Description() {
    const phrase = "O que nos diferencia de outras agências?";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="flex flex-col sm:flex-colunm w-full sm:w-full md:px-0  justify-between">
            <div className="w-full">
                <p className="mt-0 text-center sm:text-left">
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className="sm:text-[40px] text-[24px] leading-9 font-bold mr-2 mask"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>

            </div>
            <div className=" w-full ">
                <motion.p variants={opacity} className="sm:text-left text-center text-sm" animate={isInView ? "open" : "closed"}>Enquanto muitas ofertas oferecem viagens genéricas , nós nos destacamos ao oferecer experiências imersivas na natureza. Trabalhamos com guias especializados que conhecem profundamente os destinos, proporcionando aos nossos clientes uma visão única e privilegiada das maravilhas naturais ao redor do mundo.</motion.p>
            </div>
        </div>
    )
}