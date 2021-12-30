import React from "react";
import { FaStar, FaVolumeDown } from "react-icons/fa";


class ReviewEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overall: 0,
      food: 0,
      service: 0,
      ambience: 0,
      value: 0,
      noise: 0,
      body: "",
      recommend: true,
      hoveroverall: null,
      hoverfood: null,
      hoverservice: null,
      hoverambience: null,
      hovervalue: null,
      hovernoise: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectRecommend = this.handleSelectRecommend.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setHover = this.setHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
  }

  componentDidMount() {
    this.props.requestReview(this.props.match.params.reviewId)
      .then((res)=>{
        let review = Object.values(res.payload.review)[0]
        this.setState({
          overall: review.overall,
          food: review.food,
          service: review.service,
          ambience: review.ambience,
          value: review.value,
          noise: review.noise,
          body: review.body,
          recommend: review.recommend,
          hoveroverall: review.hoveroverall,
          hoverfood: review.hoverfood,
          hoverservice: review.hoverservice,
          hoverambience: review.hoverambience,
          hovervalue: review.hovervalue,
          hovernoise: review.hovernoise
        })
      })
  }

  componentWillUnmount() {
    this.props.removeReviewErrors();
  }

  handleSubmit(e) {
    e.preventDefault();

    const review = Object.assign({}, {
      id: this.props.review.id,
      user_id: this.props.currentUser.id,
      restaurant_id: this.props.restaurant.id,
      reservation_id: this.props.reservation.id,
      overall: this.state.overall,
      food: this.state.food,
      service: this.state.service,
      ambience: this.state.ambience,
      value: this.state.value,
      noise: this.state.noise,
      body: this.state.body,
      recommend: this.state.recommend
    })

    // debugger


    this.props.updateReview(review)
      .then(() => { this.props.history.push("/profile/") })
  }

  handleDeleteReview(){
    this.props.deleteReview(this.props.review.id)
      .then(() => { this.props.history.push("/profile/") })
  }

  handleSelect(type) {
    return (e) => {
      this.setState({ [type]: parseInt(e.currentTarget.value) })
    }
  }

  handleSelectRecommend(e) {
    this.setState({ recommend: (e.currentTarget.value === "true") ? true : false })
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  setHover(hoverField, value) {
    this.setState({ [hoverField]: parseInt(value) })
  }

  resetHover(hoverField) {
    this.setState({ [hoverField]: null })
  }

  displayRatingStars(field) {
    const levels = ["Poor", "Fair", "Good", "Very Good", "Outstanding"];

    return (
      <div className="rating-star-container">
        <div className="rating-stars">
          {[...Array(5)].map((star, i) => {
            const rating = i + 1

            return (
              <label key={i} >
                <input
                  type="radio"
                  name={field}
                  value={rating}
                  onClick={this.handleSelect(field)}
                />
                <FaStar
                  className="star"
                  color={((i + 1) <= (this.state[`hover${field}`] || this.state[field])) ?
                    "#b8222d" : "#e4e5e9"}
                  size={40}
                  onMouseEnter={() => this.setHover(`hover${field}`, rating)}
                  onMouseLeave={() => this.resetHover([`hover${field}`])}
                />
              </label>
            )
          })}

          <div className="rating-prompts">
            {levels[this.state[`hover${field}`] - 1] || levels[this.state[field] - 1]}
          </div>
        </div>
      </div>
    )
  }

  displayNoise() {
    const noiseLevels = ["Quiet", "Moderate", "Energetic", "Too Loud"]

    return (
      <div className="rating-noise-container">
        <div className="rating-noise">
          {[...Array(4)].map((music, i) => {
            const noiseRating = i + 1

            return (
              <label key={i} >
                <input
                  type="radio"
                  name="noise"
                  value={noiseRating}
                  onClick={this.handleSelect("noise")}
                />
                <FaVolumeDown
                  className="music"
                  color={((i + 1) <= (this.state.hovernoise || this.state.noise)) ?
                    "#b8222d" : "#e4e5e9"}
                  size={40}
                  onMouseEnter={() => this.setHover("hovernoise", noiseRating)}
                  onMouseLeave={() => this.resetHover("hovernoise")}
                />
              </label>
            )
          })}

          <div className="rating-prompts">
            {noiseLevels[this.state.hovernoise - 1] || noiseLevels[this.state.noise - 1]}
          </div>
        </div>
      </div>
    )
  }


  render() {

    // debugger

    if (!this.props.review) return null;

    const errorMessage = (this.props.errors.length > 0) ? this.props.errors[0].slice(5) : null;

    const {review, reservation, restaurant, currentUser} = this.props


    let dateInfo = reservation.date.split("-")
    let displayDate = dateInfo[1] + "/" + dateInfo[2] + "/" + dateInfo[0];

    // dateInfo = new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]).toString().slice(0, 15);
    // let displayDate = dateInfo.slice(0,3) + "," + dateInfo.slice(3,10) + "," + dateInfo.slice(10,15);

    const recommendation = (review.recommend) ? (
      <div className="review-recommend-button-container">
        <label>
          <input type="radio" name="recommend" value="true" checked onChange={this.handleSelectRecommend} />
          Yes
        </label>
        <label>
          <input type="radio" name="recommend" value="false" onChange={this.handleSelectRecommend} />
          No
        </label>
      </div>
    ) : (
      <div className="review-recommend-button-container">
        <label>
          <input type="radio" name="recommend" value="true" onChange={this.handleSelectRecommend} />
          Yes
        </label>
        <label>
          <input type="radio" name="recommend" value="false" checked onChange={this.handleSelectRecommend} />
          No
        </label>
      </div>
    )

    return (


      <div className="review-form-main-container">
        <div className="review-form-main">

          <div className="review-form-info">
            <div className="review-form-info-prompt">
              <h1>{currentUser.fname}, edit your review for</h1>
              <h1>{restaurant.name}</h1>
            </div>
            <div>
              <p>Rate your dinning experience (required)</p>
            </div>
            <div>
              <p>Reservation made on {displayDate}</p>
            </div>
          </div>


          <div className="review-form-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
              <div className="rating-container">
                <div className="rating-bar-container">
                  <div>
                    <div className="rating-title">Overall</div>
                    {this.displayRatingStars("overall")}
                  </div>
                </div>

                <div className="rating-bar-container">
                  <div>
                    <div className="rating-title">Food</div>
                    {this.displayRatingStars("food")}
                  </div>
                </div>

                <div className="rating-bar-container">
                  <div>
                    <div className="rating-title">Service</div>
                    {this.displayRatingStars("service")}
                  </div>
                </div>

                <div className="rating-bar-container">
                  <div>
                    <div className="rating-title">Ambience</div>
                    {this.displayRatingStars("ambience")}
                  </div>
                </div>

                <div className="rating-bar-container">
                  <div>
                    <div className="rating-title">Value</div>
                    {this.displayRatingStars("value")}
                  </div>
                </div>

                <div className="rating-bar-container">
                  <div>
                    <div className="rating-title">Noise</div>
                    {this.displayNoise()}
                  </div>
                </div>
              </div>

              <div className="review-text-container">
                <div className="review-form-info-prompt">
                  <h1>Write a review</h1>
                </div>
                <p>Help diners decide where to eat. Remember to keep it short, simple and specific.</p>
                <div className="review-text-input">
                  <textarea
                    name="review-body"
                    cols="30"
                    rows="10"
                    placeholder="Write your review"
                    defaultValue={review.body}
                    onChange={this.handleInput("body")}>
                  </textarea>
                </div>
              </div>

              <div className="review-recommend-container">
                <div>
                  <p>Would you recommend {restaurant.name} to a friend?</p>
                </div>
                {recommendation}
              </div>

              <div className="review-error">{errorMessage}</div>

              <input id="review-form-submit-button" type="submit" value="Update Review" />
              <button id="review-form-delete-button" onClick={this.handleDeleteReview}>Delete Review</button>
            </form>
          </div>

        </div>
      </div>
    )
  }
}

export default ReviewEditForm;