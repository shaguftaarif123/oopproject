#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcom guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "What do you want..",
            name: "select",
            choices: ["himself: self", "student"],
        });
        if (ans.select == "himself:self") {
            console.log("hello me talk with my self");
            console.log("i am perfect.");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "which student do you want to talk?",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}, i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I am ${student.name}, i am fine thanks........`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
