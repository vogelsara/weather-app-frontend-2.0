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

    function updateCoordinates(lat: number, lon: number): void {
        setCoordinates({lat, lon})
    }

    return (
        <TableContainer component={Paper}>
            <GeoForm handleSubmit={updateCoordinates} />
            <h1>Weather report of last 4 days</h1>
            {temperatureData.isLoading ? <CircularProgress /> : <TemperatureTable rows={rows} />}
        </TableContainer>
    )

}