"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users2,
  Mail,
  Instagram,
  MapPin,
  BookOpen,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LAB = {
  name:
    "LabVector – Laboratório de Ciência, Tecnologia e Modelagem em Ecologia e Vetores",
  tagline:
    "Ciência aplicada à vigilância entomológica, modelagem espacial e inovação em saúde pública.",
  email: "labvector.ifma@gmail.com",
  address1:
    "Instituto Federal do Maranhão (IFMA) - Campus Bacabal, Maranhão, Brasil",
  address2: "Avenida Governador João Alberto S/N - Cep: 6570-000. Bacabal, MA.",
  instagram: "https://instagram.com/lab_vector",
  parceiro: "https://instagram.com/modelaciencia",
  site: "https://labvector.com.br",
  lattesFrancisco: "http://lattes.cnpq.br/0681510050662343",
  orcidFrancisco: "https://orcid.org/0000-0001-9013-3824",
  lattesMarcelo: "http://lattes.cnpq.br/2055982373761884",
};

const artigo = {
  titulo:
    "Changes in the malaria transmission profile in a low-endemic area of the Brazilian Amazon: a cause for concern",
  revista: "Rev. Inst. Med. Trop. São Paulo (2025)",
  doi: "https://doi.org/10.1590/S1678-9946202567070",
  autores:
    "Oliveira-Neto, F. M.; Albuquerque, H. G.; Silva, A. R.; Gonçalves, E. G. R.; Suárez-Mutis, M. C.",
};

const projetos = [
  {
    titulo:
      "EpiStats: aplicativo multiplataforma para análise estatística e epidemiológica",
    descricao:
      "O projeto EpiStats tem como objetivo criar um aplicativo multiplataforma para análise estatística com foco em dados epidemiológicos. Desenvolvido em Python, integra bibliotecas como NumPy, Pandas, SciPy e Seaborn para gerar resultados, gráficos e relatórios automatizados, com ênfase no ensino e na prática da estatística aplicada.",
    periodo: "2025–2026",
  },
  {
    titulo: "Análise geoespacial da incidência de dengue em Bacabal (MA)",
    descricao:
      "Mapeamento da incidência de dengue (2018–2024) em Bacabal (MA), utilizando variáveis ambientais, climáticas e socioeconômicas. Técnicas: Índice de Moran, Kernel Density e modelagem espacial (GLM/GWR/INLA) para identificar áreas de risco e apoiar a vigilância.",
    periodo: "2025–2026",
  },
  {
    titulo:
      "Modelagem espacial para auxílio na predição e controle de queimadas no Maranhão",
    descricao:
      "Sensoriamento remoto, SIG e aprendizado de máquina para mapear áreas suscetíveis a queimadas e compreender impactos ambientais. Modelos preditivos para mitigação de riscos e suporte a políticas públicas ambientais no estado.",
    periodo: "2025–2027",
  },
  {
    titulo:
      "Impactos ambientais e agravos respiratórios em áreas com queimadas",
    descricao:
      "Relação entre queimadas e aumento de agravos respiratórios em populações expostas. Integra dados ambientais e epidemiológicos para correlacionar poluentes com casos e apoiar estratégias de prevenção em saúde pública.",
    periodo: "2025–2026",
  },
];

