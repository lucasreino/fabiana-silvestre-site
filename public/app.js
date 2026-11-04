// Monta a primeira mensagem de WhatsApp a partir dos temas e da modalidade escolhidos.
(function () {
  var form = document.getElementById('picker');
  var text = document.getElementById('msg-text');
  var send = document.getElementById('msg-send');
  if (form && text && send) {
    var joinPt = function (items) {
      if (items.length <= 1) return items.join('');
      return items.slice(0, -1).join(', ') + ' e ' + items[items.length - 1];
    };
    var update = function () {
      var temas = Array.prototype.map.call(form.querySelectorAll('input[name="tema"]:checked'), function (i) { return i.value; });
      var modo = (form.querySelector('input[name="modo"]:checked') || {}).value || '';
      var msg = 'Olá, Fabiana! Encontrei seu site e gostaria de marcar uma primeira conversa' + (modo ? ' ' + modo : '') + '.';
      if (temas.length) msg += ' O que tem me trazido: ' + joinPt(temas) + '.';
      text.textContent = msg;
      send.href = 'https://wa.me/5567992884388?text=' + encodeURIComponent(msg);
    };
    form.addEventListener('change', update);
    update();
  }

  // Cabeçalho: mostra o nome quando o título do topo sai da tela.
  var topbar = document.querySelector('.topbar');
  var heroTitle = document.querySelector('.hero-title');
  if (topbar && heroTitle && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      topbar.classList.toggle('scrolled', !entries[0].isIntersecting);
    }, { rootMargin: '-68px 0px 0px 0px' }).observe(heroTitle);
  } else if (topbar) {
    topbar.classList.add('scrolled');
  }

  // Entrada suave dos blocos ao rolar (o conteúdo fica visível sem script ou com movimento reduzido).
  var els = document.querySelectorAll('[data-reveal]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var siblings = Array.prototype.filter.call(e.target.parentElement.children, function (c) { return c.hasAttribute('data-reveal'); });
      e.target.style.transitionDelay = (Math.max(0, siblings.indexOf(e.target)) * 80) + 'ms';
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
