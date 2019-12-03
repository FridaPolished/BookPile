class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :year
      t.text :description
      t.string :image_url
      t.integer :user_id, null: false
      t.integer :bookshelf_id, 
      t.timestamps
    end
    add_index :books, :user_id
    add_index :books, :author
  end
end
