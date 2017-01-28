source "https://rubygems.org"

gem "coffee-rails", "~> 4.1.0"
gem "foundation-rails"
gem "jquery-rails"
gem "pg"
gem "rails"
gem "sass-rails", "~> 5.0"
gem "sdoc", "~> 0.4.0", group: :doc
gem "uglifier", ">= 1.3.0"
gem 'active_model_serializers', '0.9.3'

group :development, :test do
  gem "dotenv-rails"
  gem "pry-rails"
  gem "rspec-rails"
end

group :test do
  gem "capybara"
  gem "coveralls", require: false
  gem "database_cleaner"
  gem "factory_girl_rails"
  gem "launchy"
  gem "shoulda-matchers"
  gem "vcr"
  gem "webmock"
end

group :production do
  gem "puma"
  gem "rails_12factor"
end
