import { ReactNode } from "react";

interface ContainerParams {
    children: ReactNode,
}

export default function Container({ children }: ContainerParams) {
    return (
        <>
            <main className="flex flex-col gap-1 h-screen items-center justify-start p-1 w-full md:max-h-hasher-container md:max-w-md">
                {children}
            </main>
        </>
    )
}