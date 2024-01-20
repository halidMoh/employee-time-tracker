import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";
import PayoutSummary from "./PayoutSummary";

function Dashboard({ user, onLogout }) {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);

  useEffect(() => {
    // Load existing entries from localStorage or other storage
    const savedEntries = JSON.parse(localStorage.getItem("entries") || "[]");
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    // Save entries to localStorage
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const clockIn = () => {
    const entry = { clockIn: new Date(), clockOut: null, userId: user };
    setCurrentEntry(entry);
  };

  const clockOut = () => {
    if (currentEntry) {
      const updatedEntry = { ...currentEntry, clockOut: new Date() };
      setEntries([...entries, updatedEntry]);
      setCurrentEntry(null);
    }
  };

  const getEntriesForCurrentUser = () => {
    return entries.filter((entry) => entry.userId === user);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      <p>Welcome, {user}</p>
      {currentEntry ? (
        <button onClick={clockOut}>Clock Out</button>
      ) : (
        <button onClick={clockIn}>Clock In</button>
      )}
      <TimeCard entries={getEntriesForCurrentUser()} />
      <PayoutSummary entries={getEntriesForCurrentUser()} />
    </div>
  );
}

export default Dashboard;
