import styles from "./Description.module.css";
import React from "react";

const RecipeAuthor = () => {
  let authorLink = "https://www.onceuponachef.com/";
  let authorPhoto =
    "https://i0.wp.com/www.onceuponachef.com/images/2019/04/jenn-segal@2x.jpg?resize=270%2C270&ssl=1";
  let authorName = "Jenn Segal";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Once Upon a Chef</a>
      </div>
    </div>
  );
};

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Lemon Pound Cake</h1>
          <p>This lemon pound cake is the ultimate dessert for lemon lovers.</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
