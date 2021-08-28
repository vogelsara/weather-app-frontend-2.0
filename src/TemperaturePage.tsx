import { useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper'
import useTemperatureRows from './Temperatures/query'
import GeoForm from './Forms/GeoForm'
import TemperatureTable from './TemperatureTable'

export default function TemperaturePage() {

    const [coordinates, setCoordinates] = useState({lat:0, lon:0})

    const temperatureData = useTemperatureRows(coordinates)
    const rows = temperatureData.data
    const backgroundColor = 'rgb(78,115,171) linear-gradient(90deg, rgba(78,115,171,1) 0%, rgba(86,143,163,1) 50%, rgba(205,205,205,1) 100%);'

    function updateCoordinates(lat: number, lon: number): void {
        setCoordinates({lat, lon})
        console.log({lat, lon})
    }

    return (
        <TableContainer component={Paper} style={{boxShadow:"none", height:"100vh" }}>
            <h1>Weather report of last 4 days</h1>
            <GeoForm handleSubmit={updateCoordinates} resultIsLoading={temperatureData.isLoading} />
            {temperatureData.isLoading ? <CircularProgress /> : <TemperatureTable rows={rows} />}
        </TableContainer>
    )

}