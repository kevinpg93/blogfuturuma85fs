import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailedView = () => {
    const { type, id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getData(type, id);
    }, [type, id]);

    const data = store.detailedData;

    return (
        <div className="container mt-5">

            {data && type === "character" && (
                <div>
                    <h1>{data.name}</h1>
                    <img src={data.image} alt={data.name} className="img-fluid" />
                    <p>Species: {data.species}</p>
                    <p>Status: {data.status}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Origin: {data.origin.name}</p>
                </div>
            )}

            {data && type === "location" && (
                <div>
                    <h1>{data.name}</h1>
                    <p>Type: {data.type}</p>
                    <p>Dimension: {data.dimension}</p>
                    <p>Residents: {data.residents.length}</p>
                </div>
            )}

            {data && type === "episode" && (
                <div>
                    <h1>{data.name}</h1>
                    <p>Episode: {data.episode}</p>
                    <p>Air Date: {data.air_date}</p>
                    <p>Number of Characters: {data.characters.length}</p>
                </div>
            )}
        </div>
    );
};
