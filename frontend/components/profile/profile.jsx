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

    const reservationItems = this.props.reservations.map((reservation) => {
      const review = (reservation.review) ? reservation.review : null;

      return <ProfileReservationItem 
        key={reservation.id} 
        reservation={reservation}
        restaurant={this.props.restaurants[ids.indexOf(reservation.restaurant_id)]}
        review={review}
        />

      }
    )
    
    // debugger

    return(
      <div>
        profile page
        <div>
          <ul>{reservationItems}</ul>
        </div>
      </div>
    )
  }
}

export default Profile;