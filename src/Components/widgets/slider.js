import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates.js'
 
class NewsSlider extends Component {

    state = {
        news : []
    }

    componentWillMount(){
        axios.get(`http://localhost:4000/articles?_${this.props.start}=0&_${this.props.amount}=3`)
        .then (response =>{
            
            this.setState({
                news :response.data
            })
            
        })
    }

  render() {
  
    return (  
      <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    )
  }
}
export default NewsSlider;