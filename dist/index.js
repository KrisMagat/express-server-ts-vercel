"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ name: 'John Doe' });
}
exports.default = handler;
//# sourceMappingURL=index.js.map