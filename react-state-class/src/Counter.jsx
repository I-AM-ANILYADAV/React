import{useState} from "react"
export default function Counter(){
    // let [stateVariable , setStateVariable] =useState(0);\
    function init(){
        return Math.random();
    }
    let [count , setCount] =useState(init);
    // console.log("component is rendered");
    // console.log(`count =${count}`);

    // function incCount() {
    //     setCount(count+1);
    //     console.log(count)
    // }
    
    let incCount = () =>{
        setCount((currCurrent) =>{
            return currCurrent+1;
        });
    }
    return(
        <><h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </>
    )
}