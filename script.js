let user = fetch('https://api.github.com/users/AnnaKots')
.then(result => result.json())
.then(json => {
  console.log(json);

  let img = new Image();
  img.src = json.avatar_url;
  img.className = 'img';
  document.body.append(img);

  let wrap = document.createElement('div');
  wrap.className='wrap';
  let name = document.createElement('a');
  name.className = 'name';
  name.href = json.html_url;
  name.innerHTML = json.name;
  if (json.name != null) {
    document.body.append(wrap);
    document.querySelector('.wrap').append(name);
  } else {
    console.log('У пользователя нет имени!');
  }

  let bio = document.createElement('div');
  bio.className = 'bio';
  bio.innerHTML = json.bio;
  if (json.bio != null) {
    document.body.append(bio);
  } else {
    console.log('Нет информации о пользователе');
  }
})
.catch(error => console.log(error));
