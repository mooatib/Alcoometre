import './groupstats.css'
import { VictoryChart, VictoryLine, VictoryLabel } from 'victory'

export default function GroupStats() {

    const colors = ["white", "yellow", "green"];

    const data = [
        [
            { user: "dibdib", date: '13/8 \n 12:00', alcohol: 0 },
            { user: "dibdib", date: '13/8 \n 12:05', alcohol: 0.21 },
            { user: "dibdib", date: '13/8 \n 12:10', alcohol: 0.68 },
            { user: "dibdib", date: '13/8 \n 12:15', alcohol: 0.9 },
            { user: "dibdib", date: '13/8 \n 12:20', alcohol: 1.2, label: "dibdib" },
        ],
        [
            { user: "teteleking", date: '13/8 \n 12:00', alcohol: 0 },
            { user: "teteleking", date: '13/8 \n 12:05', alcohol: 0.9 },
            { user: "teteleking", date: '13/8 \n 12:10', alcohol: 1.3 },
            { user: "teteleking", date: '13/8 \n 12:15', alcohol: 1.5 },
            { user: "teteleking", date: '13/8 \n 12:20', alcohol: 1.1, label: "teteleking"},
        ],
        [
            { user: "pepsitocker", date: '13/8 \n 12:00', alcohol: 0.3 },
            { user: "pepsitocker", date: '13/8 \n 12:05', alcohol: 0.6 },
            { user: "pepsitocker", date: '13/8 \n 12:10', alcohol: 0.99 },
            { user: "pepsitocker", date: '13/8 \n 12:15', alcohol: 1.4 },
            { user: "pepsitocker", date: '13/8 \n 12:20', alcohol: 2.2, label: "pepsitocker" },
        ],
    ]

    return (
        <VictoryChart
            style={{
                labels: { fontSize: 52, fill: 'white' },
            }}
        >
            {data.map((dataArray, key)=>{
                return (
                    <VictoryLine
                    name={`line${key}`}
                        style={{
                            data: { stroke: colors[key], strokeWidth: 4 },
                        }}
                        data={dataArray}
                        x="date"
                        y="alcohol"
                        labelComponent={
                            <VictoryLabel
                            dx={0}
                            dy={0}
                            renderInPortal
                            textAnchor="end"
                            style={{
                                fontSize: "21",
                                fill: colors[key]
                              }}
                            />
                        }
                    />
                )
            })}
        </VictoryChart>
    )
}