import { ICordinates } from "components/Home/ICordinates";
//import axios, { AxiosResponse } from 'axios';

export default class XLib
{
    _url: string = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric';
    _API_KEY: string ='AIzaSyDBPB3PTqUubOt1HZ96K1EmKJL2AuS3Z-0';
    start: ICordinates ;
    end: ICordinates;

    constructor(cord1: ICordinates, cord2:ICordinates)
    {
      this.start = cord1;
      this.end = cord2;
    }

    // fetchDistanceBetweenPoints (startCordinate: ICordinates, endCordinate: ICordinates) : Promise<AxiosResponse> 
    // {
    //     let urlToFetchDistance = this._url+'&origins='+startCordinate.lat+','+startCordinate.long+'&destinations='+endCordinate.lat+'%2C'+endCordinate.long+'&key=' + this._API_KEY;
    //     let headers = {
    //           	headers: {
    //         	'Access-Control-Allow-Origin': '*',
    //         	'Access-Control-Allow-Methods': 'GET',
    //         	'Content-Type': 'application/json',
    //         	}
    //         };
    //     return axios.get(urlToFetchDistance,headers);
    // }     
}