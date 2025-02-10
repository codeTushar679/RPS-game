const gameBox = document.querySelector('.gameContainer')
const yourResult = document.querySelector('#yourResult img')
const botResult = document.querySelector('#botResult img')
const result = document.querySelector('#result')
const options = document.querySelectorAll('#hands')


options.forEach((image,index) => {
    image.addEventListener('click', (a) => {
        image.classList.add('active')

        yourResult.src = botResult.src = './images/stone hand.png'
        result.innerHTML = 'Wait...'

        options.forEach((image2, index2) => {
            index != index2 && image2.classList.remove('active')
            // console.log(a.target);
        });

        gameBox.classList.add('start')
        
        
        const time = setTimeout(() => {
            gameBox.classList.remove('start')
            
            let imageLink = a.target.src
            yourResult.src = imageLink
    
            
            const randomImage = Math.floor(Math.random()*3)
            const botImages = ['./images/stone hand.png', './images/paper hand.png', './images/scissor hand.png']
            botResult.src = botImages[randomImage]
    
    
            const botValue = ['R', 'P', 'S'] [randomImage]
            const yourValue = ['R', 'P', 'S'] [index]
    
            let possibleOutcomes = {
                RR : 'Draw', 
                RP : 'Bot', 
                RS : 'You', 
                PR : 'You', 
                PP : 'Draw', 
                PS : 'Bot', 
                SR : 'Bot', 
                SP : 'You', 
                SS : 'Draw', 
            }
    
            let outcomeValue = possibleOutcomes[yourValue+botValue]
            // console.log(outcomeValue);
    
    
            result.innerHTML = yourValue === botValue ? 'Tie !!' : `${outcomeValue} Won!!`
        }, 2000)


        
    });
});