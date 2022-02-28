import { ReactNode } from "react";

interface BoxParams {
    children: ReactNode
}

export default function Box({ children }: BoxParams) {
    return (
        <>
            <div className="flex h-72 items-center justify-center px-2 py-1 place-content-center relative w-full">
                {children}
            </div>
        </>
    );
}