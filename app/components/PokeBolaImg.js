"use client"

import Image from "next/image";
import { useVideoContext } from "./context/VideoContext";
import { useState, useEffect } from "react";

export default function PokeBolaImg({ handleNvgt }) {
    const { playVideo, setPlayVideo } = useVideoContext();
    const [fade, setFade] = useState(false);

    const handleImageClick = () => {
        // Cambia el estado de playVideo al contrario del valor actual
        setPlayVideo(!playVideo);
        setFade(true);
        handleNvgt()
    };

    useEffect(() => {
        // Agrega la clase 'fade-out' después de 2 segundos
        if (fade) {
            const timeoutId = setTimeout(() => {
                setFade(false);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [fade]);

    return (
        <Image
            src={"/pokebola.png"}
            width={50}
            height={50}
            className={`pokebolaImg ${fade ? 'fade-out' : ''}`}
            onClick={handleImageClick}
        />
    );
}
