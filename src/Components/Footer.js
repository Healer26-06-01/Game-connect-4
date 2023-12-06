import React from 'react';
import {
    GAME_STATE_PLAYING
} from "../Constants";

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {

    const renderButtons = () => {
        if (gameState === GAME_STATE_PLAYING) {
            return (
                <button onClick={onSuggestClick}>Gợi ý</button>
            )
        } else {
            return (
                <button onClick={onNewGameClick}>Chơi mới</button>
            )
        }
    }

    return (
        <div className="panel footer">
            {renderButtons()}
        </div>
    )
}

export default Footer;