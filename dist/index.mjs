import { jsx as e, jsxs as l, Fragment as we } from "react/jsx-runtime";
import ae, { forwardRef as R, useId as _e, useState as P, useRef as te, useEffect as U, useCallback as Be, useContext as Ce, createContext as Se, useMemo as fe } from "react";
import { createPortal as xe } from "react-dom";
const qe = "_button_1ckl5_1", Le = "_fullWidth_1ckl5_109", ze = "_disabled_1ckl5_113", Re = "_loading_1ckl5_120", De = "_spinner_1ckl5_124", Ee = "_icon_1ckl5_130", oe = {
  button: qe,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: Le,
  disabled: ze,
  loading: Re,
  spinner: De,
  icon: Ee
}, je = ({
  size: t = 18,
  className: n,
  ...s
}) => /* @__PURE__ */ l(
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
), ve = ({
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
), Te = ({
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
), ge = ({
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
), We = ({
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
    children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" })
  }
), Me = ({
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
    children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" })
  }
), ye = ({
  size: t = 18,
  className: n,
  ...s
}) => /* @__PURE__ */ l(
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
), Oe = ({
  size: t = 20,
  className: n,
  ...s
}) => /* @__PURE__ */ l(
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
), Ae = ({
  size: t = 16,
  className: n,
  ...s
}) => /* @__PURE__ */ l(
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
), Pe = ({
  size: t = 16,
  className: n,
  ...s
}) => /* @__PURE__ */ l(
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
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1.5", fill: "currentColor" })
    ]
  }
), Fe = R(
  ({
    variant: t = "primary",
    size: n = "md",
    isLoading: s = !1,
    leftIcon: a,
    rightIcon: r,
    fullWidth: c = !1,
    disabled: h,
    className: i,
    children: _,
    ...u
  }, g) => {
    const b = [
      oe.button,
      oe[`variant-${t}`],
      oe[`size-${n}`],
      c ? oe.fullWidth : "",
      s ? oe.loading : "",
      h || s ? oe.disabled : "",
      i || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l(
      "button",
      {
        ref: g,
        disabled: h || s,
        className: b,
        "aria-busy": s,
        ...u,
        children: [
          s && /* @__PURE__ */ e("span", { className: oe.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(je, { size: n === "sm" ? 14 : n === "lg" ? 20 : 16 }) }),
          !s && a && /* @__PURE__ */ e("span", { className: oe.icon, children: a }),
          _ && /* @__PURE__ */ e("span", { children: _ }),
          !s && r && /* @__PURE__ */ e("span", { className: oe.icon, children: r })
        ]
      }
    );
  }
);
Fe.displayName = "Button";
const Ge = "_badge_qj0y6_1", He = "_dot_qj0y6_63", $e = {
  badge: Ge,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: He
}, Ke = ({
  variant: t = "neutral",
  size: n = "md",
  withDot: s = !1,
  leftIcon: a,
  rightIcon: r,
  className: c,
  children: h,
  ...i
}) => {
  const _ = [
    $e.badge,
    $e[`variant-${t}`],
    $e[`size-${n}`],
    c || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l("span", { className: _, ...i, children: [
    s && /* @__PURE__ */ e("span", { className: $e.dot, "aria-hidden": "true" }),
    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: a }),
    /* @__PURE__ */ e("span", { children: h }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
  ] });
};
Ke.displayName = "Badge";
const Ve = "_container_df4fv_1", Ue = "_label_df4fv_13", Qe = "_required_df4fv_23", Je = "_inputWrapper_df4fv_27", Xe = "_input_df4fv_27", Ye = "_hasLeftIcon_df4fv_80", Ze = "_hasRightIcon_df4fv_84", et = "_iconSlot_df4fv_88", tt = "_leftSlot_df4fv_96", nt = "_rightSlot_df4fv_100", st = "_hasError_df4fv_105", rt = "_helperText_df4fv_113", at = "_errorMessage_df4fv_119", ot = "_disabled_df4fv_127", A = {
  container: Ve,
  "size-sm": "_size-sm_df4fv_9",
  label: Ue,
  required: Qe,
  inputWrapper: Je,
  input: Xe,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: Ye,
  hasRightIcon: Ze,
  iconSlot: et,
  leftSlot: tt,
  rightSlot: nt,
  hasError: st,
  helperText: rt,
  errorMessage: at,
  disabled: ot
}, lt = R(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    inputSize: a = "md",
    leftIcon: r,
    rightIcon: c,
    isRequired: h = !1,
    disabled: i = !1,
    id: _,
    className: u,
    ...g
  }, b) => {
    const x = _e(), k = _ || x, N = !!s, f = [
      A.container,
      A[`size-${a}`],
      N ? A.hasError : "",
      i ? A.disabled : "",
      r ? A.hasLeftIcon : "",
      c ? A.hasRightIcon : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: f, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: k, className: A.label, children: [
        t,
        h && /* @__PURE__ */ e("span", { className: A.required, children: "*" })
      ] }),
      /* @__PURE__ */ l("div", { className: A.inputWrapper, children: [
        r && /* @__PURE__ */ e("span", { className: `${A.iconSlot} ${A.leftSlot}`, children: r }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: b,
            id: k,
            disabled: i,
            "aria-invalid": N,
            "aria-describedby": N ? `${k}-error` : n ? `${k}-helper` : void 0,
            className: A.input,
            ...g
          }
        ),
        c && /* @__PURE__ */ e("span", { className: `${A.iconSlot} ${A.rightSlot}`, children: c })
      ] }),
      N && /* @__PURE__ */ e(
        "span",
        {
          id: `${k}-error`,
          className: A.errorMessage,
          role: "alert",
          children: s
        }
      ),
      !N && n && /* @__PURE__ */ e("span", { id: `${k}-helper`, className: A.helperText, children: n })
    ] });
  }
);
lt.displayName = "Input";
const it = "_container_fh5kq_1", ct = "_label_fh5kq_13", dt = "_required_fh5kq_23", _t = "_selectWrapper_fh5kq_27", ut = "_select_fh5kq_27", ht = "_chevronIcon_fh5kq_77", mt = "_hasError_fh5kq_88", pt = "_helperText_fh5kq_96", ft = "_errorMessage_fh5kq_102", bt = "_disabled_fh5kq_110", X = {
  container: it,
  "size-sm": "_size-sm_fh5kq_9",
  label: ct,
  required: dt,
  selectWrapper: _t,
  select: ut,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: ht,
  hasError: mt,
  helperText: pt,
  errorMessage: ft,
  disabled: bt
}, vt = R(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    selectSize: a = "md",
    options: r,
    placeholder: c,
    isRequired: h = !1,
    disabled: i = !1,
    id: _,
    className: u,
    children: g,
    ...b
  }, x) => {
    const k = _e(), N = _ || k, f = !!s, v = [
      X.container,
      X[`size-${a}`],
      f ? X.hasError : "",
      i ? X.disabled : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: v, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: N, className: X.label, children: [
        t,
        h && /* @__PURE__ */ e("span", { className: X.required, children: "*" })
      ] }),
      /* @__PURE__ */ l("div", { className: X.selectWrapper, children: [
        /* @__PURE__ */ l(
          "select",
          {
            ref: x,
            id: N,
            disabled: i,
            "aria-invalid": f,
            "aria-describedby": f ? `${N}-error` : n ? `${N}-helper` : void 0,
            className: X.select,
            ...b,
            children: [
              c && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: c }),
              r ? r.map((B) => /* @__PURE__ */ e(
                "option",
                {
                  value: B.value,
                  disabled: B.disabled,
                  children: B.label
                },
                B.value
              )) : g
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: X.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(ge, { size: 16 }) })
      ] }),
      f && /* @__PURE__ */ e(
        "span",
        {
          id: `${N}-error`,
          className: X.errorMessage,
          role: "alert",
          children: s
        }
      ),
      !f && n && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: X.helperText, children: n })
    ] });
  }
);
vt.displayName = "Select";
const gt = "_container_1d3rw_1", yt = "_label_1d3rw_14", Nt = "_required_1d3rw_24", $t = "_trigger_1d3rw_28", kt = "_isOpen_1d3rw_53", wt = "_selectedContent_1d3rw_71", xt = "_placeholder_1d3rw_80", It = "_chevron_1d3rw_84", Bt = "_chevronOpen_1d3rw_93", Ct = "_menu_1d3rw_98", St = "_dropdownIn_1d3rw_1", qt = "_menuItem_1d3rw_116", Lt = "_itemDisabled_1d3rw_128", zt = "_itemSelected_1d3rw_132", Rt = "_itemLeft_1d3rw_147", Dt = "_itemText_1d3rw_154", Et = "_itemLabel_1d3rw_161", jt = "_itemDescription_1d3rw_169", Tt = "_checkSlot_1d3rw_174", Wt = "_hasError_1d3rw_183", Mt = "_helperText_1d3rw_191", Ot = "_errorMessage_1d3rw_197", At = "_disabled_1d3rw_205", z = {
  container: gt,
  "size-sm": "_size-sm_1d3rw_10",
  label: yt,
  required: Nt,
  trigger: $t,
  isOpen: kt,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: wt,
  placeholder: xt,
  chevron: It,
  chevronOpen: Bt,
  menu: Ct,
  dropdownIn: St,
  menuItem: qt,
  itemDisabled: Lt,
  itemSelected: zt,
  itemLeft: Rt,
  itemText: Dt,
  itemLabel: Et,
  itemDescription: jt,
  checkSlot: Tt,
  hasError: Wt,
  helperText: Mt,
  errorMessage: Ot,
  disabled: At
}, Pt = "_container_1lebu_1", Ft = "_tint_1lebu_14", Gt = "_solid_1lebu_20", Ht = "_image_1lebu_26", Kt = "_fallback_1lebu_33", Vt = "_statusDot_1lebu_74", de = {
  container: Pt,
  tint: Ft,
  solid: Gt,
  image: Ht,
  fallback: Kt,
  "size-xs": "_size-xs_1lebu_43",
  "size-sm": "_size-sm_1lebu_49",
  "size-md": "_size-md_1lebu_55",
  "size-lg": "_size-lg_1lebu_61",
  "size-xl": "_size-xl_1lebu_67",
  statusDot: Vt,
  "status-online": "_status-online_1lebu_102",
  "status-busy": "_status-busy_1lebu_106",
  "status-away": "_status-away_1lebu_110",
  "status-offline": "_status-offline_1lebu_114"
};
function Ut(t, n) {
  if (n) return n;
  if (!t) return "";
  const s = t.trim().split(/\s+/);
  return s.length === 1 ? s[0].substring(0, 2).toUpperCase() : (s[0][0] + s[s.length - 1][0]).toUpperCase();
}
const be = ({
  src: t,
  alt: n = "",
  name: s,
  initials: a,
  size: r = "md",
  variant: c = "tint",
  status: h,
  className: i,
  ..._
}) => {
  const [u, g] = P(!1), b = Ut(s, a), x = [
    de.container,
    de[`size-${r}`],
    de[c],
    i || ""
  ].filter(Boolean).join(" "), k = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ l("div", { className: x, title: s || n, ..._, children: [
    t && !u ? /* @__PURE__ */ e(
      "img",
      {
        src: t,
        alt: n || s || "Avatar",
        className: de.image,
        onError: () => g(!0)
      }
    ) : b ? /* @__PURE__ */ e("span", { className: de.fallback, children: b }) : /* @__PURE__ */ e("span", { className: de.fallback, children: /* @__PURE__ */ e(Oe, { size: k[r] }) }),
    h && /* @__PURE__ */ e(
      "span",
      {
        className: `${de.statusDot} ${de[`status-${h}`]}`,
        "aria-label": `Status: ${h}`
      }
    )
  ] });
};
be.displayName = "Avatar";
const Qt = ({
  label: t,
  placeholder: n = "Select an option...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: c,
  defaultValue: h,
  onChange: i,
  size: _ = "md",
  disabled: u = !1,
  isRequired: g = !1,
  className: b,
  id: x
}) => {
  const k = _e(), N = x || k, f = te(null), [v, B] = P(!1), [T, M] = P(
    c || h
  );
  U(() => {
    c !== void 0 && M(c);
  }, [c]), U(() => {
    const p = (q) => {
      f.current && !f.current.contains(q.target) && B(!1);
    };
    return v && document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, [v]);
  const S = r.find((p) => p.value === T), D = !!a, W = (p) => {
    p.disabled || (M(p.value), i == null || i(p.value, p), B(!1));
  }, F = (p) => {
    if (!u) {
      if (p.key === "Enter" || p.key === " ")
        p.preventDefault(), B((q) => !q);
      else if (p.key === "Escape")
        B(!1);
      else if (p.key === "ArrowDown" && v) {
        p.preventDefault();
        const q = r.findIndex(
          (H) => H.value === T
        ), j = r[q + 1];
        j && !j.disabled && W(j);
      } else if (p.key === "ArrowUp" && v) {
        p.preventDefault();
        const q = r.findIndex(
          (H) => H.value === T
        ), j = r[q - 1];
        j && !j.disabled && W(j);
      }
    }
  }, E = [
    z.container,
    z[`size-${_}`],
    v ? z.isOpen : "",
    D ? z.hasError : "",
    u ? z.disabled : "",
    b || ""
  ].filter(Boolean).join(" "), G = _ === "sm" ? "xs" : _ === "lg" ? "md" : "sm";
  return /* @__PURE__ */ l("div", { ref: f, className: E, children: [
    t && /* @__PURE__ */ l("label", { id: `${N}-label`, className: z.label, children: [
      t,
      g && /* @__PURE__ */ e("span", { className: z.required, children: "*" })
    ] }),
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        id: N,
        "aria-haspopup": "listbox",
        "aria-expanded": v,
        "aria-labelledby": t ? `${N}-label ${N}` : void 0,
        disabled: u,
        onClick: () => B((p) => !p),
        onKeyDown: F,
        className: z.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: z.selectedContent, children: S ? /* @__PURE__ */ l(we, { children: [
            S.avatar && /* @__PURE__ */ e(
              be,
              {
                size: S.avatar.size || G,
                ...S.avatar
              }
            ),
            S.icon && /* @__PURE__ */ e("span", { children: S.icon }),
            /* @__PURE__ */ e("span", { children: S.label })
          ] }) : /* @__PURE__ */ e("span", { className: z.placeholder, children: n }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${z.chevron} ${v ? z.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(ge, { size: 16 })
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
        className: z.menu,
        children: r.map((p) => {
          const q = p.value === T, j = [
            z.menuItem,
            q ? z.itemSelected : "",
            p.disabled ? z.itemDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ l(
            "li",
            {
              role: "option",
              "aria-selected": q,
              "aria-disabled": p.disabled,
              onClick: () => W(p),
              className: j,
              children: [
                /* @__PURE__ */ l("div", { className: z.itemLeft, children: [
                  p.avatar && /* @__PURE__ */ e(
                    be,
                    {
                      size: p.avatar.size || G,
                      ...p.avatar
                    }
                  ),
                  p.icon && /* @__PURE__ */ e("span", { children: p.icon }),
                  /* @__PURE__ */ l("div", { className: z.itemText, children: [
                    /* @__PURE__ */ e("span", { className: z.itemLabel, children: p.label }),
                    p.description && /* @__PURE__ */ e("span", { className: z.itemDescription, children: p.description })
                  ] })
                ] }),
                q && /* @__PURE__ */ e("span", { className: z.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(ve, { size: 14 }) })
              ]
            },
            p.value
          );
        })
      }
    ),
    D && /* @__PURE__ */ e(
      "span",
      {
        id: `${N}-error`,
        className: z.errorMessage,
        role: "alert",
        children: a
      }
    ),
    !D && s && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: z.helperText, children: s })
  ] });
};
Qt.displayName = "Dropdown";
const Jt = "_container_1ms02_1", Xt = "_hasDescription_1ms02_10", Yt = "_box_1ms02_14", Zt = "_nativeInput_1ms02_32", en = "_checked_1ms02_45", tn = "_indeterminate_1ms02_46", nn = "_disabled_1ms02_51", sn = "_textGroup_1ms02_55", rn = "_label_1ms02_61", an = "_description_1ms02_68", ne = {
  container: Jt,
  hasDescription: Xt,
  box: Yt,
  nativeInput: Zt,
  checked: en,
  indeterminate: tn,
  disabled: nn,
  textGroup: sn,
  label: rn,
  description: an
}, on = R(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: a,
    indeterminate: r = !1,
    disabled: c = !1,
    className: h,
    onChange: i,
    ..._
  }, u) => {
    const g = te(null), b = u || g;
    U(() => {
      b && "current" in b && b.current && (b.current.indeterminate = r);
    }, [r, b]);
    const x = s ?? a ?? !1, k = [
      ne.container,
      n ? ne.hasDescription : "",
      c ? ne.disabled : "",
      h || ""
    ].filter(Boolean).join(" "), N = [
      ne.box,
      r ? ne.indeterminate : x ? ne.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("label", { className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: b,
          checked: s,
          defaultChecked: a,
          disabled: c,
          className: ne.nativeInput,
          onChange: i,
          ..._
        }
      ),
      /* @__PURE__ */ l("span", { className: N, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(Te, { size: 12 }),
        !r && x && /* @__PURE__ */ e(ve, { size: 12 })
      ] }),
      (t || n) && /* @__PURE__ */ l("span", { className: ne.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: ne.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: ne.description, children: n })
      ] })
    ] });
  }
);
on.displayName = "Checkbox";
const ln = "_container_m4qf3_1", cn = "_label_m4qf3_9", dn = "_required_m4qf3_19", _n = "_textareaWrapper_m4qf3_23", un = "_textarea_m4qf3_23", hn = "_hasError_m4qf3_58", mn = "_footer_m4qf3_66", pn = "_helperText_m4qf3_74", fn = "_errorMessage_m4qf3_78", bn = "_charCount_m4qf3_83", vn = "_disabled_m4qf3_89", Y = {
  container: ln,
  label: cn,
  required: dn,
  textareaWrapper: _n,
  textarea: un,
  hasError: hn,
  footer: mn,
  helperText: pn,
  errorMessage: fn,
  charCount: bn,
  disabled: vn
}, gn = R(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    isRequired: a = !1,
    showCharCount: r = !1,
    maxLength: c,
    disabled: h = !1,
    value: i,
    defaultValue: _,
    id: u,
    className: g,
    onChange: b,
    ...x
  }, k) => {
    const N = _e(), f = u || N, v = !!s, [B, T] = ae.useState(() => typeof i == "string" ? i.length : typeof _ == "string" ? _.length : 0), M = (D) => {
      T(D.target.value.length), b == null || b(D);
    }, S = [
      Y.container,
      v ? Y.hasError : "",
      h ? Y.disabled : "",
      g || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: S, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: f, className: Y.label, children: [
        t,
        a && /* @__PURE__ */ e("span", { className: Y.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: Y.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: k,
          id: f,
          disabled: h,
          value: i,
          defaultValue: _,
          maxLength: c,
          onChange: M,
          "aria-invalid": v,
          "aria-describedby": v ? `${f}-error` : n ? `${f}-helper` : void 0,
          className: Y.textarea,
          ...x
        }
      ) }),
      /* @__PURE__ */ l("div", { className: Y.footer, children: [
        v && /* @__PURE__ */ e(
          "span",
          {
            id: `${f}-error`,
            className: Y.errorMessage,
            role: "alert",
            children: s
          }
        ),
        !v && n && /* @__PURE__ */ e("span", { id: `${f}-helper`, className: Y.helperText, children: n }),
        r && c && /* @__PURE__ */ l("span", { className: Y.charCount, children: [
          B,
          " / ",
          c
        ] })
      ] })
    ] });
  }
);
gn.displayName = "Textarea";
const yn = "_card_7pqx0_1", Nn = "_interactive_7pqx0_28", $n = "_header_7pqx0_56", kn = "_headerBordered_7pqx0_64", wn = "_title_7pqx0_69", xn = "_description_7pqx0_78", In = "_content_7pqx0_85", Bn = "_footer_7pqx0_89", Cn = "_footerBordered_7pqx0_98", ee = {
  card: yn,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: Nn,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: $n,
  headerBordered: kn,
  title: wn,
  description: xn,
  content: In,
  footer: Bn,
  footerBordered: Cn
}, Sn = R(
  ({
    elevation: t = 1,
    padding: n = "none",
    isInteractive: s = !1,
    className: a,
    children: r,
    ...c
  }, h) => {
    const i = [
      ee.card,
      ee[`elevation-${t}`],
      ee[`padding-${n}`],
      s ? ee.interactive : "",
      a || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: h, className: i, ...c, children: r });
  }
);
Sn.displayName = "Card";
const qn = R(
  ({ bordered: t = !1, className: n, children: s, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${ee.header} ${t ? ee.headerBordered : ""} ${n || ""}`,
      ...a,
      children: s
    }
  )
);
qn.displayName = "CardHeader";
const Ln = R(
  ({ as: t = "h3", className: n, children: s, ...a }, r) => /* @__PURE__ */ e(
    t,
    {
      ref: r,
      className: `${ee.title} ${n || ""}`,
      ...a,
      children: s
    }
  )
);
Ln.displayName = "CardTitle";
const zn = R(({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e(
  "p",
  {
    ref: a,
    className: `${ee.description} ${t || ""}`,
    ...s,
    children: n
  }
));
zn.displayName = "CardDescription";
const Rn = R(
  ({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${ee.content} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
Rn.displayName = "CardContent";
const Dn = R(
  ({ bordered: t = !1, className: n, children: s, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${ee.footer} ${t ? ee.footerBordered : ""} ${n || ""}`,
      ...a,
      children: s
    }
  )
);
Dn.displayName = "CardFooter";
const En = "_container_1xw60_1", jn = "_table_1xw60_10", Tn = "_header_1xw60_19", Wn = "_headCell_1xw60_24", Mn = "_row_1xw60_35", On = "_hoverable_1xw60_44", An = "_cell_1xw60_48", Pn = "_tabularNums_1xw60_54", re = {
  container: En,
  table: jn,
  header: Tn,
  headCell: Wn,
  row: Mn,
  hoverable: On,
  cell: An,
  tabularNums: Pn,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Fn = R(
  ({ className: t, containerClassName: n, children: s, ...a }, r) => /* @__PURE__ */ e("div", { className: `${re.container} ${n || ""}`, children: /* @__PURE__ */ e(
    "table",
    {
      ref: r,
      className: `${re.table} ${t || ""}`,
      ...a,
      children: s
    }
  ) })
);
Fn.displayName = "Table";
const Gn = R(({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e("thead", { ref: a, className: `${re.header} ${t || ""}`, ...s, children: n }));
Gn.displayName = "TableHeader";
const Hn = R(({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: t, ...s, children: n }));
Hn.displayName = "TableBody";
const Kn = R(
  ({ isHoverable: t = !0, className: n, children: s, ...a }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: `${re.row} ${t ? re.hoverable : ""} ${n || ""}`,
      ...a,
      children: s
    }
  )
);
Kn.displayName = "TableRow";
const Vn = R(
  ({ align: t = "left", className: n, children: s, ...a }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: `${re.headCell} ${re[`align-${t}`]} ${n || ""}`,
      ...a,
      children: s
    }
  )
);
Vn.displayName = "TableHead";
const Un = R(
  ({ align: t = "left", isNumeric: n = !1, className: s, children: a, ...r }, c) => /* @__PURE__ */ e(
    "td",
    {
      ref: c,
      className: `${re.cell} ${re[`align-${t}`]} ${n ? re.tabularNums : ""} ${s || ""}`,
      ...r,
      children: a
    }
  )
);
Un.displayName = "TableCell";
const Qn = "_overlay_cpmq9_1", Jn = "_fadeIn_cpmq9_1", Xn = "_modal_cpmq9_15", Yn = "_scaleIn_cpmq9_1", Zn = "_header_cpmq9_44", es = "_title_cpmq9_52", ts = "_closeButton_cpmq9_61", ns = "_body_cpmq9_84", ss = "_footer_cpmq9_93", ce = {
  overlay: Qn,
  fadeIn: Jn,
  modal: Xn,
  scaleIn: Yn,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: Zn,
  title: es,
  closeButton: ts,
  body: ns,
  footer: ss
}, rs = ({
  isOpen: t,
  onClose: n,
  title: s,
  size: a = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: c = !0,
  showCloseButton: h = !0,
  footer: i,
  children: _,
  className: u
}) => {
  const g = _e(), b = te(null);
  if (U(() => {
    if (!t) return;
    const f = (v) => {
      v.key === "Escape" && c && n();
    };
    return document.addEventListener("keydown", f), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    };
  }, [t, c, n]), !t) return null;
  const x = (f) => {
    f.target === f.currentTarget && r && n();
  }, k = [ce.modal, ce[`size-${a}`], u || ""].filter(Boolean).join(" "), N = /* @__PURE__ */ e("div", { className: ce.overlay, onClick: x, children: /* @__PURE__ */ l(
    "div",
    {
      ref: b,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? g : void 0,
      tabIndex: -1,
      className: k,
      children: [
        (s || h) && /* @__PURE__ */ l("div", { className: ce.header, children: [
          s && /* @__PURE__ */ e("h2", { id: g, className: ce.title, children: s }),
          h && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: n,
              className: ce.closeButton,
              children: /* @__PURE__ */ e(ye, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: ce.body, children: _ }),
        i && /* @__PURE__ */ e("div", { className: ce.footer, children: i })
      ]
    }
  ) });
  return typeof document < "u" ? xe(N, document.body) : null;
};
rs.displayName = "Modal";
const as = ({
  className: t,
  children: n,
  ...s
}) => /* @__PURE__ */ e("div", { className: `${ce.footer} ${t || ""}`, ...s, children: n });
as.displayName = "ModalFooter";
const os = "_container_1lwtb_1", ls = "_navWrapper_1lwtb_7", is = "_scrollContainer_1lwtb_16", cs = "_tabList_1lwtb_34", ds = "_tab_1lwtb_34", _s = "_tabActive_1lwtb_117", us = "_badge_1lwtb_145", hs = "_fullWidth_1lwtb_174", ms = "_scrollButton_1lwtb_183", ps = "_scrollButtonLeft_1lwtb_213", fs = "_scrollButtonRight_1lwtb_217", bs = "_hasScrollLeft_1lwtb_222", vs = "_hasScrollRight_1lwtb_238", gs = "_moreWrapper_1lwtb_257", ys = "_moreButton_1lwtb_264", Ns = "_moreButtonActive_1lwtb_293", $s = "_moreMenu_1lwtb_316", ks = "_moreMenuItem_1lwtb_335", ws = "_moreMenuItemActive_1lwtb_364", xs = "_moreMenuItemLeft_1lwtb_375", Is = "_panel_1lwtb_385", L = {
  container: os,
  navWrapper: ls,
  scrollContainer: is,
  tabList: cs,
  "variant-underline": "_variant-underline_1lwtb_46",
  "variant-segmented": "_variant-segmented_1lwtb_57",
  tab: ds,
  "size-sm": "_size-sm_1lwtb_89",
  "size-md": "_size-md_1lwtb_95",
  "size-lg": "_size-lg_1lwtb_101",
  tabActive: _s,
  badge: us,
  fullWidth: hs,
  scrollButton: ms,
  scrollButtonLeft: ps,
  scrollButtonRight: fs,
  hasScrollLeft: bs,
  hasScrollRight: vs,
  moreWrapper: gs,
  moreButton: ys,
  moreButtonActive: Ns,
  moreMenu: $s,
  moreMenuItem: ks,
  moreMenuItemActive: ws,
  moreMenuItemLeft: xs,
  panel: Is
}, Bs = R(
  ({
    tabs: t,
    activeTab: n,
    defaultActiveTab: s,
    onChange: a,
    variant: r = "pill",
    size: c = "md",
    fullWidth: h = !1,
    scrollable: i = !1,
    showScrollButtons: _ = !0,
    maxVisibleTabs: u,
    moreLabel: g = "More",
    className: b,
    children: x,
    ...k
  }, N) => {
    var I;
    const [f, v] = P(
      n || s || ((I = t[0]) == null ? void 0 : I.id) || ""
    ), B = n !== void 0 ? n : f, T = te(null), M = te(/* @__PURE__ */ new Map()), S = te(null), [D, W] = P(!1), [F, E] = P(!1), [G, p] = P(!1), q = typeof u == "number" && u > 0 && t.length > u, j = q ? t.slice(0, u) : t, H = q ? t.slice(u) : [], me = H.some(
      (d) => d.id === B
    );
    U(() => {
      if (!G) return;
      const d = ($) => {
        S.current && !S.current.contains($.target) && p(!1);
      };
      return document.addEventListener("mousedown", d), () => {
        document.removeEventListener("mousedown", d);
      };
    }, [G]);
    const J = Be(() => {
      const d = T.current;
      if (!d || !i) {
        W(!1), E(!1);
        return;
      }
      const { scrollLeft: $, scrollWidth: K, clientWidth: O } = d;
      W($ > 2), E($ + O < K - 2);
    }, [i]);
    U(() => {
      if (!i) return;
      const d = T.current;
      if (d)
        return J(), d.addEventListener("scroll", J, {
          passive: !0
        }), window.addEventListener("resize", J), () => {
          d.removeEventListener("scroll", J), window.removeEventListener("resize", J);
        };
    }, [i, J, j]), U(() => {
      if (!i) return;
      const d = M.current.get(B), $ = T.current;
      if (d && $) {
        const K = d.getBoundingClientRect(), O = $.getBoundingClientRect();
        K.left < O.left ? $.scrollBy({
          left: K.left - O.left - 16,
          behavior: "smooth"
        }) : K.right > O.right && $.scrollBy({
          left: K.right - O.right + 16,
          behavior: "smooth"
        });
      }
    }, [B, i]);
    const ue = (d, $) => {
      $ || (n === void 0 && v(d), p(!1), a == null || a(d));
    }, m = (d) => {
      const $ = t.filter((he) => !he.disabled);
      if ($.length === 0) return;
      const K = $.findIndex((he) => he.id === B);
      let O = -1;
      if (d.key === "ArrowRight" ? (d.preventDefault(), O = K < $.length - 1 ? K + 1 : 0) : d.key === "ArrowLeft" ? (d.preventDefault(), O = K > 0 ? K - 1 : $.length - 1) : d.key === "Home" ? (d.preventDefault(), O = 0) : d.key === "End" && (d.preventDefault(), O = $.length - 1), O >= 0) {
        const he = $[O];
        if (he) {
          ue(he.id);
          const ke = M.current.get(he.id);
          ke == null || ke.focus();
        }
      }
    }, y = (d) => {
      const $ = T.current;
      $ && $.scrollBy({ left: d, behavior: "smooth" });
    }, Q = [
      L.container,
      D && L.hasScrollLeft,
      F && L.hasScrollRight,
      b || ""
    ].filter(Boolean).join(" "), o = [
      L.tabList,
      L[`variant-${r}`],
      h ? L.fullWidth : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { ref: N, className: Q, ...k, children: [
      /* @__PURE__ */ l("div", { className: L.navWrapper, children: [
        i && _ && D && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${L.scrollButton} ${L.scrollButtonLeft}`,
            "aria-label": "Scroll tabs left",
            onClick: () => y(-200),
            children: /* @__PURE__ */ e(We, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: T,
            className: i ? L.scrollContainer : void 0,
            children: /* @__PURE__ */ e(
              "div",
              {
                role: "tablist",
                className: o,
                onKeyDown: m,
                children: j.map((d) => {
                  const $ = d.id === B, K = [
                    L.tab,
                    L[`size-${c}`],
                    $ ? L.tabActive : ""
                  ].filter(Boolean).join(" ");
                  return /* @__PURE__ */ l(
                    "button",
                    {
                      ref: (O) => {
                        O ? M.current.set(d.id, O) : M.current.delete(d.id);
                      },
                      role: "tab",
                      type: "button",
                      tabIndex: $ ? 0 : -1,
                      "aria-selected": $,
                      "aria-controls": `panel-${d.id}`,
                      id: `tab-${d.id}`,
                      disabled: d.disabled,
                      onClick: () => ue(d.id, d.disabled),
                      className: K,
                      children: [
                        d.icon && /* @__PURE__ */ e("span", { children: d.icon }),
                        /* @__PURE__ */ e("span", { children: d.label }),
                        d.badge !== void 0 && /* @__PURE__ */ e("span", { className: L.badge, children: d.badge })
                      ]
                    },
                    d.id
                  );
                })
              }
            )
          }
        ),
        i && _ && F && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${L.scrollButton} ${L.scrollButtonRight}`,
            "aria-label": "Scroll tabs right",
            onClick: () => y(200),
            children: /* @__PURE__ */ e(Me, { size: 16 })
          }
        ),
        q && /* @__PURE__ */ l("div", { ref: S, className: L.moreWrapper, children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              className: [
                L.moreButton,
                L[`size-${c}`],
                me ? L.moreButtonActive : ""
              ].filter(Boolean).join(" "),
              "aria-haspopup": "true",
              "aria-expanded": G,
              "aria-label": "More navigation tabs",
              onClick: () => p((d) => !d),
              children: [
                /* @__PURE__ */ e(Pe, { size: 16 }),
                /* @__PURE__ */ e("span", { children: g }),
                /* @__PURE__ */ e(ge, { size: 14 })
              ]
            }
          ),
          G && /* @__PURE__ */ e("div", { className: L.moreMenu, role: "menu", children: H.map((d) => {
            const $ = d.id === B;
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                role: "menuitem",
                disabled: d.disabled,
                className: [
                  L.moreMenuItem,
                  $ ? L.moreMenuItemActive : ""
                ].filter(Boolean).join(" "),
                onClick: () => ue(d.id, d.disabled),
                children: [
                  /* @__PURE__ */ l("span", { className: L.moreMenuItemLeft, children: [
                    d.icon && /* @__PURE__ */ e("span", { children: d.icon }),
                    /* @__PURE__ */ e("span", { children: d.label })
                  ] }),
                  $ && /* @__PURE__ */ e(ve, { size: 14 }),
                  !$ && d.badge !== void 0 && /* @__PURE__ */ e("span", { className: L.badge, children: d.badge })
                ]
              },
              d.id
            );
          }) })
        ] })
      ] }),
      x
    ] });
  }
);
Bs.displayName = "Tabs";
const Cs = R(
  ({ tabId: t, activeTabId: n, className: s, children: a, ...r }, c) => t !== n ? null : /* @__PURE__ */ e(
    "div",
    {
      ref: c,
      role: "tabpanel",
      id: `panel-${t}`,
      "aria-labelledby": `tab-${t}`,
      tabIndex: 0,
      className: `${L.panel} ${s || ""}`,
      ...r,
      children: a
    }
  )
);
Cs.displayName = "TabPanel";
const Ss = "_container_1xroe_1", qs = "_track_1xroe_10", Ls = "_thumb_1xroe_24", zs = "_checked_1xroe_34", Rs = "_nativeInput_1xroe_43", Ds = "_label_1xroe_55", Es = "_description_1xroe_61", js = "_textGroup_1xroe_66", Ts = "_disabled_1xroe_72", le = {
  container: Ss,
  track: qs,
  thumb: Ls,
  checked: zs,
  nativeInput: Rs,
  label: Ds,
  description: Es,
  textGroup: js,
  disabled: Ts
}, Ws = R(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: a,
    disabled: r = !1,
    className: c,
    onChange: h,
    ...i
  }, _) => {
    const u = s ?? a ?? !1, g = [
      le.container,
      u ? le.checked : "",
      r ? le.disabled : "",
      c || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("label", { className: g, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: _,
          checked: s,
          defaultChecked: a,
          disabled: r,
          "aria-checked": u,
          className: le.nativeInput,
          onChange: h,
          ...i
        }
      ),
      /* @__PURE__ */ e("span", { className: le.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: le.thumb }) }),
      (t || n) && /* @__PURE__ */ l("span", { className: le.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: le.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: le.description, children: n })
      ] })
    ] });
  }
);
Ws.displayName = "Switch";
const Ms = "_group_1e0nk_1", Os = "_groupLabel_1e0nk_8", As = "_item_1e0nk_14", Ps = "_circle_1e0nk_22", Fs = "_dot_1e0nk_35", Gs = "_checked_1e0nk_45", Hs = "_nativeInput_1e0nk_54", Ks = "_label_1e0nk_67", Vs = "_description_1e0nk_73", Us = "_textGroup_1e0nk_78", Qs = "_disabled_1e0nk_84", Z = {
  group: Ms,
  groupLabel: Os,
  item: As,
  circle: Ps,
  dot: Fs,
  checked: Gs,
  nativeInput: Hs,
  label: Ks,
  description: Vs,
  textGroup: Us,
  disabled: Qs
}, Ie = Se(null), Js = ({
  name: t,
  value: n,
  defaultValue: s,
  onChange: a,
  label: r,
  disabled: c = !1,
  className: h,
  children: i
}) => {
  const [_, u] = ae.useState(
    n || s
  ), g = n !== void 0 ? n : _, b = (x) => {
    u(x.target.value), a == null || a(x.target.value);
  };
  return /* @__PURE__ */ e(
    Ie.Provider,
    {
      value: {
        name: t,
        value: g,
        onChange: b,
        disabled: c
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          role: "radiogroup",
          "aria-label": r,
          className: `${Z.group} ${h || ""}`,
          children: [
            r && /* @__PURE__ */ e("span", { className: Z.groupLabel, children: r }),
            i
          ]
        }
      )
    }
  );
};
Js.displayName = "RadioGroup";
const Xs = R(
  ({
    value: t,
    label: n,
    description: s,
    disabled: a,
    className: r,
    checked: c,
    onChange: h,
    ...i
  }, _) => {
    const u = Ce(Ie), g = u ? u.value === t : c, b = a || (u == null ? void 0 : u.disabled) || !1, x = (u == null ? void 0 : u.name) || i.name, k = [
      Z.item,
      g ? Z.checked : "",
      b ? Z.disabled : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("label", { className: k, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: _,
          type: "radio",
          name: x,
          value: t,
          checked: g,
          disabled: b,
          onChange: (f) => {
            var v;
            h == null || h(f), (v = u == null ? void 0 : u.onChange) == null || v.call(u, f);
          },
          className: Z.nativeInput,
          ...i
        }
      ),
      /* @__PURE__ */ e("span", { className: Z.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: Z.dot }) }),
      (n || s) && /* @__PURE__ */ l("span", { className: Z.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: Z.label, children: n }),
        s && /* @__PURE__ */ e("span", { className: Z.description, children: s })
      ] })
    ] });
  }
);
Xs.displayName = "Radio";
const Ys = "_wrapper_yiqhg_1", Zs = "_searchIcon_yiqhg_8", er = "_input_yiqhg_18", tr = "_rightSlots_yiqhg_42", nr = "_clearButton_yiqhg_50", sr = "_shortcut_yiqhg_66", pe = {
  wrapper: Ys,
  searchIcon: Zs,
  input: er,
  rightSlots: tr,
  clearButton: nr,
  shortcut: sr
}, rr = ({
  ...t
}) => /* @__PURE__ */ l(
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
), ar = R(
  ({
    value: t,
    defaultValue: n,
    onChange: s,
    onClear: a,
    shortcutHint: r = "⌘K",
    placeholder: c = "Search records, students, classes...",
    className: h,
    ...i
  }, _) => {
    const [u, g] = P(
      t || n || ""
    ), b = t !== void 0, x = b ? t : u, k = (f) => {
      b || g(f.target.value), s == null || s(f);
    }, N = () => {
      b || g(""), a == null || a();
    };
    return /* @__PURE__ */ l("div", { className: `${pe.wrapper} ${h || ""}`, children: [
      /* @__PURE__ */ e("span", { className: pe.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(rr, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: _,
          type: "search",
          value: x,
          placeholder: c,
          onChange: k,
          className: pe.input,
          ...i
        }
      ),
      /* @__PURE__ */ l("div", { className: pe.rightSlots, children: [
        x && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: N,
            className: pe.clearButton,
            children: /* @__PURE__ */ e(ye, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: pe.shortcut, children: r })
      ] })
    ] });
  }
);
ar.displayName = "SearchInput";
const or = "_card_kgob9_1", lr = "_topRow_kgob9_18", ir = "_title_kgob9_25", cr = "_iconSlot_kgob9_33", dr = "_metricRow_kgob9_49", _r = "_value_kgob9_55", ur = "_trendBadge_kgob9_65", hr = "_description_kgob9_90", se = {
  card: or,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: lr,
  title: ir,
  iconSlot: cr,
  metricRow: dr,
  value: _r,
  trendBadge: ur,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: hr
}, mr = ({
  title: t,
  value: n,
  description: s,
  trend: a,
  icon: r,
  highlighted: c = !1,
  className: h,
  ...i
}) => {
  const _ = [
    se.card,
    c ? se["variant-highlight"] : "",
    h || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l("div", { className: _, ...i, children: [
    /* @__PURE__ */ l("div", { className: se.topRow, children: [
      /* @__PURE__ */ e("h4", { className: se.title, children: t }),
      r && /* @__PURE__ */ e("span", { className: se.iconSlot, children: r })
    ] }),
    /* @__PURE__ */ l("div", { className: se.metricRow, children: [
      /* @__PURE__ */ e("span", { className: se.value, children: n }),
      a && /* @__PURE__ */ l(
        "span",
        {
          className: `${se.trendBadge} ${se[`trend-${a.direction}`]}`,
          children: [
            a.direction === "up" && "↑ ",
            a.direction === "down" && "↓ ",
            a.value
          ]
        }
      )
    ] }),
    s && /* @__PURE__ */ e("p", { className: se.description, children: s })
  ] });
};
mr.displayName = "StatCard";
const pr = "_overlay_lam6o_1", fr = "_fadeIn_lam6o_1", br = "_drawer_lam6o_11", vr = "_slideInRight_lam6o_1", gr = "_slideInLeft_lam6o_1", yr = "_header_lam6o_51", Nr = "_title_lam6o_59", $r = "_closeButton_lam6o_67", kr = "_body_lam6o_90", wr = "_footer_lam6o_99", ie = {
  overlay: pr,
  fadeIn: fr,
  drawer: br,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: vr,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: gr,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: yr,
  title: Nr,
  closeButton: $r,
  body: kr,
  footer: wr
}, xr = ({
  isOpen: t,
  onClose: n,
  title: s,
  placement: a = "right",
  size: r = "md",
  closeOnOverlayClick: c = !0,
  closeOnEsc: h = !0,
  showCloseButton: i = !0,
  footer: _,
  children: u,
  className: g
}) => {
  const b = _e(), x = te(null);
  if (U(() => {
    if (!t) return;
    const v = (B) => {
      B.key === "Escape" && h && n();
    };
    return document.addEventListener("keydown", v), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    };
  }, [t, h, n]), !t) return null;
  const k = (v) => {
    v.target === v.currentTarget && c && n();
  }, N = [
    ie.drawer,
    ie[`placement-${a}`],
    ie[`size-${r}`],
    g || ""
  ].filter(Boolean).join(" "), f = /* @__PURE__ */ l(we, { children: [
    /* @__PURE__ */ e("div", { className: ie.overlay, onClick: k }),
    /* @__PURE__ */ l(
      "div",
      {
        ref: x,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": s ? b : void 0,
        tabIndex: -1,
        className: N,
        children: [
          (s || i) && /* @__PURE__ */ l("div", { className: ie.header, children: [
            s && /* @__PURE__ */ e("h3", { id: b, className: ie.title, children: s }),
            i && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: n,
                className: ie.closeButton,
                children: /* @__PURE__ */ e(ye, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: ie.body, children: u }),
          _ && /* @__PURE__ */ e("div", { className: ie.footer, children: _ })
        ]
      }
    )
  ] });
  return typeof document < "u" ? xe(f, document.body) : null;
};
xr.displayName = "Drawer";
const Ir = "_chip_ldr6y_1", Br = "_pill_ldr6y_14", Cr = "_rounded_ldr6y_18", Sr = "_sm_ldr6y_22", qr = "_md_ldr6y_36", Lr = "_lg_ldr6y_45", zr = "_neutral_ldr6y_55", Rr = "_primary_ldr6y_61", Dr = "_tonal_ldr6y_68", Er = "_outline_ldr6y_75", jr = "_success_ldr6y_81", Tr = "_warning_ldr6y_87", Wr = "_danger_ldr6y_93", Mr = "_clickable_ldr6y_100", Or = "_disabled_ldr6y_104", Ar = "_selected_ldr6y_104", Pr = "_selectedIcon_ldr6y_131", Fr = "_avatarSlot_ldr6y_139", Gr = "_hasAvatar_ldr6y_183", Hr = "_iconSlot_ldr6y_212", Kr = "_label_ldr6y_221", Vr = "_countBadge_ldr6y_230", Ur = "_removeButton_ldr6y_251", V = {
  chip: Ir,
  pill: Br,
  rounded: Cr,
  sm: Sr,
  md: qr,
  lg: Lr,
  neutral: zr,
  primary: Rr,
  tonal: Dr,
  outline: Er,
  success: jr,
  warning: Tr,
  danger: Wr,
  clickable: Mr,
  disabled: Or,
  selected: Ar,
  selectedIcon: Pr,
  avatarSlot: Fr,
  hasAvatar: Gr,
  iconSlot: Hr,
  label: Kr,
  countBadge: Vr,
  removeButton: Ur
}, Qr = ({
  label: t,
  avatar: n,
  icon: s,
  variant: a,
  size: r = "md",
  shape: c = "pill",
  selected: h = !1,
  count: i,
  onRemove: _,
  disabled: u = !1,
  className: g,
  onClick: b,
  ...x
}) => {
  const k = !!b && !u, N = a ?? (n ? "tonal" : "neutral"), f = [
    V.chip,
    V[N],
    V[r],
    V[c],
    n ? V.hasAvatar : "",
    h ? V.selected : "",
    k ? V.clickable : "",
    _ ? V.removable : "",
    u ? V.disabled : "",
    g || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l(
    "div",
    {
      className: f,
      role: k ? "button" : "status",
      tabIndex: k ? 0 : void 0,
      onClick: k ? b : void 0,
      ...x,
      children: [
        h && /* @__PURE__ */ e("span", { className: V.selectedIcon, children: /* @__PURE__ */ e(ve, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 }) }),
        !h && n && /* @__PURE__ */ e("span", { className: V.avatarSlot, children: n }),
        !h && !n && s && /* @__PURE__ */ e("span", { className: V.iconSlot, children: s }),
        /* @__PURE__ */ e("span", { className: V.label, children: t }),
        i !== void 0 && /* @__PURE__ */ e("span", { className: V.countBadge, children: i }),
        _ && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            className: V.removeButton,
            onClick: (v) => {
              v.stopPropagation(), !u && _ && _();
            },
            disabled: u,
            children: /* @__PURE__ */ e(ye, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, Jr = "_container_d3es0_1", Xr = "_label_d3es0_14", Yr = "_required_d3es0_24", Zr = "_trigger_d3es0_29", ea = "_disabled_d3es0_50", ta = "_isOpen_d3es0_54", na = "_chipContainer_d3es0_72", sa = "_searchInput_d3es0_81", ra = "_placeholder_d3es0_93", aa = "_moreCount_d3es0_97", oa = "_trailing_d3es0_112", la = "_clearAllButton_d3es0_119", ia = "_chevron_d3es0_137", ca = "_menu_d3es0_149", da = "_empty_d3es0_169", _a = "_option_d3es0_177", ua = "_focused_d3es0_193", ha = "_selected_d3es0_197", ma = "_checkboxSlot_d3es0_206", pa = "_checkboxBox_d3es0_213", fa = "_checkboxChecked_d3es0_226", ba = "_avatarSlot_d3es0_231", va = "_iconSlot_d3es0_244", ga = "_labelCol_d3es0_251", ya = "_labelRow_d3es0_258", Na = "_optionLabel_d3es0_265", $a = "_badge_d3es0_272", ka = "_optionDescription_d3es0_300", wa = "_optionDisabled_d3es0_307", xa = "_hasError_d3es0_314", Ia = "_errorText_d3es0_323", Ba = "_helperText_d3es0_328", w = {
  container: Jr,
  "size-sm": "_size-sm_d3es0_10",
  label: Xr,
  required: Yr,
  trigger: Zr,
  disabled: ea,
  isOpen: ta,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: na,
  searchInput: sa,
  placeholder: ra,
  moreCount: aa,
  trailing: oa,
  clearAllButton: la,
  chevron: ia,
  menu: ca,
  empty: da,
  option: _a,
  focused: ua,
  selected: ha,
  checkboxSlot: ma,
  checkboxBox: pa,
  checkboxChecked: fa,
  avatarSlot: ba,
  iconSlot: va,
  labelCol: ga,
  labelRow: ya,
  optionLabel: Na,
  badge: $a,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: ka,
  optionDisabled: wa,
  hasError: xa,
  errorText: Ia,
  helperText: Ba
}, fo = ({
  label: t,
  placeholder: n = "Select items...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: c,
  defaultValue: h,
  onChange: i,
  size: _ = "md",
  chipShape: u,
  disabled: g = !1,
  isRequired: b = !1,
  isSearchable: x = !0,
  className: k,
  id: N,
  maxDisplayedChips: f
}) => {
  const v = _e(), B = N || v, T = te(null), M = te(null), [S, D] = P(!1), [W, F] = P(""), [E, G] = P(
    c || h || []
  ), [p, q] = P(-1);
  U(() => {
    c !== void 0 && G(c);
  }, [c]);
  const j = fe(() => r.filter((o) => E.includes(o.value)), [r, E]), H = fe(() => {
    if (!W.trim()) return r;
    const o = W.toLowerCase();
    return r.filter(
      (I) => I.label.toLowerCase().includes(o) || I.description && I.description.toLowerCase().includes(o) || I.badge && I.badge.toLowerCase().includes(o)
    );
  }, [r, W]);
  U(() => {
    const o = (I) => {
      T.current && !T.current.contains(I.target) && (D(!1), F(""), q(-1));
    };
    return S && document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [S]);
  const me = (o) => {
    if (o.disabled || g) return;
    let I;
    E.includes(o.value) ? I = E.filter(($) => $ !== o.value) : I = [...E, o.value], c === void 0 && G(I);
    const d = r.filter(($) => I.includes($.value));
    i == null || i(I, d);
  }, J = (o) => {
    if (g) return;
    const I = E.filter(($) => $ !== o);
    c === void 0 && G(I);
    const d = r.filter(($) => I.includes($.value));
    i == null || i(I, d);
  }, ue = (o) => {
    if (!g) {
      if (o.key === "Backspace" && W === "" && E.length > 0) {
        J(E[E.length - 1]);
        return;
      }
      if (!S) {
        (o.key === "Enter" || o.key === " " || o.key === "ArrowDown") && (o.preventDefault(), D(!0));
        return;
      }
      o.key === "Escape" ? (o.preventDefault(), D(!1), F("")) : o.key === "ArrowDown" ? (o.preventDefault(), q(
        (I) => I < H.length - 1 ? I + 1 : 0
      )) : o.key === "ArrowUp" ? (o.preventDefault(), q(
        (I) => I > 0 ? I - 1 : H.length - 1
      )) : o.key === "Enter" && p >= 0 && p < H.length && (o.preventDefault(), me(H[p]));
    }
  }, m = f ? j.slice(0, f) : j, y = f ? Math.max(0, j.length - f) : 0, Q = !!a;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: T,
      className: [
        w.container,
        w[`size-${_}`],
        S ? w.isOpen : "",
        g ? w.disabled : "",
        Q ? w.hasError : "",
        k || ""
      ].filter(Boolean).join(" "),
      onKeyDown: ue,
      children: [
        t && /* @__PURE__ */ l("label", { id: `${B}-label`, className: w.label, children: [
          t,
          b && /* @__PURE__ */ e("span", { className: w.required, children: "*" })
        ] }),
        /* @__PURE__ */ l(
          "div",
          {
            className: w.trigger,
            onClick: () => {
              g || (D(!S), !S && x && setTimeout(() => {
                var o;
                return (o = M.current) == null ? void 0 : o.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": S,
            "aria-haspopup": "listbox",
            "aria-labelledby": t ? `${B}-label` : void 0,
            children: [
              /* @__PURE__ */ l("div", { className: w.chipContainer, children: [
                m.map((o) => /* @__PURE__ */ e(
                  Qr,
                  {
                    label: o.label,
                    variant: "tonal",
                    shape: u || (o.avatar ? "pill" : "rounded"),
                    size: _ === "sm" ? "sm" : _ === "lg" ? "lg" : "md",
                    avatar: o.avatar ? /* @__PURE__ */ e(
                      be,
                      {
                        size: _ === "sm" ? "xs" : _ === "lg" ? "md" : "xs",
                        name: o.label,
                        ...o.avatar
                      }
                    ) : void 0,
                    icon: o.icon,
                    onRemove: () => J(o.value),
                    disabled: g
                  },
                  o.value
                )),
                y > 0 && /* @__PURE__ */ l("span", { className: w.moreCount, children: [
                  "+",
                  y,
                  " more"
                ] }),
                x ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: M,
                    type: "text",
                    className: w.searchInput,
                    placeholder: j.length === 0 ? n : "",
                    value: W,
                    onChange: (o) => {
                      F(o.target.value), S || D(!0);
                    },
                    onClick: (o) => o.stopPropagation(),
                    disabled: g
                  }
                ) : j.length === 0 && /* @__PURE__ */ e("span", { className: w.placeholder, children: n })
              ] }),
              /* @__PURE__ */ l("div", { className: w.trailing, children: [
                E.length > 0 && !g && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: w.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (o) => {
                      o.stopPropagation(), c === void 0 && G([]), i == null || i([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: w.chevron, children: /* @__PURE__ */ e(ge, { size: 14 }) })
              ] })
            ]
          }
        ),
        S && /* @__PURE__ */ e("div", { className: w.menu, role: "listbox", "aria-multiselectable": "true", children: H.length === 0 ? /* @__PURE__ */ e("div", { className: w.empty, children: "No matches found" }) : H.map((o, I) => {
          const d = E.includes(o.value), $ = I === p;
          return /* @__PURE__ */ l(
            "div",
            {
              role: "option",
              "aria-selected": d,
              "aria-disabled": o.disabled,
              className: [
                w.option,
                d ? w.selected : "",
                $ ? w.focused : "",
                o.disabled ? w.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (K) => {
                K.stopPropagation(), me(o);
              },
              onMouseEnter: () => q(I),
              children: [
                /* @__PURE__ */ e("div", { className: w.checkboxSlot, children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: [
                      w.checkboxBox,
                      d ? w.checkboxChecked : ""
                    ].join(" "),
                    children: d && /* @__PURE__ */ e(ve, { size: 11 })
                  }
                ) }),
                o.avatar && /* @__PURE__ */ e("div", { className: w.avatarSlot, children: /* @__PURE__ */ e(be, { size: "sm", name: o.label, ...o.avatar }) }),
                !o.avatar && o.icon && /* @__PURE__ */ e("div", { className: w.iconSlot, children: o.icon }),
                /* @__PURE__ */ l("div", { className: w.labelCol, children: [
                  /* @__PURE__ */ l("div", { className: w.labelRow, children: [
                    /* @__PURE__ */ e("span", { className: w.optionLabel, children: o.label }),
                    o.badge && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          w.badge,
                          w[`badge-${o.badgeVariant || "primary"}`]
                        ].join(" "),
                        children: o.badge
                      }
                    )
                  ] }),
                  o.description && /* @__PURE__ */ e("div", { className: w.optionDescription, children: o.description })
                ] })
              ]
            },
            o.value
          );
        }) }),
        a && /* @__PURE__ */ e("span", { className: w.errorText, children: a }),
        !a && s && /* @__PURE__ */ e("span", { className: w.helperText, children: s })
      ]
    }
  );
}, Ca = "_container_1nphi_1", Sa = "_label_1nphi_10", qa = "_required_1nphi_20", La = "_trigger_1nphi_25", za = "_disabled_1nphi_45", Ra = "_isOpen_1nphi_49", Da = "_searchIcon_1nphi_55", Ea = "_input_1nphi_63", ja = "_clearButton_1nphi_81", Ta = "_chevron_1nphi_98", Wa = "_menu_1nphi_110", Ma = "_optionsList_1nphi_129", Oa = "_groupBlock_1nphi_135", Aa = "_groupHeader_1nphi_140", Pa = "_option_1nphi_129", Fa = "_focused_1nphi_174", Ga = "_selected_1nphi_178", Ha = "_optionContent_1nphi_182", Ka = "_optionIcon_1nphi_190", Va = "_optionLabel_1nphi_197", Ua = "_highlight_1nphi_206", Qa = "_optionBadge_1nphi_211", Ja = "_optionDisabled_1nphi_223", Xa = "_emptyFallback_1nphi_230", Ya = "_emptyIcon_1nphi_240", Za = "_emptyTitle_1nphi_254", eo = "_emptySubtitle_1nphi_260", to = "_footerGuide_1nphi_267", no = "_hasError_1nphi_280", so = "_errorText_1nphi_289", ro = "_helperText_1nphi_294", C = {
  container: Ca,
  label: Sa,
  required: qa,
  trigger: La,
  disabled: za,
  isOpen: Ra,
  searchIcon: Da,
  input: Ea,
  clearButton: ja,
  chevron: Ta,
  menu: Wa,
  optionsList: Ma,
  groupBlock: Oa,
  groupHeader: Aa,
  option: Pa,
  focused: Fa,
  selected: Ga,
  optionContent: Ha,
  optionIcon: Ka,
  optionLabel: Va,
  highlight: Ua,
  optionBadge: Qa,
  optionDisabled: Ja,
  emptyFallback: Xa,
  emptyIcon: Ya,
  emptyTitle: Za,
  emptySubtitle: eo,
  footerGuide: to,
  hasError: no,
  errorText: so,
  helperText: ro
}, bo = ({
  label: t,
  placeholder: n = "Search entities...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: c,
  defaultValue: h,
  onChange: i,
  disabled: _ = !1,
  isRequired: u = !1,
  className: g,
  id: b
}) => {
  const x = _e(), k = b || x, N = te(null), f = te(null), [v, B] = P(!1), [T, M] = P(
    c || h || ""
  ), [S, D] = P(""), [W, F] = P(-1);
  U(() => {
    c !== void 0 && M(c);
  }, [c]);
  const E = fe(() => r.find((m) => m.value === T), [r, T]);
  U(() => {
    !v && E ? D(E.label) : !v && !E && D("");
  }, [v, E]);
  const G = fe(() => {
    if (!S.trim()) return r;
    const m = S.toLowerCase();
    return r.filter(
      (y) => y.label.toLowerCase().includes(m) || y.group && y.group.toLowerCase().includes(m) || y.badge && y.badge.toLowerCase().includes(m)
    );
  }, [r, S]), p = fe(() => {
    const m = {};
    return G.forEach((y) => {
      const Q = y.group || "";
      m[Q] || (m[Q] = []), m[Q].push(y);
    }), m;
  }, [G]), q = fe(() => {
    const m = [];
    return Object.keys(p).forEach((y) => {
      m.push(...p[y]);
    }), m;
  }, [p]);
  U(() => {
    const m = (y) => {
      N.current && !N.current.contains(y.target) && (B(!1), F(-1));
    };
    return v && document.addEventListener("mousedown", m), () => {
      document.removeEventListener("mousedown", m);
    };
  }, [v]);
  const j = (m) => {
    m.disabled || _ || (c === void 0 && M(m.value), D(m.label), B(!1), F(-1), i == null || i(m.value, m));
  }, H = (m) => {
    var y;
    m.stopPropagation(), D(""), c === void 0 && M(""), i == null || i("", void 0), (y = f.current) == null || y.focus();
  }, me = (m) => {
    if (!_) {
      if (!v) {
        (m.key === "ArrowDown" || m.key === "Enter") && (m.preventDefault(), B(!0));
        return;
      }
      m.key === "Escape" ? (m.preventDefault(), B(!1), F(-1)) : m.key === "ArrowDown" ? (m.preventDefault(), F((y) => y < q.length - 1 ? y + 1 : 0)) : m.key === "ArrowUp" ? (m.preventDefault(), F((y) => y > 0 ? y - 1 : q.length - 1)) : m.key === "Enter" && W >= 0 && W < q.length && (m.preventDefault(), j(q[W]));
    }
  }, J = (m, y) => {
    if (!y.trim()) return m;
    const Q = m.split(new RegExp(`(${y})`, "gi"));
    return /* @__PURE__ */ e(we, { children: Q.map(
      (o, I) => o.toLowerCase() === y.toLowerCase() ? /* @__PURE__ */ e("span", { className: C.highlight, children: o }, I) : o
    ) });
  }, ue = !!a;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: N,
      className: [
        C.container,
        v ? C.isOpen : "",
        _ ? C.disabled : "",
        ue ? C.hasError : "",
        g || ""
      ].filter(Boolean).join(" "),
      onKeyDown: me,
      children: [
        t && /* @__PURE__ */ l("label", { id: `${k}-label`, className: C.label, children: [
          t,
          u && /* @__PURE__ */ e("span", { className: C.required, children: "*" })
        ] }),
        /* @__PURE__ */ l(
          "div",
          {
            className: C.trigger,
            onClick: () => {
              var m;
              _ || (B(!0), (m = f.current) == null || m.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: C.searchIcon, children: /* @__PURE__ */ e(Ae, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: f,
                  id: k,
                  type: "text",
                  className: C.input,
                  placeholder: n,
                  value: S,
                  role: "combobox",
                  "aria-expanded": v,
                  "aria-autocomplete": "list",
                  "aria-controls": `${k}-popup`,
                  disabled: _,
                  onChange: (m) => {
                    D(m.target.value), v || B(!0);
                  },
                  onFocus: () => B(!0)
                }
              ),
              S && !_ && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: C.clearButton,
                  "aria-label": "Clear query",
                  onClick: H,
                  children: /* @__PURE__ */ e(ye, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: C.chevron, children: /* @__PURE__ */ e(ge, { size: 14 }) })
            ]
          }
        ),
        v && /* @__PURE__ */ l("div", { id: `${k}-popup`, className: C.menu, role: "listbox", children: [
          q.length === 0 ? /* @__PURE__ */ l("div", { className: C.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: C.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: C.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: C.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: C.optionsList, children: Object.keys(p).map((m) => /* @__PURE__ */ l(
            "div",
            {
              className: C.groupBlock,
              children: [
                m && /* @__PURE__ */ e("div", { className: C.groupHeader, children: m }),
                p[m].map((y) => {
                  const Q = y.value === T, o = q.indexOf(y), I = o === W;
                  return /* @__PURE__ */ l(
                    "div",
                    {
                      role: "option",
                      "aria-selected": Q,
                      "aria-disabled": y.disabled,
                      className: [
                        C.option,
                        Q ? C.selected : "",
                        I ? C.focused : "",
                        y.disabled ? C.optionDisabled : ""
                      ].filter(Boolean).join(" "),
                      onClick: (d) => {
                        d.stopPropagation(), j(y);
                      },
                      onMouseEnter: () => F(o),
                      children: [
                        /* @__PURE__ */ l("div", { className: C.optionContent, children: [
                          y.icon && /* @__PURE__ */ e("span", { className: C.optionIcon, children: y.icon }),
                          /* @__PURE__ */ e("span", { className: C.optionLabel, children: J(y.label, S) })
                        ] }),
                        y.badge && /* @__PURE__ */ e("span", { className: C.optionBadge, children: y.badge })
                      ]
                    },
                    y.value
                  );
                })
              ]
            },
            m || "default-group"
          )) }),
          /* @__PURE__ */ l("div", { className: C.footerGuide, children: [
            /* @__PURE__ */ e("span", { children: "↵ Enter to select" }),
            /* @__PURE__ */ e("span", { children: "Esc to dismiss" })
          ] })
        ] }),
        a && /* @__PURE__ */ e("span", { className: C.errorText, children: a }),
        !a && s && /* @__PURE__ */ e("span", { className: C.helperText, children: s })
      ]
    }
  );
}, ao = ae.forwardRef(
  ({ className: t = "", children: n, ...s }, a) => /* @__PURE__ */ e("div", { ref: a, className: `ui-page-shell ${t}`.trim(), ...s, children: n })
);
ao.displayName = "PageShell";
const Ne = ae.forwardRef(
  ({ maxWidth: t = "standard", as: n = "div", className: s = "", children: a, ...r }, c) => {
    const h = n, i = `ui-container--${t}`;
    return /* @__PURE__ */ e(
      h,
      {
        ref: c,
        className: `ui-container ${i} ${s}`.trim(),
        ...r,
        children: a
      }
    );
  }
);
Ne.displayName = "PageContainer";
const oo = ae.forwardRef(
  ({ as: t = "main", className: n = "", children: s, ...a }, r) => /* @__PURE__ */ e(
    t,
    {
      ref: r,
      className: `ui-page-body ${n}`.trim(),
      ...a,
      children: s
    }
  )
);
oo.displayName = "PageBody";
const lo = ae.forwardRef(
  ({ containerMaxWidth: t = "standard", className: n = "", children: s, ...a }, r) => /* @__PURE__ */ e(
    "header",
    {
      ref: r,
      className: `ui-page-header ${n}`.trim(),
      ...a,
      children: /* @__PURE__ */ e(Ne, { maxWidth: t, children: /* @__PURE__ */ e("div", { className: "ui-page-header__inner", children: s }) })
    }
  )
);
lo.displayName = "PageHeader";
const io = ae.forwardRef(
  ({ containerMaxWidth: t = "standard", className: n = "", children: s, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `ui-subnav-strip ${n}`.trim(),
      ...a,
      children: /* @__PURE__ */ e(Ne, { maxWidth: t, children: /* @__PURE__ */ e("div", { className: "ui-subnav-strip__inner", children: s }) })
    }
  )
);
io.displayName = "SubNavStrip";
const co = ae.forwardRef(
  ({
    title: t,
    subtitle: n,
    actions: s,
    containerMaxWidth: a = "standard",
    className: r = "",
    ...c
  }, h) => /* @__PURE__ */ e(
    "section",
    {
      ref: h,
      className: `ui-page-hero ${r}`.trim(),
      ...c,
      children: /* @__PURE__ */ e(Ne, { maxWidth: a, children: /* @__PURE__ */ l("div", { className: "ui-page-hero__inner", children: [
        /* @__PURE__ */ l("div", { className: "ui-page-hero__title-group", children: [
          /* @__PURE__ */ e("h1", { className: "ui-page-hero__title", children: t }),
          n && /* @__PURE__ */ e("p", { className: "ui-page-hero__subtitle", children: n })
        ] }),
        s && /* @__PURE__ */ e("div", { className: "ui-page-hero__actions", children: s })
      ] }) })
    }
  )
);
co.displayName = "PageHero";
const _o = ae.forwardRef(
  ({ className: t = "", children: n, ...s }, a) => /* @__PURE__ */ e("div", { ref: a, className: `ui-card-slot ${t}`.trim(), ...s, children: n })
);
_o.displayName = "CardSlot";
const uo = ae.forwardRef(
  ({ containerMaxWidth: t = "standard", className: n = "", children: s, ...a }, r) => /* @__PURE__ */ e(
    "footer",
    {
      ref: r,
      className: `ui-page-footer ${n}`.trim(),
      ...a,
      children: /* @__PURE__ */ e(Ne, { maxWidth: t, children: /* @__PURE__ */ e("div", { className: "ui-page-footer__inner", children: s }) })
    }
  )
);
uo.displayName = "PageFooter";
export {
  be as Avatar,
  Ke as Badge,
  Fe as Button,
  Sn as Card,
  Rn as CardContent,
  zn as CardDescription,
  Dn as CardFooter,
  qn as CardHeader,
  _o as CardSlot,
  Ln as CardTitle,
  ve as CheckIcon,
  on as Checkbox,
  ge as ChevronDownIcon,
  We as ChevronLeftIcon,
  Me as ChevronRightIcon,
  Qr as Chip,
  ye as CloseIcon,
  bo as Combobox,
  xr as Drawer,
  Qt as Dropdown,
  lt as Input,
  Te as MinusIcon,
  rs as Modal,
  as as ModalFooter,
  Pe as MoreHorizontalIcon,
  fo as MultiSelect,
  oo as PageBody,
  Ne as PageContainer,
  uo as PageFooter,
  lo as PageHeader,
  co as PageHero,
  ao as PageShell,
  Xs as Radio,
  Js as RadioGroup,
  Ae as SearchIcon,
  ar as SearchInput,
  vt as Select,
  je as SpinnerIcon,
  mr as StatCard,
  io as SubNavStrip,
  Ws as Switch,
  Cs as TabPanel,
  Fn as Table,
  Hn as TableBody,
  Un as TableCell,
  Vn as TableHead,
  Gn as TableHeader,
  Kn as TableRow,
  Bs as Tabs,
  gn as Textarea,
  Oe as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
