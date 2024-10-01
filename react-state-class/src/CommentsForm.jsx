import {useState} from "react"
export default function CommentsForm () {
    let [formData , setFormData ] = useState({
        username:"",
        remarks:"",
        rating:""
    })

    let handleInputChange = (event) =>{
        setFormData ((currData)=>{
            return {...currData , [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData ({
            username:"",
            remarks:"",
            rating:""
        })

    }
    return(
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit ={handleSubmit}>
                <label htmlFor="username">Username</label> <br />
                <input type="text" placeholder ="username" value={formData.username} onChange={handleInputChange} id="username" name = "username"/> <br/>
                <label htmlFor="remarks">Remarks</label> <br />
                <textarea value = {formData.remarks}  onChange={handleInputChange} id="remarks" name="remarks" >Remarks</textarea><br/>
                <label htmlFor="rating">Rating</label> <br />
                <input type="number" placeholder ="rating" min ={1} max={5} value = {formData.rating}  onChange={handleInputChange} id ="rating" name="rating"/> <br/>
                <button>Add Comment</button>
            </form>
        </div>
    )
}