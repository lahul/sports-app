import React from 'react'

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/news.list'

const Home = () =>{
        return(
        <React.Fragment>
            <NewsSlider 
            type="featured"
            start={0}
            amount={3}
            settings={{
                dots:false
            }}
            />

            <NewsList 
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
        </React.Fragment>
        )
}

export default Home;