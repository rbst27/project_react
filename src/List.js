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
            <li className="borda" key={tra.id}>
            <img className="perfil" src={tra.img}  alt="perfil"/>
            <div className="informacoes"> 
            <p>
            <label>Nome do Usuário:</label>{tra.name}
            </p>
            <p>
             <label>Id:</label>{tra.id}
             <label>   Username:</label>{tra.username}
            </p>
            </div>
          
            
            <button>Pagar</button>
            </li>
            )}
            </>
            );
        }
        export default List