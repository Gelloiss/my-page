/*particles-js CONFIG*/
particlesJS('content',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": false,
          "value_area": 394.58004845442963
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "top-right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
/*particles-js CONFIG*/

/*SIMPLE BAR*/
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById('page');
  const simpleBar = new SimpleBar(target, {autoHide: false});
});

/*(() => {
  console.log('sdsdsds');
})();*/
/*SIMPLE BAR*/

/*AGE*/
document.addEventListener("DOMContentLoaded", () => {
  const birthday = new Date(2000, 10, 23);
  document.getElementById('htmlAge').innerText = Math.floor((new Date().getTime() - birthday.getTime()) / 86400000 / 365);
});
/*AGE*/

/*LANGUAGES*/
const language = {
  ru: {
    'textName': 'Искра Юрий, ',
    'textAge': ' лет. ',
    'textProfession': 'Веб-разработчик из Харькова.',
    'textClickToCopy': ' [нажмите, чтобы скопировать]',
    'textCopied': 'Скопировано.',
    'textCV': 'Мое резюме в doc формате: ',
    'textLookingVacancy': 'В поиске вакансии trainee или junior JavaScript developer',
    'textSkills': '<h2>Технические навыки</h2><ul><li><b>JavaScript</b> — 3 месяца (коммерчиские проекты отсутствуют)</li><li><b>Symfony</b> — 6 месяцев</li><li><b>Front-end</b> — HTML5/CSS3/JQuery/Bootstrap</li><li><b>Back-end</b> — PHP, MySQL 3 года</li><li><b>Other</b> — C++, Delphi, Java, C# (база университета и колледжа)</li><li><b>ОС</b> — Windows, Linux (Ubuntu-подобные)</li><li><b>VCS</b> — Git</li><li>Также я работал с: parsing, crawling, regex, cron, cURL, api vk, api telegram bot, youtube api, other api, E-commerce payment systems (н: free-kassa), Amazon Web Services, Google reCAPTCHA, SMTP (yandex, google, mail.ru), nginx, apache, google and yandex maps и др. </li></ul>',
    'textLanguages': '<h2>Знания языков</h2><ul><li><b>Русский и украинский</b> — родные</li><li><b>Английский</b> — pre-intermediate (могу читать документацию, искать и спрашивать информацию, вести переписку)</li></ul>',
    'textEducation': '<h2>Образование</h2><ul><li>09.2015 - 07.2019<br/><b>Харьковский патентно-компьютерный колледж</b><br/>Специальность: Рзработка ПО</li><br/><li>09.2019 - Текущий момент<br/><b>Харьковский национальный автомобильно-дорожный университет</b><br/>Специальность: Компьютерные науки</li></ul>',
    'textExperience': '<h2>Опыт работы</h2>Опыт работы в компаниях отсутствует.<br/>Несколько лет выполнял небольшие заказы на фриланс площадках и форумах, используя преимущественно PHP.',
    'textContacts': 'Контакты',
    'textClickToCopyEmail': ' [нажмите, чтобы скопировать]',
    'textCopiedEmail': 'Скопировано.<br/>',
    'textOtherContacts': "Телеграм: <a href='http://t.me/gelloiss'>@Gelloiss</a><br/>Телефон: 096-11-565-82, 066-025-17-35<br/>LinkedIn: <a href='https://www.linkedin.com/in/yurii-iskra-988359174/'>https://www.linkedin.com/in/yurii-iskra-988359174/</a>",
    'textExamplesWork': "<h2>Некоторые примеры работ</h2><ul><li><a href='https://game.yourcompany.best' target='_blank'>game.YourCompany</a>, <a href='https://github.com/Gelloiss/Game-on-js' target='_blank'>GitHub</a><br/>Простая игра на чистом JS. Создавалась с целью закрепить знания языка.</li><li><a target='_blank' href='https://frozengram.space/'>FronzenGram.space</a> (только Front-End)<br/>Один из моих старых заказов - дизайн сайта накрутки в Instagram. Использовались различные JS библиотеки.</li><li><a target='_blank' href='https://url.yourcompany.best/'>Приватный сокращатель ссылок</a>, <a href='https://github.com/Gelloiss/private-url-shortener' target='_blank'>GitHub</a><br/>Простенький скрипт для создания сокращенных ссылок.</li><li><a href='https://khpcc-pi.kh.ua/?page=event' target='_blank'>khpcc-pi.kh.ua</a><br/>Сайт для факультета 'программная инженерия' патентно-компьютерного колледжа, дипломный проект. Основная цель портала - обмен метод. материалами между преподавателями и студентами с настраевамыми правами доступа.</li><li><a href='https://github.com/Gelloiss/my-page' target='_blank'>Этот сайт на GitHub</a> </li></ul>"
  },
  us: {
    'textName': 'Iskra Yurii, ',
    'textAge': ' years old. ',
    'textProfession': 'Web developer from Kharkiv.',
    'textClickToCopy': ' [click to copy]',
    'textCopied': 'Copied.',
    'textCV': 'My CV in doc format: ',
    'textLookingVacancy': 'Looking for a vacancy trainee or junior JavaScript developer',
    'textSkills': '<h2>Technical skills</h2><ul><li><b>JavaScript</b> — 3 months (without commercial projects)</li><li><b>Symfony</b> — 6 months</li><li><b>Front-end</b> — HTML5/CSS3/JQuery/Bootstrap</li><li><b>Back-end</b> — PHP, MySQL 3 years</li><li><b>Other</b> — C++, Delphi, Java, C# (university and college base)</li><li><b>OS</b> — Windows, Linux (Ubuntu-like)</li><li><b>VCS</b> — Git</li><li>I also worked with: parsing, crawling, regex, cron, cURL, api vk, api telegram bot, youtube api, other api, E-commerce payment systems (e.g. free-kassa), Amazon Web Services, Google reCAPTCHA, SMTP (yandex, google, mail.ru), nginx, apache, google and yandex maps etc. </li></ul>',
    'textLanguages': '<h2>Languages</h2><ul><li><b>Russian and ukrainian</b> — native</li><li><b>English</b> — pre-intermediate (I can read documentation, search and ask for information, carry on correspondence)</li></ul>',
    'textEducation': '<h2>Education</h2><ul><li>09/2015 - 07/2019<br/><b>Kharkiv Patent and Computer College</b><br/>Specialization: Software Developer</li><br/><li>09/2019 - This day<br/><b>Kharkiv National Automobile and Highway University</b><br/>Specialization: Computer Science</li></ul>',
    'textExperience': "<h2>Experience</h2>Haven\'t experience in companies.<br/>For several years carried out small orders on freelance sites and others forums, using mainly PHP.",
    'textContacts': 'Contacts',
    'textClickToCopyEmail': ' [click to copy]',
    'textCopiedEmail': 'Copied.<br/>',
    'textOtherContacts': "Telegram: <a href='http://t.me/gelloiss'>@Gelloiss</a><br/>Phone: 096-11-565-82, 066-025-17-35<br/>LinkedIn: <a href='https://www.linkedin.com/in/yurii-iskra-988359174/'>https://www.linkedin.com/in/yurii-iskra-988359174/</a>",
    'textExamplesWork': "<h2>Some examples of my works</h2><ul><li><a href='https://game.yourcompany.best' target='_blank'>game.YourCompany</a>, <a href='https://github.com/Gelloiss/Game-on-js' target='_blank'>GitHub</a><br/>A simple game in native JS. It was created to consolidate the knowledge of the language.</li><li><a target='_blank' href='https://frozengram.space/'>FronzenGram.space</a> (only Front-End)<br/>One of my old orders is the design of an Instagram likes promotion site. Various JS libraries were used.</li><li><a target='_blank' href='https://url.yourcompany.best/'>Private link shortener</a>, <a href='https://github.com/Gelloiss/private-url-shortener' target='_blank'>GitHub</a><br/>A simple script for creating short links.</li><li><a href='https://khpcc-pi.kh.ua/?page=event' target='_blank'>khpcc-pi.kh.ua</a><br/>Site for the Faculty of Software Engineering, Patent and Computer College. My thesis project. The main purpose of the portal is manual exchange materials between teachers and students with custom access rights.</li><li><a href='https://github.com/Gelloiss/my-page' target='_blank'>This page on GitHub</a> </li></ul>"
  }
};

const setLanguage = language => {
  for (let element in language) {
    document.getElementById(element).innerHTML = language[element];
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(language.ru);
});

document.getElementById('languageRu').addEventListener('click', () => {
  setLanguage(language.ru);
});
document.getElementById('languageUs').addEventListener('click', () => {
  setLanguage(language.us);
});
/*LANGUAGES*/

/*Click to copy*/
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

document.getElementById('textClickToCopy').addEventListener('click',  ev => { //copy email
  copyToClipboard(document.getElementById('textEmail').innerText);
  document.getElementById('textCopied').removeAttribute('style');
  setTimeout(() => {
    document.getElementById('textCopied').setAttribute('style', 'display:none');
  }, 2500);
});

document.getElementById('textClickToCopyEmail').addEventListener('click',  ev => { //copy email
  copyToClipboard(document.getElementById('textEmail').innerText);
  document.getElementById('textCopiedEmail').removeAttribute('style');
  setTimeout(() => {
    document.getElementById('textCopiedEmail').setAttribute('style', 'display:none');
  }, 2500);
});
/*Click to copy*/