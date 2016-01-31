class GamesController < ApplicationController
  require 'open-uri'
  require 'json'
  
  def index
	@riddles = JSON.parse(web_contents  = open('https://www.dropbox.com/s/sejajqb2npgt7qz/ggj-got-milk-data.json?raw=1') {|f| f.read })
  end

  def show
	
	@riddles = JSON.parse(web_contents  = open(Rails.root.to_s + '/public/got_milk.json') {|f| f.read })
	
  end

  def edit
  end
end
