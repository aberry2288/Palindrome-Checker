function getValues() {

    let userString = document.getElementById('checkerInput').value;

    let results = checkForPalindrome(userString);

    displayResults(results);

}

function checkForPalindrome(userString) {

    let revString = '';

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, '');

    for (let index = userString.length - 1; index >= 0; index = index - 1) {

        let letter = userString[index];

        revString = revString + letter;
    }

    let palindromeObj = {
        isPalindrome: (revString == userString),
        reversedString: revString
    };

      return palindromeObj;

}

function displayResults(results) {

    let alertBox = document.getElementById('alert');

    alertBox.classList.remove('invisible');

    document.getElementById('msgReversed').textContent = `Your message reversed is: ${results.reversedString}`;

    if (results.isPalindrome == true) {

        alertBox.classList.remove('alert-danger');

        document.getElementById('results').textContent = 'Great job! You entered a palindrome!';

        alertBox.classList.add('alert-success');

    } else {

        alertBox.classList.remove('alert-success');

        document.getElementById('results').textContent = 'Oops, this is not a palindrome :(';

        alertBox.classList.add('alert-danger');

    }
}
