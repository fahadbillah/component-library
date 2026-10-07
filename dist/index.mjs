import { jsxs as i, jsx as e, Fragment as ue } from "react/jsx-runtime";
import he, { forwardRef as w, useId as ee, useState as H, useRef as ae, useEffect as Z, createContext as Ne, useContext as $e, useMemo as me } from "react";
import { createPortal as pe } from "react-dom";
const ge = "_button_1ckl5_1", we = "_fullWidth_1ckl5_109", xe = "_disabled_1ckl5_113", je = "_loading_1ckl5_120", ze = "_spinner_1ckl5_124", qe = "_icon_1ckl5_130", G = {
  button: ge,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: we,
  disabled: xe,
  loading: je,
  spinner: ze,
  icon: qe
}, Ie = ({ size: n = 18, className: t, ...s }) => /* @__PURE__ */ i(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
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
), ie = ({ size: n = 14, className: t, ...s }) => /* @__PURE__ */ e(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...s,
    children: /* @__PURE__ */ e("polyline", { points: "3 8.5 6.5 12 13 4.5" })
  }
), Be = ({ size: n = 14, className: t, ...s }) => /* @__PURE__ */ e(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    className: t,
    ...s,
    children: /* @__PURE__ */ e("line", { x1: "3", y1: "8", x2: "13", y2: "8" })
  }
), ce = ({ size: n = 16, className: t, ...s }) => /* @__PURE__ */ e(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...s,
    children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" })
  }
), le = ({ size: n = 18, className: t, ...s }) => /* @__PURE__ */ i(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...s,
    children: [
      /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
), Se = ({ size: n = 20, className: t, ...s }) => /* @__PURE__ */ i(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...s,
    children: [
      /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
    ]
  }
), Ce = w(
  ({
    variant: n = "primary",
    size: t = "md",
    isLoading: s = !1,
    leftIcon: a,
    rightIcon: r,
    fullWidth: o = !1,
    disabled: m,
    className: c,
    children: u,
    ...d
  }, b) => {
    const h = [
      G.button,
      G[`variant-${n}`],
      G[`size-${t}`],
      o ? G.fullWidth : "",
      s ? G.loading : "",
      m || s ? G.disabled : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i(
      "button",
      {
        ref: b,
        disabled: m || s,
        className: h,
        "aria-busy": s,
        ...d,
        children: [
          s && /* @__PURE__ */ e("span", { className: G.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(Ie, { size: t === "sm" ? 14 : t === "lg" ? 20 : 16 }) }),
          !s && a && /* @__PURE__ */ e("span", { className: G.icon, children: a }),
          u && /* @__PURE__ */ e("span", { children: u }),
          !s && r && /* @__PURE__ */ e("span", { className: G.icon, children: r })
        ]
      }
    );
  }
);
Ce.displayName = "Button";
const De = "_badge_qj0y6_1", Le = "_dot_qj0y6_63", oe = {
  badge: De,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Le
}, Te = ({
  variant: n = "neutral",
  size: t = "md",
  withDot: s = !1,
  leftIcon: a,
  rightIcon: r,
  className: o,
  children: m,
  ...c
}) => {
  const u = [
    oe.badge,
    oe[`variant-${n}`],
    oe[`size-${t}`],
    o || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("span", { className: u, ...c, children: [
    s && /* @__PURE__ */ e("span", { className: oe.dot, "aria-hidden": "true" }),
    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: a }),
    /* @__PURE__ */ e("span", { children: m }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
  ] });
};
Te.displayName = "Badge";
const Ee = "_container_df4fv_1", Re = "_label_df4fv_13", We = "_required_df4fv_23", Oe = "_inputWrapper_df4fv_27", Ae = "_input_df4fv_27", Me = "_hasLeftIcon_df4fv_80", Ge = "_hasRightIcon_df4fv_84", Fe = "_iconSlot_df4fv_88", Ve = "_leftSlot_df4fv_96", Pe = "_rightSlot_df4fv_100", Ke = "_hasError_df4fv_105", He = "_helperText_df4fv_113", Ue = "_errorMessage_df4fv_119", Qe = "_disabled_df4fv_127", q = {
  container: Ee,
  "size-sm": "_size-sm_df4fv_9",
  label: Re,
  required: We,
  inputWrapper: Oe,
  input: Ae,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: Me,
  hasRightIcon: Ge,
  iconSlot: Fe,
  leftSlot: Ve,
  rightSlot: Pe,
  hasError: Ke,
  helperText: He,
  errorMessage: Ue,
  disabled: Qe
}, Je = w(
  ({
    label: n,
    helperText: t,
    errorMessage: s,
    inputSize: a = "md",
    leftIcon: r,
    rightIcon: o,
    isRequired: m = !1,
    disabled: c = !1,
    id: u,
    className: d,
    ...b
  }, h) => {
    const N = ee(), y = u || N, _ = !!s, p = [
      q.container,
      q[`size-${a}`],
      _ ? q.hasError : "",
      c ? q.disabled : "",
      r ? q.hasLeftIcon : "",
      o ? q.hasRightIcon : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: p, children: [
      n && /* @__PURE__ */ i("label", { htmlFor: y, className: q.label, children: [
        n,
        m && /* @__PURE__ */ e("span", { className: q.required, children: "*" })
      ] }),
      /* @__PURE__ */ i("div", { className: q.inputWrapper, children: [
        r && /* @__PURE__ */ e("span", { className: `${q.iconSlot} ${q.leftSlot}`, children: r }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: h,
            id: y,
            disabled: c,
            "aria-invalid": _,
            "aria-describedby": _ ? `${y}-error` : t ? `${y}-helper` : void 0,
            className: q.input,
            ...b
          }
        ),
        o && /* @__PURE__ */ e("span", { className: `${q.iconSlot} ${q.rightSlot}`, children: o })
      ] }),
      _ && /* @__PURE__ */ e("span", { id: `${y}-error`, className: q.errorMessage, role: "alert", children: s }),
      !_ && t && /* @__PURE__ */ e("span", { id: `${y}-helper`, className: q.helperText, children: t })
    ] });
  }
);
Je.displayName = "Input";
const Xe = "_container_fh5kq_1", Ye = "_label_fh5kq_13", Ze = "_required_fh5kq_23", et = "_selectWrapper_fh5kq_27", tt = "_select_fh5kq_27", nt = "_chevronIcon_fh5kq_77", st = "_hasError_fh5kq_88", at = "_helperText_fh5kq_96", rt = "_errorMessage_fh5kq_102", lt = "_disabled_fh5kq_110", D = {
  container: Xe,
  "size-sm": "_size-sm_fh5kq_9",
  label: Ye,
  required: Ze,
  selectWrapper: et,
  select: tt,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: nt,
  hasError: st,
  helperText: at,
  errorMessage: rt,
  disabled: lt
}, ot = w(
  ({
    label: n,
    helperText: t,
    errorMessage: s,
    selectSize: a = "md",
    options: r,
    placeholder: o,
    isRequired: m = !1,
    disabled: c = !1,
    id: u,
    className: d,
    children: b,
    ...h
  }, N) => {
    const y = ee(), _ = u || y, p = !!s, v = [
      D.container,
      D[`size-${a}`],
      p ? D.hasError : "",
      c ? D.disabled : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: v, children: [
      n && /* @__PURE__ */ i("label", { htmlFor: _, className: D.label, children: [
        n,
        m && /* @__PURE__ */ e("span", { className: D.required, children: "*" })
      ] }),
      /* @__PURE__ */ i("div", { className: D.selectWrapper, children: [
        /* @__PURE__ */ i(
          "select",
          {
            ref: N,
            id: _,
            disabled: c,
            "aria-invalid": p,
            "aria-describedby": p ? `${_}-error` : t ? `${_}-helper` : void 0,
            className: D.select,
            ...h,
            children: [
              o && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: o }),
              r ? r.map((x) => /* @__PURE__ */ e("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)) : b
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: D.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(ce, { size: 16 }) })
      ] }),
      p && /* @__PURE__ */ e("span", { id: `${_}-error`, className: D.errorMessage, role: "alert", children: s }),
      !p && t && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: D.helperText, children: t })
    ] });
  }
);
ot.displayName = "Select";
const it = "_container_dzjkw_1", ct = "_label_dzjkw_14", dt = "_required_dzjkw_24", _t = "_trigger_dzjkw_28", mt = "_isOpen_dzjkw_53", ut = "_selectedContent_dzjkw_71", ht = "_placeholder_dzjkw_80", pt = "_chevron_dzjkw_84", ft = "_chevronOpen_dzjkw_93", bt = "_menu_dzjkw_98", vt = "_dropdownIn_dzjkw_1", kt = "_menuItem_dzjkw_116", yt = "_itemDisabled_dzjkw_128", Nt = "_itemSelected_dzjkw_132", $t = "_itemLeft_dzjkw_147", gt = "_itemText_dzjkw_154", wt = "_itemLabel_dzjkw_161", xt = "_itemDescription_dzjkw_169", jt = "_checkSlot_dzjkw_174", zt = "_hasError_dzjkw_183", qt = "_helperText_dzjkw_191", It = "_errorMessage_dzjkw_197", Bt = "_disabled_dzjkw_205", g = {
  container: it,
  "size-sm": "_size-sm_dzjkw_10",
  label: ct,
  required: dt,
  trigger: _t,
  isOpen: mt,
  "size-lg": "_size-lg_dzjkw_65",
  selectedContent: ut,
  placeholder: ht,
  chevron: pt,
  chevronOpen: ft,
  menu: bt,
  dropdownIn: vt,
  menuItem: kt,
  itemDisabled: yt,
  itemSelected: Nt,
  itemLeft: $t,
  itemText: gt,
  itemLabel: wt,
  itemDescription: xt,
  checkSlot: jt,
  hasError: zt,
  helperText: qt,
  errorMessage: It,
  disabled: Bt
}, St = "_container_cw81q_1", Ct = "_image_cw81q_16", Dt = "_fallback_cw81q_23", Lt = "_statusDot_cw81q_64", X = {
  container: St,
  image: Ct,
  fallback: Dt,
  "size-xs": "_size-xs_cw81q_33",
  "size-sm": "_size-sm_cw81q_39",
  "size-md": "_size-md_cw81q_45",
  "size-lg": "_size-lg_cw81q_51",
  "size-xl": "_size-xl_cw81q_57",
  statusDot: Lt,
  "status-online": "_status-online_cw81q_92",
  "status-busy": "_status-busy_cw81q_96",
  "status-away": "_status-away_cw81q_100",
  "status-offline": "_status-offline_cw81q_104"
};
function Tt(n) {
  if (!n) return "";
  const t = n.trim().split(/\s+/);
  return t.length === 1 ? t[0].substring(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
const re = ({
  src: n,
  alt: t = "",
  name: s,
  size: a = "md",
  status: r,
  className: o,
  ...m
}) => {
  const [c, u] = H(!1), d = Tt(s), b = [
    X.container,
    X[`size-${a}`],
    o || ""
  ].filter(Boolean).join(" "), h = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ i("div", { className: b, title: s || t, ...m, children: [
    n && !c ? /* @__PURE__ */ e(
      "img",
      {
        src: n,
        alt: t || s || "Avatar",
        className: X.image,
        onError: () => u(!0)
      }
    ) : d ? /* @__PURE__ */ e("span", { className: X.fallback, children: d }) : /* @__PURE__ */ e("span", { className: X.fallback, children: /* @__PURE__ */ e(Se, { size: h[a] }) }),
    r && /* @__PURE__ */ e(
      "span",
      {
        className: `${X.statusDot} ${X[`status-${r}`]}`,
        "aria-label": `Status: ${r}`
      }
    )
  ] });
};
re.displayName = "Avatar";
const Et = ({
  label: n,
  placeholder: t = "Select an option...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: o,
  defaultValue: m,
  onChange: c,
  size: u = "md",
  disabled: d = !1,
  isRequired: b = !1,
  className: h,
  id: N
}) => {
  const y = ee(), _ = N || y, p = ae(null), [v, x] = H(!1), [A, B] = H(o || m);
  Z(() => {
    o !== void 0 && B(o);
  }, [o]), Z(() => {
    const f = (j) => {
      p.current && !p.current.contains(j.target) && x(!1);
    };
    return v && document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, [v]);
  const I = r.find((f) => f.value === A), C = !!a, Q = (f) => {
    f.disabled || (B(f.value), c == null || c(f.value, f), x(!1));
  }, S = (f) => {
    if (!d) {
      if (f.key === "Enter" || f.key === " ")
        f.preventDefault(), x((j) => !j);
      else if (f.key === "Escape")
        x(!1);
      else if (f.key === "ArrowDown" && v) {
        f.preventDefault();
        const j = r.findIndex((ne) => ne.value === A), z = r[j + 1];
        z && !z.disabled && Q(z);
      } else if (f.key === "ArrowUp" && v) {
        f.preventDefault();
        const j = r.findIndex((ne) => ne.value === A), z = r[j - 1];
        z && !z.disabled && Q(z);
      }
    }
  }, te = [
    g.container,
    g[`size-${u}`],
    v ? g.isOpen : "",
    C ? g.hasError : "",
    d ? g.disabled : "",
    h || ""
  ].filter(Boolean).join(" "), J = u === "sm" ? "xs" : u === "lg" ? "md" : "sm";
  return /* @__PURE__ */ i("div", { ref: p, className: te, children: [
    n && /* @__PURE__ */ i("label", { id: `${_}-label`, className: g.label, children: [
      n,
      b && /* @__PURE__ */ e("span", { className: g.required, children: "*" })
    ] }),
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        id: _,
        "aria-haspopup": "listbox",
        "aria-expanded": v,
        "aria-labelledby": n ? `${_}-label ${_}` : void 0,
        disabled: d,
        onClick: () => x((f) => !f),
        onKeyDown: S,
        className: g.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: g.selectedContent, children: I ? /* @__PURE__ */ i(ue, { children: [
            I.avatar && /* @__PURE__ */ e(
              re,
              {
                size: I.avatar.size || J,
                ...I.avatar
              }
            ),
            I.icon && /* @__PURE__ */ e("span", { children: I.icon }),
            /* @__PURE__ */ e("span", { children: I.label })
          ] }) : /* @__PURE__ */ e("span", { className: g.placeholder, children: t }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${g.chevron} ${v ? g.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(ce, { size: 16 })
            }
          )
        ]
      }
    ),
    v && /* @__PURE__ */ e("ul", { role: "listbox", "aria-labelledby": `${_}-label`, className: g.menu, children: r.map((f) => {
      const j = f.value === A, z = [
        g.menuItem,
        j ? g.itemSelected : "",
        f.disabled ? g.itemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ i(
        "li",
        {
          role: "option",
          "aria-selected": j,
          "aria-disabled": f.disabled,
          onClick: () => Q(f),
          className: z,
          children: [
            /* @__PURE__ */ i("div", { className: g.itemLeft, children: [
              f.avatar && /* @__PURE__ */ e(re, { size: f.avatar.size || J, ...f.avatar }),
              f.icon && /* @__PURE__ */ e("span", { children: f.icon }),
              /* @__PURE__ */ i("div", { className: g.itemText, children: [
                /* @__PURE__ */ e("span", { className: g.itemLabel, children: f.label }),
                f.description && /* @__PURE__ */ e("span", { className: g.itemDescription, children: f.description })
              ] })
            ] }),
            j && /* @__PURE__ */ e("span", { className: g.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(ie, { size: 14 }) })
          ]
        },
        f.value
      );
    }) }),
    C && /* @__PURE__ */ e("span", { id: `${_}-error`, className: g.errorMessage, role: "alert", children: a }),
    !C && s && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: g.helperText, children: s })
  ] });
};
Et.displayName = "Dropdown";
const Rt = "_container_1ms02_1", Wt = "_hasDescription_1ms02_10", Ot = "_box_1ms02_14", At = "_nativeInput_1ms02_32", Mt = "_checked_1ms02_45", Gt = "_indeterminate_1ms02_46", Ft = "_disabled_1ms02_51", Vt = "_textGroup_1ms02_55", Pt = "_label_1ms02_61", Kt = "_description_1ms02_68", R = {
  container: Rt,
  hasDescription: Wt,
  box: Ot,
  nativeInput: At,
  checked: Mt,
  indeterminate: Gt,
  disabled: Ft,
  textGroup: Vt,
  label: Pt,
  description: Kt
}, Ht = w(
  ({
    label: n,
    description: t,
    checked: s,
    defaultChecked: a,
    indeterminate: r = !1,
    disabled: o = !1,
    className: m,
    onChange: c,
    ...u
  }, d) => {
    const b = ae(null), h = d || b;
    Z(() => {
      h && "current" in h && h.current && (h.current.indeterminate = r);
    }, [r, h]);
    const N = s ?? a ?? !1, y = [
      R.container,
      t ? R.hasDescription : "",
      o ? R.disabled : "",
      m || ""
    ].filter(Boolean).join(" "), _ = [
      R.box,
      r ? R.indeterminate : N ? R.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: y, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: h,
          checked: s,
          defaultChecked: a,
          disabled: o,
          className: R.nativeInput,
          onChange: c,
          ...u
        }
      ),
      /* @__PURE__ */ i("span", { className: _, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(Be, { size: 12 }),
        !r && N && /* @__PURE__ */ e(ie, { size: 12 })
      ] }),
      (n || t) && /* @__PURE__ */ i("span", { className: R.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: R.label, children: n }),
        t && /* @__PURE__ */ e("span", { className: R.description, children: t })
      ] })
    ] });
  }
);
Ht.displayName = "Checkbox";
const Ut = "_container_m4qf3_1", Qt = "_label_m4qf3_9", Jt = "_required_m4qf3_19", Xt = "_textareaWrapper_m4qf3_23", Yt = "_textarea_m4qf3_23", Zt = "_hasError_m4qf3_58", en = "_footer_m4qf3_66", tn = "_helperText_m4qf3_74", nn = "_errorMessage_m4qf3_78", sn = "_charCount_m4qf3_83", an = "_disabled_m4qf3_89", L = {
  container: Ut,
  label: Qt,
  required: Jt,
  textareaWrapper: Xt,
  textarea: Yt,
  hasError: Zt,
  footer: en,
  helperText: tn,
  errorMessage: nn,
  charCount: sn,
  disabled: an
}, rn = w(
  ({
    label: n,
    helperText: t,
    errorMessage: s,
    isRequired: a = !1,
    showCharCount: r = !1,
    maxLength: o,
    disabled: m = !1,
    value: c,
    defaultValue: u,
    id: d,
    className: b,
    onChange: h,
    ...N
  }, y) => {
    const _ = ee(), p = d || _, v = !!s, [x, A] = he.useState(() => typeof c == "string" ? c.length : typeof u == "string" ? u.length : 0), B = (C) => {
      A(C.target.value.length), h == null || h(C);
    }, I = [
      L.container,
      v ? L.hasError : "",
      m ? L.disabled : "",
      b || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: I, children: [
      n && /* @__PURE__ */ i("label", { htmlFor: p, className: L.label, children: [
        n,
        a && /* @__PURE__ */ e("span", { className: L.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: L.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: y,
          id: p,
          disabled: m,
          value: c,
          defaultValue: u,
          maxLength: o,
          onChange: B,
          "aria-invalid": v,
          "aria-describedby": v ? `${p}-error` : t ? `${p}-helper` : void 0,
          className: L.textarea,
          ...N
        }
      ) }),
      /* @__PURE__ */ i("div", { className: L.footer, children: [
        v && /* @__PURE__ */ e("span", { id: `${p}-error`, className: L.errorMessage, role: "alert", children: s }),
        !v && t && /* @__PURE__ */ e("span", { id: `${p}-helper`, className: L.helperText, children: t }),
        r && o && /* @__PURE__ */ i("span", { className: L.charCount, children: [
          x,
          " / ",
          o
        ] })
      ] })
    ] });
  }
);
rn.displayName = "Textarea";
const ln = "_card_cnmiq_1", on = "_interactive_cnmiq_28", cn = "_header_cnmiq_56", dn = "_headerBordered_cnmiq_63", _n = "_title_cnmiq_68", mn = "_description_cnmiq_77", un = "_content_cnmiq_84", hn = "_footer_cnmiq_88", pn = "_footerBordered_cnmiq_96", E = {
  card: ln,
  "elevation-1": "_elevation-1_cnmiq_13",
  "elevation-2": "_elevation-2_cnmiq_18",
  "elevation-3": "_elevation-3_cnmiq_23",
  interactive: on,
  "padding-none": "_padding-none_cnmiq_39",
  "padding-sm": "_padding-sm_cnmiq_43",
  "padding-md": "_padding-md_cnmiq_47",
  "padding-lg": "_padding-lg_cnmiq_51",
  header: cn,
  headerBordered: dn,
  title: _n,
  description: mn,
  content: un,
  footer: hn,
  footerBordered: pn
}, fn = w(
  ({
    elevation: n = 1,
    padding: t = "none",
    isInteractive: s = !1,
    className: a,
    children: r,
    ...o
  }, m) => {
    const c = [
      E.card,
      E[`elevation-${n}`],
      E[`padding-${t}`],
      s ? E.interactive : "",
      a || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: m, className: c, ...o, children: r });
  }
);
fn.displayName = "Card";
const bn = w(
  ({ bordered: n = !1, className: t, children: s, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${E.header} ${n ? E.headerBordered : ""} ${t || ""}`,
      ...a,
      children: s
    }
  )
);
bn.displayName = "CardHeader";
const vn = w(
  ({ as: n = "h3", className: t, children: s, ...a }, r) => /* @__PURE__ */ e(n, { ref: r, className: `${E.title} ${t || ""}`, ...a, children: s })
);
vn.displayName = "CardTitle";
const kn = w(
  ({ className: n, children: t, ...s }, a) => /* @__PURE__ */ e("p", { ref: a, className: `${E.description} ${n || ""}`, ...s, children: t })
);
kn.displayName = "CardDescription";
const yn = w(
  ({ className: n, children: t, ...s }, a) => /* @__PURE__ */ e("div", { ref: a, className: `${E.content} ${n || ""}`, ...s, children: t })
);
yn.displayName = "CardContent";
const Nn = w(
  ({ bordered: n = !1, className: t, children: s, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${E.footer} ${n ? E.footerBordered : ""} ${t || ""}`,
      ...a,
      children: s
    }
  )
);
Nn.displayName = "CardFooter";
const $n = "_container_1xw60_1", gn = "_table_1xw60_10", wn = "_header_1xw60_19", xn = "_headCell_1xw60_24", jn = "_row_1xw60_35", zn = "_hoverable_1xw60_44", qn = "_cell_1xw60_48", In = "_tabularNums_1xw60_54", O = {
  container: $n,
  table: gn,
  header: wn,
  headCell: xn,
  row: jn,
  hoverable: zn,
  cell: qn,
  tabularNums: In,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Bn = w(
  ({ className: n, containerClassName: t, children: s, ...a }, r) => /* @__PURE__ */ e("div", { className: `${O.container} ${t || ""}`, children: /* @__PURE__ */ e("table", { ref: r, className: `${O.table} ${n || ""}`, ...a, children: s }) })
);
Bn.displayName = "Table";
const Sn = w(
  ({ className: n, children: t, ...s }, a) => /* @__PURE__ */ e("thead", { ref: a, className: `${O.header} ${n || ""}`, ...s, children: t })
);
Sn.displayName = "TableHeader";
const Cn = w(
  ({ className: n, children: t, ...s }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: n, ...s, children: t })
);
Cn.displayName = "TableBody";
const Dn = w(
  ({ isHoverable: n = !0, className: t, children: s, ...a }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: `${O.row} ${n ? O.hoverable : ""} ${t || ""}`,
      ...a,
      children: s
    }
  )
);
Dn.displayName = "TableRow";
const Ln = w(
  ({ align: n = "left", className: t, children: s, ...a }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: `${O.headCell} ${O[`align-${n}`]} ${t || ""}`,
      ...a,
      children: s
    }
  )
);
Ln.displayName = "TableHead";
const Tn = w(
  ({ align: n = "left", isNumeric: t = !1, className: s, children: a, ...r }, o) => /* @__PURE__ */ e(
    "td",
    {
      ref: o,
      className: `${O.cell} ${O[`align-${n}`]} ${t ? O.tabularNums : ""} ${s || ""}`,
      ...r,
      children: a
    }
  )
);
Tn.displayName = "TableCell";
const En = "_overlay_1ju4y_1", Rn = "_fadeIn_1ju4y_1", Wn = "_modal_1ju4y_15", On = "_scaleIn_1ju4y_1", An = "_header_1ju4y_44", Mn = "_title_1ju4y_51", Gn = "_closeButton_1ju4y_60", Fn = "_body_1ju4y_83", Vn = "_footer_1ju4y_92", K = {
  overlay: En,
  fadeIn: Rn,
  modal: Wn,
  scaleIn: On,
  "size-sm": "_size-sm_1ju4y_32",
  "size-md": "_size-md_1ju4y_36",
  "size-lg": "_size-lg_1ju4y_40",
  header: An,
  title: Mn,
  closeButton: Gn,
  body: Fn,
  footer: Vn
}, Pn = ({
  isOpen: n,
  onClose: t,
  title: s,
  size: a = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: o = !0,
  showCloseButton: m = !0,
  footer: c,
  children: u,
  className: d
}) => {
  const b = ee(), h = ae(null);
  if (Z(() => {
    if (!n) return;
    const p = (v) => {
      v.key === "Escape" && o && t();
    };
    return document.addEventListener("keydown", p), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    };
  }, [n, o, t]), !n) return null;
  const N = (p) => {
    p.target === p.currentTarget && r && t();
  }, y = [
    K.modal,
    K[`size-${a}`],
    d || ""
  ].filter(Boolean).join(" "), _ = /* @__PURE__ */ e("div", { className: K.overlay, onClick: N, children: /* @__PURE__ */ i(
    "div",
    {
      ref: h,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? b : void 0,
      tabIndex: -1,
      className: y,
      children: [
        (s || m) && /* @__PURE__ */ i("div", { className: K.header, children: [
          s && /* @__PURE__ */ e("h2", { id: b, className: K.title, children: s }),
          m && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: t,
              className: K.closeButton,
              children: /* @__PURE__ */ e(le, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: K.body, children: u }),
        c && /* @__PURE__ */ e("div", { className: K.footer, children: c })
      ]
    }
  ) });
  return typeof document < "u" ? pe(_, document.body) : null;
};
Pn.displayName = "Modal";
const Kn = ({ className: n, children: t, ...s }) => /* @__PURE__ */ e("div", { className: `${K.footer} ${n || ""}`, ...s, children: t });
Kn.displayName = "ModalFooter";
const Hn = "_tabList_7bmw6_1", Un = "_tab_7bmw6_1", Qn = "_tabActive_7bmw6_50", Jn = "_badge_7bmw6_76", Xn = "_fullWidth_7bmw6_93", Yn = "_panel_7bmw6_101", Y = {
  tabList: Hn,
  "variant-underline": "_variant-underline_7bmw6_11",
  tab: Un,
  tabActive: Qn,
  badge: Jn,
  fullWidth: Xn,
  panel: Yn
}, Zn = ({
  tabs: n,
  activeTab: t,
  defaultActiveTab: s,
  onChange: a,
  variant: r = "pill",
  fullWidth: o = !1,
  className: m,
  children: c
}) => {
  var y;
  const [u, d] = H(
    t || s || ((y = n[0]) == null ? void 0 : y.id) || ""
  ), b = t !== void 0 ? t : u, h = (_, p) => {
    p || (d(_), a == null || a(_));
  }, N = [
    Y.tabList,
    Y[`variant-${r}`],
    o ? Y.fullWidth : "",
    m || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { role: "tablist", className: N, children: n.map((_) => {
      const p = _.id === b, v = [
        Y.tab,
        p ? Y.tabActive : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ i(
        "button",
        {
          role: "tab",
          type: "button",
          "aria-selected": p,
          "aria-controls": `panel-${_.id}`,
          id: `tab-${_.id}`,
          disabled: _.disabled,
          onClick: () => h(_.id, _.disabled),
          className: v,
          children: [
            _.icon && /* @__PURE__ */ e("span", { children: _.icon }),
            /* @__PURE__ */ e("span", { children: _.label }),
            _.badge !== void 0 && /* @__PURE__ */ e("span", { className: Y.badge, children: _.badge })
          ]
        },
        _.id
      );
    }) }),
    c
  ] });
};
Zn.displayName = "Tabs";
const es = ({
  tabId: n,
  activeTabId: t,
  className: s,
  children: a,
  ...r
}) => n !== t ? null : /* @__PURE__ */ e(
  "div",
  {
    role: "tabpanel",
    id: `panel-${n}`,
    "aria-labelledby": `tab-${n}`,
    className: `${Y.panel} ${s || ""}`,
    ...r,
    children: a
  }
);
es.displayName = "TabPanel";
const ts = "_container_1xroe_1", ns = "_track_1xroe_10", ss = "_thumb_1xroe_24", as = "_checked_1xroe_34", rs = "_nativeInput_1xroe_43", ls = "_label_1xroe_55", os = "_description_1xroe_61", is = "_textGroup_1xroe_66", cs = "_disabled_1xroe_72", F = {
  container: ts,
  track: ns,
  thumb: ss,
  checked: as,
  nativeInput: rs,
  label: ls,
  description: os,
  textGroup: is,
  disabled: cs
}, ds = w(
  ({
    label: n,
    description: t,
    checked: s,
    defaultChecked: a,
    disabled: r = !1,
    className: o,
    onChange: m,
    ...c
  }, u) => {
    const d = s ?? a ?? !1, b = [
      F.container,
      d ? F.checked : "",
      r ? F.disabled : "",
      o || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: b, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: u,
          checked: s,
          defaultChecked: a,
          disabled: r,
          "aria-checked": d,
          className: F.nativeInput,
          onChange: m,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: F.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: F.thumb }) }),
      (n || t) && /* @__PURE__ */ i("span", { className: F.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: F.label, children: n }),
        t && /* @__PURE__ */ e("span", { className: F.description, children: t })
      ] })
    ] });
  }
);
ds.displayName = "Switch";
const _s = "_group_1e0nk_1", ms = "_groupLabel_1e0nk_8", us = "_item_1e0nk_14", hs = "_circle_1e0nk_22", ps = "_dot_1e0nk_35", fs = "_checked_1e0nk_45", bs = "_nativeInput_1e0nk_54", vs = "_label_1e0nk_67", ks = "_description_1e0nk_73", ys = "_textGroup_1e0nk_78", Ns = "_disabled_1e0nk_84", T = {
  group: _s,
  groupLabel: ms,
  item: us,
  circle: hs,
  dot: ps,
  checked: fs,
  nativeInput: bs,
  label: vs,
  description: ks,
  textGroup: ys,
  disabled: Ns
}, fe = Ne(null), $s = ({
  name: n,
  value: t,
  defaultValue: s,
  onChange: a,
  label: r,
  disabled: o = !1,
  className: m,
  children: c
}) => {
  const [u, d] = he.useState(t || s), b = t !== void 0 ? t : u, h = (N) => {
    d(N.target.value), a == null || a(N.target.value);
  };
  return /* @__PURE__ */ e(
    fe.Provider,
    {
      value: {
        name: n,
        value: b,
        onChange: h,
        disabled: o
      },
      children: /* @__PURE__ */ i("div", { role: "radiogroup", "aria-label": r, className: `${T.group} ${m || ""}`, children: [
        r && /* @__PURE__ */ e("span", { className: T.groupLabel, children: r }),
        c
      ] })
    }
  );
};
$s.displayName = "RadioGroup";
const gs = w(
  ({ value: n, label: t, description: s, disabled: a, className: r, checked: o, onChange: m, ...c }, u) => {
    const d = $e(fe), b = d ? d.value === n : o, h = a || (d == null ? void 0 : d.disabled) || !1, N = (d == null ? void 0 : d.name) || c.name, y = [
      T.item,
      b ? T.checked : "",
      h ? T.disabled : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: y, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: u,
          type: "radio",
          name: N,
          value: n,
          checked: b,
          disabled: h,
          onChange: (p) => {
            var v;
            m == null || m(p), (v = d == null ? void 0 : d.onChange) == null || v.call(d, p);
          },
          className: T.nativeInput,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: T.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: T.dot }) }),
      (t || s) && /* @__PURE__ */ i("span", { className: T.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: T.label, children: t }),
        s && /* @__PURE__ */ e("span", { className: T.description, children: s })
      ] })
    ] });
  }
);
gs.displayName = "Radio";
const ws = "_wrapper_yiqhg_1", xs = "_searchIcon_yiqhg_8", js = "_input_yiqhg_18", zs = "_rightSlots_yiqhg_42", qs = "_clearButton_yiqhg_50", Is = "_shortcut_yiqhg_66", se = {
  wrapper: ws,
  searchIcon: xs,
  input: js,
  rightSlots: zs,
  clearButton: qs,
  shortcut: Is
}, Bs = ({ ...n }) => /* @__PURE__ */ i(
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
    ...n,
    children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ]
  }
), Ss = w(
  ({ value: n, defaultValue: t, onChange: s, onClear: a, shortcutHint: r = "⌘K", placeholder: o = "Search records, students, classes...", className: m, ...c }, u) => {
    const [d, b] = H(
      n || t || ""
    ), h = n !== void 0, N = h ? n : d, y = (p) => {
      h || b(p.target.value), s == null || s(p);
    }, _ = () => {
      h || b(""), a == null || a();
    };
    return /* @__PURE__ */ i("div", { className: `${se.wrapper} ${m || ""}`, children: [
      /* @__PURE__ */ e("span", { className: se.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(Bs, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: u,
          type: "search",
          value: N,
          placeholder: o,
          onChange: y,
          className: se.input,
          ...c
        }
      ),
      /* @__PURE__ */ i("div", { className: se.rightSlots, children: [
        N && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: _,
            className: se.clearButton,
            children: /* @__PURE__ */ e(le, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: se.shortcut, children: r })
      ] })
    ] });
  }
);
Ss.displayName = "SearchInput";
const Cs = "_card_kgob9_1", Ds = "_topRow_kgob9_18", Ls = "_title_kgob9_25", Ts = "_iconSlot_kgob9_33", Es = "_metricRow_kgob9_49", Rs = "_value_kgob9_55", Ws = "_trendBadge_kgob9_65", Os = "_description_kgob9_90", W = {
  card: Cs,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: Ds,
  title: Ls,
  iconSlot: Ts,
  metricRow: Es,
  value: Rs,
  trendBadge: Ws,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: Os
}, As = ({
  title: n,
  value: t,
  description: s,
  trend: a,
  icon: r,
  highlighted: o = !1,
  className: m,
  ...c
}) => {
  const u = [
    W.card,
    o ? W["variant-highlight"] : "",
    m || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { className: u, ...c, children: [
    /* @__PURE__ */ i("div", { className: W.topRow, children: [
      /* @__PURE__ */ e("h4", { className: W.title, children: n }),
      r && /* @__PURE__ */ e("span", { className: W.iconSlot, children: r })
    ] }),
    /* @__PURE__ */ i("div", { className: W.metricRow, children: [
      /* @__PURE__ */ e("span", { className: W.value, children: t }),
      a && /* @__PURE__ */ i("span", { className: `${W.trendBadge} ${W[`trend-${a.direction}`]}`, children: [
        a.direction === "up" && "↑ ",
        a.direction === "down" && "↓ ",
        a.value
      ] })
    ] }),
    s && /* @__PURE__ */ e("p", { className: W.description, children: s })
  ] });
};
As.displayName = "StatCard";
const Ms = "_overlay_1jiz5_1", Gs = "_fadeIn_1jiz5_1", Fs = "_drawer_1jiz5_11", Vs = "_slideInRight_1jiz5_1", Ps = "_slideInLeft_1jiz5_1", Ks = "_header_1jiz5_51", Hs = "_title_1jiz5_59", Us = "_closeButton_1jiz5_67", Qs = "_body_1jiz5_90", Js = "_footer_1jiz5_99", V = {
  overlay: Ms,
  fadeIn: Gs,
  drawer: Fs,
  "placement-right": "_placement-right_1jiz5_26",
  slideInRight: Vs,
  "placement-left": "_placement-left_1jiz5_31",
  slideInLeft: Ps,
  "size-sm": "_size-sm_1jiz5_39",
  "size-md": "_size-md_1jiz5_43",
  "size-lg": "_size-lg_1jiz5_47",
  header: Ks,
  title: Hs,
  closeButton: Us,
  body: Qs,
  footer: Js
}, Xs = ({
  isOpen: n,
  onClose: t,
  title: s,
  placement: a = "right",
  size: r = "md",
  closeOnOverlayClick: o = !0,
  closeOnEsc: m = !0,
  showCloseButton: c = !0,
  footer: u,
  children: d,
  className: b
}) => {
  const h = ee(), N = ae(null);
  if (Z(() => {
    if (!n) return;
    const v = (x) => {
      x.key === "Escape" && m && t();
    };
    return document.addEventListener("keydown", v), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    };
  }, [n, m, t]), !n) return null;
  const y = (v) => {
    v.target === v.currentTarget && o && t();
  }, _ = [
    V.drawer,
    V[`placement-${a}`],
    V[`size-${r}`],
    b || ""
  ].filter(Boolean).join(" "), p = /* @__PURE__ */ i(ue, { children: [
    /* @__PURE__ */ e("div", { className: V.overlay, onClick: y }),
    /* @__PURE__ */ i(
      "div",
      {
        ref: N,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": s ? h : void 0,
        tabIndex: -1,
        className: _,
        children: [
          (s || c) && /* @__PURE__ */ i("div", { className: V.header, children: [
            s && /* @__PURE__ */ e("h3", { id: h, className: V.title, children: s }),
            c && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: t,
                className: V.closeButton,
                children: /* @__PURE__ */ e(le, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: V.body, children: d }),
          u && /* @__PURE__ */ e("div", { className: V.footer, children: u })
        ]
      }
    )
  ] });
  return typeof document < "u" ? pe(p, document.body) : null;
};
Xs.displayName = "Drawer";
const Ys = "_chip_smrs2_1", Zs = "_md_smrs2_15", ea = "_sm_smrs2_22", ta = "_neutral_smrs2_30", na = "_primary_smrs2_36", sa = "_outline_smrs2_42", aa = "_avatarSlot_smrs2_49", ra = "_iconSlot_smrs2_57", la = "_label_smrs2_65", oa = "_removeButton_smrs2_70", ia = "_disabled_smrs2_90", P = {
  chip: Ys,
  md: Zs,
  sm: ea,
  neutral: ta,
  primary: na,
  outline: sa,
  avatarSlot: aa,
  iconSlot: ra,
  label: la,
  removeButton: oa,
  disabled: ia
}, ca = ({
  label: n,
  avatar: t,
  icon: s,
  variant: a = "neutral",
  size: r = "md",
  onRemove: o,
  disabled: m = !1,
  className: c,
  ...u
}) => {
  const d = [
    P.chip,
    P[a],
    P[r],
    o ? P.removable : "",
    m ? P.disabled : "",
    c || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { className: d, role: "status", ...u, children: [
    t && /* @__PURE__ */ e("span", { className: P.avatarSlot, children: t }),
    !t && s && /* @__PURE__ */ e("span", { className: P.iconSlot, children: s }),
    /* @__PURE__ */ e("span", { className: P.label, children: n }),
    o && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": `Remove ${n}`,
        className: P.removeButton,
        onClick: (b) => {
          b.stopPropagation(), !m && o && o();
        },
        disabled: m,
        children: /* @__PURE__ */ e(le, { size: 12 })
      }
    )
  ] });
}, da = "_container_tofbj_1", _a = "_label_tofbj_14", ma = "_required_tofbj_24", ua = "_trigger_tofbj_29", ha = "_disabled_tofbj_50", pa = "_isOpen_tofbj_54", fa = "_chipContainer_tofbj_72", ba = "_searchInput_tofbj_81", va = "_placeholder_tofbj_93", ka = "_moreCount_tofbj_97", ya = "_trailing_tofbj_107", Na = "_clearAllButton_tofbj_114", $a = "_chevron_tofbj_131", ga = "_menu_tofbj_143", wa = "_empty_tofbj_162", xa = "_option_tofbj_170", ja = "_focused_tofbj_182", za = "_selected_tofbj_186", qa = "_checkboxSlot_tofbj_195", Ia = "_checkboxBox_tofbj_202", Ba = "_checkboxChecked_tofbj_215", Sa = "_avatarSlot_tofbj_220", Ca = "_iconSlot_tofbj_226", Da = "_labelCol_tofbj_233", La = "_optionLabel_tofbj_240", Ta = "_optionDescription_tofbj_247", Ea = "_optionDisabled_tofbj_253", Ra = "_hasError_tofbj_260", Wa = "_errorText_tofbj_269", Oa = "_helperText_tofbj_274", k = {
  container: da,
  "size-sm": "_size-sm_tofbj_10",
  label: _a,
  required: ma,
  trigger: ua,
  disabled: ha,
  isOpen: pa,
  "size-lg": "_size-lg_tofbj_66",
  chipContainer: fa,
  searchInput: ba,
  placeholder: va,
  moreCount: ka,
  trailing: ya,
  clearAllButton: Na,
  chevron: $a,
  menu: ga,
  empty: wa,
  option: xa,
  focused: ja,
  selected: za,
  checkboxSlot: qa,
  checkboxBox: Ia,
  checkboxChecked: Ba,
  avatarSlot: Sa,
  iconSlot: Ca,
  labelCol: Da,
  optionLabel: La,
  optionDescription: Ta,
  optionDisabled: Ea,
  hasError: Ra,
  errorText: Wa,
  helperText: Oa
}, Fa = ({
  label: n,
  placeholder: t = "Select items...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: o,
  defaultValue: m,
  onChange: c,
  size: u = "md",
  disabled: d = !1,
  isRequired: b = !1,
  isSearchable: h = !0,
  className: N,
  id: y,
  maxDisplayedChips: _
}) => {
  const p = ee(), v = y || p, x = ae(null), A = ae(null), [B, I] = H(!1), [C, Q] = H(""), [S, te] = H(o || m || []), [J, f] = H(-1);
  Z(() => {
    o !== void 0 && te(o);
  }, [o]);
  const j = me(() => r.filter((l) => S.includes(l.value)), [r, S]), z = me(() => {
    if (!C.trim()) return r;
    const l = C.toLowerCase();
    return r.filter(
      ($) => $.label.toLowerCase().includes(l) || $.description && $.description.toLowerCase().includes(l)
    );
  }, [r, C]);
  Z(() => {
    const l = ($) => {
      x.current && !x.current.contains($.target) && (I(!1), Q(""), f(-1));
    };
    return B && document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, [B]);
  const ne = (l) => {
    if (l.disabled || d) return;
    let $;
    S.includes(l.value) ? $ = S.filter((M) => M !== l.value) : $ = [...S, l.value], o === void 0 && te($);
    const U = r.filter((M) => $.includes(M.value));
    c == null || c($, U);
  }, de = (l) => {
    if (d) return;
    const $ = S.filter((M) => M !== l);
    o === void 0 && te($);
    const U = r.filter((M) => $.includes(M.value));
    c == null || c($, U);
  }, be = (l) => {
    if (!d) {
      if (l.key === "Backspace" && C === "" && S.length > 0) {
        de(S[S.length - 1]);
        return;
      }
      if (!B) {
        (l.key === "Enter" || l.key === " " || l.key === "ArrowDown") && (l.preventDefault(), I(!0));
        return;
      }
      l.key === "Escape" ? (l.preventDefault(), I(!1), Q("")) : l.key === "ArrowDown" ? (l.preventDefault(), f(($) => $ < z.length - 1 ? $ + 1 : 0)) : l.key === "ArrowUp" ? (l.preventDefault(), f(($) => $ > 0 ? $ - 1 : z.length - 1)) : l.key === "Enter" && J >= 0 && J < z.length && (l.preventDefault(), ne(z[J]));
    }
  }, ve = _ ? j.slice(0, _) : j, _e = _ ? Math.max(0, j.length - _) : 0, ke = !!a;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: x,
      className: [
        k.container,
        k[`size-${u}`],
        B ? k.isOpen : "",
        d ? k.disabled : "",
        ke ? k.hasError : "",
        N || ""
      ].filter(Boolean).join(" "),
      onKeyDown: be,
      children: [
        n && /* @__PURE__ */ i("label", { id: `${v}-label`, className: k.label, children: [
          n,
          b && /* @__PURE__ */ e("span", { className: k.required, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            className: k.trigger,
            onClick: () => {
              d || (I(!B), !B && h && setTimeout(() => {
                var l;
                return (l = A.current) == null ? void 0 : l.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": B,
            "aria-haspopup": "listbox",
            "aria-labelledby": n ? `${v}-label` : void 0,
            children: [
              /* @__PURE__ */ i("div", { className: k.chipContainer, children: [
                ve.map((l) => /* @__PURE__ */ e(
                  ca,
                  {
                    label: l.label,
                    size: u === "lg" ? "md" : "sm",
                    avatar: l.avatar ? /* @__PURE__ */ e(
                      re,
                      {
                        size: "xs",
                        name: l.label,
                        ...l.avatar
                      }
                    ) : void 0,
                    icon: l.icon,
                    onRemove: () => de(l.value),
                    disabled: d
                  },
                  l.value
                )),
                _e > 0 && /* @__PURE__ */ i("span", { className: k.moreCount, children: [
                  "+",
                  _e,
                  " more"
                ] }),
                h ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: A,
                    type: "text",
                    className: k.searchInput,
                    placeholder: j.length === 0 ? t : "",
                    value: C,
                    onChange: (l) => {
                      Q(l.target.value), B || I(!0);
                    },
                    onClick: (l) => l.stopPropagation(),
                    disabled: d
                  }
                ) : j.length === 0 && /* @__PURE__ */ e("span", { className: k.placeholder, children: t })
              ] }),
              /* @__PURE__ */ i("div", { className: k.trailing, children: [
                S.length > 0 && !d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: k.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (l) => {
                      l.stopPropagation(), o === void 0 && te([]), c == null || c([], []);
                    },
                    children: /* @__PURE__ */ e(le, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { className: k.chevron, children: /* @__PURE__ */ e(ce, { size: 16 }) })
              ] })
            ]
          }
        ),
        B && /* @__PURE__ */ e("div", { className: k.menu, role: "listbox", "aria-multiselectable": "true", children: z.length === 0 ? /* @__PURE__ */ e("div", { className: k.empty, children: "No matches found" }) : z.map((l, $) => {
          const U = S.includes(l.value), M = $ === J;
          return /* @__PURE__ */ i(
            "div",
            {
              role: "option",
              "aria-selected": U,
              "aria-disabled": l.disabled,
              className: [
                k.option,
                U ? k.selected : "",
                M ? k.focused : "",
                l.disabled ? k.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (ye) => {
                ye.stopPropagation(), ne(l);
              },
              onMouseEnter: () => f($),
              children: [
                /* @__PURE__ */ e("div", { className: k.checkboxSlot, children: /* @__PURE__ */ e("div", { className: [k.checkboxBox, U ? k.checkboxChecked : ""].join(" "), children: U && /* @__PURE__ */ e(ie, { size: 12 }) }) }),
                l.avatar && /* @__PURE__ */ e("div", { className: k.avatarSlot, children: /* @__PURE__ */ e(
                  re,
                  {
                    size: "sm",
                    name: l.label,
                    ...l.avatar
                  }
                ) }),
                !l.avatar && l.icon && /* @__PURE__ */ e("div", { className: k.iconSlot, children: l.icon }),
                /* @__PURE__ */ i("div", { className: k.labelCol, children: [
                  /* @__PURE__ */ e("div", { className: k.optionLabel, children: l.label }),
                  l.description && /* @__PURE__ */ e("div", { className: k.optionDescription, children: l.description })
                ] })
              ]
            },
            l.value
          );
        }) }),
        a && /* @__PURE__ */ e("span", { className: k.errorText, children: a }),
        !a && s && /* @__PURE__ */ e("span", { className: k.helperText, children: s })
      ]
    }
  );
};
export {
  re as Avatar,
  Te as Badge,
  Ce as Button,
  fn as Card,
  yn as CardContent,
  kn as CardDescription,
  Nn as CardFooter,
  bn as CardHeader,
  vn as CardTitle,
  ie as CheckIcon,
  Ht as Checkbox,
  ce as ChevronDownIcon,
  ca as Chip,
  le as CloseIcon,
  Xs as Drawer,
  Et as Dropdown,
  Je as Input,
  Be as MinusIcon,
  Pn as Modal,
  Kn as ModalFooter,
  Fa as MultiSelect,
  gs as Radio,
  $s as RadioGroup,
  Ss as SearchInput,
  ot as Select,
  Ie as SpinnerIcon,
  As as StatCard,
  ds as Switch,
  es as TabPanel,
  Bn as Table,
  Cn as TableBody,
  Tn as TableCell,
  Ln as TableHead,
  Sn as TableHeader,
  Dn as TableRow,
  Zn as Tabs,
  rn as Textarea,
  Se as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
