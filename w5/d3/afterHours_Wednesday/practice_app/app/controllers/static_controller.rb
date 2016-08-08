class StaticController < ApplicationController
  def index
  	if params[:page] == '1'
  		render "index_1.html.erb"
  	elsif params[:page] == '2'
  		render "index_2.html.erb"
  	else
  		render "index.html.erb"
  	end
  end

  def page
  	render layout: "page"
  end
end
