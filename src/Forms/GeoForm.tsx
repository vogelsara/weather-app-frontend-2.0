import { 
    Formik,
    Form,
    Field,
    ErrorMessage,
 } from 'formik'

 type Props = {
     handleSubmit: (lat: number, lon: number) => void
 }

 export default function GeoForm(props: Props) {

    return(
    <Formik
        initialValues={{
            lat: 0,
            lon: 0
        }}
        onSubmit={(values) => {         
            props.handleSubmit(values.lat, values.lon)          
        }}
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

