import React from "react";
import { Link } from "react-router-dom";
import ReservationSearchFormContainer from "./reservation_search_form_container";
import RestaurantMap from "./restaurant_map";
import { FaStar, FaUtensils, FaRegStar, FaRegCommentAlt, FaVolumeDown} from "react-icons/fa";

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

  displayRatings(rating) {

    const starWidth = rating * 16;
    return (
      <div className="restaurant-show-stars">
        <div className="stars-outer">
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />

          <div className="stars-inner" style={{ width: `${starWidth}px` }}>
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
          </div>
        </div >
      </div>
    )
  }

  noiseLevel(noise){
    const noiseLevels = ["Do not recall", "Quiet", "Moderate", "Energetic"]
    return noiseLevels[Math.round(noise)-1]
  }

  render(){
    if (!this.props.restaurant) {
      return null;
    }

    const { restaurant, reviews} = this.props

    const photos = restaurant.photoUrls.map((photoUrl, i) => (
      <li key={i}>
        <img src={photoUrl} />
      </li>
    ))

    // debugger

    const reviewsDisplay = (reviews) ? (
        reviews.map((review, i)=>(
          <div key={i} className="restaurant-show-review-details">
            <div className="restaurant-show-review-left">
              <p>TableLog User</p>
            </div>
            <div className="restaurant-show-review-right">
              {this.displayRatings(review.overall)}
              <div className="restaurant-show-review-ratings">
                <div>
                  <p>Overall <span>{review.overall}</span></p>
                </div>
                <div>
                  <p>Food <span>{review.food}</span></p>
                </div>
                <div>
                  <p>Service <span>{review.service}</span></p>
                </div>
                <div>
                  <p>Ambience <span>{review.ambience}</span></p>
                </div>
              </div>
              <div className="restaurant-show-review-body">
                <p>{review.body}</p>
              </div>
            </div>
          </div>
        ))
      ) : "no reviews yet"

    const ratingsDisplay = (
      <div>
        <div className="restaurant-show-reviews-rating-sum">
          <h3>Overall ratings and reviews</h3>
          <p>Reviews can only be made by diners who have eaten at this restaurant</p>
          <div className="restaurant-show-reviews-rating-overall">
            {this.displayRatings(restaurant.average_rating)}
            <span>{restaurant.average_rating}</span>
          </div>
          <div className="res-show-review-rating-sum-list">
            <div>
              <p>{restaurant.average_food}</p>
              <span>Food</span>
            </div>
            <div>
              <p>{restaurant.average_service}</p>
              <span>Service</span>
            </div>
            <div>
              <p>{restaurant.average_ambience}</p>
              <span>Ambience</span>
            </div>
            <div>
              <p>{restaurant.average_value}</p>
              <span>Value</span>
            </div>
          </div>
          <div className="res-show-review-rating-sum-noise">
            <FaVolumeDown className="fa-volume-down"/>
            <span>Noise</span>
            <p>{this.noiseLevel(restaurant.average_noise)}</p>
          </div>
        </div>
        <div className="restaurant-show-reviews-list-right">
        </div>
      </div>
    )

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
                <div className="restaurant-show-details-snapshot">
                  <div className="restaurant-show-ratings">
                    {this.displayRatings(restaurant.average_rating)}
                    <span>{restaurant.average_rating}</span>
                  </div>
                  <div className="restaurant-show-num-reviews">
                    <FaRegCommentAlt className="fa-reg-comment-alt"/>
                    <p>{restaurant.num_reviews} reviews</p>
                  </div>
                  <div className="restaurant-show-category">
                    <FaUtensils className="fa-utensils"/>
                    <span>{restaurant.category}</span>
                  </div>
                </div>
                <div className="restaurant-show-description">
                  {restaurant.description}
                </div>
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
                <h2>What {restaurant.num_reviews} people are saying</h2>
                <div className="restaurant-show-reviews-ratings">
                  {ratingsDisplay}
                </div>
                <div className="restaurant-show-reviews-list">
                  {reviewsDisplay}
                </div>
              </div>
            
            </div>

          </div>

          <div className="restaurant-show-right">
            <div className="restaurant-show-reservation-form">
              <ReservationSearchFormContainer restaurant={restaurant}/>
            </div>
            
            <div className="restaurant-show-map">
                <RestaurantMap restaurant={restaurant}/>
              <div className="restaurant-show-map-address">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address}`} target="_blank">
                  <span id="restaurant-show-map-address">{restaurant.address}</span>
                </a>
              </div>
            </div>
            <div className="restaurant-show-more-details">
              <p>Neighborhood</p>
              <p>Hours of operation</p>
              <p>Phone number</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RestaurantShow;