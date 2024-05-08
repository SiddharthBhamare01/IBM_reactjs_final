import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState('');
    const [updateData, setUpdateData] = useState({
        id: "",
        firstName: "",
        email: "",
        aadhaar: "",
        salary: "",
      });

      const [showUpdateModal, setShowUpdateModal] = useState(false);
      const [errors, setErrors] = useState({});
      let [first, setfirst] = useState(0);
    //const url = 'http://localhost:9099';

    useEffect(() => {
        axios
          .get("http://localhost:9099/emp/get-all-emps")
          .then((resp) => {
            setEmpList(resp.data);
          })
          .catch((error) => {
            console.error("Error fetching employee list:", error);
          });
          console.log(empList)
      },[first]);
    // useEffect(() => {
    //     console.log('useEffect');
    //     // axios.get()
    //     axios.get('http://localhost:9099/emp/get-all-emps')
    //         .then((resp) => {
    //             console.log(resp.data);
    //             setEmpList(resp.data);
    //         })
    // }, []);
    const handleDelete = (id) => {
        console.log(id);
        const deleteUrl = `http://localhost:9099/emp/delete-emp/${id}`;
        axios
          .delete(deleteUrl)
          .then(() => {
            const updatedEmpList = empList.filter((emp) => emp.emploeeId !== id);
            alert(`Employee with id ${id} deleted successfully!`);
            //setEmployeeId('');
            setEmpList(updatedEmpList);
            setfirst(first+=1)
          })
          .catch((error) => {
            console.error("Error deleting employee:", error);
            alert(`Employee with id ${id} was not!`);
          });
      };
      const handleUpdate = (emp) => {
        setfirst(first+=1);
        console.log(emp);
        setUpdateData({ ...emp, id: emp.id }); // Copy all fields from emp object to updateData
        setShowUpdateModal(true);   
    };
    

      const handleChange = (evt) => {
        setUpdateData({ ...updateData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: "" });
      };
      const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(updateData)
        // console.log(updateData.id);
        const updateUrl = `http://localhost:9099/emp/update-emp/${updateData.employeeId}`;
        axios
            .put(updateUrl, updateData)
            .then((resp) => {
                alert(
                    `${resp.data.firstName} with id ${resp.data.emp} updated successfully!`
                );
                const updatedEmpList = empList.map((emp) =>
                    emp.id === resp.data.id ? resp.data : emp
                );
                setEmpList(updatedEmpList);
                setShowUpdateModal(false);
                setUpdateData({
                    id: "",
                    firstName: "",
                    email: "",
                    aadhaar: "",
                    salary: "",
                });
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
            });
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
                <h1 style={{ textAlign: 'center' }}>EmpList Component</h1>
            </div>

            <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th className="px-4">Aadhaar No.</th>
                        <th className="px-4">Firstname</th>
                        <th className="px-4">Email</th>
                        <th className="px-4">Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {empList && empList.map((emp, index) =>
                        <tr key={emp.id} style={{ backgroundColor: index % 2 === 0 ? '#393e46' : '#222831' }}>
                            <td className="px-4">{emp.aadhaar}</td>
                            <td className="px-4">{emp.firstName}</td>
                            <td className="px-4">{emp.email}</td>
                            <td className="px-4">{emp.salary}</td>
                            <td>
                                <button onClick={() => handleUpdate(emp)} style={{ color: 'black', backgroundColor: '#f2f2f2', border: '1px solid #3d9bff', borderRadius: '5px', padding: '5px 10px', marginRight: '5px' }}>Update</button>
                                <button onClick={() => handleDelete(emp.id)} style={{ color: 'black', backgroundColor: '#f96d00', border: '1px solid #ff3d3d', borderRadius: '5px', padding: '5px 10px' }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {showUpdateModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Employee</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowUpdateModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" value={updateData.firstName} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" id="email" name="email" value={updateData.email} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="aadhaar" className="form-label">Aadhaar:</label>
                                        <input type="number" id="aadhaar" name="aadhaar" value={updateData.aadhaar} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="salary" className="form-label">Salary:</label>
                                        <input type="number" id="salary" name="salary" value={updateData.salary} onChange={handleChange} className="form-control" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Update Employee</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;
