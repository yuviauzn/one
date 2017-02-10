var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282,
    278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273,
    271, 269, 267, 265, 263, 261, 259], shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function stackBlurImage(F, M, L, z) {
    F = document.getElementById(F);
//  var G = F.naturalWidth, t = F.naturalHeight, D = document.getElementById(M);
    var D = document.getElementById(M), G =D.width, t = D.height ;
    D.style.width = G + "px";
    D.style.height = t + "px";
    D.width = G;
    D.height = t;
    D = D.getContext("2d");
    D.clearRect(0, 0, G, t);
    D.drawImage(F, 0, 0,canvas.width,canvas.height);
    isNaN(L) || 1 > L || (z ? stackBlurCanvasRGBA(M, 0, 0, G, t, L) : stackBlurCanvasRGB(M, 0, 0, G, t, L))
}
function stackBlurCanvasRGBA(F, M, L, z, G, t) {
    if (!(isNaN(t) || 1 > t)) {
        t |= 0;
        F = document.getElementById(F).getContext("2d");
        var D;
        try {
            try {
                D = F.getImageData(M, L, z, G)
            } catch (U) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), D = F.getImageData(M, L, z, G)
                } catch (R) {
                    throw alert("Cannot access local image"), Error("unable to access local image data: " + R);
                }
            }
        } catch (S) {
            throw alert("Cannot access image"), Error("unable to access image data: " + S);
        }
        var b = D.data, w, H, a, c, d, O, h, k, l, m, x, y, u, v, n, p, q,
            r, A, C, E, f, I;
        w = t + t + 1;
        var N = z - 1, g = G - 1, B = t + 1, J = B * (B + 1) / 2, K = new BlurStack, e = K;
        for (a = 1; a < w; a++)if (e = e.next = new BlurStack, a == B)var T = e;
        e.next = K;
        e = a = null;
        O = d = 0;
        var P = mul_table[t], Q = shg_table[t];
        for (H = 0; H < G; H++) {
            n = p = q = r = h = k = l = m = 0;
            x = B * (A = b[d]);
            y = B * (C = b[d + 1]);
            u = B * (E = b[d + 2]);
            v = B * (f = b[d + 3]);
            h += J * A;
            k += J * C;
            l += J * E;
            m += J * f;
            e = K;
            for (a = 0; a < B; a++)e.r = A, e.g = C, e.b = E, e.a = f, e = e.next;
            for (a = 1; a < B; a++)c = d + ((N < a ? N : a) << 2), h += (e.r = A = b[c]) * (I = B - a), k += (e.g = C = b[c + 1]) * I, l += (e.b = E = b[c + 2]) * I, m += (e.a = f = b[c + 3]) * I, n += A, p += C, q += E, r += f, e =
                e.next;
            a = K;
            e = T;
            for (w = 0; w < z; w++)b[d + 3] = f = m * P >> Q, 0 != f ? (f = 255 / f, b[d] = (h * P >> Q) * f, b[d + 1] = (k * P >> Q) * f, b[d + 2] = (l * P >> Q) * f) : b[d] = b[d + 1] = b[d + 2] = 0, h -= x, k -= y, l -= u, m -= v, x -= a.r, y -= a.g, u -= a.b, v -= a.a, c = O + ((c = w + t + 1) < N ? c : N) << 2, n += a.r = b[c], p += a.g = b[c + 1], q += a.b = b[c + 2], r += a.a = b[c + 3], h += n, k += p, l += q, m += r, a = a.next, x += A = e.r, y += C = e.g, u += E = e.b, v += f = e.a, n -= A, p -= C, q -= E, r -= f, e = e.next, d += 4;
            O += z
        }
        for (w = 0; w < z; w++) {
            p = q = r = n = k = l = m = h = 0;
            d = w << 2;
            x = B * (A = b[d]);
            y = B * (C = b[d + 1]);
            u = B * (E = b[d + 2]);
            v = B * (f = b[d + 3]);
            h += J * A;
            k += J * C;
            l += J * E;
            m += J * f;
            e = K;
            for (a =
                     0; a < B; a++)e.r = A, e.g = C, e.b = E, e.a = f, e = e.next;
            c = z;
            for (a = 1; a <= t; a++)d = c + w << 2, h += (e.r = A = b[d]) * (I = B - a), k += (e.g = C = b[d + 1]) * I, l += (e.b = E = b[d + 2]) * I, m += (e.a = f = b[d + 3]) * I, n += A, p += C, q += E, r += f, e = e.next, a < g && (c += z);
            d = w;
            a = K;
            e = T;
            for (H = 0; H < G; H++)c = d << 2, b[c + 3] = f = m * P >> Q, 0 < f ? (f = 255 / f, b[c] = (h * P >> Q) * f, b[c + 1] = (k * P >> Q) * f, b[c + 2] = (l * P >> Q) * f) : b[c] = b[c + 1] = b[c + 2] = 0, h -= x, k -= y, l -= u, m -= v, x -= a.r, y -= a.g, u -= a.b, v -= a.a, c = w + ((c = H + B) < g ? c : g) * z << 2, h += n += a.r = b[c], k += p += a.g = b[c + 1], l += q += a.b = b[c + 2], m += r += a.a = b[c + 3], a = a.next, x += A = e.r, y += C = e.g,
                u += E = e.b, v += f = e.a, n -= A, p -= C, q -= E, r -= f, e = e.next, d += z
        }
        F.putImageData(D, M, L)
    }
}
function stackBlurCanvasRGB(F, M, L, z, G, t) {
    if (!(isNaN(t) || 1 > t)) {
        t |= 0;
        F = document.getElementById(F).getContext("2d");
        var D;
        try {
            try {
                D = F.getImageData(M, L, z, G)
            } catch (U) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), D = F.getImageData(M, L, z, G)
                } catch (R) {
                    throw alert("Cannot access local image"), Error("unable to access local image data: " + R);
                }
            }
        } catch (S) {
            throw alert("Cannot access image"), Error("unable to access image data: " + S);
        }
        var b = D.data, w, H, a, c, d, O, h, k, l, m, x, y, u, v, n, p, q, r,
            A;
        w = t + t + 1;
        var C = z - 1, E = G - 1, f = t + 1, I = f * (f + 1) / 2, N = new BlurStack, g = N;
        for (a = 1; a < w; a++)if (g = g.next = new BlurStack, a == f)var B = g;
        g.next = N;
        g = a = null;
        O = d = 0;
        var J = mul_table[t], K = shg_table[t];
        for (H = 0; H < G; H++) {
            u = v = n = h = k = l = 0;
            m = f * (p = b[d]);
            x = f * (q = b[d + 1]);
            y = f * (r = b[d + 2]);
            h += I * p;
            k += I * q;
            l += I * r;
            g = N;
            for (a = 0; a < f; a++)g.r = p, g.g = q, g.b = r, g = g.next;
            for (a = 1; a < f; a++)c = d + ((C < a ? C : a) << 2), h += (g.r = p = b[c]) * (A = f - a), k += (g.g = q = b[c + 1]) * A, l += (g.b = r = b[c + 2]) * A, u += p, v += q, n += r, g = g.next;
            a = N;
            g = B;
            for (w = 0; w < z; w++)b[d] = h * J >> K, b[d + 1] = k * J >> K, b[d + 2] = l *
                J >> K, h -= m, k -= x, l -= y, m -= a.r, x -= a.g, y -= a.b, c = O + ((c = w + t + 1) < C ? c : C) << 2, u += a.r = b[c], v += a.g = b[c + 1], n += a.b = b[c + 2], h += u, k += v, l += n, a = a.next, m += p = g.r, x += q = g.g, y += r = g.b, u -= p, v -= q, n -= r, g = g.next, d += 4;
            O += z
        }
        for (w = 0; w < z; w++) {
            v = n = u = k = l = h = 0;
            d = w << 2;
            m = f * (p = b[d]);
            x = f * (q = b[d + 1]);
            y = f * (r = b[d + 2]);
            h += I * p;
            k += I * q;
            l += I * r;
            g = N;
            for (a = 0; a < f; a++)g.r = p, g.g = q, g.b = r, g = g.next;
            c = z;
            for (a = 1; a <= t; a++)d = c + w << 2, h += (g.r = p = b[d]) * (A = f - a), k += (g.g = q = b[d + 1]) * A, l += (g.b = r = b[d + 2]) * A, u += p, v += q, n += r, g = g.next, a < E && (c += z);
            d = w;
            a = N;
            g = B;
            for (H = 0; H < G; H++)c = d <<
                2, b[c] = h * J >> K, b[c + 1] = k * J >> K, b[c + 2] = l * J >> K, h -= m, k -= x, l -= y, m -= a.r, x -= a.g, y -= a.b, c = w + ((c = H + f) < E ? c : E) * z << 2, h += u += a.r = b[c], k += v += a.g = b[c + 1], l += n += a.b = b[c + 2], a = a.next, m += p = g.r, x += q = g.g, y += r = g.b, u -= p, v -= q, n -= r, g = g.next, d += z
        }
        F.putImageData(D, M, L)
    }
}
function BlurStack() {
    this.a = this.b = this.g = this.r = 0;
    this.next = null
};