import axios, { Axios } from 'axios';

export const spaceX = axios.create({
    baseURL: 'https://api.spacexdata.com/v4/',
}) as Axios;
