
const loadphone = async ()=> {
    const res = await fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
     const data = await res.json();
     const phone = data.data;
     phonecard(phone);
     console.log(phone)
}


  function phonecard (phone){
     const container = document.getElementById('card-container');
      phone.forEach( phones => {
        const div = document.createElement('div');
         div.classList = ` card card-compact w-96 bg-base-100 shadow-xl`
        div.innerHTML= `
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${phones.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phones.phone_name}</h2>
    <p> ${phones.slug}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        `;
        container.appendChild(div);
        
      });
     };
  








loadphone();