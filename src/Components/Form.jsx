import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'

export default function Form() {

    const [mail , setMail] = useState("");
    const [name , setName] = useState("");
    const [messaje, setMessaje] = useState(false)

    const onChangeMail = (event)=>{
        setMail(event.target.value)
    }

    const onChangeName = (event)=>{
        setName(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();

        if(mail.length > 3 && mail.startsWith('')){
            setMessaje(true)
        }else{
            alert('El correo es erróneo');
            if(mail.length < 6){
                setMessaje(false)
                alert('El nombre es erróneo');
            }
        }

        if(name.length < 6){
            setMessaje(false)
            alert('El nombre es erróneo');
        }
        
    }
    return (
        <>
        <h1>Reservar Entrada</h1>
        <form className={style.form} onSubmit={onSubmitForm}>
            <h5>Ingrese su correo electronico</h5>
            <input type="email" onChange={onChangeMail} value={mail}/>
            <h5> Indique a nombre de quién reserva las entradas</h5>
            <input type="text" onChange={onChangeName} value={name}/>
            <button>Enviar</button>
        </form>

        {messaje ? <Card mail={mail} name={name} /> : null}
        </>
    )

}
