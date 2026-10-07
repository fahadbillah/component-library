import { jsxs as i, jsx as e, Fragment as $e } from "react/jsx-runtime";
import O, { forwardRef as T, useId as ue, useState as P, useRef as X, useEffect as J, useCallback as qe, useContext as Me, createContext as ze, useMemo as fe } from "react";
import { createPortal as Ie } from "react-dom";
const Ae = "_button_1ckl5_1", Te = "_fullWidth_1ckl5_109", We = "_disabled_1ckl5_113", Ee = "_loading_1ckl5_120", je = "_spinner_1ckl5_124", Pe = "_icon_1ckl5_130", se = {
  button: Ae,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: Te,
  disabled: We,
  loading: Ee,
  spinner: je,
  icon: Pe
}, Oe = ({
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
), He = ({
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
), Fe = ({
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
), Ge = ({
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
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ]
  }
), Ke = ({
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
), Ue = ({
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
      /* @__PURE__ */ e("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
      /* @__PURE__ */ e("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }),
      /* @__PURE__ */ e("path", { d: "m9 14 2 2 4-4" })
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
), Os = ({
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
      /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
      /* @__PURE__ */ e("line", { x1: "8", y1: "10", x2: "8.01", y2: "10", strokeWidth: "2.5" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "10", x2: "12.01", y2: "10", strokeWidth: "2.5" }),
      /* @__PURE__ */ e("line", { x1: "16", y1: "10", x2: "16.01", y2: "10", strokeWidth: "2.5" })
    ]
  }
), Qe = T(
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
          t && /* @__PURE__ */ e("span", { className: se.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(Oe, { size: a === "sm" ? 14 : a === "lg" ? 20 : 16 }) }),
          !t && o && /* @__PURE__ */ e("span", { className: se.icon, children: o }),
          d && /* @__PURE__ */ e("span", { children: d }),
          !t && r && /* @__PURE__ */ e("span", { className: se.icon, children: r })
        ]
      }
    );
  }
);
Qe.displayName = "Button";
const Je = "_badge_qj0y6_1", Xe = "_dot_qj0y6_63", xe = {
  badge: Je,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Xe
}, Ye = ({
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
Ye.displayName = "Badge";
const Ze = "_container_df4fv_1", en = "_label_df4fv_13", nn = "_required_df4fv_23", tn = "_inputWrapper_df4fv_27", an = "_input_df4fv_27", rn = "_hasLeftIcon_df4fv_80", on = "_hasRightIcon_df4fv_84", sn = "_iconSlot_df4fv_88", ln = "_leftSlot_df4fv_96", cn = "_rightSlot_df4fv_100", dn = "_hasError_df4fv_105", _n = "_helperText_df4fv_113", un = "_errorMessage_df4fv_119", hn = "_disabled_df4fv_127", F = {
  container: Ze,
  "size-sm": "_size-sm_df4fv_9",
  label: en,
  required: nn,
  inputWrapper: tn,
  input: an,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: rn,
  hasRightIcon: on,
  iconSlot: sn,
  leftSlot: ln,
  rightSlot: cn,
  hasError: dn,
  helperText: _n,
  errorMessage: un,
  disabled: hn
}, mn = T(
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
mn.displayName = "Input";
const pn = "_container_fh5kq_1", bn = "_label_fh5kq_13", vn = "_required_fh5kq_23", fn = "_selectWrapper_fh5kq_27", gn = "_select_fh5kq_27", yn = "_chevronIcon_fh5kq_77", Nn = "_hasError_fh5kq_88", kn = "_helperText_fh5kq_96", xn = "_errorMessage_fh5kq_102", wn = "_disabled_fh5kq_110", ee = {
  container: pn,
  "size-sm": "_size-sm_fh5kq_9",
  label: bn,
  required: vn,
  selectWrapper: fn,
  select: gn,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: yn,
  hasError: Nn,
  helperText: kn,
  errorMessage: xn,
  disabled: wn
}, $n = T(
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
$n.displayName = "Select";
const Bn = "_container_1d3rw_1", In = "_label_1d3rw_14", Ln = "_required_1d3rw_24", Cn = "_trigger_1d3rw_28", Sn = "_isOpen_1d3rw_53", Rn = "_selectedContent_1d3rw_71", Dn = "_placeholder_1d3rw_80", qn = "_chevron_1d3rw_84", Mn = "_chevronOpen_1d3rw_93", zn = "_menu_1d3rw_98", An = "_dropdownIn_1d3rw_1", Tn = "_menuItem_1d3rw_116", Wn = "_itemDisabled_1d3rw_128", En = "_itemSelected_1d3rw_132", jn = "_itemLeft_1d3rw_147", Pn = "_itemText_1d3rw_154", On = "_itemLabel_1d3rw_161", Hn = "_itemDescription_1d3rw_169", Fn = "_checkSlot_1d3rw_174", Gn = "_hasError_1d3rw_183", Vn = "_helperText_1d3rw_191", Kn = "_errorMessage_1d3rw_197", Un = "_disabled_1d3rw_205", A = {
  container: Bn,
  "size-sm": "_size-sm_1d3rw_10",
  label: In,
  required: Ln,
  trigger: Cn,
  isOpen: Sn,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: Rn,
  placeholder: Dn,
  chevron: qn,
  chevronOpen: Mn,
  menu: zn,
  dropdownIn: An,
  menuItem: Tn,
  itemDisabled: Wn,
  itemSelected: En,
  itemLeft: jn,
  itemText: Pn,
  itemLabel: On,
  itemDescription: Hn,
  checkSlot: Fn,
  hasError: Gn,
  helperText: Vn,
  errorMessage: Kn,
  disabled: Un
}, Qn = "_container_1lebu_1", Jn = "_tint_1lebu_14", Xn = "_solid_1lebu_20", Yn = "_image_1lebu_26", Zn = "_fallback_1lebu_33", et = "_statusDot_1lebu_74", _e = {
  container: Qn,
  tint: Jn,
  solid: Xn,
  image: Yn,
  fallback: Zn,
  "size-xs": "_size-xs_1lebu_43",
  "size-sm": "_size-sm_1lebu_49",
  "size-md": "_size-md_1lebu_55",
  "size-lg": "_size-lg_1lebu_61",
  "size-xl": "_size-xl_1lebu_67",
  statusDot: et,
  "status-online": "_status-online_1lebu_102",
  "status-busy": "_status-busy_1lebu_106",
  "status-away": "_status-away_1lebu_110",
  "status-offline": "_status-offline_1lebu_114"
};
function nt(n, a) {
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
  const [_, g] = P(!1), f = nt(t, o), w = [
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
    ) : f ? /* @__PURE__ */ e("span", { className: _e.fallback, children: f }) : /* @__PURE__ */ e("span", { className: _e.fallback, children: /* @__PURE__ */ e(Ge, { size: x[r] }) }),
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
const tt = ({
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
        ), E = r[q + 1];
        E && !E.disabled && j(E);
      } else if (k.key === "ArrowUp" && v) {
        k.preventDefault();
        const q = r.findIndex(
          (K) => K.value === M
        ), E = r[q - 1];
        E && !E.disabled && j(E);
      }
    }
  }, W = [
    A.container,
    A[`size-${d}`],
    v ? A.isOpen : "",
    C ? A.hasError : "",
    _ ? A.disabled : "",
    f || ""
  ].filter(Boolean).join(" "), V = d === "sm" ? "xs" : d === "lg" ? "md" : "sm";
  return /* @__PURE__ */ i("div", { ref: p, className: W, children: [
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
          const q = k.value === M, E = [
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
              className: E,
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
tt.displayName = "Dropdown";
const at = "_container_1ms02_1", rt = "_hasDescription_1ms02_10", ot = "_box_1ms02_14", it = "_nativeInput_1ms02_32", st = "_checked_1ms02_45", lt = "_indeterminate_1ms02_46", ct = "_disabled_1ms02_51", dt = "_textGroup_1ms02_55", _t = "_label_1ms02_61", ut = "_description_1ms02_68", re = {
  container: at,
  hasDescription: rt,
  box: ot,
  nativeInput: it,
  checked: st,
  indeterminate: lt,
  disabled: ct,
  textGroup: dt,
  label: _t,
  description: ut
}, ht = T(
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
        r && /* @__PURE__ */ e(He, { size: 12 }),
        !r && w && /* @__PURE__ */ e(ge, { size: 12 })
      ] }),
      (n || a) && /* @__PURE__ */ i("span", { className: re.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: re.label, children: n }),
        a && /* @__PURE__ */ e("span", { className: re.description, children: a })
      ] })
    ] });
  }
);
ht.displayName = "Checkbox";
const mt = "_container_m4qf3_1", pt = "_label_m4qf3_9", bt = "_required_m4qf3_19", vt = "_textareaWrapper_m4qf3_23", ft = "_textarea_m4qf3_23", gt = "_hasError_m4qf3_58", yt = "_footer_m4qf3_66", Nt = "_helperText_m4qf3_74", kt = "_errorMessage_m4qf3_78", xt = "_charCount_m4qf3_83", wt = "_disabled_m4qf3_89", ne = {
  container: mt,
  label: pt,
  required: bt,
  textareaWrapper: vt,
  textarea: ft,
  hasError: gt,
  footer: yt,
  helperText: Nt,
  errorMessage: kt,
  charCount: xt,
  disabled: wt
}, $t = T(
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
$t.displayName = "Textarea";
const Bt = "_card_7pqx0_1", It = "_interactive_7pqx0_28", Lt = "_header_7pqx0_56", Ct = "_headerBordered_7pqx0_64", St = "_title_7pqx0_69", Rt = "_description_7pqx0_78", Dt = "_content_7pqx0_85", qt = "_footer_7pqx0_89", Mt = "_footerBordered_7pqx0_98", ae = {
  card: Bt,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: It,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: Lt,
  headerBordered: Ct,
  title: St,
  description: Rt,
  content: Dt,
  footer: qt,
  footerBordered: Mt
}, zt = T(
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
zt.displayName = "Card";
const At = T(
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
At.displayName = "CardHeader";
const Tt = T(
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
Tt.displayName = "CardTitle";
const Wt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e(
  "p",
  {
    ref: o,
    className: `${ae.description} ${n || ""}`,
    ...t,
    children: a
  }
));
Wt.displayName = "CardDescription";
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
const jt = T(
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
jt.displayName = "CardFooter";
const Pt = "_container_1xw60_1", Ot = "_table_1xw60_10", Ht = "_header_1xw60_19", Ft = "_headCell_1xw60_24", Gt = "_row_1xw60_35", Vt = "_hoverable_1xw60_44", Kt = "_cell_1xw60_48", Ut = "_tabularNums_1xw60_54", ie = {
  container: Pt,
  table: Ot,
  header: Ht,
  headCell: Ft,
  row: Gt,
  hoverable: Vt,
  cell: Kt,
  tabularNums: Ut,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Qt = T(
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
Qt.displayName = "Table";
const Jt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e("thead", { ref: o, className: `${ie.header} ${n || ""}`, ...t, children: a }));
Jt.displayName = "TableHeader";
const Xt = T(({ className: n, children: a, ...t }, o) => /* @__PURE__ */ e("tbody", { ref: o, className: n, ...t, children: a }));
Xt.displayName = "TableBody";
const Yt = T(
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
Yt.displayName = "TableRow";
const Zt = T(
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
Zt.displayName = "TableHead";
const ea = T(
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
ea.displayName = "TableCell";
const na = "_overlay_cpmq9_1", ta = "_fadeIn_cpmq9_1", aa = "_modal_cpmq9_15", ra = "_scaleIn_cpmq9_1", oa = "_header_cpmq9_44", ia = "_title_cpmq9_52", sa = "_closeButton_cpmq9_61", la = "_body_cpmq9_84", ca = "_footer_cpmq9_93", de = {
  overlay: na,
  fadeIn: ta,
  modal: aa,
  scaleIn: ra,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: oa,
  title: ia,
  closeButton: sa,
  body: la,
  footer: ca
}, da = ({
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
da.displayName = "Modal";
const _a = ({
  className: n,
  children: a,
  ...t
}) => /* @__PURE__ */ e("div", { className: `${de.footer} ${n || ""}`, ...t, children: a });
_a.displayName = "ModalFooter";
const ua = "_container_1242t_1", ha = "_navWrapper_1242t_7", ma = "_scrollContainer_1242t_16", pa = "_tabList_1242t_34", ba = "_tab_1242t_34", va = "_tabActive_1242t_117", fa = "_badge_1242t_145", ga = "_fullWidth_1242t_174", ya = "_scrollButton_1242t_183", Na = "_scrollButtonLeft_1242t_213", ka = "_scrollButtonRight_1242t_217", xa = "_hasScrollLeft_1242t_222", wa = "_hasScrollRight_1242t_238", $a = "_moreWrapper_1242t_257", Ba = "_moreButton_1242t_264", Ia = "_moreButtonActive_1242t_294", La = "_moreMenu_1242t_321", Ca = "_moreMenuItem_1242t_340", Sa = "_moreMenuItemActive_1242t_369", Ra = "_moreMenuItemLeft_1242t_380", Da = "_panel_1242t_390", z = {
  container: ua,
  navWrapper: ha,
  scrollContainer: ma,
  tabList: pa,
  "variant-underline": "_variant-underline_1242t_46",
  "variant-segmented": "_variant-segmented_1242t_57",
  tab: ba,
  "size-sm": "_size-sm_1242t_89",
  "size-md": "_size-md_1242t_95",
  "size-lg": "_size-lg_1242t_101",
  tabActive: va,
  badge: fa,
  fullWidth: ga,
  scrollButton: ya,
  scrollButtonLeft: Na,
  scrollButtonRight: ka,
  hasScrollLeft: xa,
  hasScrollRight: wa,
  moreWrapper: $a,
  moreButton: Ba,
  moreButtonActive: Ia,
  moreMenu: La,
  moreMenuItem: Ca,
  moreMenuItemActive: Sa,
  moreMenuItemLeft: Ra,
  panel: Da
}, qa = T(
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
    ), u = a !== void 0 ? a : p, M = X(null), R = X(/* @__PURE__ */ new Map()), I = X(null), [C, j] = P(!1), [G, W] = P(!1), [V, k] = P(!1), q = typeof _ == "number" && _ > 0 && n.length > _, E = q ? n.slice(0, _) : n, K = q ? n.slice(_) : [], be = K.some(
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
    const Z = qe(() => {
      const m = M.current;
      if (!m || !s) {
        j(!1), W(!1);
        return;
      }
      const { scrollLeft: B, scrollWidth: U, clientWidth: H } = m;
      j(B > 2), W(B + H < U - 2);
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
    }, [s, Z, E]), J(() => {
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
                  E.map((m) => {
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
                          /* @__PURE__ */ e(Ke, { size: 16 }),
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
            children: /* @__PURE__ */ e(Fe, { size: 16 })
          }
        )
      ] }),
      w
    ] });
  }
);
qa.displayName = "Tabs";
const Ma = T(
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
Ma.displayName = "TabPanel";
const za = "_container_1xroe_1", Aa = "_track_1xroe_10", Ta = "_thumb_1xroe_24", Wa = "_checked_1xroe_34", Ea = "_nativeInput_1xroe_43", ja = "_label_1xroe_55", Pa = "_description_1xroe_61", Oa = "_textGroup_1xroe_66", Ha = "_disabled_1xroe_72", le = {
  container: za,
  track: Aa,
  thumb: Ta,
  checked: Wa,
  nativeInput: Ea,
  label: ja,
  description: Pa,
  textGroup: Oa,
  disabled: Ha
}, Fa = T(
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
Fa.displayName = "Switch";
const Ga = "_group_1e0nk_1", Va = "_groupLabel_1e0nk_8", Ka = "_item_1e0nk_14", Ua = "_circle_1e0nk_22", Qa = "_dot_1e0nk_35", Ja = "_checked_1e0nk_45", Xa = "_nativeInput_1e0nk_54", Ya = "_label_1e0nk_67", Za = "_description_1e0nk_73", er = "_textGroup_1e0nk_78", nr = "_disabled_1e0nk_84", te = {
  group: Ga,
  groupLabel: Va,
  item: Ka,
  circle: Ua,
  dot: Qa,
  checked: Ja,
  nativeInput: Xa,
  label: Ya,
  description: Za,
  textGroup: er,
  disabled: nr
}, Ce = ze(null), tr = ({
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
tr.displayName = "RadioGroup";
const ar = T(
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
    const _ = Me(Ce), g = _ ? _.value === n : l, f = o || (_ == null ? void 0 : _.disabled) || !1, w = (_ == null ? void 0 : _.name) || s.name, x = [
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
ar.displayName = "Radio";
const rr = "_wrapper_yiqhg_1", or = "_searchIcon_yiqhg_8", ir = "_input_yiqhg_18", sr = "_rightSlots_yiqhg_42", lr = "_clearButton_yiqhg_50", cr = "_shortcut_yiqhg_66", ve = {
  wrapper: rr,
  searchIcon: or,
  input: ir,
  rightSlots: sr,
  clearButton: lr,
  shortcut: cr
}, dr = ({
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
), _r = T(
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
      /* @__PURE__ */ e("span", { className: ve.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(dr, {}) }),
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
_r.displayName = "SearchInput";
const ur = "_card_kgob9_1", hr = "_topRow_kgob9_18", mr = "_title_kgob9_25", pr = "_iconSlot_kgob9_33", br = "_metricRow_kgob9_49", vr = "_value_kgob9_55", fr = "_trendBadge_kgob9_65", gr = "_description_kgob9_90", oe = {
  card: ur,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: hr,
  title: mr,
  iconSlot: pr,
  metricRow: br,
  value: vr,
  trendBadge: fr,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: gr
}, yr = ({
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
yr.displayName = "StatCard";
const Nr = "_overlay_lam6o_1", kr = "_fadeIn_lam6o_1", xr = "_drawer_lam6o_11", wr = "_slideInRight_lam6o_1", $r = "_slideInLeft_lam6o_1", Br = "_header_lam6o_51", Ir = "_title_lam6o_59", Lr = "_closeButton_lam6o_67", Cr = "_body_lam6o_90", Sr = "_footer_lam6o_99", ce = {
  overlay: Nr,
  fadeIn: kr,
  drawer: xr,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: wr,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: $r,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: Br,
  title: Ir,
  closeButton: Lr,
  body: Cr,
  footer: Sr
}, Rr = ({
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
Rr.displayName = "Drawer";
const Dr = "_chip_ldr6y_1", qr = "_pill_ldr6y_14", Mr = "_rounded_ldr6y_18", zr = "_sm_ldr6y_22", Ar = "_md_ldr6y_36", Tr = "_lg_ldr6y_45", Wr = "_neutral_ldr6y_55", Er = "_primary_ldr6y_61", jr = "_tonal_ldr6y_68", Pr = "_outline_ldr6y_75", Or = "_success_ldr6y_81", Hr = "_warning_ldr6y_87", Fr = "_danger_ldr6y_93", Gr = "_clickable_ldr6y_100", Vr = "_disabled_ldr6y_104", Kr = "_selected_ldr6y_104", Ur = "_selectedIcon_ldr6y_131", Qr = "_avatarSlot_ldr6y_139", Jr = "_hasAvatar_ldr6y_183", Xr = "_iconSlot_ldr6y_212", Yr = "_label_ldr6y_221", Zr = "_countBadge_ldr6y_230", eo = "_removeButton_ldr6y_251", Q = {
  chip: Dr,
  pill: qr,
  rounded: Mr,
  sm: zr,
  md: Ar,
  lg: Tr,
  neutral: Wr,
  primary: Er,
  tonal: jr,
  outline: Pr,
  success: Or,
  warning: Hr,
  danger: Fr,
  clickable: Gr,
  disabled: Vr,
  selected: Kr,
  selectedIcon: Ur,
  avatarSlot: Qr,
  hasAvatar: Jr,
  iconSlot: Xr,
  label: Yr,
  countBadge: Zr,
  removeButton: eo
}, no = ({
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
}, to = "_container_d3es0_1", ao = "_label_d3es0_14", ro = "_required_d3es0_24", oo = "_trigger_d3es0_29", io = "_disabled_d3es0_50", so = "_isOpen_d3es0_54", lo = "_chipContainer_d3es0_72", co = "_searchInput_d3es0_81", _o = "_placeholder_d3es0_93", uo = "_moreCount_d3es0_97", ho = "_trailing_d3es0_112", mo = "_clearAllButton_d3es0_119", po = "_chevron_d3es0_137", bo = "_menu_d3es0_149", vo = "_empty_d3es0_169", fo = "_option_d3es0_177", go = "_focused_d3es0_193", yo = "_selected_d3es0_197", No = "_checkboxSlot_d3es0_206", ko = "_checkboxBox_d3es0_213", xo = "_checkboxChecked_d3es0_226", wo = "_avatarSlot_d3es0_231", $o = "_iconSlot_d3es0_244", Bo = "_labelCol_d3es0_251", Io = "_labelRow_d3es0_258", Lo = "_optionLabel_d3es0_265", Co = "_badge_d3es0_272", So = "_optionDescription_d3es0_300", Ro = "_optionDisabled_d3es0_307", Do = "_hasError_d3es0_314", qo = "_errorText_d3es0_323", Mo = "_helperText_d3es0_328", L = {
  container: to,
  "size-sm": "_size-sm_d3es0_10",
  label: ao,
  required: ro,
  trigger: oo,
  disabled: io,
  isOpen: so,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: lo,
  searchInput: co,
  placeholder: _o,
  moreCount: uo,
  trailing: ho,
  clearAllButton: mo,
  chevron: po,
  menu: bo,
  empty: vo,
  option: fo,
  focused: go,
  selected: yo,
  checkboxSlot: No,
  checkboxBox: ko,
  checkboxChecked: xo,
  avatarSlot: wo,
  iconSlot: $o,
  labelCol: Bo,
  labelRow: Io,
  optionLabel: Lo,
  badge: Co,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: So,
  optionDisabled: Ro,
  hasError: Do,
  errorText: qo,
  helperText: Mo
}, Hs = ({
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
  const v = ue(), u = N || v, M = X(null), R = X(null), [I, C] = P(!1), [j, G] = P(""), [W, V] = P(
    l || c || []
  ), [k, q] = P(-1);
  J(() => {
    l !== void 0 && V(l);
  }, [l]);
  const E = fe(() => r.filter((h) => W.includes(h.value)), [r, W]), K = fe(() => {
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
    W.includes(h.value) ? S = W.filter((B) => B !== h.value) : S = [...W, h.value], l === void 0 && V(S);
    const m = r.filter((B) => S.includes(B.value));
    s == null || s(S, m);
  }, Z = (h) => {
    if (g) return;
    const S = W.filter((B) => B !== h);
    l === void 0 && V(S);
    const m = r.filter((B) => S.includes(B.value));
    s == null || s(S, m);
  }, he = (h) => {
    if (!g) {
      if (h.key === "Backspace" && j === "" && W.length > 0) {
        Z(W[W.length - 1]);
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
  }, y = p ? E.slice(0, p) : E, $ = p ? Math.max(0, E.length - p) : 0, Y = !!o;
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
                  no,
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
                    placeholder: E.length === 0 ? a : "",
                    value: j,
                    onChange: (h) => {
                      G(h.target.value), I || C(!0);
                    },
                    onClick: (h) => h.stopPropagation(),
                    disabled: g
                  }
                ) : E.length === 0 && /* @__PURE__ */ e("span", { className: L.placeholder, children: a })
              ] }),
              /* @__PURE__ */ i("div", { className: L.trailing, children: [
                W.length > 0 && !g && /* @__PURE__ */ e(
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
          const m = W.includes(h.value), B = S === k;
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
}, zo = "_container_1nphi_1", Ao = "_label_1nphi_10", To = "_required_1nphi_20", Wo = "_trigger_1nphi_25", Eo = "_disabled_1nphi_45", jo = "_isOpen_1nphi_49", Po = "_searchIcon_1nphi_55", Oo = "_input_1nphi_63", Ho = "_clearButton_1nphi_81", Fo = "_chevron_1nphi_98", Go = "_menu_1nphi_110", Vo = "_optionsList_1nphi_129", Ko = "_groupBlock_1nphi_135", Uo = "_groupHeader_1nphi_140", Qo = "_option_1nphi_129", Jo = "_focused_1nphi_174", Xo = "_selected_1nphi_178", Yo = "_optionContent_1nphi_182", Zo = "_optionIcon_1nphi_190", ei = "_optionLabel_1nphi_197", ni = "_highlight_1nphi_206", ti = "_optionBadge_1nphi_211", ai = "_optionDisabled_1nphi_223", ri = "_emptyFallback_1nphi_230", oi = "_emptyIcon_1nphi_240", ii = "_emptyTitle_1nphi_254", si = "_emptySubtitle_1nphi_260", li = "_footerGuide_1nphi_267", ci = "_hasError_1nphi_280", di = "_errorText_1nphi_289", _i = "_helperText_1nphi_294", D = {
  container: zo,
  label: Ao,
  required: To,
  trigger: Wo,
  disabled: Eo,
  isOpen: jo,
  searchIcon: Po,
  input: Oo,
  clearButton: Ho,
  chevron: Fo,
  menu: Go,
  optionsList: Vo,
  groupBlock: Ko,
  groupHeader: Uo,
  option: Qo,
  focused: Jo,
  selected: Xo,
  optionContent: Yo,
  optionIcon: Zo,
  optionLabel: ei,
  highlight: ni,
  optionBadge: ti,
  optionDisabled: ai,
  emptyFallback: ri,
  emptyIcon: oi,
  emptyTitle: ii,
  emptySubtitle: si,
  footerGuide: li,
  hasError: ci,
  errorText: di,
  helperText: _i
}, Fs = ({
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
  const W = fe(() => r.find((y) => y.value === M), [r, M]);
  J(() => {
    !v && W ? C(W.label) : !v && !W && C("");
  }, [v, W]);
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
  const E = (y) => {
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
      y.key === "Escape" ? (y.preventDefault(), u(!1), G(-1)) : y.key === "ArrowDown" ? (y.preventDefault(), G(($) => $ < q.length - 1 ? $ + 1 : 0)) : y.key === "ArrowUp" ? (y.preventDefault(), G(($) => $ > 0 ? $ - 1 : q.length - 1)) : y.key === "Enter" && j >= 0 && j < q.length && (y.preventDefault(), E(q[j]));
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
              /* @__PURE__ */ e("span", { className: D.searchIcon, children: /* @__PURE__ */ e(Ve, { size: 14 }) }),
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
                        m.stopPropagation(), E($);
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
}, ui = O.forwardRef(
  ({ className: n = "", children: a, ...t }, o) => /* @__PURE__ */ e("div", { ref: o, className: `ui-page-shell ${n}`.trim(), ...t, children: a })
);
ui.displayName = "PageShell";
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
const hi = O.forwardRef(
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
hi.displayName = "PageBody";
const mi = O.forwardRef(
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
mi.displayName = "PageHeader";
const pi = O.forwardRef(
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
pi.displayName = "SubNavStrip";
const bi = O.forwardRef(
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
bi.displayName = "PageHero";
const vi = O.forwardRef(
  ({ className: n = "", children: a, ...t }, o) => /* @__PURE__ */ e("div", { ref: o, className: `ui-card-slot ${n}`.trim(), ...t, children: a })
);
vi.displayName = "CardSlot";
const fi = O.forwardRef(
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
fi.displayName = "PageFooter";
const gi = "_bottomNavigation_1ixtb_6", yi = "_bottomNavigationDocked_1ixtb_22", Ni = "_bottomNavItem_1ixtb_31", ki = "_bottomNavItemActive_1ixtb_60", xi = "_bottomNavIconWrapper_1ixtb_68", wi = "_bottomNavActivePill_1ixtb_76", $i = "_bottomNavLabel_1ixtb_87", Bi = "_bottomNavBadge_1ixtb_99", Ii = "_navigationRail_1ixtb_122", Li = "_navigationRailHorizontal_1ixtb_134", Ci = "_navigationRailDark_1ixtb_142", Si = "_navigationRailLight_1ixtb_149", Ri = "_navigationRailDocked_1ixtb_156", Di = "_railBrandSlot_1ixtb_161", qi = "_railBrandIcon_1ixtb_172", Mi = "_railBrandTitle_1ixtb_186", zi = "_railItemsStack_1ixtb_192", Ai = "_railItem_1ixtb_192", Ti = "_railItemActive_1ixtb_239", Wi = "_railItemBadge_1ixtb_263", Ei = "_railFooterSlot_1ixtb_281", ji = "_breadcrumb_1ixtb_298", Pi = "_breadcrumbPrimary_1ixtb_303", Oi = "_breadcrumbSubtle_1ixtb_311", Hi = "_breadcrumbPlain_1ixtb_318", Fi = "_breadcrumbList_1ixtb_325", Gi = "_breadcrumbItem_1ixtb_338", Vi = "_breadcrumbLink_1ixtb_344", Ki = "_breadcrumbCurrent_1ixtb_358", Ui = "_breadcrumbSeparator_1ixtb_369", Qi = "_mobileWayfinding_1ixtb_378", Ji = "_wayfindingHeaderRow_1ixtb_389", Xi = "_wayfindingBackBtn_1ixtb_396", Yi = "_wayfindingBackIcon_1ixtb_417", Zi = "_wayfindingCurrentTrigger_1ixtb_422", es = "_wayfindingCurrentLabel_1ixtb_442", ns = "_wayfindingCurrentIcon_1ixtb_448", ts = "_wayfindingCurrentIconOpen_1ixtb_455", as = "_wayfindingPopover_1ixtb_459", rs = "_wayfindingPopoverMeta_1ixtb_469", os = "_wayfindingPopoverAction_1ixtb_479", is = "_wayfindingPathList_1ixtb_484", ss = "_wayfindingPathItem_1ixtb_490", ls = "_wayfindingPathItemActive_1ixtb_511", cs = "_appNavbar_1ixtb_520", ds = "_navbarLeft_1ixtb_535", _s = "_navbarBrand_1ixtb_541", us = "_navbarBrandLogo_1ixtb_550", hs = "_navbarBrandTitles_1ixtb_565", ms = "_navbarBrandName_1ixtb_570", ps = "_navbarBrandSubtitle_1ixtb_578", bs = "_navbarMenu_1ixtb_584", vs = "_navbarMenuItem_1ixtb_593", fs = "_navbarMenuLink_1ixtb_597", gs = "_navbarMenuLinkActive_1ixtb_626", ys = "_navbarDropdown_1ixtb_633", Ns = "_navbarDropdownItem_1ixtb_652", ks = "_navbarRight_1ixtb_682", xs = "_navbarMobileToggle_1ixtb_688", ws = "_navbarMobileDrawer_1ixtb_701", $s = "_navbarMobileDrawerContent_1ixtb_714", b = {
  bottomNavigation: gi,
  bottomNavigationDocked: yi,
  bottomNavItem: Ni,
  bottomNavItemActive: ki,
  bottomNavIconWrapper: xi,
  bottomNavActivePill: wi,
  bottomNavLabel: $i,
  bottomNavBadge: Bi,
  navigationRail: Ii,
  navigationRailHorizontal: Li,
  navigationRailDark: Ci,
  navigationRailLight: Si,
  navigationRailDocked: Ri,
  railBrandSlot: Di,
  railBrandIcon: qi,
  railBrandTitle: Mi,
  railItemsStack: zi,
  railItem: Ai,
  railItemActive: Ti,
  railItemBadge: Wi,
  railFooterSlot: Ei,
  breadcrumb: ji,
  breadcrumbPrimary: Pi,
  breadcrumbSubtle: Oi,
  breadcrumbPlain: Hi,
  breadcrumbList: Fi,
  breadcrumbItem: Gi,
  breadcrumbLink: Vi,
  breadcrumbCurrent: Ki,
  breadcrumbSeparator: Ui,
  mobileWayfinding: Qi,
  wayfindingHeaderRow: Ji,
  wayfindingBackBtn: Xi,
  wayfindingBackIcon: Yi,
  wayfindingCurrentTrigger: Zi,
  wayfindingCurrentLabel: es,
  wayfindingCurrentIcon: ns,
  wayfindingCurrentIconOpen: ts,
  wayfindingPopover: as,
  wayfindingPopoverMeta: rs,
  wayfindingPopoverAction: os,
  wayfindingPathList: is,
  wayfindingPathItem: ss,
  wayfindingPathItemActive: ls,
  appNavbar: cs,
  navbarLeft: ds,
  navbarBrand: _s,
  navbarBrandLogo: us,
  navbarBrandTitles: hs,
  navbarBrandName: ms,
  navbarBrandSubtitle: ps,
  navbarMenu: bs,
  navbarMenuItem: vs,
  navbarMenuLink: fs,
  navbarMenuLinkActive: gs,
  navbarDropdown: ys,
  navbarDropdownItem: Ns,
  navbarRight: ks,
  navbarMobileToggle: xs,
  navbarMobileDrawer: ws,
  navbarMobileDrawerContent: $s
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
const Gs = Se, Vs = Be, Re = O.forwardRef(
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
const Bs = O.forwardRef(
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
Bs.displayName = "NavigationRail";
const Is = O.forwardRef(
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
Is.displayName = "Breadcrumb";
const Ls = O.forwardRef(
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
Ls.displayName = "MobileWayfinding";
const De = O.forwardRef(
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
                children: N ? /* @__PURE__ */ e(ye, { size: 18 }) : /* @__PURE__ */ e(Ue, { size: 18 })
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
De.displayName = "AppNavbar";
const Ks = De;
export {
  De as AppNavbar,
  Ne as Avatar,
  Ye as Badge,
  zs as BellIcon,
  Ms as BookOpenIcon,
  Gs as BottomNav,
  Vs as BottomNavItem,
  Se as BottomNavigation,
  Be as BottomNavigationItem,
  Is as Breadcrumb,
  Qe as Button,
  qs as CalendarIcon,
  zt as Card,
  Et as CardContent,
  Wt as CardDescription,
  jt as CardFooter,
  At as CardHeader,
  vi as CardSlot,
  Tt as CardTitle,
  ge as CheckIcon,
  ht as Checkbox,
  pe as ChevronDownIcon,
  Le as ChevronLeftIcon,
  Fe as ChevronRightIcon,
  no as Chip,
  Ws as ClipboardCheckIcon,
  ye as CloseIcon,
  Fs as Combobox,
  Es as DeviceMobileIcon,
  js as DocumentIcon,
  Rr as Drawer,
  tt as Dropdown,
  Ps as FlaskIcon,
  Ds as HomeIcon,
  mn as Input,
  As as LayersIcon,
  Ue as MenuIcon,
  Os as MessageDotsIcon,
  He as MinusIcon,
  Ls as MobileWayfinding,
  da as Modal,
  _a as ModalFooter,
  Ke as MoreHorizontalIcon,
  Hs as MultiSelect,
  Ks as Navbar,
  Bs as NavigationRail,
  Re as NavigationRailItem,
  hi as PageBody,
  ke as PageContainer,
  fi as PageFooter,
  mi as PageHeader,
  bi as PageHero,
  ui as PageShell,
  ar as Radio,
  tr as RadioGroup,
  Ve as SearchIcon,
  _r as SearchInput,
  $n as Select,
  Ts as SettingsIcon,
  Oe as SpinnerIcon,
  yr as StatCard,
  pi as SubNavStrip,
  Fa as Switch,
  Ma as TabPanel,
  Qt as Table,
  Xt as TableBody,
  ea as TableCell,
  Zt as TableHead,
  Jt as TableHeader,
  Yt as TableRow,
  qa as Tabs,
  $t as Textarea,
  Ge as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
