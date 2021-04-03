///////////////////////////////// ANIMATEANYTHING.JS /////////////////////////////////

// adapted from: http://gsgd.co.uk/sandbox/jquery/easing/

// for visual examples, see: https://easings.net/en



var AJS = {

	linear: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		return t*(c/d) + b;
	},

	easeInQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		return c*(t/=d)*t + b;
	},

	easeOutQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c *(t/=d)*(t-2) + b;
	},

	easeInOutQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},

	easeInCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t + b;
	},

	easeOutCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall		
		return c*((t=t/d-1)*t*t + 1) + b;
	},

	easeInOutCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},

	easeInQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t*t + b;
	},

	easeOutQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},

	easeInOutQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},

	easeInQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t*t*t + b;
	},

	easeOutQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},

	easeInOutQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},

	easeInSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},

	easeOutSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},

	easeInOutSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},

	easeInExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},

	easeOutExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},

	easeInOutExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},

	easeInCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},

	easeOutCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},

	easeInOutCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},

	easeInElastic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},

	easeOutElastic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},

	easeInOutElastic: function( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		var s=1.70158, p=0, a=c;
		if (t==0) return b;  
		if ((t/=d/2)==2) return b+c;  
		if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; } else { var s = p/(2*Math.PI) * Math.asin (c/a) }
		if (t < 1) { return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b }
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;	
	},

	easeInBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},

	easeOutBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},

	easeInOutBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},

	easeOutBounce: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var p = t/d;  // progress ratio
		if (p < (1/2.75)) {
			return c*(7.5625*p*p) + b;
		} else if (p < (2/2.75)) {
			return c*(7.5625*(p-=(1.5/2.75))*p + .75) + b;
		} else if (p < (2.5/2.75)) {
			return c*(7.5625*(p-=(2.25/2.75))*p + .9375) + b;
		} else {
			return c*(7.5625*(p-=(2.625/2.75))*p + .984375) + b;
		}
	},

}

/*
 slick-animation.js
 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */

	$.fn.slickAnimation = function () {
			var currentSlickSlider = $(this);

			var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
			var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');

			var animatedClass = 'animated';
			var visible = {opacity: '1'};
			var hidden = {opacity: '0'};

			/**
			 * function for setting animationIn and animationOut class
			 * @param obj
			 * @param type
			 * @param animationIn
			 * @param animatedClass
			 * @param visibility
			 */

			function slickSetAnimationDefault(obj, type, animationIn, animatedClass, visibility) {
					visibility = typeof visibility !== 'undefined' ? visibility : false;

					slickRemoveAnimation(obj, 'delay');
					slickRemoveAnimation(obj, 'duration');

					if (type['opacity'] == 1) {
							obj.addClass(animationIn);
							obj.addClass(animatedClass);
					} else {
							obj.removeClass(animationIn);
							obj.removeClass(animatedClass);
					}

					if (visibility) obj.css(type);
			}

			/**
			 * get timeout when delay, duration, delay and duration is set
			 * @param delayIn
			 * @param durationIn
			 * @returns {number}
			 */

			function getTimeout(delayIn, durationIn) {
					if (delayIn) {
							return delayIn * 1000 + 1000;

					} else if (durationIn) {
							return durationIn * 1000;

					} else if ((delayIn) || (durationIn)) {
							return (delayIn * 1000) + (durationIn * 1000);
					}
					return 1000;
			}

			/**
			 * add css animations for delay and duration
			 * @param obj
			 * @param animation
			 * @param value
			 */
			function slickAddAnimation(obj, animation, value) {
					var delayInAttr = [
							'animation-' + animation,
							'-webkit-animation-' + animation,
							'-moz-animation-' + animation,
							'-o-animation-' + animation,
							'-ms-animation-' + animation
					];
					var delayInAttributes = {};
					delayInAttr.forEach(function (entry) {

							delayInAttributes[entry] = value + 's';
					});
					obj.css(delayInAttributes);
			}

			/**
			 * remove css animations for delay and duration
			 * @param obj
			 * @param animation
			 */
			function slickRemoveAnimation(obj, animation) {
					var delayInAttr = [
							'animation-' + animation,
							'-webkit-animation-' + animation,
							'-moz-animation-' + animation,
							'-o-animation-' + animation,
							'-ms-animation-' + animation
					];
					var delayInAttributes = {};
					delayInAttr.forEach(function (entry) {

							delayInAttributes[entry] = '';
					});
					obj.css(delayInAttributes);
			}

			slickItems.each(function () {
					var slickItem = $(this);

					slickItem.find('[data-animation-in]').each(function () {
							var self = $(this);

							self.css(hidden);

							var animationIn = self.attr('data-animation-in');
							var animationOut = self.attr('data-animation-out');
							var delayIn = self.attr('data-delay-in');
							var durationIn = self.attr('data-duration-in');
							var delayOut = self.attr('data-delay-out');
							var durationOut = self.attr('data-duration-out');

							if (animationOut) {
									if (firstSlickItem.length > 0) {
											if (slickItem.hasClass('slick-current')) {

													slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

													if (delayIn) {
															slickAddAnimation(self, 'delay', delayIn);
													}
													if (durationIn) {
															slickAddAnimation(self, 'duration', durationIn);
													}

													setTimeout(function () {
															slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
															slickSetAnimationDefault(self, visible, animationOut, animatedClass);
															if (delayOut) {
																	slickAddAnimation(self, 'delay', delayOut);
															}
															if (durationOut) {
																	slickAddAnimation(self, 'duration', durationOut);
															}
															setTimeout(function() {
																	slickRemoveAnimation(self, 'delay');
																	slickRemoveAnimation(self, 'duration');
															}, getTimeout(delayOut, durationOut));

													}, getTimeout(delayIn, durationIn));
											}
									}

									currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
											if (slickItem.hasClass('slick-current')) {

													slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

													if (delayIn) {
															slickAddAnimation(self, 'delay', delayIn);
													}
													if (durationIn) {
															slickAddAnimation(self, 'duration', durationIn);
													}

													setTimeout(function () {
															slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
															slickSetAnimationDefault(self, visible, animationOut, animatedClass);

															if (delayOut) {
																	slickAddAnimation(self, 'delay', delayOut);
															}
															if (durationOut) {
																	slickAddAnimation(self, 'duration', durationOut);
															}
															setTimeout(function() {
																	slickRemoveAnimation(self, 'delay');
																	slickRemoveAnimation(self, 'duration');
															}, getTimeout(delayOut, durationOut));

													}, getTimeout(delayIn, durationIn));
											}
									});

									currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
											slickSetAnimationDefault(self, hidden, animationOut, animatedClass, true);

									});
							} else {

									if (firstSlickItem.length > 0) {
											if (slickItem.hasClass('slick-current')) {
													slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

													if (delayIn) {
															slickAddAnimation(self, 'delay', delayIn);
													}
													if (durationIn) {
															slickAddAnimation(self, 'duration', durationIn);

													}
											}
									}

									currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
											if (slickItem.hasClass('slick-current')) {
													slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

													if (delayIn) {
															slickAddAnimation(self, 'delay', delayIn);
													}
													if (durationIn) {
															slickAddAnimation(self, 'duration', durationIn);
													}
											}
									});


									currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
											slickSetAnimationDefault(self, hidden, animationIn, animatedClass, true);
									});
							}

					});
			});
			return this;
	}