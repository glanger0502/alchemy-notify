import useSWR from 'swr';
import axios from 'axios'
import { Activities } from '../types';

export function getActivities() {
    const url = "https://glanger.link/address-activity/list";
    const getActivities = (url: string) => axios.get(url).then(res => res.data);

    const { data, error } = useSWR<Activities, Error>(url, getActivities)

    return data?.data;
}