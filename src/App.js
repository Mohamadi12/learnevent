import { useState } from 'react';
import './App.css';
/* onChange= event handler used primarily with form element
            ex: input, textarea, select, radio
*/
function App() {
  const [name, setName]=useState("")
  const [quantity, setQuantity]=useState("")
  const [comment, setComment]=useState("")
  const [payement, setPayement]=useState("")
  const [shipping, setShipping]=useState("")

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleQuantityChange(e){
    setQuantity(e.target.value)
  }
  function handleCommentChange(e){
    setComment(e.target.value)
  }
  function handlePayementChange(e){
    setPayement(e.target.value)
  }
  function handleShippingChange(e){
    setShipping(e.target.value)
  }
  return (
    <div className="App">
      <input type="text" value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange}/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Enter your comment'/>
      <p>Comment: {comment}</p>

      <select value={payement} onChange={handlePayementChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">Mastercard</option>
        <option value="giftcard">Giftcard</option>
      </select>
      <p>Payement: {payement}</p>

      <label>
        <input type="radio" value="Pick Up" 
        checked={shipping ==="Pick Up"} onChange={handleShippingChange}/>
        Pick Up
      </label>
      <br />
      <label>
        <input type="radio" value="Delivery" 
        checked={shipping ==="Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default App;
