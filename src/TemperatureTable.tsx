import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { rows } from './Temperatures/query'
import { Temperature } from './Temperatures/Temperature'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function TemperatureTable() {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <h1>Weather report of last 4 days</h1>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Göteborg</TableCell>
                        <TableCell align="right">Mean (°C)</TableCell>
                        <TableCell align="right">Median (°C)</TableCell>
                        <TableCell align="right">Minimum (°C)</TableCell>
                        <TableCell align="right">Maximum (°C)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.data?.map((row) => (
                        <TableRow key={row.date}>
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">
                                {row.meanTemperature}
                            </TableCell>
                            <TableCell align="right">
                                {row.medianTemperature}
                            </TableCell>
                            <TableCell align="right">
                                {row.minTemperature}
                            </TableCell>
                            <TableCell align="right">
                                {row.maxTemperature}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}