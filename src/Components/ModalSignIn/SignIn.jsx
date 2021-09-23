import React from "react";

import styles from './SignIn.module.sass'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SignIn({openModal, setOpenModal, switchModal, setSwitchModal, IconRef}) {

    const schema = yup.object().shape({
        name: yup.string().min(2, 'Никнэйм слишком короткий').max(10, 'Никнэйм слишком длинный').required('Вы не ввели никнэйм'),
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
            <div className={styles.modal__header}><button onClick={() => setSwitchModal(false)} className={switchModal && styles.modal__header_disabled}>Войти</button> / <button onClick={() => setSwitchModal(true)} className={!switchModal && styles.modal__header_disabled}>Регистрация</button></div>
            {switchModal &&
                <div className={styles.modal__input}>
                    <input {...register("name")} type="text" placeholder="Введите никнэйм" />
                    <div className={styles.modal__errors}>{errors.name?.message}</div>
                </div>
            }
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
        : null}
        </>
        
    )
}
export default SignIn;