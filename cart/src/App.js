import React from "react";
import Header from "./components/Header/Header";
import './App.css'
import TitleSection from "./components/TitleSection/TitleSection";
import MealList from "./components/MealList/MealList";

const App = () => {
  return (
    <>
      <Header />
      <TitleSection />
      <MealList />
    </>
  )
}

export default App;