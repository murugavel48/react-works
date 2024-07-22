import { useEffect, useState } from "react";
import UserCard from "./UserCard"

function Users() {
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    let filterdUsers = search
        ? users.filter(
            (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.address.city.toLowerCase().includes(search.toLowerCase())
        )
        : users;
    let [users, setUsers] = useState([])
    async function getAllUsers() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await response.json()
            console.log(data)
            setUsers(data)      //array of user objects
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (<>
        {users && users.map((user) => <div>{JSON.stringify(user)}<hr /></div>)}
        <div className='card-container'>
            {users && users.map((user) => <UserCard user={user}> </UserCard>)}
        </div>
    </>)
}
export default Users