class Customer < ActiveRecord::Base
  has_many :rentals
  has_many :tools, through: :rentals

  def full_name
    "#{first_name} #{last_name}"
  end

  def total_rentals_cost
    rentals.where.not(date_in: nil).sum(&:rental_cost)
  end

  def add_amount_owed
    update(current_amount_owed: current_amount_owed + total_rentals_cost)
  end

  # def amount_owed
  #   rentals.sum do |rental|
  #     rental_end_date = rental.date_in
  #     (rental_end_date - rental.date_out).to_i * rental.tool.price_per_day
  #   end
  # end
end
