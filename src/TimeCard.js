import React, { useState } from "react";

function TimeCard({ user }) {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);

  const clockIn = () => {
    const entry = { clockIn: new Date(), clockOut: null };
    setCurrentEntry(entry);
  };

  const clockOut = () => {
    if (currentEntry) {
      setEntries([...entries, { ...currentEntry, clockOut: new Date() }]);
      setCurrentEntry(null);
    }
  };

  return (
    <div>
      <h2>Time Card</h2>
      {currentEntry ? (
        <button onClick={clockOut}>Clock Out</button>
      ) : (
        <button onClick={clockIn}>Clock In</button>
      )}
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            Clock In: {entry.clockIn.toLocaleTimeString()} - Clock Out:{" "}
            {entry.clockOut?.toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeCard;
