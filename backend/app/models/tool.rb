class Tool < ActiveRecord::Base
  has_many :rentals
  has_many :customers, through: :rentals

  def self.available
    all.where(availability: true)
  end
end
