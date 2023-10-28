import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    
    const genres = [
        "React", "JavaScript", "Node", "jQuery", "Angular"
      ];
    
    const colors = ['#cc66ff', '#6666ff', ' #33ccff', '#33cccc', '#00ff80'];

    useEffect(() => {
        setData(getData());
      }, [events]);

const getData = () => {
    const data = genres.map((genre) => {
        const numberGenreEvents = events.filter((event) => 
        event.summary.includes(genre)).length;
        return {
            name: genre,
            value: numberGenreEvents
        };
    });
    return data;
 };

 const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
  return percent ? (
    <text
      x={x}
      y={y}
      fill="#8884d8"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

return (
    <ResponsiveContainer width="99%" height={400}>
    <PieChart>
    <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} iconType="square" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{color: "black", backgroundColor: "#7C9D96", borderRadius: "10px", display: "flex", justifyContent: "center", border: "none", padding: "3px"}}/>
    </PieChart>
  </ResponsiveContainer>
  );

}

export default EventGenresChart;