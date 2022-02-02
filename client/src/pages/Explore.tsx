import React, {FC, useState} from "react";
import styles from "./Explore.module.css";
import {Header} from "../components/Header";
import {default_image} from "../App";
import {SearchForm} from "../components/SearchFofrm";
import {SettingsIcon} from "../components/svgComponents/SettingsIcon";
import {topicsElements} from "../components/HotTopicsForm";

export const Explore: FC = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header usersName={"Dart Vader"} usersId={"@DartVader"} usersImage={default_image} />
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.mainContentHeader}>
                        <div className={styles.headerSearchForm}>
                            <SearchForm/>
                        </div>
                        <div className={styles.headerIcon}>
                            <SettingsIcon/>
                        </div>
                    </div>
                    <div className={styles.hotTopicsHeader}>
                        Актуальные темы для вас
                    </div>
                    {topicsElements}
                    <div className={styles.buttonShowMoreTopics}>
                        <div>
                            <span>Показать еще</span>
                        </div>
                    </div>
                    <div className={styles.hotTopicsSeparator}></div>
                </div>
            </main>
        </div>
    );
}