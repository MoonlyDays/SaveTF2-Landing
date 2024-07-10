import { MouseEventHandler, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Button({
    children,
    className,
    onClick,
}: PropsWithChildren<{
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}>) {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                "flex items-center gap-3 rounded-md bg-[#4B4540] px-6 py-3 text-lg text-[#FDEECE]",
                "hover:bg-amber-500 hover:text-black",
                className,
            )}
        >
            {children}
        </button>
    );
}

export function LinkButton({
    children,
    target,
    className,
    href,
}: PropsWithChildren<{
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    target?: string;
    href: string;
}>) {
    return (
        <a
            href={href}
            target={target}
            className={twMerge(
                "flex items-center gap-3 rounded-md bg-[#4B4540] px-6 py-3 text-lg text-[#FDEECE]",
                "hover:bg-amber-500 hover:text-black",
                className,
            )}
        >
            {children}
        </a>
    );
}
