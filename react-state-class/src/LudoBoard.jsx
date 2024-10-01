import { useState } from "react"
export default function LudoBoard(){
    let[moves , setMoves] = useState({blue:0 , red:0 , green:0 ,yellow:0});
    let [arr ,setArr] = useState(["No move"]);
    let updateBlue = ()=>{
    //    console.log(`moves.blue = ${moves.blue}`)
    //    setMoves((prevMoves) =>{
    //     return {...prevMoves, blue:prevMoves.blue+1}
    //    });
      
       setArr([...arr ,"Blue" ]);
       console.log(arr )
    }
    let updateYellow = ()=>{
        // console.log(`moves.= ${moves.yellow}`)
        setMoves((prevMoves) =>{
         return {...prevMoves, blue:prevMoves.yellow+1}
        });
     }
     let updateGreen = ()=>{
        // console.log(`moves.Green = ${moves.green}`)
        setMoves((prevMoves) =>{
         return {...prevMoves, blue:prevMoves.green+1}
        });
     }
     let updateRed = ()=>{
        // console.log(`moves.Red = ${moves.red}`)
        setMoves((prevMoves) =>{
         return {...prevMoves, blue:prevMoves.red+1}
        });
     }
    return( <>
        <p>Game Begins</p>
        <p>{arr}</p>
        <div className="board" >
            <p>Blue moves = {moves.blue} </p>
            <button style = {{backgroundColor :"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style = {{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>Green moves ={moves.green} </p>
            <button style = {{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style  = {{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
        </>
    )
}