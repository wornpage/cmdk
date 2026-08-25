//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function _() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var v = 1024, y = 2048, b = 4096, x = 8192, S = 16384, C = 32768, w = 1 << 25, T = 65536, ee = 1 << 19, te = 1 << 20, ne = 1 << 25, re = 65536, ie = 1 << 21, ae = 1 << 22, oe = 1 << 23, se = Symbol("$state"), ce = Symbol("legacy props"), le = Symbol(""), ue = Symbol("attributes"), de = Symbol("class"), fe = Symbol("style"), pe = Symbol("text"), me = Symbol("form reset"), he = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ge = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function _e() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ve(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ye(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function be() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xe(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ce() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function we(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Te() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ke() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ae(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function je() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var E = !1;
function Me(e) {
	E = e;
}
var D;
function O(t) {
	if (t === null) throw Ae(), e;
	return D = t;
}
function Ne() {
	return O(/* @__PURE__ */ z(D));
}
function k(t) {
	if (E) {
		if (/* @__PURE__ */ z(D) !== null) throw Ae(), e;
		D = t;
	}
}
function Pe(e = 1) {
	if (E) {
		for (var t = e, n = D; t--;) n = /* @__PURE__ */ z(n);
		D = n;
	}
}
function Fe(e = !0) {
	for (var t = 0, n = D;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ z(n);
		e && n.remove(), n = i;
	}
}
function Ie(t) {
	if (!t || t.nodeType !== 8) throw Ae(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Le(e) {
	return e === this.v;
}
function Re(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ze(e) {
	return !Re(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var A = null;
function Be(e) {
	A = e;
}
function Ve(e, t = !1, n) {
	A = {
		p: A,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l: null
	};
}
function He(e) {
	var t = A, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) pn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, A = t.p, e ?? {};
}
function Ue() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var We = [];
function Ge() {
	var e = We;
	We = [], g(e);
}
function j(e) {
	if (We.length === 0 && !Et) {
		var t = We;
		queueMicrotask(() => {
			t === We && Ge();
		});
	}
	We.push(e);
}
function Ke() {
	for (; We.length > 0;) Ge();
}
function qe(e) {
	var t = q;
	if (t === null) return W.f |= oe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Je(e, t);
}
function Je(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ye = ~(y | b | v);
function M(e, t) {
	e.f = e.f & Ye | t;
}
function Xe(e) {
	e.f & 512 || e.deps === null ? M(e, v) : M(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ze(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= re, Ze(t.deps));
}
function Qe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ze(e.deps), M(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var $e = !1;
function et(e) {
	var t = $e;
	try {
		return $e = !1, [e(), $e];
	} finally {
		$e = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var tt = !1;
function nt() {
	tt || (tt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[me]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function rt(e) {
	var t = W, n = q;
	K(null), J(null);
	try {
		return e();
	} finally {
		K(t), J(n);
	}
}
function it(e, t, n, r = n) {
	e.addEventListener(t, () => rt(n));
	let i = e[me];
	e[me] = i ? () => {
		i(), r(!0);
	} : () => r(!0), nt();
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function at(e) {
	let t = 0, n = Ht(0), r;
	return () => {
		un() && ($(n), vn(() => (t === 0 && (r = Zn(() => e(() => Kt(n)))), t += 1, () => {
			j(() => {
				--t, t === 0 && (r?.(), r = void 0, Kt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ot = T | ee;
function st(e, t, n, r) {
	new ct(e, t, n, r);
}
var ct = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = E ? D : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = at(() => (this.#m = Ht(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = bn(() => {
			if (E) {
				let e = this.#t;
				Ne();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, ot), E && (this.#e = D);
	}
	#g() {
		try {
			this.#a = H(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		j(r), t && (this.#s = H(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				je();
				return;
			}
			t = !0, n && Oe(), this.#s !== null && En(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					Je(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = H(() => e(this.#e)), j(() => {
			var e = this.#c = document.createDocumentFragment(), t = R();
			e.append(t), this.#a = this.#S(() => H(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, En(this.#o, () => {
				this.#o = null;
			}), this.#x(N));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = H(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				An(this.#a, e);
				let t = this.#n.pending;
				this.#o = H(() => t(this.#e));
			} else this.#x(N);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Qe(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = q, n = W, r = A;
		J(this.#i), K(this.#i), Be(this.#i.ctx);
		try {
			return Mt.ensure(), e();
		} catch (e) {
			return qe(e), null;
		} finally {
			J(t), K(n), Be(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && En(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, j(() => {
			this.#d = !1, this.#m && Wt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), $(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		N?.is_fork ? (this.#a && N.skip_effect(this.#a), this.#o && N.skip_effect(this.#o), this.#s && N.skip_effect(this.#s), N.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (U(this.#a), null), this.#o &&= (U(this.#o), null), this.#s &&= (U(this.#s), null), E && (O(this.#t), Pe(), O(Fe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return H(() => {
						var r = q;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Je(e, this.#i.parent), null;
				}
			}));
		};
		j(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Je(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Je(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function lt(e, t, n, r) {
	let i = Ue() ? pt : _t;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = q, c = ut(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Je(e, s);
			}
			dt();
		}
	}
	var d = ft();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ht(e))).then(u).catch((e) => Je(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), dt();
	}) : f();
}
function ut() {
	var e = q, t = W, n = A, r = N;
	return function(i = !0) {
		J(e), K(t), Be(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function dt(e = !0) {
	J(null), K(null), Be(null), e && N?.deactivate();
}
function ft() {
	var e = q, t = e.b, n = N, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function pt(e) {
	var n = 2 | y;
	return q !== null && (q.f |= ee), {
		ctx: A,
		deps: null,
		effects: null,
		equals: Le,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: q,
		ac: null
	};
}
var mt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ht(e, n, r) {
	let i = q;
	i === null && _e();
	var a = void 0, o = Ht(t), s = !W, c = /* @__PURE__ */ new Set();
	return _n(() => {
		var t = q, n = _();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== he && n.reject(e);
			}).finally(dt);
		} catch (e) {
			n.reject(e), dt();
		}
		var r = N;
		if (s) {
			if (t.f & 32768) var l = ft();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(mt);
			else for (let e of c.values()) e.reject(mt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== mt && (r.activate(), t ? (o.f |= oe, Wt(o, t)) : (o.f & 8388608 && (o.f ^= oe), Wt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), dn(() => {
		for (let e of c) e.reject(mt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function gt(e) {
	let t = /* @__PURE__ */ pt(e);
	return Fn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function _t(e) {
	let t = /* @__PURE__ */ pt(e);
	return t.equals = ze, t;
}
function vt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) U(t[n]);
	}
}
function yt(e) {
	var n, r = q, i = e.parent;
	if (!Nn && i !== null && e.v !== t && i.f & 24576) return ke(), e.v;
	J(i);
	try {
		e.f &= ~re, vt(e), n = Wn(e);
	} finally {
		J(r);
	}
	return n;
}
function bt(e) {
	var t = yt(e);
	if (!e.equals(t) && (e.wv = Vn(), (!N?.is_fork || e.deps === null) && (N === null ? e.v = t : (N.capture(e, t, !0), wt?.capture(e, t, !0)), e.deps === null))) {
		M(e, v);
		return;
	}
	Nn || (P === null ? Xe(e) : (un() || N?.is_fork) && P.set(e, t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && rt(() => {
		t.ac.abort(he), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Kn(t, 0), Sn(t));
}
function St(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && qn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Ct = null, N = null, wt = null, P = null, Tt = null, Et = !1, Dt = !1, Ot = null, kt = null, At = 0, jt = 1, Mt = class e {
	id = jt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		Ct === null ? Ct = this : (Ct.#n = this, this.#t = Ct), Ct = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) M(r, y), t(r);
			for (r of n.m) M(r, b), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, At++ > 1e3 && (this.#x(), Pt());
		for (let e of this.#u) this.#d.delete(e), M(e, y), this.schedule(e);
		for (let e of this.#d) M(e, b), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Ot = [], r = [], i = kt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Rt(e), this.#h() || this.discard(), t;
		}
		if (N = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Ot = null, kt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Lt(e, t);
			i.length > 0 && N.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), wt = this, Ft(r), Ft(n), wt = null, this.#s?.resolve();
		var s = N;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= v;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= v : i & 4 ? t.push(r) : Hn(r) && (i & 16 && this.#d.add(r), qn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), M(i, y), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), N = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Qe(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), P?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		N = this;
	}
	deactivate() {
		N = null, P = null;
	}
	flush() {
		try {
			Dt = !0, N = this, this.#g();
		} finally {
			At = 0, Tt = null, Ot = null, kt = null, Dt = !1, N = null, P = null, Bt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(mt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, j(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= _()).promise;
	}
	static ensure() {
		if (N === null) {
			let t = N = new e();
			!Dt && !Et && j(() => {
				t.#e || t.flush();
			});
		}
		return N;
	}
	apply() {
		P = null;
	}
	schedule(e) {
		if (Tt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Ot !== null && t === q && (W === null || !(W.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= v;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? Ct = e : t.#t = e, this.linked = !1;
		}
	}
};
function Nt(e) {
	var t = Et;
	Et = !0;
	try {
		var n;
		for (e && (N !== null && !N.is_fork && N.flush(), n = e());;) {
			if (Ke(), N === null) return n;
			N.flush();
		}
	} finally {
		Et = t;
	}
}
function Pt() {
	try {
		Se();
	} catch (e) {
		Je(e, Tt);
	}
}
var F = null;
function Ft(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Hn(r) && (F = /* @__PURE__ */ new Set(), qn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Tn(r), F?.size > 0)) {
				Bt.clear();
				for (let e of F) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) F.has(n) && (F.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || qn(n);
					}
				}
				F.clear();
			}
		}
		F = null;
	}
}
function It(e) {
	N.schedule(e);
}
function Lt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), M(e, v);
		for (var n = e.first; n !== null;) Lt(n, t), n = n.next;
	}
}
function Rt(e) {
	M(e, v);
	for (var t = e.first; t !== null;) Rt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var zt = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Map(), Vt = !1;
function Ht(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Le,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function I(e, t) {
	let n = Ht(e, t);
	return Fn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Ut(e, t = !1, n = !0) {
	let r = Ht(e);
	return t || (r.equals = ze), r;
}
function L(e, t, n = !1) {
	return W !== null && (!G || W.f & 131072) && Ue() && W.f & 4325394 && (Y === null || !Y.has(e)) && De(), Wt(e, n ? Jt(t) : t, kt);
}
function Wt(e, t, n = null) {
	if (!e.equals(t)) {
		Bt.set(e, Nn ? t : e.v);
		var r = Mt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && yt(t), P === null && Xe(t);
		}
		e.wv = Vn(), qt(e, y, n), Ue() && q !== null && q.f & 1024 && !(q.f & 96) && (Q === null ? In([e]) : Q.push(e)), !r.is_fork && zt.size > 0 && !Vt && Gt();
	}
	return t;
}
function Gt() {
	Vt = !1;
	for (let e of zt) {
		e.f & 1024 && M(e, b);
		let t;
		try {
			t = Hn(e);
		} catch {
			t = !0;
		}
		t && qn(e);
	}
	zt.clear();
}
function Kt(e) {
	L(e, e.v + 1);
}
function qt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ue(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & y) === 0;
			if (l && M(s, t), c & 131072) zt.add(s);
			else if (c & 2) {
				var u = s;
				P?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= re), qt(u, b, n));
			} else if (l) {
				var d = s;
				c & 16 && F !== null && F.add(d), n === null ? It(d) : n.push(d);
			}
		}
	}
}
function Jt(e) {
	if (typeof e != "object" || !e || se in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ I(0), s = null, c = zn, u = (e) => {
		if (zn === c) return e();
		var t = W, n = zn;
		K(null), Bn(c);
		var r = e();
		return K(t), Bn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ I(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Te();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ I(n.value, s);
				return i.set(t, e), e;
			}) : L(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ I(t, s));
					i.set(n, e), Kt(o);
				}
			} else L(r, t), Kt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === se) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ I(Jt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = $(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = $(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === se) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || q !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ I(a ? Jt(e[n]) : t, s)), i.set(n, r)), $(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ I(t, s)), i.set(p + "", m)) : L(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ I(void 0, s)), L(d, Jt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Jt(r));
				L(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && L(_, v + 1);
				}
				Kt(o);
			}
			return !0;
		},
		ownKeys(e) {
			$(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			Ee();
		}
	});
}
var Yt, Xt, Zt, Qt;
function $t() {
	if (Yt === void 0) {
		Yt = window, Xt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Zt = l(t, "firstChild").get, Qt = l(t, "nextSibling").get, m(e) && (e[de] = void 0, e[ue] = null, e[fe] = void 0, e.__e = void 0), m(n) && (n[pe] = void 0);
	}
}
function R(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function en(e) {
	return Zt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function z(e) {
	return Qt.call(e);
}
function B(e, t) {
	if (!E) return /* @__PURE__ */ en(e);
	var n = /* @__PURE__ */ en(D);
	if (n === null) n = D.appendChild(R());
	else if (t && n.nodeType !== 3) {
		var r = R();
		return n?.before(r), O(r), r;
	}
	return t && sn(n), O(n), n;
}
function tn(e, t = !1) {
	if (!E) {
		var n = /* @__PURE__ */ en(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ z(n) : n;
	}
	if (t) {
		if (D?.nodeType !== 3) {
			var r = R();
			return D?.before(r), O(r), r;
		}
		sn(D);
	}
	return D;
}
function nn(e, t = 1, n = !1) {
	let r = E ? D : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ z(r);
	if (!E) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = R();
			return r === null ? i?.after(a) : r.before(a), O(a), a;
		}
		sn(r);
	}
	return O(r), r;
}
function rn(e) {
	e.textContent = "";
}
function an() {
	return !1;
}
function on(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function sn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function cn(e) {
	q === null && (W === null && xe(e), be()), Nn && ye(e);
}
function ln(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function V(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= x);
	var r = {
		ctx: A,
		deps: null,
		nodes: null,
		f: e | y | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	N?.register_created_effect(r);
	var i = r;
	if (e & 4) Ot === null ? Mt.ensure().schedule(r) : Ot.push(r);
	else if (t !== null) {
		try {
			qn(r);
		} catch (e) {
			throw U(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= T));
	}
	if (i !== null && (i.parent = n, n !== null && ln(i, n), W !== null && W.f & 2 && !(e & 64))) {
		var a = W;
		(a.effects ??= []).push(i);
	}
	return r;
}
function un() {
	return W !== null && !G;
}
function dn(e) {
	let t = V(8, null);
	return M(t, v), t.teardown = e, t;
}
function fn(e) {
	cn("$effect");
	var t = q.f;
	if (!W && t & 32 && A !== null && !A.i) {
		var n = A;
		(n.e ??= []).push(e);
	} else return pn(e);
}
function pn(e) {
	return V(4 | te, e);
}
function mn(e) {
	Mt.ensure();
	let t = V(64 | ee, e);
	return () => {
		U(t);
	};
}
function hn(e) {
	Mt.ensure();
	let t = V(64 | ee, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? En(t, () => {
			U(t), n(void 0);
		}) : (U(t), n(void 0));
	});
}
function gn(e) {
	return V(4, e);
}
function _n(e) {
	return V(ae | ee, e);
}
function vn(e, t = 0) {
	return V(8 | t, e);
}
function yn(e, t = [], n = [], r = []) {
	lt(r, t, n, (t) => {
		V(8, () => {
			e(...t.map($));
		});
	});
}
function bn(e, t = 0) {
	return V(16 | t, e);
}
function H(e) {
	return V(32 | ee, e);
}
function xn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Nn, n = W;
		Pn(!0), K(null);
		try {
			t.call(null);
		} finally {
			Pn(e), K(n);
		}
	}
}
function Sn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && rt(() => {
			e.abort(he);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : U(n, t), n = r;
	}
}
function Cn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || U(t), t = n;
	}
}
function U(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (wn(e.nodes.start, e.nodes.end), n = !0), e.f |= w, Sn(e, t && !n), Kn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	xn(e), e.f ^= w, e.f |= S;
	var i = e.parent;
	i !== null && i.first !== null && Tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function wn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ z(e);
		e.remove(), e = n;
	}
}
function Tn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function En(e, t, n = !0) {
	var r = [];
	Dn(e, r, !0);
	var i = () => {
		n && U(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Dn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= x;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Dn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function On(e) {
	kn(e, !0);
}
function kn(e, t) {
	if (e.f & 8192) {
		e.f ^= x, e.f & 1024 || (M(e, y), Mt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			kn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function An(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ z(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var jn = null, Mn = !1, Nn = !1;
function Pn(e) {
	Nn = e;
}
var W = null, G = !1;
function K(e) {
	W = e;
}
var q = null;
function J(e) {
	q = e;
}
var Y = null;
function Fn(e) {
	W !== null && (Y ??= /* @__PURE__ */ new Set()).add(e);
}
var X = null, Z = 0, Q = null;
function In(e) {
	Q = e;
}
var Ln = 1, Rn = 0, zn = Rn;
function Bn(e) {
	zn = e;
}
function Vn() {
	return ++Ln;
}
function Hn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~re), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Hn(a) && bt(a), a.wv > e.wv) return !0;
		}
		t & 512 && P === null && M(e, v);
	}
	return !1;
}
function Un(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Y !== null && Y.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Un(a, t, !1) : t === a && (n ? M(a, y) : a.f & 1024 && M(a, b), It(a));
	}
}
function Wn(e) {
	var t = X, n = Z, r = Q, i = W, a = Y, o = A, s = G, c = zn, l = e.f;
	X = null, Z = 0, Q = null, W = l & 96 ? null : e, Y = null, Be(e.ctx), G = !1, zn = ++Rn, e.ac !== null && (rt(() => {
		e.ac.abort(he);
	}), e.ac = null);
	try {
		e.f |= ie;
		var u = e.fn, d = u();
		e.f |= C;
		var f = e.deps, p = N?.is_fork;
		if (X !== null) {
			var m;
			if (p || Kn(e, Z), f !== null && Z > 0) for (f.length = Z + X.length, m = 0; m < X.length; m++) f[Z + m] = X[m];
			else e.deps = f = X;
			if (un() && e.f & 512) for (m = Z; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Z < f.length && (Kn(e, Z), f.length = Z);
		if (Ue() && Q !== null && !G && f !== null && !(e.f & 6146)) for (m = 0; m < Q.length; m++) Un(Q[m], e);
		if (i !== null && i !== e) {
			if (Rn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Rn;
			if (t !== null) for (let e of t) e.rv = Rn;
			Q !== null && (r === null ? r = Q : r.push(...Q));
		}
		return e.f & 8388608 && (e.f ^= oe), d;
	} catch (e) {
		return qe(e);
	} finally {
		e.f ^= ie, X = t, Z = n, Q = r, W = i, Y = a, Be(o), G = s, zn = c;
	}
}
function Gn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (X === null || !a.call(X, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~re), c.v !== t && Xe(c), c.ac !== null && rt(() => {
			c.ac.abort(he), c.ac = null, M(c, y);
		}), xt(c), Kn(c, 0);
	}
}
function Kn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Gn(e, n[r]);
}
function qn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		M(e, v);
		var n = q, r = Mn;
		q = e, Mn = !(t & 96);
		try {
			t & 16777232 ? Cn(e) : Sn(e), xn(e);
			var i = Wn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Ln;
		} finally {
			Mn = r, q = n;
		}
	}
}
async function Jn() {
	await Promise.resolve(), Nt();
}
function $(e) {
	var t = !!(e.f & 2);
	if (jn?.add(e), W !== null && !G && !(q !== null && q.f & 16384) && (Y === null || !Y.has(e))) {
		var n = W.deps;
		if (W.f & 2097152) e.rv < Rn && (e.rv = Rn, X === null && n !== null && n[Z] === e ? Z++ : X === null ? X = [e] : X.push(e));
		else {
			W.deps ??= [], a.call(W.deps, e) || W.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [W] : a.call(r, W) || r.push(W);
		}
	}
	if (Nn && Bt.has(e)) return Bt.get(e);
	if (t) {
		var i = e;
		if (Nn) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Xn(i)) && (o = yt(i)), Bt.set(i, o), o;
		}
		var s = !(i.f & 512) && !G && W !== null && (Mn || !!(W.f & 512)), c = (i.f & C) === 0;
		Hn(i) && (s && (i.f |= 512), bt(i)), s && !c && (St(i), Yn(i));
	}
	if (P?.has(e)) return P.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Yn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (St(t), Yn(t));
}
function Xn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Bt.has(t) || t.f & 2 && Xn(t)) return !0;
	return !1;
}
function Zn(e) {
	var t = G;
	try {
		return G = !0, e();
	} finally {
		G = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Qn = Symbol("events"), $n = /* @__PURE__ */ new Set(), er = /* @__PURE__ */ new Set();
function tr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || or.call(t, e), !e.cancelBubble) return rt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? j(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function nr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = tr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && dn(() => {
		t.removeEventListener(e, o, a);
	});
}
function rr(e, t, n) {
	(t[Qn] ??= {})[e] = n;
}
function ir(e) {
	for (var t = 0; t < e.length; t++) $n.add(e[t]);
	for (var n of er) n(e);
}
var ar = null;
function or(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ar = e;
	var o = 0, s = ar === e && e[Qn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Qn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = W, f = q;
		K(null), J(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Qn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Qn] = t, delete e.currentTarget, K(d), J(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var sr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function cr(e) {
	return sr?.createHTML(e) ?? e;
}
function lr(e) {
	var t = on("template");
	return t.innerHTML = cr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ur(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function dr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (E) return ur(D, null), D;
		i === void 0 && (i = lr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ en(i)));
		var t = r || Xt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ en(t), s = t.lastChild;
			ur(o, s);
		} else ur(t, t);
		return t;
	};
}
function fr(e, t) {
	if (E) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), Ne();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var pr = ["touchstart", "touchmove"];
function mr(e) {
	return pr.includes(e);
}
function hr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[pe] ??= e.nodeValue) && (e[pe] = n, e.nodeValue = `${n}`);
}
function gr(e, t) {
	return yr(e, t);
}
function _r(t, n) {
	$t(), n.intro = n.intro ?? !1;
	let r = n.target, i = E, a = D;
	try {
		for (var o = /* @__PURE__ */ en(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ z(o);
		if (!o) throw e;
		Me(!0), O(o);
		let i = yr(t, {
			...n,
			anchor: o
		});
		return Me(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Ce(), $t(), rn(r), Me(!1), gr(t, n);
	} finally {
		Me(i), O(a);
	}
}
var vr = /* @__PURE__ */ new Map();
function yr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	$t();
	var u = void 0, d = hn(() => {
		var c = r ?? n.appendChild(R());
		st(c, { pending: () => {} }, (n) => {
			Ve({});
			var r = A;
			if (s && (r.c = s), a && (i.$$events = a), E && ur(n, null), u = t(n, i) || {}, E && (q.nodes.end = D, D === null || D.nodeType !== 8 || D.data !== "]")) throw Ae(), e;
			He();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = mr(r);
					for (let e of [n, document]) {
						var a = vr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), vr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, or, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o($n)), er.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = vr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, or), t.delete(e), t.size === 0 && vr.delete(r)) : t.set(e, i);
			}
			er.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return br.set(u, d), u;
}
var br = /* @__PURE__ */ new WeakMap();
function xr(e, t) {
	let n = br.get(e);
	return n ? (br.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Sr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) On(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (On(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (U(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						An(r, t), t.append(R()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else U(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), En(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (U(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = N, r = an();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = R();
				i.append(a), this.#n.set(e, {
					effect: H(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, H(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else E && (this.anchor = D), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Cr(e, t, n = !1) {
	var r;
	E && (r = D, Ne());
	var i = new Sr(e), a = n ? T : 0;
	function o(e, t) {
		if (E) {
			var n = Ie(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Fe();
				O(a), i.anchor = a, Me(!1), i.ensure(e, t), Me(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	bn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function wr(e, t, n) {
	for (var r = [], i = t.length, a, s = t.length, c = 0; c < i; c++) {
		let n = t[c];
		En(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Tr(e, o(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			rn(d), d.append(u), e.items.clear();
		}
		Tr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Tr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ne, An(a, document.createDocumentFragment())) : U(t[i], n);
	}
}
var Er;
function Dr(e, t, n, i, a, s = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = E ? O(/* @__PURE__ */ en(u)) : u.appendChild(R());
	}
	E && Ne();
	var d = null, f = /* @__PURE__ */ _t(() => {
		var e = n();
		return r(e) ? e : e == null ? [] : o(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, kr(v, p, c, t, i), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ne, jr(d, null, c)) : On(d) : En(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: bn(() => {
			p = $(f);
			var e = p.length;
			let r = !1;
			E && Ie(c) === "[!" != (e === 0) && (c = Fe(), O(c), Me(!1), r = !0);
			for (var o = /* @__PURE__ */ new Set(), u = N, v = an(), y = 0; y < e; y += 1) {
				E && D.nodeType === 8 && D.data === "]" && (c = D, r = !0, Me(!1));
				var b = p[y], x = i(b, y), S = h ? null : l.get(x);
				S ? (S.v && Wt(S.v, b), S.i && Wt(S.i, y), v && u.unskip_effect(S.e)) : (S = Ar(l, h ? c : Er ??= R(), b, x, y, a, t, n), h || (S.e.f |= ne), l.set(x, S)), o.add(x);
			}
			if (e === 0 && s && !d && (h ? d = H(() => s(c)) : (d = H(() => s(Er ??= R())), d.f |= ne)), e > o.size && ve("", "", ""), E && e > 0 && O(Fe()), !h) {
				if (m.set(u, o), v) {
					for (let [e, t] of l) o.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			r && Me(!0), $(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, E && (c = D);
}
function Or(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function kr(e, t, n, r, i) {
	var a = !!(r & 8), s = t.length, c = e.items, l = Or(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < s; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (On(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= ne, _ === l) jr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Mr(e, d, _), Mr(e, _, y), jr(_, y, n), d = _, p = [], m = [], l = Or(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) jr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Mr(e, S.prev, C.next), Mr(e, d, S), Mr(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), jr(_, l, n), Mr(e, _.prev, _.next), Mr(e, _, d === null ? e.effect.first : d.next), Mr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Or(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Or(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Tr(e, o(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = Or(l.next);
		var T = w.length;
		if (T > 0) {
			var ee = r & 4 && s === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			wr(e, w, ee);
		}
	}
	a && j(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Ar(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Ht(n) : /* @__PURE__ */ Ut(n, !1, !1) : null, l = o & 2 ? Ht(i) : null;
	return {
		v: c,
		i: l,
		e: H(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function jr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ z(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Mr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Nr(e, t) {
	gn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = on("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Pr = [..." 	\n\r\f\xA0\v﻿"];
function Fr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Pr.includes(r[o - 1])) && (s === r.length || Pr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Ir(e, t, n, r, i, a) {
	var o = e[de];
	if (E || o !== n || o === void 0) {
		var s = Fr(n, r, a);
		(!E || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[de] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Lr = Symbol("is custom element"), Rr = Symbol("is html"), zr = ge ? "link" : "LINK";
function Br(e) {
	if (E) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Vr(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Vr(e, "checked", null), e.checked = r;
				}
			}
		};
		e[me] = n, j(n), nt();
	}
}
function Vr(e, t, n, r) {
	var i = Hr(e);
	E && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === zr) || i[t] !== (i[t] = n) && (t === "loading" && (e[le] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Wr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Hr(e) {
	return e[ue] ??= {
		[Lr]: e.nodeName.includes("-"),
		[Rr]: e.namespaceURI === n
	};
}
var Ur = /* @__PURE__ */ new Map();
function Wr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Ur.get(t);
	if (n) return n;
	Ur.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Gr(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	it(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Kr(e) ? qr(a) : a, n(a), N !== null && r.add(N), await Jn(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (E && e.defaultValue !== e.value || Zn(t) == null && e.value) && (n(Kr(e) ? qr(e.value) : e.value), N !== null && r.add(N)), vn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = N;
			if (r.has(i)) return;
		}
		Kr(e) && n === qr(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Kr(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function qr(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Jr(e, t) {
	return e === t || e?.[se] === t;
}
function Yr(e = {}, t, n, r) {
	var i = A.r, a = q;
	return gn(() => {
		var o, s;
		return vn(() => {
			o = s, s = r?.() || [], Zn(() => {
				Jr(n(...s), e) || (t(e, ...s), o && Jr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Jr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function Xr(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ pt(r), $(u)) : (c && (c = !1, s = o ? Zn(r) : r), s);
	let f;
	if (a) {
		var p = se in e || ce in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = et(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && we(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? pt : _t)(() => (v = !1, g()));
	a && $(y);
	var b = q;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? $(y) : i && a ? Jt(e) : e;
			return L(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return Nn && v || b.f & 16384 ? y.v : $(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Zr(e) {
	return new Qr(e);
}
var Qr = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Ut(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return $(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === ce || ($(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return L(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? _r : gr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && Nt(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			xr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, $r;
typeof HTMLElement == "function" && ($r = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = on("slot");
					e !== "default" && (n.name = e), fr(t, n);
				};
			}
			let t = {}, n = ti(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = ei(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Zr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = mn(() => {
				vn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = ei(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = ei(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function ei(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function ti(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function ni(e, t, n, r, i, a) {
	let o = class extends $r {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = ei(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/group.ts
function ri(e) {
	let t = e.filter((e) => !e.group), n = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.group) continue;
		let e = n.get(t.group) ?? [];
		e.push(t), n.set(t.group, e);
	}
	let r = t.length, i = [...n.entries()].map(([e, t]) => {
		let n = {
			name: e,
			items: t,
			startIndex: r
		};
		return r += t.length, n;
	});
	return {
		noGroup: t,
		groups: i,
		orderedItems: [...t, ...i.flatMap((e) => e.items)]
	};
}
//#endregion
//#region src/Cmdk.svelte
var ii = /* @__PURE__ */ dr("<small class=\"svelte-jgcga6\"> </small>"), ai = /* @__PURE__ */ dr("<li role=\"presentation\"><button type=\"button\" role=\"option\"><span> </span> <!></button></li>"), oi = /* @__PURE__ */ dr("<li class=\"cmdk-group-label svelte-jgcga6\" role=\"separator\"> </li> <!>", 1), si = /* @__PURE__ */ dr("<li class=\"cmdk-empty svelte-jgcga6\" role=\"option\" aria-selected=\"false\">No matches.</li>"), ci = /* @__PURE__ */ dr("<dialog class=\"cmdk svelte-jgcga6\" aria-label=\"Command palette\"><div class=\"cmdk-search-row svelte-jgcga6\"><input class=\"cmdk-input svelte-jgcga6\" type=\"text\" autocomplete=\"off\" spellcheck=\"false\" aria-label=\"Command palette search\" role=\"combobox\" aria-expanded=\"true\" aria-controls=\"cmdk-list\"/> <button type=\"button\" class=\"cmdk-close svelte-jgcga6\" aria-label=\"Close command palette\"></button></div> <ul id=\"cmdk-list\" class=\"cmdk-list svelte-jgcga6\" role=\"listbox\" aria-label=\"Results\"><!> <!> <!></ul></dialog>"), li = {
	hash: "svelte-jgcga6",
	code: "\n	@keyframes svelte-jgcga6-cmdk-in {\n		from { opacity: 0; transform: translateY(-6px); }\n		to { opacity: 1; transform: translateY(0); }\n	}.cmdk.svelte-jgcga6 { animation: svelte-jgcga6-cmdk-in 0.15s ease-out;width:min(520px, 92vw);max-width:92vw;padding:0;border:1px solid var(--cmdk-border, var(--cockpit-border-strong, #d0cac1));border-radius:var(--cmdk-radius, 8px);background:var(--cmdk-surface, var(--cockpit-surface, #fff));color:var(--cmdk-text, var(--cockpit-text, #21322b));box-shadow:0 12px 40px rgba(0,0,0,0.3);margin:12vh auto auto;}.cmdk.svelte-jgcga6::backdrop {background:var(--cmdk-backdrop, rgba(0,0,0,0.45));}.cmdk-search-row.svelte-jgcga6 {display:flex;align-items:center;border-bottom:1px solid var(--cmdk-border, var(--cockpit-border, #e2ddd5));padding-right:4px;}.cmdk-input.svelte-jgcga6 {flex:1;min-width:0;box-sizing:border-box;border:0;background:transparent;color:inherit;font:inherit;font-size:16px;padding:14px 8px 14px 16px;outline:none;}.cmdk-input.svelte-jgcga6::placeholder {color:var(--cmdk-text-muted, var(--cockpit-text-muted, #63746a));opacity:1;}.cmdk-close.svelte-jgcga6 {position:relative;flex:0 0 auto;width:44px;height:44px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--cmdk-text-muted, var(--cockpit-text-muted, #63746a));cursor:pointer;}.cmdk-close.svelte-jgcga6::before, .cmdk-close.svelte-jgcga6::after {content:'';position:absolute;left:50%;top:50%;width:12px;height:1.5px;border-radius:1px;background:currentColor;}.cmdk-close.svelte-jgcga6::before {transform:translate(-50%, -50%) rotate(45deg);}.cmdk-close.svelte-jgcga6::after {transform:translate(-50%, -50%) rotate(-45deg);}\n	@media (hover: hover) and (pointer: fine) {.cmdk-close.svelte-jgcga6:hover {background:var(--cmdk-selected-bg, var(--cockpit-hover-bg, #d7efe7));}\n	}.cmdk-close.svelte-jgcga6:focus-visible {outline:2px dashed var(--cmdk-focus, var(--cockpit-focus, var(--cockpit-accent, currentColor)));outline-offset:2px;}.cmdk-list.svelte-jgcga6 {list-style:none;margin:0;padding:6px;max-height:46vh;overflow-y:auto;}.cmdk-item.svelte-jgcga6 {display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:8px 10px;border-radius:var(--cmdk-radius-sm, 6px);cursor:pointer;width:100%;border:0;background:transparent;color:inherit;font:inherit;font-size:14px;text-align:left;}.cmdk-item.is-active.svelte-jgcga6 {background:var(--cmdk-selected-bg, var(--cockpit-hover-bg, #d7efe7));}.cmdk-item.svelte-jgcga6 small:where(.svelte-jgcga6) {color:var(--cmdk-text-muted, var(--cockpit-text-muted, #63746a));font-size:11px;white-space:nowrap;}.cmdk-group-label.svelte-jgcga6 {padding:8px 10px 4px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:var(--cmdk-text-muted, var(--cockpit-text-muted, #63746a));}.cmdk-empty.svelte-jgcga6 {padding:12px 10px;color:var(--cmdk-text-muted, var(--cockpit-text-muted, #63746a));font-size:13px;}\n	@media (pointer: coarse) {.cmdk-item.svelte-jgcga6 {min-height:44px;} }\n	@media (prefers-reduced-motion: reduce) {.cmdk.svelte-jgcga6 { animation: none;} }"
};
function ui(e, t) {
	Ve(t, !0), Nr(e, li);
	let n = Xr(t, "items", 19, () => []), r = Xr(t, "placeholder", 3, "Search…"), i, a, o = null, s = /* @__PURE__ */ I(""), c = /* @__PURE__ */ I(0);
	function l(e, t) {
		if (!e) return !0;
		let n = e.toLowerCase(), r = t.toLowerCase(), i = 0;
		for (let e = 0; e < r.length && i < n.length; e++) r[e] === n[i] && i++;
		return i === n.length;
	}
	function u(e, t) {
		if (l(t, e.label) || e.hint && l(t, e.hint)) return !0;
		if (e.keywords) {
			for (let n of e.keywords) if (l(t, n)) return !0;
		}
		return !1;
	}
	let d = /* @__PURE__ */ gt(() => {
		let e = $(s).trim().toLowerCase();
		return (e ? n().filter((t) => u(t, e)) : n()).slice(0, 40);
	});
	fn(() => {
		$(d), L(c, 0);
	});
	function f() {
		if (!i || i.open) return;
		let e = document.activeElement;
		o = e instanceof HTMLElement && e !== document.body ? e : null, L(s, ""), L(c, 0), typeof i.showModal == "function" && i.showModal(), a?.focus();
	}
	function p() {
		i?.open && i.close();
	}
	function m(e) {
		e.target === e.currentTarget && p();
	}
	function h(e) {
		t.onclose?.(e);
		let n = o;
		o = null, setTimeout(() => {
			n?.isConnected && n.focus();
		}, 0);
	}
	function g(e) {
		let t = $(x).length;
		e.key === "Escape" ? (e.preventDefault(), p()) : e.key === "ArrowDown" && t ? (e.preventDefault(), L(c, ($(c) + 1) % t), _()) : e.key === "ArrowUp" && t ? (e.preventDefault(), L(c, ($(c) - 1 + t) % t), _()) : e.key === "Enter" && (e.preventDefault(), $(x)[$(c)]?.onSelect?.(), p());
	}
	function _() {
		setTimeout(() => i?.querySelector(".cmdk-item.is-active")?.scrollIntoView({ block: "nearest" }), 0);
	}
	function v(e) {
		$(x)[e]?.onSelect?.(), p();
	}
	function y(e) {
		L(c, e, !0);
	}
	let b = /* @__PURE__ */ gt(() => ri($(d))), x = /* @__PURE__ */ gt(() => $(b).orderedItems);
	var S = { open: f }, C = ci(), w = B(C), T = B(w);
	Br(T), Yr(T, (e) => a = e, () => a);
	var ee = nn(T, 2);
	k(w);
	var te = nn(w, 2), ne = B(te);
	Dr(ne, 19, () => $(b).noGroup, (e) => e.id, (e, t, n) => {
		var r = ai(), i = B(r);
		let a;
		var o = B(i), s = B(o, !0);
		k(o);
		var l = nn(o, 2), u = (e) => {
			var n = ii(), r = B(n, !0);
			k(n), yn(() => hr(r, $(t).hint)), fr(e, n);
		};
		Cr(l, (e) => {
			$(t).hint && e(u);
		}), k(i), k(r), yn(() => {
			Vr(i, "id", `cmdk-option-${$(n)}`), a = Ir(i, 1, "cmdk-item svelte-jgcga6", null, a, { "is-active": $(c) === $(n) }), Vr(i, "aria-selected", $(c) === $(n)), hr(s, $(t).label);
		}), nr("pointerenter", i, () => y($(n))), rr("click", i, () => v($(n))), fr(e, r);
	});
	var re = nn(ne, 2);
	Dr(re, 17, () => $(b).groups, (e) => e.name, (e, t) => {
		var n = oi(), r = tn(n), i = B(r, !0);
		k(r), Dr(nn(r, 2), 19, () => $(t).items, (e) => e.id, (e, n, r) => {
			let i = /* @__PURE__ */ gt(() => $(t).startIndex + $(r));
			var a = ai(), o = B(a);
			let s;
			var l = B(o), u = B(l, !0);
			k(l);
			var d = nn(l, 2), f = (e) => {
				var t = ii(), r = B(t, !0);
				k(t), yn(() => hr(r, $(n).hint)), fr(e, t);
			};
			Cr(d, (e) => {
				$(n).hint && e(f);
			}), k(o), k(a), yn(() => {
				Vr(o, "id", `cmdk-option-${$(i)}`), s = Ir(o, 1, "cmdk-item svelte-jgcga6", null, s, { "is-active": $(c) === $(i) }), Vr(o, "aria-selected", $(c) === $(i)), hr(u, $(n).label);
			}), nr("pointerenter", o, () => y($(i))), rr("click", o, () => v($(i))), fr(e, a);
		}), yn(() => hr(i, $(t).name)), fr(e, n);
	});
	var ie = nn(re, 2), ae = (e) => {
		fr(e, si());
	};
	return Cr(ie, (e) => {
		$(d).length === 0 && e(ae);
	}), k(te), k(C), Yr(C, (e) => i = e, () => i), yn(() => {
		Vr(T, "placeholder", r()), Vr(T, "aria-activedescendant", $(x).length ? `cmdk-option-${$(c)}` : void 0);
	}), nr("close", C, h), rr("click", C, m), rr("keydown", T, g), Gr(T, () => $(s), (e) => L(s, e)), rr("click", ee, p), fr(e, C), He(S);
}
ir(["click", "keydown"]);
//#endregion
//#region src/CmdkElement.svelte
function di(e, t) {
	Ve(t, !0);
	let n = Xr(t, "items", 23, () => []), r = Xr(t, "placeholder", 7, "Search…"), i, a = t.$$host;
	function o() {
		i?.open();
	}
	function s() {
		a.dispatchEvent(new CustomEvent("close", {
			bubbles: !0,
			composed: !0
		}));
	}
	var c = {
		open: o,
		get items() {
			return n();
		},
		set items(e = []) {
			n(e), Nt();
		},
		get placeholder() {
			return r();
		},
		set placeholder(e = "Search…") {
			r(e), Nt();
		}
	};
	return Yr(ui(e, {
		get items() {
			return n();
		},
		get placeholder() {
			return r();
		},
		onclose: s
	}), (e) => i = e, () => i), He(c);
}
customElements.define("worn-cmdk", ni(di, {
	items: { type: "Array" },
	placeholder: {}
}, [], ["open"]));
//#endregion
