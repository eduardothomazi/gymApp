 import { ReactComponent as Logo } from "assets/images/gym-logo.svg"
 
 function LandingPage(){
    return(
            <header className="landing-page">
                <div className="header-logo">
                    <Logo/>
                </div>
                <div className="header-customers-links">
                    <a href="http://google.com">A academia</a>
                    <a href="http://google.com">Modalidades</a>
                    <a href="http://google.com">Horários</a>
                    <a href="http://google.com">Blog</a>
                    <a href="http://google.com">Panos</a>
                </div>
                <div className="header-login-links">
                    <a href="http://google.com">login</a>
                    <a href="http://google.com">cadastrar</a>
                </div>
            </header>
        
    )
 }
 export default LandingPage