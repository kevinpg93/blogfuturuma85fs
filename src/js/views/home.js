import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardInfo } from "../component/cardInfo";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getInventory();
        actions.getEpisodes();
    }, []);

    return (
        <div className="container">
            <h1 className="text-danger mt-3">Characters</h1>
            <div className="scroll-container">
                <div className="d-flex">
                    {store.characters.map((character, index) => (
                        <div className="me-3" key={index}>
                            <CardInfo item={character} type="character" addFavorite={actions.addFavorite} />
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-danger mt-5">inventory</h1>
            <div className="scroll-container">
                <div className="d-flex">
                    {store.inventory.map((inventory, index) => (
                        <div className="me-3" key={index}>
                            <CardInfo item={inventory} type="inventory" addFavorite={actions.addFavorite} />
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-danger mt-5">Episodes</h1>
            <div className="scroll-container">
                <div className="d-flex">
                    {store.episodes.map((episode, index) => (
                        <div className="me-3" key={index}>
                            <CardInfo item={episode} type="episode" addFavorite={actions.addFavorite} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
