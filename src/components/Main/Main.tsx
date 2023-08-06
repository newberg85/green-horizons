import Header from "@/components/Header/Header";
import Button from "@/components/Ui/Button"


export default function Main() {
    return (
        <>
            <Header />
            <div className="flex w-full px-4 md:px-12">
                <div className="w-1/2">
                    <h1 className="text-[40px] font-bold leading-9">Onde a natureza e a aventura estão unidas</h1>
                </div>
                <div className="w-1/2">
                    <p>Acreditamos que a natureza é a maior fonte de inspiração e rejuvenescimento. Ao escolher nossos pacotes de viagens, você terá a oportunidade de se desconectar do estresse do cotidiano e reconectar-se com o mundo natural.</p>
                    <div className="flex gap-2 mt-2">
                        <Button variant="transparent">Lembre-me</Button>
                        <Button variant="proceed">Saiba mais</Button>
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-col sm:flex-row mt-8 px-4 md:px-12">
                <div className="relative w-1/2 h-[600px]">
                    <div className="absolute w-[747px] h-[523px] img-1 flex cursor-pointer">
                        <h1 className="w-full"></h1>
                    </div>
                </div>

                <div className="relative h-full w-1/2">
                    <div className="absolute w-[389px] h-[523px] img-2 flex right-0">
                        <h1 className="w-full"></h1>
                    </div>
                </div>
            </div>

            <div className="flex w-full px-4 md:px-12 ">
                <div className="w-1/2 mt-20 flex flex-col gap-2">
                    <h1 className="text-[40px] font-bold leading-9">O que nos diferencia de outras agências?</h1>
                    <p>Enquanto muitas ofertas oferecem viagens genéricas , nós nos destacamos ao oferecer experiências imersivas na natureza. Trabalhamos com guias especializados que conhecem profundamente os destinos, proporcionando aos nossos clientes uma visão única e privilegiada das maravilhas naturais ao redor do mundo.</p>
                </div>
                <div className="relative h-[760px] w-1/2">
                    <div className="absolute w-[582px] h-[624px] img-3 flex right-0">
                        <h1 className="w-full"></h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full md:px-12 -top-80 left-32">
                    <div className="absolute z-100 bg-white w-[766px] rounded shadow-lg p-8">
                        <p className="text-sm">Acreditamos que viajar é uma forma de conectar-se com a natureza e consigo mesmo. Nossas viagens não oferecem apenas aventuras emocionantes, mas também proporcionam momentos de reflexão, inspiração e rejuvenescimento.</p>
                    </div>
            </div>

            <div className="w-screen bg-black h-[375px] text-white text-center flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold leading-9 w-full w-[1050px]">“Como a literatura, o amor e a dor, as viagens são uma bela ocasião para nos encontrarmos com nós próprios”</h1>
                <p>-Marguerite Yourcenar</p>
            </div>
        </>
    )
}