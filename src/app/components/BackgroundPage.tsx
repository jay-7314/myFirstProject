"use client"

import Image from "next/image"
import styles from "./CSS/Background.module.css"
import React, { useState, useContext, createContext } from "react"
import Header from "./Header"
import Footer from "./Footer"

type ThemeContextType = {
    mode: string;
    changeMode: () => void;
}

interface BackgroundProps {
    children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("props가 전달되지 않았습니다.");
    }
    return context;
}

export default function Background({ children }: BackgroundProps) {

    const [mode, setMode] = useState<string>("light")

    console.log("current mode : ", mode);

    const changeMode = () => {
        setMode(mode === "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{mode, changeMode}}>
        <div className={styles.container}>
            <Image src={mode === "light" ? "/white_mode.jpg" : "/dark_mode.jpg"}
                alt={mode === "light" ? "white_mode" : "dark_mode"}
                fill
                className={styles.containerImage}
            />

            <Header changeMode={changeMode} />

            <div className="relative mt-20 overflow-y-auto h-[calc(100vh-8rem)]">
               {children}
            </div>
            <Footer/>
        </div>
        </ThemeContext.Provider>
    )
}