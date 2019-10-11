class Removeimgurl < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :image_url
  end
end
