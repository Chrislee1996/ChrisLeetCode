class UndergroundSystem {
    constructor() {
        this.checkins = new Map()
        this.routes = new Map()
    }
    checkIn(id, stationName, t) {
        this.checkins.set(id, [stationName, t])
    };
    checkOut(id, stationName, t) {
        let [stn, start] = this.checkins.get(id),
            route = stn + "," + stationName
        this.checkins.delete(id)
        if (!this.routes.has(route))
            this.routes.set(route, new Uint32Array(2))
        let trip = this.routes.get(route)
        trip[0]++, trip[1] += t - start
    };
    getAverageTime(startStation, endStation) {
        let [count, sum] = this.routes.get(startStation + "," + endStation)
        return sum / count
    };
};