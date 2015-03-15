openSubscribe = ->
  $('.subscribe-button').parent().addClass 'active'
  $('.subscribe-button').text 'X'
  return

closeSubscribe = (text) ->
  $('.subscribe-button').delay(1000).queue (n) ->
    $(@).text text
    n()
    return
  $('.subscribe').removeClass 'active'
  return

displayWittyMessage = (counter) ->
  witty_message = 'No search yet...Sorry. Coming soon.'
  counter += 1
  $('#option-search input').val witty_message.substring(0, counter)
  if counter < 35
    setTimeout (->
      displayWittyMessage counter
      return
    ), 42
  return

$(window).on 'load', ->
  $('body').removeClass 'preload'

$(window).resize ->
  $('.inspiration-quotes').css { 'height': "#{$('.inspiration-quote.active').height()}px" }, quoteSpeed

# Header parallax scrolling
$(window).scroll ->
  yPos = +($(window).scrollTop() / 2)
  $('header').css 'top': yPos

$ ->
  # Navigation animation
  $('.navbar-menubutton').click ->
    if !$('.navmenu').hasClass('open')
      $('.navbar-menubutton').addClass 'open'
      $('.navmenu').addClass 'open'
      scroll_position = $('body').scrollTop()
    else
      $('.navbar-menubutton').removeClass 'open'
      $('.navmenu').removeClass 'open'
      $('body').scrollTop scroll_position

  # Close navigation if selection doesn't leave page.
  $('nav a').click ->
    if $('#home-flag').length > 0
      if $(@).parent().is('.menu')
        $('#mobile-nav').removeClass 'open'
        $('navmenu').removeClass 'open'

  # Footer subscribe button animation and submition
  $('.subscribe-button').click ->
    if !$('.subscribe').hasClass('active')
      openSubscribe()
    else
      closeSubscribe 'Subscribe'

  # Subscribe with submit button pressed
  $('.subscribe-submit').click ->
    if $('.subscribe').hasClass('active')
      $.post '/email', email: $('.subscribe-text').val()
      closeSubscribe 'THANK YOU!'

  # Subscribe with enter key pressed
  $('.subscribe-text').keyup (event) ->
    keycode = event.keyCode or event.which
    if keycode == 13
      if $('.subscribe').hasClass('active')
        $.post '/email', email: $('.subscribe-text').val()
        closeSubscribe 'THANK YOU!'

  # Blog search bar
  $('#option-search input').keyup (event) ->
    keycode = event.keyCode or event.which
    if keycode == 13
      displayWittyMessage 0

  # Services controller
  $('.next').click ->
    current_index = $('.service.active').data('index')
    next_index = if current_index == 4 then 1 else current_index + 1
    slideFromTo(current_index, next_index, 'next')

  $('.previous').click ->
    current_index = $('.service.active').data('index')
    next_index = if current_index == 1 then 4 else current_index - 1
    slideFromTo(current_index, next_index, 'previous')

  slideFromTo = (current_index, next_index, direction) ->
    current_slide = $(".service[data-index='#{current_index}']")
    next_slide = $(".service[data-index='#{next_index}']")
    if direction == 'next'
      next_slide.css({ left:'100%' })
      next_slide.animate({ left:'0%' }, 1000)
      current_slide.animate({ left:'-100%' }, 1000)
    else if direction == 'previous'
      next_slide.css({ left:'-100%' })
      next_slide.animate({ left:'0%' }, 1000)
      current_slide.animate({ left:'100%' }, 1000)

    current_slide.removeClass('active')
    next_slide.addClass('active')

  # Handle quote switching and size changing
  quoteIndex = 0
  quoteSpeed = 500
  $('.inspiration-button').click ->
    quoteIndex = if quoteIndex == 5 then 0 else quoteIndex + 1

    currentBg = $(".inspiration-bg.active")
    nextBg = $(".inspiration-bg[data-index='#{quoteIndex}']")
    currentBg.fadeOut quoteSpeed, (-> currentBg.removeClass('active'))
    nextBg.fadeIn quoteSpeed, (-> nextBg.addClass('active'))

    currentQuote = $('.inspiration-quote.active')
    nextQuote = $(".inspiration-quote[data-index='#{quoteIndex}']")
    currentQuote.fadeOut quoteSpeed, (-> currentQuote.removeClass('active'))
    nextQuote.fadeIn quoteSpeed, (-> nextQuote.addClass('active'))
    $('.inspiration-quotes').animate { 'height': nextQuote.height() + 'px' }, quoteSpeed

  # Blog options
  $('#option-buttons a').click ->
    if $(@).attr('class') == 'back'
      return
    if $(@).hasClass('active')
      $(@).removeClass 'active'
      $('#option-' + $(@).attr('class')).slideUp()
    else
      $clicked = $('#option-buttons a.active')
      $clicked.removeClass 'active'
      $('#option-' + $clicked.attr('class')).slideUp()
      $('#option-' + $(@).attr('class')).slideDown()
      $(@).addClass 'active'
    return

  # Disqus Comments
  if $('#disqus_thread').length > 0
    do ->
      dsq = document.createElement('script')
      dsq.type = 'text/javascript'
      dsq.async = true
      dsq.src = '//ianforsyth.disqus.com/embed.js'
      (document.getElementsByTagName('head')[0] or document.getElementsByTagName('body')[0]).appendChild dsq
      return
