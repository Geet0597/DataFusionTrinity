import React from "react";
import Chart from 'react-apexcharts';

interface LineGraphProps {
    data: any[];
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
    const chartOptions: any = {
        chart: {
            type: 'radar',
        },
        series: [
            {
                name: 'Cost',
                data: data.map((item) => parseFloat(item.Cost)),
            },
        ],
        xaxis: {
            categories: data.map((item) => item.Date),
        },
    };

    return (
        <div style={{ width: '1000px', height: '900px' }}>
            <Chart options={chartOptions} series={chartOptions.series} type="radar" height={700} />
        </div>
    );
};

export default LineGraph;
