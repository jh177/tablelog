import React from "react";
import { FaStar} from "react-icons/fa";


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
      hovervalue:null
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


  render(){
    if (!this.props.reservation) return null;
    
    // debugger
    return(
      <div>
        <div>How was your experience</div>
        <div>Rate your dinning experience (required)</div>
        <div>Reservation made on</div>

      <form onSubmit={this.handleSubmit}>
        
        
        <div>
          <div>Overall</div>
          {this.displayRatingStars("overall")}
          {/* <div className="rating-overall">
            {[...Array(5)].map((star, i)=> {
              const ratingOverall = i+1

              return (
                <label key={i} >
                  <input
                    type="radio"
                    name="overall" 
                    value={ratingOverall}
                    onClick={this.handleSelect("overall")}
                    />
                  <FaStar 
                    className="star"
                    color={((i + 1) <= (this.state.hover || this.state.overall)) ? 
                      "#b8222d" : "#e4e5e9"}
                    onMouseEnter={()=>this.setHover(ratingOverall)}
                    onMouseLeave={this.resetHover}
                  />
                </label>
              )
            })}

            <div>
              {levels[this.state.hover-1]|| levels[this.state.overall-1]}
            </div>
          </div>
        </div>

        <div>
          <div>Food</div>
          <div className="rating-food">
            {[...Array(5)].map((star, i) => {
              const ratingfood = i + 1

              return (
                <label key={i} >
                  <input
                    type="radio"
                    name="food"
                    value={ratingfood}
                    onClick={this.handleSelect("food")}
                  />
                  <FaStar
                    className="star"
                    color={((i + 1) <= (this.state.hover || this.state.food)) ?
                      "#b8222d" : "#e4e5e9"}
                    onMouseEnter={() => this.setHover(ratingfood)}
                    onMouseLeave={this.resetHover}
                  />
                </label>
              )
            })}

            <div>
              {levels[this.state.hover - 1] || levels[this.state.food - 1]}
            </div>
          </div>
        </div>

        <div>
          <div>Service</div>
          <div className="rating-service">
            {[...Array(5)].map((star, i) => {
              const ratingservice = i + 1

              return (
                <label key={i} >
                  <input
                    type="radio"
                    name="service"
                    value={ratingservice}
                    onClick={this.handleSelect("service")}
                  />
                  <FaStar
                    className="star"
                    color={((i + 1) <= (this.state.hover || this.state.service)) ?
                      "#b8222d" : "#e4e5e9"}
                    onMouseEnter={() => this.setHover(ratingservice)}
                    onMouseLeave={this.resetHover}
                  />
                </label>
              )
            })}

            <div>
              {levels[this.state.hover - 1] || levels[this.state.service - 1]}
            </div>
          </div>
        </div>

        <div>
          <div>Overall</div>
          <div className="rating-overall">
            {[...Array(5)].map((star, i) => {
              const ratingOverall = i + 1

              return (
                <label key={i} >
                  <input
                    type="radio"
                    name="overall"
                    value={ratingOverall}
                    onClick={this.handleSelect("overall")}
                  />
                  <FaStar
                    className="star"
                    color={((i + 1) <= (this.state.hover || this.state.overall)) ?
                      "#b8222d" : "#e4e5e9"}
                    onMouseEnter={() => this.setHover(ratingOverall)}
                    onMouseLeave={this.resetHover}
                  />
                </label>
              )
            })}

            <div>
              {levels[this.state.hover - 1] || levels[this.state.overall - 1]}
            </div>
          </div> */}
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
          <div>Noise Level</div>
          <div>
            <input type="radio" name="noise" value="1" onClick={this.handleSelect("noise")} />
            <input type="radio" name="noise" value="2" onClick={this.handleSelect("noise")} />
            <input type="radio" name="noise" value="3" onClick={this.handleSelect("noise")} />
            <input type="radio" name="noise" value="4" onClick={this.handleSelect("noise")} />
          </div>
        </div>

        <div>
          <div>Write a review</div>
          <h2>help diners decide where to eat. Remember to keep it short, simple and specific</h2>
            <textarea 
              name="review-body"
              cols="30" 
              rows="10" 
              placeholder="Your review must be at least 50 characters"
              onChange={this.handleInput("body")}>
            </textarea>
        </div>

        <div>
          <div>Would you recommend to a friend?</div>
          <div>
            <label>Yes</label>
              <input type="radio" name="recommend" value="true" checked onChange={this.handleSelectRecommend} />
            <label>No</label>
            <input type="radio" name="recommend" value="false" onChange={this.handleSelectRecommend} />
          </div>
        </div>
        
        <input type="submit" value="Submit Review"/>
      </form>

      </div>
    )
  }
}

export default ReviewForm;