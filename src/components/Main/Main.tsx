import Image from "next/image";

import Header from "@/components/Header/Header";
import Button from "@/components/Ui/Button"
import Slider from "@/components/Slider/Slider"

//images
import Lake from "public/assets/images/place-1.png";
import Montain from "public/assets/images/place-2.png";
import Beach from "public/assets/images/place-3.png";


export default function Main() {
    return (
        <>
            <Header />
            <div className="flex flex-col sm:flex-row w-screen sm:w-full md:px-12">
                <div className="sm:w-1/2 w-full">
                    <h1 className="sm:text-[40px] text-[24px] pl-3 pr-3 font-bold leading-9 sm:text-left text-center">Onde a natureza e a aventura estão unidas</h1>
                </div>
                <div className="sm:w-1/2 w-full p-3 sm:p-0">
                    <p className="sm:text-left text-center text-sm">Acreditamos que a natureza é a maior fonte de inspiração e rejuvenescimento. Ao escolher nossos pacotes de viagens, você terá a oportunidade de se desconectar do estresse do cotidiano e reconectar-se com o mundo natural.</p>
                    <div className="flex gap-2 mt-2 justify-center sm:justify-normal">
                        <Button variant="transparent">Lembre-me</Button>
                        <Button variant="proceed">Saiba mais</Button>
                    </div>
                </div>
            </div>

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

            <div className="flex w-screen sm:w-full px-4 md:px-12 flex-col sm:flex-row justify-between sm:mt-8 mb-8">
                <div className="w-full sm:w-1/2 mt-20 flex flex-col gap-2">
                    <h1 className="sm:text-[40px] text-[24px] font-bold leading-9 sm:text-left text-center">O que nos diferencia de outras agências?</h1>
                    <p className="sm:text-left text-center text-sm">Enquanto muitas ofertas oferecem viagens genéricas , nós nos destacamos ao oferecer experiências imersivas na natureza. Trabalhamos com guias especializados que conhecem profundamente os destinos, proporcionando aos nossos clientes uma visão única e privilegiada das maravilhas naturais ao redor do mundo.</p>
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
                <h1 className="sm:text-3xl text-[16px] font-bold sm:leading-9 w-full  sm:w-[1100px]">“Como a literatura, o amor e a dor, as viagens são uma bela ocasião para nos encontrarmos com nós próprios”</h1>
                <p className="text-sm sm:text-lg">-Marguerite Yourcenar</p>
            </div>

            <Slider></Slider>

        </>
    )
}