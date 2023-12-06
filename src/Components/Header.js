import React from 'react';
import {
    GAME_STATE_DRAW,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
} from "../Constants";


const Header = ({ gameState, currentPlayer, winPlayer }) => {
    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div> Lượt người chơi {currentPlayer}</div>
            case GAME_STATE_WIN:
                return <div>Người chơi {winPlayer} thắng</div>
            case GAME_STATE_DRAW:
                return <div>Hòa</div>
            default:
                return 'Tic Tac Toe';
        }

    }
    return (
        <div className="panel header">
            <div className="header-text">
                {renderLabel()}
            </div>
        </div>
    )
}

export default Header;