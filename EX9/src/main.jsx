import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './components/E09_1.jsx'
import Hello from './components/E09_2.jsx'
import Counter from './components/E09_3.jsx'
import Card from './components/E09_4.jsx'
import Website from './components/E09_5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile></Profile>
    <Hello></Hello>
    <Counter></Counter>
    <Card></Card>
    <Website></Website>
  </StrictMode>
)

