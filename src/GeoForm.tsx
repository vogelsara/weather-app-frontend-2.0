import { 
    Formik,
    Form,
    Field,
    ErrorMessage,
 } from 'formik'

 type Props = {
     handleSubmit: (lat: string, lon: string) => void
 }

 export default function GeoForm(props: Props) {

    return(
    <Formik
        initialValues={{
            lat: '',
            lon: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                props.handleSubmit(values.lat, values.lon)
                setSubmitting(false);
            }, 400);
        }}
    >
    {({ isSubmitting }) => (
        <Form>
            <Field type="number" name="lat" />
            <Field type="number" name="lon" />
            <ErrorMessage name="lat" component="div" />
            <ErrorMessage name="lon" component="div" />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    )}
   </Formik>
    )
 }

