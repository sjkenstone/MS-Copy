    const b2t = document.getElementById("back-to-top-button");
    var fullHeight = document.body.scrollHeight;
    const search_btn_click = document.getElementById("search");
    const cancel_btn = document.getElementById("cancel-btn");

    const Left_Nav = document.getElementById("left-nav");
    const All_Microsoft = document.getElementById("all-microsoft");
    const Search = document.getElementById("search");
    const Cart = document.getElementById("cart");
    const Sign_In = document.getElementById("sign-in");
    const Search_Bar = document.getElementById("search-bar");
    
    var Max_Width = window.matchMedia("(max-width: 992px)");
    console.log(Max_Width);

    var Min_Width = window.matchMedia("(min-width:992px)");
    console.log(Min_Width);

    window.addEventListener('scroll', function(){
      let scroll = this.scrollY;

      // console.log(scroll);
      if (scroll <= fullHeight/5) {
        b2t.classList.add("d-none");
      } else {
        b2t.classList.remove("d-none");
      }
    })


    search_btn_click.addEventListener('click', function () { //click search button
      Left_Nav.classList.add("d-none");
      All_Microsoft.classList.add("d-none");
      All_Microsoft.classList.remove("d-lg-block");
      Search.classList.add("d-none");
      Cart.classList.add("d-none");
      Sign_In.classList.add("d-none");
      Search_Bar.classList.remove("d-none"); 

      if (Max_Width.matches) { //when sreen width smaller than 992px
        document.getElementById('navbar-brand-image').classList.add("d-none"); //hide image
        cancel_btn.classList.add("d-none"); //hide cancel button
        document.getElementById('search-bar').style.width = "90vw";
        document.getElementById('navbar-toggler-icon').classList.add("d-none"); //hide toggler icon
        document.getElementById('arrow-button').classList.remove('d-none', 'd-sm-none'); //display arrow button
      } else {
        document.getElementById('navbar-brand-image').classList.remove("d-none");
      }
    })


    //when click left-arrow button
    document.getElementById("arrow-button").addEventListener('click', function () {
      this.classList.add("d-none");
      Search_Bar.classList.add("d-none"); 
      
      document.getElementById('navbar-brand-image').classList.remove("d-none");
      Cart.classList.remove("d-none");
      Sign_In.classList.remove("d-none");
      document.getElementById('navbar-toggler-icon').classList.remove("d-none");
      Search.classList.remove("d-none");

      Left_Nav.classList.remove("d-none");
      All_Microsoft.classList.add("d-lg-block");

      if(Min_Width) {
        cancel_btn.classList.remove("d-none");
      }
      
    })

    //cancel button
    cancel_btn.addEventListener('click', function () {
      Left_Nav.classList.remove("d-none");
      All_Microsoft.classList.add("d-none");
      All_Microsoft.classList.add("d-lg-block");
      Search.classList.remove("d-none");
      Cart.classList.remove("d-none");
      Sign_In.classList.remove("d-none");
      Search_Bar.classList.add("d-none"); 

      document.getElementById('navbar-brand-image').classList.remove("d-none");
    })

    //responsive for search-bar
    function SearchbarResize() {
      let width = document.documentElement.clientWidth;
      let search_bar_exist = !Search_Bar.classList.contains("d-none")
      
      if(search_bar_exist) {
        document.getElementById('navbar-brand-image').classList.add("d-none");
        document.getElementById('navbar-toggler-icon').classList.add("d-none");
        document.getElementById('arrow-button').classList.remove( "d-sm-none", "d-none");
        document.getElementById('arrow-button').classList.add("d-block");
      } else if (width < 992) {
        document.getElementById('arrow-button').classList.add("d-none");
        document.getElementById('navbar-toggler-icon').classList.remove("d-none");
        cancel_btn.classList.add("d-none");
      }

    }

    window.addEventListener("resize", SearchbarResize);