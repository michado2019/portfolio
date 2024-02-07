import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/routes/AppRouter";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
