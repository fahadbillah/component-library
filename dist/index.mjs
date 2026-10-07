import { jsx as e, jsxs as l, Fragment as $e } from "react/jsx-runtime";
import ke, { forwardRef as D, useId as de, useState as G, useRef as te, useEffect as U, useCallback as Ie, useContext as Be, createContext as Ce, useMemo as pe } from "react";
import { createPortal as we } from "react-dom";
const qe = "_button_1ckl5_1", Le = "_fullWidth_1ckl5_109", Se = "_disabled_1ckl5_113", ze = "_loading_1ckl5_120", De = "_spinner_1ckl5_124", Ee = "_icon_1ckl5_130", ae = {
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
  disabled: Se,
  loading: ze,
  spinner: De,
  icon: Ee
}, Re = ({
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
), be = ({
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
), je = ({
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
), ve = ({
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
), Te = ({
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
), ge = ({
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
), We = ({
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
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1.5", fill: "currentColor" })
    ]
  }
), Ge = D(
  ({
    variant: t = "primary",
    size: n = "md",
    isLoading: s = !1,
    leftIcon: a,
    rightIcon: r,
    fullWidth: d = !1,
    disabled: m,
    className: i,
    children: _,
    ...u
  }, g) => {
    const b = [
      ae.button,
      ae[`variant-${t}`],
      ae[`size-${n}`],
      d ? ae.fullWidth : "",
      s ? ae.loading : "",
      m || s ? ae.disabled : "",
      i || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l(
      "button",
      {
        ref: g,
        disabled: m || s,
        className: b,
        "aria-busy": s,
        ...u,
        children: [
          s && /* @__PURE__ */ e("span", { className: ae.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(Re, { size: n === "sm" ? 14 : n === "lg" ? 20 : 16 }) }),
          !s && a && /* @__PURE__ */ e("span", { className: ae.icon, children: a }),
          _ && /* @__PURE__ */ e("span", { children: _ }),
          !s && r && /* @__PURE__ */ e("span", { className: ae.icon, children: r })
        ]
      }
    );
  }
);
Ge.displayName = "Button";
const Fe = "_badge_qj0y6_1", He = "_dot_qj0y6_63", ye = {
  badge: Fe,
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
  className: d,
  children: m,
  ...i
}) => {
  const _ = [
    ye.badge,
    ye[`variant-${t}`],
    ye[`size-${n}`],
    d || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l("span", { className: _, ...i, children: [
    s && /* @__PURE__ */ e("span", { className: ye.dot, "aria-hidden": "true" }),
    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: a }),
    /* @__PURE__ */ e("span", { children: m }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
  ] });
};
Ke.displayName = "Badge";
const Ve = "_container_df4fv_1", Pe = "_label_df4fv_13", Ue = "_required_df4fv_23", Qe = "_inputWrapper_df4fv_27", Je = "_input_df4fv_27", Xe = "_hasLeftIcon_df4fv_80", Ye = "_hasRightIcon_df4fv_84", Ze = "_iconSlot_df4fv_88", et = "_leftSlot_df4fv_96", tt = "_rightSlot_df4fv_100", nt = "_hasError_df4fv_105", st = "_helperText_df4fv_113", rt = "_errorMessage_df4fv_119", at = "_disabled_df4fv_127", A = {
  container: Ve,
  "size-sm": "_size-sm_df4fv_9",
  label: Pe,
  required: Ue,
  inputWrapper: Qe,
  input: Je,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: Xe,
  hasRightIcon: Ye,
  iconSlot: Ze,
  leftSlot: et,
  rightSlot: tt,
  hasError: nt,
  helperText: st,
  errorMessage: rt,
  disabled: at
}, ot = D(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    inputSize: a = "md",
    leftIcon: r,
    rightIcon: d,
    isRequired: m = !1,
    disabled: i = !1,
    id: _,
    className: u,
    ...g
  }, b) => {
    const x = de(), k = _ || x, N = !!s, f = [
      A.container,
      A[`size-${a}`],
      N ? A.hasError : "",
      i ? A.disabled : "",
      r ? A.hasLeftIcon : "",
      d ? A.hasRightIcon : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: f, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: k, className: A.label, children: [
        t,
        m && /* @__PURE__ */ e("span", { className: A.required, children: "*" })
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
        d && /* @__PURE__ */ e("span", { className: `${A.iconSlot} ${A.rightSlot}`, children: d })
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
ot.displayName = "Input";
const lt = "_container_fh5kq_1", it = "_label_fh5kq_13", ct = "_required_fh5kq_23", dt = "_selectWrapper_fh5kq_27", _t = "_select_fh5kq_27", ut = "_chevronIcon_fh5kq_77", ht = "_hasError_fh5kq_88", mt = "_helperText_fh5kq_96", pt = "_errorMessage_fh5kq_102", ft = "_disabled_fh5kq_110", X = {
  container: lt,
  "size-sm": "_size-sm_fh5kq_9",
  label: it,
  required: ct,
  selectWrapper: dt,
  select: _t,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: ut,
  hasError: ht,
  helperText: mt,
  errorMessage: pt,
  disabled: ft
}, bt = D(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    selectSize: a = "md",
    options: r,
    placeholder: d,
    isRequired: m = !1,
    disabled: i = !1,
    id: _,
    className: u,
    children: g,
    ...b
  }, x) => {
    const k = de(), N = _ || k, f = !!s, v = [
      X.container,
      X[`size-${a}`],
      f ? X.hasError : "",
      i ? X.disabled : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: v, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: N, className: X.label, children: [
        t,
        m && /* @__PURE__ */ e("span", { className: X.required, children: "*" })
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
              d && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: d }),
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
        /* @__PURE__ */ e("span", { className: X.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(ve, { size: 16 }) })
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
bt.displayName = "Select";
const vt = "_container_1d3rw_1", gt = "_label_1d3rw_14", yt = "_required_1d3rw_24", Nt = "_trigger_1d3rw_28", $t = "_isOpen_1d3rw_53", kt = "_selectedContent_1d3rw_71", wt = "_placeholder_1d3rw_80", xt = "_chevron_1d3rw_84", It = "_chevronOpen_1d3rw_93", Bt = "_menu_1d3rw_98", Ct = "_dropdownIn_1d3rw_1", qt = "_menuItem_1d3rw_116", Lt = "_itemDisabled_1d3rw_128", St = "_itemSelected_1d3rw_132", zt = "_itemLeft_1d3rw_147", Dt = "_itemText_1d3rw_154", Et = "_itemLabel_1d3rw_161", Rt = "_itemDescription_1d3rw_169", jt = "_checkSlot_1d3rw_174", Tt = "_hasError_1d3rw_183", Mt = "_helperText_1d3rw_191", Ot = "_errorMessage_1d3rw_197", Wt = "_disabled_1d3rw_205", z = {
  container: vt,
  "size-sm": "_size-sm_1d3rw_10",
  label: gt,
  required: yt,
  trigger: Nt,
  isOpen: $t,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: kt,
  placeholder: wt,
  chevron: xt,
  chevronOpen: It,
  menu: Bt,
  dropdownIn: Ct,
  menuItem: qt,
  itemDisabled: Lt,
  itemSelected: St,
  itemLeft: zt,
  itemText: Dt,
  itemLabel: Et,
  itemDescription: Rt,
  checkSlot: jt,
  hasError: Tt,
  helperText: Mt,
  errorMessage: Ot,
  disabled: Wt
}, At = "_container_1lebu_1", Gt = "_tint_1lebu_14", Ft = "_solid_1lebu_20", Ht = "_image_1lebu_26", Kt = "_fallback_1lebu_33", Vt = "_statusDot_1lebu_74", ce = {
  container: At,
  tint: Gt,
  solid: Ft,
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
function Pt(t, n) {
  if (n) return n;
  if (!t) return "";
  const s = t.trim().split(/\s+/);
  return s.length === 1 ? s[0].substring(0, 2).toUpperCase() : (s[0][0] + s[s.length - 1][0]).toUpperCase();
}
const fe = ({
  src: t,
  alt: n = "",
  name: s,
  initials: a,
  size: r = "md",
  variant: d = "tint",
  status: m,
  className: i,
  ..._
}) => {
  const [u, g] = G(!1), b = Pt(s, a), x = [
    ce.container,
    ce[`size-${r}`],
    ce[d],
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
        className: ce.image,
        onError: () => g(!0)
      }
    ) : b ? /* @__PURE__ */ e("span", { className: ce.fallback, children: b }) : /* @__PURE__ */ e("span", { className: ce.fallback, children: /* @__PURE__ */ e(Oe, { size: k[r] }) }),
    m && /* @__PURE__ */ e(
      "span",
      {
        className: `${ce.statusDot} ${ce[`status-${m}`]}`,
        "aria-label": `Status: ${m}`
      }
    )
  ] });
};
fe.displayName = "Avatar";
const Ut = ({
  label: t,
  placeholder: n = "Select an option...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: d,
  defaultValue: m,
  onChange: i,
  size: _ = "md",
  disabled: u = !1,
  isRequired: g = !1,
  className: b,
  id: x
}) => {
  const k = de(), N = x || k, f = te(null), [v, B] = G(!1), [T, O] = G(
    d || m
  );
  U(() => {
    d !== void 0 && O(d);
  }, [d]), U(() => {
    const p = (L) => {
      f.current && !f.current.contains(L.target) && B(!1);
    };
    return v && document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, [v]);
  const q = r.find((p) => p.value === T), E = !!a, M = (p) => {
    p.disabled || (O(p.value), i == null || i(p.value, p), B(!1));
  }, F = (p) => {
    if (!u) {
      if (p.key === "Enter" || p.key === " ")
        p.preventDefault(), B((L) => !L);
      else if (p.key === "Escape")
        B(!1);
      else if (p.key === "ArrowDown" && v) {
        p.preventDefault();
        const L = r.findIndex(
          (K) => K.value === T
        ), j = r[L + 1];
        j && !j.disabled && M(j);
      } else if (p.key === "ArrowUp" && v) {
        p.preventDefault();
        const L = r.findIndex(
          (K) => K.value === T
        ), j = r[L - 1];
        j && !j.disabled && M(j);
      }
    }
  }, R = [
    z.container,
    z[`size-${_}`],
    v ? z.isOpen : "",
    E ? z.hasError : "",
    u ? z.disabled : "",
    b || ""
  ].filter(Boolean).join(" "), H = _ === "sm" ? "xs" : _ === "lg" ? "md" : "sm";
  return /* @__PURE__ */ l("div", { ref: f, className: R, children: [
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
          /* @__PURE__ */ e("div", { className: z.selectedContent, children: q ? /* @__PURE__ */ l($e, { children: [
            q.avatar && /* @__PURE__ */ e(
              fe,
              {
                size: q.avatar.size || H,
                ...q.avatar
              }
            ),
            q.icon && /* @__PURE__ */ e("span", { children: q.icon }),
            /* @__PURE__ */ e("span", { children: q.label })
          ] }) : /* @__PURE__ */ e("span", { className: z.placeholder, children: n }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${z.chevron} ${v ? z.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(ve, { size: 16 })
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
          const L = p.value === T, j = [
            z.menuItem,
            L ? z.itemSelected : "",
            p.disabled ? z.itemDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ l(
            "li",
            {
              role: "option",
              "aria-selected": L,
              "aria-disabled": p.disabled,
              onClick: () => M(p),
              className: j,
              children: [
                /* @__PURE__ */ l("div", { className: z.itemLeft, children: [
                  p.avatar && /* @__PURE__ */ e(
                    fe,
                    {
                      size: p.avatar.size || H,
                      ...p.avatar
                    }
                  ),
                  p.icon && /* @__PURE__ */ e("span", { children: p.icon }),
                  /* @__PURE__ */ l("div", { className: z.itemText, children: [
                    /* @__PURE__ */ e("span", { className: z.itemLabel, children: p.label }),
                    p.description && /* @__PURE__ */ e("span", { className: z.itemDescription, children: p.description })
                  ] })
                ] }),
                L && /* @__PURE__ */ e("span", { className: z.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(be, { size: 14 }) })
              ]
            },
            p.value
          );
        })
      }
    ),
    E && /* @__PURE__ */ e(
      "span",
      {
        id: `${N}-error`,
        className: z.errorMessage,
        role: "alert",
        children: a
      }
    ),
    !E && s && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: z.helperText, children: s })
  ] });
};
Ut.displayName = "Dropdown";
const Qt = "_container_1ms02_1", Jt = "_hasDescription_1ms02_10", Xt = "_box_1ms02_14", Yt = "_nativeInput_1ms02_32", Zt = "_checked_1ms02_45", en = "_indeterminate_1ms02_46", tn = "_disabled_1ms02_51", nn = "_textGroup_1ms02_55", sn = "_label_1ms02_61", rn = "_description_1ms02_68", ne = {
  container: Qt,
  hasDescription: Jt,
  box: Xt,
  nativeInput: Yt,
  checked: Zt,
  indeterminate: en,
  disabled: tn,
  textGroup: nn,
  label: sn,
  description: rn
}, an = D(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: a,
    indeterminate: r = !1,
    disabled: d = !1,
    className: m,
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
      d ? ne.disabled : "",
      m || ""
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
          disabled: d,
          className: ne.nativeInput,
          onChange: i,
          ..._
        }
      ),
      /* @__PURE__ */ l("span", { className: N, "aria-hidden": "true", children: [
        r && /* @__PURE__ */ e(je, { size: 12 }),
        !r && x && /* @__PURE__ */ e(be, { size: 12 })
      ] }),
      (t || n) && /* @__PURE__ */ l("span", { className: ne.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: ne.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: ne.description, children: n })
      ] })
    ] });
  }
);
an.displayName = "Checkbox";
const on = "_container_m4qf3_1", ln = "_label_m4qf3_9", cn = "_required_m4qf3_19", dn = "_textareaWrapper_m4qf3_23", _n = "_textarea_m4qf3_23", un = "_hasError_m4qf3_58", hn = "_footer_m4qf3_66", mn = "_helperText_m4qf3_74", pn = "_errorMessage_m4qf3_78", fn = "_charCount_m4qf3_83", bn = "_disabled_m4qf3_89", Y = {
  container: on,
  label: ln,
  required: cn,
  textareaWrapper: dn,
  textarea: _n,
  hasError: un,
  footer: hn,
  helperText: mn,
  errorMessage: pn,
  charCount: fn,
  disabled: bn
}, vn = D(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    isRequired: a = !1,
    showCharCount: r = !1,
    maxLength: d,
    disabled: m = !1,
    value: i,
    defaultValue: _,
    id: u,
    className: g,
    onChange: b,
    ...x
  }, k) => {
    const N = de(), f = u || N, v = !!s, [B, T] = ke.useState(() => typeof i == "string" ? i.length : typeof _ == "string" ? _.length : 0), O = (E) => {
      T(E.target.value.length), b == null || b(E);
    }, q = [
      Y.container,
      v ? Y.hasError : "",
      m ? Y.disabled : "",
      g || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { className: q, children: [
      t && /* @__PURE__ */ l("label", { htmlFor: f, className: Y.label, children: [
        t,
        a && /* @__PURE__ */ e("span", { className: Y.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: Y.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: k,
          id: f,
          disabled: m,
          value: i,
          defaultValue: _,
          maxLength: d,
          onChange: O,
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
        r && d && /* @__PURE__ */ l("span", { className: Y.charCount, children: [
          B,
          " / ",
          d
        ] })
      ] })
    ] });
  }
);
vn.displayName = "Textarea";
const gn = "_card_7pqx0_1", yn = "_interactive_7pqx0_28", Nn = "_header_7pqx0_56", $n = "_headerBordered_7pqx0_64", kn = "_title_7pqx0_69", wn = "_description_7pqx0_78", xn = "_content_7pqx0_85", In = "_footer_7pqx0_89", Bn = "_footerBordered_7pqx0_98", ee = {
  card: gn,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: yn,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: Nn,
  headerBordered: $n,
  title: kn,
  description: wn,
  content: xn,
  footer: In,
  footerBordered: Bn
}, Cn = D(
  ({
    elevation: t = 1,
    padding: n = "none",
    isInteractive: s = !1,
    className: a,
    children: r,
    ...d
  }, m) => {
    const i = [
      ee.card,
      ee[`elevation-${t}`],
      ee[`padding-${n}`],
      s ? ee.interactive : "",
      a || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: m, className: i, ...d, children: r });
  }
);
Cn.displayName = "Card";
const qn = D(
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
const Ln = D(
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
const Sn = D(({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e(
  "p",
  {
    ref: a,
    className: `${ee.description} ${t || ""}`,
    ...s,
    children: n
  }
));
Sn.displayName = "CardDescription";
const zn = D(
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
zn.displayName = "CardContent";
const Dn = D(
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
const En = "_container_1xw60_1", Rn = "_table_1xw60_10", jn = "_header_1xw60_19", Tn = "_headCell_1xw60_24", Mn = "_row_1xw60_35", On = "_hoverable_1xw60_44", Wn = "_cell_1xw60_48", An = "_tabularNums_1xw60_54", re = {
  container: En,
  table: Rn,
  header: jn,
  headCell: Tn,
  row: Mn,
  hoverable: On,
  cell: Wn,
  tabularNums: An,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, Gn = D(
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
Gn.displayName = "Table";
const Fn = D(({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e("thead", { ref: a, className: `${re.header} ${t || ""}`, ...s, children: n }));
Fn.displayName = "TableHeader";
const Hn = D(({ className: t, children: n, ...s }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: t, ...s, children: n }));
Hn.displayName = "TableBody";
const Kn = D(
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
const Vn = D(
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
const Pn = D(
  ({ align: t = "left", isNumeric: n = !1, className: s, children: a, ...r }, d) => /* @__PURE__ */ e(
    "td",
    {
      ref: d,
      className: `${re.cell} ${re[`align-${t}`]} ${n ? re.tabularNums : ""} ${s || ""}`,
      ...r,
      children: a
    }
  )
);
Pn.displayName = "TableCell";
const Un = "_overlay_cpmq9_1", Qn = "_fadeIn_cpmq9_1", Jn = "_modal_cpmq9_15", Xn = "_scaleIn_cpmq9_1", Yn = "_header_cpmq9_44", Zn = "_title_cpmq9_52", es = "_closeButton_cpmq9_61", ts = "_body_cpmq9_84", ns = "_footer_cpmq9_93", ie = {
  overlay: Un,
  fadeIn: Qn,
  modal: Jn,
  scaleIn: Xn,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: Yn,
  title: Zn,
  closeButton: es,
  body: ts,
  footer: ns
}, ss = ({
  isOpen: t,
  onClose: n,
  title: s,
  size: a = "md",
  closeOnOverlayClick: r = !0,
  closeOnEsc: d = !0,
  showCloseButton: m = !0,
  footer: i,
  children: _,
  className: u
}) => {
  const g = de(), b = te(null);
  if (U(() => {
    if (!t) return;
    const f = (v) => {
      v.key === "Escape" && d && n();
    };
    return document.addEventListener("keydown", f), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    };
  }, [t, d, n]), !t) return null;
  const x = (f) => {
    f.target === f.currentTarget && r && n();
  }, k = [ie.modal, ie[`size-${a}`], u || ""].filter(Boolean).join(" "), N = /* @__PURE__ */ e("div", { className: ie.overlay, onClick: x, children: /* @__PURE__ */ l(
    "div",
    {
      ref: b,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? g : void 0,
      tabIndex: -1,
      className: k,
      children: [
        (s || m) && /* @__PURE__ */ l("div", { className: ie.header, children: [
          s && /* @__PURE__ */ e("h2", { id: g, className: ie.title, children: s }),
          m && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: n,
              className: ie.closeButton,
              children: /* @__PURE__ */ e(ge, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: ie.body, children: _ }),
        i && /* @__PURE__ */ e("div", { className: ie.footer, children: i })
      ]
    }
  ) });
  return typeof document < "u" ? we(N, document.body) : null;
};
ss.displayName = "Modal";
const rs = ({
  className: t,
  children: n,
  ...s
}) => /* @__PURE__ */ e("div", { className: `${ie.footer} ${t || ""}`, ...s, children: n });
rs.displayName = "ModalFooter";
const as = "_container_1lwtb_1", os = "_navWrapper_1lwtb_7", ls = "_scrollContainer_1lwtb_16", is = "_tabList_1lwtb_34", cs = "_tab_1lwtb_34", ds = "_tabActive_1lwtb_117", _s = "_badge_1lwtb_145", us = "_fullWidth_1lwtb_174", hs = "_scrollButton_1lwtb_183", ms = "_scrollButtonLeft_1lwtb_213", ps = "_scrollButtonRight_1lwtb_217", fs = "_hasScrollLeft_1lwtb_222", bs = "_hasScrollRight_1lwtb_238", vs = "_moreWrapper_1lwtb_257", gs = "_moreButton_1lwtb_264", ys = "_moreButtonActive_1lwtb_293", Ns = "_moreMenu_1lwtb_316", $s = "_moreMenuItem_1lwtb_335", ks = "_moreMenuItemActive_1lwtb_364", ws = "_moreMenuItemLeft_1lwtb_375", xs = "_panel_1lwtb_385", S = {
  container: as,
  navWrapper: os,
  scrollContainer: ls,
  tabList: is,
  "variant-underline": "_variant-underline_1lwtb_46",
  "variant-segmented": "_variant-segmented_1lwtb_57",
  tab: cs,
  "size-sm": "_size-sm_1lwtb_89",
  "size-md": "_size-md_1lwtb_95",
  "size-lg": "_size-lg_1lwtb_101",
  tabActive: ds,
  badge: _s,
  fullWidth: us,
  scrollButton: hs,
  scrollButtonLeft: ms,
  scrollButtonRight: ps,
  hasScrollLeft: fs,
  hasScrollRight: bs,
  moreWrapper: vs,
  moreButton: gs,
  moreButtonActive: ys,
  moreMenu: Ns,
  moreMenuItem: $s,
  moreMenuItemActive: ks,
  moreMenuItemLeft: ws,
  panel: xs
}, Is = D(
  ({
    tabs: t,
    activeTab: n,
    defaultActiveTab: s,
    onChange: a,
    variant: r = "pill",
    size: d = "md",
    fullWidth: m = !1,
    scrollable: i = !1,
    showScrollButtons: _ = !0,
    maxVisibleTabs: u,
    moreLabel: g = "More",
    className: b,
    children: x,
    ...k
  }, N) => {
    var I;
    const [f, v] = G(
      n || s || ((I = t[0]) == null ? void 0 : I.id) || ""
    ), B = n !== void 0 ? n : f, T = te(null), O = te(/* @__PURE__ */ new Map()), q = te(null), [E, M] = G(!1), [F, R] = G(!1), [H, p] = G(!1), L = typeof u == "number" && u > 0 && t.length > u, j = L ? t.slice(0, u) : t, K = L ? t.slice(u) : [], he = K.some(
      (c) => c.id === B
    );
    U(() => {
      if (!H) return;
      const c = ($) => {
        q.current && !q.current.contains($.target) && p(!1);
      };
      return document.addEventListener("mousedown", c), () => {
        document.removeEventListener("mousedown", c);
      };
    }, [H]);
    const J = Ie(() => {
      const c = T.current;
      if (!c || !i) {
        M(!1), R(!1);
        return;
      }
      const { scrollLeft: $, scrollWidth: V, clientWidth: W } = c;
      M($ > 2), R($ + W < V - 2);
    }, [i]);
    U(() => {
      if (!i) return;
      const c = T.current;
      if (c)
        return J(), c.addEventListener("scroll", J, {
          passive: !0
        }), window.addEventListener("resize", J), () => {
          c.removeEventListener("scroll", J), window.removeEventListener("resize", J);
        };
    }, [i, J, j]), U(() => {
      if (!i) return;
      const c = O.current.get(B), $ = T.current;
      if (c && $) {
        const V = c.getBoundingClientRect(), W = $.getBoundingClientRect();
        V.left < W.left ? $.scrollBy({
          left: V.left - W.left - 16,
          behavior: "smooth"
        }) : V.right > W.right && $.scrollBy({
          left: V.right - W.right + 16,
          behavior: "smooth"
        });
      }
    }, [B, i]);
    const _e = (c, $) => {
      $ || (n === void 0 && v(c), p(!1), a == null || a(c));
    }, h = (c) => {
      const $ = t.filter((ue) => !ue.disabled);
      if ($.length === 0) return;
      const V = $.findIndex((ue) => ue.id === B);
      let W = -1;
      if (c.key === "ArrowRight" ? (c.preventDefault(), W = V < $.length - 1 ? V + 1 : 0) : c.key === "ArrowLeft" ? (c.preventDefault(), W = V > 0 ? V - 1 : $.length - 1) : c.key === "Home" ? (c.preventDefault(), W = 0) : c.key === "End" && (c.preventDefault(), W = $.length - 1), W >= 0) {
        const ue = $[W];
        if (ue) {
          _e(ue.id);
          const Ne = O.current.get(ue.id);
          Ne == null || Ne.focus();
        }
      }
    }, y = (c) => {
      const $ = T.current;
      $ && $.scrollBy({ left: c, behavior: "smooth" });
    }, Q = [
      S.container,
      E && S.hasScrollLeft,
      F && S.hasScrollRight,
      b || ""
    ].filter(Boolean).join(" "), o = [
      S.tabList,
      S[`variant-${r}`],
      m ? S.fullWidth : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l("div", { ref: N, className: Q, ...k, children: [
      /* @__PURE__ */ l("div", { className: S.navWrapper, children: [
        i && _ && E && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${S.scrollButton} ${S.scrollButtonLeft}`,
            "aria-label": "Scroll tabs left",
            onClick: () => y(-200),
            children: /* @__PURE__ */ e(Te, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: T,
            className: i ? S.scrollContainer : void 0,
            children: /* @__PURE__ */ e(
              "div",
              {
                role: "tablist",
                className: o,
                onKeyDown: h,
                children: j.map((c) => {
                  const $ = c.id === B, V = [
                    S.tab,
                    S[`size-${d}`],
                    $ ? S.tabActive : ""
                  ].filter(Boolean).join(" ");
                  return /* @__PURE__ */ l(
                    "button",
                    {
                      ref: (W) => {
                        W ? O.current.set(c.id, W) : O.current.delete(c.id);
                      },
                      role: "tab",
                      type: "button",
                      tabIndex: $ ? 0 : -1,
                      "aria-selected": $,
                      "aria-controls": `panel-${c.id}`,
                      id: `tab-${c.id}`,
                      disabled: c.disabled,
                      onClick: () => _e(c.id, c.disabled),
                      className: V,
                      children: [
                        c.icon && /* @__PURE__ */ e("span", { children: c.icon }),
                        /* @__PURE__ */ e("span", { children: c.label }),
                        c.badge !== void 0 && /* @__PURE__ */ e("span", { className: S.badge, children: c.badge })
                      ]
                    },
                    c.id
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
            className: `${S.scrollButton} ${S.scrollButtonRight}`,
            "aria-label": "Scroll tabs right",
            onClick: () => y(200),
            children: /* @__PURE__ */ e(Me, { size: 16 })
          }
        ),
        L && /* @__PURE__ */ l("div", { ref: q, className: S.moreWrapper, children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              className: [
                S.moreButton,
                S[`size-${d}`],
                he ? S.moreButtonActive : ""
              ].filter(Boolean).join(" "),
              "aria-haspopup": "true",
              "aria-expanded": H,
              "aria-label": "More navigation tabs",
              onClick: () => p((c) => !c),
              children: [
                /* @__PURE__ */ e(Ae, { size: 16 }),
                /* @__PURE__ */ e("span", { children: g }),
                /* @__PURE__ */ e(ve, { size: 14 })
              ]
            }
          ),
          H && /* @__PURE__ */ e("div", { className: S.moreMenu, role: "menu", children: K.map((c) => {
            const $ = c.id === B;
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                role: "menuitem",
                disabled: c.disabled,
                className: [
                  S.moreMenuItem,
                  $ ? S.moreMenuItemActive : ""
                ].filter(Boolean).join(" "),
                onClick: () => _e(c.id, c.disabled),
                children: [
                  /* @__PURE__ */ l("span", { className: S.moreMenuItemLeft, children: [
                    c.icon && /* @__PURE__ */ e("span", { children: c.icon }),
                    /* @__PURE__ */ e("span", { children: c.label })
                  ] }),
                  $ && /* @__PURE__ */ e(be, { size: 14 }),
                  !$ && c.badge !== void 0 && /* @__PURE__ */ e("span", { className: S.badge, children: c.badge })
                ]
              },
              c.id
            );
          }) })
        ] })
      ] }),
      x
    ] });
  }
);
Is.displayName = "Tabs";
const Bs = D(
  ({ tabId: t, activeTabId: n, className: s, children: a, ...r }, d) => t !== n ? null : /* @__PURE__ */ e(
    "div",
    {
      ref: d,
      role: "tabpanel",
      id: `panel-${t}`,
      "aria-labelledby": `tab-${t}`,
      tabIndex: 0,
      className: `${S.panel} ${s || ""}`,
      ...r,
      children: a
    }
  )
);
Bs.displayName = "TabPanel";
const Cs = "_container_1xroe_1", qs = "_track_1xroe_10", Ls = "_thumb_1xroe_24", Ss = "_checked_1xroe_34", zs = "_nativeInput_1xroe_43", Ds = "_label_1xroe_55", Es = "_description_1xroe_61", Rs = "_textGroup_1xroe_66", js = "_disabled_1xroe_72", oe = {
  container: Cs,
  track: qs,
  thumb: Ls,
  checked: Ss,
  nativeInput: zs,
  label: Ds,
  description: Es,
  textGroup: Rs,
  disabled: js
}, Ts = D(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: a,
    disabled: r = !1,
    className: d,
    onChange: m,
    ...i
  }, _) => {
    const u = s ?? a ?? !1, g = [
      oe.container,
      u ? oe.checked : "",
      r ? oe.disabled : "",
      d || ""
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
          className: oe.nativeInput,
          onChange: m,
          ...i
        }
      ),
      /* @__PURE__ */ e("span", { className: oe.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: oe.thumb }) }),
      (t || n) && /* @__PURE__ */ l("span", { className: oe.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: oe.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: oe.description, children: n })
      ] })
    ] });
  }
);
Ts.displayName = "Switch";
const Ms = "_group_1e0nk_1", Os = "_groupLabel_1e0nk_8", Ws = "_item_1e0nk_14", As = "_circle_1e0nk_22", Gs = "_dot_1e0nk_35", Fs = "_checked_1e0nk_45", Hs = "_nativeInput_1e0nk_54", Ks = "_label_1e0nk_67", Vs = "_description_1e0nk_73", Ps = "_textGroup_1e0nk_78", Us = "_disabled_1e0nk_84", Z = {
  group: Ms,
  groupLabel: Os,
  item: Ws,
  circle: As,
  dot: Gs,
  checked: Fs,
  nativeInput: Hs,
  label: Ks,
  description: Vs,
  textGroup: Ps,
  disabled: Us
}, xe = Ce(null), Qs = ({
  name: t,
  value: n,
  defaultValue: s,
  onChange: a,
  label: r,
  disabled: d = !1,
  className: m,
  children: i
}) => {
  const [_, u] = ke.useState(
    n || s
  ), g = n !== void 0 ? n : _, b = (x) => {
    u(x.target.value), a == null || a(x.target.value);
  };
  return /* @__PURE__ */ e(
    xe.Provider,
    {
      value: {
        name: t,
        value: g,
        onChange: b,
        disabled: d
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          role: "radiogroup",
          "aria-label": r,
          className: `${Z.group} ${m || ""}`,
          children: [
            r && /* @__PURE__ */ e("span", { className: Z.groupLabel, children: r }),
            i
          ]
        }
      )
    }
  );
};
Qs.displayName = "RadioGroup";
const Js = D(
  ({
    value: t,
    label: n,
    description: s,
    disabled: a,
    className: r,
    checked: d,
    onChange: m,
    ...i
  }, _) => {
    const u = Be(xe), g = u ? u.value === t : d, b = a || (u == null ? void 0 : u.disabled) || !1, x = (u == null ? void 0 : u.name) || i.name, k = [
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
            m == null || m(f), (v = u == null ? void 0 : u.onChange) == null || v.call(u, f);
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
Js.displayName = "Radio";
const Xs = "_wrapper_yiqhg_1", Ys = "_searchIcon_yiqhg_8", Zs = "_input_yiqhg_18", er = "_rightSlots_yiqhg_42", tr = "_clearButton_yiqhg_50", nr = "_shortcut_yiqhg_66", me = {
  wrapper: Xs,
  searchIcon: Ys,
  input: Zs,
  rightSlots: er,
  clearButton: tr,
  shortcut: nr
}, sr = ({
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
), rr = D(
  ({
    value: t,
    defaultValue: n,
    onChange: s,
    onClear: a,
    shortcutHint: r = "⌘K",
    placeholder: d = "Search records, students, classes...",
    className: m,
    ...i
  }, _) => {
    const [u, g] = G(
      t || n || ""
    ), b = t !== void 0, x = b ? t : u, k = (f) => {
      b || g(f.target.value), s == null || s(f);
    }, N = () => {
      b || g(""), a == null || a();
    };
    return /* @__PURE__ */ l("div", { className: `${me.wrapper} ${m || ""}`, children: [
      /* @__PURE__ */ e("span", { className: me.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(sr, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: _,
          type: "search",
          value: x,
          placeholder: d,
          onChange: k,
          className: me.input,
          ...i
        }
      ),
      /* @__PURE__ */ l("div", { className: me.rightSlots, children: [
        x && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: N,
            className: me.clearButton,
            children: /* @__PURE__ */ e(ge, { size: 14 })
          }
        ),
        r && /* @__PURE__ */ e("kbd", { className: me.shortcut, children: r })
      ] })
    ] });
  }
);
rr.displayName = "SearchInput";
const ar = "_card_kgob9_1", or = "_topRow_kgob9_18", lr = "_title_kgob9_25", ir = "_iconSlot_kgob9_33", cr = "_metricRow_kgob9_49", dr = "_value_kgob9_55", _r = "_trendBadge_kgob9_65", ur = "_description_kgob9_90", se = {
  card: ar,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: or,
  title: lr,
  iconSlot: ir,
  metricRow: cr,
  value: dr,
  trendBadge: _r,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: ur
}, hr = ({
  title: t,
  value: n,
  description: s,
  trend: a,
  icon: r,
  highlighted: d = !1,
  className: m,
  ...i
}) => {
  const _ = [
    se.card,
    d ? se["variant-highlight"] : "",
    m || ""
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
hr.displayName = "StatCard";
const mr = "_overlay_lam6o_1", pr = "_fadeIn_lam6o_1", fr = "_drawer_lam6o_11", br = "_slideInRight_lam6o_1", vr = "_slideInLeft_lam6o_1", gr = "_header_lam6o_51", yr = "_title_lam6o_59", Nr = "_closeButton_lam6o_67", $r = "_body_lam6o_90", kr = "_footer_lam6o_99", le = {
  overlay: mr,
  fadeIn: pr,
  drawer: fr,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: br,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: vr,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: gr,
  title: yr,
  closeButton: Nr,
  body: $r,
  footer: kr
}, wr = ({
  isOpen: t,
  onClose: n,
  title: s,
  placement: a = "right",
  size: r = "md",
  closeOnOverlayClick: d = !0,
  closeOnEsc: m = !0,
  showCloseButton: i = !0,
  footer: _,
  children: u,
  className: g
}) => {
  const b = de(), x = te(null);
  if (U(() => {
    if (!t) return;
    const v = (B) => {
      B.key === "Escape" && m && n();
    };
    return document.addEventListener("keydown", v), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    };
  }, [t, m, n]), !t) return null;
  const k = (v) => {
    v.target === v.currentTarget && d && n();
  }, N = [
    le.drawer,
    le[`placement-${a}`],
    le[`size-${r}`],
    g || ""
  ].filter(Boolean).join(" "), f = /* @__PURE__ */ l($e, { children: [
    /* @__PURE__ */ e("div", { className: le.overlay, onClick: k }),
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
          (s || i) && /* @__PURE__ */ l("div", { className: le.header, children: [
            s && /* @__PURE__ */ e("h3", { id: b, className: le.title, children: s }),
            i && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: n,
                className: le.closeButton,
                children: /* @__PURE__ */ e(ge, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: le.body, children: u }),
          _ && /* @__PURE__ */ e("div", { className: le.footer, children: _ })
        ]
      }
    )
  ] });
  return typeof document < "u" ? we(f, document.body) : null;
};
wr.displayName = "Drawer";
const xr = "_chip_ldr6y_1", Ir = "_pill_ldr6y_14", Br = "_rounded_ldr6y_18", Cr = "_sm_ldr6y_22", qr = "_md_ldr6y_36", Lr = "_lg_ldr6y_45", Sr = "_neutral_ldr6y_55", zr = "_primary_ldr6y_61", Dr = "_tonal_ldr6y_68", Er = "_outline_ldr6y_75", Rr = "_success_ldr6y_81", jr = "_warning_ldr6y_87", Tr = "_danger_ldr6y_93", Mr = "_clickable_ldr6y_100", Or = "_disabled_ldr6y_104", Wr = "_selected_ldr6y_104", Ar = "_selectedIcon_ldr6y_131", Gr = "_avatarSlot_ldr6y_139", Fr = "_hasAvatar_ldr6y_183", Hr = "_iconSlot_ldr6y_212", Kr = "_label_ldr6y_221", Vr = "_countBadge_ldr6y_230", Pr = "_removeButton_ldr6y_251", P = {
  chip: xr,
  pill: Ir,
  rounded: Br,
  sm: Cr,
  md: qr,
  lg: Lr,
  neutral: Sr,
  primary: zr,
  tonal: Dr,
  outline: Er,
  success: Rr,
  warning: jr,
  danger: Tr,
  clickable: Mr,
  disabled: Or,
  selected: Wr,
  selectedIcon: Ar,
  avatarSlot: Gr,
  hasAvatar: Fr,
  iconSlot: Hr,
  label: Kr,
  countBadge: Vr,
  removeButton: Pr
}, Ur = ({
  label: t,
  avatar: n,
  icon: s,
  variant: a,
  size: r = "md",
  shape: d = "pill",
  selected: m = !1,
  count: i,
  onRemove: _,
  disabled: u = !1,
  className: g,
  onClick: b,
  ...x
}) => {
  const k = !!b && !u, N = a ?? (n ? "tonal" : "neutral"), f = [
    P.chip,
    P[N],
    P[r],
    P[d],
    n ? P.hasAvatar : "",
    m ? P.selected : "",
    k ? P.clickable : "",
    _ ? P.removable : "",
    u ? P.disabled : "",
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
        m && /* @__PURE__ */ e("span", { className: P.selectedIcon, children: /* @__PURE__ */ e(be, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 }) }),
        !m && n && /* @__PURE__ */ e("span", { className: P.avatarSlot, children: n }),
        !m && !n && s && /* @__PURE__ */ e("span", { className: P.iconSlot, children: s }),
        /* @__PURE__ */ e("span", { className: P.label, children: t }),
        i !== void 0 && /* @__PURE__ */ e("span", { className: P.countBadge, children: i }),
        _ && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            className: P.removeButton,
            onClick: (v) => {
              v.stopPropagation(), !u && _ && _();
            },
            disabled: u,
            children: /* @__PURE__ */ e(ge, { size: r === "sm" ? 10 : r === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, Qr = "_container_d3es0_1", Jr = "_label_d3es0_14", Xr = "_required_d3es0_24", Yr = "_trigger_d3es0_29", Zr = "_disabled_d3es0_50", ea = "_isOpen_d3es0_54", ta = "_chipContainer_d3es0_72", na = "_searchInput_d3es0_81", sa = "_placeholder_d3es0_93", ra = "_moreCount_d3es0_97", aa = "_trailing_d3es0_112", oa = "_clearAllButton_d3es0_119", la = "_chevron_d3es0_137", ia = "_menu_d3es0_149", ca = "_empty_d3es0_169", da = "_option_d3es0_177", _a = "_focused_d3es0_193", ua = "_selected_d3es0_197", ha = "_checkboxSlot_d3es0_206", ma = "_checkboxBox_d3es0_213", pa = "_checkboxChecked_d3es0_226", fa = "_avatarSlot_d3es0_231", ba = "_iconSlot_d3es0_244", va = "_labelCol_d3es0_251", ga = "_labelRow_d3es0_258", ya = "_optionLabel_d3es0_265", Na = "_badge_d3es0_272", $a = "_optionDescription_d3es0_300", ka = "_optionDisabled_d3es0_307", wa = "_hasError_d3es0_314", xa = "_errorText_d3es0_323", Ia = "_helperText_d3es0_328", w = {
  container: Qr,
  "size-sm": "_size-sm_d3es0_10",
  label: Jr,
  required: Xr,
  trigger: Yr,
  disabled: Zr,
  isOpen: ea,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: ta,
  searchInput: na,
  placeholder: sa,
  moreCount: ra,
  trailing: aa,
  clearAllButton: oa,
  chevron: la,
  menu: ia,
  empty: ca,
  option: da,
  focused: _a,
  selected: ua,
  checkboxSlot: ha,
  checkboxBox: ma,
  checkboxChecked: pa,
  avatarSlot: fa,
  iconSlot: ba,
  labelCol: va,
  labelRow: ga,
  optionLabel: ya,
  badge: Na,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: $a,
  optionDisabled: ka,
  hasError: wa,
  errorText: xa,
  helperText: Ia
}, lo = ({
  label: t,
  placeholder: n = "Select items...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: d,
  defaultValue: m,
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
  const v = de(), B = N || v, T = te(null), O = te(null), [q, E] = G(!1), [M, F] = G(""), [R, H] = G(
    d || m || []
  ), [p, L] = G(-1);
  U(() => {
    d !== void 0 && H(d);
  }, [d]);
  const j = pe(() => r.filter((o) => R.includes(o.value)), [r, R]), K = pe(() => {
    if (!M.trim()) return r;
    const o = M.toLowerCase();
    return r.filter(
      (I) => I.label.toLowerCase().includes(o) || I.description && I.description.toLowerCase().includes(o) || I.badge && I.badge.toLowerCase().includes(o)
    );
  }, [r, M]);
  U(() => {
    const o = (I) => {
      T.current && !T.current.contains(I.target) && (E(!1), F(""), L(-1));
    };
    return q && document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [q]);
  const he = (o) => {
    if (o.disabled || g) return;
    let I;
    R.includes(o.value) ? I = R.filter(($) => $ !== o.value) : I = [...R, o.value], d === void 0 && H(I);
    const c = r.filter(($) => I.includes($.value));
    i == null || i(I, c);
  }, J = (o) => {
    if (g) return;
    const I = R.filter(($) => $ !== o);
    d === void 0 && H(I);
    const c = r.filter(($) => I.includes($.value));
    i == null || i(I, c);
  }, _e = (o) => {
    if (!g) {
      if (o.key === "Backspace" && M === "" && R.length > 0) {
        J(R[R.length - 1]);
        return;
      }
      if (!q) {
        (o.key === "Enter" || o.key === " " || o.key === "ArrowDown") && (o.preventDefault(), E(!0));
        return;
      }
      o.key === "Escape" ? (o.preventDefault(), E(!1), F("")) : o.key === "ArrowDown" ? (o.preventDefault(), L(
        (I) => I < K.length - 1 ? I + 1 : 0
      )) : o.key === "ArrowUp" ? (o.preventDefault(), L(
        (I) => I > 0 ? I - 1 : K.length - 1
      )) : o.key === "Enter" && p >= 0 && p < K.length && (o.preventDefault(), he(K[p]));
    }
  }, h = f ? j.slice(0, f) : j, y = f ? Math.max(0, j.length - f) : 0, Q = !!a;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: T,
      className: [
        w.container,
        w[`size-${_}`],
        q ? w.isOpen : "",
        g ? w.disabled : "",
        Q ? w.hasError : "",
        k || ""
      ].filter(Boolean).join(" "),
      onKeyDown: _e,
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
              g || (E(!q), !q && x && setTimeout(() => {
                var o;
                return (o = O.current) == null ? void 0 : o.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": q,
            "aria-haspopup": "listbox",
            "aria-labelledby": t ? `${B}-label` : void 0,
            children: [
              /* @__PURE__ */ l("div", { className: w.chipContainer, children: [
                h.map((o) => /* @__PURE__ */ e(
                  Ur,
                  {
                    label: o.label,
                    variant: "tonal",
                    shape: u || (o.avatar ? "pill" : "rounded"),
                    size: _ === "sm" ? "sm" : _ === "lg" ? "lg" : "md",
                    avatar: o.avatar ? /* @__PURE__ */ e(
                      fe,
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
                    ref: O,
                    type: "text",
                    className: w.searchInput,
                    placeholder: j.length === 0 ? n : "",
                    value: M,
                    onChange: (o) => {
                      F(o.target.value), q || E(!0);
                    },
                    onClick: (o) => o.stopPropagation(),
                    disabled: g
                  }
                ) : j.length === 0 && /* @__PURE__ */ e("span", { className: w.placeholder, children: n })
              ] }),
              /* @__PURE__ */ l("div", { className: w.trailing, children: [
                R.length > 0 && !g && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: w.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (o) => {
                      o.stopPropagation(), d === void 0 && H([]), i == null || i([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: w.chevron, children: /* @__PURE__ */ e(ve, { size: 14 }) })
              ] })
            ]
          }
        ),
        q && /* @__PURE__ */ e("div", { className: w.menu, role: "listbox", "aria-multiselectable": "true", children: K.length === 0 ? /* @__PURE__ */ e("div", { className: w.empty, children: "No matches found" }) : K.map((o, I) => {
          const c = R.includes(o.value), $ = I === p;
          return /* @__PURE__ */ l(
            "div",
            {
              role: "option",
              "aria-selected": c,
              "aria-disabled": o.disabled,
              className: [
                w.option,
                c ? w.selected : "",
                $ ? w.focused : "",
                o.disabled ? w.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: (V) => {
                V.stopPropagation(), he(o);
              },
              onMouseEnter: () => L(I),
              children: [
                /* @__PURE__ */ e("div", { className: w.checkboxSlot, children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: [
                      w.checkboxBox,
                      c ? w.checkboxChecked : ""
                    ].join(" "),
                    children: c && /* @__PURE__ */ e(be, { size: 11 })
                  }
                ) }),
                o.avatar && /* @__PURE__ */ e("div", { className: w.avatarSlot, children: /* @__PURE__ */ e(fe, { size: "sm", name: o.label, ...o.avatar }) }),
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
}, Ba = "_container_1nphi_1", Ca = "_label_1nphi_10", qa = "_required_1nphi_20", La = "_trigger_1nphi_25", Sa = "_disabled_1nphi_45", za = "_isOpen_1nphi_49", Da = "_searchIcon_1nphi_55", Ea = "_input_1nphi_63", Ra = "_clearButton_1nphi_81", ja = "_chevron_1nphi_98", Ta = "_menu_1nphi_110", Ma = "_optionsList_1nphi_129", Oa = "_groupBlock_1nphi_135", Wa = "_groupHeader_1nphi_140", Aa = "_option_1nphi_129", Ga = "_focused_1nphi_174", Fa = "_selected_1nphi_178", Ha = "_optionContent_1nphi_182", Ka = "_optionIcon_1nphi_190", Va = "_optionLabel_1nphi_197", Pa = "_highlight_1nphi_206", Ua = "_optionBadge_1nphi_211", Qa = "_optionDisabled_1nphi_223", Ja = "_emptyFallback_1nphi_230", Xa = "_emptyIcon_1nphi_240", Ya = "_emptyTitle_1nphi_254", Za = "_emptySubtitle_1nphi_260", eo = "_footerGuide_1nphi_267", to = "_hasError_1nphi_280", no = "_errorText_1nphi_289", so = "_helperText_1nphi_294", C = {
  container: Ba,
  label: Ca,
  required: qa,
  trigger: La,
  disabled: Sa,
  isOpen: za,
  searchIcon: Da,
  input: Ea,
  clearButton: Ra,
  chevron: ja,
  menu: Ta,
  optionsList: Ma,
  groupBlock: Oa,
  groupHeader: Wa,
  option: Aa,
  focused: Ga,
  selected: Fa,
  optionContent: Ha,
  optionIcon: Ka,
  optionLabel: Va,
  highlight: Pa,
  optionBadge: Ua,
  optionDisabled: Qa,
  emptyFallback: Ja,
  emptyIcon: Xa,
  emptyTitle: Ya,
  emptySubtitle: Za,
  footerGuide: eo,
  hasError: to,
  errorText: no,
  helperText: so
}, io = ({
  label: t,
  placeholder: n = "Search entities...",
  helperText: s,
  errorMessage: a,
  options: r,
  value: d,
  defaultValue: m,
  onChange: i,
  disabled: _ = !1,
  isRequired: u = !1,
  className: g,
  id: b
}) => {
  const x = de(), k = b || x, N = te(null), f = te(null), [v, B] = G(!1), [T, O] = G(
    d || m || ""
  ), [q, E] = G(""), [M, F] = G(-1);
  U(() => {
    d !== void 0 && O(d);
  }, [d]);
  const R = pe(() => r.find((h) => h.value === T), [r, T]);
  U(() => {
    !v && R ? E(R.label) : !v && !R && E("");
  }, [v, R]);
  const H = pe(() => {
    if (!q.trim()) return r;
    const h = q.toLowerCase();
    return r.filter(
      (y) => y.label.toLowerCase().includes(h) || y.group && y.group.toLowerCase().includes(h) || y.badge && y.badge.toLowerCase().includes(h)
    );
  }, [r, q]), p = pe(() => {
    const h = {};
    return H.forEach((y) => {
      const Q = y.group || "";
      h[Q] || (h[Q] = []), h[Q].push(y);
    }), h;
  }, [H]), L = pe(() => {
    const h = [];
    return Object.keys(p).forEach((y) => {
      h.push(...p[y]);
    }), h;
  }, [p]);
  U(() => {
    const h = (y) => {
      N.current && !N.current.contains(y.target) && (B(!1), F(-1));
    };
    return v && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [v]);
  const j = (h) => {
    h.disabled || _ || (d === void 0 && O(h.value), E(h.label), B(!1), F(-1), i == null || i(h.value, h));
  }, K = (h) => {
    var y;
    h.stopPropagation(), E(""), d === void 0 && O(""), i == null || i("", void 0), (y = f.current) == null || y.focus();
  }, he = (h) => {
    if (!_) {
      if (!v) {
        (h.key === "ArrowDown" || h.key === "Enter") && (h.preventDefault(), B(!0));
        return;
      }
      h.key === "Escape" ? (h.preventDefault(), B(!1), F(-1)) : h.key === "ArrowDown" ? (h.preventDefault(), F((y) => y < L.length - 1 ? y + 1 : 0)) : h.key === "ArrowUp" ? (h.preventDefault(), F((y) => y > 0 ? y - 1 : L.length - 1)) : h.key === "Enter" && M >= 0 && M < L.length && (h.preventDefault(), j(L[M]));
    }
  }, J = (h, y) => {
    if (!y.trim()) return h;
    const Q = h.split(new RegExp(`(${y})`, "gi"));
    return /* @__PURE__ */ e($e, { children: Q.map(
      (o, I) => o.toLowerCase() === y.toLowerCase() ? /* @__PURE__ */ e("span", { className: C.highlight, children: o }, I) : o
    ) });
  }, _e = !!a;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: N,
      className: [
        C.container,
        v ? C.isOpen : "",
        _ ? C.disabled : "",
        _e ? C.hasError : "",
        g || ""
      ].filter(Boolean).join(" "),
      onKeyDown: he,
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
              var h;
              _ || (B(!0), (h = f.current) == null || h.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: C.searchIcon, children: /* @__PURE__ */ e(We, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: f,
                  id: k,
                  type: "text",
                  className: C.input,
                  placeholder: n,
                  value: q,
                  role: "combobox",
                  "aria-expanded": v,
                  "aria-autocomplete": "list",
                  "aria-controls": `${k}-popup`,
                  disabled: _,
                  onChange: (h) => {
                    E(h.target.value), v || B(!0);
                  },
                  onFocus: () => B(!0)
                }
              ),
              q && !_ && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: C.clearButton,
                  "aria-label": "Clear query",
                  onClick: K,
                  children: /* @__PURE__ */ e(ge, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: C.chevron, children: /* @__PURE__ */ e(ve, { size: 14 }) })
            ]
          }
        ),
        v && /* @__PURE__ */ l("div", { id: `${k}-popup`, className: C.menu, role: "listbox", children: [
          L.length === 0 ? /* @__PURE__ */ l("div", { className: C.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: C.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: C.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: C.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: C.optionsList, children: Object.keys(p).map((h) => /* @__PURE__ */ l(
            "div",
            {
              className: C.groupBlock,
              children: [
                h && /* @__PURE__ */ e("div", { className: C.groupHeader, children: h }),
                p[h].map((y) => {
                  const Q = y.value === T, o = L.indexOf(y), I = o === M;
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
                      onClick: (c) => {
                        c.stopPropagation(), j(y);
                      },
                      onMouseEnter: () => F(o),
                      children: [
                        /* @__PURE__ */ l("div", { className: C.optionContent, children: [
                          y.icon && /* @__PURE__ */ e("span", { className: C.optionIcon, children: y.icon }),
                          /* @__PURE__ */ e("span", { className: C.optionLabel, children: J(y.label, q) })
                        ] }),
                        y.badge && /* @__PURE__ */ e("span", { className: C.optionBadge, children: y.badge })
                      ]
                    },
                    y.value
                  );
                })
              ]
            },
            h || "default-group"
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
};
export {
  fe as Avatar,
  Ke as Badge,
  Ge as Button,
  Cn as Card,
  zn as CardContent,
  Sn as CardDescription,
  Dn as CardFooter,
  qn as CardHeader,
  Ln as CardTitle,
  be as CheckIcon,
  an as Checkbox,
  ve as ChevronDownIcon,
  Te as ChevronLeftIcon,
  Me as ChevronRightIcon,
  Ur as Chip,
  ge as CloseIcon,
  io as Combobox,
  wr as Drawer,
  Ut as Dropdown,
  ot as Input,
  je as MinusIcon,
  ss as Modal,
  rs as ModalFooter,
  Ae as MoreHorizontalIcon,
  lo as MultiSelect,
  Js as Radio,
  Qs as RadioGroup,
  We as SearchIcon,
  rr as SearchInput,
  bt as Select,
  Re as SpinnerIcon,
  hr as StatCard,
  Ts as Switch,
  Bs as TabPanel,
  Gn as Table,
  Hn as TableBody,
  Pn as TableCell,
  Vn as TableHead,
  Fn as TableHeader,
  Kn as TableRow,
  Is as Tabs,
  vn as Textarea,
  Oe as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
