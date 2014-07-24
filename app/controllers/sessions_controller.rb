class SessionsController < ApplicationController
  def new
  end
  
  def create 
    @user = User.find_by_credentials(params[:user])
    
    if @user 
      sign_in!(@user)
      # render json: @user
      redirect_to root_url
    else
      # render json: ["Invalid email or password"], status: :unprocessable_entity
      flash.now[:errors] = ["Invalid email and/or password"]
      render :new
    end
  end
  
  def destroy
    sign_out!
    # render json: {}
    redirect_to new_session_url
  end  
end
