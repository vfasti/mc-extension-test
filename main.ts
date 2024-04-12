/**
 * My Extensions for micro:bit
 */

//% color="#0fbc11" icon="\uf185"
namespace fastiExtensions {

    //% group="Zufallszahlen"
    //% block="Zufällige Zahl zwischen |%min (0) und |%max (100)"
    //% subcategory="Zufallszahl" weight=100
    export function getRandomValueWithRange(min: number = 0, max: number = 100): number {
        return Math.random() * (max - min) + min;
    }
}