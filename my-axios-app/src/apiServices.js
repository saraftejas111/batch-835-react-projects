import axios from "axios";


export const showAllEmployees = () => axios.get("http://localhost:9090/all-employees") ;   // java wala api

export const addEmployee = (emp) => axios.post("http://localhost:8080/employees" , emp) ;  // db.json wala api