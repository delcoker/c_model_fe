var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
function preventDefault(event) {
    event.preventDefault();
}
export default function Deposits() {
    return (_jsxs(React.Fragment, { children: [_jsx(Title, { children: "Recent Deposits" }), _jsx(Typography, __assign({ component: "p", variant: "h4" }, { children: "$5555" })), _jsx(Typography, __assign({ color: "text.secondary", sx: { flex: 1 } }, { children: "on 15 March, 2019" })), _jsx("div", { children: _jsx(Link, __assign({ color: "primary", href: "#", onClick: preventDefault }, { children: "View balance" })) })] }));
}
