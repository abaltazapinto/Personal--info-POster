import React from "react";
import imagem from"../img/photo_1.jpg";
import '../style.css'; 


function Initial() {
    return (
        <>
        <div className="">
           <img className="image"src={imagem} alt="fotopessoal" />
            <div className="Nome">André Pinto</div>
            <div className="Profession">Engineer</div>
            <div className="Email">andrebaltazarpinto@gmail.com</div>
            <div className="Button"> <button className="btn2"><span class="material-icons"> email</span> <span className="email"> Email</span> </button> <button className="btn3"> <span class="material-icons">link</span> Linkedin </button></div>
            
        </div>
        </>
    )

}

export default Initial;