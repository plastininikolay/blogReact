import React from "react";

import styles from './SignIn.module.sass'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SignIn({openModal, setOpenModal, IconRef}) {

    const schema = yup.object().shape({
        email: yup.string().email('email введён неправильно').required('Вы не ввели email'),
        password: yup.string().min(8, 'Пароль слишком короткий').max(32, 'Пароль слишком длинный').required('Вы не ввели пароль'),
      });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });


    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
      };

    const buttonRef = React.useRef(null)

    React.useEffect(()=> {
        const outSideClickHandlerModal = (event) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(buttonRef.current) && !path.includes(IconRef.current)){ 
                setOpenModal(false)
            }
        };
        document.body.addEventListener('click', outSideClickHandlerModal)
    },[buttonRef, IconRef, setOpenModal]);

    return (
        <>
        {openModal ?
            <form onSubmit={handleSubmit(onSubmitHandler)} ref={buttonRef} className={styles.modal}>
            <button  onClick={()=> setOpenModal(false)}  className={styles.modal__exit}></button>
            <div className={styles.modal__errors_email}>{errors.email?.message} </div>
            <div className={styles.modal__errors_password}>{errors.password?.message}</div>
            <div className={styles.modal__header}>Войти в админ панель</div>
            <input {...register("email")} type="text" placeholder="Введите email" />
            <input  {...register("password")} type="password"placeholder="Введите пароль" />
            <input type="submit" value="Войти"/>
            </form>
        : null}
        </>
        
    )
}
export default SignIn;