/**
 * @param {number[][]} image
 * @param {number} row (y)
 * @param {number} column (x)
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, row, column, color) {
    
    const imageSizeY = image.length;
    const imageSizeX = image[0].length;
    const orginalColor = image[row][column];
    const cardinalDirections = [[0,1],[0,-1],[1,0],[-1,0]]
    //[y,x] : right, left, up, down

    const pixelQueue = [[row, column]];
    const pixelsVisited = Array.from({length: imageSizeY}, y => (
                            Array.from({length: imageSizeX} , x => false))
                          )
    // M x N matrix all values set to false



    while (pixelQueue.length !== 0) {

        [currentRow, currentColumn] = pixelQueue.shift();

        if (pixelsVisited[currentRow][currentColumn]) continue;

        for (let direction of cardinalDirections) {
            [y,x] = direction;
            if (currentRow + y >= 0 && currentRow + y < imageSizeY 
                && currentColumn + x >= 0 && currentColumn + x < imageSizeX) {
            //check if inbounds of image
                if (!pixelsVisited[currentRow + y][currentColumn + x] 
                    && image[currentRow + y][currentColumn + x] === orginalColor) {
                //check if unvisited, false means unvisited and should be visited
                //check if same color, true means should be visited
                    pixelQueue.push([currentRow + y,currentColumn + x])
                }
            }
        }
        //surrounding 4 pixels to the queue

        image[currentRow][currentColumn] = color;
        pixelsVisited[currentRow][currentColumn] = true;    
    }

    return image;
};