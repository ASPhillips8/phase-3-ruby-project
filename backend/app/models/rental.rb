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

  def self.open_rentals
    where(date_in: nil).count
  end

  def self.most_popular_tool
    joins(:tool).group("tools.id").order("COUNT(rentals.id) DESC").limit(1).pluck("tools.name").first
  end

  def self.average_rental_length
    completed_rentals = where.not(date_in: nil)
    total_days = completed_rentals.sum(&:rental_time)
    completed_rentals.any? ? (total_days / completed_rentals.size.to_f) : 0.0
  end
end
