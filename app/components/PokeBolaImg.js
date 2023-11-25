"use client"

import Image from "next/image";
import { useVideoContext } from "./context/VideoContext";

export default function PokeBolaImg({handleNvgt}) {
  const { playVideo, setPlayVideo } = useVideoContext();

  const handleImageClick = () => {
    // Cambia el estado de playVideo al contrario del valor actual
    setPlayVideo(!playVideo);
  };

  return (
    <Image
      src={"/pokebola.png"}
      width={50}
      height={50}
      className="pokebolaImg"
      onClick={handleImageClick}
    />
  );
}
