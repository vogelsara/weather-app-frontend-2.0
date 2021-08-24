import { useQuery, UseQueryResult } from 'react-query'
import axios from 'axios'
import { Temperature } from './Temperature'
import { Coordinates } from '../Types/Coordinates'

axios.defaults.baseURL = 'http://localhost:8000'

export default function useTemperatureRows(coordinates: Coordinates): UseQueryResult<Temperature[]> {
	return useQuery<Coordinates, unknown, Temperature[]>(['temperatures', coordinates], () =>
    axios
        .get(`/?lat=${coordinates.lat}&lon=${coordinates.lon}`)
        .then(res => res.data)
    );
}
