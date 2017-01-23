class CandiesController < ApplicationController

  def index
    @candies = Candy.all
    render json: @candies
  end

  def show
    @candy = Candy.find(params[:id])
  end
end
