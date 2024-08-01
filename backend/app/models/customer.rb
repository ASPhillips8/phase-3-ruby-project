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

  def self.total_owed
    sum(:current_amount_owed)
  end

  def self.average_customer_cost
    average(:current_amount_owed)
  end

  def self.favorite_customers
    joins(:rentals).group("customers.id").order("COUNT(rentals.id) DESC").limit(2)
  end
end
