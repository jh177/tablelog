import React from "react";



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
      recommend: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectRecommend = this.handleSelectRecommend.bind(this);
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount(){
    this.props.requestReservation(this.props.match.params.reservationId)
    // this.props.requestUser(this.props.currentUser.id);
  }

  handleSubmit(e){
    e.preventDefault();
    debugger

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
          <div>
            <input type="radio" name="overall" value="1" onClick={this.handleSelect("overall")}/>
            <input type="radio" name="overall" value="2" onClick={this.handleSelect("overall")}/>
            <input type="radio" name="overall" value="3" onClick={this.handleSelect("overall")}/>
            <input type="radio" name="overall" value="4" onClick={this.handleSelect("overall")}/>
            <input type="radio" name="overall" value="5" onClick={this.handleSelect("overall")}/>
          </div>
        </div>

        <div>
          <div>Food</div>
          <div>
            <input type="radio" name="food" value="1" onClick={this.handleSelect("food")} />
            <input type="radio" name="food" value="2" onClick={this.handleSelect("food")} />
            <input type="radio" name="food" value="3" onClick={this.handleSelect("food")} />
            <input type="radio" name="food" value="4" onClick={this.handleSelect("food")} />
            <input type="radio" name="food" value="5" onClick={this.handleSelect("food")} />
          </div>
        </div>

        <div>
          <div>Service</div>
          <div>
            <input type="radio" name="service" value="1" onClick={this.handleSelect("service")} />
            <input type="radio" name="service" value="2" onClick={this.handleSelect("service")} />
            <input type="radio" name="service" value="3" onClick={this.handleSelect("service")} />
            <input type="radio" name="service" value="4" onClick={this.handleSelect("service")} />
            <input type="radio" name="service" value="5" onClick={this.handleSelect("service")} />
          </div>
        </div>

        <div>
          <div>Ambience</div>
          <div>
            <input type="radio" name="ambience" value="1" onClick={this.handleSelect("ambience")} />
            <input type="radio" name="ambience" value="2" onClick={this.handleSelect("ambience")} />
            <input type="radio" name="ambience" value="3" onClick={this.handleSelect("ambience")} />
            <input type="radio" name="ambience" value="4" onClick={this.handleSelect("ambience")} />
            <input type="radio" name="ambience" value="5" onClick={this.handleSelect("ambience")} />
          </div>
        </div>

        <div>
          <div>Value</div>
          <div>
            <input type="radio" name="value" value="1" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="2" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="3" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="4" onClick={this.handleSelect("value")} />
            <input type="radio" name="value" value="5" onClick={this.handleSelect("value")} />
          </div>
        </div>

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