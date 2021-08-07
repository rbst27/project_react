
import "./list.css";
import React, {useEffect,useState } from 'react';
  
  

function List (){
 

    const [show, setShow] = useState(false);
    const [selectClient,setSelectClient]=useState(true)
    const [state, setState]=useState([])
    

    const clickPay=(obj)=>{
        setShow(true)
        setSelectClient(obj)
    }


    function Pagamento(){
   
        const comboCartao = document.getElementById("cartao");
        var opcao=comboCartao.options[comboCartao.selectedIndex].value;
        var selecionado=[];
        var pago =document.getElementById("valor").value;
      
        if(opcao===1){
           selecionado.numero="1111111111111111"
           selecionado.seguraca=789;
           selecionado.vencimento="01/18"
        }else{
            selecionado.numero="4111111111111234"
            selecionado.seguraca=123;
            selecionado.vencimento="01/20"
        }
       
    
        const pagamentos ={
           
            "card_number":selecionado.numero,
            "cvv":selecionado.seguraca,
            "expiry_date": selecionado.vencimento,
            "destination_user_id":selectClient.id,                     
            "value": pago
    }

        const requestInfo = {
         method: 'POST',
         body: JSON.stringify(pagamentos),
         headers: new Headers({
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         }),
     };            
       

useEffect(()=> fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',requestInfo))}




    


    const Modal =()=>{
        return <div  className="modal"> 
          <p className="aba">Pagamento para {selectClient.name}</p>
          <ul>
           <li>   
           <input type="text" name="valor" id="valor" placeholder="R$ 0,00"></input>
           </li>
           <li>
           <select id="cartao" name="cartão">
           <option value="1">Cartão com final 1111</option>
           <option value="2">Cartão com final 0123</option>
           </select>
           </li>
           <li>  
           <button onClick={Pagamento} >Pagar</button>
           </li>
           </ul>
        </div>
    }
   
   


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
          
             

            <button onClick={()=>clickPay(tra)}>Pagar</button>
             
            </li>
             )} 
             
             { (show) ? <Modal /> : null } 
            
            </>
            );


                     
        }


        
    
        export default List
