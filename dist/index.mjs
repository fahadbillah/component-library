import { jsx as e, jsxs as o, Fragment as ve } from "react/jsx-runtime";
import ge, { forwardRef as S, useId as le, useState as O, useRef as re, useEffect as X, useContext as ke, createContext as xe, useMemo as ce } from "react";
import { createPortal as ye } from "react-dom";
const we = "_button_1ckl5_1", Ie = "_fullWidth_1ckl5_109", qe = "_disabled_1ckl5_113", Be = "_loading_1ckl5_120", Ce = "_spinner_1ckl5_124", Se = "_icon_1ckl5_130", ee = {
  button: we,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: Ie,
  disabled: qe,
  loading: Be,
  spinner: Ce,
  icon: Se
}, ze = ({
  size: t = 18,
  className: n,
  ...s
}) => /* @__PURE__ */ o(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: n,
    style: { animation: "ui-spin 0.8s linear infinite" },
    ...s,
    children: [
      /* @__PURE__ */ e("style", { children: `
      @keyframes ui-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    ` }),
      /* @__PURE__ */ e("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    ]
  }
), pe = ({
  size: t = 14,
  className: n,
  ...s
}) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: n,
    ...s,
    children: /* @__PURE__ */ e("polyline", { points: "3 8.5 6.5 12 13 4.5" })
  }
), Le = ({
  size: t = 14,
  className: n,
  ...s
}) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    className: n,
    ...s,
    children: /* @__PURE__ */ e("line", { x1: "3", y1: "8", x2: "13", y2: "8" })
  }
), be = ({
  size: t = 16,
  className: n,
  ...s
}) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: n,
    ...s,
    children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" })
  }
), _e = ({
  size: t = 18,
  className: n,
  ...s
}) => /* @__PURE__ */ o(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: n,
    ...s,
    children: [
      /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
), De = ({
  size: t = 20,
  className: n,
  ...s
}) => /* @__PURE__ */ o(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: n,
    ...s,
    children: [
      /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
    ]
  }
), Ee = ({
  size: t = 16,
  className: n,
  ...s
}) => /* @__PURE__ */ o(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: n,
    ...s,
    children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ]
  }
), Te = S(
  ({
    variant: t = "primary",
    size: n = "md",
    isLoading: s = !1,
    leftIcon: r,
    rightIcon: a,
    fullWidth: i = !1,
    disabled: m,
    className: c,
    children: d,
    ...u
  }, g) => {
    const f = [
      ee.button,
      ee[`variant-${t}`],
      ee[`size-${n}`],
      i ? ee.fullWidth : "",
      s ? ee.loading : "",
      m || s ? ee.disabled : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o(
      "button",
      {
        ref: g,
        disabled: m || s,
        className: f,
        "aria-busy": s,
        ...u,
        children: [
          s && /* @__PURE__ */ e("span", { className: ee.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(ze, { size: n === "sm" ? 14 : n === "lg" ? 20 : 16 }) }),
          !s && r && /* @__PURE__ */ e("span", { className: ee.icon, children: r }),
          d && /* @__PURE__ */ e("span", { children: d }),
          !s && a && /* @__PURE__ */ e("span", { className: ee.icon, children: a })
        ]
      }
    );
  }
);
Te.displayName = "Button";
const je = "_badge_qj0y6_1", Re = "_dot_qj0y6_63", me = {
  badge: je,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Re
}, Oe = ({
  variant: t = "neutral",
  size: n = "md",
  withDot: s = !1,
  leftIcon: r,
  rightIcon: a,
  className: i,
  children: m,
  ...c
}) => {
  const d = [
    me.badge,
    me[`variant-${t}`],
    me[`size-${n}`],
    i || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("span", { className: d, ...c, children: [
    s && /* @__PURE__ */ e("span", { className: me.dot, "aria-hidden": "true" }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r }),
    /* @__PURE__ */ e("span", { children: m }),
    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: a })
  ] });
};
Oe.displayName = "Badge";
const We = "_container_df4fv_1", Ae = "_label_df4fv_13", Ge = "_required_df4fv_23", Fe = "_inputWrapper_df4fv_27", Me = "_input_df4fv_27", Ve = "_hasLeftIcon_df4fv_80", He = "_hasRightIcon_df4fv_84", Pe = "_iconSlot_df4fv_88", Ke = "_leftSlot_df4fv_96", Ue = "_rightSlot_df4fv_100", Qe = "_hasError_df4fv_105", Je = "_helperText_df4fv_113", Xe = "_errorMessage_df4fv_119", Ye = "_disabled_df4fv_127", E = {
  container: We,
  "size-sm": "_size-sm_df4fv_9",
  label: Ae,
  required: Ge,
  inputWrapper: Fe,
  input: Me,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: Ve,
  hasRightIcon: He,
  iconSlot: Pe,
  leftSlot: Ke,
  rightSlot: Ue,
  hasError: Qe,
  helperText: Je,
  errorMessage: Xe,
  disabled: Ye
}, Ze = S(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    inputSize: r = "md",
    leftIcon: a,
    rightIcon: i,
    isRequired: m = !1,
    disabled: c = !1,
    id: d,
    className: u,
    ...g
  }, f) => {
    const k = le(), N = d || k, _ = !!s, p = [
      E.container,
      E[`size-${r}`],
      _ ? E.hasError : "",
      c ? E.disabled : "",
      a ? E.hasLeftIcon : "",
      i ? E.hasRightIcon : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("div", { className: p, children: [
      t && /* @__PURE__ */ o("label", { htmlFor: N, className: E.label, children: [
        t,
        m && /* @__PURE__ */ e("span", { className: E.required, children: "*" })
      ] }),
      /* @__PURE__ */ o("div", { className: E.inputWrapper, children: [
        a && /* @__PURE__ */ e("span", { className: `${E.iconSlot} ${E.leftSlot}`, children: a }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: f,
            id: N,
            disabled: c,
            "aria-invalid": _,
            "aria-describedby": _ ? `${N}-error` : n ? `${N}-helper` : void 0,
            className: E.input,
            ...g
          }
        ),
        i && /* @__PURE__ */ e("span", { className: `${E.iconSlot} ${E.rightSlot}`, children: i })
      ] }),
      _ && /* @__PURE__ */ e(
        "span",
        {
          id: `${N}-error`,
          className: E.errorMessage,
          role: "alert",
          children: s
        }
      ),
      !_ && n && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: E.helperText, children: n })
    ] });
  }
);
Ze.displayName = "Input";
const et = "_container_fh5kq_1", tt = "_label_fh5kq_13", nt = "_required_fh5kq_23", st = "_selectWrapper_fh5kq_27", at = "_select_fh5kq_27", rt = "_chevronIcon_fh5kq_77", lt = "_hasError_fh5kq_88", ot = "_helperText_fh5kq_96", it = "_errorMessage_fh5kq_102", ct = "_disabled_fh5kq_110", F = {
  container: et,
  "size-sm": "_size-sm_fh5kq_9",
  label: tt,
  required: nt,
  selectWrapper: st,
  select: at,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: rt,
  hasError: lt,
  helperText: ot,
  errorMessage: it,
  disabled: ct
}, dt = S(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    selectSize: r = "md",
    options: a,
    placeholder: i,
    isRequired: m = !1,
    disabled: c = !1,
    id: d,
    className: u,
    children: g,
    ...f
  }, k) => {
    const N = le(), _ = d || N, p = !!s, v = [
      F.container,
      F[`size-${r}`],
      p ? F.hasError : "",
      c ? F.disabled : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("div", { className: v, children: [
      t && /* @__PURE__ */ o("label", { htmlFor: _, className: F.label, children: [
        t,
        m && /* @__PURE__ */ e("span", { className: F.required, children: "*" })
      ] }),
      /* @__PURE__ */ o("div", { className: F.selectWrapper, children: [
        /* @__PURE__ */ o(
          "select",
          {
            ref: k,
            id: _,
            disabled: c,
            "aria-invalid": p,
            "aria-describedby": p ? `${_}-error` : n ? `${_}-helper` : void 0,
            className: F.select,
            ...f,
            children: [
              i && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: i }),
              a ? a.map((q) => /* @__PURE__ */ e(
                "option",
                {
                  value: q.value,
                  disabled: q.disabled,
                  children: q.label
                },
                q.value
              )) : g
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: F.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(be, { size: 16 }) })
      ] }),
      p && /* @__PURE__ */ e(
        "span",
        {
          id: `${_}-error`,
          className: F.errorMessage,
          role: "alert",
          children: s
        }
      ),
      !p && n && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: F.helperText, children: n })
    ] });
  }
);
dt.displayName = "Select";
const _t = "_container_1d3rw_1", ut = "_label_1d3rw_14", ht = "_required_1d3rw_24", mt = "_trigger_1d3rw_28", pt = "_isOpen_1d3rw_53", bt = "_selectedContent_1d3rw_71", ft = "_placeholder_1d3rw_80", vt = "_chevron_1d3rw_84", gt = "_chevronOpen_1d3rw_93", yt = "_menu_1d3rw_98", Nt = "_dropdownIn_1d3rw_1", $t = "_menuItem_1d3rw_116", kt = "_itemDisabled_1d3rw_128", xt = "_itemSelected_1d3rw_132", wt = "_itemLeft_1d3rw_147", It = "_itemText_1d3rw_154", qt = "_itemLabel_1d3rw_161", Bt = "_itemDescription_1d3rw_169", Ct = "_checkSlot_1d3rw_174", St = "_hasError_1d3rw_183", zt = "_helperText_1d3rw_191", Lt = "_errorMessage_1d3rw_197", Dt = "_disabled_1d3rw_205", C = {
  container: _t,
  "size-sm": "_size-sm_1d3rw_10",
  label: ut,
  required: ht,
  trigger: mt,
  isOpen: pt,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: bt,
  placeholder: ft,
  chevron: vt,
  chevronOpen: gt,
  menu: yt,
  dropdownIn: Nt,
  menuItem: $t,
  itemDisabled: kt,
  itemSelected: xt,
  itemLeft: wt,
  itemText: It,
  itemLabel: qt,
  itemDescription: Bt,
  checkSlot: Ct,
  hasError: St,
  helperText: zt,
  errorMessage: Lt,
  disabled: Dt
}, Et = "_container_1lebu_1", Tt = "_tint_1lebu_14", jt = "_solid_1lebu_20", Rt = "_image_1lebu_26", Ot = "_fallback_1lebu_33", Wt = "_statusDot_1lebu_74", ae = {
  container: Et,
  tint: Tt,
  solid: jt,
  image: Rt,
  fallback: Ot,
  "size-xs": "_size-xs_1lebu_43",
  "size-sm": "_size-sm_1lebu_49",
  "size-md": "_size-md_1lebu_55",
  "size-lg": "_size-lg_1lebu_61",
  "size-xl": "_size-xl_1lebu_67",
  statusDot: Wt,
  "status-online": "_status-online_1lebu_102",
  "status-busy": "_status-busy_1lebu_106",
  "status-away": "_status-away_1lebu_110",
  "status-offline": "_status-offline_1lebu_114"
};
function At(t, n) {
  if (n) return n;
  if (!t) return "";
  const s = t.trim().split(/\s+/);
  return s.length === 1 ? s[0].substring(0, 2).toUpperCase() : (s[0][0] + s[s.length - 1][0]).toUpperCase();
}
const de = ({
  src: t,
  alt: n = "",
  name: s,
  initials: r,
  size: a = "md",
  variant: i = "tint",
  status: m,
  className: c,
  ...d
}) => {
  const [u, g] = O(!1), f = At(s, r), k = [
    ae.container,
    ae[`size-${a}`],
    ae[i],
    c || ""
  ].filter(Boolean).join(" "), N = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ o("div", { className: k, title: s || n, ...d, children: [
    t && !u ? /* @__PURE__ */ e(
      "img",
      {
        src: t,
        alt: n || s || "Avatar",
        className: ae.image,
        onError: () => g(!0)
      }
    ) : f ? /* @__PURE__ */ e("span", { className: ae.fallback, children: f }) : /* @__PURE__ */ e("span", { className: ae.fallback, children: /* @__PURE__ */ e(De, { size: N[a] }) }),
    m && /* @__PURE__ */ e(
      "span",
      {
        className: `${ae.statusDot} ${ae[`status-${m}`]}`,
        "aria-label": `Status: ${m}`
      }
    )
  ] });
};
de.displayName = "Avatar";
const Gt = ({
  label: t,
  placeholder: n = "Select an option...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: m,
  onChange: c,
  size: d = "md",
  disabled: u = !1,
  isRequired: g = !1,
  className: f,
  id: k
}) => {
  const N = le(), _ = k || N, p = re(null), [v, q] = O(!1), [j, G] = O(
    i || m
  );
  X(() => {
    i !== void 0 && G(i);
  }, [i]), X(() => {
    const b = (B) => {
      p.current && !p.current.contains(B.target) && q(!1);
    };
    return v && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [v]);
  const I = a.find((b) => b.value === j), z = !!r, R = (b) => {
    b.disabled || (G(b.value), c == null || c(b.value, b), q(!1));
  }, W = (b) => {
    if (!u) {
      if (b.key === "Enter" || b.key === " ")
        b.preventDefault(), q((B) => !B);
      else if (b.key === "Escape")
        q(!1);
      else if (b.key === "ArrowDown" && v) {
        b.preventDefault();
        const B = a.findIndex(
          (A) => A.value === j
        ), D = a[B + 1];
        D && !D.disabled && R(D);
      } else if (b.key === "ArrowUp" && v) {
        b.preventDefault();
        const B = a.findIndex(
          (A) => A.value === j
        ), D = a[B - 1];
        D && !D.disabled && R(D);
      }
    }
  }, L = [
    C.container,
    C[`size-${d}`],
    v ? C.isOpen : "",
    z ? C.hasError : "",
    u ? C.disabled : "",
    f || ""
  ].filter(Boolean).join(" "), P = d === "sm" ? "xs" : d === "lg" ? "md" : "sm";
  return /* @__PURE__ */ o("div", { ref: p, className: L, children: [
    t && /* @__PURE__ */ o("label", { id: `${_}-label`, className: C.label, children: [
      t,
      g && /* @__PURE__ */ e("span", { className: C.required, children: "*" })
    ] }),
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        id: _,
        "aria-haspopup": "listbox",
        "aria-expanded": v,
        "aria-labelledby": t ? `${_}-label ${_}` : void 0,
        disabled: u,
        onClick: () => q((b) => !b),
        onKeyDown: W,
        className: C.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: C.selectedContent, children: I ? /* @__PURE__ */ o(ve, { children: [
            I.avatar && /* @__PURE__ */ e(
              de,
              {
                size: I.avatar.size || P,
                ...I.avatar
              }
            ),
            I.icon && /* @__PURE__ */ e("span", { children: I.icon }),
            /* @__PURE__ */ e("span", { children: I.label })
          ] }) : /* @__PURE__ */ e("span", { className: C.placeholder, children: n }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${C.chevron} ${v ? C.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(be, { size: 16 })
            }
          )
        ]
      }
    ),
    v && /* @__PURE__ */ e(
      "ul",
      {
        role: "listbox",
        "aria-labelledby": `${_}-label`,
        className: C.menu,
        children: a.map((b) => {
          const B = b.value === j, D = [
            C.menuItem,
            B ? C.itemSelected : "",
            b.disabled ? C.itemDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ o(
            "li",
            {
              role: "option",
              "aria-selected": B,
              "aria-disabled": b.disabled,
              onClick: () => R(b),
              className: D,
              children: [
                /* @__PURE__ */ o("div", { className: C.itemLeft, children: [
                  b.avatar && /* @__PURE__ */ e(
                    de,
                    {
                      size: b.avatar.size || P,
                      ...b.avatar
                    }
                  ),
                  b.icon && /* @__PURE__ */ e("span", { children: b.icon }),
                  /* @__PURE__ */ o("div", { className: C.itemText, children: [
                    /* @__PURE__ */ e("span", { className: C.itemLabel, children: b.label }),
                    b.description && /* @__PURE__ */ e("span", { className: C.itemDescription, children: b.description })
                  ] })
                ] }),
                B && /* @__PURE__ */ e("span", { className: C.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(pe, { size: 14 }) })
              ]
            },
            b.value
          );
        })
      }
    ),
    z && /* @__PURE__ */ e(
      "span",
      {
        id: `${_}-error`,
        className: C.errorMessage,
        role: "alert",
        children: r
      }
    ),
    !z && s && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: C.helperText, children: s })
  ] });
};
Gt.displayName = "Dropdown";
const Ft = "_container_1ms02_1", Mt = "_hasDescription_1ms02_10", Vt = "_box_1ms02_14", Ht = "_nativeInput_1ms02_32", Pt = "_checked_1ms02_45", Kt = "_indeterminate_1ms02_46", Ut = "_disabled_1ms02_51", Qt = "_textGroup_1ms02_55", Jt = "_label_1ms02_61", Xt = "_description_1ms02_68", Q = {
  container: Ft,
  hasDescription: Mt,
  box: Vt,
  nativeInput: Ht,
  checked: Pt,
  indeterminate: Kt,
  disabled: Ut,
  textGroup: Qt,
  label: Jt,
  description: Xt
}, Yt = S(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: r,
    indeterminate: a = !1,
    disabled: i = !1,
    className: m,
    onChange: c,
    ...d
  }, u) => {
    const g = re(null), f = u || g;
    X(() => {
      f && "current" in f && f.current && (f.current.indeterminate = a);
    }, [a, f]);
    const k = s ?? r ?? !1, N = [
      Q.container,
      n ? Q.hasDescription : "",
      i ? Q.disabled : "",
      m || ""
    ].filter(Boolean).join(" "), _ = [
      Q.box,
      a ? Q.indeterminate : k ? Q.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("label", { className: N, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: f,
          checked: s,
          defaultChecked: r,
          disabled: i,
          className: Q.nativeInput,
          onChange: c,
          ...d
        }
      ),
      /* @__PURE__ */ o("span", { className: _, "aria-hidden": "true", children: [
        a && /* @__PURE__ */ e(Le, { size: 12 }),
        !a && k && /* @__PURE__ */ e(pe, { size: 12 })
      ] }),
      (t || n) && /* @__PURE__ */ o("span", { className: Q.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: Q.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: Q.description, children: n })
      ] })
    ] });
  }
);
Yt.displayName = "Checkbox";
const Zt = "_container_m4qf3_1", en = "_label_m4qf3_9", tn = "_required_m4qf3_19", nn = "_textareaWrapper_m4qf3_23", sn = "_textarea_m4qf3_23", an = "_hasError_m4qf3_58", rn = "_footer_m4qf3_66", ln = "_helperText_m4qf3_74", on = "_errorMessage_m4qf3_78", cn = "_charCount_m4qf3_83", dn = "_disabled_m4qf3_89", M = {
  container: Zt,
  label: en,
  required: tn,
  textareaWrapper: nn,
  textarea: sn,
  hasError: an,
  footer: rn,
  helperText: ln,
  errorMessage: on,
  charCount: cn,
  disabled: dn
}, _n = S(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    isRequired: r = !1,
    showCharCount: a = !1,
    maxLength: i,
    disabled: m = !1,
    value: c,
    defaultValue: d,
    id: u,
    className: g,
    onChange: f,
    ...k
  }, N) => {
    const _ = le(), p = u || _, v = !!s, [q, j] = ge.useState(() => typeof c == "string" ? c.length : typeof d == "string" ? d.length : 0), G = (z) => {
      j(z.target.value.length), f == null || f(z);
    }, I = [
      M.container,
      v ? M.hasError : "",
      m ? M.disabled : "",
      g || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("div", { className: I, children: [
      t && /* @__PURE__ */ o("label", { htmlFor: p, className: M.label, children: [
        t,
        r && /* @__PURE__ */ e("span", { className: M.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: M.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: N,
          id: p,
          disabled: m,
          value: c,
          defaultValue: d,
          maxLength: i,
          onChange: G,
          "aria-invalid": v,
          "aria-describedby": v ? `${p}-error` : n ? `${p}-helper` : void 0,
          className: M.textarea,
          ...k
        }
      ) }),
      /* @__PURE__ */ o("div", { className: M.footer, children: [
        v && /* @__PURE__ */ e(
          "span",
          {
            id: `${p}-error`,
            className: M.errorMessage,
            role: "alert",
            children: s
          }
        ),
        !v && n && /* @__PURE__ */ e("span", { id: `${p}-helper`, className: M.helperText, children: n }),
        a && i && /* @__PURE__ */ o("span", { className: M.charCount, children: [
          q,
          " / ",
          i
        ] })
      ] })
    ] });
  }
);
_n.displayName = "Textarea";
const un = "_card_7pqx0_1", hn = "_interactive_7pqx0_28", mn = "_header_7pqx0_56", pn = "_headerBordered_7pqx0_64", bn = "_title_7pqx0_69", fn = "_description_7pqx0_78", vn = "_content_7pqx0_85", gn = "_footer_7pqx0_89", yn = "_footerBordered_7pqx0_98", H = {
  card: un,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: hn,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: mn,
  headerBordered: pn,
  title: bn,
  description: fn,
  content: vn,
  footer: gn,
  footerBordered: yn
}, Nn = S(
  ({
    elevation: t = 1,
    padding: n = "none",
    isInteractive: s = !1,
    className: r,
    children: a,
    ...i
  }, m) => {
    const c = [
      H.card,
      H[`elevation-${t}`],
      H[`padding-${n}`],
      s ? H.interactive : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: m, className: c, ...i, children: a });
  }
);
Nn.displayName = "Card";
const $n = S(
  ({ bordered: t = !1, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${H.header} ${t ? H.headerBordered : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
$n.displayName = "CardHeader";
const kn = S(
  ({ as: t = "h3", className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    t,
    {
      ref: a,
      className: `${H.title} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
kn.displayName = "CardTitle";
const xn = S(({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
  "p",
  {
    ref: r,
    className: `${H.description} ${t || ""}`,
    ...s,
    children: n
  }
));
xn.displayName = "CardDescription";
const wn = S(
  ({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${H.content} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
wn.displayName = "CardContent";
const In = S(
  ({ bordered: t = !1, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${H.footer} ${t ? H.footerBordered : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
In.displayName = "CardFooter";
const qn = "_container_1xw60_1", Bn = "_table_1xw60_10", Cn = "_header_1xw60_19", Sn = "_headCell_1xw60_24", zn = "_row_1xw60_35", Ln = "_hoverable_1xw60_44", Dn = "_cell_1xw60_48", En = "_tabularNums_1xw60_54", Y = {
  container: qn,
  table: Bn,
  header: Cn,
  headCell: Sn,
  row: zn,
  hoverable: Ln,
  cell: Dn,
  tabularNums: En,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Tn = S(
  ({ className: t, containerClassName: n, children: s, ...r }, a) => /* @__PURE__ */ e("div", { className: `${Y.container} ${n || ""}`, children: /* @__PURE__ */ e(
    "table",
    {
      ref: a,
      className: `${Y.table} ${t || ""}`,
      ...r,
      children: s
    }
  ) })
);
Tn.displayName = "Table";
const jn = S(({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("thead", { ref: r, className: `${Y.header} ${t || ""}`, ...s, children: n }));
jn.displayName = "TableHeader";
const Rn = S(({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: t, ...s, children: n }));
Rn.displayName = "TableBody";
const On = S(
  ({ isHoverable: t = !0, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "tr",
    {
      ref: a,
      className: `${Y.row} ${t ? Y.hoverable : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
On.displayName = "TableRow";
const Wn = S(
  ({ align: t = "left", className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "th",
    {
      ref: a,
      className: `${Y.headCell} ${Y[`align-${t}`]} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
Wn.displayName = "TableHead";
const An = S(
  ({ align: t = "left", isNumeric: n = !1, className: s, children: r, ...a }, i) => /* @__PURE__ */ e(
    "td",
    {
      ref: i,
      className: `${Y.cell} ${Y[`align-${t}`]} ${n ? Y.tabularNums : ""} ${s || ""}`,
      ...a,
      children: r
    }
  )
);
An.displayName = "TableCell";
const Gn = "_overlay_cpmq9_1", Fn = "_fadeIn_cpmq9_1", Mn = "_modal_cpmq9_15", Vn = "_scaleIn_cpmq9_1", Hn = "_header_cpmq9_44", Pn = "_title_cpmq9_52", Kn = "_closeButton_cpmq9_61", Un = "_body_cpmq9_84", Qn = "_footer_cpmq9_93", se = {
  overlay: Gn,
  fadeIn: Fn,
  modal: Mn,
  scaleIn: Vn,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: Hn,
  title: Pn,
  closeButton: Kn,
  body: Un,
  footer: Qn
}, Jn = ({
  isOpen: t,
  onClose: n,
  title: s,
  size: r = "md",
  closeOnOverlayClick: a = !0,
  closeOnEsc: i = !0,
  showCloseButton: m = !0,
  footer: c,
  children: d,
  className: u
}) => {
  const g = le(), f = re(null);
  if (X(() => {
    if (!t) return;
    const p = (v) => {
      v.key === "Escape" && i && n();
    };
    return document.addEventListener("keydown", p), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    };
  }, [t, i, n]), !t) return null;
  const k = (p) => {
    p.target === p.currentTarget && a && n();
  }, N = [se.modal, se[`size-${r}`], u || ""].filter(Boolean).join(" "), _ = /* @__PURE__ */ e("div", { className: se.overlay, onClick: k, children: /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? g : void 0,
      tabIndex: -1,
      className: N,
      children: [
        (s || m) && /* @__PURE__ */ o("div", { className: se.header, children: [
          s && /* @__PURE__ */ e("h2", { id: g, className: se.title, children: s }),
          m && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: n,
              className: se.closeButton,
              children: /* @__PURE__ */ e(_e, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: se.body, children: d }),
        c && /* @__PURE__ */ e("div", { className: se.footer, children: c })
      ]
    }
  ) });
  return typeof document < "u" ? ye(_, document.body) : null;
};
Jn.displayName = "Modal";
const Xn = ({
  className: t,
  children: n,
  ...s
}) => /* @__PURE__ */ e("div", { className: `${se.footer} ${t || ""}`, ...s, children: n });
Xn.displayName = "ModalFooter";
const Yn = "_tabList_7bmw6_1", Zn = "_tab_7bmw6_1", es = "_tabActive_7bmw6_50", ts = "_badge_7bmw6_76", ns = "_fullWidth_7bmw6_93", ss = "_panel_7bmw6_101", oe = {
  tabList: Yn,
  "variant-underline": "_variant-underline_7bmw6_11",
  tab: Zn,
  tabActive: es,
  badge: ts,
  fullWidth: ns,
  panel: ss
}, as = ({
  tabs: t,
  activeTab: n,
  defaultActiveTab: s,
  onChange: r,
  variant: a = "pill",
  fullWidth: i = !1,
  className: m,
  children: c
}) => {
  var N;
  const [d, u] = O(
    n || s || ((N = t[0]) == null ? void 0 : N.id) || ""
  ), g = n !== void 0 ? n : d, f = (_, p) => {
    p || (u(_), r == null || r(_));
  }, k = [
    oe.tabList,
    oe[`variant-${a}`],
    i ? oe.fullWidth : "",
    m || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ e("div", { role: "tablist", className: k, children: t.map((_) => {
      const p = _.id === g, v = [oe.tab, p ? oe.tabActive : ""].filter(Boolean).join(" ");
      return /* @__PURE__ */ o(
        "button",
        {
          role: "tab",
          type: "button",
          "aria-selected": p,
          "aria-controls": `panel-${_.id}`,
          id: `tab-${_.id}`,
          disabled: _.disabled,
          onClick: () => f(_.id, _.disabled),
          className: v,
          children: [
            _.icon && /* @__PURE__ */ e("span", { children: _.icon }),
            /* @__PURE__ */ e("span", { children: _.label }),
            _.badge !== void 0 && /* @__PURE__ */ e("span", { className: oe.badge, children: _.badge })
          ]
        },
        _.id
      );
    }) }),
    c
  ] });
};
as.displayName = "Tabs";
const rs = ({
  tabId: t,
  activeTabId: n,
  className: s,
  children: r,
  ...a
}) => t !== n ? null : /* @__PURE__ */ e(
  "div",
  {
    role: "tabpanel",
    id: `panel-${t}`,
    "aria-labelledby": `tab-${t}`,
    className: `${oe.panel} ${s || ""}`,
    ...a,
    children: r
  }
);
rs.displayName = "TabPanel";
const ls = "_container_1xroe_1", os = "_track_1xroe_10", is = "_thumb_1xroe_24", cs = "_checked_1xroe_34", ds = "_nativeInput_1xroe_43", _s = "_label_1xroe_55", us = "_description_1xroe_61", hs = "_textGroup_1xroe_66", ms = "_disabled_1xroe_72", te = {
  container: ls,
  track: os,
  thumb: is,
  checked: cs,
  nativeInput: ds,
  label: _s,
  description: us,
  textGroup: hs,
  disabled: ms
}, ps = S(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: r,
    disabled: a = !1,
    className: i,
    onChange: m,
    ...c
  }, d) => {
    const u = s ?? r ?? !1, g = [
      te.container,
      u ? te.checked : "",
      a ? te.disabled : "",
      i || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("label", { className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: d,
          checked: s,
          defaultChecked: r,
          disabled: a,
          "aria-checked": u,
          className: te.nativeInput,
          onChange: m,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: te.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: te.thumb }) }),
      (t || n) && /* @__PURE__ */ o("span", { className: te.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: te.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: te.description, children: n })
      ] })
    ] });
  }
);
ps.displayName = "Switch";
const bs = "_group_1e0nk_1", fs = "_groupLabel_1e0nk_8", vs = "_item_1e0nk_14", gs = "_circle_1e0nk_22", ys = "_dot_1e0nk_35", Ns = "_checked_1e0nk_45", $s = "_nativeInput_1e0nk_54", ks = "_label_1e0nk_67", xs = "_description_1e0nk_73", ws = "_textGroup_1e0nk_78", Is = "_disabled_1e0nk_84", V = {
  group: bs,
  groupLabel: fs,
  item: vs,
  circle: gs,
  dot: ys,
  checked: Ns,
  nativeInput: $s,
  label: ks,
  description: xs,
  textGroup: ws,
  disabled: Is
}, Ne = xe(null), qs = ({
  name: t,
  value: n,
  defaultValue: s,
  onChange: r,
  label: a,
  disabled: i = !1,
  className: m,
  children: c
}) => {
  const [d, u] = ge.useState(
    n || s
  ), g = n !== void 0 ? n : d, f = (k) => {
    u(k.target.value), r == null || r(k.target.value);
  };
  return /* @__PURE__ */ e(
    Ne.Provider,
    {
      value: {
        name: t,
        value: g,
        onChange: f,
        disabled: i
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          role: "radiogroup",
          "aria-label": a,
          className: `${V.group} ${m || ""}`,
          children: [
            a && /* @__PURE__ */ e("span", { className: V.groupLabel, children: a }),
            c
          ]
        }
      )
    }
  );
};
qs.displayName = "RadioGroup";
const Bs = S(
  ({
    value: t,
    label: n,
    description: s,
    disabled: r,
    className: a,
    checked: i,
    onChange: m,
    ...c
  }, d) => {
    const u = ke(Ne), g = u ? u.value === t : i, f = r || (u == null ? void 0 : u.disabled) || !1, k = (u == null ? void 0 : u.name) || c.name, N = [
      V.item,
      g ? V.checked : "",
      f ? V.disabled : "",
      a || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("label", { className: N, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          type: "radio",
          name: k,
          value: t,
          checked: g,
          disabled: f,
          onChange: (p) => {
            var v;
            m == null || m(p), (v = u == null ? void 0 : u.onChange) == null || v.call(u, p);
          },
          className: V.nativeInput,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: V.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: V.dot }) }),
      (n || s) && /* @__PURE__ */ o("span", { className: V.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: V.label, children: n }),
        s && /* @__PURE__ */ e("span", { className: V.description, children: s })
      ] })
    ] });
  }
);
Bs.displayName = "Radio";
const Cs = "_wrapper_yiqhg_1", Ss = "_searchIcon_yiqhg_8", zs = "_input_yiqhg_18", Ls = "_rightSlots_yiqhg_42", Ds = "_clearButton_yiqhg_50", Es = "_shortcut_yiqhg_66", ie = {
  wrapper: Cs,
  searchIcon: Ss,
  input: zs,
  rightSlots: Ls,
  clearButton: Ds,
  shortcut: Es
}, Ts = ({
  ...t
}) => /* @__PURE__ */ o(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...t,
    children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ]
  }
), js = S(
  ({
    value: t,
    defaultValue: n,
    onChange: s,
    onClear: r,
    shortcutHint: a = "⌘K",
    placeholder: i = "Search records, students, classes...",
    className: m,
    ...c
  }, d) => {
    const [u, g] = O(
      t || n || ""
    ), f = t !== void 0, k = f ? t : u, N = (p) => {
      f || g(p.target.value), s == null || s(p);
    }, _ = () => {
      f || g(""), r == null || r();
    };
    return /* @__PURE__ */ o("div", { className: `${ie.wrapper} ${m || ""}`, children: [
      /* @__PURE__ */ e("span", { className: ie.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(Ts, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          type: "search",
          value: k,
          placeholder: i,
          onChange: N,
          className: ie.input,
          ...c
        }
      ),
      /* @__PURE__ */ o("div", { className: ie.rightSlots, children: [
        k && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: _,
            className: ie.clearButton,
            children: /* @__PURE__ */ e(_e, { size: 14 })
          }
        ),
        a && /* @__PURE__ */ e("kbd", { className: ie.shortcut, children: a })
      ] })
    ] });
  }
);
js.displayName = "SearchInput";
const Rs = "_card_kgob9_1", Os = "_topRow_kgob9_18", Ws = "_title_kgob9_25", As = "_iconSlot_kgob9_33", Gs = "_metricRow_kgob9_49", Fs = "_value_kgob9_55", Ms = "_trendBadge_kgob9_65", Vs = "_description_kgob9_90", J = {
  card: Rs,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: Os,
  title: Ws,
  iconSlot: As,
  metricRow: Gs,
  value: Fs,
  trendBadge: Ms,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: Vs
}, Hs = ({
  title: t,
  value: n,
  description: s,
  trend: r,
  icon: a,
  highlighted: i = !1,
  className: m,
  ...c
}) => {
  const d = [
    J.card,
    i ? J["variant-highlight"] : "",
    m || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("div", { className: d, ...c, children: [
    /* @__PURE__ */ o("div", { className: J.topRow, children: [
      /* @__PURE__ */ e("h4", { className: J.title, children: t }),
      a && /* @__PURE__ */ e("span", { className: J.iconSlot, children: a })
    ] }),
    /* @__PURE__ */ o("div", { className: J.metricRow, children: [
      /* @__PURE__ */ e("span", { className: J.value, children: n }),
      r && /* @__PURE__ */ o(
        "span",
        {
          className: `${J.trendBadge} ${J[`trend-${r.direction}`]}`,
          children: [
            r.direction === "up" && "↑ ",
            r.direction === "down" && "↓ ",
            r.value
          ]
        }
      )
    ] }),
    s && /* @__PURE__ */ e("p", { className: J.description, children: s })
  ] });
};
Hs.displayName = "StatCard";
const Ps = "_overlay_lam6o_1", Ks = "_fadeIn_lam6o_1", Us = "_drawer_lam6o_11", Qs = "_slideInRight_lam6o_1", Js = "_slideInLeft_lam6o_1", Xs = "_header_lam6o_51", Ys = "_title_lam6o_59", Zs = "_closeButton_lam6o_67", ea = "_body_lam6o_90", ta = "_footer_lam6o_99", ne = {
  overlay: Ps,
  fadeIn: Ks,
  drawer: Us,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: Qs,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: Js,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: Xs,
  title: Ys,
  closeButton: Zs,
  body: ea,
  footer: ta
}, na = ({
  isOpen: t,
  onClose: n,
  title: s,
  placement: r = "right",
  size: a = "md",
  closeOnOverlayClick: i = !0,
  closeOnEsc: m = !0,
  showCloseButton: c = !0,
  footer: d,
  children: u,
  className: g
}) => {
  const f = le(), k = re(null);
  if (X(() => {
    if (!t) return;
    const v = (q) => {
      q.key === "Escape" && m && n();
    };
    return document.addEventListener("keydown", v), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    };
  }, [t, m, n]), !t) return null;
  const N = (v) => {
    v.target === v.currentTarget && i && n();
  }, _ = [
    ne.drawer,
    ne[`placement-${r}`],
    ne[`size-${a}`],
    g || ""
  ].filter(Boolean).join(" "), p = /* @__PURE__ */ o(ve, { children: [
    /* @__PURE__ */ e("div", { className: ne.overlay, onClick: N }),
    /* @__PURE__ */ o(
      "div",
      {
        ref: k,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": s ? f : void 0,
        tabIndex: -1,
        className: _,
        children: [
          (s || c) && /* @__PURE__ */ o("div", { className: ne.header, children: [
            s && /* @__PURE__ */ e("h3", { id: f, className: ne.title, children: s }),
            c && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: n,
                className: ne.closeButton,
                children: /* @__PURE__ */ e(_e, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: ne.body, children: u }),
          d && /* @__PURE__ */ e("div", { className: ne.footer, children: d })
        ]
      }
    )
  ] });
  return typeof document < "u" ? ye(p, document.body) : null;
};
na.displayName = "Drawer";
const sa = "_chip_ldr6y_1", aa = "_pill_ldr6y_14", ra = "_rounded_ldr6y_18", la = "_sm_ldr6y_22", oa = "_md_ldr6y_36", ia = "_lg_ldr6y_45", ca = "_neutral_ldr6y_55", da = "_primary_ldr6y_61", _a = "_tonal_ldr6y_68", ua = "_outline_ldr6y_75", ha = "_success_ldr6y_81", ma = "_warning_ldr6y_87", pa = "_danger_ldr6y_93", ba = "_clickable_ldr6y_100", fa = "_disabled_ldr6y_104", va = "_selected_ldr6y_104", ga = "_selectedIcon_ldr6y_131", ya = "_avatarSlot_ldr6y_139", Na = "_hasAvatar_ldr6y_183", $a = "_iconSlot_ldr6y_212", ka = "_label_ldr6y_221", xa = "_countBadge_ldr6y_230", wa = "_removeButton_ldr6y_251", T = {
  chip: sa,
  pill: aa,
  rounded: ra,
  sm: la,
  md: oa,
  lg: ia,
  neutral: ca,
  primary: da,
  tonal: _a,
  outline: ua,
  success: ha,
  warning: ma,
  danger: pa,
  clickable: ba,
  disabled: fa,
  selected: va,
  selectedIcon: ga,
  avatarSlot: ya,
  hasAvatar: Na,
  iconSlot: $a,
  label: ka,
  countBadge: xa,
  removeButton: wa
}, Ia = ({
  label: t,
  avatar: n,
  icon: s,
  variant: r,
  size: a = "md",
  shape: i = "pill",
  selected: m = !1,
  count: c,
  onRemove: d,
  disabled: u = !1,
  className: g,
  onClick: f,
  ...k
}) => {
  const N = !!f && !u, _ = r ?? (n ? "tonal" : "neutral"), p = [
    T.chip,
    T[_],
    T[a],
    T[i],
    n ? T.hasAvatar : "",
    m ? T.selected : "",
    N ? T.clickable : "",
    d ? T.removable : "",
    u ? T.disabled : "",
    g || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(
    "div",
    {
      className: p,
      role: N ? "button" : "status",
      tabIndex: N ? 0 : void 0,
      onClick: N ? f : void 0,
      ...k,
      children: [
        m && /* @__PURE__ */ e("span", { className: T.selectedIcon, children: /* @__PURE__ */ e(pe, { size: a === "sm" ? 10 : a === "lg" ? 14 : 12 }) }),
        !m && n && /* @__PURE__ */ e("span", { className: T.avatarSlot, children: n }),
        !m && !n && s && /* @__PURE__ */ e("span", { className: T.iconSlot, children: s }),
        /* @__PURE__ */ e("span", { className: T.label, children: t }),
        c !== void 0 && /* @__PURE__ */ e("span", { className: T.countBadge, children: c }),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            className: T.removeButton,
            onClick: (v) => {
              v.stopPropagation(), !u && d && d();
            },
            disabled: u,
            children: /* @__PURE__ */ e(_e, { size: a === "sm" ? 10 : a === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, qa = "_container_d3es0_1", Ba = "_label_d3es0_14", Ca = "_required_d3es0_24", Sa = "_trigger_d3es0_29", za = "_disabled_d3es0_50", La = "_isOpen_d3es0_54", Da = "_chipContainer_d3es0_72", Ea = "_searchInput_d3es0_81", Ta = "_placeholder_d3es0_93", ja = "_moreCount_d3es0_97", Ra = "_trailing_d3es0_112", Oa = "_clearAllButton_d3es0_119", Wa = "_chevron_d3es0_137", Aa = "_menu_d3es0_149", Ga = "_empty_d3es0_169", Fa = "_option_d3es0_177", Ma = "_focused_d3es0_193", Va = "_selected_d3es0_197", Ha = "_checkboxSlot_d3es0_206", Pa = "_checkboxBox_d3es0_213", Ka = "_checkboxChecked_d3es0_226", Ua = "_avatarSlot_d3es0_231", Qa = "_iconSlot_d3es0_244", Ja = "_labelCol_d3es0_251", Xa = "_labelRow_d3es0_258", Ya = "_optionLabel_d3es0_265", Za = "_badge_d3es0_272", er = "_optionDescription_d3es0_300", tr = "_optionDisabled_d3es0_307", nr = "_hasError_d3es0_314", sr = "_errorText_d3es0_323", ar = "_helperText_d3es0_328", $ = {
  container: qa,
  "size-sm": "_size-sm_d3es0_10",
  label: Ba,
  required: Ca,
  trigger: Sa,
  disabled: za,
  isOpen: La,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: Da,
  searchInput: Ea,
  placeholder: Ta,
  moreCount: ja,
  trailing: Ra,
  clearAllButton: Oa,
  chevron: Wa,
  menu: Aa,
  empty: Ga,
  option: Fa,
  focused: Ma,
  selected: Va,
  checkboxSlot: Ha,
  checkboxBox: Pa,
  checkboxChecked: Ka,
  avatarSlot: Ua,
  iconSlot: Qa,
  labelCol: Ja,
  labelRow: Xa,
  optionLabel: Ya,
  badge: Za,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: er,
  optionDisabled: tr,
  hasError: nr,
  errorText: sr,
  helperText: ar
}, Wr = ({
  label: t,
  placeholder: n = "Select items...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: m,
  onChange: c,
  size: d = "md",
  chipShape: u,
  disabled: g = !1,
  isRequired: f = !1,
  isSearchable: k = !0,
  className: N,
  id: _,
  maxDisplayedChips: p
}) => {
  const v = le(), q = _ || v, j = re(null), G = re(null), [I, z] = O(!1), [R, W] = O(""), [L, P] = O(
    i || m || []
  ), [b, B] = O(-1);
  X(() => {
    i !== void 0 && P(i);
  }, [i]);
  const D = ce(() => a.filter((l) => L.includes(l.value)), [a, L]), A = ce(() => {
    if (!R.trim()) return a;
    const l = R.toLowerCase();
    return a.filter(
      (w) => w.label.toLowerCase().includes(l) || w.description && w.description.toLowerCase().includes(l) || w.badge && w.badge.toLowerCase().includes(l)
    );
  }, [a, R]);
  X(() => {
    const l = (w) => {
      j.current && !j.current.contains(w.target) && (z(!1), W(""), B(-1));
    };
    return I && document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, [I]);
  const ue = (l) => {
    if (l.disabled || g) return;
    let w;
    L.includes(l.value) ? w = L.filter((Z) => Z !== l.value) : w = [...L, l.value], i === void 0 && P(w);
    const U = a.filter((Z) => w.includes(Z.value));
    c == null || c(w, U);
  }, he = (l) => {
    if (g) return;
    const w = L.filter((Z) => Z !== l);
    i === void 0 && P(w);
    const U = a.filter((Z) => w.includes(Z.value));
    c == null || c(w, U);
  }, fe = (l) => {
    if (!g) {
      if (l.key === "Backspace" && R === "" && L.length > 0) {
        he(L[L.length - 1]);
        return;
      }
      if (!I) {
        (l.key === "Enter" || l.key === " " || l.key === "ArrowDown") && (l.preventDefault(), z(!0));
        return;
      }
      l.key === "Escape" ? (l.preventDefault(), z(!1), W("")) : l.key === "ArrowDown" ? (l.preventDefault(), B(
        (w) => w < A.length - 1 ? w + 1 : 0
      )) : l.key === "ArrowUp" ? (l.preventDefault(), B(
        (w) => w > 0 ? w - 1 : A.length - 1
      )) : l.key === "Enter" && b >= 0 && b < A.length && (l.preventDefault(), ue(A[b]));
    }
  }, h = p ? D.slice(0, p) : D, y = p ? Math.max(0, D.length - p) : 0, K = !!r;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: j,
      className: [
        $.container,
        $[`size-${d}`],
        I ? $.isOpen : "",
        g ? $.disabled : "",
        K ? $.hasError : "",
        N || ""
      ].filter(Boolean).join(" "),
      onKeyDown: fe,
      children: [
        t && /* @__PURE__ */ o("label", { id: `${q}-label`, className: $.label, children: [
          t,
          f && /* @__PURE__ */ e("span", { className: $.required, children: "*" })
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: $.trigger,
            onClick: () => {
              g || (z(!I), !I && k && setTimeout(() => {
                var l;
                return (l = G.current) == null ? void 0 : l.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": I,
            "aria-haspopup": "listbox",
            "aria-labelledby": t ? `${q}-label` : void 0,
            children: [
              /* @__PURE__ */ o("div", { className: $.chipContainer, children: [
                h.map((l) => /* @__PURE__ */ e(
                  Ia,
                  {
                    label: l.label,
                    variant: "tonal",
                    shape: u || (l.avatar ? "pill" : "rounded"),
                    size: d === "sm" ? "sm" : d === "lg" ? "lg" : "md",
                    avatar: l.avatar ? /* @__PURE__ */ e(
                      de,
                      {
                        size: d === "sm" ? "xs" : d === "lg" ? "md" : "xs",
                        name: l.label,
                        ...l.avatar
                      }
                    ) : void 0,
                    icon: l.icon,
                    onRemove: () => he(l.value),
                    disabled: g
                  },
                  l.value
                )),
                y > 0 && /* @__PURE__ */ o("span", { className: $.moreCount, children: [
                  "+",
                  y,
                  " more"
                ] }),
                k ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: G,
                    type: "text",
                    className: $.searchInput,
                    placeholder: D.length === 0 ? n : "",
                    value: R,
                    onChange: (l) => {
                      W(l.target.value), I || z(!0);
                    },
                    onClick: (l) => l.stopPropagation(),
                    disabled: g
                  }
                ) : D.length === 0 && /* @__PURE__ */ e("span", { className: $.placeholder, children: n })
              ] }),
              /* @__PURE__ */ o("div", { className: $.trailing, children: [
                L.length > 0 && !g && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: $.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (l) => {
                      l.stopPropagation(), i === void 0 && P([]), c == null || c([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: $.chevron, children: /* @__PURE__ */ e(be, { size: 14 }) })
              ] })
            ]
          }
        ),
        I && /* @__PURE__ */ e("div", { className: $.menu, role: "listbox", "aria-multiselectable": "true", children: A.length === 0 ? /* @__PURE__ */ e("div", { className: $.empty, children: "No matches found" }) : A.map((l, w) => {
          const U = L.includes(l.value), Z = w === b;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "option",
              "aria-selected": U,
              "aria-disabled": l.disabled,
              className: [
                $.option,
                U ? $.selected : "",
                Z ? $.focused : "",
                l.disabled ? $.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: ($e) => {
                $e.stopPropagation(), ue(l);
              },
              onMouseEnter: () => B(w),
              children: [
                /* @__PURE__ */ e("div", { className: $.checkboxSlot, children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: [
                      $.checkboxBox,
                      U ? $.checkboxChecked : ""
                    ].join(" "),
                    children: U && /* @__PURE__ */ e(pe, { size: 11 })
                  }
                ) }),
                l.avatar && /* @__PURE__ */ e("div", { className: $.avatarSlot, children: /* @__PURE__ */ e(de, { size: "sm", name: l.label, ...l.avatar }) }),
                !l.avatar && l.icon && /* @__PURE__ */ e("div", { className: $.iconSlot, children: l.icon }),
                /* @__PURE__ */ o("div", { className: $.labelCol, children: [
                  /* @__PURE__ */ o("div", { className: $.labelRow, children: [
                    /* @__PURE__ */ e("span", { className: $.optionLabel, children: l.label }),
                    l.badge && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          $.badge,
                          $[`badge-${l.badgeVariant || "primary"}`]
                        ].join(" "),
                        children: l.badge
                      }
                    )
                  ] }),
                  l.description && /* @__PURE__ */ e("div", { className: $.optionDescription, children: l.description })
                ] })
              ]
            },
            l.value
          );
        }) }),
        r && /* @__PURE__ */ e("span", { className: $.errorText, children: r }),
        !r && s && /* @__PURE__ */ e("span", { className: $.helperText, children: s })
      ]
    }
  );
}, rr = "_container_1nphi_1", lr = "_label_1nphi_10", or = "_required_1nphi_20", ir = "_trigger_1nphi_25", cr = "_disabled_1nphi_45", dr = "_isOpen_1nphi_49", _r = "_searchIcon_1nphi_55", ur = "_input_1nphi_63", hr = "_clearButton_1nphi_81", mr = "_chevron_1nphi_98", pr = "_menu_1nphi_110", br = "_optionsList_1nphi_129", fr = "_groupBlock_1nphi_135", vr = "_groupHeader_1nphi_140", gr = "_option_1nphi_129", yr = "_focused_1nphi_174", Nr = "_selected_1nphi_178", $r = "_optionContent_1nphi_182", kr = "_optionIcon_1nphi_190", xr = "_optionLabel_1nphi_197", wr = "_highlight_1nphi_206", Ir = "_optionBadge_1nphi_211", qr = "_optionDisabled_1nphi_223", Br = "_emptyFallback_1nphi_230", Cr = "_emptyIcon_1nphi_240", Sr = "_emptyTitle_1nphi_254", zr = "_emptySubtitle_1nphi_260", Lr = "_footerGuide_1nphi_267", Dr = "_hasError_1nphi_280", Er = "_errorText_1nphi_289", Tr = "_helperText_1nphi_294", x = {
  container: rr,
  label: lr,
  required: or,
  trigger: ir,
  disabled: cr,
  isOpen: dr,
  searchIcon: _r,
  input: ur,
  clearButton: hr,
  chevron: mr,
  menu: pr,
  optionsList: br,
  groupBlock: fr,
  groupHeader: vr,
  option: gr,
  focused: yr,
  selected: Nr,
  optionContent: $r,
  optionIcon: kr,
  optionLabel: xr,
  highlight: wr,
  optionBadge: Ir,
  optionDisabled: qr,
  emptyFallback: Br,
  emptyIcon: Cr,
  emptyTitle: Sr,
  emptySubtitle: zr,
  footerGuide: Lr,
  hasError: Dr,
  errorText: Er,
  helperText: Tr
}, Ar = ({
  label: t,
  placeholder: n = "Search entities...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: m,
  onChange: c,
  disabled: d = !1,
  isRequired: u = !1,
  className: g,
  id: f
}) => {
  const k = le(), N = f || k, _ = re(null), p = re(null), [v, q] = O(!1), [j, G] = O(
    i || m || ""
  ), [I, z] = O(""), [R, W] = O(-1);
  X(() => {
    i !== void 0 && G(i);
  }, [i]);
  const L = ce(() => a.find((h) => h.value === j), [a, j]);
  X(() => {
    !v && L ? z(L.label) : !v && !L && z("");
  }, [v, L]);
  const P = ce(() => {
    if (!I.trim()) return a;
    const h = I.toLowerCase();
    return a.filter(
      (y) => y.label.toLowerCase().includes(h) || y.group && y.group.toLowerCase().includes(h) || y.badge && y.badge.toLowerCase().includes(h)
    );
  }, [a, I]), b = ce(() => {
    const h = {};
    return P.forEach((y) => {
      const K = y.group || "";
      h[K] || (h[K] = []), h[K].push(y);
    }), h;
  }, [P]), B = ce(() => {
    const h = [];
    return Object.keys(b).forEach((y) => {
      h.push(...b[y]);
    }), h;
  }, [b]);
  X(() => {
    const h = (y) => {
      _.current && !_.current.contains(y.target) && (q(!1), W(-1));
    };
    return v && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [v]);
  const D = (h) => {
    h.disabled || d || (i === void 0 && G(h.value), z(h.label), q(!1), W(-1), c == null || c(h.value, h));
  }, A = (h) => {
    var y;
    h.stopPropagation(), z(""), i === void 0 && G(""), c == null || c("", void 0), (y = p.current) == null || y.focus();
  }, ue = (h) => {
    if (!d) {
      if (!v) {
        (h.key === "ArrowDown" || h.key === "Enter") && (h.preventDefault(), q(!0));
        return;
      }
      h.key === "Escape" ? (h.preventDefault(), q(!1), W(-1)) : h.key === "ArrowDown" ? (h.preventDefault(), W((y) => y < B.length - 1 ? y + 1 : 0)) : h.key === "ArrowUp" ? (h.preventDefault(), W((y) => y > 0 ? y - 1 : B.length - 1)) : h.key === "Enter" && R >= 0 && R < B.length && (h.preventDefault(), D(B[R]));
    }
  }, he = (h, y) => {
    if (!y.trim()) return h;
    const K = h.split(new RegExp(`(${y})`, "gi"));
    return /* @__PURE__ */ e(ve, { children: K.map(
      (l, w) => l.toLowerCase() === y.toLowerCase() ? /* @__PURE__ */ e("span", { className: x.highlight, children: l }, w) : l
    ) });
  }, fe = !!r;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: _,
      className: [
        x.container,
        v ? x.isOpen : "",
        d ? x.disabled : "",
        fe ? x.hasError : "",
        g || ""
      ].filter(Boolean).join(" "),
      onKeyDown: ue,
      children: [
        t && /* @__PURE__ */ o("label", { id: `${N}-label`, className: x.label, children: [
          t,
          u && /* @__PURE__ */ e("span", { className: x.required, children: "*" })
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: x.trigger,
            onClick: () => {
              var h;
              d || (q(!0), (h = p.current) == null || h.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: x.searchIcon, children: /* @__PURE__ */ e(Ee, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: p,
                  id: N,
                  type: "text",
                  className: x.input,
                  placeholder: n,
                  value: I,
                  role: "combobox",
                  "aria-expanded": v,
                  "aria-autocomplete": "list",
                  "aria-controls": `${N}-popup`,
                  disabled: d,
                  onChange: (h) => {
                    z(h.target.value), v || q(!0);
                  },
                  onFocus: () => q(!0)
                }
              ),
              I && !d && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: x.clearButton,
                  "aria-label": "Clear query",
                  onClick: A,
                  children: /* @__PURE__ */ e(_e, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: x.chevron, children: /* @__PURE__ */ e(be, { size: 14 }) })
            ]
          }
        ),
        v && /* @__PURE__ */ o("div", { id: `${N}-popup`, className: x.menu, role: "listbox", children: [
          B.length === 0 ? /* @__PURE__ */ o("div", { className: x.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: x.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: x.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: x.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: x.optionsList, children: Object.keys(b).map((h) => /* @__PURE__ */ o(
            "div",
            {
              className: x.groupBlock,
              children: [
                h && /* @__PURE__ */ e("div", { className: x.groupHeader, children: h }),
                b[h].map((y) => {
                  const K = y.value === j, l = B.indexOf(y), w = l === R;
                  return /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": K,
                      "aria-disabled": y.disabled,
                      className: [
                        x.option,
                        K ? x.selected : "",
                        w ? x.focused : "",
                        y.disabled ? x.optionDisabled : ""
                      ].filter(Boolean).join(" "),
                      onClick: (U) => {
                        U.stopPropagation(), D(y);
                      },
                      onMouseEnter: () => W(l),
                      children: [
                        /* @__PURE__ */ o("div", { className: x.optionContent, children: [
                          y.icon && /* @__PURE__ */ e("span", { className: x.optionIcon, children: y.icon }),
                          /* @__PURE__ */ e("span", { className: x.optionLabel, children: he(y.label, I) })
                        ] }),
                        y.badge && /* @__PURE__ */ e("span", { className: x.optionBadge, children: y.badge })
                      ]
                    },
                    y.value
                  );
                })
              ]
            },
            h || "default-group"
          )) }),
          /* @__PURE__ */ o("div", { className: x.footerGuide, children: [
            /* @__PURE__ */ e("span", { children: "↵ Enter to select" }),
            /* @__PURE__ */ e("span", { children: "Esc to dismiss" })
          ] })
        ] }),
        r && /* @__PURE__ */ e("span", { className: x.errorText, children: r }),
        !r && s && /* @__PURE__ */ e("span", { className: x.helperText, children: s })
      ]
    }
  );
};
export {
  de as Avatar,
  Oe as Badge,
  Te as Button,
  Nn as Card,
  wn as CardContent,
  xn as CardDescription,
  In as CardFooter,
  $n as CardHeader,
  kn as CardTitle,
  pe as CheckIcon,
  Yt as Checkbox,
  be as ChevronDownIcon,
  Ia as Chip,
  _e as CloseIcon,
  Ar as Combobox,
  na as Drawer,
  Gt as Dropdown,
  Ze as Input,
  Le as MinusIcon,
  Jn as Modal,
  Xn as ModalFooter,
  Wr as MultiSelect,
  Bs as Radio,
  qs as RadioGroup,
  Ee as SearchIcon,
  js as SearchInput,
  dt as Select,
  ze as SpinnerIcon,
  Hs as StatCard,
  ps as Switch,
  rs as TabPanel,
  Tn as Table,
  Rn as TableBody,
  An as TableCell,
  Wn as TableHead,
  jn as TableHeader,
  On as TableRow,
  as as Tabs,
  _n as Textarea,
  De as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
