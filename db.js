let fetchInit = {
    method:"GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"

};

const fetchData = fetch("http://localhost:3000/users", fetchInit);
fetchData.then(data => data.json()).then(data => console.log(data))

let putInit =
{
    method:"GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"

};