import {FC, useState} from "react";
import styles from "./Register.module.css";
import {MainLinkIcon} from "../components/svgComponents/header/MainLinkIcon";
import {GoogleIcon} from "../components/svgComponents/GoogleIcon";
import {AppleIcon} from "../components/svgComponents/AppleIcon";
import {CrossIcon} from "../components/svgComponents/CrossIcon";
import {useHttp} from "../hooks/http.hook";

export const Register: FC = () => {
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({email: "", password: ""})

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerFunction = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form})
            console.log("Data", data)
        } catch (e) {}
    }

    const showLogInPopUp = () => {
        document.getElementsByClassName(styles.logIn)
    }

    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                <div className={styles.imageAndIconSection}>
                    <MainLinkIcon/>
                </div>
                <div className={styles.RegistrationSection}>
                    <div className={styles.RegistrationSectionContent}>
                        <MainLinkIcon/>
                        <div className={styles.RegistrationSectionContentFirstText}>
                            В курсе происходящего
                        </div>
                        <div className={styles.RegistrationSectionContentSecondText}>
                            Присоединяйтесь к Твиттеру прямо сейчас!
                        </div>
                        <div className={styles.RegistrationSectionContentButtons}>
                            <div className={styles.signInWithSomeCompanyButtonWrapper}>
                                <div className={styles.signInWithSomeCompanyButtonContent}>
                                    <GoogleIcon/>
                                    <span>Регистрация с помощью Google</span>
                                </div>
                            </div>
                            <div className={styles.signInWithSomeCompanyButtonWrapper + ' ' + styles.apple}>
                                <div className={styles.signInWithSomeCompanyButtonContent + ' ' + styles.apple}>
                                    <AppleIcon/>
                                    <span>Регистрация с помощью Apple</span>
                                </div>
                            </div>
                            <div className={styles.registrationSectionButtonsSeparator}>
                                <div className={styles.line}></div>
                                <div className={styles.text}>или</div>
                                <div className={styles.line}></div>
                            </div>
                            <a href="#" className={styles.registrationWithEmailAndNumberWrapper}>
                                <div
                                    className={styles.registrationWithEmailAndNumberContent}
                                    onClick={() => {
                                        const element = document.getElementById("logIn")
                                        if (element) {
                                            element.style.display = "flex"
                                        }
                                    }}
                                >
                                    Зарегистрируйтесь с помощью номера м...
                                </div>
                            </a>
                            <div className={styles.privacyPolicyWrapper}>
                                Регистрируясь, вы соглашаетесь с
                                <a href="#"> Условиями предоставления услуг </a>
                                и
                                <a href="#"> Политикой конфединциальности</a>
                                , а так же с
                                <a href="#"> Политикой использования файлов cookie</a>
                                .
                            </div>
                            <div className={styles.logInSectionWrapper}>
                                <div className={styles.logInSectionText}>Уже зарегистрированы?</div>
                                <a href="#" className={styles.logInSectionButton}>
                                    <div>
                                        Войти
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.logIn} id="logIn">
                <div className={styles.logInForm}>
                    <div className={styles.formHeader}>
                        <div className={styles.formHeaderOddChild}>
                            <div className={styles.formHeaderCrossIcon}
                                 onClick={() => {
                                     const element = document.getElementById("logIn")
                                     if (element) {
                                         element.style.display = "none"
                                     }
                                 }}>
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
                            <div className={styles.usersLogin}>
                                <input type="text" placeholder="Aдреc электронной почты" name="email" onChange={changeHandler}/>
                            </div>
                            <div className={styles.usersPassword}>
                                <input type="text" placeholder="Пароль" name="password" onChange={changeHandler}/>
                            </div>
                            <div className={styles.button + ' ' + styles.logInButton} onClick={registerFunction}>
                                <div>Регистрация</div>
                            </div>
                            <div className={styles.button + ' ' + styles.forgetPasswordButton}>
                                <div>Забыли пароль?</div>
                            </div>
                            <span className={styles.backToRegistration}>
                                Нет учетной записи?
                            <a href="#"> Зарегистрирутесь</a>
                            </span>
                        </div><div className={styles.formContentPaddingBottom}></div>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <nav className={styles.footerNav}>
                    <a href="#">О нас</a>
                    <a href="#">Справочный центр</a>
                    <a href="#">Условия предоставления услуг</a>
                    <a href="#">Политика конфеденциальности</a>
                    <a href="#">Политика в отношении файлов cookie</a>
                    <a href="#">Специальные возможности</a>
                    <a href="#">Информация о рекламе</a>
                    <a href="#">Блог</a>
                    <a href="#">Статус</a>
                    <a href="#">Работа</a>
                    <a href="#">Ресурсы бренда</a>
                    <a href="#">Реклама</a>
                    <a href="#">Маркетинг</a>
                    <a href="#">Твиттер для бизнеса</a>
                    <a href="#">Разработчикам</a>
                    <a href="#">Каталог</a>
                    <a href="#">Настройки</a>
                    <div>© Twitter, Inc., 2022.</div>
                </nav>
            </footer>
        </main>
    );
}