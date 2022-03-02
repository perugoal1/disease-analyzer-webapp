import React, { useState, useEffect } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label } from 'recharts';

function parseLabel(id){
    return id.replace(/(?:_| |\b)(\w)/g, function(id, p1) { return ' ' + p1.toUpperCase()});
}

function ChartContainer(props) {
    const [key, setKey] = useState('barChart');
    const data = props.data.map((obj)=> {
        return {
            ...obj,
            id: parseLabel(obj.id)
        }
    });
    

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
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id">
                            <Label value="Pages of my website" offset={20} position="bottom" />
                        </XAxis>
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="score" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Tab>
        <Tab eventKey="radarChart" title="Radar chart">
            <div style={{ width: "100%", height: "500px"}} >
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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