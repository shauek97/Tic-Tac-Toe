function gameEngine(){

    const circleBtn = document.querySelector('#circle');
    const crossBtn = document.querySelector('#cross');
    const instruction = document.querySelector('.instruction');
    const htmlText1 = document.querySelector('#box1-input');
    const htmlText2 = document.querySelector('#box2-input');
    const htmlText3 = document.querySelector('#box3-input');
    const htmlText4 = document.querySelector('#box4-input');
    const htmlText5 = document.querySelector('#box5-input');
    const htmlText6 = document.querySelector('#box6-input');
    const htmlText7 = document.querySelector('#box7-input');
    const htmlText8 = document.querySelector('#box8-input');
    const htmlText9 = document.querySelector('#box9-input');
    const boardPlaces = document.querySelectorAll('.box');
    const resultText = document.querySelector('#result-text');
    const resetBtn = document.querySelector('#reset');
    let choosenSign = '';
    
    circleBtn.addEventListener('click', function(){
        choosenSign = 'O';
        console.log(choosenSign);
        instruction.classList.remove('hidden')
    });

    crossBtn.addEventListener('click', function(){
        choosenSign = 'X';
        console.log(choosenSign);
        instruction.classList.remove('hidden')
    });
  
    function boardPlClickHandler (){
        
        const clickedElement = this;
        let h3Text = clickedElement.getElementsByTagName('h3')[0];
        h3Text.innerHTML = choosenSign;
      
        if(choosenSign === 'O'){
            choosenSign = 'X';
        }
        else if(choosenSign === 'X'){
            choosenSign = 'O';
        }; 
    
        //winning combinations
        if(htmlText1.innerHTML === "X" && 
        htmlText2.innerHTML === "X" &&
        htmlText3.innerHTML === "X" ||
        htmlText4.innerHTML === "X" &&
        htmlText5.innerHTML === "X" &&
        htmlText6.innerHTML === "X" ||
        htmlText7.innerHTML === "X" &&
        htmlText8.innerHTML === "X" &&
        htmlText9.innerHTML === "X" ||
      
        htmlText1.innerHTML === "X" && 
        htmlText4.innerHTML === "X" &&
        htmlText7.innerHTML === "X" ||
        htmlText2.innerHTML === "X" &&
        htmlText5.innerHTML === "X" &&
        htmlText8.innerHTML === "X" ||
        htmlText3.innerHTML === "X" &&
        htmlText6.innerHTML === "X" &&
        htmlText9.innerHTML === "X" ||
       
        htmlText1.innerHTML === "X" && 
        htmlText5.innerHTML === "X" &&
        htmlText9.innerHTML === "X"){
            resultText.innerHTML = '"X" WON!';
        }
        
        else if(htmlText1.innerHTML === "O" && 
        htmlText2.innerHTML === "O" &&
        htmlText3.innerHTML === "O" ||
        htmlText4.innerHTML === "O" &&
        htmlText5.innerHTML === "O" &&
        htmlText6.innerHTML === "O" ||
        htmlText7.innerHTML === "O" &&
        htmlText8.innerHTML === "O" &&
        htmlText9.innerHTML === "O" ||
        
        htmlText1.innerHTML === "O" && 
        htmlText4.innerHTML === "O" &&
        htmlText7.innerHTML === "O" ||
        htmlText2.innerHTML === "O" &&
        htmlText5.innerHTML === "O" &&
        htmlText8.innerHTML === "O" ||
        htmlText3.innerHTML === "O" &&
        htmlText6.innerHTML === "O" &&
        htmlText9.innerHTML === "O" ||
        
        htmlText1.innerHTML === "O" && 
        htmlText5.innerHTML === "O" &&
        htmlText9.innerHTML === "O"){
            resultText.innerHTML = '"O" WON!';
        }
        else if(
        htmlText1.innerHTML !== '' && 
        htmlText2.innerHTML !== '' &&
        htmlText3.innerHTML !== '' &&
        htmlText4.innerHTML !== '' &&
        htmlText5.innerHTML !== '' &&
        htmlText6.innerHTML !== '' &&
        htmlText7.innerHTML !== '' &&
        htmlText8.innerHTML !== '' &&
        htmlText9.innerHTML !== ''){
            resultText.innerHTML = 'Draw, try again!'; 
        }
    }
  
    for(let boardPlace of boardPlaces){
        boardPlace.addEventListener('click', boardPlClickHandler.bind(boardPlace));
    };
  
    resetBtn.addEventListener('click', function(){

        instruction.classList.add('hidden');
        resultText.innerHTML = '';
        choosenSign = '';

        for(let boardPlace of boardPlaces){
            boardPlace.getElementsByTagName('h3')[0].innerHTML = '';
        }
    })
};

gameEngine();

