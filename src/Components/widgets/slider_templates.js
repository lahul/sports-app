import React, { Component } from 'react';
import styles from './slider.css';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

const SliderTemplates = (props) => {
    let template = null;
    console.log(props.data);
    const settings = {
        dots : true,
        infinite : true,
        arrows : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        ...props.settings
    }

    switch(props.type){
        case ('featured') : 
            
            template = props.data.map((item,i) =>{
                return(
                    <div key={i}>
                        <div className={styles.featured}>
                            <div className={styles.featured_image}
                                style={{
                                    background:`url('./images/articles/${item.image}')`
                                }
                                }>
                                <Link to={`/articles/${item.id}`}>
                                    <div className={styles.featured_caption}>
                                        {item.title}
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                )
            })
            break;
        default :
            template = null;
    }
    console.log(template);
    return (
        <Slick {...settings}>
                  {template}
        </Slick>
    )  
}

export default SliderTemplates;