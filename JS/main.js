
const Base_API_URL = "https://jsonplaceholder.typicode.com/users";

const FillTable = async () => {
  try {
    const response = await fetch(Base_API_URL);
    const data = await response.json();

    const rowData = data.map(user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <img src="/imgs/${(parseInt(user.id)%4 )+1}.jpg" class="img-thumbnail" width="50" height="50" alt="User Image" />
        </td>
        <td>
          <a class="btn btn-success edit">Edit</a>
          <a  class="btn btn-danger delete">Delete</a>
        </td>
      </tr>
    `).join(""); // Join array into a single string

    document.querySelector("#table-body").innerHTML = rowData;

  } catch (error) {
    console.error("Error: ", error);
  }
};

FillTable();
