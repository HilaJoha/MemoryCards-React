import './App.css'
import { useEffect, useState } from 'react';



const [cards,setCards] = useState([])

function App() {
  const initGame = () => {
    const cards = 
      new Array(16)
      .fill()
      .map((_,i) => ({
        src : `./src/pix/0${i%8+1}.png`,
        revealed : false,
      
      }))
      .sort(() => Math.random() -.5)
    setCards(cards)
  } 
 
  useEffect(() => initGame() , [])

  return (
      <div className="App">
          {cards.map((card,i) => (
            <div className='card' key={i}>
                <div className='card__face card__face--front'>
              <img src={card.src} alt="card-front"/>
              </div>
              <div className='card__face card__face--back'>
              <img src='./src/pix/back.png' alt="card-back"/>
            </div>
      </div>

          ))}

      </div>

  )
};

export default App;
