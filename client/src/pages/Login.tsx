import {FC, useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import styles from "./Login.module.css";
import {MainLinkIcon} from "../components/svgComponents/header/MainLinkIcon";
import {CrossIcon} from "../components/svgComponents/CrossIcon";
import {GoogleIcon} from "../components/svgComponents/GoogleIcon";
import {AppleIcon} from "../components/svgComponents/AppleIcon";
import {Auth} from "../context/Auth";

export const Login: FC = () => {
    const auth = useContext(Auth)
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({email: "", password: ""})

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginFunction = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className={styles.logIn}>
            <div className={styles.logInForm}>
                <div className={styles.formHeader}>
                    <div className={styles.formHeaderOddChild}>
                        <div className={styles.formHeaderCrossIcon}>
                            <CrossIcon/>
                        </div>
                    </div>
                    <div className={styles.formHeaderTwitterIcon}>
                        <MainLinkIcon/>
                    </div>
                    <div className={styles.formHeaderOddChild + ' ' + styles.last}></div>
                </div>
                <div className={styles.formContent}>
                    <div className={styles.formContentWrapper}>
                        <div className={styles.formContentHeaderWrapper}>
                            <div>Вход в Твиттер</div>
                        </div>
                        <div className={styles.button + ' ' + styles.logInWithGoogle}>
                            <div>
                                <GoogleIcon/>
                                Вход через аккаунт Google
                            </div>
                        </div>
                        <div className={styles.button + ' ' + styles.logInWithApple}>
                            <div>
                                <AppleIcon/>
                                Вход с учетной записью Apple
                            </div>
                        </div>
                        <div className={styles.formContentButtonsSeparator}>
                            <div className={styles.separatorLine}></div>
                            <div className={styles.separatorText}>или</div>
                            <div className={styles.separatorLine}></div>
                        </div>
                        <div className={styles.usersLogin}>
                            <input type="text" placeholder="Aдреc электронной почты" name="email" onChange={changeHandler}/>
                        </div>
                        <div className={styles.usersPassword}>
                            <input type="text" placeholder="Пароль" name="password" onChange={changeHandler}/>
                        </div>
                        <div className={styles.button + ' ' + styles.logInButton} onClick={loginFunction}>
                            <div>Войти</div>
                        </div>
                        <div className={styles.button + ' ' + styles.forgetPasswordButton}>
                            <div>Забыли пароль?</div>
                        </div>
                        <span className={styles.backToRegistration}>
                            Нет учетной записи?
                            <a href="#"> Зарегистрирутесь</a>
                        </span>
                    </div>
                    <div className={styles.formContentPaddingBottom}></div>
                </div>
            </div>
        </div>
    );
}