import { useState } from "react"
export default function LikeButton (){
    let [isLiked , setLiked] = useState(false)
    let [click , setClick] = useState(false)


    let toogleLike = ()=>{
        let newVal = !isLiked 
        setLiked(newVal)
        setClick(click+1)
    }
    let likeStyle = {color :"red"}
    return (
        <>
        <p>Click ={click}</p>
        <p onClick = {toogleLike}>
            {isLiked ? ( 
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ) : (
                    <i className="fa-regular fa-heart"></i>
                ) }
        </p>
        </>
    )
}