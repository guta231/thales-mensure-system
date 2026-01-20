import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Componente NavBar
function NavBar({ auth }) {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    
    const toggleNavBar = () => {
        setOpenMenuMobile(!openMenuMobile);
    };

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Tecnologia", href: "#tecnologia" },
        { label: "Desenvolvedores", href: "#desenvolvedores" },
    ];

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-xl tracking-tight"> Thales </span>
                    </div>
                    
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-blue-500 transition">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white hover:brightness-110 transition">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="py-2 px-3 border rounded-md hover:border-blue-500 transition">
                                    Entrar
                                </Link>
                                <Link href={route('register')} className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white hover:brightness-110 transition">
                                    Cadastrar
                                </Link>
                            </>
                        )}
                    </div>
                    
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                            {openMenuMobile ? <X/> : <Menu/> }
                        </button>
                    </div>
                </div>

                {openMenuMobile && (
                    <div className="fixed right-0 top-[60px] z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 text-center">
                                    <a href={item.href} className="hover:text-blue-500 transition">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 mt-6">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white hover:brightness-110 transition">
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="py-2 px-3 border rounded-md hover:border-blue-500 transition">
                                        Entrar
                                    </Link>
                                    <Link href={route('register')} className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white hover:brightness-110 transition">
                                        Cadastrar
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

// Componente HeroSection
function HeroSection() {
    return (
        <div id="home" className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Análises de amostras patológicas
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    {" "}com  
 Inteligência Artificial
                </span>
            </h1>

            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Para profissionais da saúde, esta é uma solução desenvolvida para a DASA no Challenge FIAP 2025, automatizando a análise e gestão de pacientes e amostras patológicos com visão computacional e IA.
            </p>

            <div className="flex justify-center my-10">
                <a href="#sobre" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white"> Entenda mais </a>
                <Link href={route('register')} className="py-3 px-4 mx-3 rounded-md border border-blue-700 text-blue-700"> Cadastrar </Link>
            </div>

            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                    <source src="/videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

// Componente FeatureSection
function FeatureSection() {
    const features = [
        {
            icon: <i className="bi bi-gear-fill text-xl"></i>,
            text: "Automação de Análises",
            description: "Automatizamos a análise de dimensões de amostras patológicas com algoritmos de visão computacional, agilizando diagnósticos de forma precisa.",
        },
        {
            icon: <i className="bi bi-eyedropper text-xl"></i>,
            text: "Visão Computacional",
            description: "Integramos microscópios digitais para capturar imagens com alta precisão, proporcionando maior detalhamento das amostras.",
        },
        {
            icon: <i className="bi bi-usb-drive-fill text-xl"></i>, 
            text: "Microscópio físico USB",
            description: "Microscópio físico com acesso via USB, permitindo visualizar imagens em qualquer dispositivo. Desenvolvemos também um suporte próprio utilizando impressão 3D.",
        },
        {
            icon: <i className="bi bi-browser-chrome text-xl"></i>,
            text: "Interface Web Intuitiva",
            description: "Plataforma web desenvolvida em React e Larevel, proporcionando uma experiência de uso amigável e intuitiva para gestão de pacientes e análises.",
        },
        {
            icon: <i className="bi bi-robot text-xl"></i>, 
            text: "Integração com IA Gemini",
            description: "Integração com a inteligência artificial do Gemini para analisar observações e dimensões de amostras, auxiliando profissionais da saúde na tomada de decisões.",
        },   
        {
            icon: <i className="bi bi-bar-chart-fill text-xl"></i>, 
            text: "Eficiência e Redução de Custos",
            description: "A automação e integração dos sistemas proporcionam maior precisão nas análises, reduzem custos operacionais e facilitam o trabalho dos profissionais da saúde.",
        },
                 
    ];

    return (
        <div id="sobre" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Funcionalidades
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Sobre o {" "}
                    <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                        projeto
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Componente WorkFlow
function WorkFlow() {
    const checklistItems = [
        {
            title: "Frontend em React e Tailwind CSS",
            description: "Desenvolvimento de uma interface responsiva, moderna e otimizada utilizando React para a estrutura e Tailwind CSS para o design eficiente e escalável.",
        },
        {
            title: "Backend em PHP com Laravel",
            description: "Construção de um backend robusto com PHP e Laravel, promovendo segurança, alta performance e arquitetura orientada a objetos, com persistência de dados em MySQL.",
        },        
        {
            title: "Visão Computacional com Python",
            description: "Implementação de análise de imagens utilizando a biblioteca OpenCV em Python, com integração à inteligência artificial Gemini para auxiliar na interpretação e processamento das amostras.",
        },          
    ];

    return (
        <div id="tecnologia" className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Tecnologias{" "}
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    utilizadas.
                </span>
            </h2>
            <div className="flex flex-wrap justify-center mt-5 mb-10 gap-x-12">
            <div className="relative w-full lg:max-w-lg mt-5">
                <img 
                src="/images/code.png" 
                alt="Código" 
                className="rounded-lg w-full h-auto object-contain"  
                />
            </div>

            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                    <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <div>
                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
}

// Componente Developers
function Developers() {
    const developers = [
        {
            name: "Gustavo Henrique",
            description: "Programador Fullstack e DevOps com experiência nas tecnologias: Javascript, Python, Java, C++ e SQL.",
            image: "/images/gustavo.jpeg",
            github: "https://github.com/guta231",
            linkedin: "https://www.linkedin.com/in/gustavo-henrique-a4aa762b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
            name: "Steffany Medeiros",
            description: "Programadora Fullstack com experiência nas tecnologias: Javascript, Node.js, React, Python, SQL e PHP.",
            image: "/images/steffany.jpeg",
            github: "https://github.com/medeirossteffany",
            linkedin: "https://www.linkedin.com/in/steffany-medeiros-8a50192a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
            name: "Milena Garcia",
            description: "Programadora Fullstack com experiência nas tecnologias: Javascript, Node.js, React, Python e SQL.",
            image: "/images/milena.jpeg",
            github: "https://github.com/MilenaGarciaCosta",
            linkedin: "https://www.linkedin.com/in/milena-garcia-605931256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
    ];

    return (
    <div id="desenvolvedores" className="mt-10 px-6 sm:px-12 lg:px-20 py-12 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-10 lg:mb-16">
            Desenvolvedores
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((developer, index) => (
            <div
            key={index}
            className="flex flex-col items-stretch"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
            >
            <div className="bg-white dark:bg-neutral-800 rounded-md shadow-lg text-center overflow-hidden group relative h-full">
                <img
                src={developer.image}
                alt={developer.name}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                <h6 className="text-xl font-semibold mb-2">{developer.name}</h6>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {developer.description}
                </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                    <a href={developer.github} target="_blank" rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-500 transition-colors duration-300">
                    <i className="bi bi-github"></i>
                    </a>
                    <a href={developer.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-500 transition-colors duration-300">
                    <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>

      );      
      
}

// Componente Footer
function Footer() {
    const resourcesLinks = [
        { href: "#", text: "Primeiros Passos" },
        { href: "#", text: "Documentação" },
        { href: "#", text: "Tutoriais" },
        { href: "#", text: "Referência da API" },
        { href: "#", text: "Fóruns da Comunidade" },
    ];

    const platformLinks = [
        { href: "#", text: "Funcionalidades" },
        { href: "#", text: "Dispositivos Suportados" },
        { href: "#", text: "Requisitos do Sistema" },
        { href: "#", text: "Downloads" },
        { href: "#", text: "Notas de Lançamento" },
    ];

    const communityLinks = [
        { href: "#", text: "Eventos" },
        { href: "#", text: "Encontros" },
        { href: "#", text: "Conferências" },
        { href: "#", text: "Hackathons" },
        { href: "#", text: "Vagas de Emprego" },
    ];

    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">Recursos</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-white">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Plataforma</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-white">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Comunidade</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-white">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

// Componente principal Welcome
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="DASA - Análises Patológicas com IA" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet" />
            
            <div className="bg-black text-white">
                <div className="relative flex min-h-screen flex-col">
                    <NavBar auth={auth} />
                    <div className="max-w-7xl mx-auto pt-20 px-6">
                        <HeroSection />
                        <FeatureSection />
                        <WorkFlow />
                        <Developers />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
     );
}
