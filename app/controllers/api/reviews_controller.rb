class Api::ReviewsController < ApplicationController
  def create
  	@review = Review.new(review_params)

    if @review.save
  		render :show
  	else
  		render json: @review.errors.full_messages, status: 422
  	end 
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def index
    @reviews = Book.find_by(id: params[:book_id]).reviews
  	render json: @reviews
  end

  def destroy
  	@review = current_user.reviews.find(params[:id])
  	@review.destroy!
    render :show
  end

  def update
    @review = Review.find(params[:id])

  	if @review.update_attributes(review_params)
  		render :show
  	else
  		render json: @review.errors.full_messages, status: 422
  	end
  end

  private

  def review_params
  	params.require(:review).permit(:book_id, :author_id, :description, :title, :author_name)
  end
end
