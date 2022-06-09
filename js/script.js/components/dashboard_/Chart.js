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
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
// Generate Sales Data
function createData(time, amount) {
    return { time: time, amount: amount };
}
var data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 8300),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];
export default function Chart() {
    var theme = useTheme();
    return (_jsxs(React.Fragment, { children: [_jsx(Title, { children: "Today" }), _jsx(ResponsiveContainer, { children: _jsxs(LineChart, __assign({ data: data, margin: {
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    } }, { children: [_jsx(XAxis, { dataKey: "time", stroke: theme.palette.text.secondary, style: theme.typography.body2 }), _jsx(YAxis, __assign({ stroke: theme.palette.text.secondary, style: theme.typography.body2 }, { children: _jsx(Label, __assign({ angle: 270, position: "left", style: __assign({ textAnchor: 'middle', fill: theme.palette.text.primary }, theme.typography.body1) }, { children: "Sales ($)" })) })), _jsx(Line, { isAnimationActive: false, type: "monotone", dataKey: "amount", stroke: theme.palette.primary.main, dot: false })] })) })] }));
}
