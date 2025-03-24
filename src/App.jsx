import { useState } from 'react'
import greninja from './assets/greninja.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  return (
    <>
      <div>
        <img src={greninja} className="logo" alt="React logo" />
      </div>
      <h1>R13921A38</h1>
      <h2>周秉頡</h2>
      <div className="card">
        <p>我是資安所碩一的周秉頡，喜歡神奇寶貝，頭像是甲賀忍蛙</p>
      </div>
      <p className="visit counter">
        Visit counter: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <input
        type="text"
        placeholder="Leave a message:"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='message-input'
      />
      <button className='message-button' onClick={() => setSubmittedMessage(message)}>Submit</button>
      {submittedMessage && <p className='message'>Your message: {submittedMessage}</p>}
    </>
  )
}

export default App
