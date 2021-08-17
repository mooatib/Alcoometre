import './stats.css'
import { VictoryChart, VictoryLine, VictoryLegend, createContainer, VictoryPie, VictoryLabel, VictoryAxis, VictoryBrushContainer, VictoryStack, VictoryBar, VictoryVoronoiContainer } from 'victory'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import updateUserRate from '../../../actions/user.actions'

export default function GroupStats() {
    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi")
    const colors = ["white", "yellow", "green", "black", "violet", "red", "blue", "orange", "pink", "grey"];
    const [dataBars, setDataBars] = useState([])
    const [dataRate, setDataRate] = useState([])
    const [zoomDomain, setZoomDomain] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const apiUrl = `${process.env.REACT_APP_API_URL}api/stats/groupbars`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setDataBars(data));
    }, [setDataBars])

    useEffect(() => {
        const apiUrl = `${process.env.REACT_APP_API_URL}api/stats/grouprate?step=${4}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setDataRate(data));
    }, [setDataRate])

    const dataPie = []
    dataBars.map((data) => {
        dataPie.push({ username: data.username, n: data.nb + data.ns })
    })

    function handleZoom(domain) {
        setZoomDomain(domain)
    }
    function handleBrush(domain) {
        setZoomDomain(domain)
    }
    return (
        <div>
            <div>
                <VictoryChart
                    width={500}
                    height={400}
                    containerComponent={
                        <VictoryZoomVoronoiContainer responsive={true}
                            mouseFollowTooltips
                            zoomDimension="x"
                            zoomDomain={zoomDomain}
                            onZoomDomainChange={handleZoom}
                            labels={({ datum }) => datum.alcohol_grams}
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
                                angle: 0,
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
                    {dataRate.map((dataArray, key) => {
                        return (
                            <VictoryLine key={key}
                                name={`line${key}`}
                                style={{
                                    data: { stroke: colors[key], strokeWidth: 4 },
                                }}
                                data={dataArray}
                                x="d"
                                y="alcohol_grams"
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
                    {dataRate.map((dataArray, key) => {
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
            <div>
                <VictoryChart
                    domainPadding={10}
                    containerComponent={
                        <VictoryVoronoiContainer responsive={true}
                            labels={({ datum }) => `${datum.nb}, ${datum.ns}`}
                        />
                    }
                >
                    <VictoryAxis
                        style={{
                            axis: {stroke: "transparent"}, 
                            ticks: {stroke: "transparent"},
                            tickLabels: { fill:"transparent"} 
                        }}
                        dependentAxis
                        />
                    <VictoryAxis
                        style={{
                            tickLabels: {
                                fill: "white",
                                fontSize: 18,
                                fontWeight: "bolder",
                                angle: -45,
                                textAnchor: "middle",
                                padding: 1
                            },
                            axis: {
                                stroke: 'black',
                                height: 8
                            }
                        }}
                    />
                    <VictoryStack colorScale={"red"}>
                        <VictoryBar data={dataBars} x="username" y="nb" />
                        <VictoryBar data={dataBars} x="username" y="ns" />
                    </VictoryStack>
                </VictoryChart>
            </div>
            <div>
                <VictoryPie
                    width={400} height={400}
                    innerRadius={85} labelRadius={160}
                    data={dataPie} x="username" y="n"
                    labels={({ datum }) => `${datum.username}\n ${datum.n}`}
                    colorScale={["white", "yellow", "green", "black", "violet", "red", "blue", "orange", "pink", "grey"]}
                    style={
                        { labels: { fontSize: 18, fill: "white" } }
                    }
                />
            </div>
        </div>
    )
}