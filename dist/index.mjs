import { jsxs as s, jsx as e, Fragment as xe } from "react/jsx-runtime";
import O, { forwardRef as T, useId as ue, useState as j, useRef as X, useEffect as J, useCallback as Re, useContext as qe, createContext as De, useMemo as fe } from "react";
import { createPortal as Be } from "react-dom";
const Me = "_button_1ckl5_1", ze = "_fullWidth_1ckl5_109", Ae = "_disabled_1ckl5_113", Te = "_loading_1ckl5_120", Ee = "_spinner_1ckl5_124", Pe = "_icon_1ckl5_130", ie = {
  button: Me,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: ze,
  disabled: Ae,
  loading: Te,
  spinner: Ee,
  icon: Pe
}, We = ({
  size: n = 18,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    style: { animation: "ui-spin 0.8s linear infinite" },
    ...t,
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
), ge = ({
  size: n = 14,
  className: a,
  ...t
}) => /* @__PURE__ */ e(
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
    className: a,
    ...t,
    children: /* @__PURE__ */ e("polyline", { points: "3 8.5 6.5 12 13 4.5" })
  }
), je = ({
  size: n = 14,
  className: a,
  ...t
}) => /* @__PURE__ */ e(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    className: a,
    ...t,
    children: /* @__PURE__ */ e("line", { x1: "3", y1: "8", x2: "13", y2: "8" })
  }
), pe = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ e(
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
    className: a,
    ...t,
    children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" })
  }
), Ie = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ e(
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
    className: a,
    ...t,
    children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" })
  }
), Oe = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ e(
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
    className: a,
    ...t,
    children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" })
  }
), ye = ({
  size: n = 18,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
), He = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
    ]
  }
), Fe = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ]
  }
), Ge = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1.5", fill: "currentColor" })
    ]
  }
), Ri = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
      /* @__PURE__ */ e("polyline", { points: "9 22 9 12 15 12 15 22" })
    ]
  }
), qi = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("rect", { height: "18", rx: "2", ry: "2", width: "18", x: "3", y: "4" }),
      /* @__PURE__ */ e("line", { x1: "16", x2: "16", y1: "2", y2: "6" }),
      /* @__PURE__ */ e("line", { x1: "8", x2: "8", y1: "2", y2: "6" }),
      /* @__PURE__ */ e("line", { x1: "3", x2: "21", y1: "10", y2: "10" })
    ]
  }
), Di = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
      /* @__PURE__ */ e("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
    ]
  }
), Mi = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
      /* @__PURE__ */ e("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" })
    ]
  }
), Ve = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
      /* @__PURE__ */ e("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
      /* @__PURE__ */ e("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
    ]
  }
), zi = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
      /* @__PURE__ */ e("polyline", { points: "2 17 12 22 22 17" }),
      /* @__PURE__ */ e("polyline", { points: "2 12 12 17 22 12" })
    ]
  }
), Ai = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ s(
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
    className: a,
    ...t,
    children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
      /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
    ]
  }
), Ke = T(
  ({
    variant: n = "primary",
    size: a = "md",
    isLoading: t = !1,
    leftIcon: o,
    rightIcon: r,
    fullWidth: l = !1,
    disabled: c,
    className: i,
    children: d,
    ...h
  }, g) => {
    const f = [
      ie.button,
      ie[`variant-${n}`],
      ie[`size-${a}`],
      l ? ie.fullWidth : "",
      t ? ie.loading : "",
      c || t ? ie.disabled : "",
      i || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s(
      "button",
      {
        ref: g,
        disabled: c || t,
        className: f,
        "aria-busy": t,
        ...h,
        children: [
          t && /* @__PURE__ */ e("span", { className: ie.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(We, { size: a === "sm" ? 14 : a === "lg" ? 20 : 16 }) }),
          !t && o && /* @__PURE__ */ e("span", { className: ie.icon, children: o }),
          d && /* @__PURE__ */ e("span", { children: d }),
          !t && r && /* @__PURE__ */ e("span", { className: ie.icon, children: r })
        ]
      }
    );
  }
);
Ke.displayName = "Button";
const Ue = "_badge_qj0y6_1", Qe = "_dot_qj0y6_63", ke = {
  badge: Ue,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Qe
}, Je = ({
  variant: n = "neutral",
  size: a = "md",
  withDot: t = !1,
  leftIcon: o,
  rightIcon: r,
  className: l,
  children: c,
  ...i
}) => {
  const d = [
    ke.badge,
    ke[`variant-${n}`],
    ke[`size-${a}`],
    l || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s("span", { className: d, ...i, children: [
    t && /* @__PURE__ */ e("span", { className: ke.dot, "aria-hidden": "true" }),
    o && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: o }),
    /* @__PURE__ */ e("span", { children: c }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
  ] });
};
Je.displayName = "Badge";
const Xe = "_container_df4fv_1", Ye = "_label_df4fv_13", Ze = "_required_df4fv_23", en = "_inputWrapper_df4fv_27", nn = "_input_df4fv_27", tn = "_hasLeftIcon_df4fv_80", an = "_hasRightIcon_df4fv_84", rn = "_iconSlot_df4fv_88", on = "_leftSlot_df4fv_96", sn = "_rightSlot_df4fv_100", ln = "_hasError_df4fv_105", cn = "_helperText_df4fv_113", dn = "_errorMessage_df4fv_119", _n = "_disabled_df4fv_127", F = {
  container: Xe,
  "size-sm": "_size-sm_df4fv_9",
  label: Ye,
  required: Ze,
  inputWrapper: en,
  input: nn,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: tn,
  hasRightIcon: an,
  iconSlot: rn,
  leftSlot: on,
  rightSlot: sn,
  hasError: ln,
  helperText: cn,
  errorMessage: dn,
  disabled: _n
}, un = T(
  ({
    label: n,
    helperText: a,
    errorMessage: t,
    inputSize: o = "md",
    leftIcon: r,
    rightIcon: l,
    isRequired: c = !1,
    disabled: i = !1,
    id: d,
    className: h,
    ...g
  }, f) => {
    const $ = ue(), k = d || $, N = !!t, p = [
      F.container,
      F[`size-${o}`],
      N ? F.hasError : "",
      i ? F.disabled : "",
      r ? F.hasLeftIcon : "",
      l ? F.hasRightIcon : "",
      h || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("div", { className: p, children: [
      n && /* @__PURE__ */ s("label", { htmlFor: k, className: F.label, children: [
        n,
        c && /* @__PURE__ */ e("span", { className: F.required, children: "*" })
      ] }),
      /* @__PURE__ */ s("div", { className: F.inputWrapper, children: [
        r && /* @__PURE__ */ e("span", { className: `${F.iconSlot} ${F.leftSlot}`, children: r }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: f,
            id: k,
            disabled: i,
            "aria-invalid": N,
            "aria-describedby": N ? `${k}-error` : a ? `${k}-helper` : void 0,
            className: F.input,
            ...g
          }
        ),
        l && /* @__PURE__ */ e("span", { className: `${F.iconSlot} ${F.rightSlot}`, children: l })
      ] }),
      N && /* @__PURE__ */ e(
        "span",
        {
          id: `${k}-error`,
          className: F.errorMessage,
          role: "alert",
          children: t
        }
      ),
      !N && a && /* @__PURE__ */ e("span", { id: `${k}-helper`, className: F.helperText, children: a })
    ] });
  }
);
un.displayName = "Input";
const hn = "_container_fh5kq_1", mn = "_label_fh5kq_13", pn = "_required_fh5kq_23", vn = "_selectWrapper_fh5kq_27", bn = "_select_fh5kq_27", fn = "_chevronIcon_fh5kq_77", gn = "_hasError_fh5kq_88", yn = "_helperText_fh5kq_96", Nn = "_errorMessage_fh5kq_102", wn = "_disabled_fh5kq_110", ee = {
  container: hn,
  "size-sm": "_size-sm_fh5kq_9",
  label: mn,
  required: pn,
  selectWrapper: vn,
  select: bn,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: fn,
  hasError: gn,
  helperText: yn,
  errorMessage: Nn,
  disabled: wn
}, kn = T(
  ({
    label: n,
    helperText: a,
    errorMessage: t,
    selectSize: o = "md",
    options: r,
    placeholder: l,
    isRequired: c = !1,
    disabled: i = !1,
    id: d,
    className: h,
    children: g,
    ...f
  }, $) => {
    const k = ue(), N = d || k, p = !!t, b = [
      ee.container,
      ee[`size-${o}`],
      p ? ee.hasError : "",
      i ? ee.disabled : "",
      h || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("div", { className: b, children: [
      n && /* @__PURE__ */ s("label", { htmlFor: N, className: ee.label, children: [
        n,
        c && /* @__PURE__ */ e("span", { className: ee.required, children: "*" })
      ] }),
      /* @__PURE__ */ s("div", { className: ee.selectWrapper, children: [
        /* @__PURE__ */ s(
          "select",
          {
            ref: $,
            id: N,
            disabled: i,
            "aria-invalid": p,
            "aria-describedby": p ? `${N}-error` : a ? `${N}-helper` : void 0,
            className: ee.select,
            ...f,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              r ? r.map((_) => /* @__PURE__ */ e(
                "option",
                {
                  value: _.value,
                  disabled: _.disabled,
                  children: _.label
                },
                _.value
              )) : g
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: ee.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(pe, { size: 16 }) })
      ] }),
      p && /* @__PURE__ */ e(
        "span",
        {
          id: `${N}-error`,
          className: ee.errorMessage,
          role: "alert",
          children: t
        }
      ),
      !p && a && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: ee.helperText, children: a })
    ] });
  }
);
kn.displayName = "Select";
const $n = "_container_1d3rw_1", xn = "_label_1d3rw_14", Bn = "_required_1d3rw_24", In = "_trigger_1d3rw_28", Ln = "_isOpen_1d3rw_53", Cn = "_selectedContent_1d3rw_71", Sn = "_placeholder_1d3rw_80", Rn = "_chevron_1d3rw_84", qn = "_chevronOpen_1d3rw_93", Dn = "_menu_1d3rw_98", Mn = "_dropdownIn_1d3rw_1", zn = "_menuItem_1d3rw_116", An = "_itemDisabled_1d3rw_128", Tn = "_itemSelected_1d3rw_132", En = "_itemLeft_1d3rw_147", Pn = "_itemText_1d3rw_154", Wn = "_itemLabel_1d3rw_161", jn = "_itemDescription_1d3rw_169", On = "_checkSlot_1d3rw_174", Hn = "_hasError_1d3rw_183", Fn = "_helperText_1d3rw_191", Gn = "_errorMessage_1d3rw_197", Vn = "_disabled_1d3rw_205", A = {
  container: $n,
  "size-sm": "_size-sm_1d3rw_10",
  label: xn,
  required: Bn,
  trigger: In,
  isOpen: Ln,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: Cn,
  placeholder: Sn,
  chevron: Rn,
  chevronOpen: qn,
  menu: Dn,
  dropdownIn: Mn,
  menuItem: zn,
  itemDisabled: An,
  itemSelected: Tn,
  itemLeft: En,
  itemText: Pn,
  itemLabel: Wn,
  itemDescription: jn,
  checkSlot: On,
  hasError: Hn,
  helperText: Fn,
  errorMessage: Gn,
  disabled: Vn
}, Kn = "_container_1lebu_1", Un = "_tint_1lebu_14", Qn = "_solid_1lebu_20", Jn = "_image_1lebu_26", Xn = "_fallback_1lebu_33", Yn = "_statusDot_1lebu_74", _e = {
  container: Kn,
  tint: Un,
  solid: Qn,
  image: Jn,
  fallback: Xn,
  "size-xs": "_size-xs_1lebu_43",
  "size-sm": "_size-sm_1lebu_49",
  "size-md": "_size-md_1lebu_55",
  "size-lg": "_size-lg_1lebu_61",
  "size-xl": "_size-xl_1lebu_67",
  statusDot: Yn,
  "status-online": "_status-online_1lebu_102",
  "status-busy": "_status-busy_1lebu_106",
  "status-away": "_status-away_1lebu_110",
  "status-offline": "_status-offline_1lebu_114"
};
function Zn(n, a) {
  if (a) return a;
  if (!n) return "";
  const t = n.trim().split(/\s+/);
  return t.length === 1 ? t[0].substring(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
const Ne = ({
  src: n,
  alt: a = "",
  name: t,
  initials: o,
  size: r = "md",
  variant: l = "tint",
  status: c,
  className: i,
  ...d
}) => {
  const [h, g] = j(!1), f = Zn(t, o), $ = [
    _e.container,
    _e[`size-${r}`],
    _e[l],
    i || ""
  ].filter(Boolean).join(" "), k = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ s("div", { className: $, title: t || a, ...d, children: [
    n && !h ? /* @__PURE__ */ e(
      "img",
      {
        src: n,
        alt: a || t || "Avatar",
        className: _e.image,
        onError: () => g(!0)
      }
    ) : f ? /* @__PURE__ */ e("span", { className: _e.fallback, children: f }) : /* @__PURE__ */ e("span", { className: _e.fallback, children: /* @__PURE__ */ e(He, { size: k[r] }) }),
    c && /* @__PURE__ */ e(
      "span",
      {
        className: `${_e.statusDot} ${_e[`status-${c}`]}`,
        "aria-label": `Status: ${c}`
      }
    )
  ] });
};
Ne.displayName = "Avatar";
const et = ({
  label: n,
  placeholder: a = "Select an option...",
  helperText: t,
  errorMessage: o,
  options: r,
  value: l,
  defaultValue: c,
  onChange: i,
  size: d = "md",
  disabled: h = !1,
  isRequired: g = !1,
  className: f,
  id: $
}) => {
  const k = ue(), N = $ || k, p = X(null), [b, _] = j(!1), [M, R] = j(
    l || c
  );
  J(() => {
    l !== void 0 && R(l);
  }, [l]), J(() => {
    const w = (D) => {
      p.current && !p.current.contains(D.target) && _(!1);
    };
    return b && document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [b]);
  const I = r.find((w) => w.value === M), C = !!o, W = (w) => {
    w.disabled || (R(w.value), i == null || i(w.value, w), _(!1));
  }, G = (w) => {
    if (!h) {
      if (w.key === "Enter" || w.key === " ")
        w.preventDefault(), _((D) => !D);
      else if (w.key === "Escape")
        _(!1);
      else if (w.key === "ArrowDown" && b) {
        w.preventDefault();
        const D = r.findIndex(
          (K) => K.value === M
        ), P = r[D + 1];
        P && !P.disabled && W(P);
      } else if (w.key === "ArrowUp" && b) {
        w.preventDefault();
        const D = r.findIndex(
          (K) => K.value === M
        ), P = r[D - 1];
        P && !P.disabled && W(P);
      }
    }
  }, E = [
    A.container,
    A[`size-${d}`],
    b ? A.isOpen : "",
    C ? A.hasError : "",
    h ? A.disabled : "",
    f || ""
  ].filter(Boolean).join(" "), V = d === "sm" ? "xs" : d === "lg" ? "md" : "sm";
  return /* @__PURE__ */ s("div", { ref: p, className: E, children: [
    n && /* @__PURE__ */ s("label", { id: `${N}-label`, className: A.label, children: [
      n,
      g && /* @__PURE__ */ e("span", { className: A.required, children: "*" })
    ] }),
    /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        id: N,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-labelledby": n ? `${N}-label ${N}` : void 0,
        disabled: h,
        onClick: () => _((w) => !w),
        onKeyDown: G,
        className: A.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: A.selectedContent, children: I ? /* @__PURE__ */ s(xe, { children: [
            I.avatar && /* @__PURE__ */ e(
              Ne,
              {
                size: I.avatar.size || V,
                ...I.avatar
              }
            ),
            I.icon && /* @__PURE__ */ e("span", { children: I.icon }),
            /* @__PURE__ */ e("span", { children: I.label })
          ] }) : /* @__PURE__ */ e("span", { className: A.placeholder, children: a }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${A.chevron} ${b ? A.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(pe, { size: 16 })
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ e(
      "ul",
      {
        role: "listbox",
        "aria-labelledby": `${N}-label`,
        className: A.menu,
        children: r.map((w) => {
          const D = w.value === M, P = [
            A.menuItem,
            D ? A.itemSelected : "",
            w.disabled ? A.itemDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ s(
            "li",
            {
              role: "option",
              "aria-selected": D,
              "aria-disabled": w.disabled,
              onClick: () => W(w),
              className: P,
              children: [
                /* @__PURE__ */ s("div", { className: A.itemLeft, children: [
                  w.avatar && /* @__PURE__ */ e(
                    Ne,
                    {
                      size: w.avatar.size || V,
                      ...w.avatar
                    }
                  ),
                  w.icon && /* @__PURE__ */ e("span", { children: w.icon }),
                  /* @__PURE__ */ s("div", { className: A.itemText, children: [
                    /* @__PURE__ */ e("span", { className: A.itemLabel, children: w.label }),
                    w.description && /* @__PURE__ */ e("span", { className: A.itemDescription, children: w.description })
                  ] })
                ] }),
                D && /* @__PURE__ */ e("span", { className: A.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(ge, { size: 14 }) })
              ]
            },
            w.value
          );
        })
      }
    ),
    C && /* @__PURE__ */ e(
      "span",
      {
        id: `${N}-error`,
        className: A.errorMessage,
        role: "alert",
        children: o
      }
    ),
    !C && t && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: A.helperText, children: t })
  ] });
};
et.displayName = "Dropdown";
const nt = "_container_1ms02_1", tt = "_hasDescription_1ms02_10", at = "_box_1ms02_14", rt = "_nativeInput_1ms02_32", ot = "_checked_1ms02_45", st = "_indeterminate_1ms02_46", it = "_disabled_1ms02_51", lt = "_textGroup_1ms02_55", ct = "_label_1ms02_61", dt = "_description_1ms02_68", re = {
  container: nt,
  hasDescription: tt,
  box: at,
  nativeInput: rt,
  checked: ot,
  indeterminate: st,
  disabled: it,
  textGroup: lt,
  label: ct,
  description: dt
}, _t = T(
  ({
    label: n,
    description: a,
    checked: t,
    defaultChecked: o,
    indeterminate: r = !1,
    disabled: l = !1,
    className: c,
    onChange: i,
    ...d
  }, h) => {
    const g = X(null), f = h || g;
    J(() => {
      f && "current" in f && f.current && (f.current.indeterminate = r);
    }, [r, f]);
    const $ = t ?? o ?? !1, k = [
      re.container,
      a ? re.hasDescription : "",
      l ? re.disabled : "",
      c || ""
    ].filter(Boolean).join(" "), N = [
      re.box,
      r ? re.indeterminate : $ ? re.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("label", { className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: f,
          checked: t,
          defaultChecked: o,
          disabled: l,
          className: re.nativeInput,
          onChange: i,
          ...d
        }
      ),
      /* @__PURE__ */ s("span", { className: N, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(je, { size: 12 }),
        !r && $ && /* @__PURE__ */ e(ge, { size: 12 })
      ] }),
      (n || a) && /* @__PURE__ */ s("span", { className: re.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: re.label, children: n }),
        a && /* @__PURE__ */ e("span", { className: re.description, children: a })
      ] })
    ] });
  }
);
_t.displayName = "Checkbox";
const ut = "_container_m4qf3_1", ht = "_label_m4qf3_9", mt = "_required_m4qf3_19", pt = "_textareaWrapper_m4qf3_23", vt = "_textarea_m4qf3_23", bt = "_hasError_m4qf3_58", ft = "_footer_m4qf3_66", gt = "_helperText_m4qf3_74", yt = "_errorMessage_m4qf3_78", Nt = "_charCount_m4qf3_83", wt = "_disabled_m4qf3_89", ne = {
  container: ut,
  label: ht,
  required: mt,
  textareaWrapper: pt,
  textarea: vt,
  hasError: bt,
  footer: ft,
  helperText: gt,
  errorMessage: yt,
  charCount: Nt,
  disabled: wt
}, kt = T(
  ({
    label: n,
    helperText: a,
    errorMessage: t,
    isRequired: o = !1,
    showCharCount: r = !1,
    maxLength: l,
    disabled: c = !1,
    value: i,
    defaultValue: d,
    id: h,
    className: g,
    onChange: f,
    ...$
  }, k) => {
    const N = ue(), p = h || N, b = !!t, [_, M] = O.useState(() => typeof i == "string" ? i.length : typeof d == "string" ? d.length : 0), R = (C) => {
      M(C.target.value.length), f == null || f(C);
    }, I = [
      ne.container,
      b ? ne.hasError : "",
      c ? ne.disabled : "",
      g || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("div", { className: I, children: [
      n && /* @__PURE__ */ s("label", { htmlFor: p, className: ne.label, children: [
        n,
        o && /* @__PURE__ */ e("span", { className: ne.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: ne.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: k,
          id: p,
          disabled: c,
          value: i,
          defaultValue: d,
          maxLength: l,
          onChange: R,
          "aria-invalid": b,
          "aria-describedby": b ? `${p}-error` : a ? `${p}-helper` : void 0,
          className: ne.textarea,
          ...$
        }
      ) }),
      /* @__PURE__ */ s("div", { className: ne.footer, children: [
        b && /* @__PURE__ */ e(
          "span",
          {
            id: `${p}-error`,
            className: ne.errorMessage,
            role: "alert",
            children: t
          }
        ),
        !b && a && /* @__PURE__ */ e("span", { id: `${p}-helper`, className: ne.helperText, children: a }),
        r && l && /* @__PURE__ */ s("span", { className: ne.charCount, children: [
          _,
          " / ",
          l
        ] })
      ] })
    ] });
  }
);
kt.displayName = "Textarea";
const $t = "_card_7pqx0_1", xt = "_interactive_7pqx0_28", Bt = "_header_7pqx0_56", It = "_headerBordered_7pqx0_64", Lt = "_title_7pqx0_69", Ct = "_description_7pqx0_78", St = "_content_7pqx0_85", Rt = "_footer_7pqx0_89", qt = "_footerBordered_7pqx0_98", ae = {
  card: $t,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: xt,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: Bt,
  headerBordered: It,
  title: Lt,
  description: Ct,
  content: St,
  footer: Rt,
  footerBordered: qt
}, Dt = T(
  ({
    elevation: n = 1,
    padding: a = "none",
    isInteractive: t = !1,
    className: o,
    children: r,
    ...l
  }, c) => {
    const i = [
      ae.card,
      ae[`elevation-${n}`],
      ae[`padding-${a}`],
      t ? ae.interactive : "",
      o || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: c, className: i, ...l, children: r });
  }
);
Dt.displayName = "Card";
const Mt = T(
  ({ bordered: n = !1, className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${ae.header} ${n ? ae.headerBordered : ""} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
Mt.displayName = "CardHeader";
const zt = T(
  ({ as: n = "h3", className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    n,
    {
      ref: r,
      className: `${ae.title} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
zt.displayName = "CardTitle";
const At = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e(
  "p",
  {
    ref: o,
    className: `${ae.description} ${n || ""}`,
    ...t,
    children: a
  }
));
At.displayName = "CardDescription";
const Tt = T(
  ({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: `${ae.content} ${n || ""}`,
      ...t,
      children: a
    }
  )
);
Tt.displayName = "CardContent";
const Et = T(
  ({ bordered: n = !1, className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${ae.footer} ${n ? ae.footerBordered : ""} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
Et.displayName = "CardFooter";
const Pt = "_container_1xw60_1", Wt = "_table_1xw60_10", jt = "_header_1xw60_19", Ot = "_headCell_1xw60_24", Ht = "_row_1xw60_35", Ft = "_hoverable_1xw60_44", Gt = "_cell_1xw60_48", Vt = "_tabularNums_1xw60_54", se = {
  container: Pt,
  table: Wt,
  header: jt,
  headCell: Ot,
  row: Ht,
  hoverable: Ft,
  cell: Gt,
  tabularNums: Vt,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Kt = T(
  ({ className: n, containerClassName: a, children: t, ...o }, r) => /* @__PURE__ */ e("div", { className: `${se.container} ${a || ""}`, children: /* @__PURE__ */ e(
    "table",
    {
      ref: r,
      className: `${se.table} ${n || ""}`,
      ...o,
      children: t
    }
  ) })
);
Kt.displayName = "Table";
const Ut = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e("thead", { ref: o, className: `${se.header} ${n || ""}`, ...t, children: a }));
Ut.displayName = "TableHeader";
const Qt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e("tbody", { ref: o, className: n, ...t, children: a }));
Qt.displayName = "TableBody";
const Jt = T(
  ({ isHoverable: n = !0, className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: `${se.row} ${n ? se.hoverable : ""} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
Jt.displayName = "TableRow";
const Xt = T(
  ({ align: n = "left", className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: `${se.headCell} ${se[`align-${n}`]} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
Xt.displayName = "TableHead";
const Yt = T(
  ({ align: n = "left", isNumeric: a = !1, className: t, children: o, ...r }, l) => /* @__PURE__ */ e(
    "td",
    {
      ref: l,
      className: `${se.cell} ${se[`align-${n}`]} ${a ? se.tabularNums : ""} ${t || ""}`,
      ...r,
      children: o
    }
  )
);
Yt.displayName = "TableCell";
const Zt = "_overlay_cpmq9_1", ea = "_fadeIn_cpmq9_1", na = "_modal_cpmq9_15", ta = "_scaleIn_cpmq9_1", aa = "_header_cpmq9_44", ra = "_title_cpmq9_52", oa = "_closeButton_cpmq9_61", sa = "_body_cpmq9_84", ia = "_footer_cpmq9_93", de = {
  overlay: Zt,
  fadeIn: ea,
  modal: na,
  scaleIn: ta,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: aa,
  title: ra,
  closeButton: oa,
  body: sa,
  footer: ia
}, la = ({
  isOpen: n,
  onClose: a,
  title: t,
  size: o = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: l = !0,
  showCloseButton: c = !0,
  footer: i,
  children: d,
  className: h
}) => {
  const g = ue(), f = X(null);
  if (J(() => {
    if (!n) return;
    const p = (b) => {
      b.key === "Escape" && l && a();
    };
    return document.addEventListener("keydown", p), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    };
  }, [n, l, a]), !n) return null;
  const $ = (p) => {
    p.target === p.currentTarget && r && a();
  }, k = [de.modal, de[`size-${o}`], h || ""].filter(Boolean).join(" "), N = /* @__PURE__ */ e("div", { className: de.overlay, onClick: $, children: /* @__PURE__ */ s(
    "div",
    {
      ref: f,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": t ? g : void 0,
      tabIndex: -1,
      className: k,
      children: [
        (t || c) && /* @__PURE__ */ s("div", { className: de.header, children: [
          t && /* @__PURE__ */ e("h2", { id: g, className: de.title, children: t }),
          c && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: a,
              className: de.closeButton,
              children: /* @__PURE__ */ e(ye, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: de.body, children: d }),
        i && /* @__PURE__ */ e("div", { className: de.footer, children: i })
      ]
    }
  ) });
  return typeof document < "u" ? Be(N, document.body) : null;
};
la.displayName = "Modal";
const ca = ({
  className: n,
  children: a,
  ...t
}) => /* @__PURE__ */ e("div", { className: `${de.footer} ${n || ""}`, ...t, children: a });
ca.displayName = "ModalFooter";
const da = "_container_1lwtb_1", _a = "_navWrapper_1lwtb_7", ua = "_scrollContainer_1lwtb_16", ha = "_tabList_1lwtb_34", ma = "_tab_1lwtb_34", pa = "_tabActive_1lwtb_117", va = "_badge_1lwtb_145", ba = "_fullWidth_1lwtb_174", fa = "_scrollButton_1lwtb_183", ga = "_scrollButtonLeft_1lwtb_213", ya = "_scrollButtonRight_1lwtb_217", Na = "_hasScrollLeft_1lwtb_222", wa = "_hasScrollRight_1lwtb_238", ka = "_moreWrapper_1lwtb_257", $a = "_moreButton_1lwtb_264", xa = "_moreButtonActive_1lwtb_293", Ba = "_moreMenu_1lwtb_316", Ia = "_moreMenuItem_1lwtb_335", La = "_moreMenuItemActive_1lwtb_364", Ca = "_moreMenuItemLeft_1lwtb_375", Sa = "_panel_1lwtb_385", z = {
  container: da,
  navWrapper: _a,
  scrollContainer: ua,
  tabList: ha,
  "variant-underline": "_variant-underline_1lwtb_46",
  "variant-segmented": "_variant-segmented_1lwtb_57",
  tab: ma,
  "size-sm": "_size-sm_1lwtb_89",
  "size-md": "_size-md_1lwtb_95",
  "size-lg": "_size-lg_1lwtb_101",
  tabActive: pa,
  badge: va,
  fullWidth: ba,
  scrollButton: fa,
  scrollButtonLeft: ga,
  scrollButtonRight: ya,
  hasScrollLeft: Na,
  hasScrollRight: wa,
  moreWrapper: ka,
  moreButton: $a,
  moreButtonActive: xa,
  moreMenu: Ba,
  moreMenuItem: Ia,
  moreMenuItemActive: La,
  moreMenuItemLeft: Ca,
  panel: Sa
}, Ra = T(
  ({
    tabs: n,
    activeTab: a,
    defaultActiveTab: t,
    onChange: o,
    variant: r = "pill",
    size: l = "md",
    fullWidth: c = !1,
    scrollable: i = !1,
    showScrollButtons: d = !0,
    maxVisibleTabs: h,
    moreLabel: g = "More",
    className: f,
    children: $,
    ...k
  }, N) => {
    var S;
    const [p, b] = j(
      a || t || ((S = n[0]) == null ? void 0 : S.id) || ""
    ), _ = a !== void 0 ? a : p, M = X(null), R = X(/* @__PURE__ */ new Map()), I = X(null), [C, W] = j(!1), [G, E] = j(!1), [V, w] = j(!1), D = typeof h == "number" && h > 0 && n.length > h, P = D ? n.slice(0, h) : n, K = D ? n.slice(h) : [], ve = K.some(
      (m) => m.id === _
    );
    J(() => {
      if (!V) return;
      const m = (B) => {
        I.current && !I.current.contains(B.target) && w(!1);
      };
      return document.addEventListener("mousedown", m), () => {
        document.removeEventListener("mousedown", m);
      };
    }, [V]);
    const Z = Re(() => {
      const m = M.current;
      if (!m || !i) {
        W(!1), E(!1);
        return;
      }
      const { scrollLeft: B, scrollWidth: U, clientWidth: H } = m;
      W(B > 2), E(B + H < U - 2);
    }, [i]);
    J(() => {
      if (!i) return;
      const m = M.current;
      if (m)
        return Z(), m.addEventListener("scroll", Z, {
          passive: !0
        }), window.addEventListener("resize", Z), () => {
          m.removeEventListener("scroll", Z), window.removeEventListener("resize", Z);
        };
    }, [i, Z, P]), J(() => {
      if (!i) return;
      const m = R.current.get(_), B = M.current;
      if (m && B) {
        const U = m.getBoundingClientRect(), H = B.getBoundingClientRect();
        U.left < H.left ? B.scrollBy({
          left: U.left - H.left - 16,
          behavior: "smooth"
        }) : U.right > H.right && B.scrollBy({
          left: U.right - H.right + 16,
          behavior: "smooth"
        });
      }
    }, [_, i]);
    const he = (m, B) => {
      B || (a === void 0 && b(m), w(!1), o == null || o(m));
    }, y = (m) => {
      const B = n.filter((me) => !me.disabled);
      if (B.length === 0) return;
      const U = B.findIndex((me) => me.id === _);
      let H = -1;
      if (m.key === "ArrowRight" ? (m.preventDefault(), H = U < B.length - 1 ? U + 1 : 0) : m.key === "ArrowLeft" ? (m.preventDefault(), H = U > 0 ? U - 1 : B.length - 1) : m.key === "Home" ? (m.preventDefault(), H = 0) : m.key === "End" && (m.preventDefault(), H = B.length - 1), H >= 0) {
        const me = B[H];
        if (me) {
          he(me.id);
          const $e = R.current.get(me.id);
          $e == null || $e.focus();
        }
      }
    }, x = (m) => {
      const B = M.current;
      B && B.scrollBy({ left: m, behavior: "smooth" });
    }, Y = [
      z.container,
      C && z.hasScrollLeft,
      G && z.hasScrollRight,
      f || ""
    ].filter(Boolean).join(" "), u = [
      z.tabList,
      z[`variant-${r}`],
      c ? z.fullWidth : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("div", { ref: N, className: Y, ...k, children: [
      /* @__PURE__ */ s("div", { className: z.navWrapper, children: [
        i && d && C && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${z.scrollButton} ${z.scrollButtonLeft}`,
            "aria-label": "Scroll tabs left",
            onClick: () => x(-200),
            children: /* @__PURE__ */ e(Ie, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: M,
            className: i ? z.scrollContainer : void 0,
            children: /* @__PURE__ */ e(
              "div",
              {
                role: "tablist",
                className: u,
                onKeyDown: y,
                children: P.map((m) => {
                  const B = m.id === _, U = [
                    z.tab,
                    z[`size-${l}`],
                    B ? z.tabActive : ""
                  ].filter(Boolean).join(" ");
                  return /* @__PURE__ */ s(
                    "button",
                    {
                      ref: (H) => {
                        H ? R.current.set(m.id, H) : R.current.delete(m.id);
                      },
                      role: "tab",
                      type: "button",
                      tabIndex: B ? 0 : -1,
                      "aria-selected": B,
                      "aria-controls": `panel-${m.id}`,
                      id: `tab-${m.id}`,
                      disabled: m.disabled,
                      onClick: () => he(m.id, m.disabled),
                      className: U,
                      children: [
                        m.icon && /* @__PURE__ */ e("span", { children: m.icon }),
                        /* @__PURE__ */ e("span", { children: m.label }),
                        m.badge !== void 0 && /* @__PURE__ */ e("span", { className: z.badge, children: m.badge })
                      ]
                    },
                    m.id
                  );
                })
              }
            )
          }
        ),
        i && d && G && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${z.scrollButton} ${z.scrollButtonRight}`,
            "aria-label": "Scroll tabs right",
            onClick: () => x(200),
            children: /* @__PURE__ */ e(Oe, { size: 16 })
          }
        ),
        D && /* @__PURE__ */ s("div", { ref: I, className: z.moreWrapper, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [
                z.moreButton,
                z[`size-${l}`],
                ve ? z.moreButtonActive : ""
              ].filter(Boolean).join(" "),
              "aria-haspopup": "true",
              "aria-expanded": V,
              "aria-label": "More navigation tabs",
              onClick: () => w((m) => !m),
              children: [
                /* @__PURE__ */ e(Ge, { size: 16 }),
                /* @__PURE__ */ e("span", { children: g }),
                /* @__PURE__ */ e(pe, { size: 14 })
              ]
            }
          ),
          V && /* @__PURE__ */ e("div", { className: z.moreMenu, role: "menu", children: K.map((m) => {
            const B = m.id === _;
            return /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                role: "menuitem",
                disabled: m.disabled,
                className: [
                  z.moreMenuItem,
                  B ? z.moreMenuItemActive : ""
                ].filter(Boolean).join(" "),
                onClick: () => he(m.id, m.disabled),
                children: [
                  /* @__PURE__ */ s("span", { className: z.moreMenuItemLeft, children: [
                    m.icon && /* @__PURE__ */ e("span", { children: m.icon }),
                    /* @__PURE__ */ e("span", { children: m.label })
                  ] }),
                  B && /* @__PURE__ */ e(ge, { size: 14 }),
                  !B && m.badge !== void 0 && /* @__PURE__ */ e("span", { className: z.badge, children: m.badge })
                ]
              },
              m.id
            );
          }) })
        ] })
      ] }),
      $
    ] });
  }
);
Ra.displayName = "Tabs";
const qa = T(
  ({ tabId: n, activeTabId: a, className: t, children: o, ...r }, l) => n !== a ? null : /* @__PURE__ */ e(
    "div",
    {
      ref: l,
      role: "tabpanel",
      id: `panel-${n}`,
      "aria-labelledby": `tab-${n}`,
      tabIndex: 0,
      className: `${z.panel} ${t || ""}`,
      ...r,
      children: o
    }
  )
);
qa.displayName = "TabPanel";
const Da = "_container_1xroe_1", Ma = "_track_1xroe_10", za = "_thumb_1xroe_24", Aa = "_checked_1xroe_34", Ta = "_nativeInput_1xroe_43", Ea = "_label_1xroe_55", Pa = "_description_1xroe_61", Wa = "_textGroup_1xroe_66", ja = "_disabled_1xroe_72", le = {
  container: Da,
  track: Ma,
  thumb: za,
  checked: Aa,
  nativeInput: Ta,
  label: Ea,
  description: Pa,
  textGroup: Wa,
  disabled: ja
}, Oa = T(
  ({
    label: n,
    description: a,
    checked: t,
    defaultChecked: o,
    disabled: r = !1,
    className: l,
    onChange: c,
    ...i
  }, d) => {
    const h = t ?? o ?? !1, g = [
      le.container,
      h ? le.checked : "",
      r ? le.disabled : "",
      l || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("label", { className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: d,
          checked: t,
          defaultChecked: o,
          disabled: r,
          "aria-checked": h,
          className: le.nativeInput,
          onChange: c,
          ...i
        }
      ),
      /* @__PURE__ */ e("span", { className: le.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: le.thumb }) }),
      (n || a) && /* @__PURE__ */ s("span", { className: le.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: le.label, children: n }),
        a && /* @__PURE__ */ e("span", { className: le.description, children: a })
      ] })
    ] });
  }
);
Oa.displayName = "Switch";
const Ha = "_group_1e0nk_1", Fa = "_groupLabel_1e0nk_8", Ga = "_item_1e0nk_14", Va = "_circle_1e0nk_22", Ka = "_dot_1e0nk_35", Ua = "_checked_1e0nk_45", Qa = "_nativeInput_1e0nk_54", Ja = "_label_1e0nk_67", Xa = "_description_1e0nk_73", Ya = "_textGroup_1e0nk_78", Za = "_disabled_1e0nk_84", te = {
  group: Ha,
  groupLabel: Fa,
  item: Ga,
  circle: Va,
  dot: Ka,
  checked: Ua,
  nativeInput: Qa,
  label: Ja,
  description: Xa,
  textGroup: Ya,
  disabled: Za
}, Le = De(null), er = ({
  name: n,
  value: a,
  defaultValue: t,
  onChange: o,
  label: r,
  disabled: l = !1,
  className: c,
  children: i
}) => {
  const [d, h] = O.useState(
    a || t
  ), g = a !== void 0 ? a : d, f = ($) => {
    h($.target.value), o == null || o($.target.value);
  };
  return /* @__PURE__ */ e(
    Le.Provider,
    {
      value: {
        name: n,
        value: g,
        onChange: f,
        disabled: l
      },
      children: /* @__PURE__ */ s(
        "div",
        {
          role: "radiogroup",
          "aria-label": r,
          className: `${te.group} ${c || ""}`,
          children: [
            r && /* @__PURE__ */ e("span", { className: te.groupLabel, children: r }),
            i
          ]
        }
      )
    }
  );
};
er.displayName = "RadioGroup";
const nr = T(
  ({
    value: n,
    label: a,
    description: t,
    disabled: o,
    className: r,
    checked: l,
    onChange: c,
    ...i
  }, d) => {
    const h = qe(Le), g = h ? h.value === n : l, f = o || (h == null ? void 0 : h.disabled) || !1, $ = (h == null ? void 0 : h.name) || i.name, k = [
      te.item,
      g ? te.checked : "",
      f ? te.disabled : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("label", { className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          type: "radio",
          name: $,
          value: n,
          checked: g,
          disabled: f,
          onChange: (p) => {
            var b;
            c == null || c(p), (b = h == null ? void 0 : h.onChange) == null || b.call(h, p);
          },
          className: te.nativeInput,
          ...i
        }
      ),
      /* @__PURE__ */ e("span", { className: te.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: te.dot }) }),
      (a || t) && /* @__PURE__ */ s("span", { className: te.textGroup, children: [
        a && /* @__PURE__ */ e("span", { className: te.label, children: a }),
        t && /* @__PURE__ */ e("span", { className: te.description, children: t })
      ] })
    ] });
  }
);
nr.displayName = "Radio";
const tr = "_wrapper_yiqhg_1", ar = "_searchIcon_yiqhg_8", rr = "_input_yiqhg_18", or = "_rightSlots_yiqhg_42", sr = "_clearButton_yiqhg_50", ir = "_shortcut_yiqhg_66", be = {
  wrapper: tr,
  searchIcon: ar,
  input: rr,
  rightSlots: or,
  clearButton: sr,
  shortcut: ir
}, lr = ({
  ...n
}) => /* @__PURE__ */ s(
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
), cr = T(
  ({
    value: n,
    defaultValue: a,
    onChange: t,
    onClear: o,
    shortcutHint: r = "⌘K",
    placeholder: l = "Search records, students, classes...",
    className: c,
    ...i
  }, d) => {
    const [h, g] = j(
      n || a || ""
    ), f = n !== void 0, $ = f ? n : h, k = (p) => {
      f || g(p.target.value), t == null || t(p);
    }, N = () => {
      f || g(""), o == null || o();
    };
    return /* @__PURE__ */ s("div", { className: `${be.wrapper} ${c || ""}`, children: [
      /* @__PURE__ */ e("span", { className: be.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(lr, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          type: "search",
          value: $,
          placeholder: l,
          onChange: k,
          className: be.input,
          ...i
        }
      ),
      /* @__PURE__ */ s("div", { className: be.rightSlots, children: [
        $ && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: N,
            className: be.clearButton,
            children: /* @__PURE__ */ e(ye, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: be.shortcut, children: r })
      ] })
    ] });
  }
);
cr.displayName = "SearchInput";
const dr = "_card_kgob9_1", _r = "_topRow_kgob9_18", ur = "_title_kgob9_25", hr = "_iconSlot_kgob9_33", mr = "_metricRow_kgob9_49", pr = "_value_kgob9_55", vr = "_trendBadge_kgob9_65", br = "_description_kgob9_90", oe = {
  card: dr,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: _r,
  title: ur,
  iconSlot: hr,
  metricRow: mr,
  value: pr,
  trendBadge: vr,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: br
}, fr = ({
  title: n,
  value: a,
  description: t,
  trend: o,
  icon: r,
  highlighted: l = !1,
  className: c,
  ...i
}) => {
  const d = [
    oe.card,
    l ? oe["variant-highlight"] : "",
    c || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s("div", { className: d, ...i, children: [
    /* @__PURE__ */ s("div", { className: oe.topRow, children: [
      /* @__PURE__ */ e("h4", { className: oe.title, children: n }),
      r && /* @__PURE__ */ e("span", { className: oe.iconSlot, children: r })
    ] }),
    /* @__PURE__ */ s("div", { className: oe.metricRow, children: [
      /* @__PURE__ */ e("span", { className: oe.value, children: a }),
      o && /* @__PURE__ */ s(
        "span",
        {
          className: `${oe.trendBadge} ${oe[`trend-${o.direction}`]}`,
          children: [
            o.direction === "up" && "↑ ",
            o.direction === "down" && "↓ ",
            o.value
          ]
        }
      )
    ] }),
    t && /* @__PURE__ */ e("p", { className: oe.description, children: t })
  ] });
};
fr.displayName = "StatCard";
const gr = "_overlay_lam6o_1", yr = "_fadeIn_lam6o_1", Nr = "_drawer_lam6o_11", wr = "_slideInRight_lam6o_1", kr = "_slideInLeft_lam6o_1", $r = "_header_lam6o_51", xr = "_title_lam6o_59", Br = "_closeButton_lam6o_67", Ir = "_body_lam6o_90", Lr = "_footer_lam6o_99", ce = {
  overlay: gr,
  fadeIn: yr,
  drawer: Nr,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: wr,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: kr,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: $r,
  title: xr,
  closeButton: Br,
  body: Ir,
  footer: Lr
}, Cr = ({
  isOpen: n,
  onClose: a,
  title: t,
  placement: o = "right",
  size: r = "md",
  closeOnOverlayClick: l = !0,
  closeOnEsc: c = !0,
  showCloseButton: i = !0,
  footer: d,
  children: h,
  className: g
}) => {
  const f = ue(), $ = X(null);
  if (J(() => {
    if (!n) return;
    const b = (_) => {
      _.key === "Escape" && c && a();
    };
    return document.addEventListener("keydown", b), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", b), document.body.style.overflow = "";
    };
  }, [n, c, a]), !n) return null;
  const k = (b) => {
    b.target === b.currentTarget && l && a();
  }, N = [
    ce.drawer,
    ce[`placement-${o}`],
    ce[`size-${r}`],
    g || ""
  ].filter(Boolean).join(" "), p = /* @__PURE__ */ s(xe, { children: [
    /* @__PURE__ */ e("div", { className: ce.overlay, onClick: k }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: $,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": t ? f : void 0,
        tabIndex: -1,
        className: N,
        children: [
          (t || i) && /* @__PURE__ */ s("div", { className: ce.header, children: [
            t && /* @__PURE__ */ e("h3", { id: f, className: ce.title, children: t }),
            i && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: a,
                className: ce.closeButton,
                children: /* @__PURE__ */ e(ye, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: ce.body, children: h }),
          d && /* @__PURE__ */ e("div", { className: ce.footer, children: d })
        ]
      }
    )
  ] });
  return typeof document < "u" ? Be(p, document.body) : null;
};
Cr.displayName = "Drawer";
const Sr = "_chip_ldr6y_1", Rr = "_pill_ldr6y_14", qr = "_rounded_ldr6y_18", Dr = "_sm_ldr6y_22", Mr = "_md_ldr6y_36", zr = "_lg_ldr6y_45", Ar = "_neutral_ldr6y_55", Tr = "_primary_ldr6y_61", Er = "_tonal_ldr6y_68", Pr = "_outline_ldr6y_75", Wr = "_success_ldr6y_81", jr = "_warning_ldr6y_87", Or = "_danger_ldr6y_93", Hr = "_clickable_ldr6y_100", Fr = "_disabled_ldr6y_104", Gr = "_selected_ldr6y_104", Vr = "_selectedIcon_ldr6y_131", Kr = "_avatarSlot_ldr6y_139", Ur = "_hasAvatar_ldr6y_183", Qr = "_iconSlot_ldr6y_212", Jr = "_label_ldr6y_221", Xr = "_countBadge_ldr6y_230", Yr = "_removeButton_ldr6y_251", Q = {
  chip: Sr,
  pill: Rr,
  rounded: qr,
  sm: Dr,
  md: Mr,
  lg: zr,
  neutral: Ar,
  primary: Tr,
  tonal: Er,
  outline: Pr,
  success: Wr,
  warning: jr,
  danger: Or,
  clickable: Hr,
  disabled: Fr,
  selected: Gr,
  selectedIcon: Vr,
  avatarSlot: Kr,
  hasAvatar: Ur,
  iconSlot: Qr,
  label: Jr,
  countBadge: Xr,
  removeButton: Yr
}, Zr = ({
  label: n,
  avatar: a,
  icon: t,
  variant: o,
  size: r = "md",
  shape: l = "pill",
  selected: c = !1,
  count: i,
  onRemove: d,
  disabled: h = !1,
  className: g,
  onClick: f,
  ...$
}) => {
  const k = !!f && !h, N = o ?? (a ? "tonal" : "neutral"), p = [
    Q.chip,
    Q[N],
    Q[r],
    Q[l],
    a ? Q.hasAvatar : "",
    c ? Q.selected : "",
    k ? Q.clickable : "",
    d ? Q.removable : "",
    h ? Q.disabled : "",
    g || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(
    "div",
    {
      className: p,
      role: k ? "button" : "status",
      tabIndex: k ? 0 : void 0,
      onClick: k ? f : void 0,
      ...$,
      children: [
        c && /* @__PURE__ */ e("span", { className: Q.selectedIcon, children: /* @__PURE__ */ e(ge, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 }) }),
        !c && a && /* @__PURE__ */ e("span", { className: Q.avatarSlot, children: a }),
        !c && !a && t && /* @__PURE__ */ e("span", { className: Q.iconSlot, children: t }),
        /* @__PURE__ */ e("span", { className: Q.label, children: n }),
        i !== void 0 && /* @__PURE__ */ e("span", { className: Q.countBadge, children: i }),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${n}`,
            className: Q.removeButton,
            onClick: (b) => {
              b.stopPropagation(), !h && d && d();
            },
            disabled: h,
            children: /* @__PURE__ */ e(ye, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, eo = "_container_d3es0_1", no = "_label_d3es0_14", to = "_required_d3es0_24", ao = "_trigger_d3es0_29", ro = "_disabled_d3es0_50", oo = "_isOpen_d3es0_54", so = "_chipContainer_d3es0_72", io = "_searchInput_d3es0_81", lo = "_placeholder_d3es0_93", co = "_moreCount_d3es0_97", _o = "_trailing_d3es0_112", uo = "_clearAllButton_d3es0_119", ho = "_chevron_d3es0_137", mo = "_menu_d3es0_149", po = "_empty_d3es0_169", vo = "_option_d3es0_177", bo = "_focused_d3es0_193", fo = "_selected_d3es0_197", go = "_checkboxSlot_d3es0_206", yo = "_checkboxBox_d3es0_213", No = "_checkboxChecked_d3es0_226", wo = "_avatarSlot_d3es0_231", ko = "_iconSlot_d3es0_244", $o = "_labelCol_d3es0_251", xo = "_labelRow_d3es0_258", Bo = "_optionLabel_d3es0_265", Io = "_badge_d3es0_272", Lo = "_optionDescription_d3es0_300", Co = "_optionDisabled_d3es0_307", So = "_hasError_d3es0_314", Ro = "_errorText_d3es0_323", qo = "_helperText_d3es0_328", L = {
  container: eo,
  "size-sm": "_size-sm_d3es0_10",
  label: no,
  required: to,
  trigger: ao,
  disabled: ro,
  isOpen: oo,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: so,
  searchInput: io,
  placeholder: lo,
  moreCount: co,
  trailing: _o,
  clearAllButton: uo,
  chevron: ho,
  menu: mo,
  empty: po,
  option: vo,
  focused: bo,
  selected: fo,
  checkboxSlot: go,
  checkboxBox: yo,
  checkboxChecked: No,
  avatarSlot: wo,
  iconSlot: ko,
  labelCol: $o,
  labelRow: xo,
  optionLabel: Bo,
  badge: Io,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: Lo,
  optionDisabled: Co,
  hasError: So,
  errorText: Ro,
  helperText: qo
}, Ti = ({
  label: n,
  placeholder: a = "Select items...",
  helperText: t,
  errorMessage: o,
  options: r,
  value: l,
  defaultValue: c,
  onChange: i,
  size: d = "md",
  chipShape: h,
  disabled: g = !1,
  isRequired: f = !1,
  isSearchable: $ = !0,
  className: k,
  id: N,
  maxDisplayedChips: p
}) => {
  const b = ue(), _ = N || b, M = X(null), R = X(null), [I, C] = j(!1), [W, G] = j(""), [E, V] = j(
    l || c || []
  ), [w, D] = j(-1);
  J(() => {
    l !== void 0 && V(l);
  }, [l]);
  const P = fe(() => r.filter((u) => E.includes(u.value)), [r, E]), K = fe(() => {
    if (!W.trim()) return r;
    const u = W.toLowerCase();
    return r.filter(
      (S) => S.label.toLowerCase().includes(u) || S.description && S.description.toLowerCase().includes(u) || S.badge && S.badge.toLowerCase().includes(u)
    );
  }, [r, W]);
  J(() => {
    const u = (S) => {
      M.current && !M.current.contains(S.target) && (C(!1), G(""), D(-1));
    };
    return I && document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [I]);
  const ve = (u) => {
    if (u.disabled || g) return;
    let S;
    E.includes(u.value) ? S = E.filter((B) => B !== u.value) : S = [...E, u.value], l === void 0 && V(S);
    const m = r.filter((B) => S.includes(B.value));
    i == null || i(S, m);
  }, Z = (u) => {
    if (g) return;
    const S = E.filter((B) => B !== u);
    l === void 0 && V(S);
    const m = r.filter((B) => S.includes(B.value));
    i == null || i(S, m);
  }, he = (u) => {
    if (!g) {
      if (u.key === "Backspace" && W === "" && E.length > 0) {
        Z(E[E.length - 1]);
        return;
      }
      if (!I) {
        (u.key === "Enter" || u.key === " " || u.key === "ArrowDown") && (u.preventDefault(), C(!0));
        return;
      }
      u.key === "Escape" ? (u.preventDefault(), C(!1), G("")) : u.key === "ArrowDown" ? (u.preventDefault(), D(
        (S) => S < K.length - 1 ? S + 1 : 0
      )) : u.key === "ArrowUp" ? (u.preventDefault(), D(
        (S) => S > 0 ? S - 1 : K.length - 1
      )) : u.key === "Enter" && w >= 0 && w < K.length && (u.preventDefault(), ve(K[w]));
    }
  }, y = p ? P.slice(0, p) : P, x = p ? Math.max(0, P.length - p) : 0, Y = !!o;
  return /* @__PURE__ */ s(
    "div",
    {
      ref: M,
      className: [
        L.container,
        L[`size-${d}`],
        I ? L.isOpen : "",
        g ? L.disabled : "",
        Y ? L.hasError : "",
        k || ""
      ].filter(Boolean).join(" "),
      onKeyDown: he,
      children: [
        n && /* @__PURE__ */ s("label", { id: `${_}-label`, className: L.label, children: [
          n,
          f && /* @__PURE__ */ e("span", { className: L.required, children: "*" })
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: L.trigger,
            onClick: () => {
              g || (C(!I), !I && $ && setTimeout(() => {
                var u;
                return (u = R.current) == null ? void 0 : u.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": I,
            "aria-haspopup": "listbox",
            "aria-labelledby": n ? `${_}-label` : void 0,
            children: [
              /* @__PURE__ */ s("div", { className: L.chipContainer, children: [
                y.map((u) => /* @__PURE__ */ e(
                  Zr,
                  {
                    label: u.label,
                    variant: "tonal",
                    shape: h || (u.avatar ? "pill" : "rounded"),
                    size: d === "sm" ? "sm" : d === "lg" ? "lg" : "md",
                    avatar: u.avatar ? /* @__PURE__ */ e(
                      Ne,
                      {
                        size: d === "sm" ? "xs" : d === "lg" ? "md" : "xs",
                        name: u.label,
                        ...u.avatar
                      }
                    ) : void 0,
                    icon: u.icon,
                    onRemove: () => Z(u.value),
                    disabled: g
                  },
                  u.value
                )),
                x > 0 && /* @__PURE__ */ s("span", { className: L.moreCount, children: [
                  "+",
                  x,
                  " more"
                ] }),
                $ ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: R,
                    type: "text",
                    className: L.searchInput,
                    placeholder: P.length === 0 ? a : "",
                    value: W,
                    onChange: (u) => {
                      G(u.target.value), I || C(!0);
                    },
                    onClick: (u) => u.stopPropagation(),
                    disabled: g
                  }
                ) : P.length === 0 && /* @__PURE__ */ e("span", { className: L.placeholder, children: a })
              ] }),
              /* @__PURE__ */ s("div", { className: L.trailing, children: [
                E.length > 0 && !g && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: L.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (u) => {
                      u.stopPropagation(), l === void 0 && V([]), i == null || i([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: L.chevron, children: /* @__PURE__ */ e(pe, { size: 14 }) })
              ] })
            ]
          }
        ),
        I && /* @__PURE__ */ e("div", { className: L.menu, role: "listbox", "aria-multiselectable": "true", children: K.length === 0 ? /* @__PURE__ */ e("div", { className: L.empty, children: "No matches found" }) : K.map((u, S) => {
          const m = E.includes(u.value), B = S === w;
          return /* @__PURE__ */ s(
            "div",
            {
              role: "option",
              "aria-selected": m,
              "aria-disabled": u.disabled,
              className: [
                L.option,
                m ? L.selected : "",
                B ? L.focused : "",
                u.disabled ? L.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (U) => {
                U.stopPropagation(), ve(u);
              },
              onMouseEnter: () => D(S),
              children: [
                /* @__PURE__ */ e("div", { className: L.checkboxSlot, children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: [
                      L.checkboxBox,
                      m ? L.checkboxChecked : ""
                    ].join(" "),
                    children: m && /* @__PURE__ */ e(ge, { size: 11 })
                  }
                ) }),
                u.avatar && /* @__PURE__ */ e("div", { className: L.avatarSlot, children: /* @__PURE__ */ e(Ne, { size: "sm", name: u.label, ...u.avatar }) }),
                !u.avatar && u.icon && /* @__PURE__ */ e("div", { className: L.iconSlot, children: u.icon }),
                /* @__PURE__ */ s("div", { className: L.labelCol, children: [
                  /* @__PURE__ */ s("div", { className: L.labelRow, children: [
                    /* @__PURE__ */ e("span", { className: L.optionLabel, children: u.label }),
                    u.badge && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          L.badge,
                          L[`badge-${u.badgeVariant || "primary"}`]
                        ].join(" "),
                        children: u.badge
                      }
                    )
                  ] }),
                  u.description && /* @__PURE__ */ e("div", { className: L.optionDescription, children: u.description })
                ] })
              ]
            },
            u.value
          );
        }) }),
        o && /* @__PURE__ */ e("span", { className: L.errorText, children: o }),
        !o && t && /* @__PURE__ */ e("span", { className: L.helperText, children: t })
      ]
    }
  );
}, Do = "_container_1nphi_1", Mo = "_label_1nphi_10", zo = "_required_1nphi_20", Ao = "_trigger_1nphi_25", To = "_disabled_1nphi_45", Eo = "_isOpen_1nphi_49", Po = "_searchIcon_1nphi_55", Wo = "_input_1nphi_63", jo = "_clearButton_1nphi_81", Oo = "_chevron_1nphi_98", Ho = "_menu_1nphi_110", Fo = "_optionsList_1nphi_129", Go = "_groupBlock_1nphi_135", Vo = "_groupHeader_1nphi_140", Ko = "_option_1nphi_129", Uo = "_focused_1nphi_174", Qo = "_selected_1nphi_178", Jo = "_optionContent_1nphi_182", Xo = "_optionIcon_1nphi_190", Yo = "_optionLabel_1nphi_197", Zo = "_highlight_1nphi_206", es = "_optionBadge_1nphi_211", ns = "_optionDisabled_1nphi_223", ts = "_emptyFallback_1nphi_230", as = "_emptyIcon_1nphi_240", rs = "_emptyTitle_1nphi_254", os = "_emptySubtitle_1nphi_260", ss = "_footerGuide_1nphi_267", is = "_hasError_1nphi_280", ls = "_errorText_1nphi_289", cs = "_helperText_1nphi_294", q = {
  container: Do,
  label: Mo,
  required: zo,
  trigger: Ao,
  disabled: To,
  isOpen: Eo,
  searchIcon: Po,
  input: Wo,
  clearButton: jo,
  chevron: Oo,
  menu: Ho,
  optionsList: Fo,
  groupBlock: Go,
  groupHeader: Vo,
  option: Ko,
  focused: Uo,
  selected: Qo,
  optionContent: Jo,
  optionIcon: Xo,
  optionLabel: Yo,
  highlight: Zo,
  optionBadge: es,
  optionDisabled: ns,
  emptyFallback: ts,
  emptyIcon: as,
  emptyTitle: rs,
  emptySubtitle: os,
  footerGuide: ss,
  hasError: is,
  errorText: ls,
  helperText: cs
}, Ei = ({
  label: n,
  placeholder: a = "Search entities...",
  helperText: t,
  errorMessage: o,
  options: r,
  value: l,
  defaultValue: c,
  onChange: i,
  disabled: d = !1,
  isRequired: h = !1,
  className: g,
  id: f
}) => {
  const $ = ue(), k = f || $, N = X(null), p = X(null), [b, _] = j(!1), [M, R] = j(
    l || c || ""
  ), [I, C] = j(""), [W, G] = j(-1);
  J(() => {
    l !== void 0 && R(l);
  }, [l]);
  const E = fe(() => r.find((y) => y.value === M), [r, M]);
  J(() => {
    !b && E ? C(E.label) : !b && !E && C("");
  }, [b, E]);
  const V = fe(() => {
    if (!I.trim()) return r;
    const y = I.toLowerCase();
    return r.filter(
      (x) => x.label.toLowerCase().includes(y) || x.group && x.group.toLowerCase().includes(y) || x.badge && x.badge.toLowerCase().includes(y)
    );
  }, [r, I]), w = fe(() => {
    const y = {};
    return V.forEach((x) => {
      const Y = x.group || "";
      y[Y] || (y[Y] = []), y[Y].push(x);
    }), y;
  }, [V]), D = fe(() => {
    const y = [];
    return Object.keys(w).forEach((x) => {
      y.push(...w[x]);
    }), y;
  }, [w]);
  J(() => {
    const y = (x) => {
      N.current && !N.current.contains(x.target) && (_(!1), G(-1));
    };
    return b && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [b]);
  const P = (y) => {
    y.disabled || d || (l === void 0 && R(y.value), C(y.label), _(!1), G(-1), i == null || i(y.value, y));
  }, K = (y) => {
    var x;
    y.stopPropagation(), C(""), l === void 0 && R(""), i == null || i("", void 0), (x = p.current) == null || x.focus();
  }, ve = (y) => {
    if (!d) {
      if (!b) {
        (y.key === "ArrowDown" || y.key === "Enter") && (y.preventDefault(), _(!0));
        return;
      }
      y.key === "Escape" ? (y.preventDefault(), _(!1), G(-1)) : y.key === "ArrowDown" ? (y.preventDefault(), G((x) => x < D.length - 1 ? x + 1 : 0)) : y.key === "ArrowUp" ? (y.preventDefault(), G((x) => x > 0 ? x - 1 : D.length - 1)) : y.key === "Enter" && W >= 0 && W < D.length && (y.preventDefault(), P(D[W]));
    }
  }, Z = (y, x) => {
    if (!x.trim()) return y;
    const Y = y.split(new RegExp(`(${x})`, "gi"));
    return /* @__PURE__ */ e(xe, { children: Y.map(
      (u, S) => u.toLowerCase() === x.toLowerCase() ? /* @__PURE__ */ e("span", { className: q.highlight, children: u }, S) : u
    ) });
  }, he = !!o;
  return /* @__PURE__ */ s(
    "div",
    {
      ref: N,
      className: [
        q.container,
        b ? q.isOpen : "",
        d ? q.disabled : "",
        he ? q.hasError : "",
        g || ""
      ].filter(Boolean).join(" "),
      onKeyDown: ve,
      children: [
        n && /* @__PURE__ */ s("label", { id: `${k}-label`, className: q.label, children: [
          n,
          h && /* @__PURE__ */ e("span", { className: q.required, children: "*" })
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: q.trigger,
            onClick: () => {
              var y;
              d || (_(!0), (y = p.current) == null || y.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: q.searchIcon, children: /* @__PURE__ */ e(Fe, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: p,
                  id: k,
                  type: "text",
                  className: q.input,
                  placeholder: a,
                  value: I,
                  role: "combobox",
                  "aria-expanded": b,
                  "aria-autocomplete": "list",
                  "aria-controls": `${k}-popup`,
                  disabled: d,
                  onChange: (y) => {
                    C(y.target.value), b || _(!0);
                  },
                  onFocus: () => _(!0)
                }
              ),
              I && !d && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: q.clearButton,
                  "aria-label": "Clear query",
                  onClick: K,
                  children: /* @__PURE__ */ e(ye, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: q.chevron, children: /* @__PURE__ */ e(pe, { size: 14 }) })
            ]
          }
        ),
        b && /* @__PURE__ */ s("div", { id: `${k}-popup`, className: q.menu, role: "listbox", children: [
          D.length === 0 ? /* @__PURE__ */ s("div", { className: q.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: q.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: q.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: q.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: q.optionsList, children: Object.keys(w).map((y) => /* @__PURE__ */ s(
            "div",
            {
              className: q.groupBlock,
              children: [
                y && /* @__PURE__ */ e("div", { className: q.groupHeader, children: y }),
                w[y].map((x) => {
                  const Y = x.value === M, u = D.indexOf(x), S = u === W;
                  return /* @__PURE__ */ s(
                    "div",
                    {
                      role: "option",
                      "aria-selected": Y,
                      "aria-disabled": x.disabled,
                      className: [
                        q.option,
                        Y ? q.selected : "",
                        S ? q.focused : "",
                        x.disabled ? q.optionDisabled : ""
                      ].filter(Boolean).join(" "),
                      onClick: (m) => {
                        m.stopPropagation(), P(x);
                      },
                      onMouseEnter: () => G(u),
                      children: [
                        /* @__PURE__ */ s("div", { className: q.optionContent, children: [
                          x.icon && /* @__PURE__ */ e("span", { className: q.optionIcon, children: x.icon }),
                          /* @__PURE__ */ e("span", { className: q.optionLabel, children: Z(x.label, I) })
                        ] }),
                        x.badge && /* @__PURE__ */ e("span", { className: q.optionBadge, children: x.badge })
                      ]
                    },
                    x.value
                  );
                })
              ]
            },
            y || "default-group"
          )) }),
          /* @__PURE__ */ s("div", { className: q.footerGuide, children: [
            /* @__PURE__ */ e("span", { children: "↵ Enter to select" }),
            /* @__PURE__ */ e("span", { children: "Esc to dismiss" })
          ] })
        ] }),
        o && /* @__PURE__ */ e("span", { className: q.errorText, children: o }),
        !o && t && /* @__PURE__ */ e("span", { className: q.helperText, children: t })
      ]
    }
  );
}, ds = O.forwardRef(
  ({ className: n = "", children: a, ...t }, o) => /* @__PURE__ */ e("div", { ref: o, className: `ui-page-shell ${n}`.trim(), ...t, children: a })
);
ds.displayName = "PageShell";
const we = O.forwardRef(
  ({ maxWidth: n = "standard", as: a = "div", className: t = "", children: o, ...r }, l) => {
    const c = a, i = `ui-container--${n}`;
    return /* @__PURE__ */ e(
      c,
      {
        ref: l,
        className: `ui-container ${i} ${t}`.trim(),
        ...r,
        children: o
      }
    );
  }
);
we.displayName = "PageContainer";
const _s = O.forwardRef(
  ({ as: n = "main", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    n,
    {
      ref: r,
      className: `ui-page-body ${a}`.trim(),
      ...o,
      children: t
    }
  )
);
_s.displayName = "PageBody";
const us = O.forwardRef(
  ({ containerMaxWidth: n = "standard", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    "header",
    {
      ref: r,
      className: `ui-page-header ${a}`.trim(),
      ...o,
      children: /* @__PURE__ */ e(we, { maxWidth: n, children: /* @__PURE__ */ e("div", { className: "ui-page-header__inner", children: t }) })
    }
  )
);
us.displayName = "PageHeader";
const hs = O.forwardRef(
  ({ containerMaxWidth: n = "standard", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `ui-subnav-strip ${a}`.trim(),
      ...o,
      children: /* @__PURE__ */ e(we, { maxWidth: n, children: /* @__PURE__ */ e("div", { className: "ui-subnav-strip__inner", children: t }) })
    }
  )
);
hs.displayName = "SubNavStrip";
const ms = O.forwardRef(
  ({
    title: n,
    subtitle: a,
    actions: t,
    containerMaxWidth: o = "standard",
    className: r = "",
    ...l
  }, c) => /* @__PURE__ */ e(
    "section",
    {
      ref: c,
      className: `ui-page-hero ${r}`.trim(),
      ...l,
      children: /* @__PURE__ */ e(we, { maxWidth: o, children: /* @__PURE__ */ s("div", { className: "ui-page-hero__inner", children: [
        /* @__PURE__ */ s("div", { className: "ui-page-hero__title-group", children: [
          /* @__PURE__ */ e("h1", { className: "ui-page-hero__title", children: n }),
          a && /* @__PURE__ */ e("p", { className: "ui-page-hero__subtitle", children: a })
        ] }),
        t && /* @__PURE__ */ e("div", { className: "ui-page-hero__actions", children: t })
      ] }) })
    }
  )
);
ms.displayName = "PageHero";
const ps = O.forwardRef(
  ({ className: n = "", children: a, ...t }, o) => /* @__PURE__ */ e("div", { ref: o, className: `ui-card-slot ${n}`.trim(), ...t, children: a })
);
ps.displayName = "CardSlot";
const vs = O.forwardRef(
  ({ containerMaxWidth: n = "standard", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    "footer",
    {
      ref: r,
      className: `ui-page-footer ${a}`.trim(),
      ...o,
      children: /* @__PURE__ */ e(we, { maxWidth: n, children: /* @__PURE__ */ e("div", { className: "ui-page-footer__inner", children: t }) })
    }
  )
);
vs.displayName = "PageFooter";
const bs = "_bottomNavigation_t6ov9_6", fs = "_bottomNavItem_t6ov9_22", gs = "_bottomNavItemActive_t6ov9_51", ys = "_bottomNavIconWrapper_t6ov9_59", Ns = "_bottomNavActivePill_t6ov9_67", ws = "_bottomNavLabel_t6ov9_78", ks = "_bottomNavBadge_t6ov9_90", $s = "_navigationRail_t6ov9_113", xs = "_navigationRailHorizontal_t6ov9_125", Bs = "_navigationRailDark_t6ov9_133", Is = "_navigationRailLight_t6ov9_140", Ls = "_navigationRailDocked_t6ov9_147", Cs = "_railBrandSlot_t6ov9_152", Ss = "_railBrandIcon_t6ov9_163", Rs = "_railBrandTitle_t6ov9_177", qs = "_railItemsStack_t6ov9_183", Ds = "_railItem_t6ov9_183", Ms = "_railItemActive_t6ov9_230", zs = "_railItemBadge_t6ov9_254", As = "_railFooterSlot_t6ov9_272", Ts = "_breadcrumb_t6ov9_289", Es = "_breadcrumbPrimary_t6ov9_294", Ps = "_breadcrumbSubtle_t6ov9_302", Ws = "_breadcrumbPlain_t6ov9_309", js = "_breadcrumbList_t6ov9_316", Os = "_breadcrumbItem_t6ov9_329", Hs = "_breadcrumbLink_t6ov9_335", Fs = "_breadcrumbCurrent_t6ov9_349", Gs = "_breadcrumbSeparator_t6ov9_360", Vs = "_mobileWayfinding_t6ov9_369", Ks = "_wayfindingHeaderRow_t6ov9_380", Us = "_wayfindingBackBtn_t6ov9_387", Qs = "_wayfindingBackIcon_t6ov9_408", Js = "_wayfindingCurrentTrigger_t6ov9_413", Xs = "_wayfindingCurrentLabel_t6ov9_433", Ys = "_wayfindingCurrentIcon_t6ov9_439", Zs = "_wayfindingCurrentIconOpen_t6ov9_446", ei = "_wayfindingPopover_t6ov9_450", ni = "_wayfindingPopoverMeta_t6ov9_460", ti = "_wayfindingPopoverAction_t6ov9_470", ai = "_wayfindingPathList_t6ov9_475", ri = "_wayfindingPathItem_t6ov9_481", oi = "_wayfindingPathItemActive_t6ov9_502", si = "_appNavbar_t6ov9_511", ii = "_navbarLeft_t6ov9_526", li = "_navbarBrand_t6ov9_532", ci = "_navbarBrandLogo_t6ov9_541", di = "_navbarBrandTitles_t6ov9_556", _i = "_navbarBrandName_t6ov9_561", ui = "_navbarBrandSubtitle_t6ov9_569", hi = "_navbarMenu_t6ov9_575", mi = "_navbarMenuItem_t6ov9_584", pi = "_navbarMenuLink_t6ov9_588", vi = "_navbarMenuLinkActive_t6ov9_617", bi = "_navbarDropdown_t6ov9_624", fi = "_navbarDropdownItem_t6ov9_643", gi = "_navbarRight_t6ov9_673", yi = "_navbarMobileToggle_t6ov9_679", Ni = "_navbarMobileDrawer_t6ov9_692", wi = "_navbarMobileDrawerContent_t6ov9_705", v = {
  bottomNavigation: bs,
  bottomNavItem: fs,
  bottomNavItemActive: gs,
  bottomNavIconWrapper: ys,
  bottomNavActivePill: Ns,
  bottomNavLabel: ws,
  bottomNavBadge: ks,
  navigationRail: $s,
  navigationRailHorizontal: xs,
  navigationRailDark: Bs,
  navigationRailLight: Is,
  navigationRailDocked: Ls,
  railBrandSlot: Cs,
  railBrandIcon: Ss,
  railBrandTitle: Rs,
  railItemsStack: qs,
  railItem: Ds,
  railItemActive: Ms,
  railItemBadge: zs,
  railFooterSlot: As,
  breadcrumb: Ts,
  breadcrumbPrimary: Es,
  breadcrumbSubtle: Ps,
  breadcrumbPlain: Ws,
  breadcrumbList: js,
  breadcrumbItem: Os,
  breadcrumbLink: Hs,
  breadcrumbCurrent: Fs,
  breadcrumbSeparator: Gs,
  mobileWayfinding: Vs,
  wayfindingHeaderRow: Ks,
  wayfindingBackBtn: Us,
  wayfindingBackIcon: Qs,
  wayfindingCurrentTrigger: Js,
  wayfindingCurrentLabel: Xs,
  wayfindingCurrentIcon: Ys,
  wayfindingCurrentIconOpen: Zs,
  wayfindingPopover: ei,
  wayfindingPopoverMeta: ni,
  wayfindingPopoverAction: ti,
  wayfindingPathList: ai,
  wayfindingPathItem: ri,
  wayfindingPathItemActive: oi,
  appNavbar: si,
  navbarLeft: ii,
  navbarBrand: li,
  navbarBrandLogo: ci,
  navbarBrandTitles: di,
  navbarBrandName: _i,
  navbarBrandSubtitle: ui,
  navbarMenu: hi,
  navbarMenuItem: mi,
  navbarMenuLink: pi,
  navbarMenuLinkActive: vi,
  navbarDropdown: bi,
  navbarDropdownItem: fi,
  navbarRight: gi,
  navbarMobileToggle: yi,
  navbarMobileDrawer: Ni,
  navbarMobileDrawerContent: wi
}, Ce = O.forwardRef(
  ({
    id: n,
    label: a,
    icon: t,
    activeIcon: o,
    badge: r,
    isActive: l = !1,
    className: c = "",
    onClick: i,
    ...d
  }, h) => /* @__PURE__ */ s(
    "button",
    {
      ref: h,
      type: "button",
      role: "tab",
      "aria-selected": l,
      "data-testid": `bottom-nav-item-${n}`,
      className: `${v.bottomNavItem} ${l ? v.bottomNavItemActive : ""} ${c}`.trim(),
      onClick: i,
      ...d,
      children: [
        /* @__PURE__ */ s("div", { className: v.bottomNavIconWrapper, children: [
          l ? /* @__PURE__ */ e("div", { className: v.bottomNavActivePill, children: o || t }) : t,
          r != null && /* @__PURE__ */ e("span", { className: v.bottomNavBadge, children: r })
        ] }),
        /* @__PURE__ */ e("span", { className: v.bottomNavLabel, children: a })
      ]
    }
  )
);
Ce.displayName = "BottomNavigationItem";
const ki = O.forwardRef(({ value: n, onChange: a, items: t, children: o, className: r = "", ...l }, c) => /* @__PURE__ */ e(
  "nav",
  {
    ref: c,
    role: "tablist",
    "aria-label": "Mobile Navigation",
    className: `${v.bottomNavigation} ${r}`.trim(),
    ...l,
    children: t ? t.map((i) => /* @__PURE__ */ e(
      Ce,
      {
        id: i.id,
        label: i.label,
        icon: i.icon,
        activeIcon: i.activeIcon,
        badge: i.badge,
        isActive: n === i.id,
        onClick: () => a == null ? void 0 : a(i.id)
      },
      i.id
    )) : o
  }
));
ki.displayName = "BottomNavigation";
const Se = O.forwardRef(
  ({
    id: n,
    icon: a,
    title: t,
    badge: o,
    isActive: r = !1,
    className: l = "",
    onClick: c,
    ...i
  }, d) => /* @__PURE__ */ s(
    "button",
    {
      ref: d,
      type: "button",
      title: t,
      "aria-label": t || n,
      "aria-current": r ? "page" : void 0,
      "data-testid": `rail-item-${n}`,
      className: `${v.railItem} ${r ? v.railItemActive : ""} ${l}`.trim(),
      onClick: c,
      ...i,
      children: [
        a,
        o != null && /* @__PURE__ */ e("span", { className: v.railItemBadge, children: o })
      ]
    }
  )
);
Se.displayName = "NavigationRailItem";
const $i = O.forwardRef(
  ({
    theme: n = "dark",
    orientation: a = "vertical",
    isDocked: t = !1,
    brand: o,
    brandTitle: r,
    footer: l,
    value: c,
    onChange: i,
    items: d,
    children: h,
    className: g = "",
    ...f
  }, $) => {
    const k = n === "dark" ? v.navigationRailDark : v.navigationRailLight, N = a === "horizontal" ? v.navigationRailHorizontal : "", p = t ? v.navigationRailDocked : "";
    return /* @__PURE__ */ s(
      "aside",
      {
        ref: $,
        "aria-label": "Navigation Rail",
        className: `${v.navigationRail} ${k} ${N} ${p} ${g}`.trim(),
        ...f,
        children: [
          o && /* @__PURE__ */ s("div", { className: v.railBrandSlot, children: [
            typeof o == "string" ? /* @__PURE__ */ e("div", { className: v.railBrandIcon, children: o }) : o,
            r && a === "horizontal" && /* @__PURE__ */ e("span", { className: v.railBrandTitle, children: r })
          ] }),
          /* @__PURE__ */ e("div", { className: v.railItemsStack, children: d ? d.map((b) => /* @__PURE__ */ e(
            Se,
            {
              id: b.id,
              icon: b.icon,
              title: b.title,
              badge: b.badge,
              isActive: c === b.id,
              onClick: () => i == null ? void 0 : i(b.id)
            },
            b.id
          )) : h }),
          l && /* @__PURE__ */ e("div", { className: v.railFooterSlot, children: l })
        ]
      }
    );
  }
);
$i.displayName = "NavigationRail";
const xi = O.forwardRef(
  ({
    variant: n = "primary",
    separator: a = "/",
    items: t,
    children: o,
    className: r = "",
    ...l
  }, c) => {
    let i = v.breadcrumbPrimary;
    return n === "subtle" && (i = v.breadcrumbSubtle), n === "plain" && (i = v.breadcrumbPlain), /* @__PURE__ */ e(
      "nav",
      {
        ref: c,
        "aria-label": "Breadcrumb Trail",
        className: `${v.breadcrumb} ${i} ${r}`.trim(),
        ...l,
        children: /* @__PURE__ */ e("ol", { className: v.breadcrumbList, children: t ? t.map((d, h) => {
          const g = h === t.length - 1, f = d.isCurrent ?? g;
          return /* @__PURE__ */ s("li", { className: v.breadcrumbItem, children: [
            f ? /* @__PURE__ */ s(
              "span",
              {
                "aria-current": "page",
                className: v.breadcrumbCurrent,
                children: [
                  d.icon,
                  d.label
                ]
              }
            ) : /* @__PURE__ */ s(
              "a",
              {
                href: d.href || "#",
                className: v.breadcrumbLink,
                onClick: ($) => {
                  d.onClick && ($.preventDefault(), d.onClick());
                },
                children: [
                  d.icon,
                  d.label
                ]
              }
            ),
            !g && /* @__PURE__ */ e(
              "span",
              {
                className: v.breadcrumbSeparator,
                "aria-hidden": "true",
                children: a
              }
            )
          ] }, d.id);
        }) : o })
      }
    );
  }
);
xi.displayName = "Breadcrumb";
const Bi = O.forwardRef(
  ({
    parentLabel: n,
    onBack: a,
    currentLabel: t,
    path: o,
    currentStepIndex: r,
    totalSteps: l,
    onStepClick: c,
    className: i = "",
    ...d
  }, h) => {
    const [g, f] = j(!1), $ = X(null);
    J(() => {
      const p = (b) => {
        $.current && !$.current.contains(b.target) && f(!1);
      };
      return g && document.addEventListener("mousedown", p), () => {
        document.removeEventListener("mousedown", p);
      };
    }, [g]);
    const k = l || (o ? o.length : 1), N = r !== void 0 ? r : k;
    return /* @__PURE__ */ s(
      "div",
      {
        ref: (p) => {
          $.current = p, typeof h == "function" ? h(p) : h && (h.current = p);
        },
        className: `${v.mobileWayfinding} ${i}`.trim(),
        ...d,
        children: [
          /* @__PURE__ */ s("div", { className: v.wayfindingHeaderRow, children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: v.wayfindingBackBtn,
                onClick: a,
                "aria-label": `Go back to ${n}`,
                children: [
                  /* @__PURE__ */ e(Ie, { className: v.wayfindingBackIcon, size: 14 }),
                  /* @__PURE__ */ e("span", { children: n })
                ]
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: v.wayfindingCurrentTrigger,
                onClick: () => f((p) => !p),
                "aria-expanded": g,
                "aria-haspopup": "true",
                children: [
                  /* @__PURE__ */ e("span", { className: v.wayfindingCurrentLabel, children: t }),
                  /* @__PURE__ */ e(
                    pe,
                    {
                      className: `${v.wayfindingCurrentIcon} ${g ? v.wayfindingCurrentIconOpen : ""}`,
                      size: 14
                    }
                  )
                ]
              }
            )
          ] }),
          g && o && o.length > 0 && /* @__PURE__ */ s("div", { className: v.wayfindingPopover, children: [
            /* @__PURE__ */ s("div", { className: v.wayfindingPopoverMeta, children: [
              /* @__PURE__ */ s("span", { children: [
                "Current Hierarchy Path (",
                N,
                " of ",
                k,
                ")"
              ] }),
              /* @__PURE__ */ e("span", { className: v.wayfindingPopoverAction, children: "Tap to Jump" })
            ] }),
            /* @__PURE__ */ e("div", { className: v.wayfindingPathList, children: o.map((p, b) => {
              const _ = b === N - 1;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: `${v.wayfindingPathItem} ${_ ? v.wayfindingPathItemActive : ""}`,
                  onClick: () => {
                    c == null || c(p, b), f(!1);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { children: [
                      b + 1,
                      ". ",
                      p.label
                    ] }),
                    _ && /* @__PURE__ */ e(ge, { size: 12 })
                  ]
                },
                p.id
              );
            }) })
          ] })
        ]
      }
    );
  }
);
Bi.displayName = "MobileWayfinding";
const Ii = O.forwardRef(
  ({
    brandLogo: n,
    brandName: a,
    brandSubtitle: t,
    brandHref: o = "#",
    menuItems: r,
    activeItemId: l,
    onItemClick: c,
    actions: i,
    children: d,
    className: h = "",
    ...g
  }, f) => {
    const [$, k] = j(null), [N, p] = j(!1), b = X(null);
    return J(() => {
      const _ = (M) => {
        b.current && !b.current.contains(M.target) && k(null);
      };
      return $ && document.addEventListener("mousedown", _), () => {
        document.removeEventListener("mousedown", _);
      };
    }, [$]), /* @__PURE__ */ s(
      "header",
      {
        ref: (_) => {
          b.current = _, typeof f == "function" ? f(_) : f && (f.current = _);
        },
        className: `${v.appNavbar} ${h}`.trim(),
        ...g,
        children: [
          /* @__PURE__ */ s("div", { className: v.navbarLeft, children: [
            /* @__PURE__ */ s("a", { href: o, className: v.navbarBrand, children: [
              n && /* @__PURE__ */ e("div", { className: v.navbarBrandLogo, children: n }),
              (a || t) && /* @__PURE__ */ s("div", { className: v.navbarBrandTitles, children: [
                a && /* @__PURE__ */ e("span", { className: v.navbarBrandName, children: a }),
                t && /* @__PURE__ */ e("span", { className: v.navbarBrandSubtitle, children: t })
              ] })
            ] }),
            r && r.length > 0 && /* @__PURE__ */ e("ul", { className: v.navbarMenu, children: r.map((_) => {
              const M = _.isActive ?? l === _.id, R = _.subItems && _.subItems.length > 0, I = $ === _.id;
              return /* @__PURE__ */ s("li", { className: v.navbarMenuItem, children: [
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: `${v.navbarMenuLink} ${M ? v.navbarMenuLinkActive : ""}`,
                    onClick: () => {
                      var C;
                      R ? k(I ? null : _.id) : ((C = _.onClick) == null || C.call(_), c == null || c(_.id));
                    },
                    "aria-expanded": R ? I : void 0,
                    "aria-haspopup": R ? "true" : void 0,
                    children: [
                      _.icon,
                      /* @__PURE__ */ e("span", { children: _.label }),
                      R && /* @__PURE__ */ e(pe, { size: 14 })
                    ]
                  }
                ),
                R && I && /* @__PURE__ */ e("div", { className: v.navbarDropdown, children: _.subItems.map((C) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: v.navbarDropdownItem,
                    onClick: () => {
                      var W;
                      (W = C.onClick) == null || W.call(C), c == null || c(C.id), k(null);
                    },
                    children: [
                      /* @__PURE__ */ e("span", { children: C.label }),
                      C.badge !== void 0 && /* @__PURE__ */ e("span", { className: v.railItemBadge, children: C.badge })
                    ]
                  },
                  C.id
                )) })
              ] }, _.id);
            }) }),
            d
          ] }),
          /* @__PURE__ */ s("div", { className: v.navbarRight, children: [
            i,
            r && r.length > 0 && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: v.navbarMobileToggle,
                onClick: () => p((_) => !_),
                "aria-label": "Toggle navigation menu",
                "aria-expanded": N,
                children: N ? /* @__PURE__ */ e(ye, { size: 18 }) : /* @__PURE__ */ e(Ve, { size: 18 })
              }
            )
          ] }),
          N && r && r.length > 0 && /* @__PURE__ */ e(
            "div",
            {
              className: v.navbarMobileDrawer,
              onClick: () => p(!1),
              children: /* @__PURE__ */ e(
                "div",
                {
                  className: v.navbarMobileDrawerContent,
                  onClick: (_) => _.stopPropagation(),
                  children: r.map((_) => {
                    const M = _.isActive ?? l === _.id;
                    return /* @__PURE__ */ s("div", { children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: `${v.navbarMenuLink} ${M ? v.navbarMenuLinkActive : ""}`,
                          style: { width: "100%", justifyContent: "flex-start" },
                          onClick: () => {
                            var R;
                            (R = _.onClick) == null || R.call(_), c == null || c(_.id), _.subItems || p(!1);
                          },
                          children: [
                            _.icon,
                            /* @__PURE__ */ e("span", { children: _.label })
                          ]
                        }
                      ),
                      _.subItems && /* @__PURE__ */ e(
                        "div",
                        {
                          style: {
                            paddingLeft: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            marginTop: "4px"
                          },
                          children: _.subItems.map((R) => /* @__PURE__ */ e(
                            "button",
                            {
                              type: "button",
                              className: v.navbarDropdownItem,
                              onClick: () => {
                                var I;
                                (I = R.onClick) == null || I.call(R), c == null || c(R.id), p(!1);
                              },
                              children: /* @__PURE__ */ e("span", { children: R.label })
                            },
                            R.id
                          ))
                        }
                      )
                    ] }, _.id);
                  })
                }
              )
            }
          )
        ]
      }
    );
  }
);
Ii.displayName = "AppNavbar";
export {
  Ii as AppNavbar,
  Ne as Avatar,
  Je as Badge,
  Mi as BellIcon,
  Di as BookOpenIcon,
  ki as BottomNavigation,
  Ce as BottomNavigationItem,
  xi as Breadcrumb,
  Ke as Button,
  qi as CalendarIcon,
  Dt as Card,
  Tt as CardContent,
  At as CardDescription,
  Et as CardFooter,
  Mt as CardHeader,
  ps as CardSlot,
  zt as CardTitle,
  ge as CheckIcon,
  _t as Checkbox,
  pe as ChevronDownIcon,
  Ie as ChevronLeftIcon,
  Oe as ChevronRightIcon,
  Zr as Chip,
  ye as CloseIcon,
  Ei as Combobox,
  Cr as Drawer,
  et as Dropdown,
  Ri as HomeIcon,
  un as Input,
  zi as LayersIcon,
  Ve as MenuIcon,
  je as MinusIcon,
  Bi as MobileWayfinding,
  la as Modal,
  ca as ModalFooter,
  Ge as MoreHorizontalIcon,
  Ti as MultiSelect,
  $i as NavigationRail,
  Se as NavigationRailItem,
  _s as PageBody,
  we as PageContainer,
  vs as PageFooter,
  us as PageHeader,
  ms as PageHero,
  ds as PageShell,
  nr as Radio,
  er as RadioGroup,
  Fe as SearchIcon,
  cr as SearchInput,
  kn as Select,
  Ai as SettingsIcon,
  We as SpinnerIcon,
  fr as StatCard,
  hs as SubNavStrip,
  Oa as Switch,
  qa as TabPanel,
  Kt as Table,
  Qt as TableBody,
  Yt as TableCell,
  Xt as TableHead,
  Ut as TableHeader,
  Jt as TableRow,
  Ra as Tabs,
  kt as Textarea,
  He as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
