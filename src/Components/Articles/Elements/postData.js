import React from 'react';
import styles from '../articles.css';


export default function postData(props) {
  return (
    <div className={styles.articlePostData}>
      <div>
          Date :
          <span>{props.data.date}</span>
      </div>
      <div>
          Author :

      </div>
    </div>
  )
}
