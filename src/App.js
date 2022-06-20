import Header from "./Components/Header/Header";
import Pokemons from "./Components/Pokemons/Pokemons";
import Pokemons2 from "./Components/Pokemons2/Pokemons2";
import RickAndMorty from "./Components/RickAndMorty/RickAndMorty";
import AddProduct from "./Components/AddProduct/AddProduct";
import Users from "./Components/Users/Users";
import "./App.css";
import { Paper, Rating } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех наших страницах */}
      <Header />
      {/* для перечисления роутов */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons2" element={<Pokemons2 />} />
        <Route path="rickandmorty" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Pokemons2 />
    //   <Rating />
    //   <Paper />
    //   <Pokemons />
    //   <RickAndMorty />
    //   <Users />
    // </div>
  );
}

export default App;
