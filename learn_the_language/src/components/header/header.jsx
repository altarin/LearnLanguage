import './header.scss';

function Header(props) {
    return (
        <div className="header">
            <div className="header-name">{props.name}</div>
            <div className="header-login">Авторизация{props.login}</div>
        </div >
    );
}

export default Header;
