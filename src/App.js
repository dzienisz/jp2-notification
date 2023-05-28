import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [price, setPrice] = useState(0);

  // const contractAddress = "0x20b57a5e4822b660fd5a558acd6a18bf91ac59a1"; // jap paweł
  // const contractAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"; // punks
  const contractAddress = "0x8821BeE2ba0dF28761AffF119D66390D594CD280"; // degods

  useEffect(() => {
    fetch(
      "https://api.public.cookie3.co/NftCollection/price/" + contractAddress,
      {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
          "x-api-key": "74e9f60e-9e6b-4d46-94b0-7c3ed5a2d931",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setPrice(data[0].usdPrice));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"https://www.jpdlugi.org/assets/photos/jp2.png"}
          className="App-logo"
          alt="logo"
        />
        <p>price: {price.toFixed(2)}USD</p>
        <p>nft contract: {contractAddress}</p>
      </header>
    </div>
  );
}

export default App;
