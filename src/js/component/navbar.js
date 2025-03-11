import React, { useContext } from "react";
import { Context } from "../store/appContext";  
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-light bg-light mb-3 fixed-top shadow">
            <div className="container-fluid">
                <a className="navbar-brand mb-0" href="/">
                    <img
                        src="https://imgs.search.brave.com/buEZ6FvLlU720WZoeU5RWeMp0VBB1ObHXL5eG1iZOsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy90/aHVtYm5haWwvL3B1/cmVwbmcuY29tLWZ1/dHVyYW1hLXNoaXBm/dXR1cmFtYWFuaW1h/dGlvbnNjaWVuY2Vm/aWN0aW9uY2FydG9v/bi0xNzAxNTI4NjAz/OTg1a3JlcmoucG5n"
                        alt="Futurama Logo"
                        style={{ width: "200px", height: "auto"}}
                    />
                </a>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites ({store.favorites.length})
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.length > 0 ? (
                                store.favorites.map((fav, index) => (
                                    <li
                                        key={index}
                                        className="dropdown-item d-flex justify-content-between align-items-center"
                                    >
                                        <button
                                            className="btn btn-link p-0 text-start"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/${fav.type}/${fav.id}`);
                                            }}
                                        >
                                            {fav.name}
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                actions.removeFavorite(fav.id, fav.type);
                                            }}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="dropdown-item">No favorites added</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
