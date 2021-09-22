import React from 'react'

function card({ title, text }) {
    return (
        <div className="px-6 py-10 ">
            <h1 className="uppercase text-3xl">{title}</h1>
            <p className="mt-3 mb-8">{text}</p>
            <button className="bg-transparent border-2 border-black py-1 px-6 rounded-3xl">Learn More</button>
        </div>
    )
}

export default card
