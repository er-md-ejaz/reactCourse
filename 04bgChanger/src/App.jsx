import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-2xl font-bold mb-6">Background Color Changer</h1>

      {/* Predefined color buttons */}
      <div className="space-x-2 mb-4">
        {["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"].map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            className="px-4 py-2 rounded border"
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>

      {/* Color picker */}
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        className="w-16 h-16 cursor-pointer border-2 border-black"
      />
    </div>
  );
}

export default App;
