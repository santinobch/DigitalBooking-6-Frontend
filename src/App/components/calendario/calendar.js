import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import "../calendario/calendar.scss";

export default function Calendario() {
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const width = window.innerWidth;
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  return (
    <>
        <section className="fechasDisponibles">
        <h2>Fechas disponibles</h2>
        <div className="contenedorCalendario">
          <div className="product--calendarLayout-container">
            <Calendar
              weekDays={weekDays}
              numberOfMonths={width >= 768 ? 2 : 2}
              minDate={new Date()}
              hideYear
              months={months}
            />
          </div>
          <div className="contendorReserva">
            <h4>Agregá tus fechas de viaje para obtener precios exactos</h4>
            <button className="button">Iniciar reserva</button>
          </div>
        </div>
      </section>
    </>
  );
}
