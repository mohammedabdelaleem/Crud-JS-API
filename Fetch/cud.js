const API_URL = "https://jsonplaceholder.typicode.com/users";

const AddNewUser = async (newUser) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    console.log("User Created :", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const UpdateUser = async (userId, updatedUser) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    const data = await response.json();
    console.log("User Updated:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const DeleteeUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "Delete",
    });

    if (response.ok) {
      console.log(`User with ID ${userId} deleted successfully`);
    } else {
      console.error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

// Form submission handler

const userForm = document.getElementById("userForm");
const formParent = document.querySelector(".form-parent");

// add new - edit
// show form
document.querySelector(".add").addEventListener("click", (eo) => {
  eo.preventDefault();
  formParent.classList.remove("hide");
  userForm.reset(); // clear form
});
// document.querySelector(".edit").addEventListener("click", (eo) => {
//   eo.preventDefault();
//   formParent.classList.remove("hide");
//   userForm.reset(); // clear form
// });

// Handle Edit/Delete with delegation
document.querySelector("#table-body").addEventListener("click", (eo) => {
  if (eo.target.classList.contains("edit")) {
    eo.preventDefault();
    formParent.classList.remove("hide");

  } else if (eo.target.classList.contains("delete")) {
    eo.preventDefault();
    const row = eo.target.closest("tr");
    row.remove(); // Just a UI delete. Add actual logic if needed (API call)
  }
});

userForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const userId = document.getElementById("userId").value;

  const userData = { name, email, city };

  if (userId) {
    // If userId exists, update the user
    await UpdateUser(userId, userData);
  } else {
    // Otherwise, create new user
    await AddNewUser(userData);
  }

  // Optionally reset the form
  e.target.reset();

  //
  formParent.classList.toggle("hide");
});
