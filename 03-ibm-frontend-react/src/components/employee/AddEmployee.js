import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const backendUrl = 'http://localhost:9099/emp/add-emp';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: ''});
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhaar: '', salary: ''});
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ width: '1000px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>    
            <h1 style={{ textAlign:"centre" }}>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <br />
                    <label htmlFor="aadhaar">Aadhaar:</label>
                    <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                    {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
                    <br />
                    <label htmlFor="salary">Salary:</label>
                    <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
                    {errors.salary && <span className="error">{errors.salary}</span>}
                    <br />
                    <input type="submit" value="Add Employee" style={{ width: '100%', padding: '10px', borderRadius: '3px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }} />
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;


// import axios from "axios";
// import { useState } from "react";

// const AddEmployee = () => {

//     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });

//     const handleChange = (evt) => {
//         console.log(evt.target);
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(empData);
//         axios.post(backendUrl, empData)
//             .then((resp) => {
//                 console.log(resp.data);
//                 alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
//                 setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//             });
//     };

//     return (
//         <>
//             <h1>Add Employee Component</h1>
//             <form onSubmit={handleSubmit} >
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 <br />
//                 <input type="submit" value="Add Employee" />
//             </form>
//         </>
//     );
// };

// export default AddEmployee;






