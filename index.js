


function loadPage(event, url) {
    event.preventDefault();
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('404');
        return res.text();
      })
      .then(html => {
        document.getElementById("visible").innerHTML = html;
      })
      .catch(err => {
        document.getElementById("visible").innerHTML = `<p>Error loading page: ${err.message}</p>`;
      });
  }

  // Optional: Load default page
  window.onload = () => loadPage(new Event('load'), 'home.html');