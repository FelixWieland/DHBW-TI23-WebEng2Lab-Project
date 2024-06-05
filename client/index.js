"use strict";
var api = (() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    $Album: () => $Album,
    $Artist: () => $Artist,
    $Genre: () => $Genre,
    $Song: () => $Song,
    createAlbum: () => createAlbum,
    createArtist: () => createArtist,
    createClient: () => createClient,
    createGenre: () => createGenre,
    createSong: () => createSong,
    deleteAlbum: () => deleteAlbum,
    deleteGenre: () => deleteGenre,
    deleteSong: () => deleteSong,
    deleteSong1: () => deleteSong1,
    handleAlbumCoverUpload: () => handleAlbumCoverUpload,
    handleArtistProfileUpload: () => handleArtistProfileUpload,
    handleSongAudioUpload: () => handleSongAudioUpload,
    handleSongCoverUpload: () => handleSongCoverUpload,
    initDevClient: () => initDevClient,
    readAlbum: () => readAlbum,
    readAlbums: () => readAlbums,
    readArtist: () => readArtist,
    readArtists: () => readArtists,
    readGenre: () => readGenre,
    readGenres: () => readGenres,
    readInfo: () => readInfo,
    readSong: () => readSong,
    readSongs: () => readSongs,
    readSongsOfArtist: () => readSongsOfArtist,
    readSongsOfGenre: () => readSongsOfGenre,
    recommendationsBasedOnSong: () => recommendationsBasedOnSong,
    serveAlbumCover: () => serveAlbumCover,
    serveArtistProfile: () => serveArtistProfile,
    serveSongAudio: () => serveSongAudio,
    serveSongCover: () => serveSongCover,
    updateAlbum: () => updateAlbum,
    updateGenre: () => updateGenre,
    updatePost: () => updatePost,
    updateSong: () => updateSong
  });

  // node_modules/@hey-api/client-fetch/dist/node/index.mjs
  var e = /\{[^{}]+\}/g;
  var t = ({ allowReserved: e2, name: t2, value: r2 }) => {
    if (null == r2) return "";
    if ("object" == typeof r2) throw new Error("Deeply-nested arrays/objects aren\u2019t supported. Provide your own `querySerializer()` to handle these.");
    return `${t2}=${e2 ? r2 : encodeURIComponent(r2)}`;
  };
  var r = ({ allowReserved: e2, explode: r2, name: a2, style: s2, value: n2 }) => {
    if (!r2) {
      const t2 = (e2 ? n2 : n2.map((e3) => encodeURIComponent(e3))).join(((e3) => {
        switch (e3) {
          case "form":
          default:
            return ",";
          case "pipeDelimited":
            return "|";
          case "spaceDelimited":
            return "%20";
        }
      })(s2));
      switch (s2) {
        case "label":
          return `.${t2}`;
        case "matrix":
          return `;${a2}=${t2}`;
        case "simple":
          return t2;
        default:
          return `${a2}=${t2}`;
      }
    }
    const o2 = ((e3) => {
      switch (e3) {
        case "label":
          return ".";
        case "matrix":
          return ";";
        case "simple":
          return ",";
        default:
          return "&";
      }
    })(s2), l2 = n2.map((r3) => "label" === s2 || "simple" === s2 ? e2 ? r3 : encodeURIComponent(r3) : t({ allowReserved: e2, name: a2, value: r3 })).join(o2);
    return "label" === s2 || "matrix" === s2 ? o2 + l2 : l2;
  };
  var a = ({ allowReserved: e2, explode: r2, name: a2, style: s2, value: n2 }) => {
    if ("deepObject" !== s2 && !r2) {
      let t2 = [];
      Object.entries(n2).forEach(([r4, a3]) => {
        t2 = [...t2, r4, e2 ? a3 : encodeURIComponent(a3)];
      });
      const r3 = t2.join(",");
      switch (s2) {
        case "form":
          return `${a2}=${r3}`;
        case "label":
          return `.${r3}`;
        case "matrix":
          return `;${a2}=${r3}`;
        default:
          return r3;
      }
    }
    const o2 = ((e3) => {
      switch (e3) {
        case "label":
          return ".";
        case "matrix":
          return ";";
        case "simple":
          return ",";
        default:
          return "&";
      }
    })(s2), l2 = Object.entries(n2).map(([r3, n3]) => t({ allowReserved: e2, name: "deepObject" === s2 ? `${a2}[${r3}]` : r3, value: n3 })).join(o2);
    return "label" === s2 || "matrix" === s2 ? o2 + l2 : l2;
  };
  var s = ({ allowReserved: e2, array: s2, object: n2 } = {}) => (o2) => {
    let l2 = [];
    if (o2 && "object" == typeof o2) for (const i2 in o2) {
      const c2 = o2[i2];
      null != c2 && (l2 = Array.isArray(c2) ? [...l2, r(__spreadValues({ allowReserved: e2, explode: true, name: i2, style: "form", value: c2 }, s2))] : "object" != typeof c2 ? [...l2, t({ allowReserved: e2, name: i2, value: c2 })] : [...l2, a(__spreadValues({ allowReserved: e2, explode: true, name: i2, style: "deepObject", value: c2 }, n2))]);
    }
    return l2.join("&");
  };
  var n = ({ baseUrl: s2, path: n2, query: o2, querySerializer: l2, url: i2 }) => {
    let c2 = s2 + (i2.startsWith("/") ? i2 : `/${i2}`);
    n2 && (c2 = (({ path: s3, url: n3 }) => {
      let o3 = n3;
      const l3 = n3.match(e);
      if (l3) for (const e2 of l3) {
        let n4 = false, l4 = e2.substring(1, e2.length - 1), i3 = "simple";
        l4.endsWith("*") && (n4 = true, l4 = l4.substring(0, l4.length - 1)), l4.startsWith(".") ? (l4 = l4.substring(1), i3 = "label") : l4.startsWith(";") && (l4 = l4.substring(1), i3 = "matrix");
        const c3 = s3[l4];
        null != c3 && (o3 = Array.isArray(c3) ? o3.replace(e2, r({ explode: n4, name: l4, style: i3, value: c3 })) : "object" != typeof c3 ? "matrix" !== i3 ? o3.replace(e2, "label" === i3 ? `.${c3}` : c3) : o3.replace(e2, `;${t({ name: l4, value: c3 })}`) : o3.replace(e2, a({ explode: n4, name: l4, style: i3, value: c3 })));
      }
      return o3;
    })({ path: n2, url: c2 }));
    let u2 = o2 ? l2(o2) : "";
    return u2.startsWith("?") && (u2 = u2.substring(1)), u2 && (c2 += `?${u2}`), c2;
  };
  var o = (...e2) => {
    const t2 = new Headers();
    for (const r2 of e2) {
      if (!r2 || "object" != typeof r2) continue;
      const e3 = r2 instanceof Headers ? r2.entries() : Object.entries(r2);
      for (const [r3, a2] of e3) if (null === a2) t2.delete(r3);
      else if (Array.isArray(a2)) for (const e4 of a2) t2.append(r3, e4);
      else void 0 !== a2 && t2.set(r3, "object" == typeof a2 ? JSON.stringify(a2) : a2);
    }
    return t2;
  };
  var l = class {
    constructor() {
      __publicField(this, "_fns");
      this._fns = [];
    }
    eject(e2) {
      const t2 = this._fns.indexOf(e2);
      -1 !== t2 && (this._fns = [...this._fns.slice(0, t2), ...this._fns.slice(t2 + 1)]);
    }
    use(e2) {
      this._fns = [...this._fns, e2];
    }
  };
  var i = () => ({ request: new l(), response: new l() });
  var c = (e2, t2, r2) => {
    "string" == typeof r2 || r2 instanceof Blob ? e2.append(t2, r2) : e2.append(t2, JSON.stringify(r2));
  };
  var u = { bodySerializer: (e2) => {
    const t2 = new FormData();
    return Object.entries(e2).forEach(([e3, r2]) => {
      null != r2 && (Array.isArray(r2) ? r2.forEach((r3) => c(t2, e3, r3)) : c(t2, e3, r2));
    }), t2;
  } };
  var d = { bodySerializer: (e2) => JSON.stringify(e2) };
  var p = s({ allowReserved: false, array: { explode: true, style: "form" }, object: { explode: true, style: "deepObject" } });
  var f = { "Content-Type": "application/json" };
  var h = () => __spreadProps(__spreadValues({}, d), { baseUrl: "", fetch: globalThis.fetch, global: true, headers: f, querySerializer: p });
  var b = h();
  var m = i();
  var y = (e2) => {
    var _a;
    const t2 = h(), r2 = __spreadValues(__spreadValues({}, t2), e2);
    ((_a = r2.baseUrl) == null ? void 0 : _a.endsWith("/")) && (r2.baseUrl = r2.baseUrl.substring(0, r2.baseUrl.length - 1)), r2.headers = o(t2.headers, r2.headers), r2.global && (b = __spreadValues({}, r2));
    const a2 = () => r2.global ? b : r2, l2 = r2.global ? m : i(), c2 = async (e3) => {
      var _a2;
      const t3 = a2(), r3 = __spreadProps(__spreadValues(__spreadValues({}, t3), e3), { headers: o(t3.headers, e3.headers) });
      r3.body && r3.bodySerializer && (r3.body = r3.bodySerializer(r3.body));
      const i2 = n({ baseUrl: (_a2 = r3.baseUrl) != null ? _a2 : "", path: r3.path, query: r3.query, querySerializer: "function" == typeof r3.querySerializer ? r3.querySerializer : s(r3.querySerializer), url: r3.url }), c3 = __spreadValues({ redirect: "follow" }, r3);
      c3.body instanceof FormData && c3.headers.delete("Content-Type");
      let u2 = new Request(i2, c3);
      for (const e4 of l2.request._fns) u2 = await e4(u2, r3);
      const d2 = r3.fetch;
      let p2 = await d2(u2);
      for (const e4 of l2.response._fns) p2 = await e4(p2, u2, r3);
      const f2 = { request: u2, response: p2 };
      if (204 === p2.status || "0" === p2.headers.get("Content-Length")) return p2.ok ? __spreadValues({ data: {} }, f2) : __spreadValues({ error: {} }, f2);
      if (p2.ok) {
        if ("stream" === r3.parseAs) return __spreadValues({ data: p2.body }, f2);
        const e4 = "auto" === r3.parseAs ? ((e5) => {
          if (e5) return "application/json" === e5 || e5.endsWith("+json") ? "json" : "multipart/form-data" === e5 ? "formData" : ["application/octet-stream", "application/pdf", "application/zip", "audio/", "image/", "video/"].some((t4) => e5.includes(t4)) ? "blob" : e5.includes("text/") ? "text" : void 0;
        })(p2.headers.get("Content-Type")) : r3.parseAs;
        return __spreadValues({ data: await p2[e4 != null ? e4 : "json"]() }, f2);
      }
      let h2 = await p2.text();
      try {
        h2 = JSON.parse(h2);
      } catch (e4) {
      }
      return __spreadValues({ error: h2 }, f2);
    };
    return { connect: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "CONNECT" })), delete: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "DELETE" })), get: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "GET" })), getConfig: a2, head: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "HEAD" })), interceptors: l2, options: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "OPTIONS" })), patch: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "PATCH" })), post: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "POST" })), put: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "PUT" })), request: c2, trace: (e3) => c2(__spreadProps(__spreadValues({}, e3), { method: "TRACE" })) };
  };
  var w = y(b);

  // src/client/schemas.gen.ts
  var $Song = {
    required: ["albums", "artists", "duration", "genres", "release_date", "title"],
    type: "object",
    properties: {
      id: {
        type: "string"
      },
      title: {
        type: "string"
      },
      producer: {
        type: "string"
      },
      duration: {
        type: "integer",
        format: "int32"
      },
      release_date: {
        type: "string",
        format: "date-time"
      },
      albums: {
        type: "array",
        items: {
          type: "string"
        }
      },
      artists: {
        type: "array",
        items: {
          type: "string"
        }
      },
      genres: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  };
  var $Genre = {
    required: ["name"],
    type: "object",
    properties: {
      id: {
        type: "string"
      },
      name: {
        type: "string"
      }
    }
  };
  var $Artist = {
    required: ["name", "variant"],
    type: "object",
    properties: {
      id: {
        type: "string"
      },
      name: {
        type: "string"
      },
      variant: {
        type: "string",
        enum: ["SINGER", "RAPPER", "BAND"]
      }
    }
  };
  var $Album = {
    required: ["release_date", "title"],
    type: "object",
    properties: {
      id: {
        type: "string"
      },
      title: {
        type: "string"
      },
      release_date: {
        type: "string",
        format: "date-time"
      }
    }
  };

  // src/client/services.gen.ts
  var readSongs = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/songs"
    }));
  };
  var updateSong = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).put(__spreadProps(__spreadValues({}, options), {
      url: "/songs"
    }));
  };
  var createSong = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues({}, options), {
      url: "/songs"
    }));
  };
  var readGenres = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/genres"
    }));
  };
  var updateGenre = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).put(__spreadProps(__spreadValues({}, options), {
      url: "/genres"
    }));
  };
  var createGenre = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues({}, options), {
      url: "/genres"
    }));
  };
  var updatePost = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).put(__spreadProps(__spreadValues({}, options), {
      url: "/artist"
    }));
  };
  var updateAlbum = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).put(__spreadProps(__spreadValues({}, options), {
      url: "/album"
    }));
  };
  var serveSongCover = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/files/song/cover/{id}"
    }));
  };
  var handleSongCoverUpload = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues(__spreadValues({}, options), u), {
      url: "/files/song/cover/{id}"
    }));
  };
  var serveSongAudio = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/files/song/audio/{id}"
    }));
  };
  var handleSongAudioUpload = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues(__spreadValues({}, options), u), {
      url: "/files/song/audio/{id}"
    }));
  };
  var serveArtistProfile = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/files/artist/profile/{id}"
    }));
  };
  var handleArtistProfileUpload = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues(__spreadValues({}, options), u), {
      url: "/files/artist/profile/{id}"
    }));
  };
  var serveAlbumCover = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/files/album/cover/{id}"
    }));
  };
  var handleAlbumCoverUpload = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues(__spreadValues({}, options), u), {
      url: "/files/album/cover/{id}"
    }));
  };
  var readArtists = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/artists"
    }));
  };
  var createArtist = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues({}, options), {
      url: "/artists"
    }));
  };
  var readAlbums = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/albums"
    }));
  };
  var createAlbum = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).post(__spreadProps(__spreadValues({}, options), {
      url: "/albums"
    }));
  };
  var readSong = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/songs/{id}"
    }));
  };
  var deleteSong = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).delete(__spreadProps(__spreadValues({}, options), {
      url: "/songs/{id}"
    }));
  };
  var recommendationsBasedOnSong = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/songs/{id}/recommendations"
    }));
  };
  var readSongsOfGenre = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/songs/genre/{id}"
    }));
  };
  var readSongsOfArtist = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/songs/artist/{id}"
    }));
  };
  var readGenre = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/genres/{id}"
    }));
  };
  var deleteGenre = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).delete(__spreadProps(__spreadValues({}, options), {
      url: "/genres/{id}"
    }));
  };
  var readArtist = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/artists/{id}"
    }));
  };
  var readAlbum = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/albums/{id}"
    }));
  };
  var readInfo = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).get(__spreadProps(__spreadValues({}, options), {
      url: "/"
    }));
  };
  var deleteSong1 = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).delete(__spreadProps(__spreadValues({}, options), {
      url: "/artist/{id}"
    }));
  };
  var deleteAlbum = (options) => {
    var _a;
    return ((_a = options == null ? void 0 : options.client) != null ? _a : w).delete(__spreadProps(__spreadValues({}, options), {
      url: "/album/{id}"
    }));
  };

  // src/index.ts
  var createClient = y;
  var initDevClient = () => {
    createClient({
      baseUrl: "http://localhost:8080"
    });
  };
  return __toCommonJS(src_exports);
})();
