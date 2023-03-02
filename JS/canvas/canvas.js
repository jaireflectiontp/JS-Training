let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = "5px solid red";

let canvas_height = canvas.height;
let canvas_width = canvas.width;

let shapes = [];
let current_shape_index = null
shapes.push({ x: 0, y: 0, width: 200, height: 200, color: "red" });
shapes.push({ x: 0, y: 0, width: 100, height: 100, color: "blue" });
let is_dragging = false;
let is_mouse_in_shape = (x, y, shape) => {
    let shape_left = shape.x;
    let shape_right = shape.x + shape.width;
    let shape_top = shape.y;
    let shape_bottom = shape.y + shape.height;

    if (x > shape_left && x < shape_right && y > shape_top && y < shape_bottom) {
        return true
    }
    return false
}

let mouse_down = (event) => {
    event.preventDefault

    let startX = parseInt(event.clientX);
    let startY = parseInt(event.clientY);
    let index = 0
    for (let shape of shapes) {
        if (is_mouse_in_shape(startX, startY, shape)) {
            current_shape_index = index
            is_dragging = true
            return;
        }
        index++
    }

}

let mouse_up = (event) => {
    event.preventDefault

   
    
        if (!is_dragging) {
           
        }
        index++
    

}
canvas.onmousedown = mouse_down
let draw_shapes = () => {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    for (let shape of shapes) {
        ctx.fillStyle = shape.color;
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height)
    }
}
draw_shapes()