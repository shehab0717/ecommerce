



export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


export function createAction(type: string, payload?:any){
    return{
        type,
        payload
    };
}
