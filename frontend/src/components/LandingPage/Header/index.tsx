import { ReactComponent as Logo } from "/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/gym-logo.svg"
import { ReactComponent as FacebookLogo } from "/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/fb-logo.svg"
import { ReactComponent as InstagramLogo } from "/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/ig-logo.svg"
import { ReactComponent as TikTokLogo } from "/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/tt-logo.svg"



function Header() {
    return (
        <header className="page-header">
            <a className="header-logo-link" href="/"><Logo></Logo></a>
            <div className="header-customers-links">
                <a className="link-academia" href="/academia">A academia</a>
                <a className="link-modalidades" href="/modalidades">Modalidades</a>
                <a className="link-horarios" href="horarios">Horários</a>
                <a className="link-blog" href="blog">Blog</a>
                <a className="link-planos" href="/planos">Panos</a>
            </div>
            <div className="node-header-social-media-links">
                <div className="header-login-links">
                    <a className="link-login" href="/login-page">login</a>
                    <a className="link-sign" href="/sign-page">cadastrar</a>
                </div>
                <div className="header-social-media-links">
                    <a className="ink-facebook" href="https://facebook.com"><FacebookLogo /></a>
                    <a className="ink-instagram" href="https://instagram.com"><InstagramLogo /></a>
                    <a className="ink-tiktok" href="https://tiktok.com"><TikTokLogo /></a>
                </div>
            </div>
        </header>

    )
}
export default Header