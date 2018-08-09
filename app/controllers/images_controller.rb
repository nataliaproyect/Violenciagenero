class ImagesController < ApplicationController
    before_action :set_image, only: [:show, :edit, :update, :destroy]

    def index 
     
        @images = Image.where user_id: current_user.id

        
    end

    def new 
        @image = Image.new
    end

    def edit  
    end

    def create
        #render plain: params[:image].inspect
    
        @image = current_user.images.new images_params
        @image.save
        redirect_to '/'

    end

    def show  
    end
    
    def update 
        @image.update images_paramars 
        redirect_to @image
    end
    
    def destroy
        @image.destroy
        redirect_to images_path
    end

    private

    def images_params
        params.require(:image).permit :description, :picture
    end

    def set_image

        @image = Image.find params[:id]
    end

end
