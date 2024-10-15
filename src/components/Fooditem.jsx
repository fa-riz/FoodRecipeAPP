import styles from "./fooditem.module.css";
export default function Fooditem({ food, setfoodId }) {
  return (
    <div className={styles.itemcontainer}>
      <img className={styles.itemimage} src={food.image} />
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
          }}
          className={styles.itembutton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
