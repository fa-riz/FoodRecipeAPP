import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Itemlist from "./Itemlist";

export default function Fooddetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apikey = "20d10c0cc70d4748af94c995fd5ec083";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${apikey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setisLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}>{food.title}</h1>
        <img className={styles.recipeimage} src={food.image} alt=" "></img>
        <div className={styles.recipedetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes 🕛</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
          </span>
          <strong>
            <span>
              {food.vegetarian ? "vegetarian 🍆" : "non-vegetarian🥩"}
            </span>
          </strong>
          <strong>
            {" "}
            <span>{food.vegan ? "🐮Vegan" : ""}</span>
          </strong>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <Itemlist food={food} isLoading={isLoading}/>
        <h2> INSTRUCTIONS</h2>
        <div className={styles.recipeinstruction}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
