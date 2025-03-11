import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardInfo = ({ item, type }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const isFavorite = actions.isFavorite(item.id, type);

    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            {type === "character" && <img src={item.image} className="card-img-top" alt={item.name} />}
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {type === "character" && <p>Species: {item.species}</p>}
                {type === "inventory" && <p>Type: {item.type}</p>}
                {type === "episode" && <p>Episode: {item.episode}</p>}
                
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/${type}/${item.id}`)}
                >
                    Learn More!
                </button>

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
