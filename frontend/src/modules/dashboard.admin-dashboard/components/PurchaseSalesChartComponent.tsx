import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";

const dataset = [
  [300, -400, "Jan"],
  [700, -200, "Feb"],
  [900, -150, "Mar"],
  [400, -600, "Apr"],
  [200, -300, "May"],
  [300, -100, "Jun"],
  [500, -250, "Jul"],
  [100, -150, "Aug"],
  [900, -300, "Sep"],
].map(([high, low, order]) => ({
  high,
  low,
  order,
}));

const chartSettingsV: Partial<BarChartProps> = {
  dataset,
  height: 450,

  colors: ["#28c66f", "#ea5455"],
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};

export default function BorderRadius() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          dataKey: "order",
          labelStyle: { fill: "white" }, // Set x-axis labels color to white
          tickSize: 10,
          tickLabelStyle: { fill: "white" },
          categoryGapRatio: 0.7,


        },
      ]}
      yAxis={[
        {
          tickLabelStyle: { fill: "white" },
        },
      ]}
      series={[
        {
          dataKey: "high",
          label: "High",
          layout: "vertical",
          stack: "stack",
        },
        { dataKey: "low", label: "Low", layout: "vertical", stack: "stack" },
      ]}
      {...chartSettingsV}
      borderRadius={10}
      sx={{ color: "white", borderColor: "white" }}
      margin={{left: 0, right: 0}}
      grid={{horizontal: true}}
    />
  );
}
