class PageController < ApplicationController
  def page1
    render inertia: 'Page1', props: {
      message: 'This is a Page1 message from the controller! '
    }
  end

  def page2
    render inertia: 'Page2', props: {
      message: 'This is a Page2 message from the controller!'
    }
  end
end
