import React from "react";

import styles from "./ContactUs.module.sass";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ContactUs({contactRef, openContact}) {
    const schema = yup.object().shape({
        email: yup.string().email('email введён неправильно').required('Вы не ввели email'),
      });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmitHandler = (data) => {
      console.log({ data });
      reset();
    };
    return (
        <div ref={contactRef} className={openContact === true ? styles.contact : styles.contact + ' ' + styles.contact_disabled}>
            <div className={styles.contact__wrapper}>
            <h2 className={styles.contact__title}>Новое письмо</h2>
            <div className={styles.contact__descr}>Напишите нам, если у вас возникли вопросы или предложения :)</div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <fieldset>
                    <legend>Ваш email <span>{errors.email?.message}</span></legend>
                    <input {...register("email")} type="text"/>
                </fieldset>
                <input type="submit" value="Отправить"/>
            </form>
            </div>
        </div>
    )
}
export default ContactUs;