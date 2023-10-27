import { useEffect, useState } from "react";

export const useFetch = (url) => {

 const [state, setState] = useState({
    data: null,
    colorState: false,
 })
    
const getFetch = async() => {

const resp = await fetch(url);
const data = await resp.json();

setState({
    data: data,
    colorState: false,
})
}

useEffect(() => {
  getFetch();

}, [url])

console.log(state)

return {
    data: state.data,
    colorState: state.colorState,
};

}
