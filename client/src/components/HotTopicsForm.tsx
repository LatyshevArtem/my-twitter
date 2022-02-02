import React, {FC} from "react";
import styles from "./cssModules/HotTopicsForm.module.css";
import {SettingsIcon} from "./svgComponents/SettingsIcon";
import {ExtraMenuIcon} from "./svgComponents/ExtraMenuIcon";

export interface topic {
    countryName: string
    topicsName: string
    countTwits: string
}

export const topics: Array<topic> = [
    {countryName: "Россия", topicsName: "REvil", countTwits: "4775"},
    {countryName: "Россия", topicsName: "GO GO GO", countTwits: "3,22 млн"},
    {countryName: "Россия", topicsName: "#metalfamily", countTwits: "1225"},
    {countryName: "Россия", topicsName: "Фраппучино", countTwits: "0"},
    {countryName: "Россия", topicsName: "Great JOOOB", countTwits: "0"},
    {countryName: "Россия", topicsName: "#StaySafe", countTwits: "3222"}
]

export const topicsElements = topics.map(topic =>
    <div>
        <div className={styles.topic}>
            <div>
                <div className={styles.topicCountryName}>
                    <div>Актуальные темы: {topic.countryName}</div>
                    <div className={styles.topicExtraMenu}>
                        <div><ExtraMenuIcon/></div>
                    </div>
                </div>
                <div className={styles.topicName}>{topic.topicsName}</div>
                <div className={styles.topicCountTwits}>Твитов: {topic.countTwits}</div>
            </div>
        </div>
    </div>
)

export const HotTopicsForm: FC = () => {
    return (
        <div className={styles.hotTopicsForm}>
            <div className={styles.hotTopicsFormContent}>
                <div className={styles.hotTopicsFormContentHeader}>
                    <div>Актуальные темы для вас</div>
                    <div className={styles.hotTopicsFormSettingsIcon}>
                        <a href="#">
                            <div><SettingsIcon/></div>
                        </a>
                    </div>
                </div>
                {topicsElements}
                <div className={styles.buttonShowMoreTopics}>
                    <div>
                        <span>Показать еще</span>
                    </div>
                </div>
            </div>
        </div>
    );
}