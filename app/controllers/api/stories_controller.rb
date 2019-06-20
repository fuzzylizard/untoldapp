class Api::StoriesController < Api::BaseController
  def index
    @stories = Story.all
    render json: @stories
  end
end
