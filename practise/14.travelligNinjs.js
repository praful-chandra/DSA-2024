function findMinCoins( n, days, costs) {
    const cache = new Map();
    console.log( minCoins(0, days, costs,cache));

}


function minCoins( d, days, costs,cache ) {

    if( d > days.length - 1){
        return 0;
    }

    if( cache.has(d)){
        return cache.get(d)
    }

// 1-Day Ticket
    const day1Cost = costs[0] + minCoins( d +1, days, costs,cache);

// 7-Day Ticket
    let currDay = d;
    while( currDay < days.length && days[currDay] < days[d] + 7){
        currDay++;
    }
    const day7Cost = costs[1] + minCoins(currDay, days, costs,cache);

// 30-Day Ticket
    currDay = d;
    while( currDay < days.length && days[currDay] < days[d] + 30){
        currDay++;
    }
    const day30Cost = costs[2] + minCoins(currDay, days, costs,cache);


    cache.set(d, Math.min(day1Cost, day7Cost, day30Cost));
    return cache.get(d);
}



findMinCoins( 0, [1 ,3, 4, 5,7 ,8 ,10], [2,7,20]);