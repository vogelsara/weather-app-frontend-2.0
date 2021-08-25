import { 
    Formik,
    Form,
    Field,
} from 'formik'
import { Coordinates } from '../Types/Coordinates'

type Props = {
    handleSubmit: (lat: number, lon: number) => void
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
            onSubmit={updateCoordinates}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="number" name="lat" />
                    <Field type="number" name="lon" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
 }

