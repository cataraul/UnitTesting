function return_string(){
    let mgs = "This is indeed a string";
    return mgs;
}
function perform_add(a,b){
    return a+b;
}
function perform_sub(a,b){
    return a/b;
}
function perform_mul(a,b){
    return a*b;
}
function perform_div(a,b){
    if(b!==0){
        return a/b;
    }else{
        return undefined;
    }
}
function return_array(){
    let arr = ['John','David','James'];
    return arr;
}
function return_object(){
    let student = {
        name:'Henry taylor',
        subjects:['Algebra','Geography','English','Economics']
    }
    return student;
}
function is_even(num){
    if(num%2==0){
        return true;
    }
    return false;
}

function throw_this_error(error){
    throw error;
}
function throw_error(){
    throw new Error("Denominator cannot be zero");
}
function throw_exp_str(){
    throw "Denominator cannot be zero";
}
function throw_exp_arr(){
    throw ["Denominator cannot be zero"];
}
function throw_exp_num(){
    throw 0;
}
function throw_exp_bool(){
    throw false;
}

function result_using_promise(expect_55){
    if(expect_55==55){
        return new Promise((resolve,reject)=>{
            resolve(expect_55);
        })
    } else{
        return new Promise((resolve, reject)=>{
            reject(expect_55);
        })
    }
}

class Shape{
    constructor(shapetype, color){
        this.shapetype = shapetype;
        this.color=color;
    }

    getShapeType(){
        return this.shapeType;
    }
    getColor(){
        return this.color;
    }
}

class Rectangle extends Shape{
    constructor(color){
        super("rectangle",color);
    }
}

class Circle extends Shape {
    constructor(color){
        super("circle",color);
    }
}

function return_shape(shapeType,color){
    return new Shape(shapeType,color);
}
function return_rectangle(color){
    return new Rectangle(color);
}
function return_circle(color){
    return new Circle(color);
}

module.exports = {
    return_string,
    perform_add,perform_div,perform_mul,perform_sub,
    return_array, return_object,
    is_even,
    throw_exp_arr,throw_error,throw_exp_bool,throw_exp_num,throw_exp_str,throw_this_error,
    result_using_promise,
    return_shape,return_rectangle,return_circle,
    Shape,Rectangle,Circle
}