export default function LabVector() {
  return (
    <div className="min-h-screen bg-[#0B3D2E] text-white">
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(1.3); }
        }
        .pulse-dot { animation: pulse 1.8s infinite; }

        .img-container {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 128, 0, 0.4);
          transition: transform 0.4s ease, box-shadow 0.3s ease;
        }
        .img-container:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(0, 255, 128, 0.2);
        }
        .img-container img {
          transition: transform 0.6s ease;
        }
        .img-container:hover img {
          transform: scale(1.1);
        }
        .img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: #b5e7c5;
          font-size: 0.75rem;
          font-style: italic;
          text-align: center;
          padding: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .img-container:hover .img-caption {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .img-caption {
            opacity: 1;
          }
        }
        .team-photo {
          transition: all 0.4s ease-in-out;
        }
        .team-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 255, 128, 0.3);
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0B3D2E]/90 border-b border-green-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo LabVector"
              className="h-20 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
            />
            <span className="font-semibold text-xl">LabVector</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="hover:text-green-300">Sobre</a>
            <a href="#publicacoes" className="hover:text-green-300">Publicações</a>
            <a href="#projetos" className="hover:text-green-300">Projetos</a>
            <a href="#softwares" className="hover:text-green-300">Softwares</a>
            <a href="#equipe" className="hover:text-green-300">Equipe</a>
            <a href="#contato" className="hover:text-green-300">Contato</a>
          </nav>
        </div>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden">
        <motion.img
          src="/banner.png"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "brightness(0.4)" }}
        />
        <div className="absolute inset-0 bg-[#0B3D2E]/60" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <img src="/logo.png" alt="Logo LabVector" className="mx-auto h-52 w-auto mb-8 drop-shadow-[0_0_24px_rgba(255,255,255,0.35)]" />
          <h1 className="text-4xl font-bold mb-3">{LAB.name}</h1>
          <p className="text-green-100 mb-6 text-lg">{LAB.tagline}</p>
          <p className="text-green-100 mb-8 text-justify leading-relaxed">
            O LabVector é um espaço dedicado à pesquisa aplicada em ecologia,
            modelagem espacial, saúde pública e vigilância entomológica.
            Desenvolvemos projetos que integram ciência, tecnologia e inovação
            para compreender e prever padrões ambientais e epidemiológicos.
          </p>
          <Badge className="bg-green-600 text-white text-sm px-5 py-2 rounded-full shadow-lg">
            Ciência • Ecologia • Inovação • Modelagem • Geoprocessamento • Vigilância
          </Badge>
        </motion.div>
      </section>

      {/* PUBLICAÇÕES */}
      <section id="publicacoes" className="bg-[#145A32] py-16 border-y border-green-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="text-green-300" /> Publicações
          </h2>
          <Card className="rounded-2xl bg-[#0B3D2E] border border-green-700">
            <CardHeader>
              <CardTitle className="text-white">{artigo.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3 text-green-200">{artigo.autores}</p>
              <p className="text-sm italic mb-4 text-green-300">{artigo.revista}</p>
              <Button asChild size="sm" variant="outline" className="border-green-400 text-white">
                <a href={artigo.doi} target="_blank">Acessar artigo completo</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Lightbulb className="text-green-300" /> Projetos de Pesquisa
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <Card key={i} className="rounded-2xl bg-[#145A32] border border-green-700 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-white">{p.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2 text-green-100">{p.descricao}</p>
                <p className="text-xs text-green-300">Período: {p.periodo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
            {/* SOFTWARES e APLICAÇÕES */}
      <section id="softwares" className="bg-[#0B3D2E] py-20 border-t border-green-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
            <Laptop className="text-green-300" /> Softwares e Aplicações
          </h2>

          {/* EpiStats */}
          <Card className="mx-auto max-w-xl rounded-2xl bg-[#145A32] border border-green-700 hover:shadow-md mb-16">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-2">
                <CardTitle className="text-2xl text-white">EpiStats</CardTitle>
                <div className="h-3 w-3 rounded-full bg-green-400 pulse-dot" />
              </div>
              <p className="text-green-200 text-sm italic">Em desenvolvimento</p>
            </CardHeader>
            <CardContent>
              <p className="text-green-100 mb-6 text-sm">
                O <strong>EpiStats</strong> é um software multiplataforma voltado à análise estatística e
                epidemiológica. Em breve estará disponível para download, oferecendo análises automatizadas,
                testes estatísticos, regressões e relatórios interativos.
              </p>
              <Button disabled className="bg-green-700 text-white opacity-80 cursor-not-allowed">
                Em breve para download
              </Button>
            </CardContent>
          </Card>

          {/* Green Planet */}
          <Card className="mx-auto max-w-5xl rounded-2xl bg-[#145A32] border border-green-700 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-3 flex items-center justify-center gap-2">
                🎮 Green Planet – Quando jogar é aprender
              </CardTitle>
              <p className="text-green-200 text-sm italic">
                Desenvolvido em parceria com o LDESIAA e o Fábrica de Inovação – IFMA Campus Bacabal.
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-green-100 mb-6 text-justify leading-relaxed text-sm">
                O <strong>Green Planet</strong> é um jogo educacional criado na plataforma Unity que aborda temas como
                <em> coleta seletiva</em>, <em> reflorestamento</em>, <em> conservação da água</em>, <em> energia limpa</em> e <em> poluição</em>.
                Testes com estudantes do IFMA demonstraram aumento do conhecimento ambiental e engajamento em práticas sustentáveis.
              </p>

              <h3 className="text-green-200 font-semibold mb-4 text-lg">Galeria de imagens do jogo</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {[
                  { file: "telainicial.png", caption: "Tela inicial do jogo Green Planet, com o menu principal e logotipo." },
                  { file: "fase1.JPG", caption: "Primeira fase: coleta seletiva e separação de resíduos." },
                  { file: "fase2.JPG", caption: "Segunda fase: reflorestamento e recuperação de áreas degradadas." },
                  { file: "fase3.JPG", caption: "Terceira fase: combate à poluição e preservação dos recursos hídricos." },
                  { file: "telafinal.JPG", caption: "Tela final do jogo, com a mensagem de conclusão e pontuação do jogador." },
                  { file: "alunosjogando.jpeg", caption: "Alunos testando o jogo Green Planet durante atividades educacionais." },
                ].map((img, i) => (
                  <div key={i} className="img-container group">
                    <a href={`/images/greenplanet/${img.file}`} target="_blank" className="block">
                      <img
                        src={`/images/greenplanet/${img.file}`}
                        alt={img.caption}
                        className="h-40 w-full object-cover rounded-xl transition-transform duration-500 ease-in-out"
                      />
                      <div className="img-caption">{img.caption}</div>
                    </a>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-green-600 text-white hover:bg-green-500">
                <a href="/downloads/greenplanet.zip" download>
                  Baixar jogo Green Planet
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="bg-[#145A32] border-y border-green-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Users2 className="text-green-300" /> Equipe
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Francisco */}
            <Card className="rounded-2xl bg-[#0B3D2E] border border-green-700 text-center">
              <CardHeader>
                <img
                  src="/images/equipe/francisco.jpg"
                  alt="Francisco Marques de Oliveira Neto"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/150/0B3D2E/FFFFFF?text=Sem+Foto')
                  }
                  className="team-photo mx-auto mb-4 h-32 w-32 rounded-full object-cover border-2 border-green-500 shadow-lg"
                />
                <CardTitle className="text-white text-lg">Francisco Marques de Oliveira Neto</CardTitle>
                <p className="text-green-300 text-sm mt-1">Coordenador do LabVector</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm mb-4 text-green-200 list-disc list-inside text-left space-y-1">
                  <li>Doutorando em Medicina Tropical (Fiocruz)</li>
                  <li>Mestre em Desenvolvimento e Meio Ambiente (UFPI)</li>
                  <li>Licenciado em Ciências Biológicas (UFPI)</li>
                </ul>
                <div className="flex justify-center gap-4 text-sm">
                  <a href={LAB.lattesFrancisco} target="_blank" className="underline text-green-300">
                    Lattes
                  </a>
                  <a href={LAB.orcidFrancisco} target="_blank" className="underline text-green-300">
                    ORCID
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Marcelo */}
            <Card className="rounded-2xl bg-[#0B3D2E] border border-green-700 text-center">
              <CardHeader>
                <img
                  src="/images/equipe/marcelo.jpg"
                  alt="Marcelo Eugênio de Castro Gonçalves"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/150/0B3D2E/FFFFFF?text=Sem+Foto')
                  }
                  className="team-photo mx-auto mb-4 h-32 w-32 rounded-full object-cover border-2 border-green-500 shadow-lg"
                />
                <CardTitle className="text-white text-lg">Marcelo Eugênio de Castro Gonçalves</CardTitle>
                <p className="text-green-300 text-sm mt-1">Pesquisador associado</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm mb-4 text-green-200 list-disc list-inside text-left space-y-1">
                  <li>Especialista em Engenharia de Software (CEUT)</li>
                  <li>Especialista em Docência do Ensino Superior (FACID)</li>
                  <li>Bacharel em Sistemas de Informação (FACID)</li>
                  <li>Licenciando em Informática (IFPI)</li>
                </ul>
                <div className="flex justify-center gap-4 text-sm">
                  <a href={LAB.lattesMarcelo} target="_blank" className="underline text-green-300">
                    Lattes
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Mail className="text-green-300" /> Contato
        </h2>
        <p className="mb-2 flex items-center gap-2 text-green-100">
          <MapPin className="inline h-4 w-4 text-green-300" /> {LAB.address1}
        </p>
        <p className="mb-6 text-green-100">{LAB.address2}</p>
        <p className="mb-2">
          <Mail className="inline h-4 w-4 text-green-300 mr-2" />{' '}
          <a href={`mailto:${LAB.email}`} className="underline text-green-300">
            {LAB.email}
          </a>
        </p>
        <p className="mb-2">
          <Instagram className="inline h-4 w-4 text-green-300 mr-2" />{' '}
          <a href={LAB.instagram} target="_blank" className="underline text-green-300">
            @lab_vector
          </a>
        </p>
        <p className="text-sm text-green-300">
          Parceiro:{' '}
          <a href={LAB.parceiro} target="_blank" className="underline text-green-400">
            @modelaciencia
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-800 py-6 text-sm bg-[#0B3D2E]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo LabVector" className="h-14 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
            <span className="text-green-200">
              © {new Date().getFullYear()} LabVector. Todos os direitos reservados.
            </span>
          </div>
          <a href={LAB.site} className="text-green-300 hover:text-white">
            {LAB.site.replace('https://', '')}
          </a>
        </div>
      </footer>
    </div>
  );
}