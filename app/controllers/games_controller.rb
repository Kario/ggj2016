class GamesController < ApplicationController
  require 'open-uri'
  
  def index
	@riddles = JSON.parse(web_contents  = open('https://www.dropbox.com/s/sejajqb2npgt7qz/ggj-got-milk-data.json?raw=1') {|f| f.read })
  end

  def show
  end

  def edit
  end
end
