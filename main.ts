//% color="#0fbc11" icon="\uf185"
namespace fastiExtensions {

    //% group="Zufallszahlen"
    //% block="Zufällige Zahl zwischen  in cm |%pin"
    //% subcategory="Zufallszahl Sensoren" weight=100
    export function getRandomValue(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}
