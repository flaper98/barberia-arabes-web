/* @ds-bundle: {"format":3,"namespace":"FlanovaxDesignSystem_f21bfd","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2544b5d66ba8","components/core/Badge.jsx":"ad65711df445","components/core/Button.jsx":"cbec3969086b","components/core/Card.jsx":"56caf3bfa18a","components/core/Checkbox.jsx":"ff895a341dd4","components/core/IconButton.jsx":"eb20770eeba4","components/core/Input.jsx":"6c5169cd739e","components/core/Switch.jsx":"5b7d37ac61e4","components/core/Tabs.jsx":"1ae58ab2d9ed","components/core/Tag.jsx":"c9e8adf4550e","ui_kits/website/ContactView.jsx":"f21e4931d6df","ui_kits/website/Footer.jsx":"9b28e5082d0f","ui_kits/website/HomeView.jsx":"c276ddbacee4","ui_kits/website/Nav.jsx":"39dcd3a83a47","ui_kits/website/ServicesView.jsx":"83c9c83a1174","ui_kits/website/Shared.jsx":"e5d52667a0f0","ui_kits/website/WorkView.jsx":"6422b4a0c0f2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FlanovaxDesignSystem_f21bfd = window.FlanovaxDesignSystem_f21bfd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PALETTE = [['var(--cobalt-500)', '#fff'], ['var(--tangerine-500)', '#fff'], ['var(--ink-800)', 'var(--paper)'], ['var(--cobalt-100)', 'var(--cobalt-700)']];

/**
 * Flanovax Avatar — image, or initials on a deterministic brand color.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  square = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
  const idx = name ? name.charCodeAt(0) % PALETTE.length : 0;
  const [bg, fg] = PALETTE[idx];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: square ? 'var(--radius-md)' : 'var(--radius-pill)',
      overflow: 'hidden',
      background: src ? 'var(--ink-100)' : bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.4),
      letterSpacing: '-0.02em',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Badge — compact status / category label.
 */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--ink-100)', 'var(--ink-700)'],
      solid: ['var(--ink-800)', 'var(--paper)']
    },
    brand: {
      soft: ['var(--cobalt-50)', 'var(--cobalt-700)'],
      solid: ['var(--brand)', '#fff']
    },
    accent: {
      soft: ['var(--tangerine-50)', 'var(--tangerine-700)'],
      solid: ['var(--accent)', '#fff']
    },
    success: {
      soft: ['var(--success-subtle)', '#0f5e30'],
      solid: ['var(--success)', '#fff']
    },
    warning: {
      soft: ['var(--warning-subtle)', '#7a5608'],
      solid: ['var(--warning)', '#3a2806']
    },
    danger: {
      soft: ['var(--danger-subtle)', '#8f1d1d'],
      solid: ['var(--danger)', '#fff']
    }
  };
  const pair = (tones[tone] || tones.neutral)[variant] || (tones[tone] || tones.neutral).soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 10px',
      background: pair[0],
      color: pair[1],
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Button — the primary action primitive.
 * Pill-shaped, confident, with cobalt/tangerine/ghost/ink variants.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: '0 16px',
      fontSize: 14,
      gap: 8
    },
    md: {
      height: 44,
      padding: '0 22px',
      fontSize: 15,
      gap: 9
    },
    lg: {
      height: 54,
      padding: '0 30px',
      fontSize: 17,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--brand-on)',
      border: '2px solid var(--brand)',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-on)',
      border: '2px solid var(--accent)',
      boxShadow: 'var(--shadow-sm)'
    },
    ink: {
      background: 'var(--ink-950)',
      color: 'var(--paper)',
      border: '2px solid var(--ink-950)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent',
      boxShadow: 'none'
    }
  };
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sz.gap,
      height: sz.height,
      padding: sz.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: sz.fontSize,
      fontWeight: 700,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...vr,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--brand)';
      if (variant === 'accent') e.currentTarget.style.background = 'var(--accent)';
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
      if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-hover)';
      if (variant === 'accent') e.currentTarget.style.background = 'var(--accent-hover)';
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-inset)';
      if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--ink-950)';
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: -2
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: -2
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Card — warm raised surface. Optional hover lift for clickable cards.
 */
