"use client";

import clsx from "clsx";
import { useRef} from "react";
import styles from "./InputSearch.module.scss";
import Image from "next/image";
import search from '../../../../public/images/search.svg';
import close_black from '../../../../public/images/close_black.svg';

const InputSearch = ({ onChange, className, placeholder = "Haku sana", value }) => {
  const inputRef = useRef(null);
  const handleSearch = () => {
    onChange({ target: { value: inputRef.current.value } });
  };
  const handleClear = () => {
    onChange({ target: { value: "" } }); // clean in parent component
    inputRef.current.focus();
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <input
        ref={inputRef}
        type="text"
        maxLength={300}
        placeholder={placeholder}
        value={value}
        onChange={onChange} // Событие для фильтрации при каждом вводе
      />
      <button
        type="button"
        className={clsx(styles.close, value.length > 0 && styles.show)}
        onClick={handleClear}
      >
      <Image alt="close btn image" src={close_black} width={20} height={20} />
      </button>
      <button
        onClick={handleSearch}
        type="button"
        className={styles.submit}
      >
        <Image src={search} width={18} height={18} alt="search btn" />
      </button>
    </div>
  );
};

export default InputSearch;
