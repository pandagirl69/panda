$(document).ready(function () {
  $(".btn1").click(getShops);

  $(".btn2").click(function () {
    $(".shops-row").fadeOut();
  });
});
function getShops() {
  $.get(
    "https://api-shop-stage.paymishe.com/api/home",
    function (response, status) {
      const firstRowShops = response.data.divisions[0].shops;

      let shopsHtml = [];

      for (let index = 0; index < firstRowShops.length; index++) {
        const name = firstRowShops[index].name;
        const city = firstRowShops[index].city;
        const image = firstRowShops[index].image_url;
        const slug = firstRowShops[index].slug;

        shopsHtml.push(`<div class="box">
        <div class="img">
          <img class="image" src="${image}" alt="" />
        </div>
        <h3 class="kitty">${name}</h3>
        <div class="location">
          <span>${city}</span>
        </div>
      </div>`)
    
      }
      $(".shops-row").html(shopsHtml);
      $(".hidden").fadeIn();
    }
  );
}
