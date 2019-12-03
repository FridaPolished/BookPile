class Bookshelf < ApplicationRecord
  validates :name, presence: true
  belongs_to :user

  has_many :shelves,
  dependent: :destroy

  has_many :books,
  through: :shelves,
  source: :book



  def self.bookshelves_for_user(user_id)
    Bookshelf.where(user_id: user_id)
  end

end