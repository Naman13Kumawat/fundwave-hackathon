import "./chart2.scss";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { data2 } from "../../data.js";
import { Chart as ChartJS } from "chart.js/auto";

export function Chart2() {
  const [chartData, setCData] = useState({
    labels: data2.map((data) => data.page),
    datasets: [
      {
        label: "Visitors",
        data: data2.map((data) => data.visits),
        backgroundColor: "rgba(164, 96, 237, 0.4)",
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
