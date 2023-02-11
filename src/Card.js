import React from "react"

export default function Card(props){
    return (
    <div className="pr-8 pt-8 pl-8">
        <div className="flex pb-8">
            <img src={props.img} className="rounded-[5px] h-auto w-[150px] object-cover"/>
            <div className="block p-4">
                <div className="flex text-sm">
                    <i className="bi bi-geo-alt-fill text-[#F55A5A]"></i>
                    <span className="ml-1 tracking-[0.2rem] mr-4">{props.country.toUpperCase()}</span>
                    <a href={props.google_maps} className="underline underline-offset-[3.2px] text-gray-500">View on Google Maps</a>
                </div>
                <h1 className="text-4xl font-bold mt-2 mb-5">{props.location}</h1>
                <span className="font-bold">{props.start_date} - {props.end_date}</span>
                <p className="mt-2">{props.text}</p>
            </div>
        </div>
        <hr />
    </div> 
    )
}