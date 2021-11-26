import React from "react";


class ReservationShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    debugger
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  render(){
    return(
      <div>
        this is showing reservation info and buttons:
        {this.props.reservation.email}
      </div>
    )
  }
}

export default ReservationShow