import React, {FC} from "react";
import {Link} from "react-router-dom";
import styles from "./cssModules/Header.module.css";
import { IconMain } from "./svgComponents/header/IconMain";
import { IconOverview } from "./svgComponents/header/IconOverview";
import { MessageIcon } from "./svgComponents/header/MessageIcon";
import { NotificationIcon } from "./svgComponents/header/NotificationIcon";
import { ProfileIcon } from "./svgComponents/header/ProfileaIcon";
import {MainLinkIcon} from "./svgComponents/header/MainLinkIcon";
import {ExtraMenuIcon} from "./svgComponents/ExtraMenuIcon";
import {SideBarExtraMenuIcon} from "./svgComponents/SideBarExtraMenuIcon";
import {BookmarksIcon} from "./svgComponents/BookmarksIcon";
import {ListsIcon} from "./svgComponents/ListsIcon";

export interface usersNameIdAndImage {
    usersName: string
    usersId: string
    usersImage: string
}

export const Header: FC<usersNameIdAndImage> =
    ({
         usersName,
         usersId,
         usersImage
    }) => {

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.menu}>
                    <div className={styles.menuContent}>
                        <div className={styles.mainLink}>
                                <Link to="/">
                                    <MainLinkIcon/>
                                </Link>
                            </div>
                        <div className={styles.navigation}>
                            <nav>
                                <Link to="/">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <IconMain/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Главная</div>
                                    </div>
                                </Link>
                                <Link to="/explore">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <IconOverview/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Обзор</div>
                                    </div>
                                </Link>
                                <Link to="/notifications">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <NotificationIcon/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Уведомления</div>
                                    </div>
                                </Link>
                                <Link to="/messages">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <MessageIcon/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Сообщения</div>
                                    </div>
                                </Link>
                                <Link to="/bookmarks">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <BookmarksIcon/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Закладки</div>
                                    </div>
                                </Link>
                                <Link to="/lists">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <ListsIcon/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Списки</div>
                                    </div>
                                </Link>
                                <Link to="/user">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <ProfileIcon/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Профиль</div>
                                    </div>
                                </Link>
                                <Link to="#">
                                    <div className={styles.navigationLinkContent}>
                                        <div className={styles.navigationLinkContentIcon}>
                                            <SideBarExtraMenuIcon/>
                                        </div>
                                        <div className={styles.navigationLinkText}>Еще</div>
                                    </div>
                                </Link>
                            </nav>
                        </div>
                        <div className={styles.twitButton}>
                            <a href="">
                                <span className={styles.twitButtonText}>Твитнуть</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.profileSettings}>
                        <div className={styles.profileSettingsWrapper}>
                            <div className={styles.profileSettingsContent}>
                                <div className={styles.profileSettingsContentFirstChild}>
                                    <div className={styles.usersImage}>
                                        <img src={usersImage} alt="Изображение пользователя"/>
                                    </div>
                                    <div className={styles.usersNameAndId}>
                                        <div className={styles.usersNameAndIdContent}>
                                            <div className={styles.usersName}>
                                                {usersName}
                                            </div>
                                            <div className={styles.usersId}>
                                                @{usersId}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.extraMenuIcon}>
                                    <ExtraMenuIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
