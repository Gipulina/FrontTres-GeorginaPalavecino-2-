//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React  from "react";
import style from '../style.module.css'

function Card({name,mail}) {
  return (
    <div className="tarjeta">
      <h2>Se ha reservado dos entradas para {name}, han sido enviadas a {mail}.</h2>
    </div>
  );
}

export default Card;
