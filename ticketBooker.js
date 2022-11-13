theatre = {
    row1: [],
    row2: [],
    row3: [],
    row4: [],
    row5: [],
    row6: [],
    row7: [],
    row8: [],
    row9: [],
    row10: [],
    row11: [],
    row12: [],
}


maxLength = 7;
var numberOfTickets;



var BookNow = () => {
    // localStorage.setItem('theatre',JSON.stringify(theatre))
    // console.log(JSON.parse(localStorage.getItem('theatre')))
    numberOfTickets = document.getElementById('numberOfTickets').value;
    if (numberOfTickets < 1 || numberOfTickets > 6) {
        alert("Number should not be 0 or should not be greater than 6")
    } else {
        for (row in theatre) {
            if (theatre[row].length <= maxLength && (theatre[row].length + parseInt(numberOfTickets)) <= maxLength) {
                for(i=0;i<numberOfTickets;i++){
                    seat={}
                    seat.seatNumber = lastBookedTicket(row)+1;
                    seat.booked = true;
                    theatre[row].push(seat)
                }
                displayMessage(row,theatre[row])
                break;   
            }
        }
        localStorage.setItem('theatre',JSON.stringify(theatre))
        console.log(JSON.stringify(theatre))
        markSeat();

    }
}


var markSeat = () => {
    theatre = JSON.parse(localStorage.getItem('theatre'))
    console.log(theatre)
    var a = document.getElementsByTagName('tr');
    for(i=0;i<a.length;i++){
        for(j=0;j<theatre[`row${i+1}`].length;j++){
            a[i].children[j].style.backgroundColor = 'red'
        }
    }   
}


var lastBookedTicket = (row) => {
    console.log(theatre[row].length)
    if(theatre[row].length == undefined){
        return 0;
    }else{
        return theatre[row].length
    }
    
}


var rowsLength = () => {
    for (row in theatre) {
        lengths.push(theatre[row].length)
    }
    return lengths;
}

var EndShow = () =>{
    localStorage.clear('theatre')
    alert("session is ended")
}

var displayMessage = (rowName,row) =>{
    bookedTickets = []
    str = ''
    var a = document.getElementsByTagName('tr');
    for(q=0;q<a.length;q++){
        if(a[q].id == rowName){
            // console.log("inside this    ",a[q].children.length,row)
            for(i=0;i<row.length;i++){
                str = str+a[q].children[i].innerHTML+','
            }
            str = str.split(',')
            a = ''
            cnt = numberOfTickets
            for(k=str.length-2;cnt>0;k--){
                a = a+str[k]+','
                cnt--;
            }    
            document.getElementById('result').innerText = numberOfTickets+' seats boooked Successfully. Booked seat numbers are '+a;
            break
        }
    }
}