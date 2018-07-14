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
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={stuff.itemImage} alt="..."/>
              <div className="caption">
                <h3>{stuff.itemName}</h3>
                <p>{stuff.itemDescription}</p>
                <p><a href="#" className="btn btn-success" role="button">Save</a></p>
              </div>
            </div>
          </div>
        </div>

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
