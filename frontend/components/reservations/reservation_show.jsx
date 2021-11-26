import React from "react";
import { withRouter } from "react-router";

class ReservationShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // debugger
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  render(){
    if (!this.props.reservation) {
      return null;
    }
    
    if (this.props.reservation.user_id !== this.props.currentUser.id) {
      this.props.history.push("/")
    }
    // debugger

    return(
      <div>
        this is showing reservation info and buttons:
        {this.props.reservation.email}
      </div>
    )
  }
}

export default withRouter(ReservationShow);