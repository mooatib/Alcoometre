import './groupstats.css'
import { VictoryChart, VictoryLine, createContainer, VictoryLabel, VictoryAxis, VictoryBrushContainer } from 'victory'
import { useState } from 'react'
import { useEffect } from 'react';


export default function GroupStats() {
    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi")
    const colors = ["white", "yellow", "green", "black", "violet", "red", "blue", "orange", "pink", "grey"];
    const [data, setData] = useState([])
    const [zoomDomain, setZoomDomain] = useState()

    useEffect(() => {
        const apiUrl = `${process.env.REACT_APP_API_URL}api/alcoholrate/group?step=${4}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [setData])

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
                containerComponent={
                    <VictoryZoomVoronoiContainer responsive={true}
                        mouseFollowTooltips
                        zoomDimension="x"
                        zoomDomain={zoomDomain}
                        onZoomDomainChange={handleZoom}
                        labels={({ datum }) => ` ${Math.round((datum.alcohol_grams + Number.EPSILON) * 100) / 100}`}
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
                            angle: 0
                        },
                        tickLabels: {
                            fill: "white",
                            fontSize: 18,
                            fontWeight: "bolder"
                        },
                        axis: {
                            stroke: 'black',
                            height: 8
                        }
                    }}
                    fixLabelOverlap={true}
                    tickValues={[]}
                />
                {data.map((dataArray, key) => {
                    return (
                        <VictoryLine key={key}
                            name={`line${key}`}
                            style={{
                                data: { stroke: colors[key], strokeWidth: 4 },
                            }}
                            data={dataArray}
                            x="d"
                            y="alcohol_grams"
                            labelComponent={
                                <VictoryLabel
                                    dx={10}
                                    dy={15}
                                    renderInPortal
                                    textAnchor="start"
                                    style={{
                                        tickLabels: {angle: 0},
                                        fontSize: "21",
                                        fill: colors[key]
                                    }}
                                />
                            }
                        />
                    )
                })}
            </VictoryChart>
            <VictoryChart
                width={500}
                height={100}
                scale={{ x: 'd' }}
                padding={{ top: 0, left: 50, right: 50, bottom: 45 }}
                containerComponent={
                    <VictoryBrushContainer responsive={true}
                        brushDimension='x'
                        brushDomain={{ x: [0, 0] }}
                        onBrushDomainChange={handleBrush}
                    />

                }
            >
                <VictoryAxis
                    style={{
                        tickLabels: {
                            fill: "white",
                        },
                        tickLabels: {
                            fill: "white",
                            fontSize: 18,
                            fontWeight: "bolder"
                        },
                        axis: {
                            stroke: 'black',
                            height: 8
                        }
                    }}
                    fixLabelOverlap={true}
                    tickValues={[]}
                />
                {data.map((dataArray, key) => {
                    return (
                        <VictoryLine key={key}
                            name={`line${key}`}
                            style={{
                                data: { stroke: colors[key], strokeWidth: 4 },
                            }}
                            data={dataArray}
                            x="d"
                            y="alcohol_grams"
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
        </div>
    )
}