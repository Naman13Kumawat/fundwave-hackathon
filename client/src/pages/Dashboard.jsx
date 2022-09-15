import "./dashBoard.scss";
import { Chart1, Chart2, Upload } from "../components";

export default function Dashboard() {
  return (
    <div className="container">
      <Chart1 />
      <Chart2 />
      <Upload />
    </div>
  );
}
