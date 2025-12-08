function dish(kind:string | number){
    if(typeof kind === "string"){
        console.log(`Making your favourite ${kind} dish.`)
    }else{
        console.log(`Taking ${kind} as your order.`)
    }
}
dish(465);