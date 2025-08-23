import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const Demo = () => {
  const chart = useChart({
    data: [
      { allocation: 4, type: "Monday" },
      { allocation: 60, type: "Tuesday" },
      { allocation: 45, type: "Wednesday" },
      { allocation: 12, type: "Thursday" },
      { allocation: 4, type: "Friday" },
    ],
    series: [{ name: "allocation", color: "teal.solid" }],
  });

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} barSize={40}>
        <CartesianGrid
          stroke={chart.color("border.muted")}
          vertical={false}
          opacity={0.1}
        />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 400]}
          tickFormatter={(value) => `${value}`}
        />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            radius={10}
          />
        ))}
      </BarChart>
    </Chart.Root>
  );
};
export default Demo;
