"use client"

import { useTheme } from "../components/background/BackgroundPage";

export default function Setting(){
    const {mode, changeMode} = useTheme();
    return(
        <div className="flex flex-col items-center justify-center h-screen">
               <div>
                <button 
                type="button"
                onClick={changeMode}
                className={`text-base ${mode === "light" ? "text-black" : "text-white"}`}>
                    {mode === "light" ? "모드변경 : 🌛" : "모드변경 : 🌞"}
                    
                </button>
            </div>
        </div>
    )
}
