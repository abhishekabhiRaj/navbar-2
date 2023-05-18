var mobileMenu = document.getElementsByClassName('mobile-menu')[0];
function handleToggle(){
    if(mobileMenu.style.display == 'none'){
        mobileMenu.style.display = 'block';
    }else{
        mobileMenu.style.display = 'none';
    }
}