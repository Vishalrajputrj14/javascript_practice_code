const student = {
    name: 'John',
    age: 20,
    marks : 95,
    printMArks: function() {
        console.log("Marks = ",this.marks);
    },

};

const karanArjun0 = {
    salary: 100000,
};

const karanArjun1 = {
    salary: 100000,
};


const karanArjun2 = {
    salary: 100000,
};


const karanArjun3 = {
    salary: 100000,
};


const karanArjun4 = {
    salary: 100000,
};


const karanArjun5 = {
    salary: 100000,
};
karanArjun0.__proto__ = student;
karanArjun1.__proto__ = student;
karanArjun2.__proto__ = student;
karanArjun3.__proto__ = student;
karanArjun4.__proto__ = student;
karanArjun5.__proto__ = student;


 class toyotacar{
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start(){
        console.log("Engine started");
    }
    stop(){
        console.log("Engine stopped");
    }
    setBrand(brand){
        this.brand = brand;
    }
 }
 let fortuner = new toyotacar("fortuner");//constructor is called
 let lexus = new toyotacar("lexus");//constructor is called


 class parson{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
 }

 class Engineer extends parson{
    work(){
        console.log("solve problems,build something");
    }
 }

 class Doctor extends parson{
    work(){
        console.log("treat patients");
    }
 }
 let vishalobj = new Engineer();



