import React from "react"
import "./Game.css"

function Game({ id, name, background_image, released, rating, handleSup }) {
  return (
    <div className="contentGlobal">
      <div className="card">
        {/* <div className="globsup"> */}
        <h1>{name}</h1>
        {/* </div> */}
        <img className="imgGame" src={background_image} alt={name} />
        <div className="infoGlob">
          <h5>Rating: {rating}</h5>
          <h5>Released: {released}</h5>
          <h5>
            <input type="button" value="ScreenShot" />
          </h5>
          <h5>
            <input
              type="button"
              value="X"
              className="sup"
              onClick={() => handleSup(id)}
            />
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Game
