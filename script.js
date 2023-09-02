function getMenu(menu) {
  let container = document.getElementById("container");

  menu.forEach((item) => {
    let card = document.createElement("div");
    card.id = "card";
    card.innerHTML = `
    <img id="card_img" src="${item.imgSrc}" alt="no image" />
    <div id="card_txt">
    <div id="card_txt_section">
    <h2 id="card_title">${item.name}</h2>
    <p id="card_price">$${item.price}</p>
    </div>
    <img
    id="add_item"
    src="${"./assets/plus (1) 1 (1).svg"}"
    alt="no image"
    />
    </div>
    `;
    console.log(item.name);
    container.append(card);
  });
}

async function main(url) {
  let response = await fetch(url);
  let menu = await response.json();
  console.log(menu);
  await getMenu(menu);
  // let datapacket = await takeOrder();
  // await orderPrep();
  // let pay = await payment();
  // pay.then(() => {
  //   alert("Thank you for visit");
  // });
}
const url =
  "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

main(url);
