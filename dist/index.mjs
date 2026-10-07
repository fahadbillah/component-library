import { jsx as e, jsxs as c, Fragment as ve } from "react/jsx-runtime";
import ge, { forwardRef as z, useId as de, useState as V, useRef as se, useEffect as P, useCallback as ke, useContext as xe, createContext as we, useMemo as ue } from "react";
import { createPortal as ye } from "react-dom";
const Ie = "_button_1ckl5_1", Be = "_fullWidth_1ckl5_109", Ce = "_disabled_1ckl5_113", qe = "_loading_1ckl5_120", Se = "_spinner_1ckl5_124", Le = "_icon_1ckl5_130", re = {
  button: Ie,
  "size-sm": "_size-sm_1ckl5_27",
  "size-md": "_size-md_1ckl5_34",
  "size-lg": "_size-lg_1ckl5_41",
  "variant-primary": "_variant-primary_1ckl5_49",
  "variant-secondary": "_variant-secondary_1ckl5_60",
  "variant-outline": "_variant-outline_1ckl5_71",
  "variant-ghost": "_variant-ghost_1ckl5_82",
  "variant-danger": "_variant-danger_1ckl5_92",
  fullWidth: Be,
  disabled: Ce,
  loading: qe,
  spinner: Se,
  icon: Le
}, ze = ({
  size: t = 18,
  className: n,
  ...s
}) => /* @__PURE__ */ c(
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
), fe = ({
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
), De = ({
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
), Ee = ({
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
), Re = ({
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
), pe = ({
  size: t = 18,
  className: n,
  ...s
}) => /* @__PURE__ */ c(
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
), Te = ({
  size: t = 20,
  className: n,
  ...s
}) => /* @__PURE__ */ c(
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
), je = ({
  size: t = 16,
  className: n,
  ...s
}) => /* @__PURE__ */ c(
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
), Oe = z(
  ({
    variant: t = "primary",
    size: n = "md",
    isLoading: s = !1,
    leftIcon: r,
    rightIcon: a,
    fullWidth: i = !1,
    disabled: p,
    className: o,
    children: _,
    ...u
  }, y) => {
    const v = [
      re.button,
      re[`variant-${t}`],
      re[`size-${n}`],
      i ? re.fullWidth : "",
      s ? re.loading : "",
      p || s ? re.disabled : "",
      o || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c(
      "button",
      {
        ref: y,
        disabled: p || s,
        className: v,
        "aria-busy": s,
        ...u,
        children: [
          s && /* @__PURE__ */ e("span", { className: re.spinner, "aria-hidden": "true", children: /* @__PURE__ */ e(ze, { size: n === "sm" ? 14 : n === "lg" ? 20 : 16 }) }),
          !s && r && /* @__PURE__ */ e("span", { className: re.icon, children: r }),
          _ && /* @__PURE__ */ e("span", { children: _ }),
          !s && a && /* @__PURE__ */ e("span", { className: re.icon, children: a })
        ]
      }
    );
  }
);
Oe.displayName = "Button";
const We = "_badge_qj0y6_1", Ae = "_dot_qj0y6_63", me = {
  badge: We,
  "size-sm": "_size-sm_qj0y6_17",
  "size-md": "_size-md_qj0y6_24",
  "variant-success": "_variant-success_qj0y6_32",
  "variant-warning": "_variant-warning_qj0y6_38",
  "variant-danger": "_variant-danger_qj0y6_44",
  "variant-info": "_variant-info_qj0y6_50",
  "variant-neutral": "_variant-neutral_qj0y6_56",
  dot: Ae
}, Ge = ({
  variant: t = "neutral",
  size: n = "md",
  withDot: s = !1,
  leftIcon: r,
  rightIcon: a,
  className: i,
  children: p,
  ...o
}) => {
  const _ = [
    me.badge,
    me[`variant-${t}`],
    me[`size-${n}`],
    i || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("span", { className: _, ...o, children: [
    s && /* @__PURE__ */ e("span", { className: me.dot, "aria-hidden": "true" }),
    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r }),
    /* @__PURE__ */ e("span", { children: p }),
    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: a })
  ] });
};
Ge.displayName = "Badge";
const Me = "_container_df4fv_1", Fe = "_label_df4fv_13", Ve = "_required_df4fv_23", He = "_inputWrapper_df4fv_27", Ke = "_input_df4fv_27", Pe = "_hasLeftIcon_df4fv_80", Ue = "_hasRightIcon_df4fv_84", Qe = "_iconSlot_df4fv_88", Je = "_leftSlot_df4fv_96", Xe = "_rightSlot_df4fv_100", Ye = "_hasError_df4fv_105", Ze = "_helperText_df4fv_113", et = "_errorMessage_df4fv_119", tt = "_disabled_df4fv_127", G = {
  container: Me,
  "size-sm": "_size-sm_df4fv_9",
  label: Fe,
  required: Ve,
  inputWrapper: He,
  input: Ke,
  "size-md": "_size-md_df4fv_67",
  "size-lg": "_size-lg_df4fv_73",
  hasLeftIcon: Pe,
  hasRightIcon: Ue,
  iconSlot: Qe,
  leftSlot: Je,
  rightSlot: Xe,
  hasError: Ye,
  helperText: Ze,
  errorMessage: et,
  disabled: tt
}, nt = z(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    inputSize: r = "md",
    leftIcon: a,
    rightIcon: i,
    isRequired: p = !1,
    disabled: o = !1,
    id: _,
    className: u,
    ...y
  }, v) => {
    const x = de(), $ = _ || x, N = !!s, m = [
      G.container,
      G[`size-${r}`],
      N ? G.hasError : "",
      o ? G.disabled : "",
      a ? G.hasLeftIcon : "",
      i ? G.hasRightIcon : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("div", { className: m, children: [
      t && /* @__PURE__ */ c("label", { htmlFor: $, className: G.label, children: [
        t,
        p && /* @__PURE__ */ e("span", { className: G.required, children: "*" })
      ] }),
      /* @__PURE__ */ c("div", { className: G.inputWrapper, children: [
        a && /* @__PURE__ */ e("span", { className: `${G.iconSlot} ${G.leftSlot}`, children: a }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: v,
            id: $,
            disabled: o,
            "aria-invalid": N,
            "aria-describedby": N ? `${$}-error` : n ? `${$}-helper` : void 0,
            className: G.input,
            ...y
          }
        ),
        i && /* @__PURE__ */ e("span", { className: `${G.iconSlot} ${G.rightSlot}`, children: i })
      ] }),
      N && /* @__PURE__ */ e(
        "span",
        {
          id: `${$}-error`,
          className: G.errorMessage,
          role: "alert",
          children: s
        }
      ),
      !N && n && /* @__PURE__ */ e("span", { id: `${$}-helper`, className: G.helperText, children: n })
    ] });
  }
);
nt.displayName = "Input";
const st = "_container_fh5kq_1", at = "_label_fh5kq_13", rt = "_required_fh5kq_23", lt = "_selectWrapper_fh5kq_27", ot = "_select_fh5kq_27", ct = "_chevronIcon_fh5kq_77", it = "_hasError_fh5kq_88", dt = "_helperText_fh5kq_96", _t = "_errorMessage_fh5kq_102", ut = "_disabled_fh5kq_110", U = {
  container: st,
  "size-sm": "_size-sm_fh5kq_9",
  label: at,
  required: rt,
  selectWrapper: lt,
  select: ot,
  "size-md": "_size-md_fh5kq_65",
  "size-lg": "_size-lg_fh5kq_71",
  chevronIcon: ct,
  hasError: it,
  helperText: dt,
  errorMessage: _t,
  disabled: ut
}, ht = z(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    selectSize: r = "md",
    options: a,
    placeholder: i,
    isRequired: p = !1,
    disabled: o = !1,
    id: _,
    className: u,
    children: y,
    ...v
  }, x) => {
    const $ = de(), N = _ || $, m = !!s, f = [
      U.container,
      U[`size-${r}`],
      m ? U.hasError : "",
      o ? U.disabled : "",
      u || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("div", { className: f, children: [
      t && /* @__PURE__ */ c("label", { htmlFor: N, className: U.label, children: [
        t,
        p && /* @__PURE__ */ e("span", { className: U.required, children: "*" })
      ] }),
      /* @__PURE__ */ c("div", { className: U.selectWrapper, children: [
        /* @__PURE__ */ c(
          "select",
          {
            ref: x,
            id: N,
            disabled: o,
            "aria-invalid": m,
            "aria-describedby": m ? `${N}-error` : n ? `${N}-helper` : void 0,
            className: U.select,
            ...v,
            children: [
              i && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: i }),
              a ? a.map((I) => /* @__PURE__ */ e(
                "option",
                {
                  value: I.value,
                  disabled: I.disabled,
                  children: I.label
                },
                I.value
              )) : y
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: U.chevronIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(be, { size: 16 }) })
      ] }),
      m && /* @__PURE__ */ e(
        "span",
        {
          id: `${N}-error`,
          className: U.errorMessage,
          role: "alert",
          children: s
        }
      ),
      !m && n && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: U.helperText, children: n })
    ] });
  }
);
ht.displayName = "Select";
const pt = "_container_1d3rw_1", mt = "_label_1d3rw_14", ft = "_required_1d3rw_24", bt = "_trigger_1d3rw_28", vt = "_isOpen_1d3rw_53", gt = "_selectedContent_1d3rw_71", yt = "_placeholder_1d3rw_80", Nt = "_chevron_1d3rw_84", $t = "_chevronOpen_1d3rw_93", kt = "_menu_1d3rw_98", xt = "_dropdownIn_1d3rw_1", wt = "_menuItem_1d3rw_116", It = "_itemDisabled_1d3rw_128", Bt = "_itemSelected_1d3rw_132", Ct = "_itemLeft_1d3rw_147", qt = "_itemText_1d3rw_154", St = "_itemLabel_1d3rw_161", Lt = "_itemDescription_1d3rw_169", zt = "_checkSlot_1d3rw_174", Dt = "_hasError_1d3rw_183", Et = "_helperText_1d3rw_191", Rt = "_errorMessage_1d3rw_197", Tt = "_disabled_1d3rw_205", L = {
  container: pt,
  "size-sm": "_size-sm_1d3rw_10",
  label: mt,
  required: ft,
  trigger: bt,
  isOpen: vt,
  "size-lg": "_size-lg_1d3rw_65",
  selectedContent: gt,
  placeholder: yt,
  chevron: Nt,
  chevronOpen: $t,
  menu: kt,
  dropdownIn: xt,
  menuItem: wt,
  itemDisabled: It,
  itemSelected: Bt,
  itemLeft: Ct,
  itemText: qt,
  itemLabel: St,
  itemDescription: Lt,
  checkSlot: zt,
  hasError: Dt,
  helperText: Et,
  errorMessage: Rt,
  disabled: Tt
}, jt = "_container_1lebu_1", Ot = "_tint_1lebu_14", Wt = "_solid_1lebu_20", At = "_image_1lebu_26", Gt = "_fallback_1lebu_33", Mt = "_statusDot_1lebu_74", ie = {
  container: jt,
  tint: Ot,
  solid: Wt,
  image: At,
  fallback: Gt,
  "size-xs": "_size-xs_1lebu_43",
  "size-sm": "_size-sm_1lebu_49",
  "size-md": "_size-md_1lebu_55",
  "size-lg": "_size-lg_1lebu_61",
  "size-xl": "_size-xl_1lebu_67",
  statusDot: Mt,
  "status-online": "_status-online_1lebu_102",
  "status-busy": "_status-busy_1lebu_106",
  "status-away": "_status-away_1lebu_110",
  "status-offline": "_status-offline_1lebu_114"
};
function Ft(t, n) {
  if (n) return n;
  if (!t) return "";
  const s = t.trim().split(/\s+/);
  return s.length === 1 ? s[0].substring(0, 2).toUpperCase() : (s[0][0] + s[s.length - 1][0]).toUpperCase();
}
const he = ({
  src: t,
  alt: n = "",
  name: s,
  initials: r,
  size: a = "md",
  variant: i = "tint",
  status: p,
  className: o,
  ..._
}) => {
  const [u, y] = V(!1), v = Ft(s, r), x = [
    ie.container,
    ie[`size-${a}`],
    ie[i],
    o || ""
  ].filter(Boolean).join(" "), $ = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  return /* @__PURE__ */ c("div", { className: x, title: s || n, ..._, children: [
    t && !u ? /* @__PURE__ */ e(
      "img",
      {
        src: t,
        alt: n || s || "Avatar",
        className: ie.image,
        onError: () => y(!0)
      }
    ) : v ? /* @__PURE__ */ e("span", { className: ie.fallback, children: v }) : /* @__PURE__ */ e("span", { className: ie.fallback, children: /* @__PURE__ */ e(Te, { size: $[a] }) }),
    p && /* @__PURE__ */ e(
      "span",
      {
        className: `${ie.statusDot} ${ie[`status-${p}`]}`,
        "aria-label": `Status: ${p}`
      }
    )
  ] });
};
he.displayName = "Avatar";
const Vt = ({
  label: t,
  placeholder: n = "Select an option...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: p,
  onChange: o,
  size: _ = "md",
  disabled: u = !1,
  isRequired: y = !1,
  className: v,
  id: x
}) => {
  const $ = de(), N = x || $, m = se(null), [f, I] = V(!1), [W, H] = V(
    i || p
  );
  P(() => {
    i !== void 0 && H(i);
  }, [i]), P(() => {
    const b = (S) => {
      m.current && !m.current.contains(S.target) && I(!1);
    };
    return f && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [f]);
  const C = a.find((b) => b.value === W), D = !!r, E = (b) => {
    b.disabled || (H(b.value), o == null || o(b.value, b), I(!1));
  }, M = (b) => {
    if (!u) {
      if (b.key === "Enter" || b.key === " ")
        b.preventDefault(), I((S) => !S);
      else if (b.key === "Escape")
        I(!1);
      else if (b.key === "ArrowDown" && f) {
        b.preventDefault();
        const S = a.findIndex(
          (h) => h.value === W
        ), R = a[S + 1];
        R && !R.disabled && E(R);
      } else if (b.key === "ArrowUp" && f) {
        b.preventDefault();
        const S = a.findIndex(
          (h) => h.value === W
        ), R = a[S - 1];
        R && !R.disabled && E(R);
      }
    }
  }, T = [
    L.container,
    L[`size-${_}`],
    f ? L.isOpen : "",
    D ? L.hasError : "",
    u ? L.disabled : "",
    v || ""
  ].filter(Boolean).join(" "), K = _ === "sm" ? "xs" : _ === "lg" ? "md" : "sm";
  return /* @__PURE__ */ c("div", { ref: m, className: T, children: [
    t && /* @__PURE__ */ c("label", { id: `${N}-label`, className: L.label, children: [
      t,
      y && /* @__PURE__ */ e("span", { className: L.required, children: "*" })
    ] }),
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        id: N,
        "aria-haspopup": "listbox",
        "aria-expanded": f,
        "aria-labelledby": t ? `${N}-label ${N}` : void 0,
        disabled: u,
        onClick: () => I((b) => !b),
        onKeyDown: M,
        className: L.trigger,
        children: [
          /* @__PURE__ */ e("div", { className: L.selectedContent, children: C ? /* @__PURE__ */ c(ve, { children: [
            C.avatar && /* @__PURE__ */ e(
              he,
              {
                size: C.avatar.size || K,
                ...C.avatar
              }
            ),
            C.icon && /* @__PURE__ */ e("span", { children: C.icon }),
            /* @__PURE__ */ e("span", { children: C.label })
          ] }) : /* @__PURE__ */ e("span", { className: L.placeholder, children: n }) }),
          /* @__PURE__ */ e(
            "span",
            {
              className: `${L.chevron} ${f ? L.chevronOpen : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ e(be, { size: 16 })
            }
          )
        ]
      }
    ),
    f && /* @__PURE__ */ e(
      "ul",
      {
        role: "listbox",
        "aria-labelledby": `${N}-label`,
        className: L.menu,
        children: a.map((b) => {
          const S = b.value === W, R = [
            L.menuItem,
            S ? L.itemSelected : "",
            b.disabled ? L.itemDisabled : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ c(
            "li",
            {
              role: "option",
              "aria-selected": S,
              "aria-disabled": b.disabled,
              onClick: () => E(b),
              className: R,
              children: [
                /* @__PURE__ */ c("div", { className: L.itemLeft, children: [
                  b.avatar && /* @__PURE__ */ e(
                    he,
                    {
                      size: b.avatar.size || K,
                      ...b.avatar
                    }
                  ),
                  b.icon && /* @__PURE__ */ e("span", { children: b.icon }),
                  /* @__PURE__ */ c("div", { className: L.itemText, children: [
                    /* @__PURE__ */ e("span", { className: L.itemLabel, children: b.label }),
                    b.description && /* @__PURE__ */ e("span", { className: L.itemDescription, children: b.description })
                  ] })
                ] }),
                S && /* @__PURE__ */ e("span", { className: L.checkSlot, "aria-hidden": "true", children: /* @__PURE__ */ e(fe, { size: 14 }) })
              ]
            },
            b.value
          );
        })
      }
    ),
    D && /* @__PURE__ */ e(
      "span",
      {
        id: `${N}-error`,
        className: L.errorMessage,
        role: "alert",
        children: r
      }
    ),
    !D && s && /* @__PURE__ */ e("span", { id: `${N}-helper`, className: L.helperText, children: s })
  ] });
};
Vt.displayName = "Dropdown";
const Ht = "_container_1ms02_1", Kt = "_hasDescription_1ms02_10", Pt = "_box_1ms02_14", Ut = "_nativeInput_1ms02_32", Qt = "_checked_1ms02_45", Jt = "_indeterminate_1ms02_46", Xt = "_disabled_1ms02_51", Yt = "_textGroup_1ms02_55", Zt = "_label_1ms02_61", en = "_description_1ms02_68", ee = {
  container: Ht,
  hasDescription: Kt,
  box: Pt,
  nativeInput: Ut,
  checked: Qt,
  indeterminate: Jt,
  disabled: Xt,
  textGroup: Yt,
  label: Zt,
  description: en
}, tn = z(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: r,
    indeterminate: a = !1,
    disabled: i = !1,
    className: p,
    onChange: o,
    ..._
  }, u) => {
    const y = se(null), v = u || y;
    P(() => {
      v && "current" in v && v.current && (v.current.indeterminate = a);
    }, [a, v]);
    const x = s ?? r ?? !1, $ = [
      ee.container,
      n ? ee.hasDescription : "",
      i ? ee.disabled : "",
      p || ""
    ].filter(Boolean).join(" "), N = [
      ee.box,
      a ? ee.indeterminate : x ? ee.checked : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("label", { className: $, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: v,
          checked: s,
          defaultChecked: r,
          disabled: i,
          className: ee.nativeInput,
          onChange: o,
          ..._
        }
      ),
      /* @__PURE__ */ c("span", { className: N, "aria-hidden": "true", children: [
        a && /* @__PURE__ */ e(De, { size: 12 }),
        !a && x && /* @__PURE__ */ e(fe, { size: 12 })
      ] }),
      (t || n) && /* @__PURE__ */ c("span", { className: ee.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: ee.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: ee.description, children: n })
      ] })
    ] });
  }
);
tn.displayName = "Checkbox";
const nn = "_container_m4qf3_1", sn = "_label_m4qf3_9", an = "_required_m4qf3_19", rn = "_textareaWrapper_m4qf3_23", ln = "_textarea_m4qf3_23", on = "_hasError_m4qf3_58", cn = "_footer_m4qf3_66", dn = "_helperText_m4qf3_74", _n = "_errorMessage_m4qf3_78", un = "_charCount_m4qf3_83", hn = "_disabled_m4qf3_89", Q = {
  container: nn,
  label: sn,
  required: an,
  textareaWrapper: rn,
  textarea: ln,
  hasError: on,
  footer: cn,
  helperText: dn,
  errorMessage: _n,
  charCount: un,
  disabled: hn
}, pn = z(
  ({
    label: t,
    helperText: n,
    errorMessage: s,
    isRequired: r = !1,
    showCharCount: a = !1,
    maxLength: i,
    disabled: p = !1,
    value: o,
    defaultValue: _,
    id: u,
    className: y,
    onChange: v,
    ...x
  }, $) => {
    const N = de(), m = u || N, f = !!s, [I, W] = ge.useState(() => typeof o == "string" ? o.length : typeof _ == "string" ? _.length : 0), H = (D) => {
      W(D.target.value.length), v == null || v(D);
    }, C = [
      Q.container,
      f ? Q.hasError : "",
      p ? Q.disabled : "",
      y || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("div", { className: C, children: [
      t && /* @__PURE__ */ c("label", { htmlFor: m, className: Q.label, children: [
        t,
        r && /* @__PURE__ */ e("span", { className: Q.required, children: "*" })
      ] }),
      /* @__PURE__ */ e("div", { className: Q.textareaWrapper, children: /* @__PURE__ */ e(
        "textarea",
        {
          ref: $,
          id: m,
          disabled: p,
          value: o,
          defaultValue: _,
          maxLength: i,
          onChange: H,
          "aria-invalid": f,
          "aria-describedby": f ? `${m}-error` : n ? `${m}-helper` : void 0,
          className: Q.textarea,
          ...x
        }
      ) }),
      /* @__PURE__ */ c("div", { className: Q.footer, children: [
        f && /* @__PURE__ */ e(
          "span",
          {
            id: `${m}-error`,
            className: Q.errorMessage,
            role: "alert",
            children: s
          }
        ),
        !f && n && /* @__PURE__ */ e("span", { id: `${m}-helper`, className: Q.helperText, children: n }),
        a && i && /* @__PURE__ */ c("span", { className: Q.charCount, children: [
          I,
          " / ",
          i
        ] })
      ] })
    ] });
  }
);
pn.displayName = "Textarea";
const mn = "_card_7pqx0_1", fn = "_interactive_7pqx0_28", bn = "_header_7pqx0_56", vn = "_headerBordered_7pqx0_64", gn = "_title_7pqx0_69", yn = "_description_7pqx0_78", Nn = "_content_7pqx0_85", $n = "_footer_7pqx0_89", kn = "_footerBordered_7pqx0_98", X = {
  card: mn,
  "elevation-1": "_elevation-1_7pqx0_13",
  "elevation-2": "_elevation-2_7pqx0_18",
  "elevation-3": "_elevation-3_7pqx0_23",
  interactive: fn,
  "padding-none": "_padding-none_7pqx0_39",
  "padding-sm": "_padding-sm_7pqx0_43",
  "padding-md": "_padding-md_7pqx0_47",
  "padding-lg": "_padding-lg_7pqx0_51",
  header: bn,
  headerBordered: vn,
  title: gn,
  description: yn,
  content: Nn,
  footer: $n,
  footerBordered: kn
}, xn = z(
  ({
    elevation: t = 1,
    padding: n = "none",
    isInteractive: s = !1,
    className: r,
    children: a,
    ...i
  }, p) => {
    const o = [
      X.card,
      X[`elevation-${t}`],
      X[`padding-${n}`],
      s ? X.interactive : "",
      r || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e("div", { ref: p, className: o, ...i, children: a });
  }
);
xn.displayName = "Card";
const wn = z(
  ({ bordered: t = !1, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${X.header} ${t ? X.headerBordered : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
wn.displayName = "CardHeader";
const In = z(
  ({ as: t = "h3", className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    t,
    {
      ref: a,
      className: `${X.title} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
In.displayName = "CardTitle";
const Bn = z(({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
  "p",
  {
    ref: r,
    className: `${X.description} ${t || ""}`,
    ...s,
    children: n
  }
));
Bn.displayName = "CardDescription";
const Cn = z(
  ({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: `${X.content} ${t || ""}`,
      ...s,
      children: n
    }
  )
);
Cn.displayName = "CardContent";
const qn = z(
  ({ bordered: t = !1, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      className: `${X.footer} ${t ? X.footerBordered : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
qn.displayName = "CardFooter";
const Sn = "_container_1xw60_1", Ln = "_table_1xw60_10", zn = "_header_1xw60_19", Dn = "_headCell_1xw60_24", En = "_row_1xw60_35", Rn = "_hoverable_1xw60_44", Tn = "_cell_1xw60_48", jn = "_tabularNums_1xw60_54", ne = {
  container: Sn,
  table: Ln,
  header: zn,
  headCell: Dn,
  row: En,
  hoverable: Rn,
  cell: Tn,
  tabularNums: jn,
  "align-left": "_align-left_1xw60_59",
  "align-center": "_align-center_1xw60_63",
  "align-right": "_align-right_1xw60_67"
}, On = z(
  ({ className: t, containerClassName: n, children: s, ...r }, a) => /* @__PURE__ */ e("div", { className: `${ne.container} ${n || ""}`, children: /* @__PURE__ */ e(
    "table",
    {
      ref: a,
      className: `${ne.table} ${t || ""}`,
      ...r,
      children: s
    }
  ) })
);
On.displayName = "Table";
const Wn = z(({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("thead", { ref: r, className: `${ne.header} ${t || ""}`, ...s, children: n }));
Wn.displayName = "TableHeader";
const An = z(({ className: t, children: n, ...s }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: t, ...s, children: n }));
An.displayName = "TableBody";
const Gn = z(
  ({ isHoverable: t = !0, className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "tr",
    {
      ref: a,
      className: `${ne.row} ${t ? ne.hoverable : ""} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
Gn.displayName = "TableRow";
const Mn = z(
  ({ align: t = "left", className: n, children: s, ...r }, a) => /* @__PURE__ */ e(
    "th",
    {
      ref: a,
      className: `${ne.headCell} ${ne[`align-${t}`]} ${n || ""}`,
      ...r,
      children: s
    }
  )
);
Mn.displayName = "TableHead";
const Fn = z(
  ({ align: t = "left", isNumeric: n = !1, className: s, children: r, ...a }, i) => /* @__PURE__ */ e(
    "td",
    {
      ref: i,
      className: `${ne.cell} ${ne[`align-${t}`]} ${n ? ne.tabularNums : ""} ${s || ""}`,
      ...a,
      children: r
    }
  )
);
Fn.displayName = "TableCell";
const Vn = "_overlay_cpmq9_1", Hn = "_fadeIn_cpmq9_1", Kn = "_modal_cpmq9_15", Pn = "_scaleIn_cpmq9_1", Un = "_header_cpmq9_44", Qn = "_title_cpmq9_52", Jn = "_closeButton_cpmq9_61", Xn = "_body_cpmq9_84", Yn = "_footer_cpmq9_93", ce = {
  overlay: Vn,
  fadeIn: Hn,
  modal: Kn,
  scaleIn: Pn,
  "size-sm": "_size-sm_cpmq9_32",
  "size-md": "_size-md_cpmq9_36",
  "size-lg": "_size-lg_cpmq9_40",
  header: Un,
  title: Qn,
  closeButton: Jn,
  body: Xn,
  footer: Yn
}, Zn = ({
  isOpen: t,
  onClose: n,
  title: s,
  size: r = "md",
  closeOnOverlayClick: a = !0,
  closeOnEsc: i = !0,
  showCloseButton: p = !0,
  footer: o,
  children: _,
  className: u
}) => {
  const y = de(), v = se(null);
  if (P(() => {
    if (!t) return;
    const m = (f) => {
      f.key === "Escape" && i && n();
    };
    return document.addEventListener("keydown", m), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", m), document.body.style.overflow = "";
    };
  }, [t, i, n]), !t) return null;
  const x = (m) => {
    m.target === m.currentTarget && a && n();
  }, $ = [ce.modal, ce[`size-${r}`], u || ""].filter(Boolean).join(" "), N = /* @__PURE__ */ e("div", { className: ce.overlay, onClick: x, children: /* @__PURE__ */ c(
    "div",
    {
      ref: v,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? y : void 0,
      tabIndex: -1,
      className: $,
      children: [
        (s || p) && /* @__PURE__ */ c("div", { className: ce.header, children: [
          s && /* @__PURE__ */ e("h2", { id: y, className: ce.title, children: s }),
          p && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "Close dialog",
              onClick: n,
              className: ce.closeButton,
              children: /* @__PURE__ */ e(pe, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: ce.body, children: _ }),
        o && /* @__PURE__ */ e("div", { className: ce.footer, children: o })
      ]
    }
  ) });
  return typeof document < "u" ? ye(N, document.body) : null;
};
Zn.displayName = "Modal";
const es = ({
  className: t,
  children: n,
  ...s
}) => /* @__PURE__ */ e("div", { className: `${ce.footer} ${t || ""}`, ...s, children: n });
es.displayName = "ModalFooter";
const ts = "_container_fct33_1", ns = "_navWrapper_fct33_7", ss = "_scrollContainer_fct33_15", as = "_tabList_fct33_32", rs = "_tab_fct33_32", ls = "_tabActive_fct33_115", os = "_badge_fct33_143", cs = "_fullWidth_fct33_172", is = "_scrollButton_fct33_181", ds = "_scrollButtonLeft_fct33_211", _s = "_scrollButtonRight_fct33_215", us = "_hasScrollLeft_fct33_220", hs = "_hasScrollRight_fct33_236", ps = "_panel_fct33_253", A = {
  container: ts,
  navWrapper: ns,
  scrollContainer: ss,
  tabList: as,
  "variant-underline": "_variant-underline_fct33_44",
  "variant-segmented": "_variant-segmented_fct33_55",
  tab: rs,
  "size-sm": "_size-sm_fct33_87",
  "size-md": "_size-md_fct33_93",
  "size-lg": "_size-lg_fct33_99",
  tabActive: ls,
  badge: os,
  fullWidth: cs,
  scrollButton: is,
  scrollButtonLeft: ds,
  scrollButtonRight: _s,
  hasScrollLeft: us,
  hasScrollRight: hs,
  panel: ps
}, ms = z(
  ({
    tabs: t,
    activeTab: n,
    defaultActiveTab: s,
    onChange: r,
    variant: a = "pill",
    size: i = "md",
    fullWidth: p = !1,
    scrollable: o = !1,
    showScrollButtons: _ = !0,
    className: u,
    children: y,
    ...v
  }, x) => {
    var R;
    const [$, N] = V(
      n || s || ((R = t[0]) == null ? void 0 : R.id) || ""
    ), m = n !== void 0 ? n : $, f = se(null), I = se(/* @__PURE__ */ new Map()), [W, H] = V(!1), [C, D] = V(!1), E = ke(() => {
      const h = f.current;
      if (!h || !o) {
        H(!1), D(!1);
        return;
      }
      const { scrollLeft: q, scrollWidth: O, clientWidth: j } = h;
      H(q > 2), D(q + j < O - 2);
    }, [o]);
    P(() => {
      if (!o) return;
      const h = f.current;
      if (h)
        return E(), h.addEventListener("scroll", E, {
          passive: !0
        }), window.addEventListener("resize", E), () => {
          h.removeEventListener("scroll", E), window.removeEventListener("resize", E);
        };
    }, [o, E, t]), P(() => {
      if (!o) return;
      const h = I.current.get(m), q = f.current;
      if (h && q) {
        const O = h.getBoundingClientRect(), j = q.getBoundingClientRect();
        O.left < j.left ? q.scrollBy({
          left: O.left - j.left - 16,
          behavior: "smooth"
        }) : O.right > j.right && q.scrollBy({
          left: O.right - j.right + 16,
          behavior: "smooth"
        });
      }
    }, [m, o]);
    const M = (h, q) => {
      q || (n === void 0 && N(h), r == null || r(h));
    }, T = (h) => {
      const q = t.filter((d) => !d.disabled);
      if (q.length === 0) return;
      const O = q.findIndex((d) => d.id === m);
      let j = -1;
      if (h.key === "ArrowRight" ? (h.preventDefault(), j = O < q.length - 1 ? O + 1 : 0) : h.key === "ArrowLeft" ? (h.preventDefault(), j = O > 0 ? O - 1 : q.length - 1) : h.key === "Home" ? (h.preventDefault(), j = 0) : h.key === "End" && (h.preventDefault(), j = q.length - 1), j >= 0) {
        const d = q[j];
        if (d) {
          M(d.id);
          const g = I.current.get(d.id);
          g == null || g.focus();
        }
      }
    }, K = (h) => {
      const q = f.current;
      q && q.scrollBy({ left: h, behavior: "smooth" });
    }, b = [
      A.container,
      W && A.hasScrollLeft,
      C && A.hasScrollRight,
      u || ""
    ].filter(Boolean).join(" "), S = [
      A.tabList,
      A[`variant-${a}`],
      p ? A.fullWidth : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("div", { ref: x, className: b, ...v, children: [
      /* @__PURE__ */ c("div", { className: A.navWrapper, children: [
        o && _ && W && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${A.scrollButton} ${A.scrollButtonLeft}`,
            "aria-label": "Scroll tabs left",
            onClick: () => K(-200),
            children: /* @__PURE__ */ e(Ee, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: f,
            className: o ? A.scrollContainer : void 0,
            children: /* @__PURE__ */ e(
              "div",
              {
                role: "tablist",
                className: S,
                onKeyDown: T,
                children: t.map((h) => {
                  const q = h.id === m, O = [
                    A.tab,
                    A[`size-${i}`],
                    q ? A.tabActive : ""
                  ].filter(Boolean).join(" ");
                  return /* @__PURE__ */ c(
                    "button",
                    {
                      ref: (j) => {
                        j ? I.current.set(h.id, j) : I.current.delete(h.id);
                      },
                      role: "tab",
                      type: "button",
                      tabIndex: q ? 0 : -1,
                      "aria-selected": q,
                      "aria-controls": `panel-${h.id}`,
                      id: `tab-${h.id}`,
                      disabled: h.disabled,
                      onClick: () => M(h.id, h.disabled),
                      className: O,
                      children: [
                        h.icon && /* @__PURE__ */ e("span", { children: h.icon }),
                        /* @__PURE__ */ e("span", { children: h.label }),
                        h.badge !== void 0 && /* @__PURE__ */ e("span", { className: A.badge, children: h.badge })
                      ]
                    },
                    h.id
                  );
                })
              }
            )
          }
        ),
        o && _ && C && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `${A.scrollButton} ${A.scrollButtonRight}`,
            "aria-label": "Scroll tabs right",
            onClick: () => K(200),
            children: /* @__PURE__ */ e(Re, { size: 16 })
          }
        )
      ] }),
      y
    ] });
  }
);
ms.displayName = "Tabs";
const fs = z(
  ({ tabId: t, activeTabId: n, className: s, children: r, ...a }, i) => t !== n ? null : /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      role: "tabpanel",
      id: `panel-${t}`,
      "aria-labelledby": `tab-${t}`,
      tabIndex: 0,
      className: `${A.panel} ${s || ""}`,
      ...a,
      children: r
    }
  )
);
fs.displayName = "TabPanel";
const bs = "_container_1xroe_1", vs = "_track_1xroe_10", gs = "_thumb_1xroe_24", ys = "_checked_1xroe_34", Ns = "_nativeInput_1xroe_43", $s = "_label_1xroe_55", ks = "_description_1xroe_61", xs = "_textGroup_1xroe_66", ws = "_disabled_1xroe_72", le = {
  container: bs,
  track: vs,
  thumb: gs,
  checked: ys,
  nativeInput: Ns,
  label: $s,
  description: ks,
  textGroup: xs,
  disabled: ws
}, Is = z(
  ({
    label: t,
    description: n,
    checked: s,
    defaultChecked: r,
    disabled: a = !1,
    className: i,
    onChange: p,
    ...o
  }, _) => {
    const u = s ?? r ?? !1, y = [
      le.container,
      u ? le.checked : "",
      a ? le.disabled : "",
      i || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("label", { className: y, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          role: "switch",
          ref: _,
          checked: s,
          defaultChecked: r,
          disabled: a,
          "aria-checked": u,
          className: le.nativeInput,
          onChange: p,
          ...o
        }
      ),
      /* @__PURE__ */ e("span", { className: le.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: le.thumb }) }),
      (t || n) && /* @__PURE__ */ c("span", { className: le.textGroup, children: [
        t && /* @__PURE__ */ e("span", { className: le.label, children: t }),
        n && /* @__PURE__ */ e("span", { className: le.description, children: n })
      ] })
    ] });
  }
);
Is.displayName = "Switch";
const Bs = "_group_1e0nk_1", Cs = "_groupLabel_1e0nk_8", qs = "_item_1e0nk_14", Ss = "_circle_1e0nk_22", Ls = "_dot_1e0nk_35", zs = "_checked_1e0nk_45", Ds = "_nativeInput_1e0nk_54", Es = "_label_1e0nk_67", Rs = "_description_1e0nk_73", Ts = "_textGroup_1e0nk_78", js = "_disabled_1e0nk_84", J = {
  group: Bs,
  groupLabel: Cs,
  item: qs,
  circle: Ss,
  dot: Ls,
  checked: zs,
  nativeInput: Ds,
  label: Es,
  description: Rs,
  textGroup: Ts,
  disabled: js
}, Ne = we(null), Os = ({
  name: t,
  value: n,
  defaultValue: s,
  onChange: r,
  label: a,
  disabled: i = !1,
  className: p,
  children: o
}) => {
  const [_, u] = ge.useState(
    n || s
  ), y = n !== void 0 ? n : _, v = (x) => {
    u(x.target.value), r == null || r(x.target.value);
  };
  return /* @__PURE__ */ e(
    Ne.Provider,
    {
      value: {
        name: t,
        value: y,
        onChange: v,
        disabled: i
      },
      children: /* @__PURE__ */ c(
        "div",
        {
          role: "radiogroup",
          "aria-label": a,
          className: `${J.group} ${p || ""}`,
          children: [
            a && /* @__PURE__ */ e("span", { className: J.groupLabel, children: a }),
            o
          ]
        }
      )
    }
  );
};
Os.displayName = "RadioGroup";
const Ws = z(
  ({
    value: t,
    label: n,
    description: s,
    disabled: r,
    className: a,
    checked: i,
    onChange: p,
    ...o
  }, _) => {
    const u = xe(Ne), y = u ? u.value === t : i, v = r || (u == null ? void 0 : u.disabled) || !1, x = (u == null ? void 0 : u.name) || o.name, $ = [
      J.item,
      y ? J.checked : "",
      v ? J.disabled : "",
      a || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ c("label", { className: $, children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: _,
          type: "radio",
          name: x,
          value: t,
          checked: y,
          disabled: v,
          onChange: (m) => {
            var f;
            p == null || p(m), (f = u == null ? void 0 : u.onChange) == null || f.call(u, m);
          },
          className: J.nativeInput,
          ...o
        }
      ),
      /* @__PURE__ */ e("span", { className: J.circle, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: J.dot }) }),
      (n || s) && /* @__PURE__ */ c("span", { className: J.textGroup, children: [
        n && /* @__PURE__ */ e("span", { className: J.label, children: n }),
        s && /* @__PURE__ */ e("span", { className: J.description, children: s })
      ] })
    ] });
  }
);
Ws.displayName = "Radio";
const As = "_wrapper_yiqhg_1", Gs = "_searchIcon_yiqhg_8", Ms = "_input_yiqhg_18", Fs = "_rightSlots_yiqhg_42", Vs = "_clearButton_yiqhg_50", Hs = "_shortcut_yiqhg_66", _e = {
  wrapper: As,
  searchIcon: Gs,
  input: Ms,
  rightSlots: Fs,
  clearButton: Vs,
  shortcut: Hs
}, Ks = ({
  ...t
}) => /* @__PURE__ */ c(
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
), Ps = z(
  ({
    value: t,
    defaultValue: n,
    onChange: s,
    onClear: r,
    shortcutHint: a = "⌘K",
    placeholder: i = "Search records, students, classes...",
    className: p,
    ...o
  }, _) => {
    const [u, y] = V(
      t || n || ""
    ), v = t !== void 0, x = v ? t : u, $ = (m) => {
      v || y(m.target.value), s == null || s(m);
    }, N = () => {
      v || y(""), r == null || r();
    };
    return /* @__PURE__ */ c("div", { className: `${_e.wrapper} ${p || ""}`, children: [
      /* @__PURE__ */ e("span", { className: _e.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(Ks, {}) }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: _,
          type: "search",
          value: x,
          placeholder: i,
          onChange: $,
          className: _e.input,
          ...o
        }
      ),
      /* @__PURE__ */ c("div", { className: _e.rightSlots, children: [
        x && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Clear search",
            onClick: N,
            className: _e.clearButton,
            children: /* @__PURE__ */ e(pe, { size: 14 })
          }
        ),
        a && /* @__PURE__ */ e("kbd", { className: _e.shortcut, children: a })
      ] })
    ] });
  }
);
Ps.displayName = "SearchInput";
const Us = "_card_kgob9_1", Qs = "_topRow_kgob9_18", Js = "_title_kgob9_25", Xs = "_iconSlot_kgob9_33", Ys = "_metricRow_kgob9_49", Zs = "_value_kgob9_55", ea = "_trendBadge_kgob9_65", ta = "_description_kgob9_90", te = {
  card: Us,
  "variant-highlight": "_variant-highlight_kgob9_13",
  topRow: Qs,
  title: Js,
  iconSlot: Xs,
  metricRow: Ys,
  value: Zs,
  trendBadge: ea,
  "trend-up": "_trend-up_kgob9_75",
  "trend-down": "_trend-down_kgob9_80",
  "trend-neutral": "_trend-neutral_kgob9_85",
  description: ta
}, na = ({
  title: t,
  value: n,
  description: s,
  trend: r,
  icon: a,
  highlighted: i = !1,
  className: p,
  ...o
}) => {
  const _ = [
    te.card,
    i ? te["variant-highlight"] : "",
    p || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: _, ...o, children: [
    /* @__PURE__ */ c("div", { className: te.topRow, children: [
      /* @__PURE__ */ e("h4", { className: te.title, children: t }),
      a && /* @__PURE__ */ e("span", { className: te.iconSlot, children: a })
    ] }),
    /* @__PURE__ */ c("div", { className: te.metricRow, children: [
      /* @__PURE__ */ e("span", { className: te.value, children: n }),
      r && /* @__PURE__ */ c(
        "span",
        {
          className: `${te.trendBadge} ${te[`trend-${r.direction}`]}`,
          children: [
            r.direction === "up" && "↑ ",
            r.direction === "down" && "↓ ",
            r.value
          ]
        }
      )
    ] }),
    s && /* @__PURE__ */ e("p", { className: te.description, children: s })
  ] });
};
na.displayName = "StatCard";
const sa = "_overlay_lam6o_1", aa = "_fadeIn_lam6o_1", ra = "_drawer_lam6o_11", la = "_slideInRight_lam6o_1", oa = "_slideInLeft_lam6o_1", ca = "_header_lam6o_51", ia = "_title_lam6o_59", da = "_closeButton_lam6o_67", _a = "_body_lam6o_90", ua = "_footer_lam6o_99", oe = {
  overlay: sa,
  fadeIn: aa,
  drawer: ra,
  "placement-right": "_placement-right_lam6o_26",
  slideInRight: la,
  "placement-left": "_placement-left_lam6o_31",
  slideInLeft: oa,
  "size-sm": "_size-sm_lam6o_39",
  "size-md": "_size-md_lam6o_43",
  "size-lg": "_size-lg_lam6o_47",
  header: ca,
  title: ia,
  closeButton: da,
  body: _a,
  footer: ua
}, ha = ({
  isOpen: t,
  onClose: n,
  title: s,
  placement: r = "right",
  size: a = "md",
  closeOnOverlayClick: i = !0,
  closeOnEsc: p = !0,
  showCloseButton: o = !0,
  footer: _,
  children: u,
  className: y
}) => {
  const v = de(), x = se(null);
  if (P(() => {
    if (!t) return;
    const f = (I) => {
      I.key === "Escape" && p && n();
    };
    return document.addEventListener("keydown", f), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    };
  }, [t, p, n]), !t) return null;
  const $ = (f) => {
    f.target === f.currentTarget && i && n();
  }, N = [
    oe.drawer,
    oe[`placement-${r}`],
    oe[`size-${a}`],
    y || ""
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ c(ve, { children: [
    /* @__PURE__ */ e("div", { className: oe.overlay, onClick: $ }),
    /* @__PURE__ */ c(
      "div",
      {
        ref: x,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": s ? v : void 0,
        tabIndex: -1,
        className: N,
        children: [
          (s || o) && /* @__PURE__ */ c("div", { className: oe.header, children: [
            s && /* @__PURE__ */ e("h3", { id: v, className: oe.title, children: s }),
            o && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "Close drawer",
                onClick: n,
                className: oe.closeButton,
                children: /* @__PURE__ */ e(pe, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: oe.body, children: u }),
          _ && /* @__PURE__ */ e("div", { className: oe.footer, children: _ })
        ]
      }
    )
  ] });
  return typeof document < "u" ? ye(m, document.body) : null;
};
ha.displayName = "Drawer";
const pa = "_chip_ldr6y_1", ma = "_pill_ldr6y_14", fa = "_rounded_ldr6y_18", ba = "_sm_ldr6y_22", va = "_md_ldr6y_36", ga = "_lg_ldr6y_45", ya = "_neutral_ldr6y_55", Na = "_primary_ldr6y_61", $a = "_tonal_ldr6y_68", ka = "_outline_ldr6y_75", xa = "_success_ldr6y_81", wa = "_warning_ldr6y_87", Ia = "_danger_ldr6y_93", Ba = "_clickable_ldr6y_100", Ca = "_disabled_ldr6y_104", qa = "_selected_ldr6y_104", Sa = "_selectedIcon_ldr6y_131", La = "_avatarSlot_ldr6y_139", za = "_hasAvatar_ldr6y_183", Da = "_iconSlot_ldr6y_212", Ea = "_label_ldr6y_221", Ra = "_countBadge_ldr6y_230", Ta = "_removeButton_ldr6y_251", F = {
  chip: pa,
  pill: ma,
  rounded: fa,
  sm: ba,
  md: va,
  lg: ga,
  neutral: ya,
  primary: Na,
  tonal: $a,
  outline: ka,
  success: xa,
  warning: wa,
  danger: Ia,
  clickable: Ba,
  disabled: Ca,
  selected: qa,
  selectedIcon: Sa,
  avatarSlot: La,
  hasAvatar: za,
  iconSlot: Da,
  label: Ea,
  countBadge: Ra,
  removeButton: Ta
}, ja = ({
  label: t,
  avatar: n,
  icon: s,
  variant: r,
  size: a = "md",
  shape: i = "pill",
  selected: p = !1,
  count: o,
  onRemove: _,
  disabled: u = !1,
  className: y,
  onClick: v,
  ...x
}) => {
  const $ = !!v && !u, N = r ?? (n ? "tonal" : "neutral"), m = [
    F.chip,
    F[N],
    F[a],
    F[i],
    n ? F.hasAvatar : "",
    p ? F.selected : "",
    $ ? F.clickable : "",
    _ ? F.removable : "",
    u ? F.disabled : "",
    y || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      className: m,
      role: $ ? "button" : "status",
      tabIndex: $ ? 0 : void 0,
      onClick: $ ? v : void 0,
      ...x,
      children: [
        p && /* @__PURE__ */ e("span", { className: F.selectedIcon, children: /* @__PURE__ */ e(fe, { size: a === "sm" ? 10 : a === "lg" ? 14 : 12 }) }),
        !p && n && /* @__PURE__ */ e("span", { className: F.avatarSlot, children: n }),
        !p && !n && s && /* @__PURE__ */ e("span", { className: F.iconSlot, children: s }),
        /* @__PURE__ */ e("span", { className: F.label, children: t }),
        o !== void 0 && /* @__PURE__ */ e("span", { className: F.countBadge, children: o }),
        _ && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            className: F.removeButton,
            onClick: (f) => {
              f.stopPropagation(), !u && _ && _();
            },
            disabled: u,
            children: /* @__PURE__ */ e(pe, { size: a === "sm" ? 10 : a === "lg" ? 14 : 12 })
          }
        )
      ]
    }
  );
}, Oa = "_container_d3es0_1", Wa = "_label_d3es0_14", Aa = "_required_d3es0_24", Ga = "_trigger_d3es0_29", Ma = "_disabled_d3es0_50", Fa = "_isOpen_d3es0_54", Va = "_chipContainer_d3es0_72", Ha = "_searchInput_d3es0_81", Ka = "_placeholder_d3es0_93", Pa = "_moreCount_d3es0_97", Ua = "_trailing_d3es0_112", Qa = "_clearAllButton_d3es0_119", Ja = "_chevron_d3es0_137", Xa = "_menu_d3es0_149", Ya = "_empty_d3es0_169", Za = "_option_d3es0_177", er = "_focused_d3es0_193", tr = "_selected_d3es0_197", nr = "_checkboxSlot_d3es0_206", sr = "_checkboxBox_d3es0_213", ar = "_checkboxChecked_d3es0_226", rr = "_avatarSlot_d3es0_231", lr = "_iconSlot_d3es0_244", or = "_labelCol_d3es0_251", cr = "_labelRow_d3es0_258", ir = "_optionLabel_d3es0_265", dr = "_badge_d3es0_272", _r = "_optionDescription_d3es0_300", ur = "_optionDisabled_d3es0_307", hr = "_hasError_d3es0_314", pr = "_errorText_d3es0_323", mr = "_helperText_d3es0_328", k = {
  container: Oa,
  "size-sm": "_size-sm_d3es0_10",
  label: Wa,
  required: Aa,
  trigger: Ga,
  disabled: Ma,
  isOpen: Fa,
  "size-lg": "_size-lg_d3es0_66",
  chipContainer: Va,
  searchInput: Ha,
  placeholder: Ka,
  moreCount: Pa,
  trailing: Ua,
  clearAllButton: Qa,
  chevron: Ja,
  menu: Xa,
  empty: Ya,
  option: Za,
  focused: er,
  selected: tr,
  checkboxSlot: nr,
  checkboxBox: sr,
  checkboxChecked: ar,
  avatarSlot: rr,
  iconSlot: lr,
  labelCol: or,
  labelRow: cr,
  optionLabel: ir,
  badge: dr,
  "badge-primary": "_badge-primary_d3es0_280",
  "badge-success": "_badge-success_d3es0_285",
  "badge-warning": "_badge-warning_d3es0_290",
  "badge-neutral": "_badge-neutral_d3es0_295",
  optionDescription: _r,
  optionDisabled: ur,
  hasError: hr,
  errorText: pr,
  helperText: mr
}, Jr = ({
  label: t,
  placeholder: n = "Select items...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: p,
  onChange: o,
  size: _ = "md",
  chipShape: u,
  disabled: y = !1,
  isRequired: v = !1,
  isSearchable: x = !0,
  className: $,
  id: N,
  maxDisplayedChips: m
}) => {
  const f = de(), I = N || f, W = se(null), H = se(null), [C, D] = V(!1), [E, M] = V(""), [T, K] = V(
    i || p || []
  ), [b, S] = V(-1);
  P(() => {
    i !== void 0 && K(i);
  }, [i]);
  const R = ue(() => a.filter((l) => T.includes(l.value)), [a, T]), h = ue(() => {
    if (!E.trim()) return a;
    const l = E.toLowerCase();
    return a.filter(
      (B) => B.label.toLowerCase().includes(l) || B.description && B.description.toLowerCase().includes(l) || B.badge && B.badge.toLowerCase().includes(l)
    );
  }, [a, E]);
  P(() => {
    const l = (B) => {
      W.current && !W.current.contains(B.target) && (D(!1), M(""), S(-1));
    };
    return C && document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, [C]);
  const q = (l) => {
    if (l.disabled || y) return;
    let B;
    T.includes(l.value) ? B = T.filter((ae) => ae !== l.value) : B = [...T, l.value], i === void 0 && K(B);
    const Z = a.filter((ae) => B.includes(ae.value));
    o == null || o(B, Z);
  }, O = (l) => {
    if (y) return;
    const B = T.filter((ae) => ae !== l);
    i === void 0 && K(B);
    const Z = a.filter((ae) => B.includes(ae.value));
    o == null || o(B, Z);
  }, j = (l) => {
    if (!y) {
      if (l.key === "Backspace" && E === "" && T.length > 0) {
        O(T[T.length - 1]);
        return;
      }
      if (!C) {
        (l.key === "Enter" || l.key === " " || l.key === "ArrowDown") && (l.preventDefault(), D(!0));
        return;
      }
      l.key === "Escape" ? (l.preventDefault(), D(!1), M("")) : l.key === "ArrowDown" ? (l.preventDefault(), S(
        (B) => B < h.length - 1 ? B + 1 : 0
      )) : l.key === "ArrowUp" ? (l.preventDefault(), S(
        (B) => B > 0 ? B - 1 : h.length - 1
      )) : l.key === "Enter" && b >= 0 && b < h.length && (l.preventDefault(), q(h[b]));
    }
  }, d = m ? R.slice(0, m) : R, g = m ? Math.max(0, R.length - m) : 0, Y = !!r;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: W,
      className: [
        k.container,
        k[`size-${_}`],
        C ? k.isOpen : "",
        y ? k.disabled : "",
        Y ? k.hasError : "",
        $ || ""
      ].filter(Boolean).join(" "),
      onKeyDown: j,
      children: [
        t && /* @__PURE__ */ c("label", { id: `${I}-label`, className: k.label, children: [
          t,
          v && /* @__PURE__ */ e("span", { className: k.required, children: "*" })
        ] }),
        /* @__PURE__ */ c(
          "div",
          {
            className: k.trigger,
            onClick: () => {
              y || (D(!C), !C && x && setTimeout(() => {
                var l;
                return (l = H.current) == null ? void 0 : l.focus();
              }, 10));
            },
            role: "combobox",
            "aria-expanded": C,
            "aria-haspopup": "listbox",
            "aria-labelledby": t ? `${I}-label` : void 0,
            children: [
              /* @__PURE__ */ c("div", { className: k.chipContainer, children: [
                d.map((l) => /* @__PURE__ */ e(
                  ja,
                  {
                    label: l.label,
                    variant: "tonal",
                    shape: u || (l.avatar ? "pill" : "rounded"),
                    size: _ === "sm" ? "sm" : _ === "lg" ? "lg" : "md",
                    avatar: l.avatar ? /* @__PURE__ */ e(
                      he,
                      {
                        size: _ === "sm" ? "xs" : _ === "lg" ? "md" : "xs",
                        name: l.label,
                        ...l.avatar
                      }
                    ) : void 0,
                    icon: l.icon,
                    onRemove: () => O(l.value),
                    disabled: y
                  },
                  l.value
                )),
                g > 0 && /* @__PURE__ */ c("span", { className: k.moreCount, children: [
                  "+",
                  g,
                  " more"
                ] }),
                x ? /* @__PURE__ */ e(
                  "input",
                  {
                    ref: H,
                    type: "text",
                    className: k.searchInput,
                    placeholder: R.length === 0 ? n : "",
                    value: E,
                    onChange: (l) => {
                      M(l.target.value), C || D(!0);
                    },
                    onClick: (l) => l.stopPropagation(),
                    disabled: y
                  }
                ) : R.length === 0 && /* @__PURE__ */ e("span", { className: k.placeholder, children: n })
              ] }),
              /* @__PURE__ */ c("div", { className: k.trailing, children: [
                T.length > 0 && !y && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: k.clearAllButton,
                    "aria-label": "Clear all selections",
                    onClick: (l) => {
                      l.stopPropagation(), i === void 0 && K([]), o == null || o([], []);
                    },
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ e("span", { className: k.chevron, children: /* @__PURE__ */ e(be, { size: 14 }) })
              ] })
            ]
          }
        ),
        C && /* @__PURE__ */ e("div", { className: k.menu, role: "listbox", "aria-multiselectable": "true", children: h.length === 0 ? /* @__PURE__ */ e("div", { className: k.empty, children: "No matches found" }) : h.map((l, B) => {
          const Z = T.includes(l.value), ae = B === b;
          return /* @__PURE__ */ c(
            "div",
            {
              role: "option",
              "aria-selected": Z,
              "aria-disabled": l.disabled,
              className: [
                k.option,
                Z ? k.selected : "",
                ae ? k.focused : "",
                l.disabled ? k.optionDisabled : ""
              ].filter(Boolean).join(" "),
              onClick: ($e) => {
                $e.stopPropagation(), q(l);
              },
              onMouseEnter: () => S(B),
              children: [
                /* @__PURE__ */ e("div", { className: k.checkboxSlot, children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: [
                      k.checkboxBox,
                      Z ? k.checkboxChecked : ""
                    ].join(" "),
                    children: Z && /* @__PURE__ */ e(fe, { size: 11 })
                  }
                ) }),
                l.avatar && /* @__PURE__ */ e("div", { className: k.avatarSlot, children: /* @__PURE__ */ e(he, { size: "sm", name: l.label, ...l.avatar }) }),
                !l.avatar && l.icon && /* @__PURE__ */ e("div", { className: k.iconSlot, children: l.icon }),
                /* @__PURE__ */ c("div", { className: k.labelCol, children: [
                  /* @__PURE__ */ c("div", { className: k.labelRow, children: [
                    /* @__PURE__ */ e("span", { className: k.optionLabel, children: l.label }),
                    l.badge && /* @__PURE__ */ e(
                      "span",
                      {
                        className: [
                          k.badge,
                          k[`badge-${l.badgeVariant || "primary"}`]
                        ].join(" "),
                        children: l.badge
                      }
                    )
                  ] }),
                  l.description && /* @__PURE__ */ e("div", { className: k.optionDescription, children: l.description })
                ] })
              ]
            },
            l.value
          );
        }) }),
        r && /* @__PURE__ */ e("span", { className: k.errorText, children: r }),
        !r && s && /* @__PURE__ */ e("span", { className: k.helperText, children: s })
      ]
    }
  );
}, fr = "_container_1nphi_1", br = "_label_1nphi_10", vr = "_required_1nphi_20", gr = "_trigger_1nphi_25", yr = "_disabled_1nphi_45", Nr = "_isOpen_1nphi_49", $r = "_searchIcon_1nphi_55", kr = "_input_1nphi_63", xr = "_clearButton_1nphi_81", wr = "_chevron_1nphi_98", Ir = "_menu_1nphi_110", Br = "_optionsList_1nphi_129", Cr = "_groupBlock_1nphi_135", qr = "_groupHeader_1nphi_140", Sr = "_option_1nphi_129", Lr = "_focused_1nphi_174", zr = "_selected_1nphi_178", Dr = "_optionContent_1nphi_182", Er = "_optionIcon_1nphi_190", Rr = "_optionLabel_1nphi_197", Tr = "_highlight_1nphi_206", jr = "_optionBadge_1nphi_211", Or = "_optionDisabled_1nphi_223", Wr = "_emptyFallback_1nphi_230", Ar = "_emptyIcon_1nphi_240", Gr = "_emptyTitle_1nphi_254", Mr = "_emptySubtitle_1nphi_260", Fr = "_footerGuide_1nphi_267", Vr = "_hasError_1nphi_280", Hr = "_errorText_1nphi_289", Kr = "_helperText_1nphi_294", w = {
  container: fr,
  label: br,
  required: vr,
  trigger: gr,
  disabled: yr,
  isOpen: Nr,
  searchIcon: $r,
  input: kr,
  clearButton: xr,
  chevron: wr,
  menu: Ir,
  optionsList: Br,
  groupBlock: Cr,
  groupHeader: qr,
  option: Sr,
  focused: Lr,
  selected: zr,
  optionContent: Dr,
  optionIcon: Er,
  optionLabel: Rr,
  highlight: Tr,
  optionBadge: jr,
  optionDisabled: Or,
  emptyFallback: Wr,
  emptyIcon: Ar,
  emptyTitle: Gr,
  emptySubtitle: Mr,
  footerGuide: Fr,
  hasError: Vr,
  errorText: Hr,
  helperText: Kr
}, Xr = ({
  label: t,
  placeholder: n = "Search entities...",
  helperText: s,
  errorMessage: r,
  options: a,
  value: i,
  defaultValue: p,
  onChange: o,
  disabled: _ = !1,
  isRequired: u = !1,
  className: y,
  id: v
}) => {
  const x = de(), $ = v || x, N = se(null), m = se(null), [f, I] = V(!1), [W, H] = V(
    i || p || ""
  ), [C, D] = V(""), [E, M] = V(-1);
  P(() => {
    i !== void 0 && H(i);
  }, [i]);
  const T = ue(() => a.find((d) => d.value === W), [a, W]);
  P(() => {
    !f && T ? D(T.label) : !f && !T && D("");
  }, [f, T]);
  const K = ue(() => {
    if (!C.trim()) return a;
    const d = C.toLowerCase();
    return a.filter(
      (g) => g.label.toLowerCase().includes(d) || g.group && g.group.toLowerCase().includes(d) || g.badge && g.badge.toLowerCase().includes(d)
    );
  }, [a, C]), b = ue(() => {
    const d = {};
    return K.forEach((g) => {
      const Y = g.group || "";
      d[Y] || (d[Y] = []), d[Y].push(g);
    }), d;
  }, [K]), S = ue(() => {
    const d = [];
    return Object.keys(b).forEach((g) => {
      d.push(...b[g]);
    }), d;
  }, [b]);
  P(() => {
    const d = (g) => {
      N.current && !N.current.contains(g.target) && (I(!1), M(-1));
    };
    return f && document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, [f]);
  const R = (d) => {
    d.disabled || _ || (i === void 0 && H(d.value), D(d.label), I(!1), M(-1), o == null || o(d.value, d));
  }, h = (d) => {
    var g;
    d.stopPropagation(), D(""), i === void 0 && H(""), o == null || o("", void 0), (g = m.current) == null || g.focus();
  }, q = (d) => {
    if (!_) {
      if (!f) {
        (d.key === "ArrowDown" || d.key === "Enter") && (d.preventDefault(), I(!0));
        return;
      }
      d.key === "Escape" ? (d.preventDefault(), I(!1), M(-1)) : d.key === "ArrowDown" ? (d.preventDefault(), M((g) => g < S.length - 1 ? g + 1 : 0)) : d.key === "ArrowUp" ? (d.preventDefault(), M((g) => g > 0 ? g - 1 : S.length - 1)) : d.key === "Enter" && E >= 0 && E < S.length && (d.preventDefault(), R(S[E]));
    }
  }, O = (d, g) => {
    if (!g.trim()) return d;
    const Y = d.split(new RegExp(`(${g})`, "gi"));
    return /* @__PURE__ */ e(ve, { children: Y.map(
      (l, B) => l.toLowerCase() === g.toLowerCase() ? /* @__PURE__ */ e("span", { className: w.highlight, children: l }, B) : l
    ) });
  }, j = !!r;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: N,
      className: [
        w.container,
        f ? w.isOpen : "",
        _ ? w.disabled : "",
        j ? w.hasError : "",
        y || ""
      ].filter(Boolean).join(" "),
      onKeyDown: q,
      children: [
        t && /* @__PURE__ */ c("label", { id: `${$}-label`, className: w.label, children: [
          t,
          u && /* @__PURE__ */ e("span", { className: w.required, children: "*" })
        ] }),
        /* @__PURE__ */ c(
          "div",
          {
            className: w.trigger,
            onClick: () => {
              var d;
              _ || (I(!0), (d = m.current) == null || d.focus());
            },
            children: [
              /* @__PURE__ */ e("span", { className: w.searchIcon, children: /* @__PURE__ */ e(je, { size: 14 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: m,
                  id: $,
                  type: "text",
                  className: w.input,
                  placeholder: n,
                  value: C,
                  role: "combobox",
                  "aria-expanded": f,
                  "aria-autocomplete": "list",
                  "aria-controls": `${$}-popup`,
                  disabled: _,
                  onChange: (d) => {
                    D(d.target.value), f || I(!0);
                  },
                  onFocus: () => I(!0)
                }
              ),
              C && !_ && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: w.clearButton,
                  "aria-label": "Clear query",
                  onClick: h,
                  children: /* @__PURE__ */ e(pe, { size: 12 })
                }
              ),
              /* @__PURE__ */ e("span", { className: w.chevron, children: /* @__PURE__ */ e(be, { size: 14 }) })
            ]
          }
        ),
        f && /* @__PURE__ */ c("div", { id: `${$}-popup`, className: w.menu, role: "listbox", children: [
          S.length === 0 ? /* @__PURE__ */ c("div", { className: w.emptyFallback, children: [
            /* @__PURE__ */ e("div", { className: w.emptyIcon, children: "!" }),
            /* @__PURE__ */ e("div", { className: w.emptyTitle, children: "No matching records found" }),
            /* @__PURE__ */ e("div", { className: w.emptySubtitle, children: "Check spelling or clear query filter" })
          ] }) : /* @__PURE__ */ e("div", { className: w.optionsList, children: Object.keys(b).map((d) => /* @__PURE__ */ c(
            "div",
            {
              className: w.groupBlock,
              children: [
                d && /* @__PURE__ */ e("div", { className: w.groupHeader, children: d }),
                b[d].map((g) => {
                  const Y = g.value === W, l = S.indexOf(g), B = l === E;
                  return /* @__PURE__ */ c(
                    "div",
                    {
                      role: "option",
                      "aria-selected": Y,
                      "aria-disabled": g.disabled,
                      className: [
                        w.option,
                        Y ? w.selected : "",
                        B ? w.focused : "",
                        g.disabled ? w.optionDisabled : ""
                      ].filter(Boolean).join(" "),
                      onClick: (Z) => {
                        Z.stopPropagation(), R(g);
                      },
                      onMouseEnter: () => M(l),
                      children: [
                        /* @__PURE__ */ c("div", { className: w.optionContent, children: [
                          g.icon && /* @__PURE__ */ e("span", { className: w.optionIcon, children: g.icon }),
                          /* @__PURE__ */ e("span", { className: w.optionLabel, children: O(g.label, C) })
                        ] }),
                        g.badge && /* @__PURE__ */ e("span", { className: w.optionBadge, children: g.badge })
                      ]
                    },
                    g.value
                  );
                })
              ]
            },
            d || "default-group"
          )) }),
          /* @__PURE__ */ c("div", { className: w.footerGuide, children: [
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
  he as Avatar,
  Ge as Badge,
  Oe as Button,
  xn as Card,
  Cn as CardContent,
  Bn as CardDescription,
  qn as CardFooter,
  wn as CardHeader,
  In as CardTitle,
  fe as CheckIcon,
  tn as Checkbox,
  be as ChevronDownIcon,
  Ee as ChevronLeftIcon,
  Re as ChevronRightIcon,
  ja as Chip,
  pe as CloseIcon,
  Xr as Combobox,
  ha as Drawer,
  Vt as Dropdown,
  nt as Input,
  De as MinusIcon,
  Zn as Modal,
  es as ModalFooter,
  Jr as MultiSelect,
  Ws as Radio,
  Os as RadioGroup,
  je as SearchIcon,
  Ps as SearchInput,
  ht as Select,
  ze as SpinnerIcon,
  na as StatCard,
  Is as Switch,
  fs as TabPanel,
  On as Table,
  An as TableBody,
  Fn as TableCell,
  Mn as TableHead,
  Wn as TableHeader,
  Gn as TableRow,
  ms as Tabs,
  pn as Textarea,
  Te as UserFallbackIcon
};
//# sourceMappingURL=index.mjs.map
