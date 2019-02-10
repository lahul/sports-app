import React, {Component} from 'react'
import axios from 'axios';
import { URL } from '../../../../config'

import styles from '../../articles.css';

import Header from './header';

import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends  Component{
   
    state ={
        article : [],
        team : [],
        teams : [],
        related:[]
    }

    componentWillMount(){
        console.log(this.props.match.params.id);
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then( response =>{
            let article = response.data[0];
            console.log(article);
            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response =>{
                console.log(response.data[0]);
                this.setState({
                  article,
                  team:response.data
                })
                this.getRelated();
            })
        })
    }
    
    getRelated = () =>{
        console.log(this.state);
        axios.get(`${URL}/teams`)
        .then(response =>{
            let teams=response.data
            axios.get(`${URL}/videos?q=${this.team[0].city}&_limit=3`)
            .then( response =>{
                this.setState({
                    teams,
                    related:response.data
                })
            })
        })
    }


    render(){

        const article = this.state.article;
        const team = this.state.team;

      return (
            <div>
                <Header teamData={team[0]}/>
                <div className={styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title='videoplayer'
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div>
                <VideosRelated 
                data={this.state.related}
                teams={this.state.teams}
                />
            </div>        
      )
  }
  
}

export default VideoArticle;