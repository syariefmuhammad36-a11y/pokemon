import { useState } from "react";

function PokemonDetailModal({ pokemon, onClose }) {
    const [stats, setStats] = useState({ ...pokemon.stats });

    const handleUseItem = (item) => {
        if (item === "Potion") {
            setStats((prev) => ({
                ...prev,
                hp: Math.min(prev.hp + 20, 100)
            }));
        } else if (item === "Berry") {
            setStats((prev) => ({
                ...prev,
                speed: prev.speed + 5
            }));
        }
        alert(`${pokemon.name} used ${item}!`);
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button onClick={onClose} style={styles.close}>X</button>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.imageUrl} alt={pokemon.name} width={120} />
                <p>{pokemon.description}</p>

                <div>
                    <h3>Stats:</h3>
                    <ul>
                        {Object.entries(stats).map(([key, value]) => (
                            <li key={key}>{key.toUpperCase()}: {value}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Items:</h3>
                    {pokemon.items.map((item) => (
                        <button key={item} onClick={() => handleUseItem(item)} style={styles.itemBtn}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        width: 350,
        maxHeight: "80vh",
        overflowY: "auto",
        position: "relative"
    },
    close: {
        position: "absolute",
        top: 10,
        right: 10,
        background: "red",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: 25,
        height: 25,
        cursor: "pointer"
    },
    itemBtn: {
        margin: "5px",
        padding: "8px 12px",
        border: "none",
        borderRadius: 8,
        backgroundColor: "#4caf50",
        color: "white",
        cursor: "pointer"
    }
};

export default PokemonDetailModal;
