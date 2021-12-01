class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isloggedIn
    }));  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let btn;

    if (isLoggedIn) {
      btn = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      btn = <LoginButton onClick={this.handleLoginClick} />;
    }
    
    
    

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
          <h1>
             The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </h1>
        
        {btn} 
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
