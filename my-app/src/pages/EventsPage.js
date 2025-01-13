// src/EventsPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function EventsPage() {
  const [event, setEvent] = useState('');
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    if (event.trim()) {
      setEvents([...events, event]);
      setEvent('');
    }
  };

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Events</h2>
      <div className="event-input">
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Add an event"
        />
        <button onClick={handleAddEvent}>
          <FontAwesomeIcon icon={faPlus} /> Add Event
        </button>
      </div>
      <ul className="event-list">
        {events.map((ev, index) => (
          <li key={index}>
            {ev}
            <button onClick={() => handleDeleteEvent(index)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
