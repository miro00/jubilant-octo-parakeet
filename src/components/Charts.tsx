import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Charts = () => {
  const data = [
    {
      name: "Jan",
      Revenue: 400,
      Orders: 240,
    },
    {
      name: "Feb",
      Revenue: 300,
      Orders: 139,
    },
    {
      name: "Mar",
      Revenue: 200,
      Orders: 280,
    },
    {
      name: "Apr",
      Revenue: 278,
      Orders: 390,
    },
    {
      name: "May",
      Revenue: 189,
      Orders: 30,
    },
    {
      name: "Jun",
      Revenue: 239,
      Orders: 280,
    },
    {
      name: "Aug",
      Revenue: 349,
      Orders: 340,
    },
    {
      name: "Sep",
      Revenue: 300,
      Orders: 400,
    },
    {
      name: "Oct",
      Revenue: 290,
      Orders: 430,
    },
    {
      name: "Nov",
      Revenue: 349,
      Orders: 130,
    },
    {
      name: "Dec",
      Revenue: 349,
      Orders: 230,
    },
  ];

  const data01 = [
    { name: "Electronics", value: 1700 },
    { name: "Laptops", value: 300 },
    { name: "iPhones", value: 200 },
  ];
  return (
    <div className='flex gap-6 h-full'>
      <div className='w-9/12 rounded-lg bg-gray-800 pl-0 p-4 flex flex-col h-full'>
        <div className='pl-7 text-lg font-bold'>Revenue vs Orders</div>
        <div className='h-full flex-1'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='1' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip
                wrapperClassName='bg-gray-700'
                contentStyle={{
                  backgroundColor: "#374151",
                }}
              />
              <Legend
                iconType='circle'
                verticalAlign='top'
                align='right'
                formatter={(value) => (
                  <span className='text-gray-500'>{value}</span>
                )}
              />
              <Line type='monotone' dataKey='Revenue' stroke='#ef4444' />
              <Line
                type='monotone'
                dataKey='Orders'
                stroke='#a3e635'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='flex-1 rounded-lg bg-gray-800 p-4'>
        <div className='text-lg font-bold'>Sales by category</div>
        <ResponsiveContainer width='100%' height='93%'>
          <PieChart>
            <Legend />
            <Pie
              data={data01}
              dataKey='value'
              cx='50%'
              cy='50%'
              innerRadius={90}
              fill='#a3e635'
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
