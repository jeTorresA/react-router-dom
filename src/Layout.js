import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return <>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/abaut'>Abaut</Link></li>  
                <li><Link to='/users'>Users</Link></li>               
            </ul>
        </nav>
        <Outlet></Outlet> {/** Permite reenderizar la vista del mesu selecci */}
    </>
}

export {
    Layout,
}