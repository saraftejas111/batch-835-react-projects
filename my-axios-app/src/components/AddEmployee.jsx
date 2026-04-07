import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from '../apiServices';

const AddEmployee = ({ setRef, acceptEmp }) => {

  const initialForm = { id: "", name: "", role: "", salary: "" };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (acceptEmp && acceptEmp.id > 0) {
      setForm({
        id: acceptEmp.id || "",
        name: acceptEmp.name || "",
        role: acceptEmp.role || "",
        salary: acceptEmp.salary || ""
      });
    } else {
      setForm(initialForm);
    }
  }, [acceptEmp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (acceptEmp && acceptEmp.id > 0) {
      updateEmployee(acceptEmp.id, form)
        .then((res) => {
          console.log("res --> ", res);
          setForm(initialForm);
          setRef(1);
        })
        .catch((err) => console.log("error --> ", err));
    } else {
      addEmployee(form)
        .then((res) => {
          console.log("res --> ", res);
          setForm(initialForm);
          setRef(1);
        })
        .catch((err) => console.log("error --> ", err));
    }
  };

  return (
    <div>
      <h2>
        {acceptEmp && acceptEmp.id > 0 ? "Update Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="enter role"
          name="role"
          value={form.role || ""}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="enter salary"
          name="salary"
          value={form.salary || ""}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">
          {acceptEmp && acceptEmp.id > 0 ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;