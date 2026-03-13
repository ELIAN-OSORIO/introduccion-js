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
    <img src="${profile_image}" alt="${description}" class="card-avatar"/>

    <div class="card-info">
      <!-- Nombre y Edad -->
      <div class="card-row">
        <span class="card-name">${employee_name}</span>
        <span class="card-age">${employee_age}</span>
      </div>

      <!-- Salario y Dirección -->
      <div class="card-row">
        <span class="card-salary">${employee_salary}</span>
        <span class="card-address">${address}</span>
      </div>

      <!-- Teléfono y Código Postal -->
      <div class="card-row">
        <span class="card-number">${phone_number}</span>
        <span class="card-zip">${zipcode}</span>
      </div>
    </div>
  `;
  return card;
}
