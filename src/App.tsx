// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { GameBoard } from './components/GameBoard'

function App() {
  return (
    <>
      <h1>Tic Tac Game</h1>
      <GameBoard/>
      <p className="read-the-docs">
        Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. 
      </p>
    </>
  )
}

export default App
