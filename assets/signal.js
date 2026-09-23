/* Signal — shared article layer
 *
 * Every entry page is the same shape: a header, a table of contents, an
 * article column and a rail. Only the body differs per section, so everything
 * around it lives here and the three entry templates stay thin.
 *
 *   SignalSlug()              — the ?e=<slug> the page was opened with
 *   SignalReview(entry)       — the "reviewed by / pending review" stamp
 *   SignalRelated(entry, sec) — cross-section links, resolved via the manifest
 *   SignalKeepReading(entry)  — the card row at the foot of an article
 *   SignalReadTime(entry)     — an honest minutes estimate from the real text
 *   SignalArticle.init()      — builds the TOC, tracks scroll, drives the bar
 *   SignalNotFound(section)   — what to show for an unknown or missing slug
 *
 * Contains no content. Requires data/manifest.js for anything cross-section.
 */
(function () {
  'use strict';

  var SECTIONS = {
    symptoms:   { label: 'Symptom',   plural: 'Symptoms',   home: 'symptoms' },
    procedures: { label: 'Procedure', plural: 'Procedures', home: 'procedures' },
    medicines:  { label: 'Medicine',  plural: 'Medicines',  home: 'medicines' }
  };

  var byKey = {};
  (window.SIGNAL_INDEX || []).forEach(function (r) { byKey[r.s + '/' + r.k] = r; });
  function lookup(section, slug) { return byKey[section + '/' + slug] || null; }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function strip(html) { return String(html == null ? '' : html).replace(/<[^>]*>/g, ' '); }

  /* ─────────────── which entry is this page showing ─────────────── */

  window.SignalSlug = function () {
    return new URLSearchParams(location.search).get('e');
  };

  /* ─────────────── review stamp ─────────────── */

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  function formatDate(iso) {
    if (!iso) return '';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso));
    if (!m) return String(iso);
    return Number(m[3]) + ' ' + MONTHS[Number(m[2]) - 1] + ' ' + m[1];
  }
  window.SignalFormatDate = formatDate;

  /* Two honest states — reviewed by a named clinician, or explicitly not yet. */
  window.SignalReview = function (d) {
    if (d && d.reviewedBy) {
      var when = d.lastReviewed ? ' &middot; ' + esc(formatDate(d.lastReviewed)) : '';
      return '<div class="sig-review done">' +
        '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M20 6 9 17l-5-5"/></svg>' +
        '<span>Clinically reviewed by <b>' + esc(d.reviewedBy) + '</b>' + when + '</span></div>';
    }
    return '<div class="sig-review pending">' +
      '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
      '<span><b>Pending clinical review.</b> No named clinician has signed this entry off yet. ' +
      'Treat it as a draft explainer, not as guidance.</span></div>';
  };

  /* A one-line version for the article byline. */
  window.SignalReviewLine = function (d) {
    if (d && d.reviewedBy) {
      return 'Reviewed by <strong>' + esc(d.reviewedBy) + '</strong>' +
        (d.lastReviewed ? '<br>' + esc(formatDate(d.lastReviewed)) : '');
    }
    return '<strong>Not yet reviewed</strong><br>Awaiting clinical sign-off';
  };

  /* ─────────────── cross-section links ─────────────── */

  function href(rec) {
    return '../' + rec.s + '/entry.html?e=' + encodeURIComponent(rec.k);
  }

  window.SignalRelated = function (d) {
    if (!d || !d.related) return '';
    var groups = [];

    Object.keys(SECTIONS).forEach(function (sec) {
      var recs = (d.related[sec] || []).map(function (k) { return lookup(sec, k); }).filter(Boolean);
      if (!recs.length) return;
      groups.push(
        '<div class="sig-rel-row">' +
          '<span class="sig-rel-label">' + SECTIONS[sec].plural + '</span>' +
          '<span class="sig-rel-chips">' +
            recs.map(function (r) {
              return '<a class="sig-rel-chip" href="' + href(r) + '">' + esc(r.n) + '</a>';
            }).join('') +
          '</span>' +
        '</div>');
    });

    if (!groups.length) return '';
    return '<div class="sig-rel">' + groups.join('') +
      '<p class="sig-rel-note">These links show what commonly sits alongside this entry &mdash; ' +
      'they are not a diagnosis, a pathway, or a prediction of what will happen to you.</p></div>';
  };

  /* The card row at the foot of an article — the three closest entries. */
  window.SignalKeepReading = function (d) {
    if (!d || !d.related) return '';
    var picks = [];
    Object.keys(SECTIONS).forEach(function (sec) {
      (d.related[sec] || []).forEach(function (k) {
        var r = lookup(sec, k);
        if (r) picks.push(r);
      });
    });
    if (!picks.length) return '';

    /* One from each section first, so the row is varied rather than three symptoms. */
    var seen = {}, ordered = [];
    picks.forEach(function (r) { if (!seen[r.s]) { seen[r.s] = 1; ordered.push(r); } });
    picks.forEach(function (r) { if (ordered.indexOf(r) === -1) ordered.push(r); });

    return ordered.slice(0, 3).map(function (r) {
      return '<a class="card" href="' + href(r) + '" style="padding:28px;gap:12px">' +
        '<span class="eyebrow">' + SECTIONS[r.s].label + '</span>' +
        '<span style="font-family:var(--display);font-size:30px;line-height:1.1">' + esc(r.n) + '</span>' +
        '<span class="card-body">' + esc(r.m) + '</span></a>';
    }).join('');
  };

  /* ─────────────── read time ─────────────── */

  /* Counted from the entry's own text rather than guessed, at 200 wpm. */
  window.SignalReadTime = function (d) {
    var words = strip(JSON.stringify(d)).split(/\s+/).filter(Boolean).length;
    return Math.max(2, Math.round(words / 200));
  };

  /* ─────────────── missing entry ─────────────── */

  window.SignalNotFound = function (section) {
    var s = SECTIONS[section] || SECTIONS.symptoms;
    return '<div class="answer" style="background:var(--warm);color:var(--ink)">' +
      '<div class="head" style="color:var(--rust)">Entry not found</div>' +
      '<p style="font-size:18px;line-height:1.55">We could not find that ' + s.label.toLowerCase() +
      '. It may have been renamed, or the link may be incomplete.</p>' +
      '<p style="margin-top:8px"><a class="btn btn--dark" href="index.html">Browse all ' +
      s.plural.toLowerCase() + '</a></p></div>';
  };

  /* ─────────────── article chrome ─────────────── */

  window.SignalArticle = {
    /* Call once the article body is in the DOM.
       Builds the TOC from the h2s, tracks which one you're reading, and
       drives the reading-progress bar. */
    init: function () {
      var article = document.getElementById('article');
      var toc     = document.getElementById('toc');
      var bar     = document.getElementById('bar');
      if (!article) return;

      var heads = Array.prototype.slice.call(article.querySelectorAll('h2'));

      if (toc && heads.length) {
        heads.forEach(function (h, i) {
          if (!h.id) h.id = 'sec-' + i;
          var a = document.createElement('a');
          a.href = '#' + h.id;
          a.textContent = h.textContent;
          if (i === 0) a.className = 'is-on';
          toc.appendChild(a);
        });
      } else if (toc) {
        toc.parentNode.style.display = 'none';
      }

      var links = toc ? Array.prototype.slice.call(toc.querySelectorAll('a')) : [];

      function onScroll() {
        if (bar) {
          var doc = document.documentElement;
          var max = doc.scrollHeight - doc.clientHeight;
          bar.style.width = (max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0) + '%';
        }
        if (!links.length) return;
        /* the last heading whose top has passed a quarter of the viewport */
        var idx = 0;
        heads.forEach(function (h, i) {
          if (h.getBoundingClientRect().top <= window.innerHeight * 0.25) idx = i;
        });
        links.forEach(function (a, i) { a.classList.toggle('is-on', i === idx); });
      }

      var ticking = false;
      window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { onScroll(); ticking = false; });
      }, { passive: true });
      onScroll();

      /* Print button, where the template offers one. */
      var printBtn = document.getElementById('printBtn');
      if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

      /* Share — copies the URL, since there is nothing to post to. */
      var shareBtn = document.getElementById('shareBtn');
      if (shareBtn) {
        shareBtn.addEventListener('click', function () {
          var done = function () {
            var old = shareBtn.getAttribute('aria-label');
            shareBtn.setAttribute('aria-label', 'Link copied');
            shareBtn.classList.add('is-on');
            setTimeout(function () {
              shareBtn.setAttribute('aria-label', old);
              shareBtn.classList.remove('is-on');
            }, 1600);
          };
          if (navigator.share) {
            navigator.share({ title: document.title, url: location.href }).catch(function () {});
          } else if (navigator.clipboard) {
            navigator.clipboard.writeText(location.href).then(done, function () {});
          }
        });
      }
    }
  };

})();
