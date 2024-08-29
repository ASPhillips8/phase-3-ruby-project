RSpec.describe Tool, type: :model do
  let(:customer) do
    Customer.create(
      first_name: "John",
      last_name: "Doe",
      age: 30,
      phone_number: "1234567890",
      email_address: "john.doe@example.com"
    )
  end

  let(:tool) do
    Tool.create(
      name: "Hammer",
      description: "12 oz craftmen",
      price_per_day: 15.00,
      category: "Hand Tools",
      availability: true,
      image: "hammer.jpg"
    )
  end

  context "when interacting with a Tool" do
    context "checking attribute values" do
      subject { tool }

      it { is_expected.to have_attributes(name: "Hammer") }
      it { is_expected.to have_attributes(description: "12 oz craftmen") }
      it { is_expected.to have_attributes(price_per_day: 15.00) }
      it { is_expected.to have_attributes(availability: true) }
      it { is_expected.to have_attributes(category: "Hand Tools") }
      it { is_expected.to have_attributes(image: "hammer.jpg") }
    end

    context "checking associations" do
      subject { tool }

      it "should have many rentals" do
        expect(tool).to respond_to(:rentals)
        expect(tool.rentals).to eq([])
      end

      it "should have many customers through rentals" do
        expect(tool).to respond_to(:customers)
        expect(tool.customers).to eq([])
      end
    end

    context "testing methods" do
      let(:tool1) { Tool.create(availability: true) }
      let(:tool2) { Tool.create(availability: true) }
      let(:tool3) { Tool.create(availability: false) }

      describe ".available" do
        it "returns only tools that are available" do
          available_tools = Tool.available
          expect(available_tools).to include(tool1, tool2)
          expect(available_tools).not_to include(tool3)
        end
      end

      describe "#rent" do
        it "updates the tool's availability to false" do
          tool1.rent
          expect(tool1.availability).to be false
        end
      end

      describe "#return_back" do
        it "marks the tool as available after being returned" do
          tool3.return_back
          expect(tool3.availability).to be true
        end
      end
    end
  end
end
