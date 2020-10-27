(() => {
  let currentData;

  fetchOnLoad();

  // document ready
  document.addEventListener("DOMContentLoaded", function (event) {
    const categories = document.getElementsByClassName("btn-outline-info");
    for (const category of categories) {
      let { innerHTML: subject, name: variable } = category;
      category.addEventListener("click", () =>
        getDataByCategory(subject, variable)
      );
    }

    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    searchButton.addEventListener("click", () => {
      getDataByCategory(searchInput.value, "currentData");
    });
  });

  function fetchOnLoad() {
    fetch(`https://pixabay.com/api/?key=${key}&q=sport&image_type=photo`, {
      type: "GET",
    })
      .then((data) => data.json())
      .then((json) => (currentData = json.hits))
      .then(() => {
        createImagesInGallery();
      })
      .catch((err) => console.log(err.message));
  }

  function getDataByCategory(subject) {
    fetch(`https://pixabay.com/api/?key=${key}&q=${subject}&image_type=photo`, {
      type: "GET",
    })
      .then((data) => data.json())
      .then((json) => json.hits)
      .then((result) => {
        currentData = result;
        setImagesInGallery(subject);
      })
      .catch((err) => console.log(err.message));
  }

  function createImagesInGallery() {
    for (let i = 0; i < currentData.length; i++) {
      $("#dots").append(`
      <span class="dot"></span>
      `);
      $("#divEl").prepend(`
    <div class="mySlides fadeEffect">
      <img
        class="slide-image"
        src="${currentData[i].webformatURL}"
      />
      <div class="text">showing sport collection</div>
    </div>
      `);
    }
  }

  function setImagesInGallery(subject) {
    let images = $(".slide-image");
    let texts = $('.text');
    for (let i = 0; i < currentData.length; i++) {
      images[i].src = currentData[i].webformatURL;
      texts[i].innerHTML = `showing ${subject} collection`;
    }
  }
})();
