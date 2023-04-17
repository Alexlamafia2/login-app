import './MainPage.css'

export default function MainPage(props) {

    function handleLogout(){
        props.onLogout();
    }

  return (
    <div className="main">
      <h1 className="main-h1">Success!</h1>
      <button className="main-button" onClick={handleLogout}>Sign out</button>
    </div>
  );
}
