import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import RecipeCard from "./recipeCard";

export default function Main() {
  const [recipes, setRecipes] = useState([]);
  const handleCardClick = (e) => {};
  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals);
      });
  };

  useEffect(fetchData, []);
  return (
    <>
      <h1 className="header">All recipes</h1>
      <main className="wrapper">
        {recipes.length &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              name={recipe.strMeal}
              img={recipe.strMealThumb}
              id={recipe.idMeal}
            ></RecipeCard>
          ))}
      </main>
    </>
  );
}
