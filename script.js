// Here we create a string which store and display our inputs and when our input is equal to = then evaluate the string 
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
        document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })
})
