import {FC} from "react";
import styles from "./cssModules/SearchForm.module.css";
import {SearchIcon} from "./svgComponents/searchForm/SearchIcon";

export const SearchForm: FC = () => {
    return (
        <div className={styles.searchFormContent}>
            <div className={styles.searchFormIcon}>
                <SearchIcon/>
            </div>
            <div className={styles.inputField}>
                <input type="text" placeholder="Поиск в Твиттере"/>
            </div>
        </div>
    );
}