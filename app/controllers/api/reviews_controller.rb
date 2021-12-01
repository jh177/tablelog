class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  def review_params
    params.require(:review).permit(
      :user_id, 
      :restaurant_id, 
      :reservation_id, 
      :overall, 
      :food, 
      :service, 
      :ambience, 
      :value, 
      :noise, 
      :body, 
      :recommend)
  end


end

