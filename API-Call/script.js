// JS : ASYNC - Await
// Asynchronous request

async function print() {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err)=> console.log(err))

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const jsonResponse = await response.json();
    jsonResponse.forEach((item) => {
      //   console.log(item.body);

      //   const child = document.createElement("p");
      //   const body = document.createElement("p");
      //   body.innerText = item.body;
      //   body.classList.add("title")

      //   child.innerHTML = item.title;
      //   child.appendChild(body);
      //   root.appendChild(child);

      const root = document.getElementById("root");
      const child = document.createElement("div");
      const title = document.createElement("p");
      const body = document.createElement("p");

      title.innerText = item.title;
      body.innerText = item.body;

      child.appendChild(title);
      child.appendChild(body);

      root.appendChild(child)

    
    });
  } catch (error) {
    console.log(error);
  }
}

print();
