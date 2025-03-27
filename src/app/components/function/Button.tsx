import { useTheme } from "../background/BackgroundPage";

interface ButtonProps{
    type?: "button" | "submit" | "reset";
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className? :string;
    children: React.ReactNode;
}

export default function Button({onClick, className, children, type}: ButtonProps){
    const {mode} = useTheme();
    return(
        <button 
        onClick={onClick} 
        className={`rounded-md pr-2 pl-2 ml-2 ${mode === "light" ? "text-black border-2 border-black" : "text-white border-2 border-white"}`}
        type={type}
        >
            {children}
        </button>
    )
}
