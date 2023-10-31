
function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
    alert('Hello ' + nameEl.value + '!');
    console.log("this works")
  }
  
  function parse() {
    // alert("test")
    const wordsEl = document.querySelector("#words");
    const wordArray = wordsEl.value.split("-");
    // console.log(wordArray)
    isValid(wordArray)
  }

  function isValid(wordArray){
    if(checkRule4(wordArray) === false){
        console.log("The last letter of a word should be the first letter of the next word ")
        return false;
    }
    
    if(checkRule2(wordArray) === false){
        console.log("Words must be at least 3 letters long")
        return false;
    }
    invalidWords = checkValidWords(wordArray)
    if(invalidWords.length != 0){
      console.log(invalidWords + " are not valid words")
    }

    console.log("passed")
  }

  function checkRule2(wordArray){
    wordArray.forEach(function(element) {
        console.log(element.length < 3)
        if (element.length < 3 | element){
            return false;
            console.log("false")
        }
    });
    return true;
  }

  function checkRule4(words){
    // console.log("made it here")
    if (words.length < 2) {
        return true;
    }

    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i + 1];

        const lastLetterCurrent = currentWord[currentWord.length - 1];
        const firstLetterNext = nextWord[0];
        // console.log(lastLetterCurrent + " " + firstLetterNext)
        if (lastLetterCurrent.toLowerCase() !== firstLetterNext.toLowerCase()) {
            return false; // Rule is violated
        }
    }

    return true; // All words meet the rule
  }

  function checkValidWords(wordArray){
    var mydata = JSON.parse(dictionary.json);
      // const response = await fetch('dictionary.json');
      // const dictionary = await response.json();
      const missingWords = wordArray.filter(word => !mydata.includes(word));
      return missingWords;
    // } catch (error) {
    //   console.error('An error occurred while fetching the JSON file:', error);
    // }
  }
