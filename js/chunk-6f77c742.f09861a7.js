(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-6f77c742"],
  {
    3123: function (e, t, n) {},
    "7b62": function (e, t, n) {},
    "7db0": function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        i = n("b727").find,
        c = n("44d2"),
        o = "find",
        a = !0;
      o in [] &&
        Array(1)[o](function () {
          a = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: a },
          {
            find: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
        c(o);
    },
    "9e54": function (e, t, n) {},
    b633: function (e, t, n) {
      "use strict";
      n("fb73");
    },
    c08c: function (e, t, n) {
      "use strict";
      n("3123");
    },
    c66d: function (e, t, n) {
      "use strict";
      n.r(t);
      n("b0c0");
      var r = n("7a23"),
        i = { class: "profile" };
      function c(e, t, n, c, o, a) {
        var s = Object(r["C"])("profile-header"),
          l = Object(r["C"])("profile-body"),
          u = Object(r["C"])("EditProfilePopup");
        return (
          Object(r["u"])(),
          Object(r["g"])("div", i, [
            Object(r["k"])(
              s,
              {
                id: o.userId,
                following: o.following,
                followers: o.followers,
                name: o.name,
                onRefresh: a.getData,
              },
              null,
              8,
              ["id", "following", "followers", "name", "onRefresh"],
            ),
            Object(r["k"])(l),
            e.getEditProfileStatus
              ? (Object(r["u"])(), Object(r["e"])(u, { key: 0 }))
              : Object(r["f"])("", !0),
          ])
        );
      }
      var o = n("1da1"),
        a = n("5530"),
        s = (n("96cf"), { class: "profile-body" }),
        l = Object(r["i"])(
          '<div class="sections"><div class="sections-item active"> Твиты </div><div class="sections-item"> Твиты и ответы </div><div class="sections-item"> Медиа </div><div class="sections-item"> Нравится </div></div>',
          1,
        ),
        u = { key: 0, class: "tweets-wrapper" };
      function d(e, t, n, i, c, o) {
        var a = Object(r["C"])("tweet");
        return (
          Object(r["u"])(),
          Object(r["g"])("div", s, [
            l,
            c.userTweets
              ? (Object(r["u"])(),
                Object(r["g"])("div", u, [
                  (Object(r["u"])(!0),
                  Object(r["g"])(
                    r["a"],
                    null,
                    Object(r["A"])(c.userTweets, function (e) {
                      return (
                        Object(r["u"])(),
                        Object(r["e"])(
                          a,
                          {
                            key: e.id,
                            "tweet-data": e,
                            onDeleteTweet: o.getTweets,
                            onGetTweets: o.getTweets,
                          },
                          null,
                          8,
                          ["tweet-data", "onDeleteTweet", "onGetTweets"],
                        )
                      );
                    }),
                    128,
                  )),
                ]))
              : Object(r["f"])("", !0),
          ])
        );
      }
      var f = n("9257"),
        b = n("5502"),
        p = {
          name: "ProfileBody",
          components: { Tweet: f["a"] },
          data: function () {
            return { userTweets: [] };
          },
          computed: Object(a["a"])({}, Object(b["b"])(["getMyProfileId"])),
          mounted: function () {
            this.getTweets();
          },
          methods: {
            handleTweetDelete: function () {
              this.getTweets();
            },
            getTweets: function () {
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
          },
        };
      n("dad5");
      p.render = d;
      var j = p,
        O = (n("a4d3"), n("e01a"), { key: 0 }),
        h = { class: "profile-cover-pic" },
        m = ["src"],
        w = { class: "profile-header" },
        v = { class: "profile-actions" },
        g = { class: "profile-actions-image" },
        k = ["src"],
        y = { key: 0, class: "profile-actions-edit" },
        P = { class: "profile-info" },
        C = { class: "profile-info-name" },
        R = { class: "profile-info-username" },
        D = { class: "profile-description" },
        I = { class: "profile-created-at" },
        M = ["href"],
        x = Object(r["j"])(" Регистрация: май 2011 г. "),
        T = { class: "profile-follower-counts" },
        F = Object(r["h"])("span", null, "в читаемых", -1),
        U = Object(r["h"])("span", null, "читателя", -1);
      function A(e, t, n, i, c, o) {
        var a,
          s,
          l = Object(r["C"])("base-icon");
        return e.me.id
          ? (Object(r["u"])(),
            Object(r["g"])("header", O, [
              Object(r["h"])("div", h, [
                Object(r["h"])(
                  "img",
                  { src: e.me.profile.pic_cover },
                  null,
                  8,
                  m,
                ),
              ]),
              Object(r["h"])("div", w, [
                Object(r["h"])("div", v, [
                  Object(r["h"])("div", g, [
                    Object(r["h"])("img", { src: o.avatar }, null, 8, k),
                  ]),
                  o.isMe
                    ? Object(r["f"])("", !0)
                    : (Object(r["u"])(),
                      Object(r["g"])("div", y, [
                        o.isFollowing
                          ? (Object(r["u"])(),
                            Object(r["g"])(
                              "div",
                              {
                                key: 0,
                                class: "follow-button",
                                onClick:
                                  t[0] ||
                                  (t[0] = function () {
                                    return (
                                      o.onUnfollowClick &&
                                      o.onUnfollowClick.apply(o, arguments)
                                    );
                                  }),
                              },
                              " Перестать читать ",
                            ))
                          : (Object(r["u"])(),
                            Object(r["g"])(
                              "div",
                              {
                                key: 1,
                                class: "follow-button",
                                onClick:
                                  t[1] ||
                                  (t[1] = function () {
                                    return (
                                      o.onFollowClick &&
                                      o.onFollowClick.apply(o, arguments)
                                    );
                                  }),
                              },
                              " Читать ",
                            )),
                      ])),
                ]),
                Object(r["h"])("div", P, [
                  Object(r["h"])("p", C, Object(r["F"])(n.name), 1),
                  Object(r["h"])("span", R, Object(r["F"])(n.name), 1),
                ]),
                Object(r["h"])(
                  "div",
                  D,
                  Object(r["F"])(e.me.profile.description),
                  1,
                ),
                Object(r["h"])("div", I, [
                  Object(r["h"])("span", null, [
                    Object(r["k"])(l, { icon: "link" }),
                    Object(r["h"])(
                      "a",
                      { href: o.profileWebsite.full_website },
                      Object(r["F"])(o.profileWebsite.website),
                      9,
                      M,
                    ),
                  ]),
                  Object(r["h"])("span", null, [
                    Object(r["k"])(l, { icon: "calendar" }),
                    x,
                  ]),
                ]),
                Object(r["h"])("div", T, [
                  Object(r["h"])("p", null, [
                    Object(r["j"])(
                      Object(r["F"])(
                        null === (a = n.following) || void 0 === a
                          ? void 0
                          : a.length,
                      ) + " ",
                      1,
                    ),
                    F,
                  ]),
                  Object(r["h"])("p", null, [
                    Object(r["j"])(
                      Object(r["F"])(
                        null === (s = n.followers) || void 0 === s
                          ? void 0
                          : s.length,
                      ) + " ",
                      1,
                    ),
                    U,
                  ]),
                ]),
              ]),
            ]))
          : Object(r["f"])("", !0);
      }
      n("a9e3"), n("d3b7"), n("3ca3"), n("ddb0"), n("2b3d"), n("7db0");
      var E = n("c1df"),
        $ = n.n(E),
        H = n("8bac"),
        S = n("7f56"),
        V = n("7424"),
        L = new S["AvatarGenerator"](),
        B = {
          name: "ProfileHeader",
          components: { BaseIcon: H["a"] },
          props: {
            id: Number,
            following: Array,
            followers: Array,
            name: String,
          },
          emits: ["refresh"],
          computed: Object(a["a"])(
            Object(a["a"])(
              {},
              Object(b["b"])({ getMyProfileId: "getMyProfileId", me: "getMe" }),
            ),
            {},
            {
              isMe: function () {
                return this.id === this.getMyProfileId;
              },
              avatar: function () {
                return L.generateRandomAvatar(Number(this.id));
              },
              profileWebsite: function () {
                return {
                  website: new URL(new URL(this.me.profile.website)).host,
                  full_website: this.me.profile.website,
                };
              },
              joinedAtDate: function () {
                return "".concat($()(this.me.createdAt).format("MMM YYYY"));
              },
              isFollowing: function () {
                var e,
                  t = this;
                return null === (e = this.followers) || void 0 === e
                  ? void 0
                  : e.find(function (e) {
                      return e.id === t.getMyProfileId;
                    });
              },
            },
          ),
          methods: {
            moment: $.a,
            onFollowClick: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Object(V["c"])(e.id);
                        case 2:
                          e.$emit("refresh");
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            onUnfollowClick: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Object(V["j"])(e.id);
                        case 2:
                          e.$emit("refresh");
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
          },
        };
      n("dae0");
      B.render = A;
      var W = B,
        _ = function (e) {
          return (
            Object(r["x"])("data-v-52dcc2ce"), (e = e()), Object(r["v"])(), e
          );
        },
        K = { class: "edit-profile-wrapper" },
        Y = { class: "edit-profile-popup-header" },
        q = _(function () {
          return Object(r["h"])(
            "div",
            { class: "heading" },
            [Object(r["h"])("h3", null, "Изменить профиль")],
            -1,
          );
        }),
        G = { class: "submit-button" },
        J = ["disabled"],
        N = { class: "edit-form" },
        z = { class: "edit-form-item" },
        Q = _(function () {
          return Object(r["h"])("label", { for: "name" }, "Имя", -1);
        }),
        X = { class: "edit-form-item" },
        Z = _(function () {
          return Object(r["h"])(
            "label",
            { for: "description" },
            "Описание",
            -1,
          );
        }),
        ee = { class: "edit-form-item" },
        te = _(function () {
          return Object(r["h"])("label", { for: "website" }, "Сайт", -1);
        });
      function ne(e, t, n, i, c, o) {
        var a = Object(r["C"])("BaseIcon");
        return (
          Object(r["u"])(),
          Object(r["g"])(
            "div",
            {
              ref: "popupWrapper",
              class: "edit-profile-popup",
              onClick:
                t[5] ||
                (t[5] = function () {
                  return (
                    o.handleClickOutside &&
                    o.handleClickOutside.apply(o, arguments)
                  );
                }),
              onKeydown:
                t[6] ||
                (t[6] = Object(r["L"])(
                  function (t) {
                    return e.$store.commit("setEditProfileStatus", !1);
                  },
                  ["esc"],
                )),
            },
            [
              Object(r["h"])("div", K, [
                Object(r["h"])("div", Y, [
                  Object(r["h"])(
                    "div",
                    {
                      class: "close-button",
                      onClick:
                        t[0] ||
                        (t[0] = function (t) {
                          return e.$store.commit("setEditProfileStatus", !1);
                        }),
                    },
                    [Object(r["k"])(a, { icon: "close" })],
                  ),
                  q,
                  Object(r["h"])("div", G, [
                    Object(r["h"])(
                      "button",
                      {
                        disabled: !o.IsStringsValid || !o.IsURLValid,
                        onClick:
                          t[1] ||
                          (t[1] = function () {
                            return (
                              o.submitHandler &&
                              o.submitHandler.apply(o, arguments)
                            );
                          }),
                      },
                      " Сохранить ",
                      8,
                      J,
                    ),
                  ]),
                ]),
                Object(r["h"])("div", N, [
                  Object(r["h"])("div", z, [
                    Q,
                    Object(r["K"])(
                      Object(r["h"])(
                        "input",
                        {
                          id: "name",
                          "onUpdate:modelValue":
                            t[2] ||
                            (t[2] = function (e) {
                              return (c.userData.name = e);
                            }),
                          type: "text",
                          required: "",
                        },
                        null,
                        512,
                      ),
                      [[r["H"], c.userData.name]],
                    ),
                  ]),
                  Object(r["h"])("div", X, [
                    Z,
                    Object(r["K"])(
                      Object(r["h"])(
                        "input",
                        {
                          id: "description",
                          "onUpdate:modelValue":
                            t[3] ||
                            (t[3] = function (e) {
                              return (c.userData.description = e);
                            }),
                          type: "text",
                          required: "",
                        },
                        null,
                        512,
                      ),
                      [[r["H"], c.userData.description]],
                    ),
                  ]),
                  Object(r["h"])("div", ee, [
                    te,
                    Object(r["K"])(
                      Object(r["h"])(
                        "input",
                        {
                          id: "website",
                          "onUpdate:modelValue":
                            t[4] ||
                            (t[4] = function (e) {
                              return (c.userData.website = e);
                            }),
                          type: "url",
                          required: "",
                        },
                        null,
                        512,
                      ),
                      [[r["H"], c.userData.website]],
                    ),
                  ]),
                ]),
              ]),
            ],
            544,
          )
        );
      }
      var re = {
        name: "EditProfilePopup",
        components: { BaseIcon: H["a"] },
        data: function () {
          return { userData: { name: "", description: "", website: "" } };
        },
        computed: Object(a["a"])(
          Object(a["a"])({}, Object(b["b"])(["getMe"])),
          {},
          {
            IsStringsValid: function () {
              return (
                this.userData.name.length > 1 &&
                this.userData.description.length > 2
              );
            },
            IsURLValid: function () {
              try {
                return new URL(this.userData.website), !0;
              } catch (e) {
                return !1;
              }
            },
          },
        ),
        created: function () {
          this.userData = {
            name: this.getMe.profile.name,
            description: this.getMe.profile.description,
            website: this.getMe.profile.website,
          };
        },
        methods: {
          submitHandler: function () {
            var e = this;
            return Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            e.$store.dispatch(
                              "setMyInfo",
                              Object(a["a"])({}, e.userData),
                            )
                          );
                        case 3:
                          t.next = 8;
                          break;
                        case 5:
                          (t.prev = 5),
                            (t.t0 = t["catch"](0)),
                            e.$notification({
                              type: "error",
                              message: "Error when editing profile",
                            });
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 5]],
                );
              }),
            )();
          },
          handleClickOutside: function (e) {
            var t = { target: e.target, ref: this.$refs.popupWrapper };
            t.target === t.ref &&
              this.$store.commit("setEditProfileStatus", !1);
          },
        },
      };
      n("b633");
      (re.render = ne), (re.__scopeId = "data-v-52dcc2ce");
      var ie = re,
        ce = {
          name: "ProfileView",
          components: {
            ProfileBody: j,
            ProfileHeader: W,
            EditProfilePopup: ie,
          },
          data: function () {
            return { userId: null, following: [], followers: [], name: "" };
          },
          computed: Object(a["a"])(
            {},
            Object(b["b"])(["getMyProfileId", "getEditProfileStatus"]),
          ),
          mounted: function () {
            var e = this;
            return Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.getData();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )();
          },
          methods: {
            getData: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r, i, c, o;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r =
                              null === (n = e.$route) || void 0 === n
                                ? void 0
                                : n.params),
                            (i = r.profileId),
                            (t.next = 3),
                            Object(V["f"])(i)
                          );
                        case 3:
                          (c = t.sent),
                            (o = c.data),
                            (e.userId =
                              null === o || void 0 === o ? void 0 : o.user.id),
                            (e.following =
                              null === o || void 0 === o
                                ? void 0
                                : o.user.following),
                            (e.followers =
                              null === o || void 0 === o
                                ? void 0
                                : o.user.followers),
                            (e.name =
                              null === o || void 0 === o
                                ? void 0
                                : o.user.name);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
          },
        };
      n("c08c");
      ce.render = c;
      t["default"] = ce;
    },
    dad5: function (e, t, n) {
      "use strict";
      n("9e54");
    },
    dae0: function (e, t, n) {
      "use strict";
      n("7b62");
    },
    fb73: function (e, t, n) {},
  },
]);
//# sourceMappingURL=chunk-6f77c742.f09861a7.js.map
