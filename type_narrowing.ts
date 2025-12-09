export {}
function dish(kind: string | number) {
    if (typeof kind === "string") {
        console.log(`Making your favourite ${kind} dish.`)
    } else {
        console.log(`Taking ${kind} as your order.`)
    }
}
dish(465);
// this specificaation and more gaurenteed results from typescript is known as type narrowing

// another example
function reply(msg?: string) {
    if (msg) {
        console.log(`Serving ${msg}`)
    }
    console.log(`Serving default menu list.`)
}
reply("Chicken");
// so here we gauranteed that if msg is true or not 

function getsize(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return ` Making burger of  ${size} size.`
    }
    if (size === "medium" || size === "large") {
        return `Making an extraordinary burger.`
    }
    else {
        return `Offering burger of size ${size}`
    }
}
console.log(getsize("medium"))
//this is called exaustive checking 

// Class checking
class ilaachiChai {
    serve() {
        return `Serving you ilaachi Chai`
    }
}
class qahwa {
    serve() {
        return `Serving you Peshawari Qahwa`
    }
}
function serve(chai: ilaachiChai | qahwa) {
    if (chai instanceof ilaachiChai) {
        return chai.serve();
    }
}

// in typescript we can also make our custom types

type laptop = {
    company: string
    year: number
}
function orderlaptop(obj: any): obj is laptop {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.company === "string" &&
        typeof obj.year === "number"
    )
}

function order(item: laptop | string){
    if (orderlaptop(item)){
        return `Sending ${item.company} laptop of ${item.year} model.`
    }
    return `We will look for ${item} laptop in the market.`
}

// 
type bigmotor = {type : "v8" , wheelsize : number }
type smallmotor = {type : "alto" , wheelsize : number }
type heavybike = {type : "xiamec" , wheelsize : number }

type vehicle = bigmotor | smallmotor | heavybike
function takerent(order:vehicle){
    switch (order.type) {
        case "v8":
            return "v8 is coming soon.."
            break;
        case "alto":
            return "alto will be at your home in 5sec.."
            break;
        case "xiamec":
            return "xiamiec is not available at the moment.."
            break;
    }

}

