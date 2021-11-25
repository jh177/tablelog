class Api::ReservationsController < ApplicationController

  def index
    @reservations = Reservation.all
    render :index
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 401
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
    render :show
  end

  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 401
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
  end

  def reservation_params
    params.require(:reservation).permit(:user_id, :restaurant_id, :party_size, :date, :time)
  end

end
