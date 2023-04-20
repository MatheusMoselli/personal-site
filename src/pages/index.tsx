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
            <section id="summary" className="bg-primary h-[80vh] min-h-[500px] p-20 flex">
                <div className="w-[50vw] h-full flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, x: "-50vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-6xl text-right font-bold"
                    >
                        Matheus Foresto Moselli
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0, x: "-50vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-base text-right italic"
                    >
                        Desenvolvedor Full Stack
                    </motion.h3>
                </div>

                <div className="w-[50vw] h-full flex flex-col justify-center items-center">
                    <Image src={astronautImg} alt="astronauta sentado em um planeta" width={350} />
                </div>
            </section>
        </main>
    </>
}
