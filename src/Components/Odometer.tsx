import { twMerge } from "tailwind-merge";

export function Odometer({
    value,
    className,
}: {
    value: number;
    className?: string;
}) {
    const digitStr = value.toString();
    const digits = digitStr.length;

    return (
        <div className={twMerge("flex flex-row-reverse text-9xl", className)}>
            {new Array(digits).fill(null).map((_, i) => (
                <div className="-mx-1 flex" key={i}>
                    <OdometerDigit digit={Number(digitStr[digits - i - 1])} />
                    {i > 0 && i % 3 == 0 && <OdometerText text={","} />}
                </div>
            ))}
        </div>
    );
}

function OdometerDigit({ digit }: { digit: number }) {
    return (
        <div className="flex h-digit justify-center overflow-hidden">
            <div
                className={twMerge(
                    "transition-transform duration-1000",
                    digitToTranslate[digit],
                )}
            >
                {new Array(10).fill(null).map((_, i) => (
                    <div className="h-digit text-center leading-digit" key={i}>
                        {i}
                    </div>
                ))}
            </div>
        </div>
    );
}

function OdometerText({ text }: { text: string }) {
    return <div className="h-digit leading-digit">{text}</div>;
}

const digitToTranslate = [
    "",
    "-translate-y-digit-1",
    "-translate-y-digit-2",
    "-translate-y-digit-3",
    "-translate-y-digit-4",
    "-translate-y-digit-5",
    "-translate-y-digit-6",
    "-translate-y-digit-7",
    "-translate-y-digit-8",
    "-translate-y-digit-9",
];