function Card({
  interactive = false,
  padding = 24,
  as = 'div',
  children,
  style = {},
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Checkbox — controlled, with optional label.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    onClick: toggle,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flex: 'none',
      padding: 0,
      cursor: 'inherit',
      borderRadius: 'var(--radius-xs)',
      border: `2px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand)' : 'var(--surface-raised)',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax IconButton — a square/circular control wrapping a single icon node.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  label,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: 'var(--brand-on)',
      border: '1px solid var(--brand)'
    },
    ink: {
      background: 'var(--ink-950)',
      color: 'var(--paper)',
      border: '1px solid var(--ink-950)'
    },
    outline: {
      background: 'var(--surface-raised)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  const vr = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...vr,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'var(--surface-inset)';
      if (variant === 'solid') e.currentTarget.style.background = 'var(--brand-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      if (disabled) return;
      e.currentTarget.style.background = vr.background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Input — labeled text field with optional icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--brand)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-raised)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 14 : 15,
      color: 'var(--text-strong)'
    }
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--danger)',
      fontWeight: 500
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Switch — on/off toggle. Controlled via `checked` + `onChange`.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 46,
      height: 27,
      flex: 'none',
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'inherit',
      background: checked ? 'var(--brand)' : 'var(--ink-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 22 : 3,
      width: 21,
      height: 21,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Tabs — underline-style segmented navigation.
 * items: [{ id, label }]; controlled via `value` + `onChange`.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1.5px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        padding: '12px 16px',
        marginBottom: -1.5,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        borderBottom: `2.5px solid ${on ? 'var(--brand)' : 'transparent'}`,
        transition: 'color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flanovax Tag — interactive filter / category chip, optionally removable or selectable.
 */
function Tag({
  selected = false,
  onRemove,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: onRemove ? '0 8px 0 14px' : '0 14px',
      background: selected ? 'var(--ink-950)' : 'var(--surface-raised)',
      color: selected ? 'var(--paper)' : 'var(--text-body)',
      border: `1.5px solid ${selected ? 'var(--ink-950)' : 'var(--border-strong)'}`,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      borderRadius: 'var(--radius-pill)',
      cursor: rest.onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      userSelect: 'none',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: selected ? 'rgba(245,241,232,0.2)' : 'var(--ink-100)',
      color: 'inherit',
      fontSize: 13,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactView.jsx
try { (() => {
/* Contact view: brief form with success state. */
function ContactView() {
  const {
    Input,
    Button,
    Checkbox,
    Tag,
    Card
  } = window.FlanovaxDesignSystem_f21bfd;
  const [sent, setSent] = React.useState(false);
  const [budget, setBudget] = React.useState('5-10k');
  const [terms, setTerms] = React.useState(false);
  const budgets = [{
    id: '<5k',
    label: '< 5.000 €'
  }, {
    id: '5-10k',
    label: '5–10.000 €'
  }, {
    id: '10-25k',
    label: '10–25.000 €'
  }, {
    id: '>25k',
    label: '+ 25.000 €'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '64px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contacto"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(36px,5vw,58px)',
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '14px 0 0',
      textWrap: 'balance'
    }
  }, "Cu\xE9ntanos tu proyecto."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginTop: 18,
      maxWidth: 380
    }
  }, "Respondemos en menos de 48 horas con una propuesta concreta y un presupuesto cerrado."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [['mail', 'hola@flanovax.com'], ['phone', '+34 600 000 000'], ['map-pin', 'Madrid · Trabajamos en remoto']].map(([ic, tx]) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-body)',
      fontSize: 15.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cobalt-50)',
      color: 'var(--brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), tx)))), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--success-subtle)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\xA1Recibido!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, "Te escribimos muy pronto."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Enviar otro"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Opcional"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "hola@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Presupuesto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, budgets.map(b => /*#__PURE__*/React.createElement(Tag, {
    key: b.id,
    selected: budget === b.id,
    onClick: () => setBudget(b.id)
  }, b.label)))), /*#__PURE__*/React.createElement(Input, {
    label: "Cu\xE9ntanos m\xE1s",
    placeholder: "\xBFQu\xE9 quieres construir?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: terms,
    onChange: setTerms,
    label: "Acepto la pol\xEDtica de privacidad"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 17
    })
  }, "Enviar propuesta"))));
}
Object.assign(window, {
  ContactView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer for the Flanovax site. */
function Footer({
  onNavigate
}) {
  const cols = [{
    h: 'Servicios',
    items: ['Diseño web', 'Branding', 'E-commerce', 'SEO & contenido']
  }, {
    h: 'Estudio',
    items: ['Proyectos', 'Nosotros', 'Proceso', 'Blog']
  }, {
    h: 'Contacto',
    items: ['hola@flanovax.com', '+34 600 000 000', 'Madrid · Remoto']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-950)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    color: "var(--paper)",
    size: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: 280,
      color: 'var(--ink-300)',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "Estudio digital. Dise\xF1amos y construimos p\xE1ginas y productos que se ven y se usan.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--tangerine-300)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      color: 'var(--ink-200)',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: '1px solid var(--ink-800)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--ink-400)',
      fontSize: 13,
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Flanovax"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "dribbble",
    size: 18
  })))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeView.jsx
try { (() => {
/* Home / landing view for the Flanovax site. */
function HomeView({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge
  } = window.FlanovaxDesignSystem_f21bfd;
  const services = [{
    icon: 'layout-template',
    t: 'Diseño web',
    d: 'Sitios a medida, rápidos y memorables, del wireframe al lanzamiento.'
  }, {
    icon: 'shopping-bag',
    t: 'E-commerce',
    d: 'Tiendas que convierten: catálogo, pago y analítica bien resueltos.'
  }, {
    icon: 'sparkles',
    t: 'Branding',
    d: 'Identidad visual, sistema de marca y guía de uso lista para escalar.'
  }, {
    icon: 'trending-up',
    t: 'SEO & contenido',
    d: 'Estructura, velocidad y copy que te posicionan donde te buscan.'
  }];
  const work = [{
    t: 'Tienda Aurora',
    cat: 'E-commerce',
    stat: '+38% conversión',
    bg: 'var(--cobalt-500)',
    fg: '#fff'
  }, {
    t: 'Clínica Vera',
    cat: 'Web · Branding',
    stat: 'Rediseño completo',
    bg: 'var(--tangerine-500)',
    fg: '#fff'
  }, {
    t: 'Estudio Norte',
    cat: 'Portfolio',
    stat: 'Premio Awwwards',
    bg: 'var(--ink-900)',
    fg: 'var(--paper)'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(var(--ink-200) 1.4px, transparent 1.4px)',
      backgroundSize: '26px 26px',
      opacity: 0.5,
      maskImage: 'linear-gradient(180deg, #000, transparent 80%)',
      WebkitMaskImage: 'linear-gradient(180deg, #000, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1100,
      margin: '0 auto',
      padding: '96px 32px 80px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 999,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--success)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, "2 plazas libres para Q3")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(44px, 7vw, 84px)',
      lineHeight: 1.0,
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '26px 0 0',
      textWrap: 'balance'
    }
  }, "Ideas que se ven.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "Webs"), " que funcionan."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 600,
      margin: '24px auto 0',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Somos un estudio digital. Dise\xF1amos y construimos p\xE1ginas web y soluciones creativas que hacen crecer tu marca."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNavigate('contact')
  }, "Empezar proyecto"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('work')
  }, "Ver proyectos")))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '24px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-subtle)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Conf\xEDan en nosotros"), ['Aurora', 'Vera', 'Norte', 'Lumen', 'Habitat'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ink-400)',
      letterSpacing: '-0.02em'
    }
  }, n)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Qu\xE9 hacemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '12px 0 0'
    }
  }, "Servicios de punta a punta")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 18
    }),
    onClick: () => onNavigate('services')
  }, "Todos los servicios")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    interactive: true,
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cobalt-50)',
      color: 'var(--brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 14.5,
      lineHeight: 1.55
    }
  }, s.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Proyectos recientes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '12px 0 40px'
    }
  }, "Trabajo que habla por s\xED solo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, work.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.t,
    onClick: () => onNavigate('work'),
    style: {
      cursor: 'pointer',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: w.bg,
      color: w.fg,
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "soft",
    style: {
      alignSelf: 'flex-start',
      background: 'rgba(255,255,255,0.18)',
      color: w.fg
    }
  }, w.cat), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em'
    }
  }, w.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      opacity: 0.85,
      marginTop: 4
    }
  }, w.stat)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand)',
      borderRadius: 'var(--radius-xl)',
      padding: '64px 56px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-brand)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,4vw,52px)',
      letterSpacing: '-0.03em',
      color: '#fff',
      margin: 0,
      textWrap: 'balance'
    }
  }, "\xBFTienes un proyecto en mente?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--cobalt-100)',
      fontSize: 18,
      margin: '16px auto 0',
      maxWidth: 520
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas. Te respondemos con una propuesta en 48 horas."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNavigate('contact')
  }, "Hablemos")))));
}
Object.assign(window, {
  HomeView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Top navigation for the Flanovax site. */
function Nav({
  route,
  onNavigate
}) {
  const {
    Button
  } = window.FlanovaxDesignSystem_f21bfd;
  const links = [{
    id: 'home',
    label: 'Inicio'
  }, {
    id: 'work',
    label: 'Proyectos'
  }, {
    id: 'services',
    label: 'Servicios'
  }, {
    id: 'contact',
    label: 'Contacto'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(245,241,232,0.82)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: route === l.id ? 700 : 500,
      color: route === l.id ? 'var(--text-strong)' : 'var(--text-muted)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onNavigate('contact')
  }, "Empezar")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesView.jsx
try { (() => {
/* Services detail view. */
function ServicesView({
  onNavigate
}) {
  const {
    Button,
    Badge
  } = window.FlanovaxDesignSystem_f21bfd;
  const rows = [{
    icon: 'layout-template',
    t: 'Diseño web',
    d: 'Diseño y desarrollo a medida. Rápido, accesible y fácil de gestionar.',
    items: ['UX / UI', 'Desarrollo front', 'CMS a medida', 'Animación']
  }, {
    icon: 'shopping-bag',
    t: 'E-commerce',
    d: 'Tiendas que venden. Catálogo, pago y analítica resueltos de principio a fin.',
    items: ['Shopify / a medida', 'Pasarela de pago', 'Optimización CRO', 'Integraciones']
  }, {
    icon: 'sparkles',
    t: 'Branding',
    d: 'Identidad visual y sistema de marca listos para crecer contigo.',
    items: ['Logotipo', 'Sistema visual', 'Guía de marca', 'Aplicaciones']
  }, {
    icon: 'trending-up',
    t: 'SEO & contenido',
    d: 'Estructura, velocidad y copy que te posicionan donde te buscan.',
    items: ['Auditoría técnica', 'Estrategia de contenido', 'Velocidad', 'Analítica']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '64px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Servicios"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px,6vw,68px)',
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '14px 0 0',
      maxWidth: 720,
      textWrap: 'balance'
    }
  }, "Todo lo que tu marca necesita en digital."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: 28,
      alignItems: 'center',
      padding: '32px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-lg)',
      background: i % 2 ? 'var(--tangerine-50)' : 'var(--cobalt-50)',
      color: i % 2 ? 'var(--accent)' : 'var(--brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, r.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      color: 'var(--text-muted)',
      fontSize: 16,
      maxWidth: 520,
      lineHeight: 1.55
    }
  }, r.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, r.items.map(it => /*#__PURE__*/React.createElement(Badge, {
    key: it,
    tone: "neutral"
  }, it)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onNavigate('contact')
  }, "Pedir")))));
}
Object.assign(window, {
  ServicesView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
/* Shared bits for the Flanovax website UI kit. Exports to window. */

function Icon({
  name,
  size = 20,
  color,
  strokeWidth = 2,
  style = {}
}) {
  // Lucide replaces this <i> with an inline SVG on lucide.createIcons()
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    "data-icon": true,
    style: {
      width: size,
      height: size,
      color: color || 'currentColor',
      display: 'inline-flex',
      ...style
    }
  });
}

// Re-run lucide after every render so dynamically-added icons paint.
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        'stroke-width': 2
      }
    });
  });
}

// Brand spark mark (matches assets/mark.svg)
function Spark({
  size = 36
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M60 8 C65 44, 76 55, 112 60 C76 65, 65 76, 60 112 C55 76, 44 65, 8 60 C44 55, 55 44, 60 8 Z",
    fill: "var(--cobalt-500)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M99 13 C100.8 25, 105 29.2, 117 31 C105 32.8, 100.8 37, 99 49 C97.2 37, 93 32.8, 81 31 C93 29.2, 97.2 25, 99 13 Z",
    fill: "var(--tangerine-500)"
  }));
}
function Wordmark({
  color = 'var(--ink-950)',
  size = 24
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: size * 1.25
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.03em',
      color
    }
  }, "Flanovax"));
}
function Eyebrow({
  children,
  color = 'var(--accent)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color
    }
  }, children);
}
Object.assign(window, {
  Icon,
  useLucide,
  Spark,
  Wordmark,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkView.jsx
try { (() => {
/* Portfolio / proyectos view with filter chips. */
function WorkView({
  onNavigate
}) {
  const {
    Tag,
    Badge,
    Button
  } = window.FlanovaxDesignSystem_f21bfd;
  const [filter, setFilter] = React.useState('todos');
  const items = [{
    t: 'Tienda Aurora',
    cat: 'E-commerce',
    tag: 'ecommerce',
    stat: '+38% conversión',
    bg: 'var(--cobalt-500)',
    fg: '#fff'
  }, {
    t: 'Clínica Vera',
    cat: 'Web · Branding',
    tag: 'web',
    stat: 'Rediseño completo',
    bg: 'var(--tangerine-500)',
    fg: '#fff'
  }, {
    t: 'Estudio Norte',
    cat: 'Portfolio',
    tag: 'web',
    stat: 'Premio Awwwards',
    bg: 'var(--ink-900)',
    fg: 'var(--paper)'
  }, {
    t: 'Lumen App',
    cat: 'Producto digital',
    tag: 'producto',
    stat: 'MVP en 6 semanas',
    bg: 'var(--cobalt-700)',
    fg: '#fff'
  }, {
    t: 'Habitat',
    cat: 'Branding',
    tag: 'branding',
    stat: 'Identidad completa',
    bg: 'var(--ink-800)',
    fg: 'var(--paper)'
  }, {
    t: 'Mercado Sur',
    cat: 'E-commerce',
    tag: 'ecommerce',
    stat: '+52% ticket medio',
    bg: 'var(--tangerine-600)',
    fg: '#fff'
  }];
  const filters = [{
    id: 'todos',
    label: 'Todos'
  }, {
    id: 'web',
    label: 'Web'
  }, {
    id: 'ecommerce',
    label: 'E-commerce'
  }, {
    id: 'branding',
    label: 'Branding'
  }, {
    id: 'producto',
    label: 'Producto'
  }];
  const shown = filter === 'todos' ? items : items.filter(i => i.tag === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Proyectos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px,6vw,68px)',
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '14px 0 0',
      maxWidth: 760,
      textWrap: 'balance'
    }
  }, "Una selecci\xF3n del trabajo que nos enorgullece."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      margin: '36px 0 32px'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f.id,
    selected: filter === f.id,
    onClick: () => setFilter(f.id)
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, shown.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.t,
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: w.bg,
      color: w.fg,
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    style: {
      alignSelf: 'flex-start',
      background: 'rgba(255,255,255,0.18)',
      color: w.fg
    }
  }, w.cat), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-0.02em'
    }
  }, w.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      opacity: 0.9,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 15
  }), " ", w.stat)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNavigate('contact')
  }, "Quiero algo as\xED")));
}
Object.assign(window, {
  WorkView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();
