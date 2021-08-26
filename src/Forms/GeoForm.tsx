import { 
    Formik,
    Form,
    Field,
} from 'formik'
import * as Yup from 'yup';
import { Coordinates } from '../Types/Coordinates'

const GeoSchema = Yup.object().shape({
    lat: Yup.number()
            .min(-90, 'Latitude must be minimum -90')
            .max(90, 'Latitude must be maximum 90'),
    lon: Yup.number()
            .min(-180, 'Longitude must be minimum -180')
            .max(180, 'Longitude must be maximum 180'),
  });

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
            validationSchema={GeoSchema}
            onSubmit={updateCoordinates}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <Field type="number" step=".0001" name="lat" />
                    {errors.lat && touched.lat ? (
                        <div>{errors.lat}</div>
                    ) : null}
                    <Field type="number" step=".0001" name="lon" />
                    {errors.lon && touched.lon ? (
                        <div>{errors.lon}</div>
                    ) : null}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
 }

