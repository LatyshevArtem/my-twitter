import React, {FC} from "react";
import styles from "./cssModules/Post.module.css";
import { CommentIcon } from "./svgComponents/CommentIcon";
import { ExtraMenuIcon } from "./svgComponents/ExtraMenuIcon";
import { LikeIcon } from "./svgComponents/LikeIcon";
import { RetvitIcon } from "./svgComponents/RetvitIcon";
import { ShareIcon } from "./svgComponents/ShareIcon";
import {IPost} from "../types/types";

interface PostProps {
    post: IPost
}

export const Post: FC<PostProps> = ({post}) => {
    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postContent}>
                    <article className={styles.article}>
                        <div className={styles.articleTopMargin}></div>
                        <div className={styles.authorsImageAndArticleContent}>
                            <div className={styles.authorsImage}>
                                <a href="#">
                                    <img src={post.image} alt="Изображение автора"/>
                                </a>
                            </div>
                            <div className={styles.articleContent}>
                                <div className={styles.authorsDataAndExtraMenu}>
                                    <div className={styles.authorsData}>
                                        <div className={styles.authorsNameAndID}>
                                            <a href="#">
                                                <div className={styles.authorsName}>
                                                    {post.user.name}
                                                </div>
                                                <div className={styles.authorsID}>
                                                    {post.user.id}
                                                </div>
                                            </a>
                                        </div>
                                        {/*<div className={styles.authorsDataSeparator}>*/}
                                        {/*    <div>{post.user.dateOfBirth}</div>*/}
                                        {/*</div>*/}
                                        <a href="#" className={styles.dataPublished}>
                                            {post.publicationDate}
                                        </a>
                                    </div>
                                    <div className={styles.extraMenu}>
                                        <ExtraMenuIcon/>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.text}>
                                        <span>{post.text}</span>
                                    </div>
                                    <div className={styles.attachments}></div>
                                    <div className={styles.metaData}>
                                        <div className={styles.metaDataChild}>
                                            <div className={styles.metaDataChildIcon}>
                                                <CommentIcon/>
                                            </div>
                                            <div className={styles.metaDataChildCount}>
                                                {post.numberOfReply}
                                            </div>
                                        </div>
                                        <div className={styles.metaDataChild}>
                                            <div className={styles.metaDataChildIcon}>
                                                <RetvitIcon/>
                                            </div>
                                            <div className={styles.metaDataChildCount}>
                                                {post.numberOfRetweet}
                                            </div>
                                        </div>
                                        <div className={styles.metaDataChild}>
                                            <div className={styles.metaDataChildIcon}>
                                            <LikeIcon/>
                                            </div>
                                            <div className={styles.metaDataChildCount}>
                                                {post.numberOfLike}
                                            </div>
                                        </div>
                                        <div className={styles.metaDataChild}>
                                            <div className={styles.metaDataChildIcon}>
                                                <ShareIcon/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}