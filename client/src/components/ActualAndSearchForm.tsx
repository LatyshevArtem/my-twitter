import React from "react";
import styles from "./cssModules/HotTopicsAndSearchForm.module.css";
import {SearchForm} from "./SearchFofrm";
import {HotTopicsForm} from "./HotTopicsForm";

export const ActualAndSearchForm = () => {
    return (
        <div className={styles.actualAndSearchForm}>
            <div className={styles.first}><SearchForm/></div>
            <div className={styles.second}><HotTopicsForm/></div>
        </div>
    );
}