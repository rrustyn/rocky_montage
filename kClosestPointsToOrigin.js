/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distances = [];

    for (let i = 0; i < points.length; i++) {
        let [x,y] = points[i];
        let distance = x**2 + y**2;
        distances.push([distance, x, y]);
    }

    distances.sort((a,b) => a[0] - b[0]);

    let answer = []

    for (let i = 0; i < k; i++) {
        answer.push([distances[i][1],distances[i][2]]);
    }
    return answer;
};