import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function LargeCalendar({ selectedDate, events }) {
    const filteredEvents = events.filter(
      (event) =>
        moment(event.start).format("YYYY-MM-DD") ===
        moment(selectedDate).format("YYYY-MM-DD")
    );
  
    function CustomToolbar({ date }) {
      return (
        <div
          style={{
            display: "flex",
            fontSize: 22,
            justifyContent: "center",
            flexDirection: "column",
            height: 40,
            paddingBottom: 13,
          }}
        >
          {moment(date).format("DD MMMM YYYY")}
        </div>
      );
    }
  
    return (
      <div style={{ width: "100%", padding: 10 }}>
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          date={selectedDate}
          defaultView="day"
          views={["day"]}
          style={{ height: "80%", width: "100%", border: 'none' }}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    );
  }

  export default LargeCalendar;