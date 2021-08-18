import { useQuery } from 'react-query'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:8000'
 
 export const rows = useQuery<string[]>('rows', () =>
        axios.get('/').then(res => res.data)
    )