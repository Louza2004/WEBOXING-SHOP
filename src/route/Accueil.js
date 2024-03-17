import Header from "../components/header";
import Main from "../Accueil/component/main";


function Accueil(){
    return(
        <div className="accueil">

           
            <Header
            cName="header"/>
            <Main/>
            
        </div>
    )
}

export default Accueil;