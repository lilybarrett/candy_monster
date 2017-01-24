class Api::V1::CandiesController < ApplicationController
  def index
    render json: Candy.all
  end
end
