import Image from "next/image";

import Button from "@/components/Ui/Button"
import Slider from "@/components/Slider/Slider"

//images
import Lake from "public/assets/images/place-1.png";
import Montain from "public/assets/images/place-2.png";
import Beach from "public/assets/images/place-3.png";

import Description from "../Description/Description";
import Difference from "../Description/Difference";
import Inspiration from "../Description/Inspiration";


export default function Main() {
    return (
        <>
            <Description />

            <div className="w-screen sm:w-full h-full flex flex-col sm:flex-row mt-8 p-3 md:px-12 justify-between gap-3 items-center">
                <div className="w-full sm:w-[747px] h-full cursor-pointer">
                    <Image
                        src={Lake}
                        width={747}
                        height={523}
                        alt=""
                    />
                </div>
                <div className="flex w-full sm:w-[389px] h-full">
                    <Image
                        src={Montain}
                        width={389}
                        height={523}
                        alt=""
                    />
                </div>
            </div>

            <div className="flex w-full sm:w-full px-4 md:px-12 flex-col sm:flex-row justify-between sm:mt-8 mb-8 gap-2">
                <div className="w-full sm:w-1/2 mt-2 sm:mt-20 flex flex-col gap-2 ">
                    <Difference />
                </div>
                <div className="h-full w-full sm:w-[582px]">
                    <div className=" w-full h-full">
                        <Image
                            src={Beach}
                            width={582}
                            height={624}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="relative w-screen sm:w-full md:px-12 -top-48 md:-top-56 md:left-32 sm:justify-normal flex justify-center">
                <div className="absolute z-100 bg-white w-[353px] md:w-[766px] rounded shadow-lg p-8">
                    <p className="sm:text-sm text-[10px]">Acreditamos que viajar é uma forma de conectar-se com a natureza e consigo mesmo. Nossas viagens não oferecem apenas aventuras emocionantes, mas também proporcionam momentos de reflexão, inspiração e rejuvenescimento.</p>
                </div>
            </div>

            <div className="w-screen bg-black h-[375px] text-white text-center flex flex-col items-center justify-center">
                <Inspiration />
                {/* <h1 className="sm:text-3xl text-[16px] font-bold sm:leading-9 w-full  sm:w-[1100px]">“Como a literatura, o amor e a dor, as viagens são uma bela ocasião para nos encontrarmos com nós próprios”</h1>
                <p className="text-sm sm:text-lg">-Marguerite Yourcenar</p> */}
            </div>

            <Slider></Slider>
        </>
    )
}