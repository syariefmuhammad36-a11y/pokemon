import "./PokemonItem.css";

import { colours } from "../../data/colours";

function PokemonItem({ pokemon, itemClick }) {
    return (
        <div
            className="pokemon-card"
            onClick={itemClick}
            style={{
                backgroundColor: pokemon.color,
                cursor: "pointer"
            }}
        >
            <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
            <h1>{pokemon.name}</h1>
            <div className="types-container">
                {pokemon.types.map((type, i) => (
                    <span
                        key={i}
                        className="type-badge"
                        style={{ backgroundColor: colours[type.toLowerCase()] }}
                    >
                        {type}
                    </span>
                ))}
            </div>
            <p className="description">{pokemon.description}</p>
        </div>
    );
}



export default PokemonItem;