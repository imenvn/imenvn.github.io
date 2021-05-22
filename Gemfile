# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }
gem "jekyll-remote-theme"
# gem "beautiful-jekyll-theme", "~> 5.0.0"

# gem "rails"
# gem "jekyll"
gem "github-pages", "~> 214", group: :jekyll_plugins

gem 'wdm', '>= 0.1.0' if Gem.win_platform?

group :jekyll_plugins do
    gem 'jekyll-sitemap'
    gem 'jekyll-feed'
    gem 'jekyll-seo-tag'
end
