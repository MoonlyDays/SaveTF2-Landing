import { Tooltip } from "react-tooltip";
import { PropsWithChildren } from "react";

export function WordDefinition({
    keyWord,
    wordType,
    wordDesc,
    children,
}: PropsWithChildren<{
    keyWord: string;
    wordType: string;
    wordDesc: string;
}>) {
    /*those " " are there for spaces as this is an inline component. it works - ched*/

    return (
        <>
            {" "}
            <span
                className="toolTipDefine_Span"
                data-tooltip-id={"my-tooltip-" + keyWord}
            >
                {children}
            </span>{" "}
            <Tooltip
                id={"my-tooltip-" + keyWord}
                className="toolTipDefine"
                opacity={1}
            >
                <span className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <div className="toolTipDefine_Word">{keyWord}</div>
                        <div className="toolTipDefine_Type">• {wordType}</div>
                    </div>
                    <div>
                        <p className="toolTipDefine_Desc">{wordDesc}</p>
                    </div>
                </span>
            </Tooltip>
        </>
    );
}
