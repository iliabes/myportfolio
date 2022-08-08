export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,

}



export interface IWeatherCurrent {
    description:string,
    main: string
}


export interface ICurrent {
    feels_like: number,
    pressure: number,
    temp: number,
    weather: IWeatherCurrent[]
}



interface IWetherDayly {
    wether: number,
    "id": number,
    "title": string,
    "completed": boolean
}



export interface IResponse{
    statusText:string
    status:number
}

export interface IDayly {
    pressure:number
    weather:IWeatherCurrent[]
}


export interface IWether {
    current:ICurrent,
    dayly:IDayly[],
    isLoading:boolean,
    response:IResponse
}