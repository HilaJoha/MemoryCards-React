import './App.css'
import { useEffect, useState } from 'react';



const [cards,setCards] = useState([])

function App() {
  const initGame = () => {
    const cards = 
      new Array(16)
      .fill()
      .map((_,i) => ({
        src : `/pix/0${i%8+1}.jpg`,
        revealed : false,  
      }))
      .sort(() => Math.random() -.5)
    setCards(cards)
  } 
 
  useEffect(() => initGame() , [])

  return (
      <div className="App">
          {cards.map((card,i) => (
            <div>
              <img src={card.src}/>
            </div>

          ))}

      </div>

  )
};

export default App;
