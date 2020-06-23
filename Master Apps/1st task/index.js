while(num = readline()) {
    for (i = 0; i <= num; i++){
    while (day = readline()){
    	 let inputArray = ([day, month, year]=day.split(' '))
		 let inputArrayReverse = inputArray.reverse(month,day,year)
		 let date = new Date(inputArrayReverse)

        var days = new Array(7);
            days[0] = "Sunday";
            days[1] = "Monday";
            days[2] = "Tuesday";
            days[3] = "Wednesday";
            days[4] = "Thursday";
            days[5] = "Friday";
            days[6] = "Saturday";
            
	print(days[date.getDay()])
    }
    }
    }