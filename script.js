let icon = document.getElementById('icon');
let i = icon.querySelector('i');
let sidebar = document.getElementById('sidebarId');
let content = document.getElementById('contentId');
let closeSidbar = document.getElementById('close-sidebar');
let openSidbar = document.getElementById('open-sidebar');
let profile = document.getElementById('profile');
let flag = true;
icon.addEventListener('click',function () {
    if(flag){
        sidebar.classList.remove('sidebar');
        sidebar.classList.add('sidebar-close');
        content.classList.remove('content');
        content.classList.add('content-close');
        i.classList.remove('fa-bars');
        i.classList.add('fa-times');
        openSidbar.classList.add('hidden');
        closeSidbar.classList.remove('hidden');
        let profileText = profile.querySelector('p');
        profileText.classList.add('hidden');
        profile.style.textAlign = "center";
        flag = false;
    }else {
        sidebar.classList.remove('sidebar-close');
        sidebar.classList.add('sidebar');
        content.classList.remove('content-close');
        content.classList.add('content');
        i.classList.remove('fa-times');
        i.classList.add('fa-bars');
        openSidbar.classList.remove('hidden');
        closeSidbar.classList.add('hidden');
        let profileText = profile.querySelector('p');
        profileText.classList.remove('hidden');
        profile.style.textAlign = "center";
        flag = true;
    
      
    }
 
})