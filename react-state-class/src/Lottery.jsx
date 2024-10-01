import {useState} from "react"

import { genTicket ,sum } from "./helper";
import Ticket from "./Ticket"
export default function Lottery ({n =3 , winCondition}){
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket)

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }
    
    return (
        <>
        <h1>Lottery Game</h1>
        <div className = "ticket">
            <Ticket ticket={ticket}/>

        </div>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning  && "Congratulation you won"} </h3>
        </>
    )
}