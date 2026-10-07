import { jsxs as o, jsx as e, Fragment as ue } from "react/jsx-runtime";
import me, { forwardRef as w, useId as ee, useState as H, useRef as se, useEffect as Z, createContext as ye, useContext as Ne, useMemo as he } from "react";
import { createPortal as pe } from "react-dom";
const $e = "_button_1ckl5_1", we = "_fullWidth_1ckl5_109", xe = "_disabled_1ckl5_113", ze = "_loading_1ckl5_120", je = "_spinner_1ckl5_124", qe = "_icon_1ckl5_130", G = {
  button: $e,
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
  loading: ze,
  spinner: je,
  icon: qe
}, Ie = ({ size: n = 18, className: t, ...a }) => /* @__PURE__ */ o(
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
    ...a,
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
), oe = ({ size: n = 14, className: t, ...a }) => /* @__PURE__ */ e(
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
    ...a,
    children: /* @__PURE__ */ e("polyline", { points: "3 8.5 6.5 12 13 4.5" })
  }
), Be = ({ size: n = 14, className: t, ...a }) => /* @__PURE__ */ e(
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
    ...a,
    children: /* @__PURE__ */ e("line", { x1: "3", y1: "8", x2: "13", y2: "8" })
  }
), ce = ({ size: n = 16, className: t, ...a }) => /* @__PURE__ */ e(
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
    ...a,
    children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" })
  }
), ie = ({ size: n = 18, className: t, ...a }) => /* @__PURE__ */ o(
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
    ...a,
    children: [
      /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
), Se = ({ size: n = 20, className: t, ...a }) => /* @__PURE__ */ o(
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
    ...a,
    children: [
      /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
    ]
  }
), Ce = w(
  ({
    variant: n = "primary",
    size: t = "md",
    isLoading: a = !1,
    leftIcon: s,
    rightIcon: r,
    fullWidth: l = !1,
    disabled: h,
    className: c,
    children: u,
    ...d
  }, b) => {
    const m = [
      G.button,
      G[`variant-${n}`],
      G[`size-${t}`],
      l ? G.fullWidth : "",
      a ? G.loading : "",
      h || a ? G.disabled : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o(
      "button",
      {
        ref: b,
        disabled: h || a,
        className: m,
        "aria-busy": a,
        ...d,
        children: [
          a && /* @__PURE__ */ e("span", { className: G.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(Ie, { size: t === "sm" ? 14 : t === "lg" ? 20 : 16 }) }),
          !a && s && /* @__PURE__ */ e("span", { className: G.icon, children: s }),
          u && /* @__PURE__ */ e("span", { children: u }),
          !a && r && /* @__PURE__ */ e("span", { className: G.icon, children: r })
        ]
      }
    );
  }
);
Ce.displayName = "Button";
const De = "_badge_qj0y6_1", Le = "_dot_qj0y6_63", le = {
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
  withDot: a = !1,
  leftIcon: s,
  rightIcon: r,
  className: l,
  children: h,
  ...c
}) => {
  const u = [
    le.badge,
    le[`variant-${n}`],
    le[`size-${t}`],
    l || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("span", { className: u, ...c, children: [
    a && /* @__PURE__ */ e("span", { className: le.dot, "aria-hidden": "true" }),
    s && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s }),
    /* @__PURE__ */ e("span", { children: h }),
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
    errorMessage: a,
    inputSize: s = "md",
    leftIcon: r,
    rightIcon: l,
    isRequired: h = !1,
    disabled: c = !1,
    id: u,
    className: d,
    ...b
  }, m) => {
    const y = ee(), k = u || y, _ = !!a, p = [
      q.container,
      q[`size-${s}`],
      _ ? q.hasError : "",
      c ? q.disabled : "",
      r ? q.hasLeftIcon : "",
      l ? q.hasRightIcon : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("div", { className: p, children: [
      n && /* @__PURE__ */ o("label", { htmlFor: k, className: q.label, children: [
        n,
        h && /* @__PURE__ */ e("span", { className: q.required, children: "*" })
      ] }),
      /* @__PURE__ */ o("div", { className: q.inputWrapper, children: [
        r && /* @__PURE__ */ e("span", { className: `${q.iconSlot} ${q.leftSlot}`, children: r }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: m,
            id: k,
            disabled: c,
            "aria-invalid": _,
            "aria-describedby": _ ? `${k}-error` : t ? `${k}-helper` : void 0,
            className: q.input,
            ...b
          }
        ),
        l && /* @__PURE__ */ e("span", { className: `${q.iconSlot} ${q.rightSlot}`, children: l })
      ] }),
      _ && /* @__PURE__ */ e("span", { id: `${k}-error`, className: q.errorMessage, role: "alert", children: a }),
      !_ && t && /* @__PURE__ */ e("span", { id: `${k}-helper`, className: q.helperText, children: t })
    ] });
  }
);
Je.displayName = "Input";
const Xe = "_container_fh5kq_1", Ye = "_label_fh5kq_13", Ze = "_required_fh5kq_23", et = "_selectWrapper_fh5kq_27", tt = "_select_fh5kq_27", nt = "_chevronIcon_fh5kq_77", at = "_hasError_fh5kq_88", st = "_helperText_fh5kq_96", rt = "_errorMessage_fh5kq_102", it = "_disabled_fh5kq_110", D = {
  container: Xe,
  "size-sm": "_size-sm_fh5kq_9",
  label: Ye,
  required: Ze,
  selectWrapper: et,
  select: tt,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: nt,
  hasError: at,
  helperText: st,
  errorMessage: rt,
  disabled: it
}, lt = w(
  ({
    label: n,
    helperText: t,
    errorMessage: a,
    selectSize: s = "md",
    options: r,
    placeholder: l,
    isRequired: h = !1,
    disabled: c = !1,
    id: u,
    className: d,
    children: b,
    ...m
  }, y) => {
    const k = ee(), _ = u || k, p = !!a, v = [
      D.container,
      D[`size-${s}`],
      p ? D.hasError : "",
      c ? D.disabled : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("div", { className: v, children: [
      n && /* @__PURE__ */ o("label", { htmlFor: _, className: D.label, children: [
        n,
        h && /* @__PURE__ */ e("span", { className: D.required, children: "*" })
      ] }),
      /* @__PURE__ */ o("div", { className: D.selectWrapper, children: [
        /* @__PURE__ */ o(
          "select",
          {
            ref: y,
            id: _,
            disabled: c,
            "aria-invalid": p,
            "aria-describedby": p ? `${_}-error` : t ? `${_}-helper` : void 0,
            className: D.select,
            ...m,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              r ? r.map((x) => /* @__PURE__ */ e("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)) : b
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: D.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(ce, { size: 16 }) })
      ] }),
      p && /* @__PURE__ */ e("span", { id: `${_}-error`, className: D.errorMessage, role: "alert", children: a }),
      !p && t && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: D.helperText, children: t })
    ] });
  }
);
lt.displayName = "Select";
const ot = "_container_dzjkw_1", ct = "_label_dzjkw_14", dt = "_required_dzjkw_24", _t = "_trigger_dzjkw_28", ht = "_isOpen_dzjkw_53", ut = "_selectedContent_dzjkw_71", mt = "_placeholder_dzjkw_80", pt = "_chevron_dzjkw_84", ft = "_chevronOpen_dzjkw_93", bt = "_menu_dzjkw_98", vt = "_dropdownIn_dzjkw_1", gt = "_menuItem_dzjkw_116", kt = "_itemDisabled_dzjkw_128", yt = "_itemSelected_dzjkw_132", Nt = "_itemLeft_dzjkw_147", $t = "_itemText_dzjkw_154", wt = "_itemLabel_dzjkw_161", xt = "_itemDescription_dzjkw_169", zt = "_checkSlot_dzjkw_174", jt = "_hasError_dzjkw_183", qt = "_helperText_dzjkw_191", It = "_errorMessage_dzjkw_197", Bt = "_disabled_dzjkw_205", $ = {
  container: ot,
  "size-sm": "_size-sm_dzjkw_10",
  label: ct,
  required: dt,
  trigger: _t,
  isOpen: ht,
  "size-lg": "_size-lg_dzjkw_65",
  selectedContent: ut,
  placeholder: mt,
  chevron: pt,
  chevronOpen: ft,
  menu: bt,
  dropdownIn: vt,
  menuItem: gt,
  itemDisabled: kt,
  itemSelected: yt,
  itemLeft: Nt,
  itemText: $t,
  itemLabel: wt,
  itemDescription: xt,
  checkSlot: zt,
  hasError: jt,
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
  name: a,
  size: s = "md",
  status: r,
  className: l,
  ...h
}) => {
  const [c, u] = H(!1), d = Tt(a), b = [
    X.container,
    X[`size-${s}`],
    l || ""
  ].filter(Boolean).join(" "), m = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ o("div", { className: b, title: a || t, ...h, children: [
    n && !c ? /* @__PURE__ */ e(
      "img",
      {
        src: n,
        alt: t || a || "Avatar",
        className: X.image,
        onError: () => u(!0)
      }
    ) : d ? /* @__PURE__ */ e("span", { className: X.fallback, children: d }) : /* @__PURE__ */ e("span", { className: X.fallback, children: /* @__PURE__ */ e(Se, { size: m[s] }) }),
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
  helperText: a,
  errorMessage: s,
  options: r,
  value: l,
  defaultValue: h,
  onChange: c,
  size: u = "md",
  disabled: d = !1,
  isRequired: b = !1,
  className: m,
  id: y
}) => {
  const k = ee(), _ = y || k, p = se(null), [v, x] = H(!1), [A, B] = H(l || h);
  Z(() => {
    l !== void 0 && B(l);
  }, [l]), Z(() => {
    const f = (z) => {
      p.current && !p.current.contains(z.target) && x(!1);
    };
    return v && document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, [v]);
  const I = r.find((f) => f.value === A), C = !!s, Q = (f) => {
    f.disabled || (B(f.value), c == null || c(f.value, f), x(!1));
  }, S = (f) => {
    if (!d) {
      if (f.key === "Enter" || f.key === " ")
        f.preventDefault(), x((z) => !z);
      else if (f.key === "Escape")
        x(!1);
      else if (f.key === "ArrowDown" && v) {
        f.preventDefault();
        const z = r.findIndex((ne) => ne.value === A), j = r[z + 1];
        j && !j.disabled && Q(j);
      } else if (f.key === "ArrowUp" && v) {
        f.preventDefault();
        const z = r.findIndex((ne) => ne.value === A), j = r[z - 1];
        j && !j.disabled && Q(j);
      }
    }
  }, te = [
    $.container,
    $[`size-${u}`],
    v ? $.isOpen : "",
    C ? $.hasError : "",
    d ? $.disabled : "",
    m || ""
  ].filter(Boolean).join(" "), J = u === "sm" ? "xs" : u === "lg" ? "md" : "sm";
  return /* @__PURE__ */ o("div", { ref: p, className: te, children: [
    n && /* @__PURE__ */ o("label", { id: `${_}-label`, className: $.label, children: [
      n,
      b && /* @__PURE__ */ e("span", { className: $.required, children: "*" })
    ] }),
    /* @__PURE__ */ o(
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
        className: $.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: $.selectedContent, children: I ? /* @__PURE__ */ o(ue, { children: [
            I.avatar && /* @__PURE__ */ e(
              re,
              {
                size: I.avatar.size || J,
                ...I.avatar
              }
            ),
            I.icon && /* @__PURE__ */ e("span", { children: I.icon }),
            /* @__PURE__ */ e("span", { children: I.label })
          ] }) : /* @__PURE__ */ e("span", { className: $.placeholder, children: t }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${$.chevron} ${v ? $.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(ce, { size: 16 })
            }
          )
        ]
      }
    ),
    v && /* @__PURE__ */ e("ul", { role: "listbox", "aria-labelledby": `${_}-label`, className: $.menu, children: r.map((f) => {
      const z = f.value === A, j = [
        $.menuItem,
        z ? $.itemSelected : "",
        f.disabled ? $.itemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ o(
        "li",
        {
          role: "option",
          "aria-selected": z,
          "aria-disabled": f.disabled,
          onClick: () => Q(f),
          className: j,
          children: [
            /* @__PURE__ */ o("div", { className: $.itemLeft, children: [
              f.avatar && /* @__PURE__ */ e(re, { size: f.avatar.size || J, ...f.avatar }),
              f.icon && /* @__PURE__ */ e("span", { children: f.icon }),
              /* @__PURE__ */ o("div", { className: $.itemText, children: [
                /* @__PURE__ */ e("span", { className: $.itemLabel, children: f.label }),
                f.description && /* @__PURE__ */ e("span", { className: $.itemDescription, children: f.description })
              ] })
            ] }),
            z && /* @__PURE__ */ e("span", { className: $.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(oe, { size: 14 }) })
          ]
        },
        f.value
      );
    }) }),
    C && /* @__PURE__ */ e("span", { id: `${_}-error`, className: $.errorMessage, role: "alert", children: s }),
    !C && a && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: $.helperText, children: a })
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
    checked: a,
    defaultChecked: s,
    indeterminate: r = !1,
    disabled: l = !1,
    className: h,
    onChange: c,
    ...u
  }, d) => {
    const b = se(null), m = d || b;
    Z(() => {
      m && "current" in m && m.current && (m.current.indeterminate = r);
    }, [r, m]);
    const y = a ?? s ?? !1, k = [
      R.container,
      t ? R.hasDescription : "",
      l ? R.disabled : "",
      h || ""
    ].filter(Boolean).join(" "), _ = [
      R.box,
      r ? R.indeterminate : y ? R.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("label", { className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: m,
          checked: a,
          defaultChecked: s,
          disabled: l,
          className: R.nativeInput,
          onChange: c,
          ...u
        }
      ),
      /* @__PURE__ */ o("span", { className: _, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(Be, { size: 12 }),
        !r && y && /* @__PURE__ */ e(oe, { size: 12 })
      ] }),
      (n || t) && /* @__PURE__ */ o("span", { className: R.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: R.label, children: n }),
        t && /* @__PURE__ */ e("span", { className: R.description, children: t })
      ] })
    ] });
  }
);
Ht.displayName = "Checkbox";
const Ut = "_container_m4qf3_1", Qt = "_label_m4qf3_9", Jt = "_required_m4qf3_19", Xt = "_textareaWrapper_m4qf3_23", Yt = "_textarea_m4qf3_23", Zt = "_hasError_m4qf3_58", en = "_footer_m4qf3_66", tn = "_helperText_m4qf3_74", nn = "_errorMessage_m4qf3_78", an = "_charCount_m4qf3_83", sn = "_disabled_m4qf3_89", L = {
  container: Ut,
  label: Qt,
  required: Jt,
  textareaWrapper: Xt,
  textarea: Yt,
  hasError: Zt,
  footer: en,
  helperText: tn,
  errorMessage: nn,
  charCount: an,
  disabled: sn
}, rn = w(
  ({
    label: n,
    helperText: t,
    errorMessage: a,
    isRequired: s = !1,
    showCharCount: r = !1,
    maxLength: l,
    disabled: h = !1,
    value: c,
    defaultValue: u,
    id: d,
    className: b,
    onChange: m,
    ...y
  }, k) => {
    const _ = ee(), p = d || _, v = !!a, [x, A] = me.useState(() => typeof c == "string" ? c.length : typeof u == "string" ? u.length : 0), B = (C) => {
      A(C.target.value.length), m == null || m(C);
    }, I = [
      L.container,
      v ? L.hasError : "",
      h ? L.disabled : "",
      b || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("div", { className: I, children: [
      n && /* @__PURE__ */ o("label", { htmlFor: p, className: L.label, children: [
        n,
        s && /* @__PURE__ */ e("span", { className: L.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: L.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: k,
          id: p,
          disabled: h,
          value: c,
          defaultValue: u,
          maxLength: l,
          onChange: B,
          "aria-invalid": v,
          "aria-describedby": v ? `${p}-error` : t ? `${p}-helper` : void 0,
          className: L.textarea,
          ...y
        }
      ) }),
      /* @__PURE__ */ o("div", { className: L.footer, children: [
        v && /* @__PURE__ */ e("span", { id: `${p}-error`, className: L.errorMessage, role: "alert", children: a }),
        !v && t && /* @__PURE__ */ e("span", { id: `${p}-helper`, className: L.helperText, children: t }),
        r && l && /* @__PURE__ */ o("span", { className: L.charCount, children: [
          x,
          " / ",
          l
        ] })
      ] })
    ] });
  }
);
rn.displayName = "Textarea";
const ln = "_card_cnmiq_1", on = "_interactive_cnmiq_28", cn = "_header_cnmiq_56", dn = "_headerBordered_cnmiq_63", _n = "_title_cnmiq_68", hn = "_description_cnmiq_77", un = "_content_cnmiq_84", mn = "_footer_cnmiq_88", pn = "_footerBordered_cnmiq_96", E = {
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
  description: hn,
  content: un,
  footer: mn,
  footerBordered: pn
}, fn = w(
  ({
    elevation: n = 1,
    padding: t = "none",
    isInteractive: a = !1,
    className: s,
    children: r,
    ...l
  }, h) => {
    const c = [
      E.card,
      E[`elevation-${n}`],
      E[`padding-${t}`],
      a ? E.interactive : "",
      s || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: h, className: c, ...l, children: r });
  }
);
fn.displayName = "Card";
const bn = w(
  ({ bordered: n = !1, className: t, children: a, ...s }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${E.header} ${n ? E.headerBordered : ""} ${t || ""}`,
      ...s,
      children: a
    }
  )
);
bn.displayName = "CardHeader";
const vn = w(
  ({ as: n = "h3", className: t, children: a, ...s }, r) => /* @__PURE__ */ e(n, { ref: r, className: `${E.title} ${t || ""}`, ...s, children: a })
);
vn.displayName = "CardTitle";
const gn = w(
  ({ className: n, children: t, ...a }, s) => /* @__PURE__ */ e("p", { ref: s, className: `${E.description} ${n || ""}`, ...a, children: t })
);
gn.displayName = "CardDescription";
const kn = w(
  ({ className: n, children: t, ...a }, s) => /* @__PURE__ */ e("div", { ref: s, className: `${E.content} ${n || ""}`, ...a, children: t })
);
kn.displayName = "CardContent";
const yn = w(
  ({ bordered: n = !1, className: t, children: a, ...s }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${E.footer} ${n ? E.footerBordered : ""} ${t || ""}`,
      ...s,
      children: a
    }
  )
);
yn.displayName = "CardFooter";
const Nn = "_container_1xw60_1", $n = "_table_1xw60_10", wn = "_header_1xw60_19", xn = "_headCell_1xw60_24", zn = "_row_1xw60_35", jn = "_hoverable_1xw60_44", qn = "_cell_1xw60_48", In = "_tabularNums_1xw60_54", O = {
  container: Nn,
  table: $n,
  header: wn,
  headCell: xn,
  row: zn,
  hoverable: jn,
  cell: qn,
  tabularNums: In,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Bn = w(
  ({ className: n, containerClassName: t, children: a, ...s }, r) => /* @__PURE__ */ e("div", { className: `${O.container} ${t || ""}`, children: /* @__PURE__ */ e("table", { ref: r, className: `${O.table} ${n || ""}`, ...s, children: a }) })
);
Bn.displayName = "Table";
const Sn = w(
  ({ className: n, children: t, ...a }, s) => /* @__PURE__ */ e("thead", { ref: s, className: `${O.header} ${n || ""}`, ...a, children: t })
);
Sn.displayName = "TableHeader";
const Cn = w(
  ({ className: n, children: t, ...a }, s) => /* @__PURE__ */ e("tbody", { ref: s, className: n, ...a, children: t })
);
Cn.displayName = "TableBody";
const Dn = w(
  ({ isHoverable: n = !0, className: t, children: a, ...s }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: `${O.row} ${n ? O.hoverable : ""} ${t || ""}`,
      ...s,
      children: a
    }
  )
);
Dn.displayName = "TableRow";
const Ln = w(
  ({ align: n = "left", className: t, children: a, ...s }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: `${O.headCell} ${O[`align-${n}`]} ${t || ""}`,
      ...s,
      children: a
    }
  )
);
Ln.displayName = "TableHead";
const Tn = w(
  ({ align: n = "left", isNumeric: t = !1, className: a, children: s, ...r }, l) => /* @__PURE__ */ e(
    "td",
    {
      ref: l,
      className: `${O.cell} ${O[`align-${n}`]} ${t ? O.tabularNums : ""} ${a || ""}`,
      ...r,
      children: s
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
  title: a,
  size: s = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: l = !0,
  showCloseButton: h = !0,
  footer: c,
  children: u,
  className: d
}) => {
  const b = ee(), m = se(null);
  if (Z(() => {
    if (!n) return;
    const p = (v) => {
      v.key === "Escape" && l && t();
    };
    return document.addEventListener("keydown", p), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    };
  }, [n, l, t]), !n) return null;
  const y = (p) => {
    p.target === p.currentTarget && r && t();
  }, k = [
    K.modal,
    K[`size-${s}`],
    d || ""
  ].filter(Boolean).join(" "), _ = /* @__PURE__ */ e("div", { className: K.overlay, onClick: y, children: /* @__PURE__ */ o(
    "div",
    {
      ref: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": a ? b : void 0,
      tabIndex: -1,
      className: k,
      children: [
        (a || h) && /* @__PURE__ */ o("div", { className: K.header, children: [
          a && /* @__PURE__ */ e("h2", { id: b, className: K.title, children: a }),
          h && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: t,
              className: K.closeButton,
              children: /* @__PURE__ */ e(ie, { size: 18 })
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
const Kn = ({ className: n, children: t, ...a }) => /* @__PURE__ */ e("div", { className: `${K.footer} ${n || ""}`, ...a, children: t });
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
  defaultActiveTab: a,
  onChange: s,
  variant: r = "pill",
  fullWidth: l = !1,
  className: h,
  children: c
}) => {
  var k;
  const [u, d] = H(
    t || a || ((k = n[0]) == null ? void 0 : k.id) || ""
  ), b = t !== void 0 ? t : u, m = (_, p) => {
    p || (d(_), s == null || s(_));
  }, y = [
    Y.tabList,
    Y[`variant-${r}`],
    l ? Y.fullWidth : "",
    h || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ e("div", { role: "tablist", className: y, children: n.map((_) => {
      const p = _.id === b, v = [
        Y.tab,
        p ? Y.tabActive : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ o(
        "button",
        {
          role: "tab",
          type: "button",
          "aria-selected": p,
          "aria-controls": `panel-${_.id}`,
          id: `tab-${_.id}`,
          disabled: _.disabled,
          onClick: () => m(_.id, _.disabled),
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
const ea = ({
  tabId: n,
  activeTabId: t,
  className: a,
  children: s,
  ...r
}) => n !== t ? null : /* @__PURE__ */ e(
  "div",
  {
    role: "tabpanel",
    id: `panel-${n}`,
    "aria-labelledby": `tab-${n}`,
    className: `${Y.panel} ${a || ""}`,
    ...r,
    children: s
  }
);
ea.displayName = "TabPanel";
const ta = "_container_1xroe_1", na = "_track_1xroe_10", aa = "_thumb_1xroe_24", sa = "_checked_1xroe_34", ra = "_nativeInput_1xroe_43", ia = "_label_1xroe_55", la = "_description_1xroe_61", oa = "_textGroup_1xroe_66", ca = "_disabled_1xroe_72", F = {
  container: ta,
  track: na,
  thumb: aa,
  checked: sa,
  nativeInput: ra,
  label: ia,
  description: la,
  textGroup: oa,
  disabled: ca
}, da = w(
  ({
    label: n,
    description: t,
    checked: a,
    defaultChecked: s,
    disabled: r = !1,
    className: l,
    onChange: h,
    ...c
  }, u) => {
    const d = a ?? s ?? !1, b = [
      F.container,
      d ? F.checked : "",
      r ? F.disabled : "",
      l || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("label", { className: b, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: u,
          checked: a,
          defaultChecked: s,
          disabled: r,
          "aria-checked": d,
          className: F.nativeInput,
          onChange: h,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: F.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: F.thumb }) }),
      (n || t) && /* @__PURE__ */ o("span", { className: F.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: F.label, children: n }),
        t && /* @__PURE__ */ e("span", { className: F.description, children: t })
      ] })
    ] });
  }
);
da.displayName = "Switch";
const _a = "_group_1e0nk_1", ha = "_groupLabel_1e0nk_8", ua = "_item_1e0nk_14", ma = "_circle_1e0nk_22", pa = "_dot_1e0nk_35", fa = "_checked_1e0nk_45", ba = "_nativeInput_1e0nk_54", va = "_label_1e0nk_67", ga = "_description_1e0nk_73", ka = "_textGroup_1e0nk_78", ya = "_disabled_1e0nk_84", T = {
  group: _a,
  groupLabel: ha,
  item: ua,
  circle: ma,
  dot: pa,
  checked: fa,
  nativeInput: ba,
  label: va,
  description: ga,
  textGroup: ka,
  disabled: ya
}, fe = ye(null), Na = ({
  name: n,
  value: t,
  defaultValue: a,
  onChange: s,
  label: r,
  disabled: l = !1,
  className: h,
  children: c
}) => {
  const [u, d] = me.useState(t || a), b = t !== void 0 ? t : u, m = (y) => {
    d(y.target.value), s == null || s(y.target.value);
  };
  return /* @__PURE__ */ e(
    fe.Provider,
    {
      value: {
        name: n,
        value: b,
        onChange: m,
        disabled: l
      },
      children: /* @__PURE__ */ o("div", { role: "radiogroup", "aria-label": r, className: `${T.group} ${h || ""}`, children: [
        r && /* @__PURE__ */ e("span", { className: T.groupLabel, children: r }),
        c
      ] })
    }
  );
};
Na.displayName = "RadioGroup";
const $a = w(
  ({ value: n, label: t, description: a, disabled: s, className: r, checked: l, onChange: h, ...c }, u) => {
    const d = Ne(fe), b = d ? d.value === n : l, m = s || (d == null ? void 0 : d.disabled) || !1, y = (d == null ? void 0 : d.name) || c.name, k = [
      T.item,
      b ? T.checked : "",
      m ? T.disabled : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o("label", { className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: u,
          type: "radio",
          name: y,
          value: n,
          checked: b,
          disabled: m,
          onChange: (p) => {
            var v;
            h == null || h(p), (v = d == null ? void 0 : d.onChange) == null || v.call(d, p);
          },
          className: T.nativeInput,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: T.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: T.dot }) }),
      (t || a) && /* @__PURE__ */ o("span", { className: T.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: T.label, children: t }),
        a && /* @__PURE__ */ e("span", { className: T.description, children: a })
      ] })
    ] });
  }
);
$a.displayName = "Radio";
const wa = "_wrapper_yiqhg_1", xa = "_searchIcon_yiqhg_8", za = "_input_yiqhg_18", ja = "_rightSlots_yiqhg_42", qa = "_clearButton_yiqhg_50", Ia = "_shortcut_yiqhg_66", ae = {
  wrapper: wa,
  searchIcon: xa,
  input: za,
  rightSlots: ja,
  clearButton: qa,
  shortcut: Ia
}, Ba = ({ ...n }) => /* @__PURE__ */ o(
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
), Sa = w(
  ({ value: n, defaultValue: t, onChange: a, onClear: s, shortcutHint: r = "⌘K", placeholder: l = "Search records, students, classes...", className: h, ...c }, u) => {
    const [d, b] = H(
      n || t || ""
    ), m = n !== void 0, y = m ? n : d, k = (p) => {
      m || b(p.target.value), a == null || a(p);
    }, _ = () => {
      m || b(""), s == null || s();
    };
    return /* @__PURE__ */ o("div", { className: `${ae.wrapper} ${h || ""}`, children: [
      /* @__PURE__ */ e("span", { className: ae.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(Ba, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: u,
          type: "search",
          value: y,
          placeholder: l,
          onChange: k,
          className: ae.input,
          ...c
        }
      ),
      /* @__PURE__ */ o("div", { className: ae.rightSlots, children: [
        y && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: _,
            className: ae.clearButton,
            children: /* @__PURE__ */ e(ie, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: ae.shortcut, children: r })
      ] })
    ] });
  }
);
Sa.displayName = "SearchInput";
const Ca = "_card_kgob9_1", Da = "_topRow_kgob9_18", La = "_title_kgob9_25", Ta = "_iconSlot_kgob9_33", Ea = "_metricRow_kgob9_49", Ra = "_value_kgob9_55", Wa = "_trendBadge_kgob9_65", Oa = "_description_kgob9_90", W = {
  card: Ca,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: Da,
  title: La,
  iconSlot: Ta,
  metricRow: Ea,
  value: Ra,
  trendBadge: Wa,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: Oa
}, Aa = ({
  title: n,
  value: t,
  description: a,
  trend: s,
  icon: r,
  highlighted: l = !1,
  className: h,
  ...c
}) => {
  const u = [
    W.card,
    l ? W["variant-highlight"] : "",
    h || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("div", { className: u, ...c, children: [
    /* @__PURE__ */ o("div", { className: W.topRow, children: [
      /* @__PURE__ */ e("h4", { className: W.title, children: n }),
      r && /* @__PURE__ */ e("span", { className: W.iconSlot, children: r })
    ] }),
    /* @__PURE__ */ o("div", { className: W.metricRow, children: [
      /* @__PURE__ */ e("span", { className: W.value, children: t }),
      s && /* @__PURE__ */ o("span", { className: `${W.trendBadge} ${W[`trend-${s.direction}`]}`, children: [
        s.direction === "up" && "↑ ",
        s.direction === "down" && "↓ ",
        s.value
      ] })
    ] }),
    a && /* @__PURE__ */ e("p", { className: W.description, children: a })
  ] });
};
Aa.displayName = "StatCard";
const Ma = "_overlay_1jiz5_1", Ga = "_fadeIn_1jiz5_1", Fa = "_drawer_1jiz5_11", Va = "_slideInRight_1jiz5_1", Pa = "_slideInLeft_1jiz5_1", Ka = "_header_1jiz5_51", Ha = "_title_1jiz5_59", Ua = "_closeButton_1jiz5_67", Qa = "_body_1jiz5_90", Ja = "_footer_1jiz5_99", V = {
  overlay: Ma,
  fadeIn: Ga,
  drawer: Fa,
  "placement-right": "_placement-right_1jiz5_26",
  slideInRight: Va,
  "placement-left": "_placement-left_1jiz5_31",
  slideInLeft: Pa,
  "size-sm": "_size-sm_1jiz5_39",
  "size-md": "_size-md_1jiz5_43",
  "size-lg": "_size-lg_1jiz5_47",
  header: Ka,
  title: Ha,
  closeButton: Ua,
  body: Qa,
  footer: Ja
}, Xa = ({
  isOpen: n,
  onClose: t,
  title: a,
  placement: s = "right",
  size: r = "md",
  closeOnOverlayClick: l = !0,
  closeOnEsc: h = !0,
  showCloseButton: c = !0,
  footer: u,
  children: d,
  className: b
}) => {
  const m = ee(), y = se(null);
  if (Z(() => {
    if (!n) return;
    const v = (x) => {
      x.key === "Escape" && h && t();
    };
    return document.addEventListener("keydown", v), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    };
  }, [n, h, t]), !n) return null;
  const k = (v) => {
    v.target === v.currentTarget && l && t();
  }, _ = [
    V.drawer,
    V[`placement-${s}`],
    V[`size-${r}`],
    b || ""
  ].filter(Boolean).join(" "), p = /* @__PURE__ */ o(ue, { children: [
    /* @__PURE__ */ e("div", { className: V.overlay, onClick: k }),
    /* @__PURE__ */ o(
      "div",
      {
        ref: y,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": a ? m : void 0,
        tabIndex: -1,
        className: _,
        children: [
          (a || c) && /* @__PURE__ */ o("div", { className: V.header, children: [
            a && /* @__PURE__ */ e("h3", { id: m, className: V.title, children: a }),
            c && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: t,
                className: V.closeButton,
                children: /* @__PURE__ */ e(ie, { size: 18 })
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
Xa.displayName = "Drawer";
const Ya = "_chip_1wkho_1", Za = "_md_1wkho_15", es = "_sm_1wkho_23", ts = "_neutral_1wkho_32", ns = "_primary_1wkho_38", as = "_outline_1wkho_44", ss = "_avatarSlot_1wkho_51", rs = "_iconSlot_1wkho_66", is = "_label_1wkho_74", ls = "_removeButton_1wkho_80", os = "_disabled_1wkho_101", P = {
  chip: Ya,
  md: Za,
  sm: es,
  neutral: ts,
  primary: ns,
  outline: as,
  avatarSlot: ss,
  iconSlot: rs,
  label: is,
  removeButton: ls,
  disabled: os
}, cs = ({
  label: n,
  avatar: t,
  icon: a,
  variant: s = "neutral",
  size: r = "md",
  onRemove: l,
  disabled: h = !1,
  className: c,
  ...u
}) => {
  const d = [
    P.chip,
    P[s],
    P[r],
    l ? P.removable : "",
    h ? P.disabled : "",
    c || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("div", { className: d, role: "status", ...u, children: [
    t && /* @__PURE__ */ e("span", { className: P.avatarSlot, children: t }),
    !t && a && /* @__PURE__ */ e("span", { className: P.iconSlot, children: a }),
    /* @__PURE__ */ e("span", { className: P.label, children: n }),
    l && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": `Remove ${n}`,
        className: P.removeButton,
        onClick: (b) => {
          b.stopPropagation(), !h && l && l();
        },
        disabled: h,
        children: /* @__PURE__ */ e(ie, { size: 12 })
      }
    )
  ] });
}, ds = "_container_ing3i_1", _s = "_label_ing3i_14", hs = "_required_ing3i_24", us = "_trigger_ing3i_29", ms = "_disabled_ing3i_50", ps = "_isOpen_ing3i_54", fs = "_chipContainer_ing3i_72", bs = "_searchInput_ing3i_81", vs = "_placeholder_ing3i_93", gs = "_moreCount_ing3i_97", ks = "_trailing_ing3i_107", ys = "_clearAllButton_ing3i_114", Ns = "_chevron_ing3i_131", $s = "_menu_ing3i_143", ws = "_empty_ing3i_161", xs = "_option_ing3i_169", zs = "_focused_ing3i_185", js = "_selected_ing3i_189", qs = "_checkboxSlot_ing3i_198", Is = "_checkboxBox_ing3i_205", Bs = "_checkboxChecked_ing3i_218", Ss = "_avatarSlot_ing3i_223", Cs = "_iconSlot_ing3i_229", Ds = "_labelCol_ing3i_236", Ls = "_optionLabel_ing3i_243", Ts = "_optionDescription_ing3i_250", Es = "_optionDisabled_ing3i_257", Rs = "_hasError_ing3i_264", Ws = "_errorText_ing3i_273", Os = "_helperText_ing3i_278", g = {
  container: ds,
  "size-sm": "_size-sm_ing3i_10",
  label: _s,
  required: hs,
  trigger: us,
  disabled: ms,
  isOpen: ps,
  "size-lg": "_size-lg_ing3i_66",
  chipContainer: fs,
  searchInput: bs,
  placeholder: vs,
  moreCount: gs,
  trailing: ks,
  clearAllButton: ys,
  chevron: Ns,
  menu: $s,
  empty: ws,
  option: xs,
  focused: zs,
  selected: js,
  checkboxSlot: qs,
  checkboxBox: Is,
  checkboxChecked: Bs,
  avatarSlot: Ss,
  iconSlot: Cs,
  labelCol: Ds,
  optionLabel: Ls,
  optionDescription: Ts,
  optionDisabled: Es,
  hasError: Rs,
  errorText: Ws,
  helperText: Os
}, Fs = ({
  label: n,
  placeholder: t = "Select items...",
  helperText: a,
  errorMessage: s,
  options: r,
  value: l,
  defaultValue: h,
  onChange: c,
  size: u = "md",
  disabled: d = !1,
  isRequired: b = !1,
  isSearchable: m = !0,
  className: y,
  id: k,
  maxDisplayedChips: _
}) => {
  const p = ee(), v = k || p, x = se(null), A = se(null), [B, I] = H(!1), [C, Q] = H(""), [S, te] = H(l || h || []), [J, f] = H(-1);
  Z(() => {
    l !== void 0 && te(l);
  }, [l]);
  const z = he(() => r.filter((i) => S.includes(i.value)), [r, S]), j = he(() => {
    if (!C.trim()) return r;
    const i = C.toLowerCase();
    return r.filter(
      (N) => N.label.toLowerCase().includes(i) || N.description && N.description.toLowerCase().includes(i)
    );
  }, [r, C]);
  Z(() => {
    const i = (N) => {
      x.current && !x.current.contains(N.target) && (I(!1), Q(""), f(-1));
    };
    return B && document.addEventListener("mousedown", i), () => {
      document.removeEventListener("mousedown", i);
    };
  }, [B]);
  const ne = (i) => {
    if (i.disabled || d) return;
    let N;
    S.includes(i.value) ? N = S.filter((M) => M !== i.value) : N = [...S, i.value], l === void 0 && te(N);
    const U = r.filter((M) => N.includes(M.value));
    c == null || c(N, U);
  }, de = (i) => {
    if (d) return;
    const N = S.filter((M) => M !== i);
    l === void 0 && te(N);
    const U = r.filter((M) => N.includes(M.value));
    c == null || c(N, U);
  }, be = (i) => {
    if (!d) {
      if (i.key === "Backspace" && C === "" && S.length > 0) {
        de(S[S.length - 1]);
        return;
      }
      if (!B) {
        (i.key === "Enter" || i.key === " " || i.key === "ArrowDown") && (i.preventDefault(), I(!0));
        return;
      }
      i.key === "Escape" ? (i.preventDefault(), I(!1), Q("")) : i.key === "ArrowDown" ? (i.preventDefault(), f((N) => N < j.length - 1 ? N + 1 : 0)) : i.key === "ArrowUp" ? (i.preventDefault(), f((N) => N > 0 ? N - 1 : j.length - 1)) : i.key === "Enter" && J >= 0 && J < j.length && (i.preventDefault(), ne(j[J]));
    }
  }, ve = _ ? z.slice(0, _) : z, _e = _ ? Math.max(0, z.length - _) : 0, ge = !!s;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: x,
      className: [
        g.container,
        g[`size-${u}`],
        B ? g.isOpen : "",
        d ? g.disabled : "",
        ge ? g.hasError : "",
        y || ""
      ].filter(Boolean).join(" "),
      onKeyDown: be,
      children: [
        n && /* @__PURE__ */ o("label", { id: `${v}-label`, className: g.label, children: [
          n,
          b && /* @__PURE__ */ e("span", { className: g.required, children: "*" })
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: g.trigger,
            onClick: () => {
              d || (I(!B), !B && m && setTimeout(() => {
                var i;
                return (i = A.current) == null ? void 0 : i.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": B,
            "aria-haspopup": "listbox",
            "aria-labelledby": n ? `${v}-label` : void 0,
            children: [
              /* @__PURE__ */ o("div", { className: g.chipContainer, children: [
                ve.map((i) => /* @__PURE__ */ e(
                  cs,
                  {
                    label: i.label,
                    size: u === "lg" ? "md" : "sm",
                    avatar: i.avatar ? /* @__PURE__ */ e(
                      re,
                      {
                        size: "xs",
                        name: i.label,
                        ...i.avatar
                      }
                    ) : void 0,
                    icon: i.icon,
                    onRemove: () => de(i.value),
                    disabled: d
                  },
                  i.value
                )),
                _e > 0 && /* @__PURE__ */ o("span", { className: g.moreCount, children: [
                  "+",
                  _e,
                  " more"
                ] }),
                m ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: A,
                    type: "text",
                    className: g.searchInput,
                    placeholder: z.length === 0 ? t : "",
                    value: C,
                    onChange: (i) => {
                      Q(i.target.value), B || I(!0);
                    },
                    onClick: (i) => i.stopPropagation(),
                    disabled: d
                  }
                ) : z.length === 0 && /* @__PURE__ */ e("span", { className: g.placeholder, children: t })
              ] }),
              /* @__PURE__ */ o("div", { className: g.trailing, children: [
                S.length > 0 && !d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: g.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (i) => {
                      i.stopPropagation(), l === void 0 && te([]), c == null || c([], []);
                    },
                    children: /* @__PURE__ */ e(ie, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { className: g.chevron, children: /* @__PURE__ */ e(ce, { size: 16 }) })
              ] })
            ]
          }
        ),
        B && /* @__PURE__ */ e("div", { className: g.menu, role: "listbox", "aria-multiselectable": "true", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: g.empty, children: "No matches found" }) : j.map((i, N) => {
          const U = S.includes(i.value), M = N === J;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "option",
              "aria-selected": U,
              "aria-disabled": i.disabled,
              className: [
                g.option,
                U ? g.selected : "",
                M ? g.focused : "",
                i.disabled ? g.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (ke) => {
                ke.stopPropagation(), ne(i);
              },
              onMouseEnter: () => f(N),
              children: [
                /* @__PURE__ */ e("div", { className: g.checkboxSlot, children: /* @__PURE__ */ e("div", { className: [g.checkboxBox, U ? g.checkboxChecked : ""].join(" "), children: U && /* @__PURE__ */ e(oe, { size: 12 }) }) }),
                i.avatar && /* @__PURE__ */ e("div", { className: g.avatarSlot, children: /* @__PURE__ */ e(
                  re,
                  {
                    size: "sm",
                    name: i.label,
                    ...i.avatar
                  }
                ) }),
                !i.avatar && i.icon && /* @__PURE__ */ e("div", { className: g.iconSlot, children: i.icon }),
                /* @__PURE__ */ o("div", { className: g.labelCol, children: [
                  /* @__PURE__ */ e("div", { className: g.optionLabel, children: i.label }),
                  i.description && /* @__PURE__ */ e("div", { className: g.optionDescription, children: i.description })
                ] })
              ]
            },
            i.value
          );
        }) }),
        s && /* @__PURE__ */ e("span", { className: g.errorText, children: s }),
        !s && a && /* @__PURE__ */ e("span", { className: g.helperText, children: a })
      ]
    }
  );
};
export {
  re as Avatar,
  Te as Badge,
  Ce as Button,
  fn as Card,
  kn as CardContent,
  gn as CardDescription,
  yn as CardFooter,
  bn as CardHeader,
  vn as CardTitle,
  oe as CheckIcon,
  Ht as Checkbox,
  ce as ChevronDownIcon,
  cs as Chip,
  ie as CloseIcon,
  Xa as Drawer,
  Et as Dropdown,
  Je as Input,
  Be as MinusIcon,
  Pn as Modal,
  Kn as ModalFooter,
  Fs as MultiSelect,
  $a as Radio,
  Na as RadioGroup,
  Sa as SearchInput,
  lt as Select,
  Ie as SpinnerIcon,
  Aa as StatCard,
  da as Switch,
  ea as TabPanel,
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
