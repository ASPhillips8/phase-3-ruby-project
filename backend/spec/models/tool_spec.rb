RSpec.describe Tool do
  subject do
    Tool.new(
      name: "Hammer",
      description: "12 oz craftmen",
      price_per_day: 15.00,
      availability: true,
      category: "Hand Tools",
      image: "hammer.jpg"
    )
  end

  it { is_expected.to have_attributes(name: "Hammer") }
  it { is_expected.to have_attributes(description: "12 oz craftmen") }
  it { is_expected.to have_attributes(price_per_day: 15.00) }
  it { is_expected.to have_attributes(availability: true) }
  it { is_expected.to have_attributes(category: "Hand Tools") }
  it { is_expected.to have_attributes(image: "hammer.jpg") }
end
