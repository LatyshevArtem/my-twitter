import {FC, useState} from "react";
import styles from "./Profile.module.css";
import {Layout} from "../layout/Layout";
import {ProfileHeader} from "../components/ProfileHeader";
import {Post} from "../components/Post";
import {IPost, IUser} from "../types/types";
import {user} from "../App";

const posts: Array<IPost> = require("../TempPosts.json")

let postsElements = posts.map(post => <Post post={post}/>)
let postsElementsWidthImage = posts.filter(post => post.text.length >= 10).map(post => <Post post={post}/>)

export const Profile = () => {
    const [activeTab, setActiveTab] = useState<number>(1)

    const tabStyles = styles.navItem
    const activeTabStyles = styles.navItem + ' ' + styles.activeNav

    const navItemStyles = (tabNumber: number) => {
        return tabNumber === activeTab ? activeTabStyles : tabStyles
    }

    return (
        <Layout>
            <ProfileHeader user={user}/>
            <div>
                <nav className={styles.tabBarNav}>
                    <div className={navItemStyles(1)} onClick={() => setActiveTab(1)}>
                        <span>Твиты</span>
                        <div className={styles.tabNameUnderline}></div>
                    </div>
                    <div className={navItemStyles(2)} onClick={() => setActiveTab(2)}>
                        <span>Твиты и ответы</span>
                        <div className={styles.tabNameUnderline}></div>
                    </div>
                    <div className={navItemStyles(3)} onClick={() => setActiveTab(3)}>
                        <span>Медиа</span>
                        <div className={styles.tabNameUnderline}></div>
                    </div>
                    <div className={navItemStyles(4)} onClick={() => setActiveTab(4)}>
                        <span>Нравится</span>
                        <div className={styles.tabNameUnderline}></div>
                    </div>
                </nav>
                <div className={styles.tabBarContent}>
                    <section className={activeTab === 1 ? styles.activeContentStyle : styles.contentItem}>
                        {postsElements}
                    </section>
                    <section className={activeTab === 2 ? styles.activeContentStyle : styles.contentItem}>

                    </section>
                    <section className={activeTab === 3 ? styles.activeContentStyle : styles.contentItem}>

                    </section>
                    <section className={activeTab === 4 ? styles.activeContentStyle : styles.contentItem}>

                    </section>
                </div>
            </div>
        </Layout>
    );
}