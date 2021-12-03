import React from "react";
import ProfileReservationItem from "./profile_reservation_item";

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.upcomingRef = React.createRef();
    this.pastRef = React.createRef();
    this.handleScrollBack = this.handleScrollBack.bind(this);
  }

  componentDidMount(){
    this.props.requestUser(this.props.currentUser.id)
  }

  handleScrollBack = (field) => {
    switch (field) {
      case "upcoming":
        this.upcomingRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "past":
        this.pastRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }



  render(){

    if (this.props.restaurants.length===0 || this.props.reservations.length===0) return null;
  
    let ids = this.props.restaurants.map((restaurant)=> restaurant.id)

    const pastReservations = [];
    const futureReservations = [];

    this.props.reservations.forEach((reservation) => {
      let reserveDate = new Date(`${reservation.date} ${reservation.time}`);
      let today = new Date();
      if (reserveDate < today) {
        pastReservations.push(reservation)
      } else {
        futureReservations.push(reservation)
      }
    })

    const pastReservationItems = pastReservations.map((reservation) => {
      const review = (reservation.review) ? reservation.review : null;

      return <ProfileReservationItem
        key={reservation.id}
        reservation={reservation}
        restaurant={this.props.restaurants[ids.indexOf(reservation.restaurant_id)]}
        review={review}
        deleteReview={this.props.deleteReview}
        past={true}
      />
    })

    const futureReservationItems = futureReservations.map((reservation) => {
      return <ProfileReservationItem
        key={reservation.id}
        reservation={reservation}
        restaurant={this.props.restaurants[ids.indexOf(reservation.restaurant_id)]}
      />
    })

    return(
      <div className="profile-main-container">
        <div className="profile-header">
          <h1>{this.props.currentUser.fname} {this.props.currentUser.lname}</h1>
        </div>

        <div className="profile-main">
          <div className="profile-nav">
            <div>
              <div onClick={() => this.handleScrollBack("upcoming")}><span>Upcoming Reservations</span></div>
              <div onClick={() => this.handleScrollBack("past")}><span>Past Reservations</span></div>
            </div>
          </div>

          <div className="profile-reservations">

            <div className="profile-upcoming-reservations" ref={this.upcomingRef}>
              <h2>Upcoming Reservations</h2>
              <div>{futureReservationItems}</div>
            </div>

            <div className="profile-past-reservations" ref={this.pastRef}>
              <h2>Past Reservations</h2>
              <div>{pastReservationItems}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;