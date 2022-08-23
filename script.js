function compute() {
  const amount = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;

  if (amount <= 0 || amount == null) {
    alert("Enter a positive number");
    return;
  } else {
    let interest = (amount * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    let showRate = document.getElementById("result");
    showRate.innerHTML = `<p>If you deposit ${amount}</p> <p>at an interest rate of ${rate},</p><p>you will receive an amount of ${interest}</p>
    <p>by the year ${year}</p>`;
  }
}

function func() {
  const span = document.getElementById("span");
  span.innerHTML = 3;

  let slider = document.getElementById("rate");
  slider.oninput = function () {
    span.innerHTML = this.value;
  };
}
