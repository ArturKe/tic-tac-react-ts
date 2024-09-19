import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import './GameBoard.css'
import { store } from '../../store/store'
import { Button } from '../Button'
import { InformPanel } from '../InformPanel'

console.log(store)

const initTiles: string[] = ['1', '2', '3', '4', '5', '6','7','8','9']
const winCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]


type Tbox = {
  handleGo: (index: number)=> void,
  children: ReactElement | boolean,
  index: number
}

const BoxComponent: FunctionComponent<Tbox> = ({handleGo, children, index}) => {
  console.log('lallalal')
  const handler = () => {
    handleGo(index)
  }
  useEffect(() => {
    console.log('Use effect')
  },[])
  return (
    <div className = 'box' ref={elem => console.log(elem)} onClick={handler}>
      <div>{children}</div>
    </div>
  )
}

const Cross = () => <div className='cross'></div>
const Circle = () => <div className='circle'></div>

export const GameBoard = () => {
  const [player, setPLayer] = useState<boolean>(false)
  const [winner, setWinner] = useState<string | null >(null)
  const [tiles, setTiles] = useState<(string | boolean)[]>([...initTiles])

  console.log('Game board created')

  React.useEffect(()=>{
    console.log('PLayer changed')
  }, [player])

  const checkWinner = () => {
    let response = null
    winCombo.forEach(combo => {
      const isFalseWin = combo.every((tileIdx) => typeof tiles[tileIdx] === 'boolean' ? tiles[tileIdx] === false : null)
      const isTrueWin = combo.every(tileIdx => typeof tiles[tileIdx] === 'boolean' ? tiles[tileIdx] === true : null)
      if (isFalseWin) console.log('Circles Win!')
      if (isTrueWin) console.log('Crosses Win!')
      if (isFalseWin) response = 'Circles Win!'
      if (isTrueWin) response = 'Crosses Win!'
    })
    return response
  }

  const resetHandler = () => {
    setTiles([...initTiles])
    if (winner) setWinner(null)
  }

  const handleGo = (index: number) => {
    if (winner !== null) return

    const crossNode = document.createElement('div')
    crossNode.className = 'cross'

    const circleNode = document.createElement('div')
    circleNode.className = 'circle'

    if (typeof tiles[index] === 'string') tiles[index] = player

    setPLayer(!player)
    const result = checkWinner()
    if (result !== null) setWinner(result)
  }

  return (
    <div className='gameBoard-wrapper'>
      <InformPanel text={winner ? winner : 'Game started'}/>
      <div className='gameBoard'>
        { tiles.map((tile, index)  => {
          return (
            <div key={index}>
              <BoxComponent handleGo = {handleGo} index={index}>
                {
                  (typeof tile === 'boolean') && (tile ? <Cross/> : <Circle/>)
                }
              </BoxComponent>
            </div>
          )
        })}
      </div>
      <Button text='Reset' onClick={resetHandler}/>
    </div>
  )
}