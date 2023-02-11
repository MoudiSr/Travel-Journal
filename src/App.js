import React from "react"
import "./App.css"
import Nav from "./Nav"
import Card from "./Card"
import data from "./data"

export default function App(){
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div>
      <Nav />
      <section className="p-8">
        {cards}
      </section>
      
    </div>
  )
}