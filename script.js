
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // 🔥 onClick event: toggles 'active' class
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

