openSubscribe = ->
  $('#subscribe-button').parent().addClass 'active'
  $('#subscribe-button').text 'X'
  return

closeSubscribe = (text) ->
  $('#subscribe-button').delay(1000).queue (n) ->
    $(@).text text
    n()
    return
  $('#subscribe').removeClass 'active'
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
  return

$(window).resize ->
  centerHeroAndMenuText()
  $('#quote-wrap').css 'height': $('#quote-wrap .showing').height() + 'px'
  return

# Header parallax scrolling
$(window).scroll ->
  yPos = +($(window).scrollTop() / 2)
  $('header').css 'top': yPos
  return

$ ->
  # scroll_position = undefined

  # # Inital page setup animations
  # $('.hero .hero-overlay').css 'opacity': '1'
  # $('.hero .hero-wrap').css
  #   'margin-top': '+=32px'
  #   'opacity': '0'
  # $('.hero .hero-overlay').delay(500).animate { 'opacity': '.9' }, 1000
  # $('.hero .hero-wrap').delay(500).animate {
  #   'margin-top': '-=20px'
  #   'opacity': '1'
  # }, 750

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
    return

  # Close navigation if selection doesn't leave page.
  $('nav a').click ->
    if $('#home-flag').length > 0
      if $(@).parent().is('.menu')
        $('#mobile-nav').removeClass 'open'
        $('navmenu').removeClass 'open'
    return

  # Footer subscribe button animation and submition
  $('#subscribe-button').click ->
    if !$('#subscribe').hasClass('active')
      openSubscribe()
    else
      closeSubscribe 'SUBSCRIBE'
    return

  # Subscribe with submit button pressed
  $('#subscribe-submit').click ->
    if $('#subscribe').hasClass('active')
      $.post '/email', email: $('#subscribe-text').val()
      closeSubscribe 'THANK YOU!'
    return

  # Subscribe with enter key pressed
  $('#subscribe-text').keyup (event) ->
    keycode = event.keyCode or event.which
    if keycode == 13
      if $('#subscribe').hasClass('active')
        $.post '/email', email: $('#subscribe-text').val()
        closeSubscribe 'THANK YOU!'
    return

  # Blog search bar
  $('#option-search input').keyup (event) ->
    keycode = event.keyCode or event.which
    if keycode == 13
      displayWittyMessage 0
    return

  # Services controller
  $('.next').click ->
    current_index = $('.service-articles article.active').data('index')
    next_index = if current_index == 4 then 1 else current_index + 1
    slideFromTo(current_index, next_index, 'next')

  $('.previous').click ->
    current_index = $('.service-articles article.active').data('index')
    next_index = if current_index == 1 then 4 else current_index - 1
    slideFromTo(current_index, next_index, 'previous')

  slideFromTo = (current_index, next_index, direction) ->
    current_slide = $(".service-articles article[data-index='#{current_index}']")
    next_slide = $(".service-articles article[data-index='#{next_index}']")
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
  $('#quote-wrap').css 'height': $('.showing').height() + 'px'
  $('#inspiration .button').click ->
    $now = $('.showing')
    $next = if $now.next('article').length then $now.next('article') else $('#inspiration article:first')
    $('#inspiration #' + $next.attr('id') + '-bg').css
      'z-index': '9'
      'opacity': '1'
    $('#inspiration #' + $now.attr('id') + '-bg').animate { 'opacity': '0' }, ->
      $('#inspiration #' + $now.attr('id') + '-bg').css 'z-index', '1'
      $('#inspiration #' + $next.attr('id') + '-bg').css 'z-index', '10'
      return
    $now.addClass 'fade'
    $next.delay(350).queue (n) ->
      $(@).addClass 'slide'
      n()
      return
    $('#quote-wrap').animate { 'height': $next.height() + 'px' }, 350, ->
    window.setTimeout (->
      $now.removeClass()
      $next.removeClass().addClass 'showing'
      return
    ), 700
    return

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
