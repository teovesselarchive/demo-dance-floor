(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    mobileNav.hidden = true;
  };
  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
    mobileNav.hidden = expanded;
  });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      closeMenu(); menuButton.focus();
    }
  });
  const desktop = matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function activateTab(tab) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    const floorName = {'tab-oak':'Oak Wood','tab-infinity':'Infinity','tab-white':'Slate White'}[tab.id];
    const radio = [...document.querySelectorAll('input[name="floor"]')].find(input => input.value === floorName);
    if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change', { bubbles:true })); }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); activateTab(tabs[next]); tabs[next].focus(); }
    });
  });

  const gallery = [...document.querySelectorAll('.gallery-open')];
  const dialog = document.querySelector('.lightbox');
  let imageIndex = 0;
  let imageTrigger;
  function showImage(index) {
    imageIndex = (index + gallery.length) % gallery.length;
    const item = gallery[imageIndex];
    const source = item.querySelector('img');
    const image = document.getElementById('lightbox-image');
    image.src = source.src;
    image.alt = source.alt;
    document.getElementById('lightbox-caption').textContent = item.dataset.caption || source.alt;
  }
  gallery.forEach((item, index) => item.addEventListener('click', () => {
    imageTrigger = item; showImage(index); dialog.showModal();
  }));
  dialog?.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog?.addEventListener('close', () => imageTrigger?.focus());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog?.querySelectorAll('[data-gallery-step]').forEach(button => button.addEventListener('click', () => showImage(imageIndex + Number(button.dataset.galleryStep))));
  dialog?.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showImage(imageIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(imageIndex - 1); }
  });

  const form = document.querySelector('.quote-form');
  if (form) {
    const date = form.elements.date;
    const now = new Date();
    const localToday = [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
    date.min = localToday;
    const query = new URLSearchParams(location.search);
    const requestedFloor = {oak:'Oak Wood',infinity:'Infinity',white:'Slate White'}[query.get('floor')];
    if (requestedFloor) form.elements.floor.value = requestedFloor;
    if (query.get('dj') === 'yes') form.elements.dj.checked = true;
    const result = form.querySelector('.inquiry-result');
    const floorNote = document.getElementById('floor-note');
    function validateSetting() {
      const incompatible = form.elements.floor.value === 'Infinity' && form.elements.setting.value.toLowerCase().includes('outdoors');
      form.elements.setting.setCustomValidity(incompatible ? 'Infinity is indoor only. Select an indoor setting or choose a different floor.' : '');
      floorNote.hidden = !incompatible;
    }
    form.addEventListener('change', validateSetting);
    form.addEventListener('input', () => { result.hidden = true; });
    form.addEventListener('change', () => { result.hidden = true; });
    validateSetting();
    let summary = '';
    form.addEventListener('submit', event => {
      event.preventDefault();
      validateSetting();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const value = key => String(data.get(key) || '').trim();
      const formattedDate = new Date(value('date') + 'T12:00:00').toLocaleDateString(undefined, {year:'numeric',month:'long',day:'numeric'});
      summary = `Hello Elite Surfaces,\n\nI’d love a quote for my event.\n\nName: ${value('name')}\nEmail: ${value('email')}\nPhone: ${value('phone') || 'Not provided'}\nEvent: ${value('event')}\nDate: ${formattedDate}\nGuests: ${value('guests')}\nVenue: ${value('venue')}\nSetting: ${value('setting')}\nGround surface: ${value('surface')}\nDance floor: ${value('floor')}\nDJ services: ${data.has('dj') ? 'Interested' : 'Not requested'}\n\nAdditional details:\n${value('notes') || 'None yet.'}\n\nThank you!`;
      form.querySelector('.inquiry-summary').textContent = summary;
      form.querySelector('.email-inquiry').href = `mailto:Info@elitedancefloors.com?subject=${encodeURIComponent('Dance floor inquiry | ' + value('date'))}&body=${encodeURIComponent(summary)}`;
      form.querySelector('.copy-status').textContent = '';
      result.hidden = false;
      result.focus({ preventScroll:true });
      result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'center' });
    });
    form.querySelector('.copy-inquiry').addEventListener('click', async () => {
      const status = form.querySelector('.copy-status');
      try { await navigator.clipboard.writeText(summary); status.textContent = 'Copied. Paste it into your preferred email app.'; }
      catch { const selection = window.getSelection(); const range = document.createRange(); range.selectNodeContents(form.querySelector('.inquiry-summary')); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Select and copy the highlighted inquiry, then paste it into your email app.'; }
    });
  }
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('reveal-ready'); observer.unobserve(entry.target); }
    }), {threshold:.12});
    document.querySelectorAll('.intro h2,.section-heading,.service-heading,.testimonial blockquote').forEach(el => observer.observe(el));
  }
})();
