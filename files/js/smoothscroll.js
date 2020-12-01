class SmoothScroll {
  constructor(_containerSelector, _params) {

    // Init DOM elements
    this.$ = {
      container: document.querySelector(_containerSelector),
      containerBody: document.querySelector(_containerSelector + '__body'),
      hitbox: document.querySelector(_containerSelector + '--hitbox'),
      controlsEasing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      duration: 1000,
    }

    // Init params
    this.params = {
      containerHeight: this.$.containerBody.offsetHeight + $('.contact').outerHeight() - 6,
      duration: _params.duration,
      timingFunction: _params.timingFunction,
    }

    // Launch init functions
    document.addEventListener('DOMContentLoaded', () => { 
      this._initStyle()
      this._initListeners()
    })
  }

  _initStyle() {

    const currentScrollY = window.scrollY

    // Set container style
    this.$.container.style.overflow = `hidden`
    this.$.container.style.position = `fixed`
    this.$.container.style.height = `100vh`
    this.$.container.style.width = `100%`
    
    // Set containerBody style
    this.$.containerBody.style.transform = `translateY(${-window.scrollY}px)` // Scroll to current scroll
    
    // Add transtion after scroll to
    const addTransition = () => {
        this.$.containerBody.style.transition = `transform ${this.params.duration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`
    }

    // Run addTranstion
    addTransition()

    // Set hitbox style
    this.$.hitbox.style.height = `${this.params.containerHeight}px`

  }

  _initListeners() {
    window.addEventListener('scroll', (event) => { this._handleScroll(event) })
    window.addEventListener('resize', () => { this._handleResize() })
  }

  _handleScroll(_event) {

    this.$.containerBody.style.transform = `translateY(${-window.scrollY}px)`
  }

  _handleResize() {

    var isMobile, isChrome, isSafari = false;

    // Check if on mobile now
    const checkMobile = () => {
      if($(window).width() < 991){
        isMobile = true;
      }
      else {
        isMobile = true;
      }
    }
    checkMobile()

    const resizeMargin = () => {
      console.log('resized');
      if(!isMobile){
        //Is on Desktop
        $('.body_container__body').css('margin-bottom', $('.contact').outerHeight() + 'px'); 
        $(window).resize(function(){
            $('.body_container__body').css('margin-bottom', $('.contact').outerHeight() + 'px'); 
        });
      }
    }
    setTimeout(function(){
      resizeMargin()
    }, 300);

    // Update useful params
    this.params.containerHeight = this.$.containerBody.offsetHeight + $('.contact').outerHeight() - 6

    // Update useful style
    this.$.hitbox.style.height = `${this.params.containerHeight}px`
  }

  _handleDuration() {
    // Update duration variable
    this.params.duration = 1000

    // Update duration
    this.$.containerBody.style.transition = `transform ${this.params.duration}ms ${this.params.timingFunction}`
  }

  _handleEasing(_value) {
    // Update timing function variable
    this.params.timingFunction = _value

    // Update duration
    this.$.containerBody.style.transition = `transform ${this.params.duration}ms ${this.params.timingFunction}`
  }
}
const params = {
  duration: 1200,
  timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
}


function checkBrowser(){
  //Do not run smoothscroll if on Safari
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      if($(window).width() > 991){
        new SmoothScroll('.body_container', params);
      }
    } else {
      //Is Safari
    }
  }
}

checkBrowser();
$(window).resize(function(){
  if($(window).width() > 991){
    //Is on Desktop
    $('.body_container__body').css('margin-bottom', $('.contact').outerHeight() + 'px'); 
  }
  else {
    $('.body_container__body').css('margin-bottom', '0px'); 
  }
});

