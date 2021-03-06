# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  year        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord

    validates :title, :author, presence: true

    has_one_attached :cover

    has_many :shelves,
    class_name: :Shelf,
    foreign_key: :book_id

    has_many :bookshelves,
    through: :shelves,
    source: :bookshelf

end
