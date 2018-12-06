const input = `300, 90
300, 60
176, 327
108, 204
297, 303
101, 236
70, 102
336, 153
260, 265
228, 221
119, 267
310, 302
291, 164
190, 202
298, 228
292, 262
53, 251
176, 64
170, 160
71, 42
314, 51
71, 88
319, 150
192, 322
270, 88
165, 203
262, 340
301, 327
135, 324
97, 250
161, 231
305, 344
295, 213
320, 219
172, 269
151, 150
215, 128
167, 102
158, 138
307, 353
358, 335
163, 329
234, 147
58, 298
228, 50
151, 334
108, 176
335, 235
296, 263
80, 233`

let coords = input.split('\n').map(s => s.split(', ').map(t => +t))

const [xMin, yMin] = coords.reduce(([X, Y], [x, y]) => [Math.min(X, x), Math.min(Y, y)])
const [xMax, yMax] = coords.reduce(([X, Y], [x, y]) => [Math.max(X, x), Math.max(Y, y)])

let c = 0
for (let Y = yMin; Y <= yMax; Y++) {
    for (let X = xMin; X <= xMax; X++) {
        const d = coords
            .map(([x, y]) => Math.abs(x - X) + Math.abs(y - Y))
            .reduce((acc, d) => acc + d)
        if (d < 10000) c++
    }
}

console.log(c)
