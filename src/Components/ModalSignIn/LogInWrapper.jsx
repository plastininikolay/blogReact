import React from "react";
import styles from "./SignIn.module.sass";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";

import axios from "axios";

function LogInWrapper() {

    const schema = yup.object().shape({
        email: yup.string().email('email введён неправильно').required('Вы не ввели email'),
        password: yup.string().min(8, 'Пароль слишком короткий').max(32, 'Пароль слишком длинный').required('Вы не ввели пароль'),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmitHandler = (data) => {
        console.log({ data });
        //axios.post('http://login/app.php', data).then(response => {
        //    console.log(response + ' ' + 'server answer');
        //})
        reset();
        document.location.href = 'post/1';

    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={styles.modal__input}>
                <input {...register("email")} type="text" placeholder="Введите email" />
                <div className={styles.modal__errors}>{errors.email?.message} </div>
            </div>
            <div className={styles.modal__input}>
                <input  {...register("password")} type="password"placeholder="Введите пароль" />
                <div className={styles.modal__errors}>{errors.password?.message}</div>
            </div>
            <input type="submit" value="Войти"/>
        </form>
    )
}

export default LogInWrapper;