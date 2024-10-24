import { useState, useEffect } from 'react';
import UsersView from './UsersView';
        

const UsersContainer = () =>{

    const [data, setData] = useState([]),
    [loadingData, setLoadingData] = useState(true);

    const getDataUsers = async () =>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok){
                console.log("hubo un error en la consulta")
            }
            const usersList = await response.json()
            setData(usersList)
        }catch{
            console.log("Error en la api")
        }finally{
            setLoadingData(false)
        }
    }

    useEffect(() => {
        getDataUsers()
    }, [])

    return(
        <UsersView loadingData={loadingData} data={data} />
    )

}

export default UsersContainer