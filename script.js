let userName = prompt('Введите логин GitHub:');
let user = fetch(`https://api.github.com/users/${userName}`)
  .then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      alert('Информация о пользователе недоступна');
      let error = new Error(result.statusText);
      error.response = result;
      throw error;
    }
  })
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
    document.body.append(wrap);
    if (json.name != null) {
      document.querySelector('.wrap').append(name);
    } else {
      document.querySelector('.wrap').append('У пользователя нет имени!');
    }

    let bio = document.createElement('div');
    bio.className = 'bio';
    bio.innerHTML = json.bio;
    if (json.bio != null) {
      document.body.append(bio);
    } else {
      document.body.append('Нет информации о пользователе');
    }
  })
  .catch(error => console.log(error));
