import logo from '../images/logo.png';


function Header () {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип проекта" />
      <h1 className="header__title">Tree</h1>
    </header>
  )
}
  

export default Header;