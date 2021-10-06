document.addEventListener('DOMContentLoaded', () => {

  function lineWidth () {
    let line = document.querySelector('.statistics__money-line '), 
      coloredLine = document.querySelector('.statistics__money-line div'),
      earnedItem = document.querySelector('.statistics__money-num').innerHTML,
      goalItem = window.getComputedStyle(document.querySelector('.statistics__money-line'), ':after').getPropertyValue('content');
    
    function numberFinder(item) {
      let arr = [];
      let collector;
      item.split('').forEach(i => {
        i = parseInt(i);
        if (!isNaN(i)) {
          arr.push(i);
        }
      })
      collector = arr.join('');
      return collector;
    }
    let a = numberFinder(earnedItem);
    let b = numberFinder(goalItem)

    coloredLine.style.width = (getComputedStyle(line).width).slice(0, -2) * (a/b) + 'px';
  }
  
  function timer () {
    let daysItem = document.querySelector('.timer__days'),
      hoursItem = document.querySelector('.timer__hours'),
      minutesItem = document.querySelector('.timer__minutes'),
      secondsItem = document.querySelector('.timer__seconds');
    
    
    let timeInterval = setInterval(() => {
      let dateTo = new Date('2021-11-2').getTime();
      let dateNow = new Date().getTime();

      let difference = dateTo - dateNow;

      let days = (difference / 1000 / 60 / 60 / 24).toFixed();
      let hours = (difference / 1000 / 60 / 60 % 24).toFixed();
      let minutes = (difference / 1000 / 60 % 60).toFixed();
      let seconds = (difference / 1000 % 60).toFixed();


      daysItem.innerHTML = days;
      hoursItem.innerHTML = hours;
      minutesItem.innerHTML = minutes;
      secondsItem.innerHTML = seconds;

      if (difference < 0) {
        clearInterval(timeInterval);
        daysItem.innerHTML = 0;
        hoursItem.innerHTML = 0;
        minutesItem.innerHTML = 0;
        secondsItem.innerHTML = 0;
      }
    }, 1000)
  }

  function menu() {
    let menuBtn = document.querySelector('.hamburger'),
      menuText = document.querySelector('.menu-adapted'),
      close = document.querySelector('.close');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('hamburger_active');
      menuText.classList.toggle('menu-adapted_active');
    });
    close.addEventListener('click', () => {
      menuBtn.classList.toggle('hamburger_active');
      menuText.classList.toggle('menu-adapted_active');
    })
  }

  menu();

  lineWidth();
  timer ();
})





