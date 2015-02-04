centerHeroAndMenuText = ->
  $('#hero .wrap').css 'margin-top', '-' + $('#hero .wrap').height() / 2 + 'px'
  if $('nav .wrap').height() + 40 > $('nav').height()
    $('nav .wrap').css
      'margin-top': '0px'
      'top': '0'
      'padding': '8rem 5% 4rem 5%'
  else
    $('nav .wrap').css
      'margin-top': '-' + $('nav .wrap').height() / 2 - 20 + 'px'
      'top': '50%'
      'padding': '0 5%'
  return

openSubscribe = ->
  $('#subscribe-button').parent().addClass 'active'
  $('#subscribe-button').text 'X'
  return

closeSubscribe = (text) ->
  $('#subscribe-button').delay(1000).queue (n) ->
    $(this).text text
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
$ ->
  scroll_position = undefined
  # Center hero text
  centerHeroAndMenuText()
  # Inital page setup animations
  $('#hero .overlay').css 'opacity': '1'
  $('#hero .wrap').css
    'margin-top': '+=32px'
    'opacity': '0'
  $('#hero .overlay').delay(500).animate { 'opacity': '.9' }, 1000
  $('#hero .wrap').delay(500).animate {
    'margin-top': '-=20px'
    'opacity': '1'
  }, 750
  # Navigation animation
  $('#mobile-nav').click ->
    if !$('nav').hasClass('open')
      $('#mobile-nav').addClass 'open'
      $('nav').addClass 'open'
      scroll_position = $('body').scrollTop()
    else
      $('#mobile-nav').removeClass 'open'
      $('nav').removeClass 'open'
      $('body').scrollTop scroll_position
    return
  # Close navigation if selection doesn't leave page.
  $('nav a').click ->
    if $('#home-flag').length > 0
      if $(this).parent().is('.menu')
        $('#mobile-nav').removeClass 'open'
        $('nav').removeClass 'open'
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
      $(this).addClass 'slide'
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
    if $(this).attr('class') == 'back'
      return
    if $(this).hasClass('active')
      $(this).removeClass 'active'
      $('#option-' + $(this).attr('class')).slideUp()
    else
      $clicked = $('#option-buttons a.active')
      $clicked.removeClass 'active'
      $('#option-' + $clicked.attr('class')).slideUp()
      $('#option-' + $(this).attr('class')).slideDown()
      $(this).addClass 'active'
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
  # Admin blog dropdown and remover
  $('p#blogs').click (e) ->
    if $(e.target).is('span')
      $('p#blogs').html 'Blog'
      $('p#blogs').css 'color', '#999999'
      $('#blog-options').slideUp()
      $('input[name="blog"]').val 0
      $('#tags label, #new-tag').slideUp()
      $('#tags input[type=\'checkbox\']').attr 'checked', false
    else
      $('#blog-options').slideToggle()
    return
  # Admin blog picker
  $('#blog-options li').click ->
    $('p#blogs').html($(this).html() + '<span>X</span>').css 'color', '#252525'
    $('p#blogs').removeClass().addClass $(this).attr('id')
    $('#blog-options').slideUp()
    $('input[name="blog"]').val $(this).attr('id')
    $('#tags label, #new-tag').hide()
    $('#tags label.' + $(this).attr('id') + ', #new-tag').slideDown()
    return
  # Admin new tag functionality
  # var index = 0;
  # $('#new-tag').on("keypress", function(e) {
  #     if (e.keyCode == 13) {
  #         index--;
  #         $('#new-tag').before("\
  #             <input type=\"checkbox\" name=\"tags[]\" id=\"" + index + "\" value=\"" + index + "\"/>\
  #             <label for=\"" + index + "\" class=\"" + $('p#blogs').attr("class") + "\" style=\"display: inline;\">" + $('#new-tag').val() + "</label>\
  #             <input type=\"hidden\" name=\"tag" + index + "\" value=\"" + $('#new-tag').val() + "\"/>");
  #         $('#new-tag').val("");
  #         return false;
  #     }
  # });
  # Admin slug generation
  $('input[name="title"]').on 'input', ->
    $('input[name="slug"]').val $(this).val().replace(/\s/g, '-').toLowerCase()
    return
  # Coming soon for incomplete projects
  old_href = undefined
  $('#work-samples article a').hover (->
    old_href = $(this).text()
    if $(this).attr('href') == '#'
      $(this).text 'COMING SOON'
    return
  ), ->
    $(this).text old_href
    return
  $('#work-samples article a').click (e) ->
    if $(this).attr('href') == '#'
      e.preventDefault()
    return
  window.mySwipe = $('#swipe').Swipe(
    speed: 500
    disableScroll: false).data('Swipe')
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

# ---
# generated by js2coffee 2.0.0
