import { useState, useEffect} from 'react'
import './App.css'
// Build a reload form
// 1. Current value on this Gift Card is $50, max value to put on a card is $200.
// 2. Amount options $15, $25, $50, $100, $200. Only show the availble options
// 3. Select the option, make necessary visual indication
// 4. Submit and update the value on the card 

// Bonus:
// 1. Add a custom input, allow user to key in the amount

function App() {

  const [balance, setBalance] = useState(50);
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [isSelected, setIsSelected] = useState(false)
  const maxValue = 200; 

  const amountOptions = [15, 25, 50, 100, 200]

  const handleChange = (options) => {
    setSelectedAmount(options)
    setIsSelected(true)
  }

  const handleInput = (e) => {
    setSelectedAmount(e.target.value)
    setIsSelected(true)
  }

  const handleSubmit = () => {
    if(selectedAmount > 200) {
      alert('Invalid Amount')
    } else {
      setBalance(selectedAmount)
      setIsSelected(false)
      setSelectedAmount(0)
    }
  }

  return (
    <div style={{ padding: 12 }}>
      <h1 className="header" style={{ padding: 12 }}>
        Reload Gift Card
      </h1>
      <div
        style={{
          border: "1px solid #cecece",
          height: 120,
          width: 280,
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>
          ${balance}
        </h1>
      </div>
      <div style={{ display: "flex", padding: '12px 0', gap: 8 }}>
        {amountOptions.map((options) => (
          <button
            style={{
              border: '1px solid grey',
              borderRadius: '2px',
              padding: '5px',
              backgroundColor: selectedAmount === options ? "#ccc" : "#fff"}}
           onClick={() => handleChange(options)}>
            ${options}
          </button>
        ))}

        {/* Bonus */}
        <input 
        style={{width: '100px'}}
        placeholder='Enter Amount'
        maxLength='3'
        type='number'
        onChange={handleInput}>
        </input>
      </div>
      { isSelected ? <button onClick={handleSubmit}>Submit</button> 
      : 
      <button disabled>Submit</button>
      }
    </div>
  );
};

export default App;
