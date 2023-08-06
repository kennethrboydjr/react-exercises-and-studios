export default function BookList() {
  let pageTitle = "Latest Book Releases";
  let book1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxAf6Qa_G0dgPZiJYZSfszCKNZSq34x9AWg&usqp=CAU";
  let book2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdx5KHpHT28PjDjI-UZ38cUDNQ0QlP8Ws7w&usqp=CAU";
  let book3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsx2lfZ9AqnBRT_56jPBg5XJQvBCF6cRUPXL4KHqbhUTzUhQzG-kqHJcik2Ut-CuhQdk&usqp=CAU";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The Lord of the Rings" />
      <img src={book2} alt="The Hobbit" />
      <img src={book3} alt="The Return of the King" />
    </div>
  );
}
