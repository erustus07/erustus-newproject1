document.addEventListener("DOMContentLoaded", function() {
  // Fetch data from db.json
  fetch('db.json')
      .then(response => response.json())
      .then(data => {
          const gymEquipments = data.gymEquipments;
          const equipmentContainer = document.getElementById('equipment-container');

          // Iterate over the gym equipments
          gymEquipments.forEach(equipment => {
              // Create card element
              const card = document.createElement('div');
              card.classList.add('card');

              // Populate card with equipment details
              card.innerHTML = `
                  <div class="card-img">
                      <img src="${equipment.imageUrl}" alt="${equipment.name}">
                  </div>
                  <div class="card-details">
                      <h2>${equipment.name}</h2>
                      <p>Price: $${equipment.price}</p>
                      <p>Functionality: ${equipment.functionality}</p>
                      <button class="purchase-btn">Purchase</button>
                  </div>
              `;

              // Add event listener to the purchase button
              const purchaseBtn = card.querySelector('.purchase-btn');
              purchaseBtn.addEventListener('click', function() {
                  alert('Item added to cart');
              });

              // Append card to equipment container
              equipmentContainer.appendChild(card);
          });
      })
      .catch(error => console.error('Error fetching data:', error));

  // Function to handle displaying reviews and review submission
  document.getElementById('reviews-link').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('reviews-section').style.display = 'block';
  });

  document.getElementById('review-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var reviewText = document.getElementById('review-text').value;
      if (reviewText.trim() !== '') {
          var reviewList = document.getElementById('reviews-list');
          var newReview = document.createElement('div');
          newReview.textContent = reviewText;
          reviewList.appendChild(newReview);
          document.getElementById('review-text').value = ''; // Clear input field after submission
      }
  });
});
