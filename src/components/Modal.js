import React from "react";

export default function Modal({ isCorrect, solution, turn }) {
  const onButtonClick = () => {
    window.location = "/";
  };

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">Solution: {solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
          <button onClick={onButtonClick}>Try Again</button>
          <i className="fa-regular fa-circle-xmark" onClick={onButtonClick}></i>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <button onClick={onButtonClick}>Try Again</button>
          <i className="fa-regular fa-circle-xmark" onClick={onButtonClick}></i>
        </div>
      )}
    </div>
  );
}
