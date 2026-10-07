import { jsxs as l, jsx as e, Fragment as be } from "react/jsx-runtime";
import ve, { forwardRef as S, useId as re, useState as O, useRef as ae, useEffect as J, createContext as $e, useContext as ke, useMemo as ie } from "react";
import { createPortal as ge } from "react-dom";
const xe = "_button_1ckl5_1", we = "_fullWidth_1ckl5_109", Ie = "_disabled_1ckl5_113", Be = "_loading_1ckl5_120", qe = "_spinner_1ckl5_124", ze = "_icon_1ckl5_130", Y = {
  button: xe,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: we,
  disabled: Ie,
  loading: Be,
  spinner: qe,
  icon: ze
}, Ce = ({ size: t = 18, className: n, ...s }) => /* @__PURE__ */ l(
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
), me = ({ size: t = 14, className: n, ...s }) => /* @__PURE__ */ e(
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
), Se = ({ size: t = 14, className: n, ...s }) => /* @__PURE__ */ e(
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
), he = ({ size: t = 16, className: n, ...s }) => /* @__PURE__ */ e(
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
), de = ({ size: t = 18, className: n, ...s }) => /* @__PURE__ */ l(
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
), je = ({ size: t = 20, className: n, ...s }) => /* @__PURE__ */ l(
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
), Le = ({ size: t = 16, className: n, ...s }) => /* @__PURE__ */ l(
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
), De = S(
  ({
    variant: t = "primary",
    size: n = "md",
    isLoading: s = !1,
    leftIcon: r,
    rightIcon: a,
    fullWidth: i = !1,
    disabled: h,
    className: c,
    children: u,
    ...d
  }, N) => {
    const p = [
      Y.button,
      Y[`variant-${t}`],
      Y[`size-${n}`],
      i ? Y.fullWidth : "",
      s ? Y.loading : "",
      h || s ? Y.disabled : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l(
      "button",
      {
        ref: N,
        disabled: h || s,
        className: p,
        "aria-busy": s,
        ...d,
        children: [
          s && /* @__PURE__ */ e("span", { className: Y.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(Ce, { size: n === "sm" ? 14 : n === "lg" ? 20 : 16 }) }),
          !s && r && /* @__PURE__ */ e("span", { className: Y.icon, children: r }),
          u && /* @__PURE__ */ e("span", { children: u }),
          !s && a && /* @__PURE__ */ e("span", { className: Y.icon, children: a })
        ]
      }
    );
  }
);
De.displayName = "Button";
const Ee = "_badge_qj0y6_1", Te = "_dot_qj0y6_63", ue = {
  badge: Ee,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Te
}, Re = ({
  variant: t = "neutral",
  size: n = "md",
  withDot: s = !1,
  leftIcon: r,
  rightIcon: a,
  className: i,
  children: h,
  ...c
}) => {
  const u = [
    ue.badge,
    ue[`variant-${t}`],
    ue[`size-${n}`],
    i || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l("span", { className: u, ...c, children: [
    s && /* @__PURE__ */ e("span", { className: ue.dot, "aria-hidden": "true" }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r }),
    /* @__PURE__ */ e("span", { children: h }),
    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: a })
  ] });
};
Re.displayName = "Badge";
const Oe = "_container_df4fv_1", We = "_label_df4fv_13", Ae = "_required_df4fv_23", Ge = "_inputWrapper_df4fv_27", Fe = "_input_df4fv_27", Me = "_hasLeftIcon_df4fv_80", Ve = "_hasRightIcon_df4fv_84", He = "_iconSlot_df4fv_88", Pe = "_leftSlot_df4fv_96", Ke = "_rightSlot_df4fv_100", Ue = "_hasError_df4fv_105", Qe = "_helperText_df4fv_113", Je = "_errorMessage_df4fv_119", Xe = "_disabled_df4fv_127", E = {
  container: Oe,
  "size-sm": "_size-sm_df4fv_9",
  label: We,
  required: Ae,
  inputWrapper: Ge,
  input: Fe,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: Me,
  hasRightIcon: Ve,
  iconSlot: He,
  leftSlot: Pe,
  rightSlot: Ke,
  hasError: Ue,
  helperText: Qe,
  errorMessage: Je,
  disabled: Xe
}, Ye = S(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    inputSize: r = "md",
    leftIcon: a,
    rightIcon: i,
    isRequired: h = !1,
    disabled: c = !1,
    id: u,
    className: d,
    ...N
  }, p) => {
    const x = re(), g = u || x, _ = !!s, f = [
      E.container,
      E[`size-${r}`],
      _ ? E.hasError : "",
      c ? E.disabled : "",
      a ? E.hasLeftIcon : "",
      i ? E.hasRightIcon : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: f, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: g, className: E.label, children: [
        t,
        h && /* @__PURE__ */ e("span", { className: E.required, children: "*" })
      ] }),
      /* @__PURE__ */ l("div", { className: E.inputWrapper, children: [
        a && /* @__PURE__ */ e("span", { className: `${E.iconSlot} ${E.leftSlot}`, children: a }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: p,
            id: g,
            disabled: c,
            "aria-invalid": _,
            "aria-describedby": _ ? `${g}-error` : n ? `${g}-helper` : void 0,
            className: E.input,
            ...N
          }
        ),
        i && /* @__PURE__ */ e("span", { className: `${E.iconSlot} ${E.rightSlot}`, children: i })
      ] }),
      _ && /* @__PURE__ */ e("span", { id: `${g}-error`, className: E.errorMessage, role: "alert", children: s }),
      !_ && n && /* @__PURE__ */ e("span", { id: `${g}-helper`, className: E.helperText, children: n })
    ] });
  }
);
Ye.displayName = "Input";
const Ze = "_container_fh5kq_1", et = "_label_fh5kq_13", tt = "_required_fh5kq_23", nt = "_selectWrapper_fh5kq_27", st = "_select_fh5kq_27", at = "_chevronIcon_fh5kq_77", rt = "_hasError_fh5kq_88", ot = "_helperText_fh5kq_96", lt = "_errorMessage_fh5kq_102", it = "_disabled_fh5kq_110", M = {
  container: Ze,
  "size-sm": "_size-sm_fh5kq_9",
  label: et,
  required: tt,
  selectWrapper: nt,
  select: st,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: at,
  hasError: rt,
  helperText: ot,
  errorMessage: lt,
  disabled: it
}, ct = S(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    selectSize: r = "md",
    options: a,
    placeholder: i,
    isRequired: h = !1,
    disabled: c = !1,
    id: u,
    className: d,
    children: N,
    ...p
  }, x) => {
    const g = re(), _ = u || g, f = !!s, b = [
      M.container,
      M[`size-${r}`],
      f ? M.hasError : "",
      c ? M.disabled : "",
      d || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: b, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: _, className: M.label, children: [
        t,
        h && /* @__PURE__ */ e("span", { className: M.required, children: "*" })
      ] }),
      /* @__PURE__ */ l("div", { className: M.selectWrapper, children: [
        /* @__PURE__ */ l(
          "select",
          {
            ref: x,
            id: _,
            disabled: c,
            "aria-invalid": f,
            "aria-describedby": f ? `${_}-error` : n ? `${_}-helper` : void 0,
            className: M.select,
            ...p,
            children: [
              i && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: i }),
              a ? a.map((I) => /* @__PURE__ */ e("option", { value: I.value, disabled: I.disabled, children: I.label }, I.value)) : N
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: M.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(he, { size: 16 }) })
      ] }),
      f && /* @__PURE__ */ e("span", { id: `${_}-error`, className: M.errorMessage, role: "alert", children: s }),
      !f && n && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: M.helperText, children: n })
    ] });
  }
);
ct.displayName = "Select";
const dt = "_container_1d3rw_1", _t = "_label_1d3rw_14", ut = "_required_1d3rw_24", mt = "_trigger_1d3rw_28", ht = "_isOpen_1d3rw_53", pt = "_selectedContent_1d3rw_71", ft = "_placeholder_1d3rw_80", bt = "_chevron_1d3rw_84", vt = "_chevronOpen_1d3rw_93", gt = "_menu_1d3rw_98", yt = "_dropdownIn_1d3rw_1", Nt = "_menuItem_1d3rw_116", $t = "_itemDisabled_1d3rw_128", kt = "_itemSelected_1d3rw_132", xt = "_itemLeft_1d3rw_147", wt = "_itemText_1d3rw_154", It = "_itemLabel_1d3rw_161", Bt = "_itemDescription_1d3rw_169", qt = "_checkSlot_1d3rw_174", zt = "_hasError_1d3rw_183", Ct = "_helperText_1d3rw_191", St = "_errorMessage_1d3rw_197", jt = "_disabled_1d3rw_205", q = {
  container: dt,
  "size-sm": "_size-sm_1d3rw_10",
  label: _t,
  required: ut,
  trigger: mt,
  isOpen: ht,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: pt,
  placeholder: ft,
  chevron: bt,
  chevronOpen: vt,
  menu: gt,
  dropdownIn: yt,
  menuItem: Nt,
  itemDisabled: $t,
  itemSelected: kt,
  itemLeft: xt,
  itemText: wt,
  itemLabel: It,
  itemDescription: Bt,
  checkSlot: qt,
  hasError: zt,
  helperText: Ct,
  errorMessage: St,
  disabled: jt
}, Lt = "_container_145ec_1", Dt = "_tint_145ec_14", Et = "_solid_145ec_20", Tt = "_image_145ec_27", Rt = "_fallback_145ec_34", Ot = "_statusDot_145ec_75", se = {
  container: Lt,
  tint: Dt,
  solid: Et,
  image: Tt,
  fallback: Rt,
  "size-xs": "_size-xs_145ec_44",
  "size-sm": "_size-sm_145ec_50",
  "size-md": "_size-md_145ec_56",
  "size-lg": "_size-lg_145ec_62",
  "size-xl": "_size-xl_145ec_68",
  statusDot: Ot,
  "status-online": "_status-online_145ec_103",
  "status-busy": "_status-busy_145ec_107",
  "status-away": "_status-away_145ec_111",
  "status-offline": "_status-offline_145ec_115"
};
function Wt(t, n) {
  if (n) return n;
  if (!t) return "";
  const s = t.trim().split(/\s+/);
  return s.length === 1 ? s[0].substring(0, 2).toUpperCase() : (s[0][0] + s[s.length - 1][0]).toUpperCase();
}
const ce = ({
  src: t,
  alt: n = "",
  name: s,
  initials: r,
  size: a = "md",
  variant: i = "tint",
  status: h,
  className: c,
  ...u
}) => {
  const [d, N] = O(!1), p = Wt(s, r), x = [
    se.container,
    se[`size-${a}`],
    se[i],
    c || ""
  ].filter(Boolean).join(" "), g = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ l("div", { className: x, title: s || n, ...u, children: [
    t && !d ? /* @__PURE__ */ e(
      "img",
      {
        src: t,
        alt: n || s || "Avatar",
        className: se.image,
        onError: () => N(!0)
      }
    ) : p ? /* @__PURE__ */ e("span", { className: se.fallback, children: p }) : /* @__PURE__ */ e("span", { className: se.fallback, children: /* @__PURE__ */ e(je, { size: g[a] }) }),
    h && /* @__PURE__ */ e(
      "span",
      {
        className: `${se.statusDot} ${se[`status-${h}`]}`,
        "aria-label": `Status: ${h}`
      }
    )
  ] });
};
ce.displayName = "Avatar";
const At = ({
  label: t,
  placeholder: n = "Select an option...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: h,
  onChange: c,
  size: u = "md",
  disabled: d = !1,
  isRequired: N = !1,
  className: p,
  id: x
}) => {
  const g = re(), _ = x || g, f = ae(null), [b, I] = O(!1), [R, L] = O(i || h);
  J(() => {
    i !== void 0 && L(i);
  }, [i]), J(() => {
    const v = (B) => {
      f.current && !f.current.contains(B.target) && I(!1);
    };
    return b && document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [b]);
  const z = a.find((v) => v.value === R), D = !!r, W = (v) => {
    v.disabled || (L(v.value), c == null || c(v.value, v), I(!1));
  }, C = (v) => {
    if (!d) {
      if (v.key === "Enter" || v.key === " ")
        v.preventDefault(), I((B) => !B);
      else if (v.key === "Escape")
        I(!1);
      else if (v.key === "ArrowDown" && b) {
        v.preventDefault();
        const B = a.findIndex((ne) => ne.value === R), j = a[B + 1];
        j && !j.disabled && W(j);
      } else if (v.key === "ArrowUp" && b) {
        v.preventDefault();
        const B = a.findIndex((ne) => ne.value === R), j = a[B - 1];
        j && !j.disabled && W(j);
      }
    }
  }, G = [
    q.container,
    q[`size-${u}`],
    b ? q.isOpen : "",
    D ? q.hasError : "",
    d ? q.disabled : "",
    p || ""
  ].filter(Boolean).join(" "), K = u === "sm" ? "xs" : u === "lg" ? "md" : "sm";
  return /* @__PURE__ */ l("div", { ref: f, className: G, children: [
    t && /* @__PURE__ */ l("label", { id: `${_}-label`, className: q.label, children: [
      t,
      N && /* @__PURE__ */ e("span", { className: q.required, children: "*" })
    ] }),
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        id: _,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-labelledby": t ? `${_}-label ${_}` : void 0,
        disabled: d,
        onClick: () => I((v) => !v),
        onKeyDown: C,
        className: q.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: q.selectedContent, children: z ? /* @__PURE__ */ l(be, { children: [
            z.avatar && /* @__PURE__ */ e(
              ce,
              {
                size: z.avatar.size || K,
                ...z.avatar
              }
            ),
            z.icon && /* @__PURE__ */ e("span", { children: z.icon }),
            /* @__PURE__ */ e("span", { children: z.label })
          ] }) : /* @__PURE__ */ e("span", { className: q.placeholder, children: n }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${q.chevron} ${b ? q.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(he, { size: 16 })
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ e("ul", { role: "listbox", "aria-labelledby": `${_}-label`, className: q.menu, children: a.map((v) => {
      const B = v.value === R, j = [
        q.menuItem,
        B ? q.itemSelected : "",
        v.disabled ? q.itemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ l(
        "li",
        {
          role: "option",
          "aria-selected": B,
          "aria-disabled": v.disabled,
          onClick: () => W(v),
          className: j,
          children: [
            /* @__PURE__ */ l("div", { className: q.itemLeft, children: [
              v.avatar && /* @__PURE__ */ e(ce, { size: v.avatar.size || K, ...v.avatar }),
              v.icon && /* @__PURE__ */ e("span", { children: v.icon }),
              /* @__PURE__ */ l("div", { className: q.itemText, children: [
                /* @__PURE__ */ e("span", { className: q.itemLabel, children: v.label }),
                v.description && /* @__PURE__ */ e("span", { className: q.itemDescription, children: v.description })
              ] })
            ] }),
            B && /* @__PURE__ */ e("span", { className: q.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(me, { size: 14 }) })
          ]
        },
        v.value
      );
    }) }),
    D && /* @__PURE__ */ e("span", { id: `${_}-error`, className: q.errorMessage, role: "alert", children: r }),
    !D && s && /* @__PURE__ */ e("span", { id: `${_}-helper`, className: q.helperText, children: s })
  ] });
};
At.displayName = "Dropdown";
const Gt = "_container_1ms02_1", Ft = "_hasDescription_1ms02_10", Mt = "_box_1ms02_14", Vt = "_nativeInput_1ms02_32", Ht = "_checked_1ms02_45", Pt = "_indeterminate_1ms02_46", Kt = "_disabled_1ms02_51", Ut = "_textGroup_1ms02_55", Qt = "_label_1ms02_61", Jt = "_description_1ms02_68", U = {
  container: Gt,
  hasDescription: Ft,
  box: Mt,
  nativeInput: Vt,
  checked: Ht,
  indeterminate: Pt,
  disabled: Kt,
  textGroup: Ut,
  label: Qt,
  description: Jt
}, Xt = S(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: r,
    indeterminate: a = !1,
    disabled: i = !1,
    className: h,
    onChange: c,
    ...u
  }, d) => {
    const N = ae(null), p = d || N;
    J(() => {
      p && "current" in p && p.current && (p.current.indeterminate = a);
    }, [a, p]);
    const x = s ?? r ?? !1, g = [
      U.container,
      n ? U.hasDescription : "",
      i ? U.disabled : "",
      h || ""
    ].filter(Boolean).join(" "), _ = [
      U.box,
      a ? U.indeterminate : x ? U.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("label", { className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: p,
          checked: s,
          defaultChecked: r,
          disabled: i,
          className: U.nativeInput,
          onChange: c,
          ...u
        }
      ),
      /* @__PURE__ */ l("span", { className: _, "aria-hidden": "true", children: [
        a && /* @__PURE__ */ e(Se, { size: 12 }),
        !a && x && /* @__PURE__ */ e(me, { size: 12 })
      ] }),
      (t || n) && /* @__PURE__ */ l("span", { className: U.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: U.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: U.description, children: n })
      ] })
    ] });
  }
);
Xt.displayName = "Checkbox";
const Yt = "_container_m4qf3_1", Zt = "_label_m4qf3_9", en = "_required_m4qf3_19", tn = "_textareaWrapper_m4qf3_23", nn = "_textarea_m4qf3_23", sn = "_hasError_m4qf3_58", an = "_footer_m4qf3_66", rn = "_helperText_m4qf3_74", on = "_errorMessage_m4qf3_78", ln = "_charCount_m4qf3_83", cn = "_disabled_m4qf3_89", V = {
  container: Yt,
  label: Zt,
  required: en,
  textareaWrapper: tn,
  textarea: nn,
  hasError: sn,
  footer: an,
  helperText: rn,
  errorMessage: on,
  charCount: ln,
  disabled: cn
}, dn = S(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    isRequired: r = !1,
    showCharCount: a = !1,
    maxLength: i,
    disabled: h = !1,
    value: c,
    defaultValue: u,
    id: d,
    className: N,
    onChange: p,
    ...x
  }, g) => {
    const _ = re(), f = d || _, b = !!s, [I, R] = ve.useState(() => typeof c == "string" ? c.length : typeof u == "string" ? u.length : 0), L = (D) => {
      R(D.target.value.length), p == null || p(D);
    }, z = [
      V.container,
      b ? V.hasError : "",
      h ? V.disabled : "",
      N || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: z, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: f, className: V.label, children: [
        t,
        r && /* @__PURE__ */ e("span", { className: V.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: V.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: g,
          id: f,
          disabled: h,
          value: c,
          defaultValue: u,
          maxLength: i,
          onChange: L,
          "aria-invalid": b,
          "aria-describedby": b ? `${f}-error` : n ? `${f}-helper` : void 0,
          className: V.textarea,
          ...x
        }
      ) }),
      /* @__PURE__ */ l("div", { className: V.footer, children: [
        b && /* @__PURE__ */ e("span", { id: `${f}-error`, className: V.errorMessage, role: "alert", children: s }),
        !b && n && /* @__PURE__ */ e("span", { id: `${f}-helper`, className: V.helperText, children: n }),
        a && i && /* @__PURE__ */ l("span", { className: V.charCount, children: [
          I,
          " / ",
          i
        ] })
      ] })
    ] });
  }
);
dn.displayName = "Textarea";
const _n = "_card_cnmiq_1", un = "_interactive_cnmiq_28", mn = "_header_cnmiq_56", hn = "_headerBordered_cnmiq_63", pn = "_title_cnmiq_68", fn = "_description_cnmiq_77", bn = "_content_cnmiq_84", vn = "_footer_cnmiq_88", gn = "_footerBordered_cnmiq_96", P = {
  card: _n,
  "elevation-1": "_elevation-1_cnmiq_13",
  "elevation-2": "_elevation-2_cnmiq_18",
  "elevation-3": "_elevation-3_cnmiq_23",
  interactive: un,
  "padding-none": "_padding-none_cnmiq_39",
  "padding-sm": "_padding-sm_cnmiq_43",
  "padding-md": "_padding-md_cnmiq_47",
  "padding-lg": "_padding-lg_cnmiq_51",
  header: mn,
  headerBordered: hn,
  title: pn,
  description: fn,
  content: bn,
  footer: vn,
  footerBordered: gn
}, yn = S(
  ({
    elevation: t = 1,
    padding: n = "none",
    isInteractive: s = !1,
    className: r,
    children: a,
    ...i
  }, h) => {
    const c = [
      P.card,
      P[`elevation-${t}`],
      P[`padding-${n}`],
      s ? P.interactive : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: h, className: c, ...i, children: a });
  }
);
yn.displayName = "Card";
const Nn = S(
  ({ bordered: t = !1, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${P.header} ${t ? P.headerBordered : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
Nn.displayName = "CardHeader";
const $n = S(
  ({ as: t = "h3", className: n, children: s, ...r }, a) => /* @__PURE__ */ e(t, { ref: a, className: `${P.title} ${n || ""}`, ...r, children: s })
);
$n.displayName = "CardTitle";
const kn = S(
  ({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("p", { ref: r, className: `${P.description} ${t || ""}`, ...s, children: n })
);
kn.displayName = "CardDescription";
const xn = S(
  ({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("div", { ref: r, className: `${P.content} ${t || ""}`, ...s, children: n })
);
xn.displayName = "CardContent";
const wn = S(
  ({ bordered: t = !1, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${P.footer} ${t ? P.footerBordered : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
wn.displayName = "CardFooter";
const In = "_container_1xw60_1", Bn = "_table_1xw60_10", qn = "_header_1xw60_19", zn = "_headCell_1xw60_24", Cn = "_row_1xw60_35", Sn = "_hoverable_1xw60_44", jn = "_cell_1xw60_48", Ln = "_tabularNums_1xw60_54", X = {
  container: In,
  table: Bn,
  header: qn,
  headCell: zn,
  row: Cn,
  hoverable: Sn,
  cell: jn,
  tabularNums: Ln,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Dn = S(
  ({ className: t, containerClassName: n, children: s, ...r }, a) => /* @__PURE__ */ e("div", { className: `${X.container} ${n || ""}`, children: /* @__PURE__ */ e("table", { ref: a, className: `${X.table} ${t || ""}`, ...r, children: s }) })
);
Dn.displayName = "Table";
const En = S(
  ({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("thead", { ref: r, className: `${X.header} ${t || ""}`, ...s, children: n })
);
En.displayName = "TableHeader";
const Tn = S(
  ({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: t, ...s, children: n })
);
Tn.displayName = "TableBody";
const Rn = S(
  ({ isHoverable: t = !0, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "tr",
    {
      ref: a,
      className: `${X.row} ${t ? X.hoverable : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
Rn.displayName = "TableRow";
const On = S(
  ({ align: t = "left", className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "th",
    {
      ref: a,
      className: `${X.headCell} ${X[`align-${t}`]} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
On.displayName = "TableHead";
const Wn = S(
  ({ align: t = "left", isNumeric: n = !1, className: s, children: r, ...a }, i) => /* @__PURE__ */ e(
    "td",
    {
      ref: i,
      className: `${X.cell} ${X[`align-${t}`]} ${n ? X.tabularNums : ""} ${s || ""}`,
      ...a,
      children: r
    }
  )
);
Wn.displayName = "TableCell";
const An = "_overlay_1ju4y_1", Gn = "_fadeIn_1ju4y_1", Fn = "_modal_1ju4y_15", Mn = "_scaleIn_1ju4y_1", Vn = "_header_1ju4y_44", Hn = "_title_1ju4y_51", Pn = "_closeButton_1ju4y_60", Kn = "_body_1ju4y_83", Un = "_footer_1ju4y_92", te = {
  overlay: An,
  fadeIn: Gn,
  modal: Fn,
  scaleIn: Mn,
  "size-sm": "_size-sm_1ju4y_32",
  "size-md": "_size-md_1ju4y_36",
  "size-lg": "_size-lg_1ju4y_40",
  header: Vn,
  title: Hn,
  closeButton: Pn,
  body: Kn,
  footer: Un
}, Qn = ({
  isOpen: t,
  onClose: n,
  title: s,
  size: r = "md",
  closeOnOverlayClick: a = !0,
  closeOnEsc: i = !0,
  showCloseButton: h = !0,
  footer: c,
  children: u,
  className: d
}) => {
  const N = re(), p = ae(null);
  if (J(() => {
    if (!t) return;
    const f = (b) => {
      b.key === "Escape" && i && n();
    };
    return document.addEventListener("keydown", f), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    };
  }, [t, i, n]), !t) return null;
  const x = (f) => {
    f.target === f.currentTarget && a && n();
  }, g = [
    te.modal,
    te[`size-${r}`],
    d || ""
  ].filter(Boolean).join(" "), _ = /* @__PURE__ */ e("div", { className: te.overlay, onClick: x, children: /* @__PURE__ */ l(
    "div",
    {
      ref: p,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? N : void 0,
      tabIndex: -1,
      className: g,
      children: [
        (s || h) && /* @__PURE__ */ l("div", { className: te.header, children: [
          s && /* @__PURE__ */ e("h2", { id: N, className: te.title, children: s }),
          h && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: n,
              className: te.closeButton,
              children: /* @__PURE__ */ e(de, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: te.body, children: u }),
        c && /* @__PURE__ */ e("div", { className: te.footer, children: c })
      ]
    }
  ) });
  return typeof document < "u" ? ge(_, document.body) : null;
};
Qn.displayName = "Modal";
const Jn = ({ className: t, children: n, ...s }) => /* @__PURE__ */ e("div", { className: `${te.footer} ${t || ""}`, ...s, children: n });
Jn.displayName = "ModalFooter";
const Xn = "_tabList_7bmw6_1", Yn = "_tab_7bmw6_1", Zn = "_tabActive_7bmw6_50", es = "_badge_7bmw6_76", ts = "_fullWidth_7bmw6_93", ns = "_panel_7bmw6_101", oe = {
  tabList: Xn,
  "variant-underline": "_variant-underline_7bmw6_11",
  tab: Yn,
  tabActive: Zn,
  badge: es,
  fullWidth: ts,
  panel: ns
}, ss = ({
  tabs: t,
  activeTab: n,
  defaultActiveTab: s,
  onChange: r,
  variant: a = "pill",
  fullWidth: i = !1,
  className: h,
  children: c
}) => {
  var g;
  const [u, d] = O(
    n || s || ((g = t[0]) == null ? void 0 : g.id) || ""
  ), N = n !== void 0 ? n : u, p = (_, f) => {
    f || (d(_), r == null || r(_));
  }, x = [
    oe.tabList,
    oe[`variant-${a}`],
    i ? oe.fullWidth : "",
    h || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ e("div", { role: "tablist", className: x, children: t.map((_) => {
      const f = _.id === N, b = [
        oe.tab,
        f ? oe.tabActive : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ l(
        "button",
        {
          role: "tab",
          type: "button",
          "aria-selected": f,
          "aria-controls": `panel-${_.id}`,
          id: `tab-${_.id}`,
          disabled: _.disabled,
          onClick: () => p(_.id, _.disabled),
          className: b,
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
ss.displayName = "Tabs";
const as = ({
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
as.displayName = "TabPanel";
const rs = "_container_1xroe_1", os = "_track_1xroe_10", ls = "_thumb_1xroe_24", is = "_checked_1xroe_34", cs = "_nativeInput_1xroe_43", ds = "_label_1xroe_55", _s = "_description_1xroe_61", us = "_textGroup_1xroe_66", ms = "_disabled_1xroe_72", Z = {
  container: rs,
  track: os,
  thumb: ls,
  checked: is,
  nativeInput: cs,
  label: ds,
  description: _s,
  textGroup: us,
  disabled: ms
}, hs = S(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: r,
    disabled: a = !1,
    className: i,
    onChange: h,
    ...c
  }, u) => {
    const d = s ?? r ?? !1, N = [
      Z.container,
      d ? Z.checked : "",
      a ? Z.disabled : "",
      i || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("label", { className: N, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: u,
          checked: s,
          defaultChecked: r,
          disabled: a,
          "aria-checked": d,
          className: Z.nativeInput,
          onChange: h,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: Z.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: Z.thumb }) }),
      (t || n) && /* @__PURE__ */ l("span", { className: Z.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: Z.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: Z.description, children: n })
      ] })
    ] });
  }
);
hs.displayName = "Switch";
const ps = "_group_1e0nk_1", fs = "_groupLabel_1e0nk_8", bs = "_item_1e0nk_14", vs = "_circle_1e0nk_22", gs = "_dot_1e0nk_35", ys = "_checked_1e0nk_45", Ns = "_nativeInput_1e0nk_54", $s = "_label_1e0nk_67", ks = "_description_1e0nk_73", xs = "_textGroup_1e0nk_78", ws = "_disabled_1e0nk_84", H = {
  group: ps,
  groupLabel: fs,
  item: bs,
  circle: vs,
  dot: gs,
  checked: ys,
  nativeInput: Ns,
  label: $s,
  description: ks,
  textGroup: xs,
  disabled: ws
}, ye = $e(null), Is = ({
  name: t,
  value: n,
  defaultValue: s,
  onChange: r,
  label: a,
  disabled: i = !1,
  className: h,
  children: c
}) => {
  const [u, d] = ve.useState(n || s), N = n !== void 0 ? n : u, p = (x) => {
    d(x.target.value), r == null || r(x.target.value);
  };
  return /* @__PURE__ */ e(
    ye.Provider,
    {
      value: {
        name: t,
        value: N,
        onChange: p,
        disabled: i
      },
      children: /* @__PURE__ */ l("div", { role: "radiogroup", "aria-label": a, className: `${H.group} ${h || ""}`, children: [
        a && /* @__PURE__ */ e("span", { className: H.groupLabel, children: a }),
        c
      ] })
    }
  );
};
Is.displayName = "RadioGroup";
const Bs = S(
  ({ value: t, label: n, description: s, disabled: r, className: a, checked: i, onChange: h, ...c }, u) => {
    const d = ke(ye), N = d ? d.value === t : i, p = r || (d == null ? void 0 : d.disabled) || !1, x = (d == null ? void 0 : d.name) || c.name, g = [
      H.item,
      N ? H.checked : "",
      p ? H.disabled : "",
      a || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("label", { className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: u,
          type: "radio",
          name: x,
          value: t,
          checked: N,
          disabled: p,
          onChange: (f) => {
            var b;
            h == null || h(f), (b = d == null ? void 0 : d.onChange) == null || b.call(d, f);
          },
          className: H.nativeInput,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: H.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: H.dot }) }),
      (n || s) && /* @__PURE__ */ l("span", { className: H.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: H.label, children: n }),
        s && /* @__PURE__ */ e("span", { className: H.description, children: s })
      ] })
    ] });
  }
);
Bs.displayName = "Radio";
const qs = "_wrapper_yiqhg_1", zs = "_searchIcon_yiqhg_8", Cs = "_input_yiqhg_18", Ss = "_rightSlots_yiqhg_42", js = "_clearButton_yiqhg_50", Ls = "_shortcut_yiqhg_66", le = {
  wrapper: qs,
  searchIcon: zs,
  input: Cs,
  rightSlots: Ss,
  clearButton: js,
  shortcut: Ls
}, Ds = ({ ...t }) => /* @__PURE__ */ l(
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
), Es = S(
  ({ value: t, defaultValue: n, onChange: s, onClear: r, shortcutHint: a = "⌘K", placeholder: i = "Search records, students, classes...", className: h, ...c }, u) => {
    const [d, N] = O(
      t || n || ""
    ), p = t !== void 0, x = p ? t : d, g = (f) => {
      p || N(f.target.value), s == null || s(f);
    }, _ = () => {
      p || N(""), r == null || r();
    };
    return /* @__PURE__ */ l("div", { className: `${le.wrapper} ${h || ""}`, children: [
      /* @__PURE__ */ e("span", { className: le.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(Ds, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: u,
          type: "search",
          value: x,
          placeholder: i,
          onChange: g,
          className: le.input,
          ...c
        }
      ),
      /* @__PURE__ */ l("div", { className: le.rightSlots, children: [
        x && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: _,
            className: le.clearButton,
            children: /* @__PURE__ */ e(de, { size: 14 })
          }
        ),
        a && /* @__PURE__ */ e("kbd", { className: le.shortcut, children: a })
      ] })
    ] });
  }
);
Es.displayName = "SearchInput";
const Ts = "_card_kgob9_1", Rs = "_topRow_kgob9_18", Os = "_title_kgob9_25", Ws = "_iconSlot_kgob9_33", As = "_metricRow_kgob9_49", Gs = "_value_kgob9_55", Fs = "_trendBadge_kgob9_65", Ms = "_description_kgob9_90", Q = {
  card: Ts,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: Rs,
  title: Os,
  iconSlot: Ws,
  metricRow: As,
  value: Gs,
  trendBadge: Fs,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: Ms
}, Vs = ({
  title: t,
  value: n,
  description: s,
  trend: r,
  icon: a,
  highlighted: i = !1,
  className: h,
  ...c
}) => {
  const u = [
    Q.card,
    i ? Q["variant-highlight"] : "",
    h || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l("div", { className: u, ...c, children: [
    /* @__PURE__ */ l("div", { className: Q.topRow, children: [
      /* @__PURE__ */ e("h4", { className: Q.title, children: t }),
      a && /* @__PURE__ */ e("span", { className: Q.iconSlot, children: a })
    ] }),
    /* @__PURE__ */ l("div", { className: Q.metricRow, children: [
      /* @__PURE__ */ e("span", { className: Q.value, children: n }),
      r && /* @__PURE__ */ l("span", { className: `${Q.trendBadge} ${Q[`trend-${r.direction}`]}`, children: [
        r.direction === "up" && "↑ ",
        r.direction === "down" && "↓ ",
        r.value
      ] })
    ] }),
    s && /* @__PURE__ */ e("p", { className: Q.description, children: s })
  ] });
};
Vs.displayName = "StatCard";
const Hs = "_overlay_1jiz5_1", Ps = "_fadeIn_1jiz5_1", Ks = "_drawer_1jiz5_11", Us = "_slideInRight_1jiz5_1", Qs = "_slideInLeft_1jiz5_1", Js = "_header_1jiz5_51", Xs = "_title_1jiz5_59", Ys = "_closeButton_1jiz5_67", Zs = "_body_1jiz5_90", ea = "_footer_1jiz5_99", ee = {
  overlay: Hs,
  fadeIn: Ps,
  drawer: Ks,
  "placement-right": "_placement-right_1jiz5_26",
  slideInRight: Us,
  "placement-left": "_placement-left_1jiz5_31",
  slideInLeft: Qs,
  "size-sm": "_size-sm_1jiz5_39",
  "size-md": "_size-md_1jiz5_43",
  "size-lg": "_size-lg_1jiz5_47",
  header: Js,
  title: Xs,
  closeButton: Ys,
  body: Zs,
  footer: ea
}, ta = ({
  isOpen: t,
  onClose: n,
  title: s,
  placement: r = "right",
  size: a = "md",
  closeOnOverlayClick: i = !0,
  closeOnEsc: h = !0,
  showCloseButton: c = !0,
  footer: u,
  children: d,
  className: N
}) => {
  const p = re(), x = ae(null);
  if (J(() => {
    if (!t) return;
    const b = (I) => {
      I.key === "Escape" && h && n();
    };
    return document.addEventListener("keydown", b), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", b), document.body.style.overflow = "";
    };
  }, [t, h, n]), !t) return null;
  const g = (b) => {
    b.target === b.currentTarget && i && n();
  }, _ = [
    ee.drawer,
    ee[`placement-${r}`],
    ee[`size-${a}`],
    N || ""
  ].filter(Boolean).join(" "), f = /* @__PURE__ */ l(be, { children: [
    /* @__PURE__ */ e("div", { className: ee.overlay, onClick: g }),
    /* @__PURE__ */ l(
      "div",
      {
        ref: x,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": s ? p : void 0,
        tabIndex: -1,
        className: _,
        children: [
          (s || c) && /* @__PURE__ */ l("div", { className: ee.header, children: [
            s && /* @__PURE__ */ e("h3", { id: p, className: ee.title, children: s }),
            c && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: n,
                className: ee.closeButton,
                children: /* @__PURE__ */ e(de, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: ee.body, children: d }),
          u && /* @__PURE__ */ e("div", { className: ee.footer, children: u })
        ]
      }
    )
  ] });
  return typeof document < "u" ? ge(f, document.body) : null;
};
ta.displayName = "Drawer";
const na = "_chip_1mi8b_1", sa = "_pill_1mi8b_14", aa = "_rounded_1mi8b_18", ra = "_sm_1mi8b_22", oa = "_md_1mi8b_37", la = "_lg_1mi8b_46", ia = "_neutral_1mi8b_56", ca = "_primary_1mi8b_62", da = "_tonal_1mi8b_69", _a = "_outline_1mi8b_76", ua = "_success_1mi8b_82", ma = "_warning_1mi8b_88", ha = "_danger_1mi8b_94", pa = "_clickable_1mi8b_101", fa = "_disabled_1mi8b_105", ba = "_selected_1mi8b_105", va = "_selectedIcon_1mi8b_132", ga = "_avatarSlot_1mi8b_140", ya = "_hasAvatar_1mi8b_184", Na = "_iconSlot_1mi8b_213", $a = "_label_1mi8b_222", ka = "_countBadge_1mi8b_231", xa = "_removeButton_1mi8b_252", T = {
  chip: na,
  pill: sa,
  rounded: aa,
  sm: ra,
  md: oa,
  lg: la,
  neutral: ia,
  primary: ca,
  tonal: da,
  outline: _a,
  success: ua,
  warning: ma,
  danger: ha,
  clickable: pa,
  disabled: fa,
  selected: ba,
  selectedIcon: va,
  avatarSlot: ga,
  hasAvatar: ya,
  iconSlot: Na,
  label: $a,
  countBadge: ka,
  removeButton: xa
}, wa = ({
  label: t,
  avatar: n,
  icon: s,
  variant: r,
  size: a = "md",
  shape: i = "pill",
  selected: h = !1,
  count: c,
  onRemove: u,
  disabled: d = !1,
  className: N,
  onClick: p,
  ...x
}) => {
  const g = !!p && !d, _ = r ?? (n ? "tonal" : "neutral"), f = [
    T.chip,
    T[_],
    T[a],
    T[i],
    n ? T.hasAvatar : "",
    h ? T.selected : "",
    g ? T.clickable : "",
    u ? T.removable : "",
    d ? T.disabled : "",
    N || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l(
    "div",
    {
      className: f,
      role: g ? "button" : "status",
      tabIndex: g ? 0 : void 0,
      onClick: g ? p : void 0,
      ...x,
      children: [
        h && /* @__PURE__ */ e("span", { className: T.selectedIcon, children: /* @__PURE__ */ e(me, { size: a === "sm" ? 10 : a === "lg" ? 14 : 12 }) }),
        !h && n && /* @__PURE__ */ e("span", { className: T.avatarSlot, children: n }),
        !h && !n && s && /* @__PURE__ */ e("span", { className: T.iconSlot, children: s }),
        /* @__PURE__ */ e("span", { className: T.label, children: t }),
        c !== void 0 && /* @__PURE__ */ e("span", { className: T.countBadge, children: c }),
        u && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            className: T.removeButton,
            onClick: (b) => {
              b.stopPropagation(), !d && u && u();
            },
            disabled: d,
            children: /* @__PURE__ */ e(de, { size: a === "sm" ? 10 : a === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, Ia = "_container_1gno1_1", Ba = "_label_1gno1_14", qa = "_required_1gno1_24", za = "_trigger_1gno1_29", Ca = "_disabled_1gno1_50", Sa = "_isOpen_1gno1_54", ja = "_chipContainer_1gno1_72", La = "_searchInput_1gno1_81", Da = "_placeholder_1gno1_93", Ea = "_moreCount_1gno1_97", Ta = "_trailing_1gno1_112", Ra = "_clearAllButton_1gno1_119", Oa = "_chevron_1gno1_137", Wa = "_menu_1gno1_149", Aa = "_empty_1gno1_167", Ga = "_option_1gno1_175", Fa = "_focused_1gno1_191", Ma = "_selected_1gno1_195", Va = "_checkboxSlot_1gno1_204", Ha = "_checkboxBox_1gno1_211", Pa = "_checkboxChecked_1gno1_224", Ka = "_avatarSlot_1gno1_229", Ua = "_iconSlot_1gno1_242", Qa = "_labelCol_1gno1_249", Ja = "_labelRow_1gno1_256", Xa = "_optionLabel_1gno1_263", Ya = "_badge_1gno1_270", Za = "_optionDescription_1gno1_298", er = "_optionDisabled_1gno1_305", tr = "_hasError_1gno1_312", nr = "_errorText_1gno1_321", sr = "_helperText_1gno1_326", $ = {
  container: Ia,
  "size-sm": "_size-sm_1gno1_10",
  label: Ba,
  required: qa,
  trigger: za,
  disabled: Ca,
  isOpen: Sa,
  "size-lg": "_size-lg_1gno1_66",
  chipContainer: ja,
  searchInput: La,
  placeholder: Da,
  moreCount: Ea,
  trailing: Ta,
  clearAllButton: Ra,
  chevron: Oa,
  menu: Wa,
  empty: Aa,
  option: Ga,
  focused: Fa,
  selected: Ma,
  checkboxSlot: Va,
  checkboxBox: Ha,
  checkboxChecked: Pa,
  avatarSlot: Ka,
  iconSlot: Ua,
  labelCol: Qa,
  labelRow: Ja,
  optionLabel: Xa,
  badge: Ya,
  "badge-primary": "_badge-primary_1gno1_278",
  "badge-success": "_badge-success_1gno1_283",
  "badge-warning": "_badge-warning_1gno1_288",
  "badge-neutral": "_badge-neutral_1gno1_293",
  optionDescription: Za,
  optionDisabled: er,
  hasError: tr,
  errorText: nr,
  helperText: sr
}, Or = ({
  label: t,
  placeholder: n = "Select items...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: h,
  onChange: c,
  size: u = "md",
  disabled: d = !1,
  isRequired: N = !1,
  isSearchable: p = !0,
  className: x,
  id: g,
  maxDisplayedChips: _
}) => {
  const f = re(), b = g || f, I = ae(null), R = ae(null), [L, z] = O(!1), [D, W] = O(""), [C, G] = O(i || h || []), [K, v] = O(-1);
  J(() => {
    i !== void 0 && G(i);
  }, [i]);
  const B = ie(() => a.filter((o) => C.includes(o.value)), [a, C]), j = ie(() => {
    if (!D.trim()) return a;
    const o = D.toLowerCase();
    return a.filter(
      (k) => k.label.toLowerCase().includes(o) || k.description && k.description.toLowerCase().includes(o) || k.badge && k.badge.toLowerCase().includes(o)
    );
  }, [a, D]);
  J(() => {
    const o = (k) => {
      I.current && !I.current.contains(k.target) && (z(!1), W(""), v(-1));
    };
    return L && document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [L]);
  const ne = (o) => {
    if (o.disabled || d) return;
    let k;
    C.includes(o.value) ? k = C.filter((F) => F !== o.value) : k = [...C, o.value], i === void 0 && G(k);
    const A = a.filter((F) => k.includes(F.value));
    c == null || c(k, A);
  }, _e = (o) => {
    if (d) return;
    const k = C.filter((F) => F !== o);
    i === void 0 && G(k);
    const A = a.filter((F) => k.includes(F.value));
    c == null || c(k, A);
  }, pe = (o) => {
    if (!d) {
      if (o.key === "Backspace" && D === "" && C.length > 0) {
        _e(C[C.length - 1]);
        return;
      }
      if (!L) {
        (o.key === "Enter" || o.key === " " || o.key === "ArrowDown") && (o.preventDefault(), z(!0));
        return;
      }
      o.key === "Escape" ? (o.preventDefault(), z(!1), W("")) : o.key === "ArrowDown" ? (o.preventDefault(), v((k) => k < j.length - 1 ? k + 1 : 0)) : o.key === "ArrowUp" ? (o.preventDefault(), v((k) => k > 0 ? k - 1 : j.length - 1)) : o.key === "Enter" && K >= 0 && K < j.length && (o.preventDefault(), ne(j[K]));
    }
  }, fe = _ ? B.slice(0, _) : B, m = _ ? Math.max(0, B.length - _) : 0, y = !!r;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: I,
      className: [
        $.container,
        $[`size-${u}`],
        L ? $.isOpen : "",
        d ? $.disabled : "",
        y ? $.hasError : "",
        x || ""
      ].filter(Boolean).join(" "),
      onKeyDown: pe,
      children: [
        t && /* @__PURE__ */ l("label", { id: `${b}-label`, className: $.label, children: [
          t,
          N && /* @__PURE__ */ e("span", { className: $.required, children: "*" })
        ] }),
        /* @__PURE__ */ l(
          "div",
          {
            className: $.trigger,
            onClick: () => {
              d || (z(!L), !L && p && setTimeout(() => {
                var o;
                return (o = R.current) == null ? void 0 : o.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": L,
            "aria-haspopup": "listbox",
            "aria-labelledby": t ? `${b}-label` : void 0,
            children: [
              /* @__PURE__ */ l("div", { className: $.chipContainer, children: [
                fe.map((o) => /* @__PURE__ */ e(
                  wa,
                  {
                    label: o.label,
                    variant: "tonal",
                    shape: o.avatar ? "pill" : "rounded",
                    size: u === "sm" ? "sm" : u === "lg" ? "lg" : "md",
                    avatar: o.avatar ? /* @__PURE__ */ e(
                      ce,
                      {
                        size: u === "sm" ? "xs" : u === "lg" ? "md" : "xs",
                        name: o.label,
                        ...o.avatar
                      }
                    ) : void 0,
                    icon: o.icon,
                    onRemove: () => _e(o.value),
                    disabled: d
                  },
                  o.value
                )),
                m > 0 && /* @__PURE__ */ l("span", { className: $.moreCount, children: [
                  "+",
                  m,
                  " more"
                ] }),
                p ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: R,
                    type: "text",
                    className: $.searchInput,
                    placeholder: B.length === 0 ? n : "",
                    value: D,
                    onChange: (o) => {
                      W(o.target.value), L || z(!0);
                    },
                    onClick: (o) => o.stopPropagation(),
                    disabled: d
                  }
                ) : B.length === 0 && /* @__PURE__ */ e("span", { className: $.placeholder, children: n })
              ] }),
              /* @__PURE__ */ l("div", { className: $.trailing, children: [
                C.length > 0 && !d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: $.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (o) => {
                      o.stopPropagation(), i === void 0 && G([]), c == null || c([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: $.chevron, children: /* @__PURE__ */ e(he, { size: 14 }) })
              ] })
            ]
          }
        ),
        L && /* @__PURE__ */ e("div", { className: $.menu, role: "listbox", "aria-multiselectable": "true", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: $.empty, children: "No matches found" }) : j.map((o, k) => {
          const A = C.includes(o.value), F = k === K;
          return /* @__PURE__ */ l(
            "div",
            {
              role: "option",
              "aria-selected": A,
              "aria-disabled": o.disabled,
              className: [
                $.option,
                A ? $.selected : "",
                F ? $.focused : "",
                o.disabled ? $.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (Ne) => {
                Ne.stopPropagation(), ne(o);
              },
              onMouseEnter: () => v(k),
              children: [
                /* @__PURE__ */ e("div", { className: $.checkboxSlot, children: /* @__PURE__ */ e("div", { className: [$.checkboxBox, A ? $.checkboxChecked : ""].join(" "), children: A && /* @__PURE__ */ e(me, { size: 11 }) }) }),
                o.avatar && /* @__PURE__ */ e("div", { className: $.avatarSlot, children: /* @__PURE__ */ e(
                  ce,
                  {
                    size: "sm",
                    name: o.label,
                    ...o.avatar
                  }
                ) }),
                !o.avatar && o.icon && /* @__PURE__ */ e("div", { className: $.iconSlot, children: o.icon }),
                /* @__PURE__ */ l("div", { className: $.labelCol, children: [
                  /* @__PURE__ */ l("div", { className: $.labelRow, children: [
                    /* @__PURE__ */ e("span", { className: $.optionLabel, children: o.label }),
                    o.badge && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          $.badge,
                          $[`badge-${o.badgeVariant || "primary"}`]
                        ].join(" "),
                        children: o.badge
                      }
                    )
                  ] }),
                  o.description && /* @__PURE__ */ e("div", { className: $.optionDescription, children: o.description })
                ] })
              ]
            },
            o.value
          );
        }) }),
        r && /* @__PURE__ */ e("span", { className: $.errorText, children: r }),
        !r && s && /* @__PURE__ */ e("span", { className: $.helperText, children: s })
      ]
    }
  );
}, ar = "_container_ff9xt_1", rr = "_label_ff9xt_10", or = "_required_ff9xt_20", lr = "_trigger_ff9xt_25", ir = "_disabled_ff9xt_45", cr = "_isOpen_ff9xt_49", dr = "_searchIcon_ff9xt_55", _r = "_input_ff9xt_63", ur = "_clearButton_ff9xt_81", mr = "_chevron_ff9xt_98", hr = "_menu_ff9xt_110", pr = "_optionsList_ff9xt_127", fr = "_groupBlock_ff9xt_133", br = "_groupHeader_ff9xt_138", vr = "_option_ff9xt_127", gr = "_focused_ff9xt_172", yr = "_selected_ff9xt_176", Nr = "_optionContent_ff9xt_180", $r = "_optionIcon_ff9xt_188", kr = "_optionLabel_ff9xt_195", xr = "_highlight_ff9xt_204", wr = "_optionBadge_ff9xt_209", Ir = "_optionDisabled_ff9xt_221", Br = "_emptyFallback_ff9xt_228", qr = "_emptyIcon_ff9xt_238", zr = "_emptyTitle_ff9xt_252", Cr = "_emptySubtitle_ff9xt_258", Sr = "_footerGuide_ff9xt_265", jr = "_hasError_ff9xt_278", Lr = "_errorText_ff9xt_287", Dr = "_helperText_ff9xt_292", w = {
  container: ar,
  label: rr,
  required: or,
  trigger: lr,
  disabled: ir,
  isOpen: cr,
  searchIcon: dr,
  input: _r,
  clearButton: ur,
  chevron: mr,
  menu: hr,
  optionsList: pr,
  groupBlock: fr,
  groupHeader: br,
  option: vr,
  focused: gr,
  selected: yr,
  optionContent: Nr,
  optionIcon: $r,
  optionLabel: kr,
  highlight: xr,
  optionBadge: wr,
  optionDisabled: Ir,
  emptyFallback: Br,
  emptyIcon: qr,
  emptyTitle: zr,
  emptySubtitle: Cr,
  footerGuide: Sr,
  hasError: jr,
  errorText: Lr,
  helperText: Dr
}, Wr = ({
  label: t,
  placeholder: n = "Search entities...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: h,
  onChange: c,
  disabled: u = !1,
  isRequired: d = !1,
  className: N,
  id: p
}) => {
  const x = re(), g = p || x, _ = ae(null), f = ae(null), [b, I] = O(!1), [R, L] = O(i || h || ""), [z, D] = O(""), [W, C] = O(-1);
  J(() => {
    i !== void 0 && L(i);
  }, [i]);
  const G = ie(() => a.find((m) => m.value === R), [a, R]);
  J(() => {
    !b && G ? D(G.label) : !b && !G && D("");
  }, [b, G]);
  const K = ie(() => {
    if (!z.trim()) return a;
    const m = z.toLowerCase();
    return a.filter(
      (y) => y.label.toLowerCase().includes(m) || y.group && y.group.toLowerCase().includes(m) || y.badge && y.badge.toLowerCase().includes(m)
    );
  }, [a, z]), v = ie(() => {
    const m = {};
    return K.forEach((y) => {
      const o = y.group || "";
      m[o] || (m[o] = []), m[o].push(y);
    }), m;
  }, [K]), B = ie(() => {
    const m = [];
    return Object.keys(v).forEach((y) => {
      m.push(...v[y]);
    }), m;
  }, [v]);
  J(() => {
    const m = (y) => {
      _.current && !_.current.contains(y.target) && (I(!1), C(-1));
    };
    return b && document.addEventListener("mousedown", m), () => {
      document.removeEventListener("mousedown", m);
    };
  }, [b]);
  const j = (m) => {
    m.disabled || u || (i === void 0 && L(m.value), D(m.label), I(!1), C(-1), c == null || c(m.value, m));
  }, ne = (m) => {
    var y;
    m.stopPropagation(), D(""), i === void 0 && L(""), c == null || c("", void 0), (y = f.current) == null || y.focus();
  }, _e = (m) => {
    if (!u) {
      if (!b) {
        (m.key === "ArrowDown" || m.key === "Enter") && (m.preventDefault(), I(!0));
        return;
      }
      m.key === "Escape" ? (m.preventDefault(), I(!1), C(-1)) : m.key === "ArrowDown" ? (m.preventDefault(), C((y) => y < B.length - 1 ? y + 1 : 0)) : m.key === "ArrowUp" ? (m.preventDefault(), C((y) => y > 0 ? y - 1 : B.length - 1)) : m.key === "Enter" && W >= 0 && W < B.length && (m.preventDefault(), j(B[W]));
    }
  }, pe = (m, y) => {
    if (!y.trim()) return m;
    const o = m.split(new RegExp(`(${y})`, "gi"));
    return /* @__PURE__ */ e(be, { children: o.map(
      (k, A) => k.toLowerCase() === y.toLowerCase() ? /* @__PURE__ */ e("span", { className: w.highlight, children: k }, A) : k
    ) });
  }, fe = !!r;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: _,
      className: [
        w.container,
        b ? w.isOpen : "",
        u ? w.disabled : "",
        fe ? w.hasError : "",
        N || ""
      ].filter(Boolean).join(" "),
      onKeyDown: _e,
      children: [
        t && /* @__PURE__ */ l("label", { id: `${g}-label`, className: w.label, children: [
          t,
          d && /* @__PURE__ */ e("span", { className: w.required, children: "*" })
        ] }),
        /* @__PURE__ */ l(
          "div",
          {
            className: w.trigger,
            onClick: () => {
              var m;
              u || (I(!0), (m = f.current) == null || m.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: w.searchIcon, children: /* @__PURE__ */ e(Le, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: f,
                  id: g,
                  type: "text",
                  className: w.input,
                  placeholder: n,
                  value: z,
                  role: "combobox",
                  "aria-expanded": b,
                  "aria-autocomplete": "list",
                  "aria-controls": `${g}-popup`,
                  disabled: u,
                  onChange: (m) => {
                    D(m.target.value), b || I(!0);
                  },
                  onFocus: () => I(!0)
                }
              ),
              z && !u && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: w.clearButton,
                  "aria-label": "Clear query",
                  onClick: ne,
                  children: /* @__PURE__ */ e(de, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: w.chevron, children: /* @__PURE__ */ e(he, { size: 14 }) })
            ]
          }
        ),
        b && /* @__PURE__ */ l("div", { id: `${g}-popup`, className: w.menu, role: "listbox", children: [
          B.length === 0 ? /* @__PURE__ */ l("div", { className: w.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: w.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: w.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: w.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: w.optionsList, children: Object.keys(v).map((m) => /* @__PURE__ */ l("div", { className: w.groupBlock, children: [
            m && /* @__PURE__ */ e("div", { className: w.groupHeader, children: m }),
            v[m].map((y) => {
              const o = y.value === R, k = B.indexOf(y), A = k === W;
              return /* @__PURE__ */ l(
                "div",
                {
                  role: "option",
                  "aria-selected": o,
                  "aria-disabled": y.disabled,
                  className: [
                    w.option,
                    o ? w.selected : "",
                    A ? w.focused : "",
                    y.disabled ? w.optionDisabled : ""
                  ].filter(Boolean).join(" "),
                  onClick: (F) => {
                    F.stopPropagation(), j(y);
                  },
                  onMouseEnter: () => C(k),
                  children: [
                    /* @__PURE__ */ l("div", { className: w.optionContent, children: [
                      y.icon && /* @__PURE__ */ e("span", { className: w.optionIcon, children: y.icon }),
                      /* @__PURE__ */ e("span", { className: w.optionLabel, children: pe(y.label, z) })
                    ] }),
                    y.badge && /* @__PURE__ */ e("span", { className: w.optionBadge, children: y.badge })
                  ]
                },
                y.value
              );
            })
          ] }, m || "default-group")) }),
          /* @__PURE__ */ l("div", { className: w.footerGuide, children: [
            /* @__PURE__ */ e("span", { children: "↵ Enter to select" }),
            /* @__PURE__ */ e("span", { children: "Esc to dismiss" })
          ] })
        ] }),
        r && /* @__PURE__ */ e("span", { className: w.errorText, children: r }),
        !r && s && /* @__PURE__ */ e("span", { className: w.helperText, children: s })
      ]
    }
  );
};
export {
  ce as Avatar,
  Re as Badge,
  De as Button,
  yn as Card,
  xn as CardContent,
  kn as CardDescription,
  wn as CardFooter,
  Nn as CardHeader,
  $n as CardTitle,
  me as CheckIcon,
  Xt as Checkbox,
  he as ChevronDownIcon,
  wa as Chip,
  de as CloseIcon,
  Wr as Combobox,
  ta as Drawer,
  At as Dropdown,
  Ye as Input,
  Se as MinusIcon,
  Qn as Modal,
  Jn as ModalFooter,
  Or as MultiSelect,
  Bs as Radio,
  Is as RadioGroup,
  Le as SearchIcon,
  Es as SearchInput,
  ct as Select,
  Ce as SpinnerIcon,
  Vs as StatCard,
  hs as Switch,
  as as TabPanel,
  Dn as Table,
  Tn as TableBody,
  Wn as TableCell,
  On as TableHead,
  En as TableHeader,
  Rn as TableRow,
  ss as Tabs,
  dn as Textarea,
  je as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
