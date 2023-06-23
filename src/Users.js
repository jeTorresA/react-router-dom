import { useState } from "react";

const Users = () => {

    const [ valoresForm, setValoresForm ] = useState({});
    const [ usuarios, setUsuarios ] = useState([]);

    const handleOnchange = (e) => {
        console.log(e.target.name, e.target.value);        
        /*if (e.target.name === 'nombre'){
            setValoresForm({//usando operador spread
                ...valoresForm, nombre: e.target.value
            });
        }else if (e.target.name === 'edad'){
            setValoresForm({//usando operador spread o es spreed?
                ...valoresForm, edad: e.target.value
            });    
        }*/
        const {name, value} = e.target;
        setValoresForm({//usando operador spread
           //...valoresForm, [e.target.name]: e.target.value
           ...valoresForm, [name]: value //usando de-estructuracion de objetos
        });  
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault(); //para evitar que la pagina se recargue al dar click
        console.log(e);
        setUsuarios([...usuarios, valoresForm]);
    }
    
    return <>
        <h2>Usuarios</h2>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <label>Nombre</label>
            <input type='text'
                onChange={(e) => handleOnchange(e)}
                name='nombre'
                minLength={6}
                required
            ></input>
            <label>Edad</label>
            <input type='number'
                onChange={(e) => handleOnchange(e)}
                name='edad'
                required
            ></input>
            <button>Guardar</button>
        </form>
        <ul>
            {
                usuarios.map((usuario) => {
                    return <li key={usuario.nombre}>{ ` Nombre : ${usuario.nombre} Edad : ${usuario.edad} ` }</li>
                })
            }
        </ul>
    </>
}

export {
    Users,
}