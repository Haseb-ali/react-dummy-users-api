import React from "react";
import { useParams } from "react-router";
export  const Card=(props)=>{
    const {cardImage,cardText,firstBtnText,secondBtnText,bgColor}=props.card;
    console.log(bgColor);
    const card={
        width:'350px',
        padding:'10px',
        backgroundColor:bgColor,
        border:'1px solid 1px solid rgb(221, 215, 215)',
        margin:'0 auto',
        boxShadow:'0 0  0.15rem rgb(221, 215, 215)',
        marginBottom:'1.7rem',
        color:props.card.color
    }
    const cardMedia={
        

    }
    const cardImageSyle={
        width:'100%',
        opacity:0.9,
        height:'300px',
        objectFit: 'fill'
    }
    const cardBodyText={
        textAlign:'justify',
    }
    const firstBtn={
        marginRight:'1rem',
        textTransform:'uppercase'

    }
    const seondBtn={
        textTransform:'uppercase'
        
    }
    const cardBody={

    }
    const cardAction={

    }
    
    return (
        <div style={card}>
            <div style={cardMedia}>
                <img src={cardImage} alt="card-image" style={cardImageSyle} />
            </div>
            <div style={cardBody}>
                <p style={cardBodyText}>
                  {cardText}  
                </p>
            </div>
            <div style={cardAction}>
                <button style={firstBtn}>{firstBtnText}</button>
                <button style={seondBtn}>{secondBtnText}</button>
            </div>
        </div>
        )

}