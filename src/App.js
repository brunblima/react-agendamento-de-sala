import React, { useState } from "react";
import LargeCalendar from "./components/LargeCalendar";
import SmallCalendar from "./components/SmallCalendar";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderBottom: "1px solid #dadce0",
          backgroundColor: "#ffffff",
          padding: "0 20px",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.12)",
        }}
      >
        <span style={{ fontSize: 24, fontWeight: "bold" }}>
          Agendamento de Sala
        </span>
      </div>

      <div style={{ display: "flex", paddingTop: 15, height: "90vh"}}>
        <SmallCalendar
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
        <LargeCalendar selectedDate={selectedDate} events={events} />
      </div>
    </div>
  );
}

export default App;
