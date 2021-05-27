var weekDay = new Array(7);
weekDay[0] = "sunday";
weekDay[1] = "monday";
weekDay[2] = "tuesday";
weekDay[3] = "wednesday";
weekDay[4] = "thursday";
weekDay[5] = "friday";
weekDay[6] = "saturday";

var hourUnit = new Array(35);
hourUnit[0] = "1:00"

var mins  = new Array(3);
mins[0] = "00";
mins[1] = "20";
mins[2] = "40";
for(var i =12, k=0; i< 25; i++ ) {
    for(var j=0; j<3; j++,k++) {
        if(i == 13) { k--
            continue }
        hourUnit[k] = (i % 13).toString() +":"+(mins[j % 3]).toString()
    }
}

var ampm = new Array(2);
ampm[0] = "AM"
ampm[1] = "PM"

var contTime = new Array(72);

for(var w = 0, a=0; w<1; w++) {
    for(var p = 0; p<2; p++) {
        for(var h = 0; h<36; h++) {
            
            contTime[a] = weekDay[w] +":"+hourUnit[h]+":"+ampm[p]
            a++
        }
        if( a != 36) a++
    }
}

console.log(contTime)

