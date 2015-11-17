module ApplicationHelper

  def auth_token
    <<-HTML.html_safe
      <input type="hidden" name="authenticity_token" value="#{h(form_authenticity_token)}">
    HTML
  end

end
