import Image from "next/image";

export default function Invitation() {
    return (
        <div className="Invitation">
            <div className="card">
                    <Image
                    src="/pokemones/pokemon-1.png"
                    width={80}
                    height={80}
                    alt="Imagen Superior"
                    className="Squirtle"
                    >
                    </Image>
                <div className="card__face">
                    <img src="/imagen-frontal.jpg" alt="Frontal" />
                </div>
                <div className="card__face card__face--back">
                    <p>Hola, ¡te invitamos a la fiesta de cumpleaños!</p>
                </div>
            </div>
        </div>
    );
}
