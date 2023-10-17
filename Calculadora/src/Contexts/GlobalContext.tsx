import { createContext, useState } from "react";
import React from 'react';
import { GlobalContentType } from "../Types/Types";




export const GlobalContext = createContext<GlobalContentType>({
    resultado: '0',
   
    setResultado: () => { },
    
 })


export const GlobalContentProvider = (props:{ children:React.ReactNode}) => {
    const [resultado, setResultado]   = useState<string>('0')
    
    
     return <GlobalContext.Provider value={{resultado , setResultado}}>
         {props.children}
     </GlobalContext.Provider>
 }