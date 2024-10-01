function printHello (event){
    console.log("Hello")
    console.log(event)
}

function printBye (){
    console.log("Bye")
}

function handleHover (){
    console.log("Hover")
}

function doubleClick (){
    console.log("you double clicked")
}

export default function Button(){
    return (
        <div>
        <button onClick={printHello}>Click me</button> <br /> <br />
        <button onClick={printBye}>Click me</button> <br /> <br />
        <button onMouseOver={handleHover}>Hover over me</button> <br /> <br />
        <button onDoubleClick={doubleClick}>Double click me</button>
        </div>
    )
}

