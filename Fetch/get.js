
 const getRandomNumberBetween = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const Base_API_URL = "https://jsonplaceholder.typicode.com/users";

// Store users data globally
let usersData = [];

const GetExample = async () => {
  const response = await fetch(Base_API_URL);
  const data = await response.json();

  usersData = data; // Save all users for future reference

  // Populate select
  const usersSelectHTML = `
    <select id="user">
      ${data.map(user => `<option value="${user.id}">${user.id} - ${user.name}</option>`).join("")}
    </select>`;

  document.querySelector(".users").innerHTML = usersSelectHTML;

  // Display the first user by default
  updateUserCard(data[0]);

  // Add event listener AFTER select exists
  document.getElementById("user").addEventListener("change", (eo) => {
    const selectedId = parseInt(eo.target.value);
    const selectedUser = usersData.find(user => user.id === selectedId);
    updateUserCard(selectedUser);
  });
};

const updateUserCard = (user) => {
  document.querySelector(".card img").setAttribute("src", `/imgs/${(parseInt(user.id)%4 )+1}.jpg`);
  document.querySelector(".card-title").innerText = `Name: ${user.name}`;
  document.querySelector(".card-text").innerText = `Email: ${user.email}`;
  document.querySelector(".card-city").innerText = `City: ${user.address.city}`;
};

GetExample();



document.getElementById("more").addEventListener("click" , (eo) => { 
  
  eo.preventDefault()

  alert("Mooooooooooooore")
 })

