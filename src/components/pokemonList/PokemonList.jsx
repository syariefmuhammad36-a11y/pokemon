import { useState } from "react";
import pokemonsJson from "../../data/pokemon.json";
import PokemonItem from "../PokemonItem/PokemonItem";
import PokemonDetailModal from "../../PokemonDetailmodal";
import "./PokemonList.css";

function Pokemons() {
    const [pokemons] = useState(pokemonsJson);
    const [filterPokemons, setFilterPokemons] = useState(pokemonsJson);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const result = pokemons.filter((item) =>
            item.name.toLowerCase().includes(searchValue)
        );
        setFilterPokemons(result);
    };

    const itemClick = (item) => {
        setSelectedPokemon(item);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedPokemon(null);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="cari pokemon..."
                className="search"
                onChange={handleSearch}
            />

            <div className="list-pokemon">
                {filterPokemons.length === 0 ? (
                    <div>data tidak ditemukan</div>
                ) : (
                    filterPokemons.map((item) => (
                        <PokemonItem
                            key={item.id}
                            pokemon={item}
                            itemClick={() => itemClick(item)}
                        />
                    ))
                )}
            </div>

            {/* Modal Detail */}
            {isOpen && selectedPokemon && (
                <PokemonDetailModal
                    pokemon={selectedPokemon}
                    onClose={handleClose}
                />
            )}
        </div>
    );
}

export default Pokemons;
