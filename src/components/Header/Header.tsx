"use client"

import Image from "next/image";
import NavBar from "../Nav/Nav";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { CustomEase } from "gsap/dist/CustomEase";
import { slideUp, opacity } from './anim';

//images 
import Bgheader from "/public/assets/images/bg.png"
import Button from "@/components/Ui/Button"
import { ArrowIcon } from "../../../public/assets/svg/arrow";
import { useInView } from "framer-motion";

export default function Header() {
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <header className="w-screen h-[700px] ">
            <div className="relative h-[760px]">
                <div className="absolute -top-[100px] w-full h-full head z-10 flex items-center justify-center text-white">
                    <div className="text-center w-[700px] flex flex-col items-center gap-2 sm:p-0 p-2">
                        <h1 className="sm:text-6xl sm:w-full text-3xl uppercase font-bold">EXPLORE O MUNDO COM A GENTE!</h1>
                        <p className="text-sm">Mergulhe nesse mundo maravilhoso e descubra destinos fascinantes com a nossa agência. Somos apaixonados por viagens que proporcionaram conexões profundas com a natureza, aventuras e momentos inesquecíveis.</p>
                        <Button variant="submit" icon={<ArrowIcon />}>Explorar</Button>
                    </div>
                </div>
            </div>
            <NavBar />
        </header>
    )
}