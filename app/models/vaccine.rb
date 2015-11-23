class Vaccine < ActiveRecord::Base
  belongs_to :cat
  enum category: [:first_round, :second_round, :temporary, :parvovirus, :leukaemia, :booster]

end
