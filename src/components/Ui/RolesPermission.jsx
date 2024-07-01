import React from "react";
import { useSelector } from "react-redux";

export const UsersRolesPermissions = () => {
  const users = useSelector((state) => state.auth.user);
  const roles = useSelector((state) => state.auth.roles);
  const permissions = useSelector((state) => state.auth.permissions);

  return (
    <div>
      <h1>Users and Roles List</h1>
      <div>
        <h2>User list</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Roles list</h2>
        <ul>
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
      <div>  
        <h2>Permission list</h2>
        <ul>
          {permissions.map((permissions, index) => (
            <li key={index}>{permissions}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
