const pass = document.getElementById('password');
const copy = document.getElementById('copy');

const all = "zaq1!QAZxsw2@WSXcde3#EDCvfr4$RFVbgt5%TGBnhy6ŸHNmju7&UJM,ki8*IK<.lo9(OL>;çp0)PÇ"

const randomNumber = () => Math.floor(Math.random() * all.length);

let password = "";

for (let index = 0; index < 16; index++) {
  const number = randomNumber();
  password += all.substring(number, number + 1);
};

pass.innerText = password

const newPassword = () => {
  password = "";
  for (let index = 0; index < 16; index++) {
    const number = randomNumber();
    password += all.substring(number, number + 1);
  };
  pass.innerText = password
};

const copyPassword = () => {
  navigator.clipboard.writeText(password);
  copy.innerText = 'Is copied'
  setTimeout(() => {
    copy.innerText = ""
  }, 10000);
}
