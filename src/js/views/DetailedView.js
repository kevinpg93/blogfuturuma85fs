import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
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
            {data && (
                <>
                    {/* Character View */}
                    {type === "characters" && (
                        <div>
                            <h1>{data.name?.first} {data.name?.middle} {data.name?.last}</h1>
                            <img src={data.images?.main} alt={data.name?.first} className="img-fluid" />
                            <p><strong>Age:</strong> {data.age}</p>
                            <p><strong>Gender:</strong> {data.gender}</p>
                            <p><strong>Species:</strong> {data.species}</p>
                            <p><strong>Home Planet:</strong> {data.homePlanet}</p>
                            <p><strong>Occupation:</strong> {data.occupation}</p>
                            {data.sayings?.length > 0 && (
                                <div>
                                    <h3>Famous Sayings</h3>
                                    <ul>
                                        {data.sayings.map((quote, index) => (
                                            <li key={index}>"{quote}"</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                    {/* Episode View */}
                    {type === "episodes" && (
                        <div>
                            <h1>{data.title}</h1>
                            <p><strong>Episode Number:</strong> {data.number}</p>
                            <p><strong>Writers:</strong> {data.writers}</p>
                            <p><strong>Original Air Date:</strong> {data.originalAirDate}</p>
                            <p><strong>Description:</strong> {data.desc}</p>
                        </div>
                    )}
                    {/* Inventory View */}
                    {type === "inventory" && (
                        <div>
                            <h1>{data.title}</h1>
                            <p><strong>Category:</strong> {data.category}</p>
                            <p><strong>Description:</strong> {data.description}</p>
                            <p><strong>Slogan:</strong> {data.slogan}</p>
                            <p><strong>Price:</strong> ${data.price}</p>
                            <p><strong>Stock Available:</strong> {data.stock}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};