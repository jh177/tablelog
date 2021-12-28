import React, { useRef } from "react";
import { withRouter } from "react-router";


class LandingExploreCards extends React.Component{
  constructor(props){
    super(props)
    this.cardListRef = React.createRef();
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);
  }

  scrollLeft() {
    this.cardListRef.current.scrollBy({ top: 0, left: -600, behavior: "smooth" })
  }

  scrollRight() {
    this.cardListRef.current.scrollBy({ top: 0, left: 500, behavior: "smooth" })
  }

  handleClickLink(cuisine){
    this.props.history.push(`/search/${cuisine.toLowerCase()}`)
  }

  render(){

    const cuisines = ["French", "Italian", "Chinese", "Mexican", "Thai", "Mediterranean", "Korean", "Japanese", "Indian"]

    return(
      <div className="landing-cards-wrapper">

        <button className="scroll-btn" onClick={this.scrollLeft}>❮</button>

        <div className="landing-cards-list" ref={this.cardListRef}>
          <div className="landing-cards-item" onClick={()=>this.handleClickLink("chinese")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/seaharbour-3.jpeg"/>
            </div>
            <div className="landing-cards-item-title">
              Best Chinese Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() =>this.handleClickLink("french")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/aoc-7.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best French Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("indian")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/electric-7.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Indian Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("italian")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/della-7.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Italian Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("japanese")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/hamasaku-4.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Japanese Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("korean")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/ombu-5.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Korean Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("mediterranean")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/tesse-7.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Mediterranean Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("mexican")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/sol-5.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Mexican Restaurants in LA
            </div>
          </div>

          <div className="landing-cards-item" onClick={() => this.handleClickLink("thai")}>
            <div className="landing-cards-item-img">
              <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/otus-3.jpeg" />
            </div>
            <div className="landing-cards-item-title">
              Best Thai Restaurants in LA
            </div>
          </div>

        </div>

        <button className="scroll-btn" onClick={this.scrollRight}>❯</button>

      </div>
    )
  }
}

export default withRouter(LandingExploreCards);