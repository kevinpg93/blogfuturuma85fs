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
            {/* Characters */}
            {store.characters?.length > 0 && (
                <>
                    <h1 className="text-danger mt-3">Characters</h1>
                    <div className="scroll-container">
                        <div className="d-flex">
                            {store.characters.map((character, index) => (
                                <div className="me-3" key={index}>
                                    <CardInfo item={character} type="characters" />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
            {/* Inventory */}
            {store.inventory?.length > 0 && (
                <>
                    <h1 className="text-danger mt-3">Inventory</h1>
                    <div className="scroll-container">
                        <div className="d-flex">
                            {store.inventory.map((inventory, index) => (
                                <div className="me-3" key={index}>
                                    <CardInfo item={inventory} type="inventory" />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
            {/* Episodes */}
            {store.episodes?.length > 0 && (
                <>
                    <h1 className="text-danger mt-3">Episodes</h1>
                    <div className="scroll-container">
                        <div className="d-flex">
                            {store.episodes.map((episode, index) => (
                                <div className="me-3" key={index}>
                                    <CardInfo item={episode} type="episodes" />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};