import './userstats.css'
import { VictoryChart, VictoryLine } from 'victory'

export default function UserStats() {

    const data = [
        { date: '13/8 \n 12:00', alcohol: 0 },
        { date: '13/8 \n 12:05', alcohol: 0.21 },
        { date: '13/8 \n 12:10', alcohol: 0.68 },
        { date: '13/8 \n 12:15', alcohol: 0.9 },
        { date: '13/8 \n 12:20', alcohol: 1.2 },
    ]

    return (
        <VictoryChart
            style={{
                labels: { fontSize: 52, fill: 'white' },
            }}
        >
            <VictoryLine
                style={{
                    data: { stroke: 'white', strokeWidth: 4 },
                }}
                data={data}
                x="date"
                y="alcohol"
            />
        </VictoryChart>
    )
}