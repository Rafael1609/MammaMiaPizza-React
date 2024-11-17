const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mx-2 my-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>
        <p>
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>
        <button className="btn btn-primary">Ver más</button>
        <button className="btn btn-success mx-2">Añadir</button>
      </div>
    </div>
  );
};
export default CardPizza;
