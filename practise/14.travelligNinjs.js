function findMinCoins( n, days, costs) {
    const cache = new Map();
    console.log( minCoins(0, days, costs,cache));
    console.log( findMinTab(10, days, costs));

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

function findMinTab(n, days, costs) {

    const minCostTable = new Array(n + 1).fill( 0 );

    function findIfDayExist(day){
        let min = 0;
        let max = days.length - 1;

        while( min <= max){
            let mid = Math.trunc((min + max) / 2);
            if( days[mid] === day){
                return true;
            }
            if(min === max){
                return false;
            }
            if(days[mid] < day){
                min = mid+1;
            }else {
                max = mid;
            }
        }
        return false;
    }

    for(let d = 1; d <= n; d++){
        if( !findIfDayExist(d)){
            minCostTable[d]= minCostTable[d-1]
            console.log({d})
            continue;
        }

        // 1-day ticket
        let remainingDays = d - 1;
        let day1TicketCost = costs[0] +( minCostTable?.[remainingDays] ?? 0 )

        // 7-day ticket
        remainingDays = d - 7;
        let day7TicketCost = costs[1] +( minCostTable?.[remainingDays] ?? 0 )

        // 30-day ticket
        remainingDays = d - 30;
        let day30TicketCost = costs[2] +( minCostTable?.[remainingDays] ?? 0 )

        minCostTable[d] = Math.min( day1TicketCost, day7TicketCost, day30TicketCost)
    }
    return minCostTable[n];
}




findMinCoins( 0, [1 ,3, 4, 5,7 ,8 ,10], [2,7,20]);