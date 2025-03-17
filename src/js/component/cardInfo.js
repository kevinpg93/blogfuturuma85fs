import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
export const CardInfo = ({ item, type }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const isFavorite = actions.isFavorite(item.id, type);
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            {/* Imagen solo si es un personaje */}
            {type === "characters" && item.images?.main && (
                <img src={item.images.main} className="card-img-top mt-3" alt={item.name?.first} />
            )}
            <div className="card-body">
                <h5 className="card-title">
                    {type === "characters" ? `${item.name?.first} ${item.name?.last}` : item.title}
                </h5>
                {/* Información específica para cada tipo */}
                {type === "characters" && <p><strong>Species:</strong> {item.species}</p>}
                {type === "inventory" && <p><strong>Category:</strong> {item.category}</p>}
                {type === "episodes" && <p><strong>Episode Number:</strong> {item.number}</p>}
                {/* Botón para ir a la vista detallada */}
                <button
                    className="btn btn-primary me-2"
                    onClick={() => navigate(`/${type}/${item.id}`)}
                >
                    Learn More!
                </button>
                {/* Botón de favoritos */}
                <button
                    className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                    onClick={() => actions.addFavorite(item, type)}
                >
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        </div>
    );
};






