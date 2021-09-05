import React from "react";
import NewsItem from "../Components/News-item/NewsItem";
import styles from './Home.module.sass'
import {Link} from "react-router-dom";


function Home() {
    const animals = [
        { id: 1, animal: "Dog" },
        { id: 2, animal: "Bird" },
        { id: 3, animal: "Cat" },
        { id: 4, animal: "Mouse" },
        { id: 5, animal: "Horse" }
      ];
    return (
        <div className={styles.items_wrapper}>
            {animals.map((item, idx)=><Link className={styles.item__link} to={`/${idx}`}><NewsItem/></Link>)}
      
        </div>
    )
}
export default Home;