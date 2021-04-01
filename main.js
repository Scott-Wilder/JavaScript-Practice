let array = [];
for (let i = 0; i < 10; i++){
array.push('Hello World');
}
console.log(array);

class User {
    constructor(FirstName, LastName, DOB, Email) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DOB = DOB;
        this.Email = Email;
    }
  fullname(){
      console.log(`Welcome ${this.FirstName} ${this.LastName}`);
  }
}
let user = new User ('Scott', 'Wilder', '4-19-1997', 'scott@email.com');
user.fullname();
console.log(user);  
console.log(Object.entries(user));

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter fields');
        msg.classList.add('error'); //adds error class from csss
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000); // msg class removed after 3 secs
    } else {
        console.log('success');
        const li = document.createElement('li'); // create list item
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //add text node with input values
        userList.appendChild(li); 

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}
