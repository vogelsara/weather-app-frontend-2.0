import { useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper'
import { useTemperatureRows, useForecastRows } from './Temperatures/query'
import GeoForm from './Forms/GeoForm'
import TemperatureTable from './TemperatureTable'
import TabPanel from './Components/TabPanel'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export default function TemperaturePage() {

    const [coordinates, setCoordinates] = useState({lat:0, lon:0})
    const [value, setValue] = useState(0);

    const historicTemperatureData = useTemperatureRows(coordinates)
    const historyRows = historicTemperatureData.data

    const forecastTemperatureData = useForecastRows(coordinates)
    const forecastRows = forecastTemperatureData.data

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    function updateCoordinates(lat: number, lon: number): void {
        setCoordinates({lat, lon})
        console.log({lat, lon})
    }

    return (
        <TableContainer component={Paper} style={{boxShadow:"none", height:"100vh" }}>
            <h1>Weather report of last 4 days</h1>
            <GeoForm handleSubmit={updateCoordinates} resultIsLoading={historicTemperatureData.isLoading} />
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="History" />
                <Tab label="Forecast" />
            </Tabs>
            <TabPanel value={value} index={0}>
                {historicTemperatureData.isLoading ? <CircularProgress /> : <TemperatureTable rows={historyRows} />}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {forecastTemperatureData.isLoading ? <CircularProgress /> : <TemperatureTable rows={forecastRows} />}
            </TabPanel>
        </TableContainer>
    )

}