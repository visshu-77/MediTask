"use client";

import { usePathname } from "next/navigation";

export default function LastParams(){
    const pathName = usePathname();
    const lastParams = pathName.split("/").filter(Boolean).pop();
    return(
        <p className="text-sm font-bold">Medibuddy / <span className="text-primary capitalize">{lastParams}</span></p>
    )
}