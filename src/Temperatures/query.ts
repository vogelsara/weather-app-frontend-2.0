import { useQuery } from 'react-query'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export default function useTemperatureRows(lat: string, lon: string) {
	return useQuery('temperatures', () =>
    axios
        .get(`/?lat=${lat}&lon=${lon}`)
        .then(res => res)
    );
}