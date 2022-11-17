import { useState } from "react";
 
 const FeedbackItem = () => {
// Estados: persisten información a traves del ciclo de vida de un unico componente 

//Estados iniciales 
const [rating, setRating ] = useState(2)
const [text , setText ] = useState("Mejorar Curso, mejores recursos ")

 const sumarNota = ()=>{
    //Cambiar estado a Rating 
    //Parametro para el valor anterior 
    setRating((prev)=>{
        return prev + 1 
    })
}
const restarNota = ()=>{
    //Cambiar estado a Rating 
    //Parametro para el valor anterior 
    setRating((prev)=>{
        return prev - 1 
    })
}

    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { text }
            </div>
            
                <button className=" btn btn-primary" onClick={ sumarNota }>
                    Sumar nota 
                </button>
                <br />
                <button className=" btn btn-primary" onClick={ restarNota }>
                    Restar nota 
                </button>
        </div>
    )
}
export default FeedbackItem;