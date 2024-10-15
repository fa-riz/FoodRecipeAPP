import Item from "./Item";
export default function Itemlist({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loadig</p>
      ) : (
        food.extendedIngredients &&
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
