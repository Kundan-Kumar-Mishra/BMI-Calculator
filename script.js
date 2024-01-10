
const form = document.querySelector("form");

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
    //prevent the event 
    e.preventDefault();
    
    //getting input from user and typecasting into integer
    const height = parseInt(document.getElementById("height").value);
    const width = parseInt(document.getElementById("width").value);

    const result = document.querySelector("#results");
    
    // Checking the user providing a proper
    // value or not
    if (height === " " || height < 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height";
    }
    else if (width === " " || width < 0 || isNaN(width)) {
        result.innerHTML = "please give a valid width";
    }
    else {//if both input is valid
         
        //calcute BMI upto 2 decimal
        const bmi = (width / ((height * height) / 10000)).toFixed(2);
       
        if(bmi<18.6)
        {
            result.innerHTML = "Under Weight: " + bmi;
        }
        else if(bmi>=18.6 && bmi<24.9)
        {
            result.innerHTML = "Normal Range: " + bmi
        }
        else
        {
            result.innerHTML = "OverWeight: " + bmi
        }
    }
})
