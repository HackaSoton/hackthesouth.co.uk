// smooth scroll

new SmoothScroll('nav a[href*="#"]', {
  speed: 500,
  offset: 50,
  easing: 'easeInOutCubic',
});

// google analytics event reporting

document.querySelectorAll('[ga-event-action]').forEach(function(el) {
  el.addEventListener('click', function() {
    var eventAction = el.getAttribute('ga-event-action');
    var eventCategory = el.getAttribute('ga-event-category');
    var eventLabel = el.getAttribute('ga-event-label');
    var eventValue = el.getAttribute('ga-event-value');

    if (el.nodeName === 'A') {
      eventLabel = el.getAttribute('href');
    }

    gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  });
});
