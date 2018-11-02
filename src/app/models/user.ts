export interface User {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    fullName?: string;
    displayName?: string;
    avatar?:string;
    isPublic?:boolean;
    deviceId?:string;
    bands?: Array<{id: number,name: string}>;
    fb?:boolean;
    facebookToken?:boolean;
    spotifyToken?:boolean;
    profile?: {about: '', instrument:'', experience:'', styles:Array<{name:string}>, influencies:Array<{name:string}>};
    contact?: {city:'', area:'', zip:''};
    channels?:Array<{channel:'', name:'', url:''}>;
}
   