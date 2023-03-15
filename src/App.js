import { useState } from "react";
import QRCode from "react-qr-code";

import "./App.css";

function App() {
  const [text, settext] = useState("");
  return (
    <div className="App">
      <div className="left-section">
        <h1>QR Code Generator</h1>
        <input type="text" onChange={(e) => settext(e.target.value)}></input>
      </div>
      <div className="right-section">
        <QRCode value={text} />
      </div>
    </div>
  );
}

export default App;
