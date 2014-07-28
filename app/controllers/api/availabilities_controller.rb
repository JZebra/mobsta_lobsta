module Api
  class AvailabilitiesController < ApplicationController
    def create
      @avail = Availability.new
      @avail.user_id = current_user.id
    
      if @avail.save
        render json: @avail
      else
        render json: @avail.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    def markers
      @markers ||= AvailabilityMarker.find_by_availability_id(:id)
    end
  
  end
end