import React, { useState, useEffect } from "react"
import Game from "./Game"
import axios from "axios"

const GameList = () => {
  const [listGame, setListGame] = useState([])

  useEffect(() => {
    const fetchData = async url => {
      const res = await axios.get(url)
      setListGame(res.data)
      console.log(res.data)
    }
    fetchData("https://wild-games.herokuapp.com/api/v1")
  }, [])
  const handleSup = id => {
    const filterTab = listGame.filter(game => game.id !== id)
    setListGame(filterTab)
  }
  return (
    <div>
      {listGame.map(game => (
        <Game key={game.id} {...game} handleSup={handleSup} />
      ))}
    </div>
  )
}

export default GameList
