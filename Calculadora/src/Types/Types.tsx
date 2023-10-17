import React from "react"


export type btnprop = {
    texto:string
}

export type elementCuerpo = {
    cambioValor:()=>{}
}

export type elementPantalla = {
    valor:number
}

export type GlobalContentType = {
    resultado: string,
    
    setResultado: React.Dispatch<React.SetStateAction<string>>,
    
    
}
