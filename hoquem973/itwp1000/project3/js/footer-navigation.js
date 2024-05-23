document.addEventListener("DOMContentLoaded", function() {
    // Define the links for the footer navigation
    const footerNavLinks = [
      { label: "Home", href: "#section-home" },
      { label: "Rules", href: "#section-rules" },
      { label: "Submission", href: "#section-submission" },
      { label: "Categories", href: "#section-categories" },
      { label: "Voting", href: "#section-voting" },
      { label: "Photos", href: "#section-photos" },
      { label: "Biography", href: "#section-bio" },
      { label: "Blog", href: "#section-blog" },
      { label: "Contact", href: "#section-contact" },
      { label: "Course Homepage", href: "../home.htm", title: "Back to course homepage" },
      { label: "Sitemap", href: "sitemap.xml", title: "XML Sitemap" }

    ];
  
    // Get the footer navigation container element
    const footerNavContainer = document.querySelector(".footer-nav ul");
  
    // Generate the footer navigation links dynamically
    footerNavLinks.forEach(link => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.textContent = link.label;
      anchor.href = link.href;
      anchor.classList.add("nav-link");
      listItem.appendChild(anchor);
      footerNavContainer.appendChild(listItem);
    });
  });
  