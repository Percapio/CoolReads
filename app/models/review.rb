# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  book_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
	validates :author_id, :book_id, :title, :description, presence: :true

	belongs_to :user,
		class_name: :User
		dependent: :destroy

	belongs_to :book,
		class_name: :Book,
		dependent: :destroy
end
