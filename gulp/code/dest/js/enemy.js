"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Enemy=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type=e,n.hp=1,n.speed=10,n.dieImgs=[],n.score=10,n}return _inherits(t,Base),_createClass(t,[{key:"init",value:function(){switch(this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),gameEngine.allEnemys.push(this),this.type){case this.Enemy_Type_Large:this.ele.className="enemy-large",this.hp=this.Enemy_Hp_Large,this.speed=this.Enemy_Speed_Large,this.dieImgs=["../img/plane3_die1.png","../img/plane3_die2.png","../img/plane3_die3.png","../img/plane3_die4.png","../img/plane3_die5.png","../img/plane3_die6.png"],this.score=30;break;case this.Enemy_Type_Middle:this.ele.className="enemy-middle",this.hp=this.Enemy_Hp_Middle,this.speed=this.Enemy_Speed_Middle,this.dieImgs=["../img/plane2_die1.png","../img/plane2_die2.png","../img/plane2_die3.png","../img/plane2_die4.png"],this.score=20;break;case this.Enemy_Type_Small:this.ele.className="enemy-small",this.hp=this.Enemy_Hp_Small,this.speed=this.Enemy_Speed_Small,this.dieImgs=["../img/plane1_die1.png","../img/plane1_die2.png","../img/plane1_die3.png"],this.score=10;break;default:alert("没有这种敌机")}return this.ele.style.left=parseInt(Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth))+"px",this.ele.style.top=-this.ele.offsetHeight+"px",this}},{key:"move",value:function(){var e=this;this.timer=setInterval(function(){e.ele.offsetTop>gameEngine.ele.offsetHeight?(clearInterval(e.timer),gameEngine.ele.removeChild(e.ele),gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(e),1)):e.ele.style.top=e.ele.offsetTop+e.speed+"px"},30)}},{key:"hurt",value:function(){0==--this.hp&&(this.boom(),gameEngine.totalScore+=this.score)}},{key:"boom",value:function(){var e=this;clearInterval(this.timer);var t=0,n=setInterval(function(){t>=e.dieImgs.length?(clearInterval(n),gameEngine.ele.removeChild(e.ele),gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(e),1)):e.ele.style.backgroundImage="url("+e.dieImgs[t++]+")"},100)}}]),t}();Enemy.prototype.Enemy_Type_Large=3,Enemy.prototype.Enemy_Type_Middle=2,Enemy.prototype.Enemy_Type_Small=1,Enemy.prototype.Enemy_Speed_Large=2,Enemy.prototype.Enemy_Speed_Middle=4,Enemy.prototype.Enemy_Speed_Small=7,Enemy.prototype.Enemy_Hp_Large=8,Enemy.prototype.Enemy_Hp_Middle=3,Enemy.prototype.Enemy_Hp_Small=1;