
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
    console.log(wordsEl);
    console.log("made it to startup.js");

    const wordArray = wordsEl.value.split("-");
    saveSolution(wordArray);
    addSolution(wordArray)
    // console.log(wordArray)
    isValid(wordArray)
    alert("you entered " + wordArray.join(","))
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
    window.location.href = `solutions.html?content=${encodeURIComponent(wordArray)}`;
    // addSolution(wordArray)
    console.log("made it to line 29")
    // invalidWords = checkValidWords(wordArray)
    // if(invalidWords.length != 0){
    //   console.log(invalidWords + " are not valid words")
    // }

    console.log("passed")
  }

  function checkRule2(wordArray){
    wordArray.forEach(function(element) {
        console.log(element.length < 3)
        if (element.length < 3){
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
  function addSolution(wordArray){
    
    console.log("made it to line 70")
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1); // We are adding at the end
   
      // Create table cells
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);

      // Add data to c1 and c2
      c1.innerText = getDate()
      c2.innerText = wordArray
      c3.innerText = "puzzle-placeholder"
   }
   function getDate(){
      const currentDate = new Date();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to adjust to 1-based month, and pad with 0 if needed.
      const day = String(currentDate.getDate()).padStart(2, '0');
      const year = currentDate.getFullYear();
      return`${month}-${day}-${year}`;
   }

   async function saveSolution(solution) {
    // const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newSolution = {solution: solution, date: date};

    try {
      const response = await fetch('/api/solutions', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newSolution),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('solutions', JSON.stringify(solution));
    } catch {
      // If there was an error then just track scores locally
      alert("there was an error")
    }
  }
  

//    document.getElementById('svgJoke').addEventListener('click', () => {
//     // When SVG is clicked, fetch a joke from the backend
//     fetch('/api/joke')
//         .then(response => response.json())
//         .then(data => {
//             // Display the joke on the page
//             alert(data.joke)
//         })
//         .catch(error => console.error('Error fetching joke:', error));
// });

  // function checkValidWords(wordArray){
  //   var mydata = JSON.parse(dictionary.json);
  //     // const response = await fetch('dictionary.json');
  //     // const dictionary = await response.json();
  //     const missingWords = wordArray.filter(word => !mydata.includes(word));
  //     return missingWords;
  //   // } catch (error) {
  //   //   console.error('An error occurred while fetching the JSON file:', error);
  //   // }
  // }
