//% color="#0fbc11" icon="\uf185"
namespace fastiExtensions {

    //% group="Zufallszahlen"
    //% block="Zufällige Zahl zwischen |%min (0) und |%max (100)"
    //% subcategory="Zufallszahl" weight=100
    export function getRandomValue(min?: number, max?: number): number {
        if (min == undefined) {
            min = 0;
        }
        if (max == undefined) {
            max = 100;
        }
        return Math.random() * (max - min) + min;
    }
}
