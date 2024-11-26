"use client";

import { useState } from "react";
import CategoriesCard from './CategoriesCard';
import { categories } from '../items';
import { createKey } from '@/lib/createKey';
import styles from "./Categories.module.scss";
import InputSearch from '@/components/shared/InputField/InputSearch';
import LoadMore from '@/components/shared/LoadMore/LoadMore';
import ModalSubCategoryChallenges from '../../modals/ModalSubCategoryChallenges/ModalSubCategoryChallenges';
import Image from 'next/image';
import Geego from "../../../../public/images/Geego.svg";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // initial visible count
  
  //Filter categories based on search query
  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

    //LoadMOre Function
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div >
          <h1 className={styles.title} >GEEGOCITY</h1>
        </div>
      <div className={styles.elips}>
        <Image
          className={styles.rotate}
          src={Geego}
          alt="geego circle"
          sizes="100%" fill
          />
      </div>
      </div>
      <p className={styles.text}>
        Geegocityssä liikkumisen taidot vahvistuvat ja 
          <br />lapsi oppii yhdistelemään niitä.
      </p>
      </div>
      <div className={styles.challengesContainer}>
        <InputSearch
          className={styles.search}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Haku sana"
        />
        <div className={styles.content}>
          {filteredCategories.length > 0 ? (
            filteredCategories.slice(0, visibleCount).map((data) => (
              <CategoriesCard key={createKey()} data={data} />
            ))
          ) : (
            <p>No Categories found.</p> // There will be modal window  "Page undeR DEVELOPMENT"

          )}
        </div>
        <LoadMore onClick={handleLoadMore} />
        <ModalSubCategoryChallenges/>
      </div>
      
    </section>
  );
};

export default Categories;
