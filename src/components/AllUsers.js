import React, { useEffect, useState } from "react";
import { getUsers, deleteUser, } from "../Service/api";
import { Link } from "react-router-dom";


const AllUsers = () => {
  const [users, setUsers] = useState([]);
  
  //

  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  // console.log(users)
  const handleDelete = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  
  return (
    <>
      <div className="container my-2">
        <div className="">
          <h4 className="text-center my-3 text-decoration-underline">List of All Users</h4>
        </div>
        <table className="table table-dark table-striped text-center  ">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-warning"
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
