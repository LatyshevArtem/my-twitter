import React, {FC} from "react";
import styles from "./cssModules/PostCreationForm.module.css";
import { DateAttachmentIcon } from "./svgComponents/DateAttachmentIcon";
import { GifAttachmentIcon } from "./svgComponents/GifAttachmentIcon";
import { ImageAttachmentIcon } from "./svgComponents/ImageAttachmentIcon";
import { SheetAttachmentIcon } from "./svgComponents/SheetAttachmentIcon";
import { SmileAttachmentIcon } from "./svgComponents/SmileAttachmentIcon";
import {PointInMap} from "./svgComponents/PointInMap,";

export const PostCreationForm: FC = () => {
    return (
        <div className={styles.postCreationForm}>
            <div className={styles.firstWrapper}>
                <div className={styles.someProgressBar}>
                </div>
                <div className={styles.secondWrapper}>
                    <div className={styles.thirdWrapper}>
                        <div className={styles.content}>
                            <div className={styles.imageSection}>
                                <a href="#">
                                    <img src="images/default_profile_x96.png" alt="Изображение пользователя"/>
                                </a>
                            </div>
                            <div className={styles.inputFormAndToolsSection}>
                                <div className={styles.inputForm}>
                                    <div className={styles.inputFormBorder}>
                                        <input placeholder="Что происходит?" type="text"/>
                                    </div>
                                </div>
                                <div className={styles.toolsSection}>
                                    <div className={styles.toolsSectionIcons}>
                                        <div className={styles.icon}>
                                            <ImageAttachmentIcon/>
                                        </div>
                                        <div className={styles.icon}>
                                            <GifAttachmentIcon/>
                                        </div>
                                        <div className={styles.icon}>
                                            <SheetAttachmentIcon/>
                                        </div>
                                        <div className={styles.icon}>
                                            <SmileAttachmentIcon/>
                                        </div>
                                        <div className={styles.icon}>
                                            <DateAttachmentIcon/>
                                        </div>
                                        <div className={styles.icon}>
                                            <PointInMap/>
                                        </div>
                                    </div>
                                    <div className={styles.toolsSectionTwitButton}>
                                        <div>
                                            <span>Твитнуть</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}