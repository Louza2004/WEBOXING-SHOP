import './header.css';
import Navbar from './navbar';

function Header(props){
    return(
        <div className={props.cName}>
            <Navbar/>
        </div>
    )
}

export default Header;