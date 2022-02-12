function randomFact(){
    const factsArr = [
        {
            facttext:"In a very basic form, eyes are thought to have first developed in animals around 550 million years ago!"
        },
        {
            facttext:"You actually see with your brain, not your eyes. Our eyes function like a camera, capturing light and sending data back to the brain."
        },
        {
            facttext:"You see things upside down - it is your brain which turns the image the right way up."
        },
        {
            facttext:"In a single second, it’s possible to blink five times"
        },
        {
            facttext:"You are likely to blink more often when you are talking"
        },
        {
            facttext:"The eye is the fastest muscle in your body – hence why when something happens quickly, we say ‘in the blink of an eye!’"
        },
        {
            facttext:"A blink typically lasts 100-150 milliseconds"
        },
        {
            facttext:"The human eye can function at 100% at any given moment, without needing to rest"
        },
        {
            facttext:"Red-eye in photos is caused by light from the flash bouncing off the capillaries in your eyes."
        },
        {
            facttext:"If the human eye was a digital camera, it would have 576 megapixels"
        },
        {
            facttext:"On average, you will blink approximately 4,200,000 times in a single year."
        },
        {
            facttext:"We have two eyeballs in order to give us depth perception – comparing two images allows us to determine how far away an object is from us"
        },
        {
            facttext:"Eyes heal quickly. With proper care, it takes only about 48 hours to repair a minor corneal scratch"
        },
        {
            facttext:"The world’s most common eye colour is brown"
        },
        {
            facttext:"The first blue-eyed person is said to have lived 6,000-10,000 years ago"
        },
        {
            facttext:"Even if no one in the past few generations of your family had blue or green eyes, these recessive traits can still appear in later generations"
        },
        {
            facttext:"Blue-eyed people share a common ancestor with every other blue-eyed person in the world."
        },
        {
            facttext:"During a sight test, health conditions including diabetes and high blood pressure can be detected"
        },
        {
            facttext:"Diabetes is the number one cause of blindness in adults in the UK"
        },
        {
            facttext:"Research has found that a tie tied too tightly can increase the risk of glaucoma in men"
        },
        {
            facttext:"In the right conditions and lighting, humans can see the light of a candle from 14 miles away"
        },
        {
            facttext:"Heterochromia refers to a condition where eyes are two different colours"
        },
        {
            facttext:"Contrary to urban myth, contact lenses cannot become ‘lost’ behind your eye due to the structure of your eyeball"
        },
        {
            facttext:"Your eyes start to develop just two weeks after conception"
        },
        {
            facttext:"Although our nose and ears keep growing throughout our lives, our eyes remain the same size from birth."
        },
        {
            facttext:"All babies are colour blind at birth."
        },
        {
            facttext:"Colour blindness is more common in males."
        },
        {
            facttext:"A newborn baby will cry, but not produce any tears. Babies do not produce tears until they are around six weeks old"
        },
        {
            facttext:"Newborn babies can see objects about 8-15 inches away most clearly"
        },
        {
            facttext:"The older we get, the less tears we produce"
        },
        {
            facttext:"Blind people can see their dreams as long as they weren’t born blind"
        },
        {
            facttext:"80% of our memories are determined by what we see"
        },
        {
            facttext:"The only cells that survive from the time you are born until death are in your eyes"
        },
        {
            facttext:"Eyelashes have an average lifespan of five months"
        },
        {
            facttext:"If you lined up all the eyelashes shed during one human life, they would measure 98 feet long."
        },
        {
            facttext:"Your eyelashes keep dirt out of your eyes"
        },
        {
            facttext:"We have all have unseen, harmless microscopic creatures living in our eyelashes"
        },
        {
            facttext:"Your eyebrows prevent sweat dripping into your eyes"
        },
        {
            facttext:"The space between your eyebrows is called the Glabella"
        },
        {
            facttext:"It’s impossible to sneeze with your eyes open"
        },
        {
            facttext:"One of the most common cosmetic injuries is poking the eyeball with a mascara wand"
        },
        {
            facttext:"Our eyes close automatically to protect us from perceived dangers."
        },
        {
            facttext:"About half of the human brain is dedicated to vision and seeing"
        },
        {
            facttext:"People generally read 25% slower on screen than on paper"
        },
        {
            facttext:"When you read or stare at a computer, you blink less often resulting in tired eyes"
        },
        {
            facttext:"94% of visible premature-aging around the eyes is caused by UV damage"
        },
        {
            facttext:"Reading in dim lighting does not damage your eyes, but it may tire them out"
        },
        {
            facttext:"Dogs can’t distinguish between red and green"
        },
        {
            facttext:"An ostriches eye is bigger than its brain"
        },
        {
            facttext:"A shark's cornea is used in human eye surgery, as it is the most similar to the human cornea"
        },
        {
            facttext:"Scorpions can have as many as 12 eyes and the box jellyfish has 24!"
        },
        {
            facttext:"Camel's eyelashes can measure up to 10cm long to protect its eyelashes from blowing sand and debris in the desert."
        },
        {
            facttext:"The eyes of a chameleon are independent from each other, allowing it to look in two different directions at once"
        },
        {
            facttext:"Bees have 5 eyes"
        },
        {
            facttext:"Geckos can see colours around 350 times better than a human, even in dim lighting"
        },
        {
            facttext:"The cornea is the only tissue in the human body that doesn’t contain blood vessels"
        },
        {
            facttext:"Dolphins sleep with one eye open"
        },
        {
            facttext:"The largest eye on the planet belongs to the Colossal Squid, and measures around 27cm across."
        },
        {
            facttext:"Snakes have two sets of eyes – one set used to see, and the other to detect heat and movement"
        },
        {
            facttext:"A dragonfly has 30,000 lenses in its eyes, assisting them with motion detection and making them very difficult for predators to kill."
        },
        {
            facttext:"The four-eyed fish can see both above and below water at the same time"
        },
        {
            facttext:"Snakes have no eyelids, just a thin membrane covering the eye"
        },
        {
            facttext:"Goats have rectangular pupils to give them a wide field of vision"
        },
        {
            facttext:"Owls are the only bird which can see the colour blue"
        },
        {
            facttext:"Most hamsters only blink one eye at a time"
        },
        {
            facttext:"Guinea pigs are born with their eyes open!"
        },
        {
            facttext:"A worm has no eyes at all"
        },
        {
            facttext:"An owl can see a moving mouse more than 150 feet away"
        },
        {
            facttext:"A scallop has an average of 100 eyes around the edge of its shell to detect predators"
        },
        {
            facttext:"Owls cannot move their eyeballs – which has led to the distinctive way they turn their heads almost all the way around"
        },
        {
            facttext:"Some people have a fear of eyes; it’s called ommatophobia"
        },
        {
            facttext:"The muscles in the eye are 100 times stronger than they need to be to perform their function"
        },
        {
            facttext:"Eyes are the second most complex organ after the brain"
        },
        {
            facttext:"Only one sixth of the human eyeball is exposed"
        },
        {
            facttext:"Eyes are able to process 36,000 pieces of information in a single hour"
        },
        {
            facttext:"In an average life, your eyes will see 24 million different images"
        },
        {
            facttext:"The human eye only sees three colours: red, blue and green. All other colours are combination of these."
        },
        {
            facttext:"The human eye can see 500 shades of grey"
        },
        {
            facttext:"The cornea is the transparent covering of the iris and pupil"
        },
        {
            facttext:"Our eyes have small blind spots where the optic nerve passes through the retina, and our brains use the information from the other eye to fill this gap."
        },
        {
            facttext:"Smoking reduces your night vision"
        },
        {
            facttext:"Our eyes are positioned in a hollowed eye socket, to protect the eye"
        },
        {
            facttext:"80% of vision impairment worldwide is curable"
        },
        {
            facttext:"Our eyes are made up of over 2 million working parts"
        },
        {
            facttext:"The eyeball weighs around 28 grams"
        },
        {
            facttext:"The eye muscles are the most active muscles in the human body"
        },
        {
            facttext:"Eye transplants are currently impossible due to the sensitivity of the optic nerve"
        },
        {
            facttext:"Everyone has one eye that is slightly stronger than the other"
        },
        {
            facttext:"Just behind our pupil is the lens - which is round, flat and thicker toward the middle"
        },
        {
            facttext:"While a fingerprint has 40 unique characteristics, an iris has 256"
        },
        {
            facttext:"When working at a computer, you should follow the 20-20-20 rule – look at something twenty feet away from your computer every twenty minutes for twenty seconds"
        },
        {
            facttext:"When your eyes are watering it may be a sign of dry-eye, and your eyes are producing more moisture to compensate"
        },
        {
            facttext:"Oily fish, vitamin A and vitamin C can all help to preserve good eyesight. Check out our range of eye vitamins"
        },
        {
            facttext:"Although the function of tears is to keep eyes clean, scientists don’t understand why we cry when we are upset"
        },
        {
            facttext:"Your nose gets runny when you cry as the tears drain into your nasal passages"
        }
    ]
    // console.log(typeof factsArr)
    let randomIndex =  Math.floor(Math.random() * (factsArr.length))
    return factsArr[randomIndex]
}
randomFact()
exports.randomFact = randomFact;


