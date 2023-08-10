"use client"
import NavBar from "../Nav/Nav";
import Button from "@/components/Ui/Button"
import Explore from "../Description/Explore";

//icon
import { ArrowIcon } from "../../../public/assets/svg/arrow";

export default function Header() {
    return (
        <header className="w-screen sm:h-[700px]  h-screen">
            <div className="relative sm:h-[760px] h-screen">
                <div className="absolute -top-[10px] md:-top-[100px] w-full h-full head z-10 flex items-center justify-center text-white">
                    <div className="text-center w-[700px] flex flex-col items-center gap-2 sm:p-0 p-2">
                        <Explore />
                        {/* <h1 className="sm:text-6xl sm:w-full text-3xl uppercase font-bold">EXPLORE O MUNDO COM A GENTE!</h1>
                        <p className="text-sm">Mergulhe nesse mundo maravilhoso e descubra destinos fascinantes com a nossa agência. Somos apaixonados por viagens que proporcionaram conexões profundas com a natureza, aventuras e momentos inesquecíveis.</p> */}
                        <Button variant="submit" icon={<ArrowIcon />}>Explorar</Button>
                    </div>
                </div>
            </div>
            <NavBar />
        </header>
    )
}