import React,{ useState, useEffect} from 'react';
import "./list.css";
function List (){
    const [state, setState]=useState([])
    useEffect(()=>{
        fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            setState(data)
        })
    }, []);
    return (
        <>
        {state.map((tra) =>
            <li>
            <img src={tra.img} />
            <label>Nome do Usuário:</label>{tra.name}
            <label>Id:</label>{tra.id}
            <label>Username:</label>{tra.username}
            </li>
            )}
            </>
            );
        }
        export default List