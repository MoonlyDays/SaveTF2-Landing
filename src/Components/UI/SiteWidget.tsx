import { LuAccessibility, LuType } from "react-icons/lu";
import { useEffect, useState } from "react";

export function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const e = document.querySelectorAll(".accessibility-menu");

    useEffect(() => {
        if (isOpen) {
            e.forEach((i) => {
                (i as HTMLElement).style.visibility = "visible";
            });
        }
        return () => {
            e.forEach((i) => {
                (i as HTMLElement).style.visibility = "hidden";
            });
        };
    }, [isOpen]);

    return (
        <div className="fixed bottom-[15px] left-[50px] z-[99999] opacity-75 sm:bottom-[50px] sm:opacity-100">
            <MenuOptions />
            <button onClick={() => setIsOpen(!isOpen)}>
                <div className="h-14 w-14 rounded-full border-2 border-wheat bg-[#4B4540] hover:bg-blue-800 hover:text-white">
                    <LuAccessibility className="h-full w-full p-2" />
                </div>
            </button>
        </div>
    );
}

function MenuOptions() {
    const [isAccessibleFont, setIsAccessibleFont] = useState(false);
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const paragraphs = document.querySelectorAll("p");

    useEffect(() => {
        if (isAccessibleFont) {
            document.body.style.fontFamily = "Calibri, sans-serif";
            headers.forEach((header) => {
                (header as HTMLElement).style.fontFamily =
                    "Calibri, sans-serif";
            });
            paragraphs.forEach((p) => {
                (p as HTMLElement).style.fontFamily = "Calibri, sans-serif";
            });
        }
        return () => {
            document.body.style.fontFamily = "";
            headers.forEach((header) => {
                (header as HTMLElement).style.fontFamily = "TF2 Build";
            });
            paragraphs.forEach((p) => {
                (p as HTMLElement).style.fontFamily = "";
            });
        };
    }, [isAccessibleFont]);

    return (
        <>
            <div
                style={{ visibility: "hidden" }}
                className="accessibility-menu relative mb-2 flex h-fit w-48 flex-col justify-center rounded-lg border-2 border-wheat bg-[#302B28] p-4"
            >
                <button
                    onClick={() => setIsAccessibleFont(!isAccessibleFont)}
                    className="flex flex-row items-center justify-center gap-2 rounded-md py-1 font-[Calibri] font-bold hover:bg-[#4b4540]/50"
                >
                    <LuType className="" />
                    Accessible Font
                </button>
            </div>
        </>
    );
}
