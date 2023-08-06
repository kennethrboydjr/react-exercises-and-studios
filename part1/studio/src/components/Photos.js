import styles from "./Description.module.css";

export default function RecipePhoto() {
  return (
    <div>
      <img
        src="https://i0.wp.com/www.onceuponachef.com/images/2019/04/Lemon-Pound-Cake-10-scaled.jpg?resize=760%2C587&ssl=1"
        alt="Lemon Pound Cake photo"
        className={styles.imageUpdates}
      />
    </div>
  );
}
