class Tool < ActiveRecord::Base
  has_many :rentals
  has_many :customers, through: :rentals

  scope :availble, -> { where(availability: true) }
  # def self.available
  #   where(availability: true)
  # end

  def rent
    update(availability: false)
  end

  def return_back
    update(availability: true)
  end
end
