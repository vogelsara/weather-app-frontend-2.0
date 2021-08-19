import { useQuery } from 'react-query'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export default function useTemperatureRows() {
	return useQuery('temperatures', () =>
    axios
        .get('/')
        .then(res => res)
    );
}