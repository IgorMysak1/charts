import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  // ArcElement,
  // Title,
  // Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const data1 = [];
const data2 = [];

for (let i = 0; i < 100; i++) {
  data1.push({ x: i * i, y: i * Math.random() + 5 });
  data2.push({ x: i * i, y: i * Math.random() + 5 });
}

const data = {
  labels: data1.map((el) => el.x),
  options: {
    plugins: {
      legend: {
        display: true,
        // labels: {
        //   color: "rgb(255, 99, 132)",
        // },
      },
    },
  },
  datasets: [
    {
      label: "ETH price",
      backgroundColor: "#1DC786",
      borderColor: "#1DC786",
      borderWidth: 1,
      radius: 0,
      data: data1,
    },
    {
      label: "BC holders #",
      borderColor: "#023CFF",
      backgroundColor: "#023CFF",
      borderWidth: 1,
      radius: 0,
      data: data2,
      display: false,
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      align: "start" as const,
      labels: {
        color: "#FFFFFF",
        boxWidth: 11,
        boxHeight: 2,
      },
      title: {},
      onClick: () => null,
    },
  },
};
export const ProgressiveLine = () => {
  return (
    <div style={{ background: "#353940", padding: 10, borderRadius: 20 }}>
      <Line data={data} height="250px" width="500px" options={options} />
    </div>
  );
};
