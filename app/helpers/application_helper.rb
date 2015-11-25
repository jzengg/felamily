module ApplicationHelper

  def auth_token
    <<-HTML.html_safe
      <input type="hidden" name="authenticity_token" value="#{h(form_authenticity_token)}">
    HTML
  end

  def humanize_age(cat)
    days = (Date.today - cat.dob).to_i
    years = (days / 365).to_i
    days = days % 365
    months = (days / 30).to_i
    days = days % 30

    if years < 1
      if months < 1
        "#{days} days"
      else
        "#{months} months"
      end
    else
      "#{years} years #{months} months"
    end
  end
end
