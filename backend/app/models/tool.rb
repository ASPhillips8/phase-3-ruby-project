class Tool < ActiveRecord::Base
  has_many :rentals
  has_many :customers, through: :rentals

  def self.available
    all.where(availability: true)
  end

  def rent
    update(availability: false)
  end

  def return_back
    update(availability: true)
  end
end
