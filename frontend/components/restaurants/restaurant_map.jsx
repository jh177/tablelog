import React from "react";

class RestaurantMap extends React.Component{
  constructor(props){
    super(props)
    this.restaurant = this.props.restaurant
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: this.restaurant.lat, lng: this.restaurant.lng},
      zoom: 13
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.createMarker();
  }

  createMarker() {
    const latLng = { lat: this.restaurant.lat, lng: this.restaurant.lng }
    new google.maps.Marker({
      position: latLng,
      map: this.map,
    })
  }

  render(){
    return(
      <div className="map-container" ref={map=>this.mapNode=map}>
      </div>
    )
  }
}

export default RestaurantMap;