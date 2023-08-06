import Image from "next/image";
import NavBar from "../Nav/Nav";

//images 
import Bgheader from "/public/assets/images/bg.png"
import Button from "@/components/Ui/Button"
import { ArrowIcon } from "../../../public/assets/svg/arrow";



export default function Header() {
    return(
        <header className="w-screen h-[760px] ">
            <div className="relative h-[760px]">
                <div className="absolute -top-[100px] w-full h-full head z-10 flex items-center justify-center text-white">
                    <div className="text-center w-[700px] flex flex-col items-center gap-2">
                        <h1 className="text-6xl uppercase font-bold">EXPLORE O MUNDO COM A GENTE!</h1>
                        <p>Mergulhe nesse mundo maravilhoso e descubra destinos fascinantes com a nossa agência. Somos apaixonados por viagens que proporcionaram conexões profundas com a natureza, aventuras e momentos inesquecíveis.</p>
                        <Button variant="submit" icon={<ArrowIcon />}>Explorar</Button>
                    </div>
                </div>
            </div>
            <NavBar />
        </header>
    )
}