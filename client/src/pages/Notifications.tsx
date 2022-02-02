import React, {FC} from "react";
import styles from "./Notifications.module.css";
import {Layout} from "../layout/Layout";
import {SettingsIcon} from "../components/svgComponents/SettingsIcon";

export const Notifications: FC = () => {
    return (
        <Layout>
            <div className={styles.notificationsLabel}>
                <div className={styles.notificationsLabelContent}>
                    <div className={styles.notificationsLabelContentText}>Уведомления</div>
                    <div className={styles.notificationsLabelContentIcon}><SettingsIcon/></div>
                </div>
            </div>
        </Layout>
    );
}