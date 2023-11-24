import Image from "next/image"

export default function Pokebola() {
    return (
        <>
        <div class="status__icon"></div>
        <div className="pokebola">
            <Image
            src={"/pokebola.png"}
            width={50}
            height={50}
            ></Image>
        </div>
        </>
    )
}