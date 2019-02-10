import React from 'react';
import styles from '../VideosList.css'
import VideosTemplates from '../VideosTemplates';

const VideosRelated = (props) =>{
    return(
    <div className={styles.relatedWrapper}>
        <VideosTemplates
            data={props.data}
            teams={props.data}
        />
    </div>
    )
}
export default VideosRelated;