import { useEffect, useState } from "react";


function Users() {
    const [users, setUsers] = useState([])
    const [pending, setPending] = useState(false)

    async function fetchAllUsers(){
        try{
            setPending(true)
            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json();
            if(result?.users){
                setUsers(result?.users)
                setPending(false)
            } else{
                setUsers([])
                setPending(false)
            }
        } catch(error){
            console.log(error)
        }
    }

    // function handleFetchListOfUsers(){
    //     fetchAllUsers();
    // }

    // useEffect(()=>{
    //     fetchAllUsers();
    // },[])

    console.log(users)

    if(pending) return <h1>Fetching users! Please Wait...</h1>

    return ( 
        <div>
            <h1>All users list</h1>
            <button onClick={fetchAllUsers}>Fetch Users List</button>
            <ul>
                {
                    users && users.length >0 ? 
                    users.map(userItem=> 
                        <li key={userItem?.id}>
                            <p>{userItem?.firstName} {userItem?.lastName} </p>
                        </li>
                    ) : <h1>No Users found! Please try again.</h1>
                }
            </ul>
        </div>
     );
}

export default Users;