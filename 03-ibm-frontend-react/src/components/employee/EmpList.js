import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState('');
    //const url = 'http://localhost:9099';

    useEffect(() => {
        console.log('useEffect');
        // axios.get()
        axios.get('http://localhost:9099/emp/get-all-emps')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <h1 style={{ textAlign: 'center' }}>EmpList Component</h1>
        </div>

            <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <th>Adhaar No.</th> <th>Firstname</th> <th>Email</th> <th>Salary</th> <th>Actions</th>
                </thead>
                <tbody>
                    {empList && empList.map((emp,index) =>
                        <tr key={emp.id} style={{ backgroundColor: index % 2 === 0 ? '#393e46' : '#222831' }}>
                            <td >{emp.aadhaar} </td>
                            <td >{emp.firstName} </td>
                            <td >{emp.email} </td>
                            <td >{emp.salary} </td>
                            <td>
                                <button style={{ color: 'black', backgroundColor: '#f2f2f2', border: '1px solid #3d9bff', borderRadius: '5px', padding: '5px 10px', marginRight: '5px'}}>Update</button>
                                <button style={{ color: 'black', backgroundColor: '#f96d00', border: '1px solid #ff3d3d', borderRadius: '5px', padding: '5px 10px' }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
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
