// JavaScript Callbacks

function add(n1,n2){
    console.log("Addition is "+ (n1+n2));
}

function sub(m1, m2){
    console.log("Substraction is " + (m1-m2));
}

function calcy(numberOne,numberTwo,name,func){
    console.log("Hello "+name);

    func(numberOne,numberTwo);
    console.log("Thank You for using calcy")
}

calcy(2,5,"dipti",add) ;
// Hello dipti
// Addition is 7
// Thank You for using calcy

calcy(50,25,"Patil",sub);
// Hello Patil
// Substraction is 25
// Thank You for using calcy