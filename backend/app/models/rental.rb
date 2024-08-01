class Rental < ActiveRecord::Base
  belongs_to :tool
  belongs_to :customer

  def rental_time
    (date_in - date_out).to_i
  end

  def rental_cost
    return 0 unless date_in && date_out

    rental_time * tool.price_per_day
  end

  def customer_names
    customer.full_name
  end
end
