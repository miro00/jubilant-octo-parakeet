import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

const CenteredMetric = ({
  centerX,
  centerY,
}: {
  centerX: number;
  centerY: number;
}) => {

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        color: "white"
      }}
    >
      $35.7K
    </text>
  );
};

const Charts = () => {
  const data = [
    {
      id: "Revenue",
      color: "red",
      data: [{ x: "Jan", y: 155 }],
    },
    {
      id: "Orders",
      color: "blue",
      data: [{ x: "Jan", y: 124 }],
    },
  ];

  // const data01 = [
  //   { name: "Electronics", value: 1700 },
  //   { name: "Laptops", value: 300 },
  //   { name: "iPhones", value: 200 },
  // ];
  const data2 = [
    { id: "Electronics", label: "Electronics", value: 1400, color: "#ef4444" },
    { id: "Laptops", label: "Laptops", value: 300, color: "#164e63" },
    { id: "iPhones", label: "iPhones", value: 200, color: "#38bdf8" },
  ];

  return (
    <div className="flex gap-6">
      <div className="flex w-9/12 flex-col  rounded-lg bg-gray-800 px-6 py-4">
        <div className="text-lg font-bold">Revenue vs Orders</div>
        <div className="flex-1">
          <ResponsiveLine
            data={data}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", min: "auto", max: "auto" }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
          />
        </div>
      </div>
      <div className="flex-1 rounded-lg bg-gray-800 px-6 py-4">
        <div className="text-lg font-bold">Sales by category</div>
        <div className="h-[300px] p-4">
          <ResponsivePie
            data={data2}
            innerRadius={0.7}
            layers={["arcs", "legends", CenteredMetric]}
            margin={{
              bottom: 56,
            }}
            colors={{
              datum: "data.color",
            }}
            legends={[
              {
                anchor: "bottom",
                direction: "column",
                itemWidth: 100,
                itemHeight: 18,
                translateY: 56,
                translateX: 0,

                itemDirection: "left-to-right",
                itemTextColor: "white",
                symbolShape: "circle",
                symbolSize: 6,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
