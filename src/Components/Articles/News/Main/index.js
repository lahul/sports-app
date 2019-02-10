import React, { Component } from 'react'

import NewsSlider from '../../../widgets/NewsSlider/slider'
import NewsList from '../../../widgets/NewsList/news.list'

export default class NewsMain extends Component {
  render() {
    return (
      <div>
        <NewsSlider
            type='featured'
            settings={{dots:false}}
            start={0}
            amount={3}
        />

        <NewsList 
            type="cardMain"
            loadMore ={true}
            start={3}
            amount={10}
        />
      </div>
    )
  }
}
