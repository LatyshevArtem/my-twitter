import {FC} from "react";
import styles from "./cssModules/ProfileHeader.module.css";
import {CalendarIcon} from "./svgComponents/CalendarIcon";
import {IUser} from "../types/types";
import {defaultTmageHeader} from "../App";

interface ProfileHeaderProps {
    user: IUser
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({user}) => {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.imageHeader}>
              <a href="#">
                  <img src={defaultTmageHeader} alt="Изображение пользователя"/>
              </a>
          </div>
          <div className={styles.dataUsersWrapper}>
              <div className={styles.usersImageAndEditProfileButton}>
                  <div className={styles.usersImageWrapper}>
                      {/*<div>*/}
                          <a href="#">
                              <img src={user.image} alt="Изображение пользователя"/>
                          </a>
                      {/*</div>*/}
                  </div>
                  <div className={styles.editProfileButton}>
                      <a href="#">Изменить профиль</a>
                  </div>
              </div>
              <div className={styles.usersNameAndID}>
                  <div className={styles.usersName}>{user.name}</div>
                  <div className={styles.usersID}>{user.id}</div>
              </div>
              {/*<div className={styles.registrationDate}>*/}
              {/*    <CalendarIcon/>Регистрация: {user.dateOfBirth}*/}
              {/*</div>*/}
              <div className={styles.usersBio}>{user.biography}</div>
              <div className={styles.followingAndFollowers}>
                  <div className={styles.following}>
                      <span>{user.numberOfFollowing}</span> в читаемых
                  </div>
                  <div className={styles.followers}>
                      <span>{user.numberOfFollowers}</span> читателей
                  </div>
              </div>
          </div>
        </div>
    );
}