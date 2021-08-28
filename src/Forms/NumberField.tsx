import { TextField } from "@material-ui/core";
import { useField } from "formik";

export function NumberField({name}: any) {
    const [field, meta] = useField({ name })
    const isError = meta.error !== undefined
    const errorText = isError ? meta.error : null
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 2em'
        }}>
        <TextField {...field} error={isError} helperText={errorText}/>
        </div>
    )
}