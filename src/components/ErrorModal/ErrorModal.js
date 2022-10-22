import React from 'react'
import Card from '../Card/Card'
import Button from '../Button/Button';
import './ErrorModal.css';
import { ReactDOM } from 'react';

const BackDrop = (props) => {
  return  <div className='backdrop' onClick={props.onConfirm}/>;

}

const OverLay = (props) => {
  return( 
  <Card className='modal'>
  <header className='header'>
    <h2>{props.title}</h2>
  </header>
  <div className='content'>
    <p>{props.message}</p>
  </div>
  <footer className='actions'>
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>);

}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <OverLay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root')
      )}


    {/* <div className='backdrop' onClick={props.onConfirm}/> */}
      <div/>
      {/* <Card className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card> */}
    </React.Fragment>
  )
}

export default ErrorModal