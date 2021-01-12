$(document).ready(function () {
  $("#test-btn").click(getShops)

  $("#test-btn-2").click(function () {
    $('#shops-row').fadeOut()
  })
})


// Name Function
function Panda(params) {
  console.log('I am panda')
}

// Anonymous Function
// function (params) {
//   console.log('I am a function without a name')
// }

// Calling a function
Panda()

/**
 * Get Shops definition
 */
function getShops() {
  $.get(
    "https://api-shop-stage.paymishe.com/api/home",
    function (response, status) {
      const firstRowShops = response.data.divisions[0].shops

      let shopsHtml = []

      for (let index = 0; index < firstRowShops.length; index++) {
        const name = firstRowShops[index].name
        const city = firstRowShops[index].city
        const image = firstRowShops[index].image_url
        const slug = firstRowShops[index].slug

        shopsHtml.push(`
        <div id='shop-card' class="col-md-3 col-sm-12 hidden" >
          <div class="card shadow p-3 m-1 w-100">
            <img id="shop-image" src="${image}" alt="" class="imageCell-round">
            
            <h4 id="shop-name" class="text-center mt-3">${name}</h4>
            <h5 id="city-name" class="text-center">${city}</h5>
  
            <a href="https://stage.paymishe.com/shop/${slug}">
              <button class="btn btn-danger btn-block mt-5">Go to shop</button>
            </a>
          </div>
        </div>
        `)
      } // End of loop

      $('#shops-row').html(shopsHtml)
      $('.hidden').fadeIn()

    }
  )
}
