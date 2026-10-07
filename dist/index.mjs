import { jsxs as i, jsx as e, Fragment as ee } from "react/jsx-runtime";
import te, { forwardRef as k, useId as F, useState as H, useRef as U, useEffect as V, createContext as oe, useContext as ce } from "react";
import { createPortal as ae } from "react-dom";
const de = "_button_1ckl5_1", _e = "_fullWidth_1ckl5_109", he = "_disabled_1ckl5_113", me = "_loading_1ckl5_120", ue = "_spinner_1ckl5_124", pe = "_icon_1ckl5_130", T = {
  button: de,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: _e,
  disabled: he,
  loading: me,
  spinner: ue,
  icon: pe
}, fe = ({ size: a = 18, className: t, ...n }) => /* @__PURE__ */ i(
  "svg",
  {
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    style: { animation: "ui-spin 0.8s linear infinite" },
    ...n,
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
), ne = ({ size: a = 14, className: t, ...n }) => /* @__PURE__ */ e(
  "svg",
  {
    width: a,
    height: a,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...n,
    children: /* @__PURE__ */ e("polyline", { points: "3 8.5 6.5 12 13 4.5" })
  }
), be = ({ size: a = 14, className: t, ...n }) => /* @__PURE__ */ e(
  "svg",
  {
    width: a,
    height: a,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    className: t,
    ...n,
    children: /* @__PURE__ */ e("line", { x1: "3", y1: "8", x2: "13", y2: "8" })
  }
), se = ({ size: a = 16, className: t, ...n }) => /* @__PURE__ */ e(
  "svg",
  {
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...n,
    children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" })
  }
), Y = ({ size: a = 18, className: t, ...n }) => /* @__PURE__ */ i(
  "svg",
  {
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...n,
    children: [
      /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
), ve = ({ size: a = 20, className: t, ...n }) => /* @__PURE__ */ i(
  "svg",
  {
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: t,
    ...n,
    children: [
      /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
    ]
  }
), ye = k(
  ({
    variant: a = "primary",
    size: t = "md",
    isLoading: n = !1,
    leftIcon: s,
    rightIcon: r,
    fullWidth: o = !1,
    disabled: _,
    className: d,
    children: h,
    ...c
  }, f) => {
    const u = [
      T.button,
      T[`variant-${a}`],
      T[`size-${t}`],
      o ? T.fullWidth : "",
      n ? T.loading : "",
      _ || n ? T.disabled : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i(
      "button",
      {
        ref: f,
        disabled: _ || n,
        className: u,
        "aria-busy": n,
        ...c,
        children: [
          n && /* @__PURE__ */ e("span", { className: T.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(fe, { size: t === "sm" ? 14 : t === "lg" ? 20 : 16 }) }),
          !n && s && /* @__PURE__ */ e("span", { className: T.icon, children: s }),
          h && /* @__PURE__ */ e("span", { children: h }),
          !n && r && /* @__PURE__ */ e("span", { className: T.icon, children: r })
        ]
      }
    );
  }
);
ye.displayName = "Button";
const $e = "_badge_qj0y6_1", ke = "_dot_qj0y6_63", P = {
  badge: $e,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: ke
}, Ne = ({
  variant: a = "neutral",
  size: t = "md",
  withDot: n = !1,
  leftIcon: s,
  rightIcon: r,
  className: o,
  children: _,
  ...d
}) => {
  const h = [
    P.badge,
    P[`variant-${a}`],
    P[`size-${t}`],
    o || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("span", { className: h, ...d, children: [
    n && /* @__PURE__ */ e("span", { className: P.dot, "aria-hidden": "true" }),
    s && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s }),
    /* @__PURE__ */ e("span", { children: _ }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
  ] });
};
Ne.displayName = "Badge";
const ge = "_container_df4fv_1", we = "_label_df4fv_13", xe = "_required_df4fv_23", ze = "_inputWrapper_df4fv_27", je = "_input_df4fv_27", qe = "_hasLeftIcon_df4fv_80", Ie = "_hasRightIcon_df4fv_84", Be = "_iconSlot_df4fv_88", Ce = "_leftSlot_df4fv_96", Se = "_rightSlot_df4fv_100", Le = "_hasError_df4fv_105", Te = "_helperText_df4fv_113", De = "_errorMessage_df4fv_119", Ee = "_disabled_df4fv_127", N = {
  container: ge,
  "size-sm": "_size-sm_df4fv_9",
  label: we,
  required: xe,
  inputWrapper: ze,
  input: je,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: qe,
  hasRightIcon: Ie,
  iconSlot: Be,
  leftSlot: Ce,
  rightSlot: Se,
  hasError: Le,
  helperText: Te,
  errorMessage: De,
  disabled: Ee
}, Re = k(
  ({
    label: a,
    helperText: t,
    errorMessage: n,
    inputSize: s = "md",
    leftIcon: r,
    rightIcon: o,
    isRequired: _ = !1,
    disabled: d = !1,
    id: h,
    className: c,
    ...f
  }, u) => {
    const y = F(), v = h || y, l = !!n, m = [
      N.container,
      N[`size-${s}`],
      l ? N.hasError : "",
      d ? N.disabled : "",
      r ? N.hasLeftIcon : "",
      o ? N.hasRightIcon : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: m, children: [
      a && /* @__PURE__ */ i("label", { htmlFor: v, className: N.label, children: [
        a,
        _ && /* @__PURE__ */ e("span", { className: N.required, children: "*" })
      ] }),
      /* @__PURE__ */ i("div", { className: N.inputWrapper, children: [
        r && /* @__PURE__ */ e("span", { className: `${N.iconSlot} ${N.leftSlot}`, children: r }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: u,
            id: v,
            disabled: d,
            "aria-invalid": l,
            "aria-describedby": l ? `${v}-error` : t ? `${v}-helper` : void 0,
            className: N.input,
            ...f
          }
        ),
        o && /* @__PURE__ */ e("span", { className: `${N.iconSlot} ${N.rightSlot}`, children: o })
      ] }),
      l && /* @__PURE__ */ e("span", { id: `${v}-error`, className: N.errorMessage, role: "alert", children: n }),
      !l && t && /* @__PURE__ */ e("span", { id: `${v}-helper`, className: N.helperText, children: t })
    ] });
  }
);
Re.displayName = "Input";
const We = "_container_fh5kq_1", Me = "_label_fh5kq_13", Ge = "_required_fh5kq_23", Ae = "_selectWrapper_fh5kq_27", Oe = "_select_fh5kq_27", Fe = "_chevronIcon_fh5kq_77", He = "_hasError_fh5kq_88", Ve = "_helperText_fh5kq_96", Ke = "_errorMessage_fh5kq_102", Pe = "_disabled_fh5kq_110", x = {
  container: We,
  "size-sm": "_size-sm_fh5kq_9",
  label: Me,
  required: Ge,
  selectWrapper: Ae,
  select: Oe,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: Fe,
  hasError: He,
  helperText: Ve,
  errorMessage: Ke,
  disabled: Pe
}, Ue = k(
  ({
    label: a,
    helperText: t,
    errorMessage: n,
    selectSize: s = "md",
    options: r,
    placeholder: o,
    isRequired: _ = !1,
    disabled: d = !1,
    id: h,
    className: c,
    children: f,
    ...u
  }, y) => {
    const v = F(), l = h || v, m = !!n, b = [
      x.container,
      x[`size-${s}`],
      m ? x.hasError : "",
      d ? x.disabled : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: b, children: [
      a && /* @__PURE__ */ i("label", { htmlFor: l, className: x.label, children: [
        a,
        _ && /* @__PURE__ */ e("span", { className: x.required, children: "*" })
      ] }),
      /* @__PURE__ */ i("div", { className: x.selectWrapper, children: [
        /* @__PURE__ */ i(
          "select",
          {
            ref: y,
            id: l,
            disabled: d,
            "aria-invalid": m,
            "aria-describedby": m ? `${l}-error` : t ? `${l}-helper` : void 0,
            className: x.select,
            ...u,
            children: [
              o && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: o }),
              r ? r.map((g) => /* @__PURE__ */ e("option", { value: g.value, disabled: g.disabled, children: g.label }, g.value)) : f
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: x.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(se, { size: 16 }) })
      ] }),
      m && /* @__PURE__ */ e("span", { id: `${l}-error`, className: x.errorMessage, role: "alert", children: n }),
      !m && t && /* @__PURE__ */ e("span", { id: `${l}-helper`, className: x.helperText, children: t })
    ] });
  }
);
Ue.displayName = "Select";
const Je = "_container_dzjkw_1", Qe = "_label_dzjkw_14", Xe = "_required_dzjkw_24", Ye = "_trigger_dzjkw_28", Ze = "_isOpen_dzjkw_53", et = "_selectedContent_dzjkw_71", tt = "_placeholder_dzjkw_80", at = "_chevron_dzjkw_84", nt = "_chevronOpen_dzjkw_93", st = "_menu_dzjkw_98", rt = "_dropdownIn_dzjkw_1", lt = "_menuItem_dzjkw_116", it = "_itemDisabled_dzjkw_128", ot = "_itemSelected_dzjkw_132", ct = "_itemLeft_dzjkw_147", dt = "_itemText_dzjkw_154", _t = "_itemLabel_dzjkw_161", ht = "_itemDescription_dzjkw_169", mt = "_checkSlot_dzjkw_174", ut = "_hasError_dzjkw_183", pt = "_helperText_dzjkw_191", ft = "_errorMessage_dzjkw_197", bt = "_disabled_dzjkw_205", $ = {
  container: Je,
  "size-sm": "_size-sm_dzjkw_10",
  label: Qe,
  required: Xe,
  trigger: Ye,
  isOpen: Ze,
  "size-lg": "_size-lg_dzjkw_65",
  selectedContent: et,
  placeholder: tt,
  chevron: at,
  chevronOpen: nt,
  menu: st,
  dropdownIn: rt,
  menuItem: lt,
  itemDisabled: it,
  itemSelected: ot,
  itemLeft: ct,
  itemText: dt,
  itemLabel: _t,
  itemDescription: ht,
  checkSlot: mt,
  hasError: ut,
  helperText: pt,
  errorMessage: ft,
  disabled: bt
}, vt = "_container_cw81q_1", yt = "_image_cw81q_16", $t = "_fallback_cw81q_23", kt = "_statusDot_cw81q_64", W = {
  container: vt,
  image: yt,
  fallback: $t,
  "size-xs": "_size-xs_cw81q_33",
  "size-sm": "_size-sm_cw81q_39",
  "size-md": "_size-md_cw81q_45",
  "size-lg": "_size-lg_cw81q_51",
  "size-xl": "_size-xl_cw81q_57",
  statusDot: kt,
  "status-online": "_status-online_cw81q_92",
  "status-busy": "_status-busy_cw81q_96",
  "status-away": "_status-away_cw81q_100",
  "status-offline": "_status-offline_cw81q_104"
};
function Nt(a) {
  if (!a) return "";
  const t = a.trim().split(/\s+/);
  return t.length === 1 ? t[0].substring(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
const X = ({
  src: a,
  alt: t = "",
  name: n,
  size: s = "md",
  status: r,
  className: o,
  ..._
}) => {
  const [d, h] = H(!1), c = Nt(n), f = [
    W.container,
    W[`size-${s}`],
    o || ""
  ].filter(Boolean).join(" "), u = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ i("div", { className: f, title: n || t, ..._, children: [
    a && !d ? /* @__PURE__ */ e(
      "img",
      {
        src: a,
        alt: t || n || "Avatar",
        className: W.image,
        onError: () => h(!0)
      }
    ) : c ? /* @__PURE__ */ e("span", { className: W.fallback, children: c }) : /* @__PURE__ */ e("span", { className: W.fallback, children: /* @__PURE__ */ e(ve, { size: u[s] }) }),
    r && /* @__PURE__ */ e(
      "span",
      {
        className: `${W.statusDot} ${W[`status-${r}`]}`,
        "aria-label": `Status: ${r}`
      }
    )
  ] });
};
X.displayName = "Avatar";
const gt = ({
  label: a,
  placeholder: t = "Select an option...",
  helperText: n,
  errorMessage: s,
  options: r,
  value: o,
  defaultValue: _,
  onChange: d,
  size: h = "md",
  disabled: c = !1,
  isRequired: f = !1,
  className: u,
  id: y
}) => {
  const v = F(), l = y || v, m = U(null), [b, g] = H(!1), [G, K] = H(o || _);
  V(() => {
    o !== void 0 && K(o);
  }, [o]), V(() => {
    const p = (w) => {
      m.current && !m.current.contains(w.target) && g(!1);
    };
    return b && document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, [b]);
  const S = r.find((p) => p.value === G), A = !!s, J = (p) => {
    p.disabled || (K(p.value), d == null || d(p.value, p), g(!1));
  }, le = (p) => {
    if (!c) {
      if (p.key === "Enter" || p.key === " ")
        p.preventDefault(), g((w) => !w);
      else if (p.key === "Escape")
        g(!1);
      else if (p.key === "ArrowDown" && b) {
        p.preventDefault();
        const w = r.findIndex((Q) => Q.value === G), L = r[w + 1];
        L && !L.disabled && J(L);
      } else if (p.key === "ArrowUp" && b) {
        p.preventDefault();
        const w = r.findIndex((Q) => Q.value === G), L = r[w - 1];
        L && !L.disabled && J(L);
      }
    }
  }, ie = [
    $.container,
    $[`size-${h}`],
    b ? $.isOpen : "",
    A ? $.hasError : "",
    c ? $.disabled : "",
    u || ""
  ].filter(Boolean).join(" "), Z = h === "sm" ? "xs" : h === "lg" ? "md" : "sm";
  return /* @__PURE__ */ i("div", { ref: m, className: ie, children: [
    a && /* @__PURE__ */ i("label", { id: `${l}-label`, className: $.label, children: [
      a,
      f && /* @__PURE__ */ e("span", { className: $.required, children: "*" })
    ] }),
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        id: l,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-labelledby": a ? `${l}-label ${l}` : void 0,
        disabled: c,
        onClick: () => g((p) => !p),
        onKeyDown: le,
        className: $.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: $.selectedContent, children: S ? /* @__PURE__ */ i(ee, { children: [
            S.avatar && /* @__PURE__ */ e(
              X,
              {
                size: S.avatar.size || Z,
                ...S.avatar
              }
            ),
            S.icon && /* @__PURE__ */ e("span", { children: S.icon }),
            /* @__PURE__ */ e("span", { children: S.label })
          ] }) : /* @__PURE__ */ e("span", { className: $.placeholder, children: t }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${$.chevron} ${b ? $.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(se, { size: 16 })
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ e("ul", { role: "listbox", "aria-labelledby": `${l}-label`, className: $.menu, children: r.map((p) => {
      const w = p.value === G, L = [
        $.menuItem,
        w ? $.itemSelected : "",
        p.disabled ? $.itemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ i(
        "li",
        {
          role: "option",
          "aria-selected": w,
          "aria-disabled": p.disabled,
          onClick: () => J(p),
          className: L,
          children: [
            /* @__PURE__ */ i("div", { className: $.itemLeft, children: [
              p.avatar && /* @__PURE__ */ e(X, { size: p.avatar.size || Z, ...p.avatar }),
              p.icon && /* @__PURE__ */ e("span", { children: p.icon }),
              /* @__PURE__ */ i("div", { className: $.itemText, children: [
                /* @__PURE__ */ e("span", { className: $.itemLabel, children: p.label }),
                p.description && /* @__PURE__ */ e("span", { className: $.itemDescription, children: p.description })
              ] })
            ] }),
            w && /* @__PURE__ */ e("span", { className: $.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(ne, { size: 14 }) })
          ]
        },
        p.value
      );
    }) }),
    A && /* @__PURE__ */ e("span", { id: `${l}-error`, className: $.errorMessage, role: "alert", children: s }),
    !A && n && /* @__PURE__ */ e("span", { id: `${l}-helper`, className: $.helperText, children: n })
  ] });
};
gt.displayName = "Dropdown";
const wt = "_container_1ms02_1", xt = "_hasDescription_1ms02_10", zt = "_box_1ms02_14", jt = "_nativeInput_1ms02_32", qt = "_checked_1ms02_45", It = "_indeterminate_1ms02_46", Bt = "_disabled_1ms02_51", Ct = "_textGroup_1ms02_55", St = "_label_1ms02_61", Lt = "_description_1ms02_68", I = {
  container: wt,
  hasDescription: xt,
  box: zt,
  nativeInput: jt,
  checked: qt,
  indeterminate: It,
  disabled: Bt,
  textGroup: Ct,
  label: St,
  description: Lt
}, Tt = k(
  ({
    label: a,
    description: t,
    checked: n,
    defaultChecked: s,
    indeterminate: r = !1,
    disabled: o = !1,
    className: _,
    onChange: d,
    ...h
  }, c) => {
    const f = U(null), u = c || f;
    V(() => {
      u && "current" in u && u.current && (u.current.indeterminate = r);
    }, [r, u]);
    const y = n ?? s ?? !1, v = [
      I.container,
      t ? I.hasDescription : "",
      o ? I.disabled : "",
      _ || ""
    ].filter(Boolean).join(" "), l = [
      I.box,
      r ? I.indeterminate : y ? I.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: v, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: u,
          checked: n,
          defaultChecked: s,
          disabled: o,
          className: I.nativeInput,
          onChange: d,
          ...h
        }
      ),
      /* @__PURE__ */ i("span", { className: l, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(be, { size: 12 }),
        !r && y && /* @__PURE__ */ e(ne, { size: 12 })
      ] }),
      (a || t) && /* @__PURE__ */ i("span", { className: I.textGroup, children: [
        a && /* @__PURE__ */ e("span", { className: I.label, children: a }),
        t && /* @__PURE__ */ e("span", { className: I.description, children: t })
      ] })
    ] });
  }
);
Tt.displayName = "Checkbox";
const Dt = "_container_m4qf3_1", Et = "_label_m4qf3_9", Rt = "_required_m4qf3_19", Wt = "_textareaWrapper_m4qf3_23", Mt = "_textarea_m4qf3_23", Gt = "_hasError_m4qf3_58", At = "_footer_m4qf3_66", Ot = "_helperText_m4qf3_74", Ft = "_errorMessage_m4qf3_78", Ht = "_charCount_m4qf3_83", Vt = "_disabled_m4qf3_89", z = {
  container: Dt,
  label: Et,
  required: Rt,
  textareaWrapper: Wt,
  textarea: Mt,
  hasError: Gt,
  footer: At,
  helperText: Ot,
  errorMessage: Ft,
  charCount: Ht,
  disabled: Vt
}, Kt = k(
  ({
    label: a,
    helperText: t,
    errorMessage: n,
    isRequired: s = !1,
    showCharCount: r = !1,
    maxLength: o,
    disabled: _ = !1,
    value: d,
    defaultValue: h,
    id: c,
    className: f,
    onChange: u,
    ...y
  }, v) => {
    const l = F(), m = c || l, b = !!n, [g, G] = te.useState(() => typeof d == "string" ? d.length : typeof h == "string" ? h.length : 0), K = (A) => {
      G(A.target.value.length), u == null || u(A);
    }, S = [
      z.container,
      b ? z.hasError : "",
      _ ? z.disabled : "",
      f || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: S, children: [
      a && /* @__PURE__ */ i("label", { htmlFor: m, className: z.label, children: [
        a,
        s && /* @__PURE__ */ e("span", { className: z.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: z.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: v,
          id: m,
          disabled: _,
          value: d,
          defaultValue: h,
          maxLength: o,
          onChange: K,
          "aria-invalid": b,
          "aria-describedby": b ? `${m}-error` : t ? `${m}-helper` : void 0,
          className: z.textarea,
          ...y
        }
      ) }),
      /* @__PURE__ */ i("div", { className: z.footer, children: [
        b && /* @__PURE__ */ e("span", { id: `${m}-error`, className: z.errorMessage, role: "alert", children: n }),
        !b && t && /* @__PURE__ */ e("span", { id: `${m}-helper`, className: z.helperText, children: t }),
        r && o && /* @__PURE__ */ i("span", { className: z.charCount, children: [
          g,
          " / ",
          o
        ] })
      ] })
    ] });
  }
);
Kt.displayName = "Textarea";
const Pt = "_card_cnmiq_1", Ut = "_interactive_cnmiq_28", Jt = "_header_cnmiq_56", Qt = "_headerBordered_cnmiq_63", Xt = "_title_cnmiq_68", Yt = "_description_cnmiq_77", Zt = "_content_cnmiq_84", ea = "_footer_cnmiq_88", ta = "_footerBordered_cnmiq_96", q = {
  card: Pt,
  "elevation-1": "_elevation-1_cnmiq_13",
  "elevation-2": "_elevation-2_cnmiq_18",
  "elevation-3": "_elevation-3_cnmiq_23",
  interactive: Ut,
  "padding-none": "_padding-none_cnmiq_39",
  "padding-sm": "_padding-sm_cnmiq_43",
  "padding-md": "_padding-md_cnmiq_47",
  "padding-lg": "_padding-lg_cnmiq_51",
  header: Jt,
  headerBordered: Qt,
  title: Xt,
  description: Yt,
  content: Zt,
  footer: ea,
  footerBordered: ta
}, aa = k(
  ({
    elevation: a = 1,
    padding: t = "none",
    isInteractive: n = !1,
    className: s,
    children: r,
    ...o
  }, _) => {
    const d = [
      q.card,
      q[`elevation-${a}`],
      q[`padding-${t}`],
      n ? q.interactive : "",
      s || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: _, className: d, ...o, children: r });
  }
);
aa.displayName = "Card";
const na = k(
  ({ bordered: a = !1, className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${q.header} ${a ? q.headerBordered : ""} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
na.displayName = "CardHeader";
const sa = k(
  ({ as: a = "h3", className: t, children: n, ...s }, r) => /* @__PURE__ */ e(a, { ref: r, className: `${q.title} ${t || ""}`, ...s, children: n })
);
sa.displayName = "CardTitle";
const ra = k(
  ({ className: a, children: t, ...n }, s) => /* @__PURE__ */ e("p", { ref: s, className: `${q.description} ${a || ""}`, ...n, children: t })
);
ra.displayName = "CardDescription";
const la = k(
  ({ className: a, children: t, ...n }, s) => /* @__PURE__ */ e("div", { ref: s, className: `${q.content} ${a || ""}`, ...n, children: t })
);
la.displayName = "CardContent";
const ia = k(
  ({ bordered: a = !1, className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${q.footer} ${a ? q.footerBordered : ""} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
ia.displayName = "CardFooter";
const oa = "_container_1xw60_1", ca = "_table_1xw60_10", da = "_header_1xw60_19", _a = "_headCell_1xw60_24", ha = "_row_1xw60_35", ma = "_hoverable_1xw60_44", ua = "_cell_1xw60_48", pa = "_tabularNums_1xw60_54", C = {
  container: oa,
  table: ca,
  header: da,
  headCell: _a,
  row: ha,
  hoverable: ma,
  cell: ua,
  tabularNums: pa,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, fa = k(
  ({ className: a, containerClassName: t, children: n, ...s }, r) => /* @__PURE__ */ e("div", { className: `${C.container} ${t || ""}`, children: /* @__PURE__ */ e("table", { ref: r, className: `${C.table} ${a || ""}`, ...s, children: n }) })
);
fa.displayName = "Table";
const ba = k(
  ({ className: a, children: t, ...n }, s) => /* @__PURE__ */ e("thead", { ref: s, className: `${C.header} ${a || ""}`, ...n, children: t })
);
ba.displayName = "TableHeader";
const va = k(
  ({ className: a, children: t, ...n }, s) => /* @__PURE__ */ e("tbody", { ref: s, className: a, ...n, children: t })
);
va.displayName = "TableBody";
const ya = k(
  ({ isHoverable: a = !0, className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: `${C.row} ${a ? C.hoverable : ""} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
ya.displayName = "TableRow";
const $a = k(
  ({ align: a = "left", className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: `${C.headCell} ${C[`align-${a}`]} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
$a.displayName = "TableHead";
const ka = k(
  ({ align: a = "left", isNumeric: t = !1, className: n, children: s, ...r }, o) => /* @__PURE__ */ e(
    "td",
    {
      ref: o,
      className: `${C.cell} ${C[`align-${a}`]} ${t ? C.tabularNums : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
ka.displayName = "TableCell";
const Na = "_overlay_1ju4y_1", ga = "_fadeIn_1ju4y_1", wa = "_modal_1ju4y_15", xa = "_scaleIn_1ju4y_1", za = "_header_1ju4y_44", ja = "_title_1ju4y_51", qa = "_closeButton_1ju4y_60", Ia = "_body_1ju4y_83", Ba = "_footer_1ju4y_92", R = {
  overlay: Na,
  fadeIn: ga,
  modal: wa,
  scaleIn: xa,
  "size-sm": "_size-sm_1ju4y_32",
  "size-md": "_size-md_1ju4y_36",
  "size-lg": "_size-lg_1ju4y_40",
  header: za,
  title: ja,
  closeButton: qa,
  body: Ia,
  footer: Ba
}, Ca = ({
  isOpen: a,
  onClose: t,
  title: n,
  size: s = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: o = !0,
  showCloseButton: _ = !0,
  footer: d,
  children: h,
  className: c
}) => {
  const f = F(), u = U(null);
  if (V(() => {
    if (!a) return;
    const m = (b) => {
      b.key === "Escape" && o && t();
    };
    return document.addEventListener("keydown", m), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", m), document.body.style.overflow = "";
    };
  }, [a, o, t]), !a) return null;
  const y = (m) => {
    m.target === m.currentTarget && r && t();
  }, v = [
    R.modal,
    R[`size-${s}`],
    c || ""
  ].filter(Boolean).join(" "), l = /* @__PURE__ */ e("div", { className: R.overlay, onClick: y, children: /* @__PURE__ */ i(
    "div",
    {
      ref: u,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? f : void 0,
      tabIndex: -1,
      className: v,
      children: [
        (n || _) && /* @__PURE__ */ i("div", { className: R.header, children: [
          n && /* @__PURE__ */ e("h2", { id: f, className: R.title, children: n }),
          _ && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: t,
              className: R.closeButton,
              children: /* @__PURE__ */ e(Y, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: R.body, children: h }),
        d && /* @__PURE__ */ e("div", { className: R.footer, children: d })
      ]
    }
  ) });
  return typeof document < "u" ? ae(l, document.body) : null;
};
Ca.displayName = "Modal";
const Sa = ({ className: a, children: t, ...n }) => /* @__PURE__ */ e("div", { className: `${R.footer} ${a || ""}`, ...n, children: t });
Sa.displayName = "ModalFooter";
const La = "_tabList_7bmw6_1", Ta = "_tab_7bmw6_1", Da = "_tabActive_7bmw6_50", Ea = "_badge_7bmw6_76", Ra = "_fullWidth_7bmw6_93", Wa = "_panel_7bmw6_101", M = {
  tabList: La,
  "variant-underline": "_variant-underline_7bmw6_11",
  tab: Ta,
  tabActive: Da,
  badge: Ea,
  fullWidth: Ra,
  panel: Wa
}, Ma = ({
  tabs: a,
  activeTab: t,
  defaultActiveTab: n,
  onChange: s,
  variant: r = "pill",
  fullWidth: o = !1,
  className: _,
  children: d
}) => {
  var v;
  const [h, c] = H(
    t || n || ((v = a[0]) == null ? void 0 : v.id) || ""
  ), f = t !== void 0 ? t : h, u = (l, m) => {
    m || (c(l), s == null || s(l));
  }, y = [
    M.tabList,
    M[`variant-${r}`],
    o ? M.fullWidth : "",
    _ || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e("div", { role: "tablist", className: y, children: a.map((l) => {
      const m = l.id === f, b = [
        M.tab,
        m ? M.tabActive : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ i(
        "button",
        {
          role: "tab",
          type: "button",
          "aria-selected": m,
          "aria-controls": `panel-${l.id}`,
          id: `tab-${l.id}`,
          disabled: l.disabled,
          onClick: () => u(l.id, l.disabled),
          className: b,
          children: [
            l.icon && /* @__PURE__ */ e("span", { children: l.icon }),
            /* @__PURE__ */ e("span", { children: l.label }),
            l.badge !== void 0 && /* @__PURE__ */ e("span", { className: M.badge, children: l.badge })
          ]
        },
        l.id
      );
    }) }),
    d
  ] });
};
Ma.displayName = "Tabs";
const Ga = ({
  tabId: a,
  activeTabId: t,
  className: n,
  children: s,
  ...r
}) => a !== t ? null : /* @__PURE__ */ e(
  "div",
  {
    role: "tabpanel",
    id: `panel-${a}`,
    "aria-labelledby": `tab-${a}`,
    className: `${M.panel} ${n || ""}`,
    ...r,
    children: s
  }
);
Ga.displayName = "TabPanel";
const Aa = "_container_1xroe_1", Oa = "_track_1xroe_10", Fa = "_thumb_1xroe_24", Ha = "_checked_1xroe_34", Va = "_nativeInput_1xroe_43", Ka = "_label_1xroe_55", Pa = "_description_1xroe_61", Ua = "_textGroup_1xroe_66", Ja = "_disabled_1xroe_72", D = {
  container: Aa,
  track: Oa,
  thumb: Fa,
  checked: Ha,
  nativeInput: Va,
  label: Ka,
  description: Pa,
  textGroup: Ua,
  disabled: Ja
}, Qa = k(
  ({
    label: a,
    description: t,
    checked: n,
    defaultChecked: s,
    disabled: r = !1,
    className: o,
    onChange: _,
    ...d
  }, h) => {
    const c = n ?? s ?? !1, f = [
      D.container,
      c ? D.checked : "",
      r ? D.disabled : "",
      o || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: f, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: h,
          checked: n,
          defaultChecked: s,
          disabled: r,
          "aria-checked": c,
          className: D.nativeInput,
          onChange: _,
          ...d
        }
      ),
      /* @__PURE__ */ e("span", { className: D.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: D.thumb }) }),
      (a || t) && /* @__PURE__ */ i("span", { className: D.textGroup, children: [
        a && /* @__PURE__ */ e("span", { className: D.label, children: a }),
        t && /* @__PURE__ */ e("span", { className: D.description, children: t })
      ] })
    ] });
  }
);
Qa.displayName = "Switch";
const Xa = "_group_1e0nk_1", Ya = "_groupLabel_1e0nk_8", Za = "_item_1e0nk_14", en = "_circle_1e0nk_22", tn = "_dot_1e0nk_35", an = "_checked_1e0nk_45", nn = "_nativeInput_1e0nk_54", sn = "_label_1e0nk_67", rn = "_description_1e0nk_73", ln = "_textGroup_1e0nk_78", on = "_disabled_1e0nk_84", j = {
  group: Xa,
  groupLabel: Ya,
  item: Za,
  circle: en,
  dot: tn,
  checked: an,
  nativeInput: nn,
  label: sn,
  description: rn,
  textGroup: ln,
  disabled: on
}, re = oe(null), cn = ({
  name: a,
  value: t,
  defaultValue: n,
  onChange: s,
  label: r,
  disabled: o = !1,
  className: _,
  children: d
}) => {
  const [h, c] = te.useState(t || n), f = t !== void 0 ? t : h, u = (y) => {
    c(y.target.value), s == null || s(y.target.value);
  };
  return /* @__PURE__ */ e(
    re.Provider,
    {
      value: {
        name: a,
        value: f,
        onChange: u,
        disabled: o
      },
      children: /* @__PURE__ */ i("div", { role: "radiogroup", "aria-label": r, className: `${j.group} ${_ || ""}`, children: [
        r && /* @__PURE__ */ e("span", { className: j.groupLabel, children: r }),
        d
      ] })
    }
  );
};
cn.displayName = "RadioGroup";
const dn = k(
  ({ value: a, label: t, description: n, disabled: s, className: r, checked: o, onChange: _, ...d }, h) => {
    const c = ce(re), f = c ? c.value === a : o, u = s || (c == null ? void 0 : c.disabled) || !1, y = (c == null ? void 0 : c.name) || d.name, v = [
      j.item,
      f ? j.checked : "",
      u ? j.disabled : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: v, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: h,
          type: "radio",
          name: y,
          value: a,
          checked: f,
          disabled: u,
          onChange: (m) => {
            var b;
            _ == null || _(m), (b = c == null ? void 0 : c.onChange) == null || b.call(c, m);
          },
          className: j.nativeInput,
          ...d
        }
      ),
      /* @__PURE__ */ e("span", { className: j.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: j.dot }) }),
      (t || n) && /* @__PURE__ */ i("span", { className: j.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: j.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: j.description, children: n })
      ] })
    ] });
  }
);
dn.displayName = "Radio";
const _n = "_wrapper_yiqhg_1", hn = "_searchIcon_yiqhg_8", mn = "_input_yiqhg_18", un = "_rightSlots_yiqhg_42", pn = "_clearButton_yiqhg_50", fn = "_shortcut_yiqhg_66", O = {
  wrapper: _n,
  searchIcon: hn,
  input: mn,
  rightSlots: un,
  clearButton: pn,
  shortcut: fn
}, bn = ({ ...a }) => /* @__PURE__ */ i(
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
    ...a,
    children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ]
  }
), vn = k(
  ({ value: a, defaultValue: t, onChange: n, onClear: s, shortcutHint: r = "⌘K", placeholder: o = "Search records, students, classes...", className: _, ...d }, h) => {
    const [c, f] = H(
      a || t || ""
    ), u = a !== void 0, y = u ? a : c, v = (m) => {
      u || f(m.target.value), n == null || n(m);
    }, l = () => {
      u || f(""), s == null || s();
    };
    return /* @__PURE__ */ i("div", { className: `${O.wrapper} ${_ || ""}`, children: [
      /* @__PURE__ */ e("span", { className: O.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(bn, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: h,
          type: "search",
          value: y,
          placeholder: o,
          onChange: v,
          className: O.input,
          ...d
        }
      ),
      /* @__PURE__ */ i("div", { className: O.rightSlots, children: [
        y && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: l,
            className: O.clearButton,
            children: /* @__PURE__ */ e(Y, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: O.shortcut, children: r })
      ] })
    ] });
  }
);
vn.displayName = "SearchInput";
const yn = "_card_kgob9_1", $n = "_topRow_kgob9_18", kn = "_title_kgob9_25", Nn = "_iconSlot_kgob9_33", gn = "_metricRow_kgob9_49", wn = "_value_kgob9_55", xn = "_trendBadge_kgob9_65", zn = "_description_kgob9_90", B = {
  card: yn,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: $n,
  title: kn,
  iconSlot: Nn,
  metricRow: gn,
  value: wn,
  trendBadge: xn,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: zn
}, jn = ({
  title: a,
  value: t,
  description: n,
  trend: s,
  icon: r,
  highlighted: o = !1,
  className: _,
  ...d
}) => {
  const h = [
    B.card,
    o ? B["variant-highlight"] : "",
    _ || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { className: h, ...d, children: [
    /* @__PURE__ */ i("div", { className: B.topRow, children: [
      /* @__PURE__ */ e("h4", { className: B.title, children: a }),
      r && /* @__PURE__ */ e("span", { className: B.iconSlot, children: r })
    ] }),
    /* @__PURE__ */ i("div", { className: B.metricRow, children: [
      /* @__PURE__ */ e("span", { className: B.value, children: t }),
      s && /* @__PURE__ */ i("span", { className: `${B.trendBadge} ${B[`trend-${s.direction}`]}`, children: [
        s.direction === "up" && "↑ ",
        s.direction === "down" && "↓ ",
        s.value
      ] })
    ] }),
    n && /* @__PURE__ */ e("p", { className: B.description, children: n })
  ] });
};
jn.displayName = "StatCard";
const qn = "_overlay_1jiz5_1", In = "_fadeIn_1jiz5_1", Bn = "_drawer_1jiz5_11", Cn = "_slideInRight_1jiz5_1", Sn = "_slideInLeft_1jiz5_1", Ln = "_header_1jiz5_51", Tn = "_title_1jiz5_59", Dn = "_closeButton_1jiz5_67", En = "_body_1jiz5_90", Rn = "_footer_1jiz5_99", E = {
  overlay: qn,
  fadeIn: In,
  drawer: Bn,
  "placement-right": "_placement-right_1jiz5_26",
  slideInRight: Cn,
  "placement-left": "_placement-left_1jiz5_31",
  slideInLeft: Sn,
  "size-sm": "_size-sm_1jiz5_39",
  "size-md": "_size-md_1jiz5_43",
  "size-lg": "_size-lg_1jiz5_47",
  header: Ln,
  title: Tn,
  closeButton: Dn,
  body: En,
  footer: Rn
}, Wn = ({
  isOpen: a,
  onClose: t,
  title: n,
  placement: s = "right",
  size: r = "md",
  closeOnOverlayClick: o = !0,
  closeOnEsc: _ = !0,
  showCloseButton: d = !0,
  footer: h,
  children: c,
  className: f
}) => {
  const u = F(), y = U(null);
  if (V(() => {
    if (!a) return;
    const b = (g) => {
      g.key === "Escape" && _ && t();
    };
    return document.addEventListener("keydown", b), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", b), document.body.style.overflow = "";
    };
  }, [a, _, t]), !a) return null;
  const v = (b) => {
    b.target === b.currentTarget && o && t();
  }, l = [
    E.drawer,
    E[`placement-${s}`],
    E[`size-${r}`],
    f || ""
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ i(ee, { children: [
    /* @__PURE__ */ e("div", { className: E.overlay, onClick: v }),
    /* @__PURE__ */ i(
      "div",
      {
        ref: y,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": n ? u : void 0,
        tabIndex: -1,
        className: l,
        children: [
          (n || d) && /* @__PURE__ */ i("div", { className: E.header, children: [
            n && /* @__PURE__ */ e("h3", { id: u, className: E.title, children: n }),
            d && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: t,
                className: E.closeButton,
                children: /* @__PURE__ */ e(Y, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: E.body, children: c }),
          h && /* @__PURE__ */ e("div", { className: E.footer, children: h })
        ]
      }
    )
  ] });
  return typeof document < "u" ? ae(m, document.body) : null;
};
Wn.displayName = "Drawer";
export {
  X as Avatar,
  Ne as Badge,
  ye as Button,
  aa as Card,
  la as CardContent,
  ra as CardDescription,
  ia as CardFooter,
  na as CardHeader,
  sa as CardTitle,
  ne as CheckIcon,
  Tt as Checkbox,
  se as ChevronDownIcon,
  Y as CloseIcon,
  Wn as Drawer,
  gt as Dropdown,
  Re as Input,
  be as MinusIcon,
  Ca as Modal,
  Sa as ModalFooter,
  dn as Radio,
  cn as RadioGroup,
  vn as SearchInput,
  Ue as Select,
  fe as SpinnerIcon,
  jn as StatCard,
  Qa as Switch,
  Ga as TabPanel,
  fa as Table,
  va as TableBody,
  ka as TableCell,
  $a as TableHead,
  ba as TableHeader,
  ya as TableRow,
  Ma as Tabs,
  Kt as Textarea,
  ve as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
