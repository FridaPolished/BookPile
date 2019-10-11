# == Schema Information
#
# Table name: books
#
<<<<<<< HEAD
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  year        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
=======
#  id           :integer          not null, primary key
#  title        :string           not null
#  author       :string           not null
#  year         :string
#  description  :text
#  image_url    :string
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  bookshelf_id :integer
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
#

class Book < ApplicationRecord

    validates :title, :author, presence: true

<<<<<<< HEAD
    has_one_attached :cover
=======
    

    # belongs_to :bookshelf
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3

end
