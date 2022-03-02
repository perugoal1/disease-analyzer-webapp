import React, { useState, useEffect } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function ChartContainer(props) {
    const [key, setKey] = useState('barChart');
    console.log(33333333333333, props);
    useEffect(() => {
        
    },[]);
    

    return (
     <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="barChart" title="Bar chart">
            <div style={{ width: "100%", height: "500px"}} >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Tab>
        <Tab eventKey="radarChart" title="Radar chart">
            <div style={{ width: "100%", height: "500px"}} >
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="id" />
                        <PolarRadiusAxis />
                        <Radar name="score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </Tab>
      </Tabs>
    );
}

export default ChartContainer;