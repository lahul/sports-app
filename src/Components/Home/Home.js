import React from 'react'

import NewsSlider from '../widgets/slider';

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
        </React.Fragment>
        )
}

export default Home;