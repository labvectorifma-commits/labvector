"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Props = {
  LAB: {
    name: string;
    tagline: string;
  };
};

export default function SobreSection({ LAB }: Props) {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  // mede a altura real da viewport e atualiza ao redimensionar / girar o aparelho
  useEffect(() => {
    const update = () => setWindowHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = windowHeight > 0 && windowHeight < 700;
  const titleSize = isMobile ? "text-2xl" : "text-4xl";
  const taglineSize = isMobile ? "text-base" : "text-lg";
  const descriptionSize = isMobile ? "text-sm" : "text-base";

  return (
    <section
      id="sobre"
      style={{ height: windowHeight ? `${windowHeight}px` : "100vh" }}
      className="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* imagem de fundo animada */}
      <motion.img
        src="/banner.png"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "brightness(0.45)" }}
      />

      {/* camada de cor sobre o banner */}
      <div className="absolute inset-0 bg-[#0B3D2E]/60" />

      {/* conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-3"
      >
        {/* logo */}
        <img
          src="/logo.png"
          alt="Logo LabVector"
          className="mx-auto mb-6 h-28 w-auto sm:h-40 md:h-52 drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
        />

        {/* nome do laboratório */}
        <h1 className={`${titleSize} font-bold mb-2`}>{LAB.name}</h1>

        {/* subtítulo */}
        <p className={`text-green-100 mb-4 ${taglineSize}`}>{LAB.tagline}</p>

        {/* descrição */}
        <p
          className={`text-green-100 mb-6 ${descriptionSize} leading-relaxed text-justify`}
        >
          O LabVector é um espaço dedicado à pesquisa aplicada em ecologia,
          modelagem espacial, saúde pública e vigilância entomológica.
          Desenvolvemos projetos que integram ciência, tecnologia e inovação
          para compreender e prever padrões ambientais e epidemiológicos.
        </p>

        {/* selo temático */}
        <Badge className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-full shadow-md">
          Ciência • Ecologia • Inovação • Modelagem • Geoprocessamento •
          Vigilância
        </Badge>
      </motion.div>
    </section>
  );
}