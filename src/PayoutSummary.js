import React from "react";

function PayoutSummary({ user, entries }) {
  const calculateTotalHours = () => {
    return entries.reduce((total, entry) => {
      const duration = (entry.clockOut - entry.clockIn) / (1000 * 60 * 60); // Duration in hours
      return total + duration;
    }, 0);
  };

  const hourlyWage = 20; // Example hourly wage, can be dynamic based on user data
  const totalHours = calculateTotalHours();
  const totalPayout = totalHours * hourlyWage;

  return (
    <div>
      <h2>Payout Summary</h2>
      <p>Total Hours: {totalHours.toFixed(2)}</p>
      <p>Weekly Payout: ${totalPayout.toFixed(2)}</p>
    </div>
  );
}

export default PayoutSummary;
