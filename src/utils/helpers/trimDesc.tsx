const trimDesc = (desc: string): string =>{
    if(desc.length>100){
        return desc.slice(0,100)
    }
    return desc
}

export default trimDesc;