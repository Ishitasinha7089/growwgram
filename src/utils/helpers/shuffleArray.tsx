const shuffleArray = (arr: Array<any>) =>{
    for (let i = arr.length - 1; i > 0; i--) {
   
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
                    
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
        
    return arr.slice(0,5);
}

export default shuffleArray;