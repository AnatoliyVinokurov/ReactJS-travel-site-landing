import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <Comp4/>
      <Comp5/>
      <Comp6/>
      <Comp7/>
      <Comp8/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
