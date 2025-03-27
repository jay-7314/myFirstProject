import { useTheme } from "../background/BackgroundPage";

interface InputProps {
    placeholder: string;
    type: "text" | "password" | "email";
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function Input({ placeholder, type, onKeyDown, value, className, onChange }: InputProps) {

    const { mode } = useTheme();
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                value={value}
                className={`border-2 border-black rounded-md 
                    ${mode === "light" 
                    ? "text-black border-2 border-black placeholder:text-gray-500"
                     : "text-white border-2 border-white placeholder:text-white"
                    }
                     ${className}`}
                onChange={onChange}
            />
        </div>
    )
}
