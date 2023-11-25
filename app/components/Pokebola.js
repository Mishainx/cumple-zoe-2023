"use client"

import PokeBolaImg from "./PokeBolaImg"
import { useState } from "react"

export default function Pokebola() {
    const [nvgt, setNvgt] = useState(0)

    const handleNvgt = () =>{
        setNvgt(nvgt+1)
        console.log("tratata")
    }

    return (

        <div className="PokebolaContainer">
            {nvgt ==0?
            <PokeBolaImg
            handleNvgt={handleNvgt}
            />
            :
            <h2>hola</h2>
            }
        </div>
    )
}