class Api::AvailabilityMarkersController < ApplicationController
  def create
    @marker = AvailabilityMarker.new(marker_params)
    
    if @marker.save
      render json: @marker
    else
      render json: @marker.errors.full_messages, status: :unprocessable_entity
    end
  end
    
  private
  def marker_params
    params.require(:availability_marker).permit(:lat, :lng, :availability_id)
  end  
end
