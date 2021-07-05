import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './TUser.css';

const User = ({user}) => {
    
    return (
        <div className="TUser">
           <Avatar className="avtr" src={user.avatar} />
          <div  className="Details"> 
          <p>{`  ${user.first_name} ${user.last_name}`}</p>
          <p>{`  ${user.email}`}</p>
          </div>


        </div>
    )
}

export default User
