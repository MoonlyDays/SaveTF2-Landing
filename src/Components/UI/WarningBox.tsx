import { LuMailWarning } from "react-icons/lu";

export function WarningBox({ message }: { message?: string }) {
    return (
        message && (
            <div className="flex max-w-[400px] flex-row items-center gap-2 rounded-lg border-2 border-red-500 bg-red-400/10 px-4 py-2">
                <div className="h-10 w-10">
                    <LuMailWarning
                        className="h-full w-10"
                        stroke="rgb(245 158 11)"
                    />
                </div>
                <div>{message}</div>
            </div>
        )
    );
}
