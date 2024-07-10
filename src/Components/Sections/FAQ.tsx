import { useState, PropsWithChildren } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export function FAQDropdown({
    question,
    children,
}: PropsWithChildren<{
    question: string;
}>) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="accordion flex w-full flex-col items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="toggle flex min-h-8 w-full max-w-[600px] flex-row justify-between border-b-8 border-b-shork-favourite-color py-2 text-left text-2xl"
                >
                    <div>
                        {isOpen ? (
                            <a>
                                <span className="text-amber-500">Q: </span>{" "}
                                <span className="text-wheat">{question}</span>
                            </a>
                        ) : (
                            <a>
                                <span className="text-neutral-400">Q: </span>{" "}
                                <span className="text-neutral-200">
                                    {question}
                                </span>
                            </a>
                        )}
                    </div>
                    <div>{isOpen ? <LuChevronDown /> : <LuChevronUp />}</div>
                </button>
                <div className={isOpen ? "faqAnswer show" : "faqAnswer"}>
                    {children}
                </div>
            </div>
        </>
    );
}

export function FAQ() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="faqHead font-build">FAQ</h1>
            <h3 className="faqHead text-xl" id="faq">
                Frequently asked questions
            </h3>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 sm:flex-row">
                <div className="flex h-fit w-full flex-col gap-4 text-white">
                    <FAQDropdown question="Why should I care about this?">
                        Cheating and abusive behavior affects more that TF2.
                        Games such as Counter Strike 2 suffer from flaws in VAC.
                        Cheating and botting are large issues not only with
                        Valve games, but the industry as a whole. Something must
                        be done.
                    </FAQDropdown>
                    <FAQDropdown question="How can Valve profit off of TF2 in it's current state?">
                        Despite TF2’s current state, it still has an active
                        player base, and Valve adds seasonal content drops which
                        consist of loot crates and purchasable items from the
                        in-game shop.
                    </FAQDropdown>
                </div>
            </div>
        </div>
    );
}
