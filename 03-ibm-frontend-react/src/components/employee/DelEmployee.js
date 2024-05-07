import axios from "axios";
import { useState } from "react";

const DeleteEmployee = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [error, setError] = useState('');

    const handleChange = (evt) => {
        setEmployeeId(evt.target.value);
        setError('');
    };

    const handleDelete = () => {
        const deleteUrl = `http://localhost:9099/emp/delete-emp/${employeeId}`;
        axios.delete(deleteUrl)
            .then(() => {
                alert(`Employee with id ${employeeId} deleted successfully!`);
                setEmployeeId('');
            })
            .catch(error => {
                setError("Error deleting employee. Please try again.");
                console.error("Error deleting employee:", error);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Delete Employee</h1>
            <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">Employee ID:</label>
                <input type="text" id="employeeId" value={employeeId} onChange={handleChange} className="form-control" placeholder="Enter employee ID" required />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="button" onClick={handleDelete} className="btn btn-danger">Delete Employee</button>
        </div>
    );
};

export default DeleteEmployee;