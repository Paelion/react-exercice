const Card =({title, desc, image}) => {
    return (
        <div>
            <h2>Titre : {title}</h2>
            <p>Description : {desc}</p>
            <img src={image} alt={title}/>
        </div>
    )
}

export default Card;