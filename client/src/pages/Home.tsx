import {FC} from "react";
import styles from "./Home.module.css";
import {Layout} from "../layout/Layout";
import {PostCreationForm} from "../components/PostCreationForm";
import {StarsIcon} from "../components/svgComponents/StarsIcon";

export const Home: FC = () => {
    return (
        <Layout>
            <div className={styles.homeLabel}>
                <div className={styles.homeLabelContent}>
                    <div className={styles.homeLabelContentText}>Главная</div>
                    <div className={styles.homeLabelContentIcon}><StarsIcon/></div>
                </div>
            </div>
            <PostCreationForm/>
        </Layout>
    );
}