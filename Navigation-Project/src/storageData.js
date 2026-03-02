
export const GetlocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : []
}
export const SetlocalStorage = (key ,value)=> {
    localStorage.setItem(key, JSON.stringify(value)) || []
}