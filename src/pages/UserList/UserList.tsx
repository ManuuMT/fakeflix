import React from 'react';
import './styles/UserList.scss';
export interface UserListInterface {}

const UserList : React.FC<UserListInterface> = () => {
	return <div className='userlist'>UserList</div >;
};

export default UserList;
