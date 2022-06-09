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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
export var mainListItems = (_jsxs(React.Fragment, { children: [_jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(DashboardIcon, {}) }), _jsx(ListItemText, { primary: "Dashboard" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(ShoppingCartIcon, {}) }), _jsx(ListItemText, { primary: "Orders" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(PeopleIcon, {}) }), _jsx(ListItemText, { primary: "Customers" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(BarChartIcon, {}) }), _jsx(ListItemText, { primary: "Reports" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(LayersIcon, {}) }), _jsx(ListItemText, { primary: "Integrations" })] })] }));
export var secondaryListItems = (_jsxs(React.Fragment, { children: [_jsx(ListSubheader, __assign({ component: "div", inset: true }, { children: "Saved reports" })), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(AssignmentIcon, {}) }), _jsx(ListItemText, { primary: "Current month" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(AssignmentIcon, {}) }), _jsx(ListItemText, { primary: "Last quarter" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(AssignmentIcon, {}) }), _jsx(ListItemText, { primary: "Year-end sale" })] })] }));
