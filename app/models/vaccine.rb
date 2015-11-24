class Vaccine < ActiveRecord::Base
  has_many :vaccinations, dependent: :destroy
  has_many :cats, through: :vaccinations


  enum category: [:first_round, :second_round, :temporary, :parvovirus, :leukaemia, :booster]

end
