class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end

  def show
  end

  def create
    name = params[:student][:name]
    Student.create({name: name})
    redirect_to '/students'
  end
end
