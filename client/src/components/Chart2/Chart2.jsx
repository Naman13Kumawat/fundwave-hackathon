import "./chart2.scss";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { data } from "../../data.js";
import { Chart as ChartJS } from "chart.js/auto";

export function Chart2() {
  const [chartData, setCData] = useState({
    labels: data.map((data) => data.period_date),
    datasets: [
      {
        label: "Visitors",
        data: data.map((data) => data.visits),
      },
    ],
  });
  return (
    <div className="chartTwo">
      <h1 className="title">Chart-2:</h1>
      <div className="canvas">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
