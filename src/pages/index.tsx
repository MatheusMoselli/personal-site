import Head from 'next/head';
import { motion } from "framer-motion";
import astronautImg from "../../public/astronaut.png";
import Image from 'next/image';

export default function Home() {
    return <>
        <Head>
            <title>Matheus Moselli</title>
        </Head>

        <main> 
            <section id="summary" className="bg-secondary h-[60vh] min-h-[500px] pt-44 px-20 pb-5">
                <div className="flex flex-row">
                    <motion.div 
                        className="w-[50vw] flex flex-col justify-center"
                        initial={{ opacity: 0, x: "-50vw" }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-6xl text-right font-bold">
                            Matheus Foresto Moselli
                        </h2>

                        <h3 className="text-base text-right italic">
                            Desenvolvedor Full Stack
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-[50vw] flex flex-col justify-center items-center"
                    >
                        <Image src={astronautImg} alt="astronauta sentado em um planeta" height={250} />
                    </motion.div>
                </div>
            </section>

            <div className="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
                </svg>
            </div>

            <section id="about-me" className="h-[200vh]">

            </section>
         </main>
    </>
}
