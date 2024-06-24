const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";
const arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    switch (buttonText) {
      case '=':
        try {
          string = eval(string);
          inputBox.textContent = string;
        } catch (error) {
          inputBox.textContent = "Error";
          string = "";
        }
        break;

      case 'AC':
        string = "";
        inputBox.textContent = string;
        break;

      case 'DEL':
        string = string.slice(0, -1);
        inputBox.textContent = string;
        break;

      case '%':
        string += '/100';
        inputBox.textContent = string;
        break;

      default:
        string += buttonText;
        inputBox.textContent = string;
        break;
    }
  });
});
