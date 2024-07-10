import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import textShadow from "tailwindcss-textshadow";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["TF2 Secondary", ...defaultTheme.fontFamily.sans],
                secondary: ["TF2 Secondary"],
                build: ["TF2 Build"],
                consolas: "consolas",
                calibri: "calibri",
            },
            colors: {
                "shork-favourite-color": "#4C4C4c",
                orange: "#f6732d",
                wheat: "#f6e6c2",
                "form-background": "#302f2e",
            },
            backgroundImage: {
                sign: "url(./assets/images/sign.webp)",
            },
            width: {
                digit: "65px",
                page: "1200px",
                form: "",
            },
            height: {
                digit: "100px",
            },
            lineHeight: {
                digit: "100px",
            },
            textShadow: {
                block: "3px 3px 0 black",
                glow: "0 0 15px var(--tw-shadow-color)",
                "sign-cta": "3px 3px black, 0 0 40px #f6732d",
                heading: "5px 5px 8px var(--tw-shadow-color)",
                counter: "",
            },
            transitionDuration: {
                "2s": "2000ms",
            },
            translate: {
                "digit-1": "100%",
                "digit-2": "200%",
                "digit-3": "300%",
                "digit-4": "400%",
                "digit-5": "500%",
                "digit-6": "600%",
                "digit-7": "700%",
                "digit-8": "800%",
                "digit-9": "900%",
            },
        },
    },

    plugins: [forms, textShadow],
};
