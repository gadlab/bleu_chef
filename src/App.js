import logo from './images/bleu-chef-logo.svg';
import './App.css';

function HeaderLogo() {
  return (
    <div className="App-header-logo">
      <img 
        src={logo} 
        className="App-logo" 
        alt="logo" 
      />
    </div>
  )
}
function HeaderTitle() {
  const title ="Get someone to cook for you!"
  return (
    <div className="App-header-title">
      {title}
    </div>
  )
}
function HeaderMenu() {
  return (
    <div className="App-header-menu">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        MENU
      </a>
    </div>
  )
}
function MainHeader() {
  return (
      <header className="App-header">
        <>
          <HeaderLogo />
          <HeaderTitle />
          <HeaderMenu />
        </>
      </header>
  )
}
function MainBody() {
  return (
    <section className="App-body">
      <div>
        Page Body
      </div>
    </section>
  )
}
function MainFooter() {
  return (
    <footer className="App-footer">
      <div>
        Page Footer
      </div>
    </footer>
  )
}

function DisplayApp() {
  return (
    <section className="App">
      <>
        <MainHeader />
        <MainBody />
        <MainFooter />
      </>
    </section>
  );
}

export default DisplayApp;
