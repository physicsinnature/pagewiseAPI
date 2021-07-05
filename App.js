import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Users from './users';
import Pagination from './Page';
import { USER_PER_PAGE } from "./fixpg";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  useEffect(() => {

    const fetchUsers = async () => {
     
      const res = await axios.get('https://reqres.in/api/users?page=2');
     
      setUsers(res.data.data);
      setTotalPages(Math.ceil(res.data.data.length / USER_PER_PAGE));
  


      
    };
    
    fetchUsers();
  }, []);

  const handleClick = num => {
    setPage(num);
  }

  return (
    <div className="App" >
      <h1>Clients</h1>
     { <Users users={users} page={page} />  }
     <Pagination totalPages={totalPages} handleClick={handleClick} />
    </div>
  );
}

export default App;
