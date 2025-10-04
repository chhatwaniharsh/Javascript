/* Variables */
var num1=20;
var num2=30;
console.log(num1+num2);

let num3=30;
let num4=40;
console.log(num3+num4);

const num5=20;
const num6=30;
console.log(num5+num6);

/* Primitive Datatypes */
var name="Harsh";
var num=36;
var value=true;
var age;
var rollno=null;

console.log(name)
console.log(typeof(name))
console.log(num)
console.log(typeof(num))
console.log(value)
console.log(typeof(value))
console.log(age)
console.log(typeof(age))
console.log(rollno)
console.log(typeof(rollno))

/* Non-Primitive Datatypes */

//1. Object:
obj={name:"Harsh",rollno:36,address:"Jalgaon"};
console.log(obj);

obj.age=21;
console.log(obj);

obj.address="Pune";
console.log(obj);

delete obj.address;
console.log(obj);

//2. Array:
array=[10,"Harsh","Jalgaon",21];
console.log(array);

console.log(array[1]);

array.push(36);
console.log(array);

array.pop();
console.log(array);

/* Operators */
var num1=36;
var num2='36';

//1. Arithmatic:
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

//2. Comparison:
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1===num2);

//3. Logical:
var a=true;
var b=false;

console.log(num1>num2 && num1>50);
console.log(num1>=num2 || num1>50);
console.log(num1<num2 || num1>50);
console.log(num1!=num2);
console.log(!(num1!=num2));
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);


/*
//3. Ternary:
var marks=Number(prompt("Enter Your Marks : "));

var result = marks>50?"Pass":"Fail";
console.log(result);
*/

/* Conditional Statements */

//1. If-Else:
age=20;         //var age=Number(prompt("Enter Your age : "))
if (age>=18)
{
    console.log("Eligible for voting");
}
else
{
    console.log("Not eligible for voting");
}

//2. If-Elseif-Else:
marks=96;       //var marks=Number(prompt("Enter Your marks : "))
if (marks>90)
{
    console.log("Grade A");
}
else if (marks>80)
{
    console.log("Grade B");
}
else if (marks>70)
{
    console.log("Grade C");
}
else if (marks>60)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

//3. Switch Case


/* Loops */

//1. For Loop:
var n=10;   //var n=Number(prompt("Enter a number : "))
for(let i=0;i<n;i++)
{
    console.log(i);
}

//1.1 For Loop 2:
var n=10;   //var n=Number(prompt("Enter a number : "))
var sum=0;
for(let i=0;i<n;i++)
{
    sum+=i;
}
console.log(sum);

//2. While Loop:
var i=1;   
while(i<=10)
{
    console.log(i*i);
    i++;
}

/* Questions */

//1. Even or Odd:
var a=25;   //var a=Number(prompt("Enter a number : "))
if (a%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

//2. Positive, Negative or Zero:
var n=-25;   //var n=Number(prompt("Enter a number : "))
if (n==0)
{
    console.log("Zero");
}
else if (n>0)
{
    console.log("Positive");
}
else
{
    console.log("Negative");
}

//3. Greatest of two numbers:
var a=25;   //var a=Number(prompt("Enter a number : "))
var b=25;   //var b=Number(prompt("Enter a number : "))
if (a==b)
{
    console.log("A is equal to B");
}
else if (a>b)
{
    console.log("A if greater than B");
}
else
{
    console.log("A is smaller than B");
}

//4. Marks Greater than 40 are Pass else Fail:
var marks=45;   //var marks=Number(prompt("Enter a number : "))
if (marks>=40)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

//5. Divisibility Check for 3 and 5:
var num=35;   //var num=Number(prompt("Enter a number : "))
if (num%3==0)
{
    if (num%5==0)
    {
        console.log("Number is divisible by 3 and 5 both");
    }
    else
    {
        console.log("Number is divisible by 3 but not with 5");
    }
}
else
{
    if (num%5==0)
    {
        console.log("Number is not divisible by 3 but is divisible with 5");
    }
    else
    {
        console.log("Number is neither divisible by 3 nor with 5");
    }
}

//6. Leap year Check:
var year=2025;   //var year=Number(prompt("Enter a number : "))
if (year%100!=0)
{
    if (year%4==0)
    {
        console.log("Leap year");
    }
    else
    {
        console.log("Not a leap year");
    }
}
else
{
    if (year%400==0)
    {
        console.log("Leap year");
    }
    else
    {
        console.log("Not a leap year");
    }
}

//7. Simple Login:
var user="admin";   //var user=prompt("Enter Username : ")
var pass=12345;   //var pass=Number(prompt("Enter Password : "))
if (user=="admin" && pass==1234)
{
    console.log("Login Successful");
}
else
{
    console.log("Invalid Credentials");
}

//8. Classify User as per their age:
var age=21;   //var age=Number(prompt("Enter your age : "))
if (age<13)
{
    console.log("Child");
}
else if (age>=13 && age<=19)
{
    console.log("Teen");
}
else if(age>=20 && age<=59)
{
    console.log("Adult");
}

//9. For Loop:

//9.1. Print 1 to 10:
for (var i=1;i<=10;i++)
{
    console.log(i);
}

//9.2. Table of 5:
for (var i=1;i<=10;i++)
{
    console.log(i*5);
}

//9.3. Sum of number from 1 to 50:
sum=0
for (var i=1;i<=50;i++)
{
    sum+=i;
}
console.log(sum);

//10. While Loop

//10.1. Print 10 to 1:
var i=10;
while (i>=1)
{
    console.log(i);
    i--;
}

//10.2. Factorial of number:
var num=6;   //var num=Number(prompt("Enter a number : "))
var fact=1;
var n=1;
while (n<=num)
{
    fact=fact*n;
    n++;
}
console.log(fact);

//10.3. First 10 even numbers:
var n=2;   //var n=Number(prompt("Enter a number : "))
var i=1
while(i<=10)
{
    console.log(i*n);
    i++;
}
