


export function Header(props) {
  const { toggleSideNav } = props;
  return (
    <header>
      <button onClick={toggleSideNav} className="open-nav-button">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button> 
      <h1 className="text-gradient">Pokédex</h1>
    </header>
  )
}