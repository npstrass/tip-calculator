import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [total, setTotal] = useState('')
  const [tip, setTip] = useState('')
  const [percent, setPercent] = useState('')

  const handleBill = (e) => {
    if (e.target.value <= 0) {
      setBill('')
    } else {
      setBill(e.target.value)
    }
  }

  const handlePeople = (e) => {
    if (e.target.value <= 0) {
      setPeople('')
    } else {
      setPeople(e.target.value)
    }
  }

  const handlePercent = (e) => {
    if (e.target.value <= 0) {
      setPercent('')
    } else {
      setPercent(e.target.value)
    }
  }

  const handleButton = (e) => {
    e.preventDefault()
    setPercent('')
    setPercent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBill('')
    setPeople('')
    setPercent('')
    setTip('')
    setTotal('')

  }

  useEffect(() => {
    if ( bill > 0 && people > 0 && percent > 0){
      const totalTip = +bill * (+percent / 100)
      const totalBal = +bill + +totalTip
      setTip((+totalTip / +people).toFixed(2))
      setTotal((+totalBal / +people).toFixed(2))
    } else {
      setTip('0.00')
      setTotal('0.00')
    }
  }, [bill, people, percent])

  return (
    <>
      <div className='title'>
        <p>SPLI</p>
        <p>TTER</p>
      </div>

        <form className="container">
          <div className="wrapper">

            <p>Bill</p>
            <div className="input-container">
              <input type='number' step='.01' value={bill} onChange={handleBill} style={{ textAlign: "right" }} placeholder="0" />
              <img className="icon" src="/images/icon-dollar.svg" alt="dollar" />
            </div>

            <p>Select Tip %</p>
            <div className="buttons">
              <button onClick={handleButton} value={5}>5%</button>
              <button onClick={handleButton} value={10}>10%</button>
              <button onClick={handleButton} value={15}>15%</button>
              <button onClick={handleButton} value={25}>25%</button>
              <button onClick={handleButton} value={50}>50%</button>
              <input value={percent} onChange={handlePercent} placeholder="Custom" />
            </div>

            <p>Number of People</p>
            <div className="input-container">
              <input value={people} onChange={handlePeople} style={{ textAlign: "right" }} placeholder="0" />
              <img className="icon" src="/images/icon-person.svg" alt="person" />
            </div>
          </div>

          <div className="wrapper bg">
            <div className="total-wrapper">

              <div className="total-text">
                <p>Tip Amount</p>
                <p className="sub-text">/ person</p>
              </div>
              <h2>${tip}</h2>
            </div>

            <div className="total-wrapper">
              <div className="total-text">
                <p>Total</p>
                <p className="sub-text">/ person</p>
              </div>
              <h2>${total}</h2>
            </div>

            <button onSubmit={handleSubmit} className="reset-btn">Reset</button>
          </div>
          
        </form>
    </>
  );
}