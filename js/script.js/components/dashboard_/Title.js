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
import { jsx as _jsx } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
export default function Title(props) {
    return (_jsx(Typography, __assign({ component: "h2", variant: "h6", color: "primary", gutterBottom: true }, { children: props.children })));
}
