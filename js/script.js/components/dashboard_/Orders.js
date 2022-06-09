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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id: id, date: date, name: name, shipTo: shipTo, paymentMethod: paymentMethod, amount: amount };
}
var rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
function preventDefault(event) {
    event.preventDefault();
}
export default function Orders() {
    return (_jsxs(React.Fragment, { children: [_jsx(Title, { children: "Recent Orders" }), _jsxs(Table, __assign({ size: "small" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Date" }), _jsx(TableCell, { children: "Name" }), _jsx(TableCell, { children: "Ship To" }), _jsx(TableCell, { children: "Payment Method" }), _jsx(TableCell, __assign({ align: "right" }, { children: "Sale Amount" }))] }) }), _jsx(TableBody, { children: rows.map(function (row) { return (_jsxs(TableRow, { children: [_jsx(TableCell, { children: row.date }), _jsx(TableCell, { children: row.name }), _jsx(TableCell, { children: row.shipTo }), _jsx(TableCell, { children: row.paymentMethod }), _jsx(TableCell, __assign({ align: "right" }, { children: "$".concat(row.amount) }))] }, row.id)); }) })] })), _jsx(Link, __assign({ color: "primary", href: "#", onClick: preventDefault, sx: { mt: 3 } }, { children: "See more orders" }))] }));
}
