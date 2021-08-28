import { Box, Button, FormLabel, TextField } from '@material-ui/core';
import { 
    Formik,
    Form,
    Field,
    useField,
} from 'formik';

import { NumberField } from './NumberField';
import * as Yup from 'yup';
import { Coordinates } from '../Types/Coordinates'

const GeoSchema = Yup.object().shape({
    lat: Yup.number()
            .min(-90, 'Latitude must be minimum -90')
            .max(90, 'Latitude must be maximum 90'),
    lon: Yup.number()
            .min(-180, 'Longitude must be minimum -180')
            .max(180, 'Longitude must be maximum 180')
  });

type Props = {
    handleSubmit: (lat: number, lon: number) => void,
    resultIsLoading: boolean
}

export default function GeoForm(props: Props) {

    const initialCoordinates: Coordinates = {
        lat: 0,
        lon: 0
    }

    function updateCoordinates(values: Coordinates) {
        props.handleSubmit(values.lat, values.lon)
    }

    return(
        <Formik
            initialValues={initialCoordinates}
            validationSchema={GeoSchema}
            onSubmit={updateCoordinates}
        >
            <Form style={{margin:"2em 0"}}>
                <Box display="flex" justifyContent="center" margin="2em auto 1em auto">
                    <NumberField name="lat" />
                    <NumberField name="lon" />
                </Box>
                <Button type="submit" variant="contained" color="primary" disabled={props.resultIsLoading}>
                    Submit
                </Button>
            </Form>
        </Formik>
    )
 }

