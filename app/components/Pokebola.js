"use client"


import React, { useState, useEffect } from "react";
import Invitation from "./Invitation";
import PokeBolaImg from "./PokeBolaImg";

export default function Pokebola() {
    const [nvgt, setNvgt] = useState(false);
    const [showInvitation, setShowInvitation] = useState(false);

    const handleNvgt = () => {
        // Agrega un retraso de 2 segundos antes de cambiar el estado
        setTimeout(() => {
            setNvgt(true);
        }, 2000);
    };

    useEffect(() => {
        // Muestra la invitación después de 10 segundos
        const invitationTimeout = setTimeout(() => {
            setShowInvitation(true);
        }, 15000);

        return () => clearTimeout(invitationTimeout);
    }, []); // Se ejecutará una vez al montar el componente

    return (
        <div className="PokebolaContainer">
            {!nvgt ? (
                <PokeBolaImg
                    handleNvgt={() => {
                        handleNvgt();
                    }}
                />
            ) : showInvitation ? (
                <Invitation/>
            ) : null}
        </div>
    );
}
