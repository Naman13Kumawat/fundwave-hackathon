import "./chart1.scss";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { data } from "../../data.js";
import { Chart as ChartJS } from "chart.js/auto";

export function Chart1() {
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
    <div className="chartOne">
      <h1 className="title">Chart-1:</h1>
      <h2 className="input-text">Select Period Date and Period Type:</h2>
      <form className="">
        <label>
          Date-1:
          <input type="date" className="filter" />
        </label>
        <label>
          Period Type-1:
          <select>
            <option value="lm">LM</option>
            <option value="lq">LQ</option>
            <option value="ltm">LTM</option>
          </select>
        </label>
        <label>
          Date-2:
          <input type="date" className="filter" />
        </label>
        <label>
          Period Type-2:
          <select>
            <option value="lm">LM</option>
            <option value="lq">LQ</option>
            <option value="ltm">LTM</option>
          </select>
        </label>
      </form>
      <div className="canvas">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
