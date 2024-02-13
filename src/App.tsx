import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/routes/AppRouter";
import SmallScreenNavbar from "./components/navbar/smallScreenNavbar/SmallScreenNavbar";

function App() {

  //Toggling of menu
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <div>
        <Navbar isOpened={isOpened} setIsOpened={setIsOpened}/>
        <SmallScreenNavbar isOpened={isOpened} setIsOpened={setIsOpened}/>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
