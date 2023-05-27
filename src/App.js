import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [jp2price, setJp2Price] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.public.cookie3.co/NftCollection/price/latest/0x20b57a5e4822b660fd5a558acd6a18bf91ac59a1",
      {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
          "x-api-key": "74e9f60e-9e6b-4d46-94b0-7c3ed5a2d931",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setJp2Price(data.usdPrice));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"https://www.jpdlugi.org/assets/photos/jp2.png"}
          className="App-logo"
          alt="logo"
        />
        <p>JP2 COIN: {jp2price}USD</p>
        <p>nft contract: 0x20b57a5e4822b660fd5a558acd6a18bf91ac59a1</p>
      </header>
    </div>
  );
}

export default App;
