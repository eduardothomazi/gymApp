import { ReactComponent as Wpp } from '/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/wpp-logo.svg'
import { ReactComponent as Phone } from '/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/phone-logo.svg'
import { ReactComponent as Pointer } from '/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/map-position.svg'
import { ReactComponent as Instagram } from '/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/ig-logo.svg'
import { ReactComponent as Facebook } from '/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/fb-logo.svg'
import { ReactComponent as Tiktok } from '/home/eduardo2/Documents/projetos/GymApp/frontend/src/assets/images/tt-logo.svg'



const Footer = () => {
    return (
        <div className="page-footer">
            <div className='footer-working-hours-node'>
                <h1 className='footer-social-media-title'>Atendimento</h1>
                <div>
                    <p>De seg a sex: das 06:00 as 23:00</p>
                </div>
                <div>
                    <p>Sábados: das 06:00 as 15:00</p>
                </div>
                <div>
                    <p>Domingos e feriados: 10:00 as 14:00</p>
                </div>
            </div>
            <div className="footer-addresses-node">
                <h1 className='footer-address-title'>Onde Estamos</h1>
                <div className='footer-adress-container'>
                    <Pointer />
                    <p className='footer-gym-address'>Rua Miguel Caluf, 123 - Cajuru - Curitiba-PR</p>
                </div>
                <div className='foooter-whats-container'>
                    <Wpp />
                    <p className="footer-gym-whats">(41) 99999-9999</p>
                </div>
                <div className='footer-phone-container'>
                    <Phone />
                    <p className="footer-gym-phone">(41) 3333-3333</p>
                </div>
            </div>
            <div className='footer-social-media-node'>
                <h1 className='footer-social-media-title'>Siga-nos!</h1>
                <a href="https://instagram.com"><Instagram /></a>
                <a className='facebook-logo-link' href="https://Facebook.com"><Facebook /></a>
                <a href="https://Tiktok.com"><Tiktok /></a>
            </div>
            
        </div>
    )
}

export default Footer