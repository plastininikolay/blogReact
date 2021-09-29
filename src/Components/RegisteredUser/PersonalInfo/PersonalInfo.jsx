import React from "react";
import styles from "./PersonalInfo.module.sass"
import icon from "../../../assets/icons/personalInfo.svg"
import personalAvatar from "../../../assets/images/PersonalAvatar.png"

function PersonalInfo() {
    return(
        <section className={styles.personal}>
            <img className={styles.personal__icon} src={icon} alt="personal_icon"/>
            <div className={styles.personal__card}>
                <div className={styles.personal__wrapper}>
                    <div className={styles.personal__first}>
                        <div className={styles.personal__title}>
                            Личная информация
                        </div>
                        <div className={styles.personal__info}>Nickname: Jack228</div>
                        <div className={styles.personal__info}>Почта: Jack228</div>
                        <div className={styles.personal__info}>Пароль: ********</div>
                    </div>
                    <div className={styles.personal__second}>
                        <img src={personalAvatar}/>
                        <div className={styles.personal__change}>Изменить</div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default PersonalInfo;