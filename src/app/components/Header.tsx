import { useTheme } from "./BackgroundPage";

interface HeaderProps {
    changeMode: () => void;
}

export default function Header({changeMode}: HeaderProps){
    const {mode} = useTheme();
    
    return(
        <div className = "absolute top-0 left-0 w-full z-10 h-16 flex justify-between items-center p-2 border-4 border-black">
            <div className="flex flex-col items-center">
                <div className = {`text-xl  ${mode === "light" ? "text-gray-900" : "font-base text-white"}`}>JPlaner</div>
                <div className = {`text-sm text-gray-500 ${mode === "light" ? "text-gray-400" : "text-white"}`}>지금까지 없던 계획표</div>
            </div>
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