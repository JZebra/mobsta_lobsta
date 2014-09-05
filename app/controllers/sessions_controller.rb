class SessionsController < ApplicationController
  def new
  end
  
  def create 
    @user = User.find_by_credentials(params[:user])
    
    if @user 
      sign_in!(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Invalid email or password"]
      redirect_to splash_url
    end
  end
  
  def destroy
    sign_out!
    redirect_to root_url
  end  
end
