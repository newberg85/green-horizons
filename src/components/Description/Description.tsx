"use client"

import { useRef } from "react";
import { slideUp, opacity } from './animation';
import { useInView, motion } from "framer-motion";

//button
import Button from "@/components/Ui/Button"

export default function Description() {
    const phrase = "Onde a natureza e a aventura estão unidas";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="flex flex-col sm:flex-row w-screen sm:w-full md:px-12  justify-between">
            <div className="sm:w-1/2 w-full ">
                <p className="mt-0 text-center sm:text-left">
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className="sm:text-[40px] text-[24px] leading-9 font-bold mr-2 mask"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                
            </div>
            <div className="sm:w-1/2 w-full p-2">
                <motion.p variants={opacity} className="sm:text-left text-center text-sm" animate={isInView ? "open" : "closed"}>Acreditamos que a natureza é a maior fonte de inspiração e rejuvenescimento. Ao escolher nossos pacotes de viagens, você terá a oportunidade de se desconectar do estresse do cotidiano e reconectar-se com o mundo natural.</motion.p>
                <div className="flex gap-2 mt-2 justify-center sm:justify-normal">
                        <Button variant="transparent">Lembre-me</Button>
                        <Button variant="proceed">Saiba mais</Button>
                </div>
            </div>
        </div>
    )
}