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
            <div className="Button"> 
                <a href="mailto:andrebaltazarpinto@gmail.com">
                    <button className="btn2">
                        <span class="material-icons"> email</span>
                        <span className="email"> Email</span> 
                    </button> 
                </a>
                <a href="https://www.linkedin.com/in/andr%C3%A9-baltazar-pinto-13a056141/" target="_blank" rel="noreferrer">
                    <button className="btn3">
                         <span class="material-icons">link</span> Linkedin 
                    </button>
                </a> 
            </div>
            
        </div>
        </>
    )

}

export default Initial;