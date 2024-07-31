class Tool < ActiveRecord::Base
  has_many :rentals
  has_many :customers, through: :rentals

  def tool_available?

  end
end
