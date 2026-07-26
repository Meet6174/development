const student={
    age:20,
    name:'meet',
    num:36,
    display()
    {
        console.log(this.age);
    },
   getdisplay()
    {
        return this.display;
    }
};

x=student.getdisplay();
x();