import React from 'react';
import axios from 'axios';
import ShoeList from './ShoeList.jsx'
import ShoeItem from './ShoeItem.jsx'

const infoStyle = {
  float: 'left',
  width: '40%',
  height: '35%',
  borderWidth: '2px',
  textAlign: 'center'
};

export default class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      insta_stories: [],
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   let newBid = this.state.currentBid + 1;
  //   let item = Object.assign({}, this.state.item);
  //   item.price = newBid;
  //   this.setState({
  //     currentBid: newBid,
  //     item: item
  //   });
  // }

  componentDidMount(){
    this.updateInstagram();
     setTimeout(() => {this.getShoes();}, 1000);
  }

  getShoes(){
    axios.get('/shoes/shoe')
    .then( (response) => {
//      console.log(response.data);
      this.setState({insta_stories:response.data})
    })
    .catch( (error) => {
      console.log(error);
    });
    }

  updateInstagram(){
    console.log('updating Instagram');
    axios.post('/shoes/shoe')
    .then((response) => {
    //console.log(response.data);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {
  //  console.log(this.state.insta_stories);
    return (
      <div style={infoStyle}>
        <h3 className='title'> HOW OTHERS ARE WEARING IT </h3>
        <h5 className='subtitle'>Mention @Nike on Instagram for a chance to have your look featured.</h5>
        <ShoeList
          list1={this.state.insta_stories.slice(0,2)}
          list2={this.state.insta_stories.slice(2,4)}
          list3={this.state.insta_stories.slice(4,5)}
        />
      </div>
    );
  }
}
