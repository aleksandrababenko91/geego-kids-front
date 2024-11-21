"use client";

import { useState } from "react";
import CategoriesCard from './CategoriesCard';
import { categories } from '../items';
import { createKey } from '@/lib/createKey';
import styles from "./Categories.module.scss";
import InputSearch from '@/components/shared/InputField/InputSearch';
import LoadMore from '@/components/shared/LoadMore/LoadMore';
import ModalSubCategoryGroup from '../../modals/ModalSubCategoryGroup/ModalSubCategoryGroup';

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
      <div className={styles.challengesContainer}>
        <h1 className={styles.title}>KOULU</h1>
        <p className={styles.title}>Geegon koulu yhdistää oppimisen ja liikkumisen jännittäväksi kokemukseksi.</p>
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
        <ModalSubCategoryGroup/>
      </div>
      
    </section>
  );
};

export default Categories;
