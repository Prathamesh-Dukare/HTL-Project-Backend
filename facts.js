function randomFact(){
    const factsArr = [
        {
            facttext:"In a very basic form, eyes are thought to have first developed in animals around 550 million years ago!"
        },
        {
            facttext:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAin animals around 550 million years ago!"
        },
        {
            facttext:"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBght to have first developed in animals around 550 million years ago!"
        },
        {
            facttext:"CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCfirst developed in animals around 550 million years ago!"
        }
    ]
    let randomIndex =  Math.floor(Math.random() * (factsArr.length))
    return factsArr[randomIndex]
}

exports.randomFact = randomFact;


