import React from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function RadarChartContainer(props) {

  return (
    <div style={{ width: "100%", height: "500px"}} >
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="id"  />
                <PolarRadiusAxis angle={90} stroke="#212529"/>
                <Radar name="score" dataKey="score" stroke="#3489ca" strokeWidth={2}  fillOpacity={0} dot={{ stroke: '#3489ca', strokeWidth: 3 }} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default RadarChartContainer;
