
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Temperature } from './Temperatures/Temperature'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

type Props = {
    rows: Temperature[] | undefined
}

export default function TemperatureTable(props: Props) {
    const classes = useStyles()

    return (
        <Table className={classes.table} aria-label="simple table" style={{width: "75%", margin:"0 auto"}}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Mean (°C)</TableCell>
                        <TableCell align="right">Median (°C)</TableCell>
                        <TableCell align="right">Minimum (°C)</TableCell>
                        <TableCell align="right">Maximum (°C)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows?.map((row: Temperature) => (
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
    )
}