import lscache from 'lscache';

export const fetchData = (fetch: () => void) =>{
    const expiryMilliseconds = 1000;  //time units is seconds
    lscache.setExpiryMilliseconds(expiryMilliseconds);
    // var key = 'thekey';
    const numExpiryUnits = 1200; // expire after two seconds
    setTimeout(() => {
        fetch()
        alert('data')
    }, expiryMilliseconds*numExpiryUnits + 1);
}