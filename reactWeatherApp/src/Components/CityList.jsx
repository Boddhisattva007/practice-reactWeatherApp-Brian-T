
function CityList({ onCitySelect }) {
    return(

        <div>

            <button id="Atlantis" onClick={() => onCitySelect("Atlantis")}>
                Atlantis
            </button>

            <button id="NewYork" onClick={() => onCitySelect("NewYork")}>
                New York
            </button>

            <button id="London" onClick={() => onCitySelect("London")}>
                London
            </button>

            <button id="Tokyo" onClick={() => onCitySelect("Tokyo")}>
                Tokyo
            </button>

        </div>

    );
}

export default CityList;