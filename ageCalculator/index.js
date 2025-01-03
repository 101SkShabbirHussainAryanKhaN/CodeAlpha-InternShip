function calculate() {
    let year;
    let month;
    let day;
    let currentDay = parseInt(cd.value.slice(8,10), 10) 
    let currentMonth = parseInt(cd.value.slice(5,7), 10) 
    let currentYear = parseInt(cd.value.slice(0,4), 10)
    console.log(currentDay,currentMonth,currentYear)
    
    let birthDay = parseInt(dob.value.slice(8,10), 10) 
    let birthMonth = parseInt(dob.value.slice(5,7), 10) 
    let birthYear = parseInt(dob.value.slice(0,4), 10)
    console.log(birthDay,birthMonth,birthYear)
    if(currentDay>=birthDay)
    {
        day = currentDay - birthDay;
    }
    else
    {
        day = currentDay + new Date(currentYear, currentMonth).getData - birthDay;
        currentMonth--;
    }
    if(currentMonth>=birthMonth)
    {    
        month = currentMonth - birthMonth;
    }
    else
    {
        month = currentMonth + 12 - birthMonth;
        currentYear--;
    }
    year = currentYear - birthYear;
    if (year<0)
    {
        document.getElementById("realAge").innerHTML = `Brother what are you doing, you are about to born after ${year} years ${month} months ${day} days`
    }
    else
    {
        document.getElementById("realAge").innerHTML = `${year} years ${month} months ${day} days`;
    }

    
}