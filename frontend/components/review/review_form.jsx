import React from "react";
import { FaStar, FaVolumeDown} from "react-icons/fa";


class ReviewForm extends React.Component{
  constructor(props){
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
      hoveroverall:null,
      hoverfood:null,
      hoverservice:null,
      hoverambience:null,
      hovervalue:null,
      hovernoise:null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectRecommend = this.handleSelectRecommend.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setHover = this.setHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
  }

  componentDidMount(){
    this.props.requestReservation(this.props.match.params.reservationId)
    // this.props.requestUser(this.props.currentUser.id);
  }

  handleSubmit(e){
    e.preventDefault();
    // debugger

    const review = Object.assign({}, {
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

    this.props.createReview(review)
      .then(() => {this.props.history.push("/profile/")})
  }

  handleSelect(type){
    return (e) => {
      this.setState({ [type]: parseInt(e.currentTarget.value)})
    }
  }

  handleSelectRecommend(e){
    this.setState({recommend: (e.currentTarget.value === "true") ? true : false})
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  setHover(hoverField, value){
    this.setState({ [hoverField]: parseInt(value) })
  }

  resetHover(hoverField){
    this.setState({ [hoverField]: null })
  }

  displayRatingStars(field){
    const levels = ["Poor", "Fair", "Good", "Very Good", "Outstanding"];

    return (
      <div>
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
                  onMouseEnter={() => this.setHover(`hover${field}`, rating)}
                  onMouseLeave={()=>this.resetHover([`hover${field}`])}
                />
              </label>
            )
          })}

          <div>
            {levels[this.state[`hover${field}`] - 1] || levels[this.state[field] - 1]}
          </div>
        </div>
      </div>
    )
  }

  displayNoise(){
    const noiseLevels = ["Do not recall", "Quiet", "Moderate", "Energetic"];

    return (
      <div>
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
                  onMouseEnter={() => this.setHover("hovernoise", noiseRating)}
                  onMouseLeave={() => this.resetHover("hovernoise")}
                />
              </label>
            )
          })}

          <div>
            {noiseLevels[this.state.hovernoise - 1] || noiseLevels[this.state.noise - 1]}
          </div>
        </div>
      </div>
    )
  }


  render(){
    if (!this.props.reservation) return null;
    
    // debugger
    return(
      <div>
        <div>
          <p>{this.props.currentUser.fname}, How was your experience</p>
        </div>
        <div>
          <p>Rate your dinning experience</p>
        </div>
        <div>
          <p>Reservation made on {this.props.reservation.date}</p>
        </div>

      <form onSubmit={this.handleSubmit}>
        
        
        <div>
          <div>Overall</div>
          {this.displayRatingStars("overall")}
          
        </div> 

        <div>
          <div>Food</div>
          {this.displayRatingStars("food")}
        </div>

        <div>
          <div>Service</div>
          {this.displayRatingStars("service")}
        </div>

        <div>
          <div>Ambience</div>
          {this.displayRatingStars("ambience")}
        </div>

        <div>
          <div>Value</div>
          {this.displayRatingStars("value")}
        </div>

        {/* <div>
          <div>Value</div>
          <div>
            <input type="radio" name="value" value="1" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="2" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="3" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="4" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="5" onClick={this.handleSelect("value")} />
          </div>
        </div> */}

        <div>
          <div>Noise</div>
          {this.displayNoise()}
        </div>

        <div>
          <div>Write a review</div>
          <h2>help diners decide where to eat. Remember to keep it short, simple and specific</h2>
            <textarea 
              name="review-body"
              cols="30" 
              rows="10" 
              placeholder="Write your review"
              onChange={this.handleInput("body")}>
            </textarea>
        </div>

        <div>
          <div>
            <p>Would you recommend {this.props.restaurant.name} to a friend?</p>
          </div>
          <div>
            <label>
              <input type="radio" name="recommend" value="true" checked onChange={this.handleSelectRecommend} />
              Yes
            </label>
            <label>
              <input type="radio" name="recommend" value="false" onChange={this.handleSelectRecommend} />
              No
            </label>
          </div>
        </div>
        
        <input type="submit" value="Submit Review"/>
      </form>

      </div>
    )
  }
}

export default ReviewForm;