//classe representando um herói
class hero{
    constructor (name, age, kind, power)
    {
        this.name = name
        this.age = age
        this.kind = kind
        this.power = power
    }
    atacar() {
        console.log(`${this.kind} atacou usando${this.power}`)
        
    }

}
//  herí do onmyoji Arena
const hero1 = new hero("Kise", "30", "monge", "artes maciais")
hero1.atacar()