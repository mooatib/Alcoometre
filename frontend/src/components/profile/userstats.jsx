import './userstats.css'
import { VictoryChart, VictoryLine, VictoryAxis} from 'victory'
import { useSelector } from 'react-redux'

export default function UserStats() {
    const userRate = useSelector((state) => state.userStatsReducer)
    const data = []

    userRate.map((element) => {
        data.push({ "g": element.alcohol_grams, "d": element.d })
    })
    
    return (
        <VictoryChart
            style={{
                labels: { fontSize: 52, fill: 'white' },
            }}
        >
            <VictoryAxis
                style={{ 
                    ticks: { 
                        stroke: "white",
                        size: 10,
                    }, 
                    tickLabels: { 
                        fill: "white",
                        fontSize: 18,
                        fontWeight: "bolder"
                    }, 
                    axis: {
                        stroke: 'black',
                        height: 80
                    }
                }}
                dependentAxis
                />
            <VictoryAxis
                style={{ 
                    tickLabels: { 
                        fill: "white",
                    }, 
                    axis: {
                        stroke: 'black',
                        height: 8
                    }
                }}
                tickValues={['']}
            />
            <VictoryLine
                style={{
                    data: { stroke: 'white', strokeWidth: 4 },
                }}
                data={data}
                x="d"
                y="g"
            />
        </VictoryChart>
    )
}