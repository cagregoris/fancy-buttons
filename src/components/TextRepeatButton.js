import React, { useState } from 'react'; //optional

  function TextRepeaterButton(){

    const [repetitions, setRepetitions] = useState(1);

    const textArray = [];
    for (let x = 0; x < repetitions; x++) {
      textArray.push(<span key={x}>I like this text</span>)
    }

    const handleClick = () => {
      setRepetitions(repetitions + 1)
    }

    return (
      <button onClick={handleClick} className="TextRepeaterButton">
        {textArray}
      </button>
    );
  }

  export default TextRepeaterButton;