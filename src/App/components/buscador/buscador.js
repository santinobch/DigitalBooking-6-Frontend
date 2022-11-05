import "./buscador.scss";

import Button from "../../components/button/button";
import Datepicker from "../datepicker/datepicker";
import { SelectSearch } from "../inputs/select/SearchBar";
import { useState } from "react";

const DATE_FORMAT = "DD-MM-YYYY";

const Buscador = ({ onChange }) => {
  const [inputValue, setInputValue] = useState({
    location: "",
    fecha: [new Date(), new Date()],
  });

  function handleChange(data = {}) {
    const { name, value } = data;
    setInputValue({ ...inputValue, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { fecha, location } = inputValue;
    const [fechaInicio, fechaFin] = fecha;

    const data = {
      location,
      fechaInicio: fechaInicio.format(DATE_FORMAT),
      fechaFin: fechaFin.format(DATE_FORMAT),
    };

    onChange(data);
  }

  return (
    <div className="mainBuscador">
      <div>
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      </div>
      <form className="formBuscador" onSubmit={handleSubmit}>
        <SelectSearch onChange={handleChange} />
        <Datepicker value={inputValue.fecha} onChange={handleChange} />
        <Button className="btnBuscador" type="Submit" style="dark">
          BUSCAR
        </Button>
      </form>
    </div>
  );
};

export default Buscador;
