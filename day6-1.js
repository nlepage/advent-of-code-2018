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

const w = xMax - xMin
const h = yMax - yMin

const W = 3 * w
const H = 3 * h

coords = coords.map(([x, y]) => [x + w, y + h])

const grid = Array(H)
for (let y = 0; y < H; y++) {
    grid[y] = Array(W)
}

coords.forEach(([x, y], i) => {
    grid[y][x] = i
})

function* genClaims(D) {
    for (let i = 0; i < coords.length; i++) {
        const [x, y] = coords[i]
        for (let d = 0; d < D; d++) {
            yield [x + d, y - D + d, i]
            yield [x + D - d, y + d, i]
            yield [x - d, y + D - d, i]
            yield [x - D + d, y - d, i]
        }
    }
}

let d = 1
while (true) {
    const claims = [...genClaims(d)]
        .filter(([x, y]) => x >= 0 && x < W && y >= 0 && y < H)
        .filter(([x, y]) => grid[y][x] === undefined)
    
    if (claims.length === 0) break

    claims.forEach(([x, y, i]) => {
        if (grid[y][x] === undefined)
            grid[y][x] = i
        else
            grid[y][x] = -1
    })

    d++
}

const infinites = new Set()
for (let x = 0; x < W; x++) {
    infinites.add(grid[0][x])
    infinites.add(grid[H - 1][x])
}
for (let y = 0; y < H; y++) {
    infinites.add(grid[y][0])
    infinites.add(grid[y][W - 1])
}

const counts = Array(coords.length).fill(0)

for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
        const i = grid[y][x]
        if (i !== -1 && !infinites.has(i)) counts[i]++
    }
}

console.log(counts.reduce((acc, c) => Math.max(acc, c)))
