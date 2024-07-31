class Rental < ActiveRecord::Base
  belongs_to :tool
  belongs_to :customer

  # def amount_owed
  #   rentals.where.not(date_in: nil).sum do |rental|
  #     rental_end_date = rental.date_in
  #     (rental_end_date - rental.date_out).to_i * rental.tool.price_per_day
  #   end
  # end
  #
  def update_customer_amount_owed
    rental_duration = (date_in || Date.today) - date_out
    rental_cost = rental_duration * tool.price_per_day
    customer.update(current_amount_owed: customer.current_amount_owed + rental_cost)
  end
end
