import React from "react";
import ProfileReservationItem from "./profile_reservation_item";

class Profile extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestUser(this.props.currentUser.id)
    // Promise.all(
    //   this.props.requestReservations(),
    //   this.props.requestRestaurants()
    // )
  }

  render(){

    if (this.props.restaurants.length===0 || this.props.reservations.length===0) return null;
    
    // console.log(this.props.reservations)
    // console.log(this.props.restaurants)
    // debugger
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

    // const pastReservations = this.props.reservations.filter((reservation) => {
    //   let reserveDate = new Date(`${reservation.date} ${reservation.time}`);
    //   let today = new Date();
    //   return reserveDate < today;
    // })
    
    // console.log(pastReservations)
    // console.log(futureReservations)
    // debugger

    // const reservationItems = this.props.reservations.map((reservation) => {
    //   const review = (reservation.review) ? reservation.review : null;

    //   return <ProfileReservationItem 
    //     key={reservation.id} 
    //     reservation={reservation}
    //     restaurant={this.props.restaurants[ids.indexOf(reservation.restaurant_id)]}
    //     review={review}
    //     deleteReview={this.props.deleteReview}
    //     />

    //   }
    // )
    
    // debugger

    return(
      <div>
        profile page
        <div>
          <div>
            <h2>Upcoming Reservations</h2>
            <ul>{futureReservationItems}</ul>
          </div>
          <div>
            <h2>Past Reservations</h2>
            <ul>{pastReservationItems}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;