// DESCRIPTION:
//     Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// SOLUTION:

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

console.log("getVolumeOfCuboid: ", Kata.getVolumeOfCuboid(1,2,2))