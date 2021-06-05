export let renderProfileNameEmail = (profile) =>
{
    let markup =
    `
        <h1 class="profile__main--name">${profile.first_name}</h1>
        <h3 class="profile__main--email">${profile.email}</h3>
        <a class="btn btn--white profile__main--edit">Edit profile</a>
    `;
    document.querySelector(".profile__main--personal").insertAdjacentHTML('afterbegin', markup);
}

export let renderProfileImage = (profile) =>
{
    let markup =
    `
        <img src="${profile.avatar}" alt="Main profile picture" class="profile__main--img">
    `;
    document.querySelector(".profile__main").insertAdjacentHTML('afterbegin', markup);
}

export let renderOrder = (order) =>
{
    let markup =
    `
        <div class="col-1-of-4">
            <a class="card" > 
                <div class="card__img--container">
                    <img src="${order.image}" alt="${order.name}" class="card__img--container-img">
                </div>
                <div class="card__name">${order.name}</div>
                <div class="card__price">
                    <span class="card__price--discount">${order.price}$</span>
                </div>
            </a>
        </div>
    `;
    document.querySelector(".profile__checkout").insertAdjacentHTML("afterbegin", markup);
}