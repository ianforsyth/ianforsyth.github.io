require 'slim'

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

page "/docs/*", :layout => :docs_layout

activate :directory_indexes

set :css_dir, 'src/style'
set :js_dir, 'src/js'
set :images_dir, 'src/img'
set :partials_dir, 'partials'

# Development-specfic configuration
configure :development do
  activate :livereload, :host => '127.0.0.1'
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
