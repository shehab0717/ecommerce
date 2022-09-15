



export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


export function createAction(type: string, payload?:any){
    console.log(`${type}: is running...`);
    return{
        type,
        payload
    };
}
