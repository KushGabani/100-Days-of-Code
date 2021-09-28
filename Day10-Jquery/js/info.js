$(document).ready(function () {
  let info = [
    localStorage.getItem("myName"),
    localStorage.getItem("myId"),
    localStorage.getItem("login"),
    localStorage.getItem("campus"),
    localStorage.getItem("program"),
  ];

  console.log(info);

  // loop over each element with class "info"
  let i = 0;
  $(".info").each(function () {
    // set the text of each element to the value of the corresponding array element

    // generate a random color
    let randomColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    $(this).text(getText(i) + info[i]);
    $(this).css("color", randomColor);
    $(this).css("font-family", "monospace");
    $(this).css("font-style", "italic");
    i++;
  });
});

function getText(index) {
  let sent = [
    "Hello, my name is ",
    "My ID is ",
    "My login is ",
    "I am from ",
    "I am studying at ",
  ];

  return sent[index];
}
