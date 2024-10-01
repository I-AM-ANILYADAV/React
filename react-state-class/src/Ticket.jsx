import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Ticket({ ticket }) {
    return (
        <>
        <p>Ticket</p>
        <div className = "Ticket">
        <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum key={idx} num={num} />
            ))}
        </div>
        </>
    );
}
