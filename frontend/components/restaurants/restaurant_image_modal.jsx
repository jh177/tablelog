import React from "react";



class RestaurantImageModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // debugger

    return(
      <div className="image-modal-content-wrapper">
        <div onClick={this.props.closeModal} className="image-close-x">X</div>
        
        <div>
          <img src={localStorage.photoUrl}/>          
        </div>
      </div>
    )
  }
}

export default RestaurantImageModal;