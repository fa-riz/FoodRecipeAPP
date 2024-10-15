import styles from "./innercontainer.module.css";
export default function Innercontaine({ children }) {
  return <div className={styles.innercontainer}>{children}</div>;
}
