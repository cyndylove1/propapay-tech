import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "#F2F6FF",
          "#F2F6FF",
          "#F2F6FF",
          "#12725B",
          "#F2F6FF",
          "#F2F6FF",
          "#F2F6FF",
        ],
      },
    ],
  };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

  return (
    <div className="h-64 w-full">
      <Bar data={data}  />
    </div>
  );
};

export default Chart;
