/* Signal — shared UI layer
 *
 * Three things every section page needs, kept in one place so the three
 * renderers stay thin and behave identically:
 *
 *   1. SignalReview(d)        — the "reviewed by / pending review" line.
 *   2. SignalRelated(d, sec)  — cross-section links, resolved through the
 *                               generated manifest so a page never has to load
 *                               another section's full data file.
 *   3. SignalModal            — accessible open/close: focus trap, focus
 *                               restore, Escape, and shareable ?e=<slug> URLs.
 *
 * Contains no content. Requires data/manifest.js to be loaded first for (2).
 */
(function () {
  'use strict';

  /* ─────────────── manifest lookup ─────────────── */

  var SECTIONS = {
    symptoms:   { label: 'Symptom',   plural: 'Symptoms'   },
    procedures: { label: 'Procedure', plural: 'Procedures' },
    medicines:  { label: 'Medicine',  plural: 'Medicines'  }
  };

  var byKey = {};
  (window.SIGNAL_INDEX || []).forEach(function (r) { byKey[r.s + '/' + r.k] = r; });

  function lookup(section, slug) { return byKey[section + '/' + slug] || null; }

  /* ─────────────── 1. review status ─────────────── */

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  function formatDate(iso) {
    if (!iso) return '';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso));
    if (!m) return String(iso);
    return Number(m[3]) + ' ' + MONTHS[Number(m[2]) - 1] + ' ' + m[1];
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Renders the review stamp shown at the foot of every entry.
     Two honest states — reviewed by a named clinician, or explicitly not yet. */
  window.SignalReview = function (d) {
    if (d && d.reviewedBy) {
      var when = d.lastReviewed ? ' &middot; ' + esc(formatDate(d.lastReviewed)) : '';
      return '<div class="sig-review done">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M20 6 9 17l-5-5"/></svg>' +
        '<span>Clinically reviewed by <b>' + esc(d.reviewedBy) + '</b>' + when + '</span></div>';
    }
    return '<div class="sig-review pending">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
      '<span><b>Pending clinical review.</b> No named clinician has signed this entry off yet. ' +
      'Treat it as a draft explainer, not as guidance.</span></div>';
  };

  /* ─────────────── 2. cross-section links ─────────────── */

  /* Each page registers how to open one of its own entries in place, so
     same-section links open a modal instead of reloading the page. */
  window.SignalOpenLocal = null;

  function chip(rec, currentSection) {
    var name = esc(rec.n);
    if (rec.s === currentSection && typeof window.SignalOpenLocal === 'function') {
      return '<button type="button" class="sig-rel-chip" data-k="' + esc(rec.k) + '">' + name + '</button>';
    }
    return '<a class="sig-rel-chip" href="../' + rec.s + '/index.html?e=' + encodeURIComponent(rec.k) + '">' +
      name + ' <span aria-hidden="true">&rarr;</span></a>';
  }

  /* Builds the "Related" block. Silently skips any slug missing from the
     manifest rather than rendering a dead link. */
  window.SignalRelated = function (d, currentSection) {
    if (!d || !d.related) return '';
    var groups = [];

    ['symptoms', 'procedures', 'medicines'].forEach(function (sec) {
      var slugs = d.related[sec] || [];
      var recs = slugs.map(function (k) { return lookup(sec, k); }).filter(Boolean);
      if (!recs.length) return;
      groups.push(
        '<div class="sig-rel-row">' +
          '<span class="sig-rel-label">' + SECTIONS[sec].plural + '</span>' +
          '<span class="sig-rel-chips">' +
            recs.map(function (r) { return chip(r, currentSection); }).join('') +
          '</span>' +
        '</div>');
    });

    if (!groups.length) return '';
    return '<div class="blk"><h3>Related on Signal</h3>' +
      '<div class="sig-rel">' + groups.join('') +
      '<p class="sig-rel-note">These links show what commonly sits alongside this entry — ' +
      'they are not a diagnosis, a pathway, or a prediction of what will happen to you.</p></div></div>';
  };

  /* Delegated handler for same-section chips. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('button.sig-rel-chip[data-k]') : null;
    if (!el) return;
    if (typeof window.SignalOpenLocal === 'function') {
      e.preventDefault();
      window.SignalOpenLocal(el.getAttribute('data-k'));
    }
  });

  /* ─────────────── 3. accessible modal ─────────────── */

  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  var lastFocus = null;
  var trapHandler = null;

  function focusables(sheet) {
    return Array.prototype.filter.call(sheet.querySelectorAll(FOCUSABLE), function (el) {
      return el.offsetParent !== null || el === document.activeElement;
    });
  }

  window.SignalModal = {
    /* Call AFTER the sheet's innerHTML has been set.
       slug is optional — when given, the URL becomes shareable. */
    open: function (slug) {
      var scrim = document.getElementById('scrim');
      var sheet = document.getElementById('sheet');
      if (!scrim || !sheet) return;

      lastFocus = document.activeElement;

      sheet.setAttribute('role', 'dialog');
      sheet.setAttribute('aria-modal', 'true');
      sheet.setAttribute('tabindex', '-1');
      var h2 = sheet.querySelector('h2');
      if (h2) {
        if (!h2.id) h2.id = 'sig-sheet-title';
        sheet.setAttribute('aria-labelledby', h2.id);
      } else {
        sheet.removeAttribute('aria-labelledby');
      }

      scrim.classList.add('open');
      scrim.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
      sheet.scrollTop = 0;
      scrim.scrollTop = 0;

      /* Focus the close button where there is one, else the sheet itself. */
      var close = sheet.querySelector('.x');
      (close || sheet).focus({ preventScroll: true });

      trapHandler = function (e) {
        if (e.key !== 'Tab') return;
        var list = focusables(sheet);
        if (!list.length) { e.preventDefault(); sheet.focus(); return; }
        var first = list[0], last = list[list.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === sheet)) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      };
      document.addEventListener('keydown', trapHandler, true);

      if (slug) {
        try { history.replaceState(null, '', '?e=' + encodeURIComponent(slug)); } catch (err) {}
      }
    },

    close: function () {
      var scrim = document.getElementById('scrim');
      var sheet = document.getElementById('sheet');
      if (!scrim) return;

      scrim.classList.remove('open');
      scrim.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (trapHandler) { document.removeEventListener('keydown', trapHandler, true); trapHandler = null; }
      if (sheet) { sheet.removeAttribute('role'); sheet.removeAttribute('aria-modal'); }

      try { history.replaceState(null, '', location.pathname); } catch (err) {}

      if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
      lastFocus = null;
    }
  };

  /* ─────────────── deep links ─────────────── */

  /* Opens the entry named in ?e=<slug> once the page has rendered.
     `has` guards against a stale or hand-typed slug. */
  window.SignalDeepLink = function (has, open) {
    var slug = new URLSearchParams(location.search).get('e');
    if (slug && has(slug)) open(slug);
  };

})();
