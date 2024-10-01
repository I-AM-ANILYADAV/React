import './App.css'
import Counter from "./Counter.jsx"
import LikeButton from "./LikeButton.jsx"
import LudoBoard from "./LudoBoard.jsx"
import TodoList from "./TodoList.jsx"
import Lottery from "./Lottery.jsx"
import { sum } from './helper.js'
import Form from "./Form.jsx"
import CommentsForm from "./CommentsForm"
import Counter1 from "./Counter1.jsx"
import Joker from "./Joker.jsx"

function App() {

//   let winCondition = (ticket) =>{
//    return  ticket.every((num) => 
//     num === ticket[0]
   
//    )

//   }
  return (
    <>
    {/* <LudoBoard/> */}
      {/* <h1>State in React</h1> */}
          {/* <Counter/> */}
    {/* <LikeButton/> */}
    {/* <TodoList/> */}
    {/* <Lottery/> */}
  {/* <Lottery n ={3} winCondition={winCondition}/> */}
  {/* <Form/> */}
  {/* <CommentsForm/> */}
  {/* <Counter1/> */}
  <Joker/>

      
    
    </>
  )
}

export default App
