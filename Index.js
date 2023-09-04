<script>
  // 1. Search Box Handling
  document.querySelector('.search_icon').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search_input').value;
    if (searchQuery) {
      alert('You searched for: ' + searchQuery);
      // Implement further code to handle search, e.g., API call
    } else {
      alert('Search box is empty.');
    }
  });

  // 2. Scroll-to-Top
  document.querySelector('.foot_panel1').addEventListener('click', function() {
    window.scrollTo(0, 0);
  });

  // 3. Product Click
  const productBoxes = document.querySelectorAll('.box');

  productBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
      const productCategory = this.querySelector('h2').innerText;
      alert('You clicked on ' + productCategory);
      // Implement further code to handle product clicks
    });
  });
</script>
