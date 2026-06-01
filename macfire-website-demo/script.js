/* MacFire Ltd, redesign demo
   Minimal vanilla JS. No jQuery, no dependencies.
   Three small responsibilities:
     1. Mobile nav toggle (with proper ARIA state)
     2. Demo form handler (shows confirmation, real backend needs wiring)
     3. Footer year auto-update (no more "© 2023" rot)
*/

(function () {
  'use strict';

  /* --- 1. Mobile nav --- */
  const nav = document.querySelector('.primary-nav');
  const toggle = nav && nav.querySelector('.nav-toggle');
  const navList = nav && nav.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });

    // Close mobile nav after tapping a link
    navList.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- 2. Demo contact form ---
     For production: replace this with a real handler, Netlify Forms (add
     `netlify` attribute to the <form>), Formspree, or POST to an SMTP relay. */
  const form = document.querySelector('.contact-form');
  if (form) {
    const success = form.querySelector('.form-success');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Cheap native validation, browser will surface field errors for required inputs.
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Demo: show confirmation, clear fields, focus the message for screen readers.
      form.querySelectorAll('input, textarea, select').forEach((el) => { el.value = ''; });
      if (success) {
        success.hidden = false;
        success.focus?.();
      }
    });
  }

  /* --- 3. Footer year --- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
