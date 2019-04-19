(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    177: function(e, a, t) {
      e.exports = t(400);
    },
    368: function(e, a, t) {},
    400: function(e, a, t) {
      "use strict";
      t.r(a);
      var s = t(0),
        i = t.n(s),
        n = t(166),
        c = t.n(n),
        l = (t(182), t(368), t(47)),
        r = t(23),
        m = t(43),
        o = t(36),
        u = t(35),
        d = t(37),
        p = t(59),
        v = t(22),
        E = t.n(v),
        f = t(89),
        w = t.n(f);
      function b(e) {
        var a = e.children,
          t = e.to,
          s = e.main,
          n = e.feature,
          c = e.disabled;
        return i.a.createElement(
          l.b,
          {
            to: t,
            disabled: c,
            onClick: function(e) {
              c && e.preventDefault();
            },
            className: E()(
              "w-melissa-musique",
              "c-link",
              ["-main", !c && s],
              ["-feature", !c && !s && n],
              ["-disabled", c]
            )
          },
          a
        );
      }
      b.defaultProps = { disabled: !1, feature: !1, main: !1 };
      var g = b;
      var _ = function() {
          return i.a.createElement(
            "section",
            { className: "w-melissa-musique c-biography-tease o-wrapper o-section" },
            i.a.createElement(
              "div",
              { className: "o-layout -gutter" },
              i.a.createElement(
                "article",
                { className: "o-layout_item u-1/2" },
                i.a.createElement("h1", { className: "o-h1" }, "M\xe9lissa"),
                i.a.createElement("h2", { className: "o-h2" }, "Professeure de piano"),
                i.a.createElement(
                  "p",
                  { className: "o-p" },
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ),
                i.a.createElement(
                  "p",
                  { className: "o-p" },
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ),
                i.a.createElement(g, { to: "/error", main: !0 }, "En savoir plus")
              ),
              i.a.createElement(
                "article",
                { className: "o-layout_item u-1/2" },
                i.a.createElement(
                  w.a,
                  { bottom: !0 },
                  i.a.createElement(
                    "div",
                    { className: E()("w-melissa-musique", "c-biography-tease_profile") },
                    i.a.createElement("img", {
                      src: "./ws_melissa_main/assets//melissa-bissonnette_cours-de-musique_piano.jpg",
                      alt: "M\xe9lissa Bissonnette | Professeure de piano et de violon",
                      className: "w-melissa-musique c-biography-tease_profile_image"
                    })
                  )
                )
              )
            )
          );
        },
        h = t(14),
        N = t(169),
        q = t.n(N),
        y = t(42),
        j = { mass: 5, tension: 2e3, friction: 300 };
      var O = function(e) {
          var a = e.show,
            t = e.className,
            s = e.content,
            n = Object(y.b)({ opacity: a ? 1 : 0, config: j });
          return i.a.createElement(
            y.a.p,
            { key: s, className: "".concat(t, "_description"), style: n },
            s
          );
        },
        k = t(170),
        x = t(176),
        S = { mass: 5, tension: 2250, friction: 350 };
      function I(e) {
        var a = e.show,
          t = e.title,
          s = e.titleHeight,
          n = e.xOffset,
          c = e.className,
          l = Object(y.c)(t.length, {
            config: S,
            opacity: a ? 1 : 0,
            x: a ? 0 : n,
            height: a ? s : 0,
            from: { opacity: 0, x: n, height: 0 }
          });
        return i.a.createElement(
          "h1",
          { className: "".concat(c, "_title") },
          l.map(function(e, a) {
            var n = e.x,
              l = Object(x.a)(e, ["x"]);
            return i.a.createElement(
              "span",
              {
                key: "animated-title-".concat(a),
                className: "".concat(c, "_title_span-wrapper"),
                style: { height: "".concat(s, "px") }
              },
              i.a.createElement(
                y.a.span,
                {
                  className: "".concat(c, "_title_text"),
                  style: Object(k.a)({}, l, {
                    transform: n.interpolate(function(e) {
                      return "translate3d(0,".concat(e, "px,0)");
                    })
                  })
                },
                t[a]
              )
            );
          })
        );
      }
      I.defaultProps = { titleHeight: 80, xOffset: 20 };
      var T = I,
        C = t(171),
        D = t.n(C);
      function M(e) {
        var a = e.className,
          t = e.main;
        return i.a.createElement(
          "div",
          { className: E()("w-melissa-musique", "c-animated-music-note", a, ["-main", t]) },
          i.a.createElement(D.a, {
            className: "w-melissa-musique c-animated-music-note_icon",
            color: "current"
          })
        );
      }
      M.defaultProps = { main: !1, className: "" };
      var U = M,
        L = 300,
        P = 1e4,
        B = 2 * L,
        R = P - 2 * L,
        F = 2 * L;
      var z = function(e) {
          var a = e.cKey,
            t = e.title,
            n = e.description,
            c = e.imageUrl,
            l = Object(s.useState)(!1),
            r = Object(h.a)(l, 2),
            m = r[0],
            o = r[1],
            u = Object(s.useState)(!1),
            d = Object(h.a)(u, 2),
            p = d[0],
            v = d[1];
          return (
            Object(s.useEffect)(function() {
              var e = setTimeout(function() {
                  o(!0);
                }, B),
                a = setTimeout(function() {
                  v(!0);
                }, B + F),
                t = setTimeout(function() {
                  o(!1), v(!1);
                }, R);
              return function() {
                clearTimeout(e), clearTimeout(a), clearTimeout(t);
              };
            }, []),
            i.a.createElement(
              "div",
              {
                key: a,
                className: "w-melissa-musique c-home-header_slide",
                style: { backgroundImage: "url('".concat(c, "')") }
              },
              i.a.createElement(
                "div",
                { className: "w-melissa-musique c-home-header_slide_content o-wrapper" },
                i.a.createElement(T, {
                  show: m,
                  title: t,
                  titleHeight: 55,
                  className: "w-melissa-musique c-home-header_slide"
                }),
                i.a.createElement(O, {
                  show: p,
                  className: "w-melissa-musique c-home-header_slide",
                  content: n
                })
              )
            )
          );
        },
        H = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "MISSING_ID",
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "MISSING_DESCRIPTION",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "MISSING_URL",
            i = ["MISSING_TITLE"];
          return (
            "string" === typeof a || a instanceof String
              ? (i = [a])
              : a instanceof Array && a.length > 0 && (i = a),
            {
              id: e,
              title: i.map(function(e) {
                return e.toUpperCase();
              }),
              description: t,
              url: s
            }
          );
        },
        G = t(175),
        Y = t.n(G),
        A = [
          H(
            "home_slide_spectacle",
            ["Spectacle", "devant public"],
            "Participez chaque ann\xe9e au concert annuel de prestation des \xe9tudiants dans une salle de spectacle",
            "./ws_melissa_main/assets//melissa-bissonnette_concert-piano-et-violon.jpg"
          ),
          H(
            "home_slide_cours",
            ["Des cours adapt\xe9s", "\xe0 votre niveau"],
            "Des cours personnalis\xe9s en fonction de votre niveau et de vos objectifs musicaux",
            "./ws_melissa_main/assets//melissa-bissonnette_cours-debutant-a-avance.jpg"
          ),
          H(
            "home_slide_cours-2",
            ["Pour toute la famille"],
            i.a.createElement(
              s.Fragment,
              null,
              i.a.createElement(
                "span",
                { style: { display: "inline-block" } },
                "Tout le monde \xe0 le droit d'apprendre!"
              ),
              i.a.createElement(Y.a, {
                style: {
                  display: "inline-block",
                  color: "rgb(255, 65, 65)",
                  position: "relative",
                  left: "10px",
                  bottom: "3px",
                  stroke: "#b03434",
                  strokeWidth: "120px"
                },
                color: "current"
              })
            ),
            "./ws_melissa_main/assets//melissa-bissonnette_toute-la-famille.jpg"
          )
        ];
      var J = function(e) {
        var a = e.slideIndex,
          t = e.setSlideIndex;
        return i.a.createElement(
          "div",
          { className: "w-melissa-musique c-home-header_slider_indicators" },
          A.map(function(e, s) {
            return i.a.createElement("button", {
              key: "".concat(e.id, "-slide-indicator"),
              type: "button",
              onClick: function() {
                return t(s);
              },
              className: E()("w-melissa-musique c-home-header_slider_indicator", [
                "-active",
                s === a
              ])
            });
          })
        );
      };
      var K = function() {
        var e = Object(s.useState)(0),
          a = Object(h.a)(e, 2),
          t = a[0],
          n = a[1],
          c = Object(y.d)(
            A[t],
            function(e) {
              return e.id;
            },
            { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }
          );
        return (
          q()(function() {
            n((t + 1) % A.length);
          }, P),
          i.a.createElement(
            "header",
            { className: "w-melissa-musique c-home-header" },
            i.a.createElement(
              "ul",
              { className: "w-melissa-musique c-home-header_slider" },
              c.map(function(e) {
                var a = e.item,
                  t = e.key,
                  s = e.props;
                return i.a.createElement(
                  y.a.li,
                  { key: t, className: "w-melissa-musique c-home-header_slider_item", style: s },
                  i.a.createElement(z, {
                    cKey: "".concat(a.id, "-slide"),
                    title: a.title,
                    description: a.description,
                    imageUrl: a.url
                  })
                );
              })
            ),
            i.a.createElement(J, { slideIndex: t, setSlideIndex: n })
          )
        );
      };
      var V = function() {
        var e = Object(s.useState)(!1),
          a = Object(h.a)(e, 2),
          t = a[0],
          n = a[1];
        return (
          Object(s.useEffect)(function() {
            var e = document.documentElement,
              a = function() {
                var a = (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
                n(!(a <= 60));
              };
            return (
              window.addEventListener("scroll", a),
              function() {
                return window.removeEventListener("scroll", a);
              }
            );
          }, []),
          i.a.createElement(
            "nav",
            { className: E()("w-melissa-musique", "c-nav", "o-wrapper", ["-shrink", t]) },
            i.a.createElement(
              "ul",
              { className: "w-melissa-musique c-nav_list" },
              i.a.createElement(
                "li",
                { className: "w-melissa-musique c-nav_item" },
                i.a.createElement(
                  l.b,
                  { className: "w-melissa-musique c-nav_link", to: "/" },
                  "Accueil"
                )
              ),
              i.a.createElement(
                "li",
                { className: "w-melissa-musique c-nav_item" },
                i.a.createElement(
                  l.b,
                  { className: "w-melissa-musique c-nav_link", to: "/info" },
                  "Informations"
                )
              ),
              i.a.createElement(
                "li",
                { className: "w-melissa-musique c-nav_item" },
                i.a.createElement(
                  "a",
                  { className: "w-melissa-musique c-nav_link -feature", href: "#register" },
                  "Inscription"
                )
              )
            )
          )
        );
      };
      var W = function() {
        return i.a.createElement(
          "footer",
          { className: "w-melissa-musique c-footer" },
          i.a.createElement(U, null),
          i.a.createElement(
            "p",
            { className: "w-melissa-musique c-footer_copyright" },
            "M\xe9lissa Bissonnette \xa9 2019 | melissa@melmusique.com"
          )
        );
      };
      var Q = function(e) {
          var a = e.children;
          return i.a.createElement(
            "div",
            { className: "w-melissa-musique c-page" },
            i.a.createElement(V, null),
            a,
            i.a.createElement(W, null)
          );
        },
        X = t(48);
      var Z = function() {
        return i.a.createElement(
          "div",
          { className: "w-melissa-musique c-register_app-preview" },
          i.a.createElement(
            "div",
            { className: "w-melissa-musique c-register_app-preview_window" },
            i.a.createElement(
              "div",
              { className: "w-melissa-musique c-register_app-preview_header" },
              i.a.createElement("span", {
                className: "w-melissa-musique c-register_app-preview_btn -red"
              }),
              i.a.createElement("span", {
                className: "w-melissa-musique c-register_app-preview_btn -yellow"
              }),
              i.a.createElement("span", {
                className: "w-melissa-musique c-register_app-preview_btn -green"
              })
            ),
            i.a.createElement(
              "div",
              { className: "w-melissa-musique c-register_app-preview_body" },
              "asd"
            )
          )
        );
      };
      var $ = function() {
        return i.a.createElement(
          "section",
          { id: "register", className: "w-melissa-musique c-register o-wrapper o-section" },
          i.a.createElement(
            "div",
            { className: "w-melissa-musique o-layout -gutter" },
            i.a.createElement(
              "div",
              { className: "w-melissa-musique o-layout_item u-1/2" },
              i.a.createElement(X.Fade, { up: !0 }, i.a.createElement(Z, null))
            ),
            i.a.createElement(
              "div",
              { className: "w-melissa-musique o-layout_item u-1/2" },
              i.a.createElement("h1", { className: "w-melissa-musique o-h1" }, "Rendez-vous"),
              i.a.createElement(
                "h2",
                { className: "w-melissa-musique o-h2" },
                "Plateforme en ligne"
              ),
              i.a.createElement(
                "p",
                { className: "w-melissa-musique o-p" },
                "Une plateforme en ligne sera bient\xf4t disponible pour simplifier la prise de rendez-vous"
              ),
              i.a.createElement(
                "p",
                { className: "w-melissa-musique o-p" },
                "En attendant, vous pouvez communiquer avec moi \xe0 l'aide de l'adresse courriel suivante:"
              ),
              i.a.createElement(
                "p",
                { className: "w-melissa-musique o-p" },
                i.a.createElement("b", null, "melissa@melmusique.com")
              ),
              i.a.createElement(
                g,
                { to: "/todo", feature: !0, disabled: !0 },
                "Bient\xf4t disponible"
              )
            )
          )
        );
      };
      var ee = function(e) {
          var a = e.id,
            t = e.show,
            n = e.title,
            c = e.description,
            l = e.imageUrl,
            r = Object(s.useState)(!1),
            m = Object(h.a)(r, 2),
            o = m[0],
            u = m[1];
          return (
            Object(s.useEffect)(function() {
              !o && t
                ? setTimeout(function() {
                    u(!0);
                  }, 0.6 * F)
                : o && !t && u(!1);
            }),
            i.a.createElement(
              "div",
              {
                key: a,
                className: "w-melissa-musique c-services-tease_slide-wrapper",
                style: { backgroundImage: "url('".concat(l, "')") }
              },
              i.a.createElement(
                "div",
                { className: "w-melissa-musique c-services-tease_slide" },
                t &&
                  i.a.createElement(
                    "div",
                    { className: "w-melissa-musique c-services-tease_slide_content" },
                    i.a.createElement(T, {
                      show: t,
                      className: "w-melissa-musique c-services-tease_slide",
                      title: n,
                      titleHeight: 38
                    }),
                    i.a.createElement(O, {
                      show: o,
                      className: "w-melissa-musique c-services-tease_slide",
                      content: c
                    })
                  )
              )
            )
          );
        },
        ae = [
          H(
            "services_cours-piano",
            ["Cours", "de piano"],
            "Des cours personnalis\xe9s, d\xe9butant \xe0 avanc\xe9, en fonction de votre niveau et de vos objectifs",
            "./ws_melissa_main/assets//melissa-bissonnette_concert-piano-et-violon.jpg"
          ),
          H(
            "services_spectacle",
            ["Spectacle", "devant public"],
            "Venez participer et \xe9couter le progr\xe8s de d'autres \xe9tudiants lors des deux concerts annuels organis\xe9s pour vous",
            "./ws_melissa_main/assets//melissa-bissonnette_concert-devant-public.jpg"
          ),
          H(
            "services_cours-violon",
            ["Cours", "de violon"],
            "Le violon vous int\xe9resse? Contactez-moi pour plus d'information!",
            "./ws_melissa_main/assets//melissa-bissonnette_cours-de-violon.jpg"
          )
        ];
      var te = function() {
        var e = Object(s.useState)(null),
          a = Object(h.a)(e, 2),
          t = a[0],
          n = a[1];
        return i.a.createElement(
          "section",
          { className: "w-melissa-musique c-services-tease" },
          i.a.createElement(
            "div",
            {
              className: "w-melissa-musique c-services-tease_list",
              onMouseLeave: function() {
                return n(null);
              }
            },
            ae.map(function(e, a) {
              var s = e.id,
                c = e.title,
                l = e.description,
                r = e.url;
              return i.a.createElement(
                "div",
                {
                  key: s,
                  onFocus: function() {
                    return n(a);
                  },
                  onMouseEnter: function() {
                    return n(a);
                  },
                  className: E()("w-melissa-musique", "c-services-tease_item", ["-active", a === t])
                },
                i.a.createElement(ee, {
                  id: s,
                  show: a === t,
                  title: c,
                  description: l,
                  imageUrl: r
                })
              );
            })
          )
        );
      };
      var se = function() {
        return i.a.createElement(
          Q,
          null,
          i.a.createElement(K, null),
          i.a.createElement(_, null),
          i.a.createElement(te, null),
          i.a.createElement($, null)
        );
      };
      var ie = function() {
        var e = Object(s.useState)(0),
          a = Object(h.a)(e, 2),
          t = a[0],
          n = a[1],
          c = Object(s.useState)(0.6),
          l = Object(h.a)(c, 2),
          r = l[0],
          m = l[1],
          o = Object(s.useState)(!1),
          u = Object(h.a)(o, 2),
          d = u[0],
          p = u[1];
        return (
          Object(s.useEffect)(function() {
            var e = setTimeout(function() {
                p(!d);
              }, 2 * L),
              a = document.documentElement,
              t = function() {
                var e = (window.pageYOffset || a.scrollTop) - (a.clientTop || 0);
                e <= 60
                  ? (m(0.6), n(0))
                  : e < 1500 && (m((0.6 + e / 1500).toFixed(2)), n((e - 60) / 3));
              };
            return (
              window.addEventListener("scroll", t),
              function() {
                clearTimeout(e), window.removeEventListener("scroll", t);
              }
            );
          }, []),
          i.a.createElement(
            "header",
            { className: "w-melissa-musique c-biography_header" },
            i.a.createElement(
              "div",
              {
                className: "w-melissa-musique c-biography_header_content",
                style: { backgroundColor: "rgba(0, 0, 0, ".concat(r, ")") }
              },
              i.a.createElement(
                "div",
                { style: { position: "relative", transform: "translateY(".concat(t, "px)") } },
                i.a.createElement(T, {
                  show: !0,
                  className: "w-melissa-musique c-biography_header",
                  title: ["M\xe9lissa", "Bissonnette"],
                  titleHeight: 65
                }),
                i.a.createElement(
                  X.Fade,
                  { left: !0, cascade: !0, when: d },
                  i.a.createElement(
                    "p",
                    { className: "w-melissa-musique c-biography_header_description" },
                    "Passionn\xe9e par l'enseignement"
                  )
                )
              )
            )
          )
        );
      };
      var ne = function() {
        return i.a.createElement("div", { className: "c-biography" }, i.a.createElement(ie, null));
      };
      function ce(e) {
        var a = e.imageRight,
          t = e.imageUrl,
          n = e.imageDescription,
          c = e.title,
          l = e.subtitle,
          r = e.content,
          m = i.a.createElement(
            X.Fade,
            { up: !0 },
            i.a.createElement("img", {
              className: "w-melissa-musique c-services_article_img",
              src: t,
              alt: n
            }),
            ";"
          ),
          o = i.a.createElement(
            s.Fragment,
            null,
            i.a.createElement("h1", { className: "w-melissa-musique c-services_title o-h1" }, c),
            i.a.createElement("h2", { className: "w-melissa-musique c-services_subtitle o-h2" }, l),
            r.map(function(e) {
              return i.a.createElement("p", { key: e, className: "o-p" }, e);
            })
          );
        return i.a.createElement(
          "article",
          { className: "w-melissa-musique c-services_article o-layout o-wrapper" },
          i.a.createElement(
            "div",
            { className: "o-layout_item u-1/2" },
            i.a.createElement(
              "div",
              { className: "w-melissa-musique c-services_article_view" },
              a ? o : m
            )
          ),
          i.a.createElement(
            "div",
            { className: "o-layout_item u-1/2" },
            i.a.createElement(
              "div",
              { className: "w-melissa-musique c-services_article_view" },
              a ? m : o
            )
          )
        );
      }
      ce.defaultProps = { imageRight: !1 };
      var le = ce;
      var re = function() {
        return i.a.createElement(
          "section",
          { className: "w-melissa-musique c-services" },
          i.a.createElement(le, {
            title: "Cours de Piano",
            subtitle: "D\xe9butant \xe0 avanc\xe9",
            content: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            imageUrl:
              "./ws_melissa_main/assets//melissa-bissonnette_cours-de-piano_debutant-intermaidiare-avance.png",
            imageDescription: "M\xe9lissa Bissonnette | Cours de piano - D\xe9butant \xe0 avanc\xe9"
          }),
          i.a.createElement(le, {
            imageRight: !0,
            title: "Cours de Violon",
            subtitle: "D\xe9butant",
            content: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            imageUrl: "./ws_melissa_main/assets//melissa-bissonnette_cours-de-violon_debutant.png",
            imageDescription: "M\xe9lissa Bissonnette | Cours de piano - D\xe9butant \xe0 avanc\xe9"
          }),
          i.a.createElement(le, {
            title: "R\xe9citals",
            subtitle: "Un peu de stresse :)",
            content: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            imageUrl: "./ws_melissa_main/assets//melissa-bissonnette_recitals.png",
            imageDescription: "M\xe9lissa Bissonnette | Cours de piano - D\xe9butant \xe0 avanc\xe9"
          })
        );
      };
      var me = function() {
        return i.a.createElement(
          Q,
          null,
          i.a.createElement(ne, null),
          i.a.createElement(re, null),
          i.a.createElement($, null)
        );
      };
      var oe = function() {
        return i.a.createElement(
          "div",
          { className: "w-melissa-musique c-error" },
          i.a.createElement(
            X.Bounce,
            { big: !0 },
            i.a.createElement(
              "div",
              null,
              i.a.createElement(
                "h1",
                { className: "w-melissa-musique c-error_title o-h1" },
                "Oops!"
              ),
              i.a.createElement(
                "h2",
                { className: "w-melissa-musique c-error_subtitle o-h2" },
                "Cette page n'est pas disponible"
              ),
              i.a.createElement(
                g,
                { className: "w-melissa-musique c-error_link", to: "/", main: !0 },
                "Retourner \xe0 l'accueil"
              )
            )
          )
        );
      };
      var ue = function() {
          return i.a.createElement(oe, null);
        },
        de = (function(e) {
          function a() {
            return Object(r.a)(this, a), Object(o.a)(this, Object(u.a)(a).apply(this, arguments));
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function() {
                  return i.a.createElement(
                    p.c,
                    null,
                    i.a.createElement(p.a, { exact: !0, path: "/", component: se }),
                    i.a.createElement(p.a, { exact: !0, path: "/info", component: me }),
                    i.a.createElement(p.a, { path: "/:error", component: ue })
                  );
                }
              }
            ]),
            a
          );
        })(s.Component);
      var pe = function() {
        return i.a.createElement(
          "div",
          { className: "w-melissa-musique c-app" },
          i.a.createElement(l.a, null, i.a.createElement(de, null))
        );
      };
      c.a.render(i.a.createElement(pe, null), document.getElementById("root"));
    }
  },
  [[177, 1, 2]]
]);
//# sourceMappingURL=main.f6ca3ab1.chunk.js.map
