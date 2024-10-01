import {useState ,useEffect} from "react"
export default function Counter1 (){
    let [countx , setcountx] = useState(0)
    let [county , setcounty] = useState(0)

    let incCountx = ()=>{;
       setcountx((currCount) => currCount+1)
    }

     let incCounty = ()=>{;
       setcounty((currCount) => currCount+1)
    }
    useEffect ( function printSomething () {
        console.log("this is a side-effect");
    },[countx])

    return (
        <>
        <h3>Count = {countx}</h3> &nbsp;  
        <button onClick={incCountx}>+1</button>

        <h3>Count = {county}</h3> &nbsp;  
        <button onClick={incCounty}>+1</button>
        </>
    )
}