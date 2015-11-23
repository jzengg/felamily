class Vaccination < ActiveRecord::Base
  belongs_to :cat
  belongs_to :vaccine


end
