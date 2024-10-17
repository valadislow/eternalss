/** @format */

const eternals = [
  {
    eternal_name: "Thena",
    image: "./assets/thena.jpg",
    skills: ["matter manipulation", "love", "grounded", "agility"],
  },
  {
    eternal_name: "Kingo",
    image: "./assets/kingo.jpg",
    skills: ["energy manipulation", "swordsman", "dancer", "agility"],
  },
  {
    eternal_name: "Sprite",
    image: "./assets/sprite.jpg",
    skills: ["trickery", "illusion", "telekinesis", "love", "agility"],
  },
  {
    eternal_name: "Phastos",
    image: "./assets/phastos.jpg",
    skills: ["intelligence", "invention", "agility"],
  },
  {
    eternal_name: "Makkari",
    image: "./assets/makkari.jpg",
    skills: ["speed", "multilingual", "acrobat", "agility"],
  },
];


const setUpPage = () => {
  let skillSet = [];   

  const eternalListRef = document.querySelector("#eternals");
  const skillsRef = document.querySelector("#skills");

  
  eternals.forEach((eternal) => {
    const listItem = document.createElement("li");
    listItem.textContent = eternal.eternal_name;
    joinSkills(skillSet, eternal.skills);       
    eternalListRef.appendChild(listItem);      
  });
  skillsRef.textContent = skillSet.join(" - ");
};


const joinSkills = (skillSet, individualSkills) => {
  individualSkills.forEach((skill) => {
    let gotThatSkill = skillSet.find((existingSkill) => {
      if (existingSkill == skill) return true;
    });
    console.log("got that skill", gotThatSkill, individualSkills);
    if (!gotThatSkill) skillSet.push(skill);
  });
  return skillSet;
};


const getRequiredSkill = () => {
  const skillRef = document.querySelector("#skill");
  const skillRequired = skillRef.value;
  let allWithSkill = findEternal(skillRequired);
  showAllWithSkill(allWithSkill);
};


const findEternal = (skillNeeded) => {
  eternalsWithThatSkill = [];
  eternals.forEach((eternal) => {
    let eternalSkillSet = eternal.skills;
    let hasSkill = eternalSkillSet.find((skill) => {
      if (skill == skillNeeded) return skill;
    });
    if (hasSkill) eternalsWithThatSkill.push(eternal);
    console.log(hasSkill);
  });
  return eternalsWithThatSkill;
};


const showAllWithSkill = (eternals) => {
  let eternalsWithSkillRef = document.querySelector("#eternalsWithSkill");
  eternalsWithSkillRef.innerHTML = "";
  console.log(eternals);

  eternals.forEach((eternal) => {
    let divSkillRef = document.createElement("div");
    divSkillRef.style =
      "border:2px dotted green;margin:2px;width:110px;height:110px;";
    let eternalImageRef = document.createElement("img");
    eternalImageRef.style = "width:100px;height:100px;padding:2px;";
    eternalImageRef.src = eternal.image;
    let eternalLabelRef = document.createElement("label");
    eternalLabelRef.style =
      "position: relative; top:-20px;background-color: beige;";
    eternalLabelRef.textContent = eternal.eternal_name;
    divSkillRef.appendChild(eternalImageRef);
    divSkillRef.appendChild(eternalLabelRef);
    eternalsWithSkillRef.append(divSkillRef);
  });
};


setUpPage();
