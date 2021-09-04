import { useQuery, UseQueryResult } from 'react-query'
import axios from 'axios'
import { Temperature } from './Temperature'
import { Coordinates } from '../Types/Coordinates'

axios.defaults.baseURL = 'http://localhost:8000'

export function useTemperatureRows(coordinates: Coordinates): UseQueryResult<Temperature[]> {
	return useQuery<Coordinates, unknown, Temperature[]>(['temperatures', coordinates], () =>
    axios
        .get(`/history/?lat=${coordinates.lat}&lon=${coordinates.lon}`)
        .then(res => res.data)
    );
}

export function useForecastRows(coordinates: Coordinates): UseQueryResult<Temperature[]> {
	return useQuery<Coordinates, unknown, Temperature[]>(['forecast', coordinates], () =>
    axios
        .get(`/forecast/?lat=${coordinates.lat}&lon=${coordinates.lon}`)
        .then(res => res.data)
    );
}
