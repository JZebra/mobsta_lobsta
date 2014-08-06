class PagesController < ApplicationController
  before_action :require_signed_in!, except: [:splash]
  def root
  end
  
  def splash
  end
end
