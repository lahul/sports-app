import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'
import Layout from './hoc/layout/layout'

import NewsArticle from './Components/Articles/News/Post/index';
import VideoArticle from './Components/Articles/Videos/video';
import NewsMain from './Components/Articles/News/Main/index';
import VideoMain from './Components/Articles/Videos/Main/index';

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/news' exact component={NewsMain}/>
            <Route path='/articles/:id' exact component={NewsArticle}/>       
            <Route path='/videos/:id' exact component={VideoArticle}/>
            <Route path='/Videos' exact component={VideoMain}/>
        </Switch>
      </Layout> 
    )
  }
}
