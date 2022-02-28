import { ReactNode } from "react";

interface ContainerParams {
    children: ReactNode,
}

export default function Container({ children }: ContainerParams) {
    return (
        <>
            <main className="bg-white flex flex-col gap-1 h-screen items-center justify-start p-1 w-full">
                {children}
            </main>
        </>
    )
}