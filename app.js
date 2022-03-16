// declaring variables
const firstDate = document.getElementById('first-date');
const secondDate = document.getElementById('second-date');
const button = document.getElementById('button');
const outputBlock = document.getElementById('output-block')

// Event listeners
button.addEventListener('click',getTime);

// functions
// getTimeFunction

function getTime(){
    const date1 = new Date(firstDate.value);
    const date2 = new Date(secondDate.value);
    const time = Math.abs(date1 - date2);
    const days = Math.floor(time / (1000*60*60*24))
    const month = Math.floor(days/31);
    const years = Math.floor(month/12);
    let updatedDay;
    if(days > 30){
        updatedDay = Math.floor(days % 30)
    } 
    else{
        updatedDay = days
    }  
    let updatedMonth;
    if(month > 12){
        updatedMonth = Math.floor(month % 12)
    }
    else{
        updatedMonth = month
    }
    if(firstDate.value == '' && secondDate.value == ''){
        alert('enters date')
        window.onload();
    }
    outputBlock.innerHTML = `
    <div class="year-block">
        <h3>Years</h3>
        <h3 style="text-align:center">${years}</h3>
    </div>
    <div class="months-block">
        <h3>Months</h3>
        <h3 style="text-align:center">${updatedMonth}</h3>
    </div>
    <div class="days-block">
        <h3>Days</h3>
        <h3 style="text-align:center">${updatedDay}</h3>
    </div>
    `
}



