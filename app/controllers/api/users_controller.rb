class Api::UsersController < ApplicationController
  def new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password, :name, :phone1)
  end
end