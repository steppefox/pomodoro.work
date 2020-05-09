import React from "react";

const Keybindings = () => {
  return (
    <div>
      <span className="link-title">Keybindings</span>
      <div className="keybindings">
        <div>
          Start / Pause — <kbd>Spacebar</kbd>
        </div>
        <div>
          Reset — <kbd>r</kbd>
        </div>
      </div>
    </div>
  );
};

export default Keybindings;
