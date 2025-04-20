import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=> {
    getUsers();
},[]);

const getUsers = async() =>{
    const response = await axios.get(`${BASE_URL}/users`);
    setUser(response.data);
};

const deleteUser = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Judul</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={users.id}>
                        <td>{index+1}</td>
                        <td>{users.name}</td>
                        <td>{users.judul}</td>
                        <td>{users.note}</td>
                        <td>
                        <Link
                    to={`edit/${users.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(users.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default UserList