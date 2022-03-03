import React, { useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import BarChartContainer from './BarChart';
import RadarChartContainer from './RadarChart';
import { parseLabel } from '../../utils/utilities';

function ChartContainer(props) {
    const [key, setKey] = useState('barChart');
    const data = props.data.map((obj)=> {
        return {
            ...obj,
            id: parseLabel(obj.id),
            score: obj.score.toFixed(3)
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
            <p className="chart-title">Data Type Scores: {props.target} and lung carcinoma</p>
            <BarChartContainer data={data} />
        </Tab>
        <Tab eventKey="radarChart" title="Radar chart">
            <p className="chart-title">Data Type Scores: {props.target} and lung carcinoma</p>
            <RadarChartContainer data={data} />
        </Tab>
      </Tabs>
    );
}

export default ChartContainer;