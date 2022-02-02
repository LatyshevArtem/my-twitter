import React, {FC} from "react";
import styles from "./Layout.module.css"
import { Header } from "../components/Header";
import { ActualAndSearchForm } from "../components/ActualAndSearchForm";
import {default_image} from "../App";

export const Layout: FC = ({children}) => {
    return (
        <div className={styles.layout}>
            <header>
                <Header usersName={"Dart Vader"} usersId={"DartVader228"} usersImage={default_image}/>
            </header>
            <main className={styles.main}>
                <div className={styles.layoutChildren}>
                    {children}
                </div>
                <div className={styles.actualForm}>
                    <ActualAndSearchForm/>
                </div>
            </main>
        </div>
    );
}