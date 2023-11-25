import React, { useState, useEffect } from "react";

export default function Invitation() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Establece un retraso de 10 segundos antes de mostrar el componente
        const timeoutId = setTimeout(() => {
            setVisible(true);
        }, 10000); // 10000 milisegundos = 10 segundos

        // Limpia el timeout cuando el componente se desmonta o cuando `visible` cambia
        return () => clearTimeout(timeoutId);
    }, []); // El segundo argumento del useEffect es un array de dependencias, [] significa que solo se ejecutará una vez al montar el componente

    return (
        <div className={`Invitation ${visible ? "visible" : ""}`}>
            Holaa
        </div>
    );
}
