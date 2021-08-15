import './userstats.css'
import { VictoryChart, VictoryLine, VictoryAxis, createContainer, VictoryBrushContainer } from 'victory'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function UserStats() {
    const userRate = useSelector((state) => state.userStatsReducer)
    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi")
    const data = []
    userRate.map((element) => {
        data.push({ "g": element.alcohol_grams, "d": element.d })
    })

    const [zoomDomain, setZoomDomain] = useState()

    function handleZoom(domain) {
        setZoomDomain(domain)
    }
    function handleBrush(domain) {
        setZoomDomain(domain)
    }

    return (
        <div>
            <VictoryChart
                width={500}
                height={300}
                style={{
                    labels: { fontSize: 52, fill: 'white' },
                }}
                containerComponent={
                    <VictoryZoomVoronoiContainer responsive={true}
                    mouseFollowTooltips
                        zoomDimension="x"
                        zoomDomain={zoomDomain}
                        onZoomDomainChange={handleZoom}
                        labels={({ datum }) => ` ${Math.round((datum.g + Number.EPSILON) * 100) / 100}`}
                    />

                }
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
            <VictoryChart
                width={500}
                height={90}
                scale={{ x: 'd' }}
                padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                containerComponent={
                    <VictoryBrushContainer responsive={true}
                        brushDimension='x'
                        brushDomain={{x: [0,0]}}
                        onBrushDomainChange={handleBrush}
                    />

                }
            >
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
        </div>
    )
}