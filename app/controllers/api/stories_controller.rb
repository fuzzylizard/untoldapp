class Api::StoriesController < Api::BaseController
  
  def index
    render json: Story.all
  end

  def create
    story = Story.create(story_params)
    render json: story
  end

  def update
    story = Story.find(params[:id])
    story.update(story_params)
    render json: story
  end

  def destroy
    Story.destroy(params[:id])
  end

  private

  def story_params
    params.require(:story).permit(:id, :title, :story_text)
  end
end