var UndergroundSystem = function() {
    this.completedTrips = {};
    this.inProgressTrips = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.inProgressTrips[id] = { startStation: stationName, startTime: t };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let { startStation, startTime } = this.inProgressTrips[id];
    
    if(this.completedTrips.hasOwnProperty(startStation)) {
        let parent = this.completedTrips[startStation];
        
        if(!parent.hasOwnProperty(stationName)) {
            parent[stationName] = [];
        }
        
        let data = this.completedTrips[startStation][stationName];
        data.push(t - startTime);
    } else {
        this.completedTrips[startStation] = { [stationName]: [t - startTime] };
    }
    
    delete this.inProgressTrips[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let data = this.completedTrips[startStation][endStation];
    let len = data.length;
    
    let sum = 0;
    
    for(let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    
    return sum / len;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */