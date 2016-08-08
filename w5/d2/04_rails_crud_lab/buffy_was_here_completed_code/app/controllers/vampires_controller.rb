class VampiresController < ApplicationController
  before_action :set_vampire, only: [:show, :edit, :update, :destroy]

  def index
    @vampires = Vampire.all
  end

  def show
  end

  def new
    @vampire = Vampire.new
  end

  def edit
  end

  def create
    @vampire = Vampire.new(vampire_params)

    if @vampire.save
      redirect_to @vampire, notice: 'Vampire was successfully created.'
    else
      render :new
    end
  end

  def update
    if @vampire.update(vampire_params)
      redirect_to @vampire, notice: 'Vampire was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @vampire.destroy
    redirect_to vampires_url, notice: 'Vampire was successfully destroyed.'
  end

  private
    def set_vampire
      @vampire = Vampire.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vampire_params
      params.require(:vampire).permit(:name, :age, :sire, :staked)
    end
end
