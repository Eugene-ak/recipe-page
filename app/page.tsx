import Image from "next/image";
import omelette from "@/public/assets/images/image-omelette.jpeg";
import { youngSerif } from "./fonts";
import style from "./home.module.scss";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <div className={style.image_container}>
          <Image src={omelette} className={style.image} alt="omelette" />
        </div>

        <section className={style.section}>
          <h1 className={`${youngSerif.className} ${style.main_heading}`}>
            Simple Omelette Recipe
          </h1>
          <p className={style.description}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className={style.preparation_container}>
            <h2 className={style.preparation_heading}>Preparation time</h2>
            <ul className={style.list}>
              <li className={style.preparation_list_items}>
                <span>Total:</span> Approximately 10 minutes
              </li>
              <li className={style.preparation_list_items}>
                <span>Preparation:</span> 5 minutes
              </li>
              <li className={style.preparation_list_items}>
                <span>Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={`${youngSerif.className} ${style.section_heading}`}>
            Ingredients
          </h2>
          <ul className={style.list}>
            <li className={style.list_items}>2-3 large eggs</li>
            <li className={style.list_items}>Salt, to taste</li>
            <li className={style.list_items}>Pepper, to taste</li>
            <li className={style.list_items}>1 tablespoon of butter or oil</li>
            <li className={style.list_items}>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <section className={style.section}>
          <h2 className={`${youngSerif.className} ${style.section_heading}`}>
            Instructions
          </h2>
          <ol className={style.list}>
            <li className={style.list_items}>
              <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li className={style.list_items}>
              <span>Heat the pan:</span> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li className={style.list_items}>
              <span>Cook the omelette:</span> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li className={style.list_items}>
              <span>Add fillings (optional):</span> When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li className={style.list_items}>
              <span>Fold and serve:</span> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li className={style.list_items}>
              <span>Enjoy:</span> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </section>

        <section className={style.section}>
          <h2 className={`${youngSerif.className} ${style.section_heading}`}>
            Nutrition
          </h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className={style.table}>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer className={style.footer}>
        <div>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://portfolio-website-27ll.onrender.com/">Eugene Amedior</a>.
        </div>
      </footer>
    </>
  );
}
