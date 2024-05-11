window.addEventListener("resize", function(){
    addRequiredClasses();
    hamberger.textContent = '☰' ;
  });


  // Function to add required classes to the body
  function addRequiredClasses()
  {
    let mobileNav = document.querySelector('.nav-list');
    if(window.innerWidth < 900)
      {
        mobileNav.style.display = 'none';

      }
      else
      {
        mobileNav.style.display = 'flex';

      }
    }
    // For the first time when the page loads
    addRequiredClasses();

  // For the mobile navigation
  let hamberger = document.querySelector('.hamberger');
  let mobileNav = document.querySelector('.nav-list');

  // Hamberger icon
  hamberger.textContent = '☰' ;
  hamberger.addEventListener('click', ()=>{
    // Navbar toggling button
    mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
    hamberger.textContent = hamberger.textContent === '☰' ? '✖' : '☰';


  });