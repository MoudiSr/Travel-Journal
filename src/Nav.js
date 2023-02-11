import React from "react"
import earth from "./images/earth.svg"

export default function Nav() {
    return (
        <nav className="bg-[#F55A5A] h-[55px] flex p-2 justify-center text-white font-bold">
            <img src={earth} className="w-[30px]"/>
            <h2 className="font-bold pl-2 pt-2 pb-2"> my travel journal.</h2>
        </nav>
    )
}