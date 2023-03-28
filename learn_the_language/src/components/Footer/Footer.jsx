import './Footer.scss';


function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-name">{props.name}</div>
            <div className="footer-copyright">{props.copyright}</div>
            <div className='footer-menu'>
                <div className='menu-home'>{props.home}</div>
                <div className='menu-about'>{props.about}</div>
                <div className='menu-faq'>{props.faq}</div>
                <div className='menu-contacts'>{props.contacts}</div>
            </div>
        </div >
    );
}

export default Footer;
