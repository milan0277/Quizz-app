import React, { useContext } from "react";
import { Quizzcontext } from "../Helpers/Context";

function Menu() {
  const { gstate, setgstate } = useContext(Quizzcontext);

  return (
    <div className="Menu">
      {/* <h1>Menu</h1> */}
      <button onClick={() => setgstate('quiz')}>Start Quiz</button>
    </div>
  );
}

export default Menu;
