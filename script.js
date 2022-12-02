const addBtn = document.querySelectorAll("[data-add-more]");
const addContainer = document.querySelectorAll("[data-add]");
const generateResume = document.querySelector(".generate");
const errorMsg = document.querySelector("#error");
const body = document.querySelector("body");
const viewResume = document.querySelector(".view_resume");
const dashboard = document.querySelector(".dashboard");
const save = document.querySelector("[data-save]");
const backDashboard = document.querySelector("[data-dashboard]");
const imgInput = document.querySelector("[data-img-input]");
const imgChoose = document.querySelector("[data-img-choose]");
const imgView = document.querySelector("[data-img-view]");
const name = document.querySelector("[data-get-name]");
const setName = document.querySelector("[data-set-name]");
const mobile = document.querySelector("[data-get-mobile]");
const address = document.querySelector("[data-get-address]");
const email = document.querySelector("[data-get-email]");
const setMobile = document.querySelector("[data-set-mobile]");
const setAddress = document.querySelector("[data-set-address]");
const setEmail = document.querySelector("[data-set-email]");
const title = document.querySelector("[data-get-title]");
const setTitle = document.querySelector("[data-set-title]");
const objective = document.querySelector("[data-get-objective]");
const setObjective = document.querySelector("[data-set-objective]");
const hobbies = document.querySelector("[data-get-hobbies]");
const setHobbies = document.querySelector("[data-set-hobbies]");
// const workExperience =document.querySelector("[data-work-ex]");
let workExperienceContainer = document.querySelector("[data-wes-container]");
let achievementContainer = document.querySelector(
  "[data-achievement-container]"
);
let educationContainer = document.querySelector("[data-education-container]");
let skillsContainer = document.querySelector("[data-skills-container]");
let languagesContainer = document.querySelector("[data-languages-container]");

console.log(achievementContainer.innerHTML);

imgInput.onchange = () => {
  imgView.src = URL.createObjectURL(imgInput.files[0]);
};

imgChoose.addEventListener("click", () => imgInput.click());

const addBtnClick = (index, btn) => {
  const inputs = addContainer[index].children;
  let inputField = "";

  for (const input of inputs) {
    if (input.classList.value == "insert") inputField = input.cloneNode(true);
  }

  const inputValues = inputField.querySelectorAll("div input");
  inputValues.forEach((input) => {
    input.value = "";
  });

  addContainer[index].insertBefore(inputField, btn);
};

addBtn.forEach((btn, index) => {
  btn.onclick = () => {
    addBtnClick(index, btn);
  };
});

const generatingResume = async (input) => {
  dashboard.style.display = "none";
  viewResume.style.display = "block";
  setName.innerHTML = name.value;
  setEmail.innerHTML = email.value;
  setAddress.innerHTML = address.value;
  setMobile.innerHTML = mobile.value;
  setTitle.innerHTML = title.value;
  setObjective.innerHTML = objective.value;
  setHobbies.innerHTML = hobbies.value;

  const wes = document.querySelectorAll("[data-work-ex] .insert");
  const wAchieve = document.querySelectorAll("[data-achievement] .insert");
  const education = document.querySelectorAll("[data-academic] .insert");
  const skills = document.querySelectorAll("[data-skills] .insert");
  const languages = document.querySelectorAll("[data-languages] .insert");

  wes.forEach((element) => {
    const input = element.querySelectorAll("input");
    console.log("insert input", input[0].value);

    workExperienceContainer.innerHTML += ` <div class="work_insert">
  <div class="bold">${input[0].value}</div>
  <div class="regular">${input[1].value}</div>
  <div class="thin">${input[2].value}</div>
  <div class="thin_grey">
  ${input[3].value}
  </div>
</div>`;
  });
  wAchieve.forEach((element) => {
    const input = element.querySelectorAll("input");
    console.log("insert input", input[0].value);

    achievementContainer.innerHTML += ` <div class="achievement_insert">
    <div class="bold">${input[0].value}</div>

    <div class="thin">
    ${input[1].value}
    </div>
  </div>`;
  });
  education.forEach((element) => {
    const input = element.querySelectorAll("input");
    console.log("insert input", input[0].value);

    educationContainer.innerHTML += `  <div class="education_insert">
    <div class="bold">${input[0].value}</div>

    <div class="regular">
    ${input[1].value}
    </div>
    <div class="thin_grey">${input[2].value}</div>
  </div>`;
  });
  skills.forEach((element) => {
    const input = element.querySelectorAll("input");
    console.log("insert input", input[0].value);

    skillsContainer.innerHTML += ` <div class="insert_skill">
    <p class="skill_title">
        ${input[0].value}
    </p>
    <p class="text">
    ${input[1].value}
    </p>
</div>`;
  });
  languages.forEach((element) => {
    const input = element.querySelectorAll("input");
    console.log("insert input", input[0].value);

    languagesContainer.innerHTML += ` <div class="insert_language">
    <p class="language_title">
        ${input[0].value}
    </p>
    <p class="text">
        ${input[1].value}      </p>
</div>`;
  });

  console.log("click", input.value);
};

generateResume.onclick = () => {
  const inputs = document.querySelectorAll("input");
  let resume = 1;
  
  inputs.forEach((input) => {
    if (input.value !== "") {resume =1}
    else {
      resume++
   
    }
  });
  resume==1?generatingResume(): errorMsg.style.display = "block";
  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 3000)
  generatingResume()
};

const canvas = () => {
  html2canvas(document.querySelector(".view_resume .container2")).then(
    function (canvas) {
      // document.body.appendChild(canvas);

      const link = document.createElement("a");
      link.download = "Resume.jpg";
      link.href = canvas.toDataURL();
      link.click();
    }
  );
};
save.onclick = () => {
  canvas();
};

backDashboard.onclick = () => {
  dashboard.style.display = "block";
  viewResume.style.display = "none";
};
