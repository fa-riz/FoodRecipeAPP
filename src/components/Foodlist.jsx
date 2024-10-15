import Fooditem from "./Fooditem";

export default function Foodlist({ foodData ,foodId,setfoodId}) {
  return (
    <div>
      {" "}
      {foodData.map((food) => (
        <Fooditem setfoodId={setfoodId} food={food} key={food.id} />
      ))}
    </div>
  );
}
