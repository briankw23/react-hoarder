import React from 'react';
import stuffRequest from '../../firebaseRequests/stuff';
import './AllStuff.css';

class AllStuff extends React.Component {
  state = {
    allStuff: [],
  }

  componentDidMount() {
    stuffRequest
      .getRequest()
      .then((allStuff) => {
        this.setState({ allStuff });
      })
      .catch((err) => {
        console.error('error with stuff get request', err);
      });
  }
  render() {
    const stuffComponents = this.state.allStuff.map((stuff) => {
      return (
        <h2>{stuff.itemName}</h2>
      );
    });
    return (
      <div className='AllStuff'>
        <ul className="stuff">
          {stuffComponents}
        </ul>
      </div>
    )
  };
};

export default AllStuff;
