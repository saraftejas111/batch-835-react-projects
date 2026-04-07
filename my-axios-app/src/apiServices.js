import axios from "axios";


export const showAllEmployees = () => axios.get(`http://localhost:9090/employees`) ;   // java wala api

export const addEmployee = (emp) => axios.post(`http://localhost:9090/save` , emp) ;  // db.json wala api

export const updateEmployee = (id , emp) => axios.put(`http://localhost:9090/update` , emp) ;  // db.json wala api

export const deleteEmployee = (id) => axios.delete(`http://localhost:9090/delete/${id}`) ;  // db.json wala api