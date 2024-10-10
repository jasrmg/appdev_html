  //edit profile modal js
  const profilemodal = document.getElementById('editProfileModal');
  const editProfilebtn = document.getElementById('editProfileTrigger');
  const profileClosebtn = document.getElementById('closeProfile');

  editProfilebtn.addEventListener('click', () => {
    profilemodal.style.display = 'block';
  });
  profileClosebtn.addEventListener('click', () => {
    profilemodal.style.display = 'none';
  });



  window.onclick = function(event) {
    if(event.target == profilemodal) {
      profilemodal.style.display = 'none';
    }
  }