let grid = [];
const nodes = 4
function random_unit_vector(){
    let theta = Math.random() * 2 * Math.PI;
    return {x: Math.cos(theta), y: Math.sin(theta)};
}
for (let i = 0; i < nodes; i++) {
    let row = [];
    for (let j = 0; j < nodes; j++) {
        row.push(random_unit_vecotr());
    }
    grid.push(row);
}
function perlin_get(x, y) {
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;
    return intensity;
}
function dot_prod_gird(x, y, vert_x, vert_y) {
    var g_vect = gradients[vert_y][vert_x];
    var d_vect = {x: x - vert_x, y: y - vert_y};
    return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
}
function lin_interp(x, a, b){
    return a + x * (b-a);
}
smootherstep: function(x){
    return 6*x**5 - 15*x**4 + 10*x**3;
},
interp: function(x, a, b){
    return a + smootherstep(x) * (b-a);
},