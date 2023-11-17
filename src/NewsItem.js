import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl}= this.props;
    return (
      <div> 
           <div className="card" style={{width: "18rem"}}>
              <img src={imgUrl?imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/1c/81/4e/5a/smail.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
