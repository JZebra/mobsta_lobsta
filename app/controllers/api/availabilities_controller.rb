class Api::AvailabilitiesController < ApplicationController
  def index
    @avails = Availability.all
    render json: @avails
  end
  
  def create
    @avail = Availability.new
    @avail.user_id = current_user.id
    
    if @avail.save
      render json: @avail
    else
      render json: @avail.errors.full_messages, status: :unprocessable_entity
    end
  end
    
  def show
    render json: markers
  end
  
  def markers
    @markers ||= AvailabilityMarker.find_by_availability_id(:id)
  end
    
  def destroy
    @avail = Availability.find(params[:id])
    @avail.destroy
    render json: {}
  end
end