# == Schema Information
#
# Table name: shelves
#
#  id           :integer          not null, primary key
#  book_id      :integer
#  bookshelf_id :integer
#  status       :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ShelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end