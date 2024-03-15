import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const localizer = momentLocalizer(moment);

function SmallCalendar({ selectedDate, onDateSelect }) {
  const handleSelectSlot = (slotInfo) => {
    const { start } = slotInfo;

    const selectedDate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );
    onDateSelect(selectedDate);
  };

  function CustomToolbar({ label, onNavigate }) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 14,
          fontSize: 22,
        }}
      >
        <div style={{ paddingRight: 5 }}>
          <button
            onClick={() => onNavigate("PREV")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaChevronLeft size={16}/>
          </button>
        </div>

        <span>{label}</span>

        <div style={{ paddingLeft: 5 }}>
          <button
            onClick={() => onNavigate("NEXT")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaChevronRight size={16}/>
          </button>
        </div>
      </div>
    );
  }

  const dayPropGetter = (date) => {
    const selectedDay = moment(selectedDate).format("YYYY-MM-DD");
    const day = moment(date).format("YYYY-MM-DD");

    let style = {};
    if (selectedDay === day) {
      style = {
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
      };
    }

    return {
      style: style,
    };
  };

  return (
    <div style={{ padding: 10 }}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={["month"]}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        dayPropGetter={dayPropGetter}
        style={{ height: 270, width: 320 }}
        components={{
          toolbar: (props) => (
            <CustomToolbar {...props} onNavigate={props.onNavigate} />
          ),
        }}
      />
    </div>
  );
}

export default SmallCalendar;