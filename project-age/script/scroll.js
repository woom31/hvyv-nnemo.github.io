window.addEventListener("wheel", function(event) {
    if (window.innerWidth > 768) {
      replaceVerticalScrollByHorizontal(event);
    //  moveBackground(event.deltaY);
      // fillBar();    
    } else {
      // fillBarVertical();
    }
  });
  window.addEventListener("scroll", function(event){
    moveBackground(event);
  
    if (window.innerWidth <= 768) {
      fillBarVertical();
    }
  })
  window.addEventListener("load", function(event) {
    // fillBar();
    // constructBar();
    scrollArea(document.querySelector('#content'))
  })
  window.addEventListener("resize", function(event){
    // fillBar();
    constructBar();
  })
  
  
  var allPoints;
  var positions = [];
  function replaceVerticalScrollByHorizontal(event) {
          if (event.deltaY != 0) {
            // manually scroll horizonally instead
          window.scroll(window.scrollX + event.deltaY * 1, window.scrollY);
          
          // prevent vertical scroll
            event.preventDefault();
        }
        return;
      }
  
  // function fillBar(){
  //   totalSize = document.body.offsetWidth - window.innerWidth;
  //   widthPosition = window.scrollX;
  //   percentPosition = widthPosition / totalSize * 100;
  //   //console.log(totalSize, widthPosition, percentPosition);
  //   bar = document.querySelector('.barNav .barNavFuel');
  //   bar.style.width = percentPosition + '%'; 
  //   bar.style.height = '1px';
  // }
  function fillBarVertical(){
    totalSize = document.body.offsetHeight - window.innerHeight;
    heightPosition = window.scrollY;
    percentPosition = heightPosition / totalSize * 100;
    //console.log(totalSize, widthPosition, percentPosition);
    bar = document.querySelector('.barNav .barNavFuel');
    bar.style.height = percentPosition + '%'; 
    bar.style.width = '1px';
  }
  
  function constructBar() {
    arrowArea = document.querySelector('.arrows');
    // arrowArea.innerHTML ="";
    allPoints = document.querySelectorAll('section');
    position = 1;
    allPoints.forEach(function(element) {
        place = (position / totalSize * 100);
        parameter = 'calc('+ place + '% - 4px)';
        arrow = '<i class="fas fa-sort-down" onclick="moveto('+ position +')" style="left:' + parameter + '"></i>';
      arrowArea.innerHTML += arrow;
      position += element.offsetWidth;
      positions.push(position);
    })
  
  }
  function moveto(position) {
    startPoint = window.scrollX;
    endPoint = position;
    distance = endPoint - startPoint;
    i = 0;
    changes = distance / 100;
    moving = window.setInterval(function(){
      if (distance > 0) {
        i = i + changes;
        if ( i >= distance ){
          window.scroll(position - 1, 0) ;
          clearInterval(moving);
        } else {
          window.scroll(startPoint + i - 1, 0);
        }
  
      } else {
        i = i + changes;
        if ( i <= distance ){
          window.scroll(position - 1, 0) ;
          clearInterval(moving);
        } else {
          window.scroll(startPoint + i - 1, 0);
        }
  
      }
      // fillBar();
    }, 10);
  }
  
  
  
  function initialPosition(elem) {
    if (elem.dataset['fixed'] == undefined) {
      elem.style.top = 0;
      elem.style.left = 0;
      elem.style.right = 0;
      elem.style.bottom = 0;
      elem.dataset['fixed'] = 1;    
    }
  }
  
  function moveBackground(movement){
    console.log(movement);
    position = positions.findIndex(findPosition);
    // background = allPoints[position].querySelector('.backimage');
    // if (background != null) {
    //   actualValue = background.style.backgroundPositionX.slice(0, -2);
    //   movement1 = movement * 0.05;
    //   // movement1 = window.innerWidth * 0.2 * movement / (positions[position + 1] - positions[position]);
    //   // if (movement > 0) {
    //   //   newValue = Number(actualValue) -
    //   //   background.style.backgroundPositionX = newValue + 'vw'  
    //   // } else  {
    //     newValue = Number(actualValue) - movement1;
    //     block = window.innerWidth * -0.2
    //     if (newValue <= 0 && newValue >= block) {
    //       background.style.backgroundPositionX = newValue + 'px';   
    //     }
      // }
    // } 
  }
  
  function findPosition(position){
    return position >= window.scrollX + 2;
  }
  
  function scrollArea(elem) {
      area = elem;
  
      elem.addEventListener('mousedown', function(event){
          mouseDownControl(event, elem);
      });
      elem.addEventListener('touchstart', function (event) {
          mouseDownControlMobile(event, elem);
      })
  } 
      
      //begin the process of drag
      function mouseDownControl(event, elem) {
          let area = elem;
          event.preventDefault();
          // area.querySelector('#container').style = 'cursor: grabbing';
          // get the mouse cursor position at startup:
          start = event.clientX;
          position = event.clientX;
          area.setAttribute('onmouseup', 'stopDragEvent(this)');
          area.setAttribute('onmouseleave', 'stopDragEvent(this)');
          // call a function whenever the cursor moves:
          area.setAttribute('onmousemove', 'rollTheArea(event, this)');
      }
      function mouseDownControlMobile(event) {
          // get the mouse cursor position at startup:
          start = event.touches[0].clientX;
          position = event.touches[0].clientX;
          // call a function whenever the cursor moves:
          area.ontouchmove = rollTheAreaMobile(event, elem);
      }
      function stopDragEvent(elem) {
         // console.log(elem);
          // stop moving when mouse button is released:
          // elem.querySelector('#container').style = 'cursor: grab';
          elem.setAttribute('onmousemove', '');
          elem.setAttribute('onmouseup', '');
          
      }
      
      function rollTheArea(event, elem) {
          event = event || window.event;
          event.preventDefault();
          position = event.clientX;
          movement = ((start - position) * 1.5);
          //console.log(position);
          window.scroll(window.scrollX + movement, 0);
          start = position;
          fillBar();
      }
      function rollTheAreaMobile(event, elem) {
          event = event || window.event;
          position = event.touches[0].clientX;
          movement = ((start - position) * 2);
          window.scroll(window.scrollX + movement, 0);
          start = position;
      }