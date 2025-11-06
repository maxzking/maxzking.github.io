fetch('../Blog/blog.html')
  .then(response => response.text())
  .then(data => {
    // Parse blog.html
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    // Get all blog posts
    const posts = Array.from(doc.querySelectorAll('.blog-post-block'));

    if (posts.length > 0) {
      // Sort by data-date
      posts.sort((a, b) =>
        new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'))
      );

      // Grab the latest post
      const latestPost = posts[0];
      const latestTitle = latestPost.querySelector('.post-title').textContent;
      const latestDate = latestPost.querySelector('.date').textContent;

      // Update homepage elements
      const link = document.getElementById('latest-title-link');
      link.textContent = latestTitle;

      const dateElement = document.getElementById('latest-date');
      dateElement.textContent = latestDate;
    }
  })
  .catch(error => console.error('Error fetching blog posts:', error));

