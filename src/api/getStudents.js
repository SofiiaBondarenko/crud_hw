export const getStudents= ()=>{
    return fetch ("http://localhost:3000/students").then((res)=>res.json())
}