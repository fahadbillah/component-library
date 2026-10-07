import { jsxs as i, jsx as e, Fragment as $e } from "react/jsx-runtime";
import O, { forwardRef as T, useId as ue, useState as P, useRef as X, useEffect as J, useCallback as De, useContext as qe, createContext as Me, useMemo as fe } from "react";
import { createPortal as Ie } from "react-dom";
const ze = "_button_1ckl5_1", Ae = "_fullWidth_1ckl5_109", Te = "_disabled_1ckl5_113", Ee = "_loading_1ckl5_120", We = "_spinner_1ckl5_124", je = "_icon_1ckl5_130", se = {
  button: ze,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: Ae,
  disabled: Te,
  loading: Ee,
  spinner: We,
  icon: je
}, Pe = ({
  size: n = 18,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Oe = ({
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
), Le = ({
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
), He = ({
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
}) => /* @__PURE__ */ i(
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
), Fe = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Ge = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Ve = ({
  size: n = 16,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Ds = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), qs = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Ms = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), zs = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Ke = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), As = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Ts = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
), Es = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ e("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
      /* @__PURE__ */ e("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }),
      /* @__PURE__ */ e("path", { d: "m9 14 2 2 4-4" })
    ]
  }
), Ws = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ e("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }),
      /* @__PURE__ */ e("line", { x1: "12", x2: "12.01", y1: "18", y2: "18" })
    ]
  }
), js = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
      /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
      /* @__PURE__ */ e("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
      /* @__PURE__ */ e("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
      /* @__PURE__ */ e("polyline", { points: "10 9 9 9 8 9" })
    ]
  }
), Ps = ({
  size: n = 20,
  className: a,
  ...t
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ e("path", { d: "M10 2v7.31L4.69 18.12A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.71-2.88L14 9.31V2" }),
      /* @__PURE__ */ e("line", { x1: "8.5", y1: "2", x2: "15.5", y2: "2" }),
      /* @__PURE__ */ e("path", { d: "M8.5 14h7" })
    ]
  }
), Ue = T(
  ({
    variant: n = "primary",
    size: a = "md",
    isLoading: t = !1,
    leftIcon: o,
    rightIcon: r,
    fullWidth: l = !1,
    disabled: c,
    className: s,
    children: d,
    ..._
  }, g) => {
    const f = [
      se.button,
      se[`variant-${n}`],
      se[`size-${a}`],
      l ? se.fullWidth : "",
      t ? se.loading : "",
      c || t ? se.disabled : "",
      s || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i(
      "button",
      {
        ref: g,
        disabled: c || t,
        className: f,
        "aria-busy": t,
        ..._,
        children: [
          t && /* @__PURE__ */ e("span", { className: se.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(Pe, { size: a === "sm" ? 14 : a === "lg" ? 20 : 16 }) }),
          !t && o && /* @__PURE__ */ e("span", { className: se.icon, children: o }),
          d && /* @__PURE__ */ e("span", { children: d }),
          !t && r && /* @__PURE__ */ e("span", { className: se.icon, children: r })
        ]
      }
    );
  }
);
Ue.displayName = "Button";
const Qe = "_badge_qj0y6_1", Je = "_dot_qj0y6_63", xe = {
  badge: Qe,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Je
}, Xe = ({
  variant: n = "neutral",
  size: a = "md",
  withDot: t = !1,
  leftIcon: o,
  rightIcon: r,
  className: l,
  children: c,
  ...s
}) => {
  const d = [
    xe.badge,
    xe[`variant-${n}`],
    xe[`size-${a}`],
    l || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("span", { className: d, ...s, children: [
    t && /* @__PURE__ */ e("span", { className: xe.dot, "aria-hidden": "true" }),
    o && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: o }),
    /* @__PURE__ */ e("span", { children: c }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
  ] });
};
Xe.displayName = "Badge";
const Ye = "_container_df4fv_1", Ze = "_label_df4fv_13", en = "_required_df4fv_23", nn = "_inputWrapper_df4fv_27", tn = "_input_df4fv_27", an = "_hasLeftIcon_df4fv_80", rn = "_hasRightIcon_df4fv_84", on = "_iconSlot_df4fv_88", sn = "_leftSlot_df4fv_96", ln = "_rightSlot_df4fv_100", cn = "_hasError_df4fv_105", dn = "_helperText_df4fv_113", _n = "_errorMessage_df4fv_119", un = "_disabled_df4fv_127", F = {
  container: Ye,
  "size-sm": "_size-sm_df4fv_9",
  label: Ze,
  required: en,
  inputWrapper: nn,
  input: tn,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: an,
  hasRightIcon: rn,
  iconSlot: on,
  leftSlot: sn,
  rightSlot: ln,
  hasError: cn,
  helperText: dn,
  errorMessage: _n,
  disabled: un
}, hn = T(
  ({
    label: n,
    helperText: a,
    errorMessage: t,
    inputSize: o = "md",
    leftIcon: r,
    rightIcon: l,
    isRequired: c = !1,
    disabled: s = !1,
    id: d,
    className: _,
    ...g
  }, f) => {
    const w = ue(), x = d || w, N = !!t, p = [
      F.container,
      F[`size-${o}`],
      N ? F.hasError : "",
      s ? F.disabled : "",
      r ? F.hasLeftIcon : "",
      l ? F.hasRightIcon : "",
      _ || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: p, children: [
      n && /* @__PURE__ */ i("label", { htmlFor: x, className: F.label, children: [
        n,
        c && /* @__PURE__ */ e("span", { className: F.required, children: "*" })
      ] }),
      /* @__PURE__ */ i("div", { className: F.inputWrapper, children: [
        r && /* @__PURE__ */ e("span", { className: `${F.iconSlot} ${F.leftSlot}`, children: r }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: f,
            id: x,
            disabled: s,
            "aria-invalid": N,
            "aria-describedby": N ? `${x}-error` : a ? `${x}-helper` : void 0,
            className: F.input,
            ...g
          }
        ),
        l && /* @__PURE__ */ e("span", { className: `${F.iconSlot} ${F.rightSlot}`, children: l })
      ] }),
      N && /* @__PURE__ */ e(
        "span",
        {
          id: `${x}-error`,
          className: F.errorMessage,
          role: "alert",
          children: t
        }
      ),
      !N && a && /* @__PURE__ */ e("span", { id: `${x}-helper`, className: F.helperText, children: a })
    ] });
  }
);
hn.displayName = "Input";
const mn = "_container_fh5kq_1", pn = "_label_fh5kq_13", bn = "_required_fh5kq_23", vn = "_selectWrapper_fh5kq_27", fn = "_select_fh5kq_27", gn = "_chevronIcon_fh5kq_77", yn = "_hasError_fh5kq_88", Nn = "_helperText_fh5kq_96", kn = "_errorMessage_fh5kq_102", xn = "_disabled_fh5kq_110", ee = {
  container: mn,
  "size-sm": "_size-sm_fh5kq_9",
  label: pn,
  required: bn,
  selectWrapper: vn,
  select: fn,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: gn,
  hasError: yn,
  helperText: Nn,
  errorMessage: kn,
  disabled: xn
}, wn = T(
  ({
    label: n,
    helperText: a,
    errorMessage: t,
    selectSize: o = "md",
    options: r,
    placeholder: l,
    isRequired: c = !1,
    disabled: s = !1,
    id: d,
    className: _,
    children: g,
    ...f
  }, w) => {
    const x = ue(), N = d || x, p = !!t, v = [
      ee.container,
      ee[`size-${o}`],
      p ? ee.hasError : "",
      s ? ee.disabled : "",
      _ || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: v, children: [
      n && /* @__PURE__ */ i("label", { htmlFor: N, className: ee.label, children: [
        n,
        c && /* @__PURE__ */ e("span", { className: ee.required, children: "*" })
      ] }),
      /* @__PURE__ */ i("div", { className: ee.selectWrapper, children: [
        /* @__PURE__ */ i(
          "select",
          {
            ref: w,
            id: N,
            disabled: s,
            "aria-invalid": p,
            "aria-describedby": p ? `${N}-error` : a ? `${N}-helper` : void 0,
            className: ee.select,
            ...f,
            children: [
              l && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: l }),
              r ? r.map((u) => /* @__PURE__ */ e(
                "option",
                {
                  value: u.value,
                  disabled: u.disabled,
                  children: u.label
                },
                u.value
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
wn.displayName = "Select";
const $n = "_container_1d3rw_1", Bn = "_label_1d3rw_14", In = "_required_1d3rw_24", Ln = "_trigger_1d3rw_28", Cn = "_isOpen_1d3rw_53", Sn = "_selectedContent_1d3rw_71", Rn = "_placeholder_1d3rw_80", Dn = "_chevron_1d3rw_84", qn = "_chevronOpen_1d3rw_93", Mn = "_menu_1d3rw_98", zn = "_dropdownIn_1d3rw_1", An = "_menuItem_1d3rw_116", Tn = "_itemDisabled_1d3rw_128", En = "_itemSelected_1d3rw_132", Wn = "_itemLeft_1d3rw_147", jn = "_itemText_1d3rw_154", Pn = "_itemLabel_1d3rw_161", On = "_itemDescription_1d3rw_169", Hn = "_checkSlot_1d3rw_174", Fn = "_hasError_1d3rw_183", Gn = "_helperText_1d3rw_191", Vn = "_errorMessage_1d3rw_197", Kn = "_disabled_1d3rw_205", A = {
  container: $n,
  "size-sm": "_size-sm_1d3rw_10",
  label: Bn,
  required: In,
  trigger: Ln,
  isOpen: Cn,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: Sn,
  placeholder: Rn,
  chevron: Dn,
  chevronOpen: qn,
  menu: Mn,
  dropdownIn: zn,
  menuItem: An,
  itemDisabled: Tn,
  itemSelected: En,
  itemLeft: Wn,
  itemText: jn,
  itemLabel: Pn,
  itemDescription: On,
  checkSlot: Hn,
  hasError: Fn,
  helperText: Gn,
  errorMessage: Vn,
  disabled: Kn
}, Un = "_container_1lebu_1", Qn = "_tint_1lebu_14", Jn = "_solid_1lebu_20", Xn = "_image_1lebu_26", Yn = "_fallback_1lebu_33", Zn = "_statusDot_1lebu_74", _e = {
  container: Un,
  tint: Qn,
  solid: Jn,
  image: Xn,
  fallback: Yn,
  "size-xs": "_size-xs_1lebu_43",
  "size-sm": "_size-sm_1lebu_49",
  "size-md": "_size-md_1lebu_55",
  "size-lg": "_size-lg_1lebu_61",
  "size-xl": "_size-xl_1lebu_67",
  statusDot: Zn,
  "status-online": "_status-online_1lebu_102",
  "status-busy": "_status-busy_1lebu_106",
  "status-away": "_status-away_1lebu_110",
  "status-offline": "_status-offline_1lebu_114"
};
function et(n, a) {
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
  className: s,
  ...d
}) => {
  const [_, g] = P(!1), f = et(t, o), w = [
    _e.container,
    _e[`size-${r}`],
    _e[l],
    s || ""
  ].filter(Boolean).join(" "), x = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ i("div", { className: w, title: t || a, ...d, children: [
    n && !_ ? /* @__PURE__ */ e(
      "img",
      {
        src: n,
        alt: a || t || "Avatar",
        className: _e.image,
        onError: () => g(!0)
      }
    ) : f ? /* @__PURE__ */ e("span", { className: _e.fallback, children: f }) : /* @__PURE__ */ e("span", { className: _e.fallback, children: /* @__PURE__ */ e(Fe, { size: x[r] }) }),
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
const nt = ({
  label: n,
  placeholder: a = "Select an option...",
  helperText: t,
  errorMessage: o,
  options: r,
  value: l,
  defaultValue: c,
  onChange: s,
  size: d = "md",
  disabled: _ = !1,
  isRequired: g = !1,
  className: f,
  id: w
}) => {
  const x = ue(), N = w || x, p = X(null), [v, u] = P(!1), [M, R] = P(
    l || c
  );
  J(() => {
    l !== void 0 && R(l);
  }, [l]), J(() => {
    const k = (q) => {
      p.current && !p.current.contains(q.target) && u(!1);
    };
    return v && document.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [v]);
  const I = r.find((k) => k.value === M), C = !!o, j = (k) => {
    k.disabled || (R(k.value), s == null || s(k.value, k), u(!1));
  }, G = (k) => {
    if (!_) {
      if (k.key === "Enter" || k.key === " ")
        k.preventDefault(), u((q) => !q);
      else if (k.key === "Escape")
        u(!1);
      else if (k.key === "ArrowDown" && v) {
        k.preventDefault();
        const q = r.findIndex(
          (K) => K.value === M
        ), W = r[q + 1];
        W && !W.disabled && j(W);
      } else if (k.key === "ArrowUp" && v) {
        k.preventDefault();
        const q = r.findIndex(
          (K) => K.value === M
        ), W = r[q - 1];
        W && !W.disabled && j(W);
      }
    }
  }, E = [
    A.container,
    A[`size-${d}`],
    v ? A.isOpen : "",
    C ? A.hasError : "",
    _ ? A.disabled : "",
    f || ""
  ].filter(Boolean).join(" "), V = d === "sm" ? "xs" : d === "lg" ? "md" : "sm";
  return /* @__PURE__ */ i("div", { ref: p, className: E, children: [
    n && /* @__PURE__ */ i("label", { id: `${N}-label`, className: A.label, children: [
      n,
      g && /* @__PURE__ */ e("span", { className: A.required, children: "*" })
    ] }),
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        id: N,
        "aria-haspopup": "listbox",
        "aria-expanded": v,
        "aria-labelledby": n ? `${N}-label ${N}` : void 0,
        disabled: _,
        onClick: () => u((k) => !k),
        onKeyDown: G,
        className: A.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: A.selectedContent, children: I ? /* @__PURE__ */ i($e, { children: [
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
              className: `${A.chevron} ${v ? A.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(pe, { size: 16 })
            }
          )
        ]
      }
    ),
    v && /* @__PURE__ */ e(
      "ul",
      {
        role: "listbox",
        "aria-labelledby": `${N}-label`,
        className: A.menu,
        children: r.map((k) => {
          const q = k.value === M, W = [
            A.menuItem,
            q ? A.itemSelected : "",
            k.disabled ? A.itemDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ i(
            "li",
            {
              role: "option",
              "aria-selected": q,
              "aria-disabled": k.disabled,
              onClick: () => j(k),
              className: W,
              children: [
                /* @__PURE__ */ i("div", { className: A.itemLeft, children: [
                  k.avatar && /* @__PURE__ */ e(
                    Ne,
                    {
                      size: k.avatar.size || V,
                      ...k.avatar
                    }
                  ),
                  k.icon && /* @__PURE__ */ e("span", { children: k.icon }),
                  /* @__PURE__ */ i("div", { className: A.itemText, children: [
                    /* @__PURE__ */ e("span", { className: A.itemLabel, children: k.label }),
                    k.description && /* @__PURE__ */ e("span", { className: A.itemDescription, children: k.description })
                  ] })
                ] }),
                q && /* @__PURE__ */ e("span", { className: A.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(ge, { size: 14 }) })
              ]
            },
            k.value
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
nt.displayName = "Dropdown";
const tt = "_container_1ms02_1", at = "_hasDescription_1ms02_10", rt = "_box_1ms02_14", ot = "_nativeInput_1ms02_32", it = "_checked_1ms02_45", st = "_indeterminate_1ms02_46", lt = "_disabled_1ms02_51", ct = "_textGroup_1ms02_55", dt = "_label_1ms02_61", _t = "_description_1ms02_68", re = {
  container: tt,
  hasDescription: at,
  box: rt,
  nativeInput: ot,
  checked: it,
  indeterminate: st,
  disabled: lt,
  textGroup: ct,
  label: dt,
  description: _t
}, ut = T(
  ({
    label: n,
    description: a,
    checked: t,
    defaultChecked: o,
    indeterminate: r = !1,
    disabled: l = !1,
    className: c,
    onChange: s,
    ...d
  }, _) => {
    const g = X(null), f = _ || g;
    J(() => {
      f && "current" in f && f.current && (f.current.indeterminate = r);
    }, [r, f]);
    const w = t ?? o ?? !1, x = [
      re.container,
      a ? re.hasDescription : "",
      l ? re.disabled : "",
      c || ""
    ].filter(Boolean).join(" "), N = [
      re.box,
      r ? re.indeterminate : w ? re.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: x, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: f,
          checked: t,
          defaultChecked: o,
          disabled: l,
          className: re.nativeInput,
          onChange: s,
          ...d
        }
      ),
      /* @__PURE__ */ i("span", { className: N, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(Oe, { size: 12 }),
        !r && w && /* @__PURE__ */ e(ge, { size: 12 })
      ] }),
      (n || a) && /* @__PURE__ */ i("span", { className: re.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: re.label, children: n }),
        a && /* @__PURE__ */ e("span", { className: re.description, children: a })
      ] })
    ] });
  }
);
ut.displayName = "Checkbox";
const ht = "_container_m4qf3_1", mt = "_label_m4qf3_9", pt = "_required_m4qf3_19", bt = "_textareaWrapper_m4qf3_23", vt = "_textarea_m4qf3_23", ft = "_hasError_m4qf3_58", gt = "_footer_m4qf3_66", yt = "_helperText_m4qf3_74", Nt = "_errorMessage_m4qf3_78", kt = "_charCount_m4qf3_83", xt = "_disabled_m4qf3_89", ne = {
  container: ht,
  label: mt,
  required: pt,
  textareaWrapper: bt,
  textarea: vt,
  hasError: ft,
  footer: gt,
  helperText: yt,
  errorMessage: Nt,
  charCount: kt,
  disabled: xt
}, wt = T(
  ({
    label: n,
    helperText: a,
    errorMessage: t,
    isRequired: o = !1,
    showCharCount: r = !1,
    maxLength: l,
    disabled: c = !1,
    value: s,
    defaultValue: d,
    id: _,
    className: g,
    onChange: f,
    ...w
  }, x) => {
    const N = ue(), p = _ || N, v = !!t, [u, M] = O.useState(() => typeof s == "string" ? s.length : typeof d == "string" ? d.length : 0), R = (C) => {
      M(C.target.value.length), f == null || f(C);
    }, I = [
      ne.container,
      v ? ne.hasError : "",
      c ? ne.disabled : "",
      g || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { className: I, children: [
      n && /* @__PURE__ */ i("label", { htmlFor: p, className: ne.label, children: [
        n,
        o && /* @__PURE__ */ e("span", { className: ne.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: ne.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: x,
          id: p,
          disabled: c,
          value: s,
          defaultValue: d,
          maxLength: l,
          onChange: R,
          "aria-invalid": v,
          "aria-describedby": v ? `${p}-error` : a ? `${p}-helper` : void 0,
          className: ne.textarea,
          ...w
        }
      ) }),
      /* @__PURE__ */ i("div", { className: ne.footer, children: [
        v && /* @__PURE__ */ e(
          "span",
          {
            id: `${p}-error`,
            className: ne.errorMessage,
            role: "alert",
            children: t
          }
        ),
        !v && a && /* @__PURE__ */ e("span", { id: `${p}-helper`, className: ne.helperText, children: a }),
        r && l && /* @__PURE__ */ i("span", { className: ne.charCount, children: [
          u,
          " / ",
          l
        ] })
      ] })
    ] });
  }
);
wt.displayName = "Textarea";
const $t = "_card_7pqx0_1", Bt = "_interactive_7pqx0_28", It = "_header_7pqx0_56", Lt = "_headerBordered_7pqx0_64", Ct = "_title_7pqx0_69", St = "_description_7pqx0_78", Rt = "_content_7pqx0_85", Dt = "_footer_7pqx0_89", qt = "_footerBordered_7pqx0_98", ae = {
  card: $t,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: Bt,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: It,
  headerBordered: Lt,
  title: Ct,
  description: St,
  content: Rt,
  footer: Dt,
  footerBordered: qt
}, Mt = T(
  ({
    elevation: n = 1,
    padding: a = "none",
    isInteractive: t = !1,
    className: o,
    children: r,
    ...l
  }, c) => {
    const s = [
      ae.card,
      ae[`elevation-${n}`],
      ae[`padding-${a}`],
      t ? ae.interactive : "",
      o || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: c, className: s, ...l, children: r });
  }
);
Mt.displayName = "Card";
const zt = T(
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
zt.displayName = "CardHeader";
const At = T(
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
At.displayName = "CardTitle";
const Tt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e(
  "p",
  {
    ref: o,
    className: `${ae.description} ${n || ""}`,
    ...t,
    children: a
  }
));
Tt.displayName = "CardDescription";
const Et = T(
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
Et.displayName = "CardContent";
const Wt = T(
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
Wt.displayName = "CardFooter";
const jt = "_container_1xw60_1", Pt = "_table_1xw60_10", Ot = "_header_1xw60_19", Ht = "_headCell_1xw60_24", Ft = "_row_1xw60_35", Gt = "_hoverable_1xw60_44", Vt = "_cell_1xw60_48", Kt = "_tabularNums_1xw60_54", ie = {
  container: jt,
  table: Pt,
  header: Ot,
  headCell: Ht,
  row: Ft,
  hoverable: Gt,
  cell: Vt,
  tabularNums: Kt,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Ut = T(
  ({ className: n, containerClassName: a, children: t, ...o }, r) => /* @__PURE__ */ e("div", { className: `${ie.container} ${a || ""}`, children: /* @__PURE__ */ e(
    "table",
    {
      ref: r,
      className: `${ie.table} ${n || ""}`,
      ...o,
      children: t
    }
  ) })
);
Ut.displayName = "Table";
const Qt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e("thead", { ref: o, className: `${ie.header} ${n || ""}`, ...t, children: a }));
Qt.displayName = "TableHeader";
const Jt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e("tbody", { ref: o, className: n, ...t, children: a }));
Jt.displayName = "TableBody";
const Xt = T(
  ({ isHoverable: n = !0, className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: `${ie.row} ${n ? ie.hoverable : ""} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
Xt.displayName = "TableRow";
const Yt = T(
  ({ align: n = "left", className: a, children: t, ...o }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: `${ie.headCell} ${ie[`align-${n}`]} ${a || ""}`,
      ...o,
      children: t
    }
  )
);
Yt.displayName = "TableHead";
const Zt = T(
  ({ align: n = "left", isNumeric: a = !1, className: t, children: o, ...r }, l) => /* @__PURE__ */ e(
    "td",
    {
      ref: l,
      className: `${ie.cell} ${ie[`align-${n}`]} ${a ? ie.tabularNums : ""} ${t || ""}`,
      ...r,
      children: o
    }
  )
);
Zt.displayName = "TableCell";
const ea = "_overlay_cpmq9_1", na = "_fadeIn_cpmq9_1", ta = "_modal_cpmq9_15", aa = "_scaleIn_cpmq9_1", ra = "_header_cpmq9_44", oa = "_title_cpmq9_52", ia = "_closeButton_cpmq9_61", sa = "_body_cpmq9_84", la = "_footer_cpmq9_93", de = {
  overlay: ea,
  fadeIn: na,
  modal: ta,
  scaleIn: aa,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: ra,
  title: oa,
  closeButton: ia,
  body: sa,
  footer: la
}, ca = ({
  isOpen: n,
  onClose: a,
  title: t,
  size: o = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: l = !0,
  showCloseButton: c = !0,
  footer: s,
  children: d,
  className: _
}) => {
  const g = ue(), f = X(null);
  if (J(() => {
    if (!n) return;
    const p = (v) => {
      v.key === "Escape" && l && a();
    };
    return document.addEventListener("keydown", p), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    };
  }, [n, l, a]), !n) return null;
  const w = (p) => {
    p.target === p.currentTarget && r && a();
  }, x = [de.modal, de[`size-${o}`], _ || ""].filter(Boolean).join(" "), N = /* @__PURE__ */ e("div", { className: de.overlay, onClick: w, children: /* @__PURE__ */ i(
    "div",
    {
      ref: f,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": t ? g : void 0,
      tabIndex: -1,
      className: x,
      children: [
        (t || c) && /* @__PURE__ */ i("div", { className: de.header, children: [
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
        s && /* @__PURE__ */ e("div", { className: de.footer, children: s })
      ]
    }
  ) });
  return typeof document < "u" ? Ie(N, document.body) : null;
};
ca.displayName = "Modal";
const da = ({
  className: n,
  children: a,
  ...t
}) => /* @__PURE__ */ e("div", { className: `${de.footer} ${n || ""}`, ...t, children: a });
da.displayName = "ModalFooter";
const _a = "_container_1242t_1", ua = "_navWrapper_1242t_7", ha = "_scrollContainer_1242t_16", ma = "_tabList_1242t_34", pa = "_tab_1242t_34", ba = "_tabActive_1242t_117", va = "_badge_1242t_145", fa = "_fullWidth_1242t_174", ga = "_scrollButton_1242t_183", ya = "_scrollButtonLeft_1242t_213", Na = "_scrollButtonRight_1242t_217", ka = "_hasScrollLeft_1242t_222", xa = "_hasScrollRight_1242t_238", wa = "_moreWrapper_1242t_257", $a = "_moreButton_1242t_264", Ba = "_moreButtonActive_1242t_294", Ia = "_moreMenu_1242t_321", La = "_moreMenuItem_1242t_340", Ca = "_moreMenuItemActive_1242t_369", Sa = "_moreMenuItemLeft_1242t_380", Ra = "_panel_1242t_390", z = {
  container: _a,
  navWrapper: ua,
  scrollContainer: ha,
  tabList: ma,
  "variant-underline": "_variant-underline_1242t_46",
  "variant-segmented": "_variant-segmented_1242t_57",
  tab: pa,
  "size-sm": "_size-sm_1242t_89",
  "size-md": "_size-md_1242t_95",
  "size-lg": "_size-lg_1242t_101",
  tabActive: ba,
  badge: va,
  fullWidth: fa,
  scrollButton: ga,
  scrollButtonLeft: ya,
  scrollButtonRight: Na,
  hasScrollLeft: ka,
  hasScrollRight: xa,
  moreWrapper: wa,
  moreButton: $a,
  moreButtonActive: Ba,
  moreMenu: Ia,
  moreMenuItem: La,
  moreMenuItemActive: Ca,
  moreMenuItemLeft: Sa,
  panel: Ra
}, Da = T(
  ({
    tabs: n,
    activeTab: a,
    defaultActiveTab: t,
    onChange: o,
    variant: r = "pill",
    size: l = "md",
    fullWidth: c = !1,
    scrollable: s = !1,
    showScrollButtons: d = !0,
    maxVisibleTabs: _,
    moreLabel: g = "More",
    className: f,
    children: w,
    ...x
  }, N) => {
    var S;
    const [p, v] = P(
      a || t || ((S = n[0]) == null ? void 0 : S.id) || ""
    ), u = a !== void 0 ? a : p, M = X(null), R = X(/* @__PURE__ */ new Map()), I = X(null), [C, j] = P(!1), [G, E] = P(!1), [V, k] = P(!1), q = typeof _ == "number" && _ > 0 && n.length > _, W = q ? n.slice(0, _) : n, K = q ? n.slice(_) : [], be = K.some(
      (m) => m.id === u
    );
    J(() => {
      if (!V) return;
      const m = (B) => {
        I.current && !I.current.contains(B.target) && k(!1);
      };
      return document.addEventListener("mousedown", m), () => {
        document.removeEventListener("mousedown", m);
      };
    }, [V]);
    const Z = De(() => {
      const m = M.current;
      if (!m || !s) {
        j(!1), E(!1);
        return;
      }
      const { scrollLeft: B, scrollWidth: U, clientWidth: H } = m;
      j(B > 2), E(B + H < U - 2);
    }, [s]);
    J(() => {
      if (!s) return;
      const m = M.current;
      if (m)
        return Z(), m.addEventListener("scroll", Z, {
          passive: !0
        }), window.addEventListener("resize", Z), () => {
          m.removeEventListener("scroll", Z), window.removeEventListener("resize", Z);
        };
    }, [s, Z, W]), J(() => {
      if (!s) return;
      const m = R.current.get(u), B = M.current;
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
    }, [u, s]);
    const he = (m, B) => {
      B || (a === void 0 && v(m), k(!1), o == null || o(m));
    }, y = (m) => {
      const B = n.filter((me) => !me.disabled);
      if (B.length === 0) return;
      const U = B.findIndex((me) => me.id === u);
      let H = -1;
      if (m.key === "ArrowRight" ? (m.preventDefault(), H = U < B.length - 1 ? U + 1 : 0) : m.key === "ArrowLeft" ? (m.preventDefault(), H = U > 0 ? U - 1 : B.length - 1) : m.key === "Home" ? (m.preventDefault(), H = 0) : m.key === "End" && (m.preventDefault(), H = B.length - 1), H >= 0) {
        const me = B[H];
        if (me) {
          he(me.id);
          const we = R.current.get(me.id);
          we == null || we.focus();
        }
      }
    }, $ = (m) => {
      const B = M.current;
      B && B.scrollBy({ left: m, behavior: "smooth" });
    }, Y = [
      z.container,
      C && z.hasScrollLeft,
      G && z.hasScrollRight,
      f || ""
    ].filter(Boolean).join(" "), h = [
      z.tabList,
      z[`variant-${r}`],
      c ? z.fullWidth : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("div", { ref: N, className: Y, ...x, children: [
      /* @__PURE__ */ i("div", { className: z.navWrapper, children: [
        s && d && C && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${z.scrollButton} ${z.scrollButtonLeft}`,
            "aria-label": "Scroll tabs left",
            onClick: () => $(-200),
            children: /* @__PURE__ */ e(Le, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: M,
            className: s ? z.scrollContainer : void 0,
            children: /* @__PURE__ */ i(
              "div",
              {
                role: "tablist",
                className: h,
                onKeyDown: y,
                children: [
                  W.map((m) => {
                    const B = m.id === u, U = [
                      z.tab,
                      z[`size-${l}`],
                      B ? z.tabActive : ""
                    ].filter(Boolean).join(" ");
                    return /* @__PURE__ */ i(
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
                  }),
                  q && /* @__PURE__ */ i("div", { ref: I, className: z.moreWrapper, children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        className: [
                          z.moreButton,
                          z[`size-${l}`],
                          be ? z.moreButtonActive : ""
                        ].filter(Boolean).join(" "),
                        "aria-haspopup": "true",
                        "aria-expanded": V,
                        "aria-label": "More navigation tabs",
                        onClick: () => k((m) => !m),
                        children: [
                          /* @__PURE__ */ e(Ve, { size: 16 }),
                          /* @__PURE__ */ e("span", { children: g }),
                          /* @__PURE__ */ e(pe, { size: 14 })
                        ]
                      }
                    ),
                    V && /* @__PURE__ */ e("div", { className: z.moreMenu, role: "menu", children: K.map((m) => {
                      const B = m.id === u;
                      return /* @__PURE__ */ i(
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
                            /* @__PURE__ */ i("span", { className: z.moreMenuItemLeft, children: [
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
                ]
              }
            )
          }
        ),
        s && d && G && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${z.scrollButton} ${z.scrollButtonRight}`,
            "aria-label": "Scroll tabs right",
            onClick: () => $(200),
            children: /* @__PURE__ */ e(He, { size: 16 })
          }
        )
      ] }),
      w
    ] });
  }
);
Da.displayName = "Tabs";
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
const Ma = "_container_1xroe_1", za = "_track_1xroe_10", Aa = "_thumb_1xroe_24", Ta = "_checked_1xroe_34", Ea = "_nativeInput_1xroe_43", Wa = "_label_1xroe_55", ja = "_description_1xroe_61", Pa = "_textGroup_1xroe_66", Oa = "_disabled_1xroe_72", le = {
  container: Ma,
  track: za,
  thumb: Aa,
  checked: Ta,
  nativeInput: Ea,
  label: Wa,
  description: ja,
  textGroup: Pa,
  disabled: Oa
}, Ha = T(
  ({
    label: n,
    description: a,
    checked: t,
    defaultChecked: o,
    disabled: r = !1,
    className: l,
    onChange: c,
    ...s
  }, d) => {
    const _ = t ?? o ?? !1, g = [
      le.container,
      _ ? le.checked : "",
      r ? le.disabled : "",
      l || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: d,
          checked: t,
          defaultChecked: o,
          disabled: r,
          "aria-checked": _,
          className: le.nativeInput,
          onChange: c,
          ...s
        }
      ),
      /* @__PURE__ */ e("span", { className: le.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: le.thumb }) }),
      (n || a) && /* @__PURE__ */ i("span", { className: le.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: le.label, children: n }),
        a && /* @__PURE__ */ e("span", { className: le.description, children: a })
      ] })
    ] });
  }
);
Ha.displayName = "Switch";
const Fa = "_group_1e0nk_1", Ga = "_groupLabel_1e0nk_8", Va = "_item_1e0nk_14", Ka = "_circle_1e0nk_22", Ua = "_dot_1e0nk_35", Qa = "_checked_1e0nk_45", Ja = "_nativeInput_1e0nk_54", Xa = "_label_1e0nk_67", Ya = "_description_1e0nk_73", Za = "_textGroup_1e0nk_78", er = "_disabled_1e0nk_84", te = {
  group: Fa,
  groupLabel: Ga,
  item: Va,
  circle: Ka,
  dot: Ua,
  checked: Qa,
  nativeInput: Ja,
  label: Xa,
  description: Ya,
  textGroup: Za,
  disabled: er
}, Ce = Me(null), nr = ({
  name: n,
  value: a,
  defaultValue: t,
  onChange: o,
  label: r,
  disabled: l = !1,
  className: c,
  children: s
}) => {
  const [d, _] = O.useState(
    a || t
  ), g = a !== void 0 ? a : d, f = (w) => {
    _(w.target.value), o == null || o(w.target.value);
  };
  return /* @__PURE__ */ e(
    Ce.Provider,
    {
      value: {
        name: n,
        value: g,
        onChange: f,
        disabled: l
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          role: "radiogroup",
          "aria-label": r,
          className: `${te.group} ${c || ""}`,
          children: [
            r && /* @__PURE__ */ e("span", { className: te.groupLabel, children: r }),
            s
          ]
        }
      )
    }
  );
};
nr.displayName = "RadioGroup";
const tr = T(
  ({
    value: n,
    label: a,
    description: t,
    disabled: o,
    className: r,
    checked: l,
    onChange: c,
    ...s
  }, d) => {
    const _ = qe(Ce), g = _ ? _.value === n : l, f = o || (_ == null ? void 0 : _.disabled) || !1, w = (_ == null ? void 0 : _.name) || s.name, x = [
      te.item,
      g ? te.checked : "",
      f ? te.disabled : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ i("label", { className: x, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          type: "radio",
          name: w,
          value: n,
          checked: g,
          disabled: f,
          onChange: (p) => {
            var v;
            c == null || c(p), (v = _ == null ? void 0 : _.onChange) == null || v.call(_, p);
          },
          className: te.nativeInput,
          ...s
        }
      ),
      /* @__PURE__ */ e("span", { className: te.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: te.dot }) }),
      (a || t) && /* @__PURE__ */ i("span", { className: te.textGroup, children: [
        a && /* @__PURE__ */ e("span", { className: te.label, children: a }),
        t && /* @__PURE__ */ e("span", { className: te.description, children: t })
      ] })
    ] });
  }
);
tr.displayName = "Radio";
const ar = "_wrapper_yiqhg_1", rr = "_searchIcon_yiqhg_8", or = "_input_yiqhg_18", ir = "_rightSlots_yiqhg_42", sr = "_clearButton_yiqhg_50", lr = "_shortcut_yiqhg_66", ve = {
  wrapper: ar,
  searchIcon: rr,
  input: or,
  rightSlots: ir,
  clearButton: sr,
  shortcut: lr
}, cr = ({
  ...n
}) => /* @__PURE__ */ i(
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
), dr = T(
  ({
    value: n,
    defaultValue: a,
    onChange: t,
    onClear: o,
    shortcutHint: r = "⌘K",
    placeholder: l = "Search records, students, classes...",
    className: c,
    ...s
  }, d) => {
    const [_, g] = P(
      n || a || ""
    ), f = n !== void 0, w = f ? n : _, x = (p) => {
      f || g(p.target.value), t == null || t(p);
    }, N = () => {
      f || g(""), o == null || o();
    };
    return /* @__PURE__ */ i("div", { className: `${ve.wrapper} ${c || ""}`, children: [
      /* @__PURE__ */ e("span", { className: ve.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(cr, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          type: "search",
          value: w,
          placeholder: l,
          onChange: x,
          className: ve.input,
          ...s
        }
      ),
      /* @__PURE__ */ i("div", { className: ve.rightSlots, children: [
        w && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: N,
            className: ve.clearButton,
            children: /* @__PURE__ */ e(ye, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: ve.shortcut, children: r })
      ] })
    ] });
  }
);
dr.displayName = "SearchInput";
const _r = "_card_kgob9_1", ur = "_topRow_kgob9_18", hr = "_title_kgob9_25", mr = "_iconSlot_kgob9_33", pr = "_metricRow_kgob9_49", br = "_value_kgob9_55", vr = "_trendBadge_kgob9_65", fr = "_description_kgob9_90", oe = {
  card: _r,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: ur,
  title: hr,
  iconSlot: mr,
  metricRow: pr,
  value: br,
  trendBadge: vr,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: fr
}, gr = ({
  title: n,
  value: a,
  description: t,
  trend: o,
  icon: r,
  highlighted: l = !1,
  className: c,
  ...s
}) => {
  const d = [
    oe.card,
    l ? oe["variant-highlight"] : "",
    c || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { className: d, ...s, children: [
    /* @__PURE__ */ i("div", { className: oe.topRow, children: [
      /* @__PURE__ */ e("h4", { className: oe.title, children: n }),
      r && /* @__PURE__ */ e("span", { className: oe.iconSlot, children: r })
    ] }),
    /* @__PURE__ */ i("div", { className: oe.metricRow, children: [
      /* @__PURE__ */ e("span", { className: oe.value, children: a }),
      o && /* @__PURE__ */ i(
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
gr.displayName = "StatCard";
const yr = "_overlay_lam6o_1", Nr = "_fadeIn_lam6o_1", kr = "_drawer_lam6o_11", xr = "_slideInRight_lam6o_1", wr = "_slideInLeft_lam6o_1", $r = "_header_lam6o_51", Br = "_title_lam6o_59", Ir = "_closeButton_lam6o_67", Lr = "_body_lam6o_90", Cr = "_footer_lam6o_99", ce = {
  overlay: yr,
  fadeIn: Nr,
  drawer: kr,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: xr,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: wr,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: $r,
  title: Br,
  closeButton: Ir,
  body: Lr,
  footer: Cr
}, Sr = ({
  isOpen: n,
  onClose: a,
  title: t,
  placement: o = "right",
  size: r = "md",
  closeOnOverlayClick: l = !0,
  closeOnEsc: c = !0,
  showCloseButton: s = !0,
  footer: d,
  children: _,
  className: g
}) => {
  const f = ue(), w = X(null);
  if (J(() => {
    if (!n) return;
    const v = (u) => {
      u.key === "Escape" && c && a();
    };
    return document.addEventListener("keydown", v), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    };
  }, [n, c, a]), !n) return null;
  const x = (v) => {
    v.target === v.currentTarget && l && a();
  }, N = [
    ce.drawer,
    ce[`placement-${o}`],
    ce[`size-${r}`],
    g || ""
  ].filter(Boolean).join(" "), p = /* @__PURE__ */ i($e, { children: [
    /* @__PURE__ */ e("div", { className: ce.overlay, onClick: x }),
    /* @__PURE__ */ i(
      "div",
      {
        ref: w,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": t ? f : void 0,
        tabIndex: -1,
        className: N,
        children: [
          (t || s) && /* @__PURE__ */ i("div", { className: ce.header, children: [
            t && /* @__PURE__ */ e("h3", { id: f, className: ce.title, children: t }),
            s && /* @__PURE__ */ e(
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
          /* @__PURE__ */ e("div", { className: ce.body, children: _ }),
          d && /* @__PURE__ */ e("div", { className: ce.footer, children: d })
        ]
      }
    )
  ] });
  return typeof document < "u" ? Ie(p, document.body) : null;
};
Sr.displayName = "Drawer";
const Rr = "_chip_ldr6y_1", Dr = "_pill_ldr6y_14", qr = "_rounded_ldr6y_18", Mr = "_sm_ldr6y_22", zr = "_md_ldr6y_36", Ar = "_lg_ldr6y_45", Tr = "_neutral_ldr6y_55", Er = "_primary_ldr6y_61", Wr = "_tonal_ldr6y_68", jr = "_outline_ldr6y_75", Pr = "_success_ldr6y_81", Or = "_warning_ldr6y_87", Hr = "_danger_ldr6y_93", Fr = "_clickable_ldr6y_100", Gr = "_disabled_ldr6y_104", Vr = "_selected_ldr6y_104", Kr = "_selectedIcon_ldr6y_131", Ur = "_avatarSlot_ldr6y_139", Qr = "_hasAvatar_ldr6y_183", Jr = "_iconSlot_ldr6y_212", Xr = "_label_ldr6y_221", Yr = "_countBadge_ldr6y_230", Zr = "_removeButton_ldr6y_251", Q = {
  chip: Rr,
  pill: Dr,
  rounded: qr,
  sm: Mr,
  md: zr,
  lg: Ar,
  neutral: Tr,
  primary: Er,
  tonal: Wr,
  outline: jr,
  success: Pr,
  warning: Or,
  danger: Hr,
  clickable: Fr,
  disabled: Gr,
  selected: Vr,
  selectedIcon: Kr,
  avatarSlot: Ur,
  hasAvatar: Qr,
  iconSlot: Jr,
  label: Xr,
  countBadge: Yr,
  removeButton: Zr
}, eo = ({
  label: n,
  avatar: a,
  icon: t,
  variant: o,
  size: r = "md",
  shape: l = "pill",
  selected: c = !1,
  count: s,
  onRemove: d,
  disabled: _ = !1,
  className: g,
  onClick: f,
  ...w
}) => {
  const x = !!f && !_, N = o ?? (a ? "tonal" : "neutral"), p = [
    Q.chip,
    Q[N],
    Q[r],
    Q[l],
    a ? Q.hasAvatar : "",
    c ? Q.selected : "",
    x ? Q.clickable : "",
    d ? Q.removable : "",
    _ ? Q.disabled : "",
    g || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    "div",
    {
      className: p,
      role: x ? "button" : "status",
      tabIndex: x ? 0 : void 0,
      onClick: x ? f : void 0,
      ...w,
      children: [
        c && /* @__PURE__ */ e("span", { className: Q.selectedIcon, children: /* @__PURE__ */ e(ge, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 }) }),
        !c && a && /* @__PURE__ */ e("span", { className: Q.avatarSlot, children: a }),
        !c && !a && t && /* @__PURE__ */ e("span", { className: Q.iconSlot, children: t }),
        /* @__PURE__ */ e("span", { className: Q.label, children: n }),
        s !== void 0 && /* @__PURE__ */ e("span", { className: Q.countBadge, children: s }),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${n}`,
            className: Q.removeButton,
            onClick: (v) => {
              v.stopPropagation(), !_ && d && d();
            },
            disabled: _,
            children: /* @__PURE__ */ e(ye, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, no = "_container_d3es0_1", to = "_label_d3es0_14", ao = "_required_d3es0_24", ro = "_trigger_d3es0_29", oo = "_disabled_d3es0_50", io = "_isOpen_d3es0_54", so = "_chipContainer_d3es0_72", lo = "_searchInput_d3es0_81", co = "_placeholder_d3es0_93", _o = "_moreCount_d3es0_97", uo = "_trailing_d3es0_112", ho = "_clearAllButton_d3es0_119", mo = "_chevron_d3es0_137", po = "_menu_d3es0_149", bo = "_empty_d3es0_169", vo = "_option_d3es0_177", fo = "_focused_d3es0_193", go = "_selected_d3es0_197", yo = "_checkboxSlot_d3es0_206", No = "_checkboxBox_d3es0_213", ko = "_checkboxChecked_d3es0_226", xo = "_avatarSlot_d3es0_231", wo = "_iconSlot_d3es0_244", $o = "_labelCol_d3es0_251", Bo = "_labelRow_d3es0_258", Io = "_optionLabel_d3es0_265", Lo = "_badge_d3es0_272", Co = "_optionDescription_d3es0_300", So = "_optionDisabled_d3es0_307", Ro = "_hasError_d3es0_314", Do = "_errorText_d3es0_323", qo = "_helperText_d3es0_328", L = {
  container: no,
  "size-sm": "_size-sm_d3es0_10",
  label: to,
  required: ao,
  trigger: ro,
  disabled: oo,
  isOpen: io,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: so,
  searchInput: lo,
  placeholder: co,
  moreCount: _o,
  trailing: uo,
  clearAllButton: ho,
  chevron: mo,
  menu: po,
  empty: bo,
  option: vo,
  focused: fo,
  selected: go,
  checkboxSlot: yo,
  checkboxBox: No,
  checkboxChecked: ko,
  avatarSlot: xo,
  iconSlot: wo,
  labelCol: $o,
  labelRow: Bo,
  optionLabel: Io,
  badge: Lo,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: Co,
  optionDisabled: So,
  hasError: Ro,
  errorText: Do,
  helperText: qo
}, Os = ({
  label: n,
  placeholder: a = "Select items...",
  helperText: t,
  errorMessage: o,
  options: r,
  value: l,
  defaultValue: c,
  onChange: s,
  size: d = "md",
  chipShape: _,
  disabled: g = !1,
  isRequired: f = !1,
  isSearchable: w = !0,
  className: x,
  id: N,
  maxDisplayedChips: p
}) => {
  const v = ue(), u = N || v, M = X(null), R = X(null), [I, C] = P(!1), [j, G] = P(""), [E, V] = P(
    l || c || []
  ), [k, q] = P(-1);
  J(() => {
    l !== void 0 && V(l);
  }, [l]);
  const W = fe(() => r.filter((h) => E.includes(h.value)), [r, E]), K = fe(() => {
    if (!j.trim()) return r;
    const h = j.toLowerCase();
    return r.filter(
      (S) => S.label.toLowerCase().includes(h) || S.description && S.description.toLowerCase().includes(h) || S.badge && S.badge.toLowerCase().includes(h)
    );
  }, [r, j]);
  J(() => {
    const h = (S) => {
      M.current && !M.current.contains(S.target) && (C(!1), G(""), q(-1));
    };
    return I && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [I]);
  const be = (h) => {
    if (h.disabled || g) return;
    let S;
    E.includes(h.value) ? S = E.filter((B) => B !== h.value) : S = [...E, h.value], l === void 0 && V(S);
    const m = r.filter((B) => S.includes(B.value));
    s == null || s(S, m);
  }, Z = (h) => {
    if (g) return;
    const S = E.filter((B) => B !== h);
    l === void 0 && V(S);
    const m = r.filter((B) => S.includes(B.value));
    s == null || s(S, m);
  }, he = (h) => {
    if (!g) {
      if (h.key === "Backspace" && j === "" && E.length > 0) {
        Z(E[E.length - 1]);
        return;
      }
      if (!I) {
        (h.key === "Enter" || h.key === " " || h.key === "ArrowDown") && (h.preventDefault(), C(!0));
        return;
      }
      h.key === "Escape" ? (h.preventDefault(), C(!1), G("")) : h.key === "ArrowDown" ? (h.preventDefault(), q(
        (S) => S < K.length - 1 ? S + 1 : 0
      )) : h.key === "ArrowUp" ? (h.preventDefault(), q(
        (S) => S > 0 ? S - 1 : K.length - 1
      )) : h.key === "Enter" && k >= 0 && k < K.length && (h.preventDefault(), be(K[k]));
    }
  }, y = p ? W.slice(0, p) : W, $ = p ? Math.max(0, W.length - p) : 0, Y = !!o;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: M,
      className: [
        L.container,
        L[`size-${d}`],
        I ? L.isOpen : "",
        g ? L.disabled : "",
        Y ? L.hasError : "",
        x || ""
      ].filter(Boolean).join(" "),
      onKeyDown: he,
      children: [
        n && /* @__PURE__ */ i("label", { id: `${u}-label`, className: L.label, children: [
          n,
          f && /* @__PURE__ */ e("span", { className: L.required, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            className: L.trigger,
            onClick: () => {
              g || (C(!I), !I && w && setTimeout(() => {
                var h;
                return (h = R.current) == null ? void 0 : h.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": I,
            "aria-haspopup": "listbox",
            "aria-labelledby": n ? `${u}-label` : void 0,
            children: [
              /* @__PURE__ */ i("div", { className: L.chipContainer, children: [
                y.map((h) => /* @__PURE__ */ e(
                  eo,
                  {
                    label: h.label,
                    variant: "tonal",
                    shape: _ || (h.avatar ? "pill" : "rounded"),
                    size: d === "sm" ? "sm" : d === "lg" ? "lg" : "md",
                    avatar: h.avatar ? /* @__PURE__ */ e(
                      Ne,
                      {
                        size: d === "sm" ? "xs" : d === "lg" ? "md" : "xs",
                        name: h.label,
                        ...h.avatar
                      }
                    ) : void 0,
                    icon: h.icon,
                    onRemove: () => Z(h.value),
                    disabled: g
                  },
                  h.value
                )),
                $ > 0 && /* @__PURE__ */ i("span", { className: L.moreCount, children: [
                  "+",
                  $,
                  " more"
                ] }),
                w ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: R,
                    type: "text",
                    className: L.searchInput,
                    placeholder: W.length === 0 ? a : "",
                    value: j,
                    onChange: (h) => {
                      G(h.target.value), I || C(!0);
                    },
                    onClick: (h) => h.stopPropagation(),
                    disabled: g
                  }
                ) : W.length === 0 && /* @__PURE__ */ e("span", { className: L.placeholder, children: a })
              ] }),
              /* @__PURE__ */ i("div", { className: L.trailing, children: [
                E.length > 0 && !g && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: L.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (h) => {
                      h.stopPropagation(), l === void 0 && V([]), s == null || s([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: L.chevron, children: /* @__PURE__ */ e(pe, { size: 14 }) })
              ] })
            ]
          }
        ),
        I && /* @__PURE__ */ e("div", { className: L.menu, role: "listbox", "aria-multiselectable": "true", children: K.length === 0 ? /* @__PURE__ */ e("div", { className: L.empty, children: "No matches found" }) : K.map((h, S) => {
          const m = E.includes(h.value), B = S === k;
          return /* @__PURE__ */ i(
            "div",
            {
              role: "option",
              "aria-selected": m,
              "aria-disabled": h.disabled,
              className: [
                L.option,
                m ? L.selected : "",
                B ? L.focused : "",
                h.disabled ? L.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (U) => {
                U.stopPropagation(), be(h);
              },
              onMouseEnter: () => q(S),
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
                h.avatar && /* @__PURE__ */ e("div", { className: L.avatarSlot, children: /* @__PURE__ */ e(Ne, { size: "sm", name: h.label, ...h.avatar }) }),
                !h.avatar && h.icon && /* @__PURE__ */ e("div", { className: L.iconSlot, children: h.icon }),
                /* @__PURE__ */ i("div", { className: L.labelCol, children: [
                  /* @__PURE__ */ i("div", { className: L.labelRow, children: [
                    /* @__PURE__ */ e("span", { className: L.optionLabel, children: h.label }),
                    h.badge && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          L.badge,
                          L[`badge-${h.badgeVariant || "primary"}`]
                        ].join(" "),
                        children: h.badge
                      }
                    )
                  ] }),
                  h.description && /* @__PURE__ */ e("div", { className: L.optionDescription, children: h.description })
                ] })
              ]
            },
            h.value
          );
        }) }),
        o && /* @__PURE__ */ e("span", { className: L.errorText, children: o }),
        !o && t && /* @__PURE__ */ e("span", { className: L.helperText, children: t })
      ]
    }
  );
}, Mo = "_container_1nphi_1", zo = "_label_1nphi_10", Ao = "_required_1nphi_20", To = "_trigger_1nphi_25", Eo = "_disabled_1nphi_45", Wo = "_isOpen_1nphi_49", jo = "_searchIcon_1nphi_55", Po = "_input_1nphi_63", Oo = "_clearButton_1nphi_81", Ho = "_chevron_1nphi_98", Fo = "_menu_1nphi_110", Go = "_optionsList_1nphi_129", Vo = "_groupBlock_1nphi_135", Ko = "_groupHeader_1nphi_140", Uo = "_option_1nphi_129", Qo = "_focused_1nphi_174", Jo = "_selected_1nphi_178", Xo = "_optionContent_1nphi_182", Yo = "_optionIcon_1nphi_190", Zo = "_optionLabel_1nphi_197", ei = "_highlight_1nphi_206", ni = "_optionBadge_1nphi_211", ti = "_optionDisabled_1nphi_223", ai = "_emptyFallback_1nphi_230", ri = "_emptyIcon_1nphi_240", oi = "_emptyTitle_1nphi_254", ii = "_emptySubtitle_1nphi_260", si = "_footerGuide_1nphi_267", li = "_hasError_1nphi_280", ci = "_errorText_1nphi_289", di = "_helperText_1nphi_294", D = {
  container: Mo,
  label: zo,
  required: Ao,
  trigger: To,
  disabled: Eo,
  isOpen: Wo,
  searchIcon: jo,
  input: Po,
  clearButton: Oo,
  chevron: Ho,
  menu: Fo,
  optionsList: Go,
  groupBlock: Vo,
  groupHeader: Ko,
  option: Uo,
  focused: Qo,
  selected: Jo,
  optionContent: Xo,
  optionIcon: Yo,
  optionLabel: Zo,
  highlight: ei,
  optionBadge: ni,
  optionDisabled: ti,
  emptyFallback: ai,
  emptyIcon: ri,
  emptyTitle: oi,
  emptySubtitle: ii,
  footerGuide: si,
  hasError: li,
  errorText: ci,
  helperText: di
}, Hs = ({
  label: n,
  placeholder: a = "Search entities...",
  helperText: t,
  errorMessage: o,
  options: r,
  value: l,
  defaultValue: c,
  onChange: s,
  disabled: d = !1,
  isRequired: _ = !1,
  className: g,
  id: f
}) => {
  const w = ue(), x = f || w, N = X(null), p = X(null), [v, u] = P(!1), [M, R] = P(
    l || c || ""
  ), [I, C] = P(""), [j, G] = P(-1);
  J(() => {
    l !== void 0 && R(l);
  }, [l]);
  const E = fe(() => r.find((y) => y.value === M), [r, M]);
  J(() => {
    !v && E ? C(E.label) : !v && !E && C("");
  }, [v, E]);
  const V = fe(() => {
    if (!I.trim()) return r;
    const y = I.toLowerCase();
    return r.filter(
      ($) => $.label.toLowerCase().includes(y) || $.group && $.group.toLowerCase().includes(y) || $.badge && $.badge.toLowerCase().includes(y)
    );
  }, [r, I]), k = fe(() => {
    const y = {};
    return V.forEach(($) => {
      const Y = $.group || "";
      y[Y] || (y[Y] = []), y[Y].push($);
    }), y;
  }, [V]), q = fe(() => {
    const y = [];
    return Object.keys(k).forEach(($) => {
      y.push(...k[$]);
    }), y;
  }, [k]);
  J(() => {
    const y = ($) => {
      N.current && !N.current.contains($.target) && (u(!1), G(-1));
    };
    return v && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [v]);
  const W = (y) => {
    y.disabled || d || (l === void 0 && R(y.value), C(y.label), u(!1), G(-1), s == null || s(y.value, y));
  }, K = (y) => {
    var $;
    y.stopPropagation(), C(""), l === void 0 && R(""), s == null || s("", void 0), ($ = p.current) == null || $.focus();
  }, be = (y) => {
    if (!d) {
      if (!v) {
        (y.key === "ArrowDown" || y.key === "Enter") && (y.preventDefault(), u(!0));
        return;
      }
      y.key === "Escape" ? (y.preventDefault(), u(!1), G(-1)) : y.key === "ArrowDown" ? (y.preventDefault(), G(($) => $ < q.length - 1 ? $ + 1 : 0)) : y.key === "ArrowUp" ? (y.preventDefault(), G(($) => $ > 0 ? $ - 1 : q.length - 1)) : y.key === "Enter" && j >= 0 && j < q.length && (y.preventDefault(), W(q[j]));
    }
  }, Z = (y, $) => {
    if (!$.trim()) return y;
    const Y = y.split(new RegExp(`(${$})`, "gi"));
    return /* @__PURE__ */ e($e, { children: Y.map(
      (h, S) => h.toLowerCase() === $.toLowerCase() ? /* @__PURE__ */ e("span", { className: D.highlight, children: h }, S) : h
    ) });
  }, he = !!o;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: N,
      className: [
        D.container,
        v ? D.isOpen : "",
        d ? D.disabled : "",
        he ? D.hasError : "",
        g || ""
      ].filter(Boolean).join(" "),
      onKeyDown: be,
      children: [
        n && /* @__PURE__ */ i("label", { id: `${x}-label`, className: D.label, children: [
          n,
          _ && /* @__PURE__ */ e("span", { className: D.required, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            className: D.trigger,
            onClick: () => {
              var y;
              d || (u(!0), (y = p.current) == null || y.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: D.searchIcon, children: /* @__PURE__ */ e(Ge, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: p,
                  id: x,
                  type: "text",
                  className: D.input,
                  placeholder: a,
                  value: I,
                  role: "combobox",
                  "aria-expanded": v,
                  "aria-autocomplete": "list",
                  "aria-controls": `${x}-popup`,
                  disabled: d,
                  onChange: (y) => {
                    C(y.target.value), v || u(!0);
                  },
                  onFocus: () => u(!0)
                }
              ),
              I && !d && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: D.clearButton,
                  "aria-label": "Clear query",
                  onClick: K,
                  children: /* @__PURE__ */ e(ye, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: D.chevron, children: /* @__PURE__ */ e(pe, { size: 14 }) })
            ]
          }
        ),
        v && /* @__PURE__ */ i("div", { id: `${x}-popup`, className: D.menu, role: "listbox", children: [
          q.length === 0 ? /* @__PURE__ */ i("div", { className: D.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: D.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: D.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: D.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: D.optionsList, children: Object.keys(k).map((y) => /* @__PURE__ */ i(
            "div",
            {
              className: D.groupBlock,
              children: [
                y && /* @__PURE__ */ e("div", { className: D.groupHeader, children: y }),
                k[y].map(($) => {
                  const Y = $.value === M, h = q.indexOf($), S = h === j;
                  return /* @__PURE__ */ i(
                    "div",
                    {
                      role: "option",
                      "aria-selected": Y,
                      "aria-disabled": $.disabled,
                      className: [
                        D.option,
                        Y ? D.selected : "",
                        S ? D.focused : "",
                        $.disabled ? D.optionDisabled : ""
                      ].filter(Boolean).join(" "),
                      onClick: (m) => {
                        m.stopPropagation(), W($);
                      },
                      onMouseEnter: () => G(h),
                      children: [
                        /* @__PURE__ */ i("div", { className: D.optionContent, children: [
                          $.icon && /* @__PURE__ */ e("span", { className: D.optionIcon, children: $.icon }),
                          /* @__PURE__ */ e("span", { className: D.optionLabel, children: Z($.label, I) })
                        ] }),
                        $.badge && /* @__PURE__ */ e("span", { className: D.optionBadge, children: $.badge })
                      ]
                    },
                    $.value
                  );
                })
              ]
            },
            y || "default-group"
          )) }),
          /* @__PURE__ */ i("div", { className: D.footerGuide, children: [
            /* @__PURE__ */ e("span", { children: "↵ Enter to select" }),
            /* @__PURE__ */ e("span", { children: "Esc to dismiss" })
          ] })
        ] }),
        o && /* @__PURE__ */ e("span", { className: D.errorText, children: o }),
        !o && t && /* @__PURE__ */ e("span", { className: D.helperText, children: t })
      ]
    }
  );
}, _i = O.forwardRef(
  ({ className: n = "", children: a, ...t }, o) => /* @__PURE__ */ e("div", { ref: o, className: `ui-page-shell ${n}`.trim(), ...t, children: a })
);
_i.displayName = "PageShell";
const ke = O.forwardRef(
  ({ maxWidth: n = "standard", as: a = "div", className: t = "", children: o, ...r }, l) => {
    const c = a, s = `ui-container--${n}`;
    return /* @__PURE__ */ e(
      c,
      {
        ref: l,
        className: `ui-container ${s} ${t}`.trim(),
        ...r,
        children: o
      }
    );
  }
);
ke.displayName = "PageContainer";
const ui = O.forwardRef(
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
ui.displayName = "PageBody";
const hi = O.forwardRef(
  ({ containerMaxWidth: n = "standard", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    "header",
    {
      ref: r,
      className: `ui-page-header ${a}`.trim(),
      ...o,
      children: /* @__PURE__ */ e(ke, { maxWidth: n, children: /* @__PURE__ */ e("div", { className: "ui-page-header__inner", children: t }) })
    }
  )
);
hi.displayName = "PageHeader";
const mi = O.forwardRef(
  ({ containerMaxWidth: n = "standard", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `ui-subnav-strip ${a}`.trim(),
      ...o,
      children: /* @__PURE__ */ e(ke, { maxWidth: n, children: /* @__PURE__ */ e("div", { className: "ui-subnav-strip__inner", children: t }) })
    }
  )
);
mi.displayName = "SubNavStrip";
const pi = O.forwardRef(
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
      children: /* @__PURE__ */ e(ke, { maxWidth: o, children: /* @__PURE__ */ i("div", { className: "ui-page-hero__inner", children: [
        /* @__PURE__ */ i("div", { className: "ui-page-hero__title-group", children: [
          /* @__PURE__ */ e("h1", { className: "ui-page-hero__title", children: n }),
          a && /* @__PURE__ */ e("p", { className: "ui-page-hero__subtitle", children: a })
        ] }),
        t && /* @__PURE__ */ e("div", { className: "ui-page-hero__actions", children: t })
      ] }) })
    }
  )
);
pi.displayName = "PageHero";
const bi = O.forwardRef(
  ({ className: n = "", children: a, ...t }, o) => /* @__PURE__ */ e("div", { ref: o, className: `ui-card-slot ${n}`.trim(), ...t, children: a })
);
bi.displayName = "CardSlot";
const vi = O.forwardRef(
  ({ containerMaxWidth: n = "standard", className: a = "", children: t, ...o }, r) => /* @__PURE__ */ e(
    "footer",
    {
      ref: r,
      className: `ui-page-footer ${a}`.trim(),
      ...o,
      children: /* @__PURE__ */ e(ke, { maxWidth: n, children: /* @__PURE__ */ e("div", { className: "ui-page-footer__inner", children: t }) })
    }
  )
);
vi.displayName = "PageFooter";
const fi = "_bottomNavigation_1ixtb_6", gi = "_bottomNavigationDocked_1ixtb_22", yi = "_bottomNavItem_1ixtb_31", Ni = "_bottomNavItemActive_1ixtb_60", ki = "_bottomNavIconWrapper_1ixtb_68", xi = "_bottomNavActivePill_1ixtb_76", wi = "_bottomNavLabel_1ixtb_87", $i = "_bottomNavBadge_1ixtb_99", Bi = "_navigationRail_1ixtb_122", Ii = "_navigationRailHorizontal_1ixtb_134", Li = "_navigationRailDark_1ixtb_142", Ci = "_navigationRailLight_1ixtb_149", Si = "_navigationRailDocked_1ixtb_156", Ri = "_railBrandSlot_1ixtb_161", Di = "_railBrandIcon_1ixtb_172", qi = "_railBrandTitle_1ixtb_186", Mi = "_railItemsStack_1ixtb_192", zi = "_railItem_1ixtb_192", Ai = "_railItemActive_1ixtb_239", Ti = "_railItemBadge_1ixtb_263", Ei = "_railFooterSlot_1ixtb_281", Wi = "_breadcrumb_1ixtb_298", ji = "_breadcrumbPrimary_1ixtb_303", Pi = "_breadcrumbSubtle_1ixtb_311", Oi = "_breadcrumbPlain_1ixtb_318", Hi = "_breadcrumbList_1ixtb_325", Fi = "_breadcrumbItem_1ixtb_338", Gi = "_breadcrumbLink_1ixtb_344", Vi = "_breadcrumbCurrent_1ixtb_358", Ki = "_breadcrumbSeparator_1ixtb_369", Ui = "_mobileWayfinding_1ixtb_378", Qi = "_wayfindingHeaderRow_1ixtb_389", Ji = "_wayfindingBackBtn_1ixtb_396", Xi = "_wayfindingBackIcon_1ixtb_417", Yi = "_wayfindingCurrentTrigger_1ixtb_422", Zi = "_wayfindingCurrentLabel_1ixtb_442", es = "_wayfindingCurrentIcon_1ixtb_448", ns = "_wayfindingCurrentIconOpen_1ixtb_455", ts = "_wayfindingPopover_1ixtb_459", as = "_wayfindingPopoverMeta_1ixtb_469", rs = "_wayfindingPopoverAction_1ixtb_479", os = "_wayfindingPathList_1ixtb_484", is = "_wayfindingPathItem_1ixtb_490", ss = "_wayfindingPathItemActive_1ixtb_511", ls = "_appNavbar_1ixtb_520", cs = "_navbarLeft_1ixtb_535", ds = "_navbarBrand_1ixtb_541", _s = "_navbarBrandLogo_1ixtb_550", us = "_navbarBrandTitles_1ixtb_565", hs = "_navbarBrandName_1ixtb_570", ms = "_navbarBrandSubtitle_1ixtb_578", ps = "_navbarMenu_1ixtb_584", bs = "_navbarMenuItem_1ixtb_593", vs = "_navbarMenuLink_1ixtb_597", fs = "_navbarMenuLinkActive_1ixtb_626", gs = "_navbarDropdown_1ixtb_633", ys = "_navbarDropdownItem_1ixtb_652", Ns = "_navbarRight_1ixtb_682", ks = "_navbarMobileToggle_1ixtb_688", xs = "_navbarMobileDrawer_1ixtb_701", ws = "_navbarMobileDrawerContent_1ixtb_714", b = {
  bottomNavigation: fi,
  bottomNavigationDocked: gi,
  bottomNavItem: yi,
  bottomNavItemActive: Ni,
  bottomNavIconWrapper: ki,
  bottomNavActivePill: xi,
  bottomNavLabel: wi,
  bottomNavBadge: $i,
  navigationRail: Bi,
  navigationRailHorizontal: Ii,
  navigationRailDark: Li,
  navigationRailLight: Ci,
  navigationRailDocked: Si,
  railBrandSlot: Ri,
  railBrandIcon: Di,
  railBrandTitle: qi,
  railItemsStack: Mi,
  railItem: zi,
  railItemActive: Ai,
  railItemBadge: Ti,
  railFooterSlot: Ei,
  breadcrumb: Wi,
  breadcrumbPrimary: ji,
  breadcrumbSubtle: Pi,
  breadcrumbPlain: Oi,
  breadcrumbList: Hi,
  breadcrumbItem: Fi,
  breadcrumbLink: Gi,
  breadcrumbCurrent: Vi,
  breadcrumbSeparator: Ki,
  mobileWayfinding: Ui,
  wayfindingHeaderRow: Qi,
  wayfindingBackBtn: Ji,
  wayfindingBackIcon: Xi,
  wayfindingCurrentTrigger: Yi,
  wayfindingCurrentLabel: Zi,
  wayfindingCurrentIcon: es,
  wayfindingCurrentIconOpen: ns,
  wayfindingPopover: ts,
  wayfindingPopoverMeta: as,
  wayfindingPopoverAction: rs,
  wayfindingPathList: os,
  wayfindingPathItem: is,
  wayfindingPathItemActive: ss,
  appNavbar: ls,
  navbarLeft: cs,
  navbarBrand: ds,
  navbarBrandLogo: _s,
  navbarBrandTitles: us,
  navbarBrandName: hs,
  navbarBrandSubtitle: ms,
  navbarMenu: ps,
  navbarMenuItem: bs,
  navbarMenuLink: vs,
  navbarMenuLinkActive: fs,
  navbarDropdown: gs,
  navbarDropdownItem: ys,
  navbarRight: Ns,
  navbarMobileToggle: ks,
  navbarMobileDrawer: xs,
  navbarMobileDrawerContent: ws
}, Be = O.forwardRef(
  ({
    id: n,
    label: a,
    icon: t,
    activeIcon: o,
    badge: r,
    isActive: l = !1,
    className: c = "",
    onClick: s,
    ...d
  }, _) => /* @__PURE__ */ i(
    "button",
    {
      ref: _,
      type: "button",
      role: "tab",
      "aria-selected": l,
      "data-testid": `bottom-nav-item-${n}`,
      className: `${b.bottomNavItem} ${l ? b.bottomNavItemActive : ""} ${c}`.trim(),
      onClick: s,
      ...d,
      children: [
        /* @__PURE__ */ i("div", { className: b.bottomNavIconWrapper, children: [
          l ? /* @__PURE__ */ e("div", { className: b.bottomNavActivePill, children: o || t }) : t,
          r != null && /* @__PURE__ */ e("span", { className: b.bottomNavBadge, children: r })
        ] }),
        /* @__PURE__ */ e("span", { className: b.bottomNavLabel, children: a })
      ]
    }
  )
);
Be.displayName = "BottomNavigationItem";
const Se = O.forwardRef(
  ({
    value: n,
    onChange: a,
    items: t,
    children: o,
    isDocked: r = !1,
    className: l = "",
    ...c
  }, s) => {
    const d = r ? b.bottomNavigationDocked : "";
    return /* @__PURE__ */ e(
      "nav",
      {
        ref: s,
        role: "tablist",
        "aria-label": "Mobile Navigation",
        className: `${b.bottomNavigation} ${d} ${l}`.trim(),
        ...c,
        children: t ? t.map((_) => /* @__PURE__ */ e(
          Be,
          {
            id: _.id,
            label: _.label,
            icon: _.icon,
            activeIcon: _.activeIcon,
            badge: _.badge,
            isActive: n === _.id,
            onClick: () => a == null ? void 0 : a(_.id)
          },
          _.id
        )) : o
      }
    );
  }
);
Se.displayName = "BottomNavigation";
const Fs = Se, Gs = Be, Re = O.forwardRef(
  ({
    id: n,
    icon: a,
    title: t,
    badge: o,
    isActive: r = !1,
    className: l = "",
    onClick: c,
    ...s
  }, d) => /* @__PURE__ */ i(
    "button",
    {
      ref: d,
      type: "button",
      title: t,
      "aria-label": t || n,
      "aria-current": r ? "page" : void 0,
      "data-testid": `rail-item-${n}`,
      className: `${b.railItem} ${r ? b.railItemActive : ""} ${l}`.trim(),
      onClick: c,
      ...s,
      children: [
        a,
        o != null && /* @__PURE__ */ e("span", { className: b.railItemBadge, children: o })
      ]
    }
  )
);
Re.displayName = "NavigationRailItem";
const $s = O.forwardRef(
  ({
    theme: n = "dark",
    orientation: a = "vertical",
    isDocked: t = !1,
    brand: o,
    brandTitle: r,
    footer: l,
    value: c,
    onChange: s,
    items: d,
    children: _,
    className: g = "",
    ...f
  }, w) => {
    const x = n === "dark" ? b.navigationRailDark : b.navigationRailLight, N = a === "horizontal" ? b.navigationRailHorizontal : "", p = t ? b.navigationRailDocked : "";
    return /* @__PURE__ */ i(
      "aside",
      {
        ref: w,
        "aria-label": "Navigation Rail",
        className: `${b.navigationRail} ${x} ${N} ${p} ${g}`.trim(),
        ...f,
        children: [
          o && /* @__PURE__ */ i("div", { className: b.railBrandSlot, children: [
            typeof o == "string" ? /* @__PURE__ */ e("div", { className: b.railBrandIcon, children: o }) : o,
            r && a === "horizontal" && /* @__PURE__ */ e("span", { className: b.railBrandTitle, children: r })
          ] }),
          /* @__PURE__ */ e("div", { className: b.railItemsStack, children: d ? d.map((v) => /* @__PURE__ */ e(
            Re,
            {
              id: v.id,
              icon: v.icon,
              title: v.title,
              badge: v.badge,
              isActive: c === v.id,
              onClick: () => s == null ? void 0 : s(v.id)
            },
            v.id
          )) : _ }),
          l && /* @__PURE__ */ e("div", { className: b.railFooterSlot, children: l })
        ]
      }
    );
  }
);
$s.displayName = "NavigationRail";
const Bs = O.forwardRef(
  ({
    variant: n = "primary",
    separator: a = "/",
    items: t,
    children: o,
    className: r = "",
    ...l
  }, c) => {
    let s = b.breadcrumbPrimary;
    return n === "subtle" && (s = b.breadcrumbSubtle), n === "plain" && (s = b.breadcrumbPlain), /* @__PURE__ */ e(
      "nav",
      {
        ref: c,
        "aria-label": "Breadcrumb Trail",
        className: `${b.breadcrumb} ${s} ${r}`.trim(),
        ...l,
        children: /* @__PURE__ */ e("ol", { className: b.breadcrumbList, children: t ? t.map((d, _) => {
          const g = _ === t.length - 1, f = d.isCurrent ?? g;
          return /* @__PURE__ */ i("li", { className: b.breadcrumbItem, children: [
            f ? /* @__PURE__ */ i(
              "span",
              {
                "aria-current": "page",
                className: b.breadcrumbCurrent,
                children: [
                  d.icon,
                  d.label
                ]
              }
            ) : /* @__PURE__ */ i(
              "a",
              {
                href: d.href || "#",
                className: b.breadcrumbLink,
                onClick: (w) => {
                  d.onClick && (w.preventDefault(), d.onClick());
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
                className: b.breadcrumbSeparator,
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
Bs.displayName = "Breadcrumb";
const Is = O.forwardRef(
  ({
    parentLabel: n,
    onBack: a,
    currentLabel: t,
    path: o,
    currentStepIndex: r,
    totalSteps: l,
    onStepClick: c,
    className: s = "",
    ...d
  }, _) => {
    const [g, f] = P(!1), w = X(null);
    J(() => {
      const p = (v) => {
        w.current && !w.current.contains(v.target) && f(!1);
      };
      return g && document.addEventListener("mousedown", p), () => {
        document.removeEventListener("mousedown", p);
      };
    }, [g]);
    const x = l || (o ? o.length : 1), N = r !== void 0 ? r : x;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: (p) => {
          w.current = p, typeof _ == "function" ? _(p) : _ && (_.current = p);
        },
        className: `${b.mobileWayfinding} ${s}`.trim(),
        ...d,
        children: [
          /* @__PURE__ */ i("div", { className: b.wayfindingHeaderRow, children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: b.wayfindingBackBtn,
                onClick: a,
                "aria-label": `Go back to ${n}`,
                children: [
                  /* @__PURE__ */ e(Le, { className: b.wayfindingBackIcon, size: 14 }),
                  /* @__PURE__ */ e("span", { children: n })
                ]
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: b.wayfindingCurrentTrigger,
                onClick: () => f((p) => !p),
                "aria-expanded": g,
                "aria-haspopup": "true",
                children: [
                  /* @__PURE__ */ e("span", { className: b.wayfindingCurrentLabel, children: t }),
                  /* @__PURE__ */ e(
                    pe,
                    {
                      className: `${b.wayfindingCurrentIcon} ${g ? b.wayfindingCurrentIconOpen : ""}`,
                      size: 14
                    }
                  )
                ]
              }
            )
          ] }),
          g && o && o.length > 0 && /* @__PURE__ */ i("div", { className: b.wayfindingPopover, children: [
            /* @__PURE__ */ i("div", { className: b.wayfindingPopoverMeta, children: [
              /* @__PURE__ */ i("span", { children: [
                "Current Hierarchy Path (",
                N,
                " of ",
                x,
                ")"
              ] }),
              /* @__PURE__ */ e("span", { className: b.wayfindingPopoverAction, children: "Tap to Jump" })
            ] }),
            /* @__PURE__ */ e("div", { className: b.wayfindingPathList, children: o.map((p, v) => {
              const u = v === N - 1;
              return /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  className: `${b.wayfindingPathItem} ${u ? b.wayfindingPathItemActive : ""}`,
                  onClick: () => {
                    c == null || c(p, v), f(!1);
                  },
                  children: [
                    /* @__PURE__ */ i("span", { children: [
                      v + 1,
                      ". ",
                      p.label
                    ] }),
                    u && /* @__PURE__ */ e(ge, { size: 12 })
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
Is.displayName = "MobileWayfinding";
const Ls = O.forwardRef(
  ({
    brandLogo: n,
    brandName: a,
    brandSubtitle: t,
    brandHref: o = "#",
    menuItems: r,
    activeItemId: l,
    onItemClick: c,
    actions: s,
    children: d,
    className: _ = "",
    ...g
  }, f) => {
    const [w, x] = P(null), [N, p] = P(!1), v = X(null);
    return J(() => {
      const u = (M) => {
        v.current && !v.current.contains(M.target) && x(null);
      };
      return w && document.addEventListener("mousedown", u), () => {
        document.removeEventListener("mousedown", u);
      };
    }, [w]), /* @__PURE__ */ i(
      "header",
      {
        ref: (u) => {
          v.current = u, typeof f == "function" ? f(u) : f && (f.current = u);
        },
        className: `${b.appNavbar} ${_}`.trim(),
        ...g,
        children: [
          /* @__PURE__ */ i("div", { className: b.navbarLeft, children: [
            /* @__PURE__ */ i("a", { href: o, className: b.navbarBrand, children: [
              n && /* @__PURE__ */ e("div", { className: b.navbarBrandLogo, children: n }),
              (a || t) && /* @__PURE__ */ i("div", { className: b.navbarBrandTitles, children: [
                a && /* @__PURE__ */ e("span", { className: b.navbarBrandName, children: a }),
                t && /* @__PURE__ */ e("span", { className: b.navbarBrandSubtitle, children: t })
              ] })
            ] }),
            r && r.length > 0 && /* @__PURE__ */ e("ul", { className: b.navbarMenu, children: r.map((u) => {
              const M = u.isActive ?? l === u.id, R = u.subItems && u.subItems.length > 0, I = w === u.id;
              return /* @__PURE__ */ i("li", { className: b.navbarMenuItem, children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    className: `${b.navbarMenuLink} ${M ? b.navbarMenuLinkActive : ""}`,
                    onClick: () => {
                      var C;
                      R ? x(I ? null : u.id) : ((C = u.onClick) == null || C.call(u), c == null || c(u.id));
                    },
                    "aria-expanded": R ? I : void 0,
                    "aria-haspopup": R ? "true" : void 0,
                    children: [
                      u.icon,
                      /* @__PURE__ */ e("span", { children: u.label }),
                      R && /* @__PURE__ */ e(pe, { size: 14 })
                    ]
                  }
                ),
                R && I && /* @__PURE__ */ e("div", { className: b.navbarDropdown, children: u.subItems.map((C) => /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    className: b.navbarDropdownItem,
                    onClick: () => {
                      var j;
                      (j = C.onClick) == null || j.call(C), c == null || c(C.id), x(null);
                    },
                    children: [
                      /* @__PURE__ */ e("span", { children: C.label }),
                      C.badge !== void 0 && /* @__PURE__ */ e("span", { className: b.railItemBadge, children: C.badge })
                    ]
                  },
                  C.id
                )) })
              ] }, u.id);
            }) }),
            d
          ] }),
          /* @__PURE__ */ i("div", { className: b.navbarRight, children: [
            s,
            r && r.length > 0 && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: b.navbarMobileToggle,
                onClick: () => p((u) => !u),
                "aria-label": "Toggle navigation menu",
                "aria-expanded": N,
                children: N ? /* @__PURE__ */ e(ye, { size: 18 }) : /* @__PURE__ */ e(Ke, { size: 18 })
              }
            )
          ] }),
          N && r && r.length > 0 && /* @__PURE__ */ e(
            "div",
            {
              className: b.navbarMobileDrawer,
              onClick: () => p(!1),
              children: /* @__PURE__ */ e(
                "div",
                {
                  className: b.navbarMobileDrawerContent,
                  onClick: (u) => u.stopPropagation(),
                  children: r.map((u) => {
                    const M = u.isActive ?? l === u.id;
                    return /* @__PURE__ */ i("div", { children: [
                      /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          className: `${b.navbarMenuLink} ${M ? b.navbarMenuLinkActive : ""}`,
                          style: { width: "100%", justifyContent: "flex-start" },
                          onClick: () => {
                            var R;
                            (R = u.onClick) == null || R.call(u), c == null || c(u.id), u.subItems || p(!1);
                          },
                          children: [
                            u.icon,
                            /* @__PURE__ */ e("span", { children: u.label })
                          ]
                        }
                      ),
                      u.subItems && /* @__PURE__ */ e(
                        "div",
                        {
                          style: {
                            paddingLeft: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            marginTop: "4px"
                          },
                          children: u.subItems.map((R) => /* @__PURE__ */ e(
                            "button",
                            {
                              type: "button",
                              className: b.navbarDropdownItem,
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
                    ] }, u.id);
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
Ls.displayName = "AppNavbar";
export {
  Ls as AppNavbar,
  Ne as Avatar,
  Xe as Badge,
  zs as BellIcon,
  Ms as BookOpenIcon,
  Fs as BottomNav,
  Gs as BottomNavItem,
  Se as BottomNavigation,
  Be as BottomNavigationItem,
  Bs as Breadcrumb,
  Ue as Button,
  qs as CalendarIcon,
  Mt as Card,
  Et as CardContent,
  Tt as CardDescription,
  Wt as CardFooter,
  zt as CardHeader,
  bi as CardSlot,
  At as CardTitle,
  ge as CheckIcon,
  ut as Checkbox,
  pe as ChevronDownIcon,
  Le as ChevronLeftIcon,
  He as ChevronRightIcon,
  eo as Chip,
  Es as ClipboardCheckIcon,
  ye as CloseIcon,
  Hs as Combobox,
  Ws as DeviceMobileIcon,
  js as DocumentIcon,
  Sr as Drawer,
  nt as Dropdown,
  Ps as FlaskIcon,
  Ds as HomeIcon,
  hn as Input,
  As as LayersIcon,
  Ke as MenuIcon,
  Oe as MinusIcon,
  Is as MobileWayfinding,
  ca as Modal,
  da as ModalFooter,
  Ve as MoreHorizontalIcon,
  Os as MultiSelect,
  $s as NavigationRail,
  Re as NavigationRailItem,
  ui as PageBody,
  ke as PageContainer,
  vi as PageFooter,
  hi as PageHeader,
  pi as PageHero,
  _i as PageShell,
  tr as Radio,
  nr as RadioGroup,
  Ge as SearchIcon,
  dr as SearchInput,
  wn as Select,
  Ts as SettingsIcon,
  Pe as SpinnerIcon,
  gr as StatCard,
  mi as SubNavStrip,
  Ha as Switch,
  qa as TabPanel,
  Ut as Table,
  Jt as TableBody,
  Zt as TableCell,
  Yt as TableHead,
  Qt as TableHeader,
  Xt as TableRow,
  Da as Tabs,
  wt as Textarea,
  Fe as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
