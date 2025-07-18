// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

for (let i = companyName.length; i > 0; i--) {
  let j = i - 1;
  reversedCompanyName += companyName[j];
}
console.log(reversedCompanyName);
