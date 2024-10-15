import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Conatiner";
import Innercontainer from "./components/Innercontainer";
import Fooddetail from "./components/Fooddetail";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <Innercontainer>
          <Foodlist foodData={foodData} foodId={foodId} setfoodId={setfoodId} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetail foodId={foodId}></Fooddetail>
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
