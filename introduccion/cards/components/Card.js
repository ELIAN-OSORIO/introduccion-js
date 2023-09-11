export default function Card({
  employee_name,
  employee_salary,
  employee_age,
  personal_info: { address, phone_number, zipcode },
  image: { profile_image, description },
}) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${profile_image}" alt="${description}" class='card-avatar'/>
    <div class='card-info'>
    <p class='card-name'>${employee_name}</p>
    <p class='card-salary'>${employee_salary}</p>
    <p class='card-age'>${employee_age}</p>
    <p class='card-addres'>${address}</p>
    <p class='card-number'>${phone_number}</p>
    <p class='card-zipcode'>${zipcode}</p>
    </div>
    `;
  return card;
}
