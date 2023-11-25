export default function Invitation() {
    return (
        <div className="Invitation">
            <div className="card">
                <div className="card__face">
                    {/* Contenido frontal */}
                    <img src="/imagen-frontal.jpg" alt="Frontal" />
                </div>
                <div className="card__face card__face--back">
                    {/* Contenido trasero, podría ser el texto de la invitación */}
                    <p>Hola, ¡te invitamos a la fiesta de cumpleaños!</p>
                </div>
            </div>
        </div>
    );
}