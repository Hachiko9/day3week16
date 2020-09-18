import React from 'react';

// import ReactPlayer from the npm package
import ReactPlayer from 'react-player';

import './App.css';

function GreetingMessage() {
  const message = 'Hello everyone!';
  return (
    <div>
      <u>{message}</u>
    </div>
  );
}

function WelcomeBlock() {
  //calling an element inside another element, when welcomeBlock is rendered, it will render GreetingMessage too
  return (
    <div>
      <GreetingMessage />
      <em>Welcome to our cool page. It is pleasure to have you here!</em>
    </div>
  );
}

function User(props) {
  return <div>User is: {props.firstName}</div>;
}

function UsersList(props) {
  return <div> {props.children} </div>;
}

class Color extends React.Component {
  //example of using className to change the color and using inline styling like in html
  render() {
    return <div className={this.props.favColor} style={{background:this.props.favColor}}>{this.props.favColor}</div>;
  }
}

function Classroom() {
  return (
    <>
      <Student name='ivan' age='23' />
      <Student name='milo' age='29' />
      <Student name='erick' age='34' />
    </>
  );
}

function Student(props) {
  return (
    <p>
      {props.name} - {props.age} years old.
    </p>
  );
}

function App() {
  return (
    <div className='App'>
      <GreetingMessage />
      <hr />
      <WelcomeBlock />
      <hr />
      <UsersList>
        <User firstName='Cristina' />
        <User firstName='Nuno' />
        <User firstName='Juan' />
        <User firstName='Andre' />
      </UsersList>
      <hr />
      <Color favColor='white' />
      <hr />

      {/*showing a video using Iframe vs using ReactPlayer.*/}
      {/* <iframe src="https://player.vimeo.com/video/22439234" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
  
      <ReactPlayer url='https://vimeo.com/channels/top/22439234' playing={false} />
      <hr />
      <ReactPlayer url='https://www.youtube.com/watch?v=kJQP7kiw5Fk' playing={false} controls volume={0.5} />
      <hr />
      <Classroom />
    </div>
  );
}

export default App;
