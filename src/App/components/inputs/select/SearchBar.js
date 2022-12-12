import "./SearchBarStyles.scss";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { getCiudades } from "../../../services/cities";

const formatOptionLabel = ({ label, country }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "14px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ marginBottom: "0px" }}>{label}</p>
            <p style={{ color: "#ccc", marginBottom: "0px" }}>{country}</p>
        </div>
    </div>
);

const formatOptionLabelCreation = ({ label, country }) => (
    <p style={{ marginBottom: "0px" }}>{label}, {country}</p>
);

export const SelectSearch = ({ onChange, home }) => {
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        getCiudades().then((datos) => setCiudades(datos));
    }, []);

    const handleSelectChange = ({ value }) => {
        if (value === "Todos") {
        onChange("");
        } else {
        onChange({ name: "ciudad", value, category: "" });
        }
    };

    return (
        <div className="placeholder-select">
            {home ?       
                <Select
                    classNamePrefix="selectBooking"
                    placeholder={
                    <div className="SearchBar-container">
                        <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ marginRight: "4px" }}
                        />
                        ¿A dónde vamos?
                    </div>
                    }
                    options={ciudades.map((opc) => ({
                    value: opc.id,
                    country: opc.pais,
                    label: opc.nombre,
                    }))}
                    onChange={handleSelectChange}
                    formatOptionLabel={formatOptionLabel}
                /> : 
                <Select
                    classNamePrefix="selectBooking"
                    placeholder="Ciudad"
                    options={ciudades.map((opc) => ({
                        value: opc.id,
                        country: opc.pais,
                        label: opc.nombre,
                    }))}
                onChange={handleSelectChange}
                formatOptionLabel={formatOptionLabelCreation}
            />}

        </div>
    );
};
