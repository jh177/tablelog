class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end


  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end

end
