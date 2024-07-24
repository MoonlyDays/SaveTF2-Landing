import { LinkButton } from "../Button";

export default function NavMenu() {
    return (
        <div className="sticky top-[-1px] z-50 h-full bg-[#1B1814]">
            <nav className="bar-menu-top flex flex-row items-center justify-center gap-3">
                <LinkButton
                    target="_self"
                    className={"justify-center py-1"}
                    href="#how-to-help"
                >
                    How to help
                </LinkButton>
                <LinkButton
                    target="_self"
                    href="#faq"
                    className={"justify-center py-1"}
                >
                    FAQ
                </LinkButton>
            </nav>
        </div>
    );
}
