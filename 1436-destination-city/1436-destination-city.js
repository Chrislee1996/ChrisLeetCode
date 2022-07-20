/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
//     let set = new Set()
//     for (let path of paths) {
//         set.add(path[0])
//     }

//     for (let path of paths) {
//         if (!set.has(path[1])) return path[1]

//     }
    
     const hash = new Map(paths);
      for(const places of hash.values()) {
        if (!hash.has(places)) return places;
  }
};