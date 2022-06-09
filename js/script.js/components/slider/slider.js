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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
var useStyles = makeStyles({
    root: {
        width: 200,
    },
});
export default function ContinuousSlider() {
    var classes = useStyles();
    var _a = React.useState(30), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(Typography, __assign({ id: "continuous-slider", gutterBottom: true }, { children: "Volume" })), _jsxs(Grid, __assign({ container: true, spacing: 2 }, { children: [_jsx(Grid, __assign({ item: true }, { children: _jsx(VolumeDown, {}) })), _jsx(Grid, __assign({ item: true, xs: true }, { children: _jsx(Slider, { value: value, onChange: handleChange, "aria-labelledby": "continuous-slider" }) })), _jsx(Grid, __assign({ item: true }, { children: _jsx(VolumeUp, {}) }))] })), _jsx(Typography, __assign({ id: "disabled-slider", gutterBottom: true }, { children: "Disabled slider" })), _jsx(Slider, { disabled: true, defaultValue: 30, "aria-labelledby": "disabled-slider" })] })));
}
