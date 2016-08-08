class VampiresController < ApplicationController
  #this before_action will set the vampire for show, edit, update, and destroy - complete the set_vampire private method at the bottom of this controller
  before_action :set_vampire, only: [:show, :edit, :update, :destroy]

  def index
    # add an instance variable to respresent all vampires in your db
    @vampires = Vampire.all
  end

  def show
    @vampire = set_vampire
  end

  def new
    # add an instance variable to represent one new vampire
    @vampire = Vampire.new
  end

  def edit
    @vampire = set_vampire
  end

  def create
    # add an instance variable to represent one new vampire and add vampire_params as the argument
    @vampire = Vampire.new(vampire_params)

    # add a conditional that will redirect to the new vampire's show page if it saves successfully, but will render the new form if it doesn't
    if @vampire.save
      redirect_to vampires_path
    else
      render :new
    end

  end

  def update
    # add a conditional that will redirect to the vampire's show page if it updates successfully, but will render the edit form if it doesn't
    @vampire = set_vampire

    if @vampire.update_attributes(vampire_params)
      redirect_to vampires_path
    else
      render :edit
    end

  end

  def destroy
    # destroy the vampire
    @vampire = set_vampire
    @vampire.destroy
    # then redirect to the vampires index
    redirect_to vampires_path
  end

  private
    def set_vampire
      # use the :id to find one vampire in the database
      Vampire.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vampire_params
      # whitelist all of the vampire attributes so that your forms work!
      params.require(:vampire).permit(:name, :age, :sire, :staked)
    end
end
