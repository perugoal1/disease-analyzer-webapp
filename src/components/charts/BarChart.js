import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

function BarChartContainer(props) {

  return (
    <div style={{ width: "100%", height: "500px", paddingBottom: "20px"}} >
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 30,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id">
                    <Label value="Data Type"  offset={10} position="bottom" />
                </XAxis>
                <YAxis>
                    <Label value="Association Score"  angle={-90} offset={10} position="left"/>
                </YAxis>
                <Tooltip />
                <Bar dataKey="score" fill="#3489ca" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default BarChartContainer;
