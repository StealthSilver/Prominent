import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// ---- Types ----
interface DoughnutChartProps {
  data: ChartData<"doughnut", number[], string>;
  options?: ChartOptions<"doughnut">;
}

// ---- Component ----
export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  options,
}) => {
  return <Doughnut data={data} options={options} />;
};
