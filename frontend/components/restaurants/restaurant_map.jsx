import React from "react";

class RestaurantMap extends React.Component{
  constructor(props){
    super(props)
    // this.restaurant = this.props.restaurant
  }

  // componentDidMount(){
  //   const mapOptions = {
  //     center: { lat: this.restaurant.lat, lng: this.restaurant.lng},
  //     zoom: 13
  //   }
  //   this.map = new google.maps.Map(this.mapNode, mapOptions);
  //   this.createMarker();
  // }

  // createMarker() {
  //   const latLng = { lat: this.restaurant.lat, lng: this.restaurant.lng }
  //   new google.maps.Marker({
  //     position: latLng,
  //     map: this.map,
  //   })
  // }

  render(){
    const {restaurant} = this.props;
    let lat = restaurant.lat;
    let lng = restaurant.lng;
    return(
      <div>
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address}`} target="_blank">
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=320x240&maptype=roadmap&markers=size:large%7Ccolor:blue%7C${lat},${lng}&key=${window.googleAPIKey}`} alt="map" />
        </a>
      </div>
      // <div className="map-container" ref={map=>this.mapNode=map}>
      // </div>
    )
  }
}

export default RestaurantMap;