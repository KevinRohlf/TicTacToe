let fields = [];

let currentShape = 'cross';


function fillShape(id) {
    fields[id] = currentShape;
    changeShape();
    console.log(fields)
}

function changeShape() {
    if (currentShape == 'cross') {
        currentShape = 'circle'
    } else {
        currentShape = 'cross'
    };
}

