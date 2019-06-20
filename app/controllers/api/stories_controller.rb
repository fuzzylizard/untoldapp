class Api::StoriesController < Api::BaseController
  
  def index
    @stories = Story.all
    render json: @stories
  end

  def create
    @story = Story.create(story_params)
  
    render json: @story
  end

  def update
    @story = Story.find(params[:id])
    @story.update(story_params)

    render json: @story
  end

  def delete
    @story = Story.find(params[:id])
    @story.delete

    render :ok
  end

  private

  def story_params
    params.require(:story).permit(:id, :title, :story_text)
  end
end
