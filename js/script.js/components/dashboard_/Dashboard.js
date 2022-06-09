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
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import ContinuousSlider from "../slider/slider";
function Copyright(props) {
    return (_jsxs(Typography, __assign({ variant: "body2", color: "text.secondary", align: "center" }, props, { children: ['Copyright © ', _jsx(Link, __assign({ color: "inherit", href: "https://mui.com/" }, { children: "C-Model" })), ' ', new Date().getFullYear(), '.'] })));
}
var drawerWidth = 240;
var AppBar = styled(MuiAppBar, {
    shouldForwardProp: function (prop) { return prop !== 'open'; },
})(function (_a) {
    var theme = _a.theme, open = _a.open;
    return (__assign({ zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }) }, (open && {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth, "px)"),
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })));
});
var Drawer = styled(MuiDrawer, { shouldForwardProp: function (prop) { return prop !== 'open'; } })(function (_a) {
    var _b;
    var theme = _a.theme, open = _a.open;
    return ({
        '& .MuiDrawer-paper': __assign({ position: 'relative', whiteSpace: 'nowrap', width: drawerWidth, transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }), boxSizing: 'border-box' }, (!open && (_b = {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7)
            },
            _b[theme.breakpoints.up('sm')] = {
                width: theme.spacing(9),
            },
            _b))),
    });
});
var mdTheme = createTheme();
function DashboardContent() {
    var _a = React.useState(true), open = _a[0], setOpen = _a[1];
    var toggleDrawer = function () {
        setOpen(!open);
    };
    return (_jsx(ThemeProvider, __assign({ theme: mdTheme }, { children: _jsxs(Box, __assign({ sx: { display: 'flex' } }, { children: [_jsx(CssBaseline, {}), _jsx(AppBar, __assign({ position: "absolute", open: open }, { children: _jsxs(Toolbar, __assign({ sx: {
                            pr: '24px', // keep right padding when drawer closed
                        } }, { children: [_jsx(IconButton, __assign({ edge: "start", color: "inherit", "aria-label": "open drawer", onClick: toggleDrawer, sx: __assign({ marginRight: '36px' }, (open && { display: 'none' })) }, { children: _jsx(MenuIcon, {}) })), _jsx(Typography, __assign({ component: "h1", variant: "h6", color: "inherit", noWrap: true, sx: { flexGrow: 1 } }, { children: "Dashboard" })), _jsx(IconButton, __assign({ color: "inherit" }, { children: _jsx(Badge, __assign({ badgeContent: 4, color: "secondary" }, { children: _jsx(NotificationsIcon, {}) })) }))] })) })), _jsxs(Drawer, __assign({ variant: "permanent", open: open }, { children: [_jsx(Toolbar, __assign({ sx: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            } }, { children: _jsx(IconButton, __assign({ onClick: toggleDrawer }, { children: _jsx(ChevronLeftIcon, {}) })) })), _jsx(Divider, {}), _jsxs(List, __assign({ component: "nav" }, { children: [mainListItems, _jsx(Divider, { sx: { my: 1 } }), secondaryListItems] }))] })), _jsxs(Box, __assign({ component: "main", sx: {
                        backgroundColor: function (theme) {
                            return theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900];
                        },
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    } }, { children: [_jsx(Toolbar, {}), _jsxs(Container, __assign({ maxWidth: "lg", sx: { mt: 4, mb: 4 } }, { children: [_jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsx(Grid, __assign({ item: true, xs: 12, md: 8, lg: 9 }, { children: _jsx(Paper, __assign({ sx: {
                                                    p: 2,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: 240,
                                                } }, { children: _jsx(ContinuousSlider, {}) })) })), _jsx(Grid, __assign({ item: true, xs: 12, md: 4, lg: 3 }, { children: _jsx(Paper, __assign({ sx: {
                                                    p: 2,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: 240,
                                                } }, { children: _jsx(Deposits, {}) })) })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(Paper, __assign({ sx: { p: 2, display: 'flex', flexDirection: 'column' } }, { children: _jsx(Orders, {}) })) }))] })), _jsx(Copyright, { sx: { pt: 4 } })] }))] }))] })) })));
}
export default function Dashboard() {
    return _jsx(DashboardContent, {});
}
