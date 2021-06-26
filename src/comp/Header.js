import React from 'react'

const Header = ({score}) => {
    return (
        <div className="header">
           
        <div className="text">
          <span>Rock <img src="https://img.icons8.com/ios-glyphs/60/000000/hand-rock.png" className="sci"/></span>
          <span>Paper <img src="https://img.icons8.com/ios-glyphs/60/000000/palm-scan--v2.png"/></span>
          <span>Scissors <img src="https://img.icons8.com/ios-filled/60/000000/hand-scissors--v2.png" className="sci"/></span>
          <span>Lizard <img src="https://img.icons8.com/ios-filled/60/000000/hand-lizard.png"/></span>
          <span>Spock <img src="https://img.icons8.com/glyph-neue/60/000000/star-trek-gesture.png"/></span>
        </div>

        <div className="score-box">
          <span>Score</span>
          <div className="score-box__score">{score}</div>
        </div>
       
      </div>
    )
}

export default Header;
