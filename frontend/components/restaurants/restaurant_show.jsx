import React from "react";
import { Link } from "react-router-dom";
import ReseravationForm from "./reservation_form";
import RestaurantMap from "./restaurant_map";


class RestaurantShow extends React.Component{
  constructor(props){
    super(props);
    this.overviewRef = React.createRef();
    this.photosRef = React.createRef();
    this.reviewsRef = React.createRef();
    this.handleScrollBack = this.handleScrollBack.bind(this);
  }

  componentDidMount(){
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  handleScrollBack = (field) => {
    switch (field) {
      case "overview":
        this.overviewRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "photos":
        this.photosRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "reviews":
        this.reviewsRef.current.scrollIntoView({ behavior: "smooth" })
        break;
    }
  }

  render(){
    if (!this.props.restaurant) {
      return null;
    }

    const { restaurant } = this.props

    const photos = restaurant.photoUrls.map((photoUrl, i) => (
      <li key={i}>
        <img src={photoUrl} />
      </li>
    ))

    return (
      <div className="restaurant-show">
        <div className="restaurant-show-header-img">
          <img src={restaurant.photoUrls[0]} alt="restaurant-image" id="restaurant-show-header-img"/>
        </div>

        <div className="restaurant-show-main">
          
          <div className="restaurant-show-left">
        

            <div className="restaurant-show-nav-bar">
              <ul>
                <li onClick={()=>this.handleScrollBack("overview")}><span>Overview</span></li>
                <li onClick={()=>this.handleScrollBack("photos")}><span>Photos</span></li>
                <li onClick={()=>this.handleScrollBack("reviews")}><span>Reviews</span></li>
              </ul>
            </div>

            <div className="restaurant-show-details">
              <div className="restaurant-show-overview" ref={this.overviewRef}>
                <h1>{restaurant.name}</h1>
                <ul className="restaurant-show-details-snapshot">
                  <li>ratings</li>
                  <li># of reviews</li>
                  <li>{restaurant.category}</li>
                </ul>
                <div className="restaurant-show-description">{restaurant.description}</div>
              </div>

              <div className="restaurant-show-photo-gallary" ref={this.photosRef}>
                <h2>{restaurant.photoUrls.length} Photos</h2>
                <div>
                  <ul className="restaurant-show-photo-gallary-grid">
                    {photos}
                  </ul>
                </div>
              </div>

              <div className="restaurant-show-reviews" ref={this.reviewsRef}>
                <div className="restaurant-show-reviews-ratings">
                  ratings placeholder
                </div>
                <div className="restaurant-show-reviews-list">
                  reviews placeholder
                </div>
              </div>
            
            </div>

          </div>

          <div className="restaurant-show-right">
            <div className="restaurant-show-reservation-form">
              <ReseravationForm/>
            </div>
            <div className="restaurant-show-map">
              <RestaurantMap restaurant={restaurant}/>
            </div>
            <div className="restaurant-show-more-details">
              <p>Neighborhood</p>
              <p>Hours of operation</p>
              <p>Cuisines</p>
              <p>Phone number</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RestaurantShow;