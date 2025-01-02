(function () {
	"use strict";

	window.onload = function () {

		// Preloader JS
		const getPreloaderId = document.getElementById('preloader');
		if (getPreloaderId) {
			getPreloaderId.style.display = 'none';
		}

		// Header Sticky
		const getHeaderId = document.getElementById("header-area");
		if (getHeaderId) {
			window.addEventListener('scroll', event => {
				const height = 150;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#header-area').classList.toggle('sticky', scrollTop >= height);
			});
		}

		// Header Sticky
		const getNavbarId = document.getElementById("navbar");
		if (getNavbarId) {
			window.addEventListener('scroll', event => {
				const height = 150;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
			});
		}
	};

	// Menu JS
	let menu, animate;

	(function () {
		// Initialize menu
		let layoutMenuEl = document.querySelectorAll('#layout-menu');
		layoutMenuEl.forEach(function (element) {
			menu = new Menu(element, {
				orientation: 'vertical',
				closeChildren: false
			});
			// Change parameter to true if you want scroll animation
			window.Helpers.scrollToActive((animate = false));
			window.Helpers.mainMenu = menu;
		});

	})();

	// Feather Icons
	feather.replace();

	// Header Burger Button
	const getHeaderBurgerMenuId = document.getElementById('header-burger-menu');
	if (getHeaderBurgerMenuId) {
		const switchtoggle = document.querySelector(".header-burger-menu");
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
			}
		});
	}

	// Sidebar Burger Button
	const getSidebarBurgerMenuId = document.getElementById('sidebar-burger-menu');
	if (getSidebarBurgerMenuId) {
		const switchtoggle = document.querySelector(".sidebar-burger-menu");
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
			}
		});
	}

	// Fullscreen Button
	const getFullscreenButtonId = document.getElementById('fullscreen-button');
	if (getFullscreenButtonId) {
		document.getElementById("fullscreen-button").addEventListener("click", function toggleFullScreen() {
			if (
				(document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
				(document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
				(document.mozFullScreen !== undefined && !document.mozFullScreen) ||
				(document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)
			) {
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				}
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		});
	}
	document.querySelectorAll('.fullscreen-btn').forEach(function(button) {
		button.addEventListener('click', function() {
			button.classList.toggle('active');
		});
	});

	// Init BS Tooltip
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// Keydown
	try {
		function execCommand(command) {
			document.execCommand(command, false, null);
			document.getElementById('editor').focus();
		}

		document.getElementById('editor').addEventListener('keydown', function (e) {
			if (e.key === 'Tab') {
				e.preventDefault();
				document.execCommand('insertText', false, '\t');
			}
		});
	} catch (err) { }

	// Clipboard
	new ClipboardJS('.copy-btn');

	// Popover
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

	// Drag & Drop
	sortable('.js-grid', {
		forcePlaceholderSize: true,
		placeholderClass: 'border'
	});
	sortable('.o-sortable', {
		forcePlaceholderSize: true,
		placeholderClass: 'border'
	});

	// Multiple Range Sliders
	const getRangeSlidersId = document.querySelectorAll('slider');
	if (getRangeSlidersId) {
		// Single
		try {
			ionRangeSlider('.single-slider');
			document.querySelectorAll('.slider').forEach(function (slider) {
				ionRangeSlider(slider, {
					min: 0,
					max: 5000,
					prefix: "$",
					grid: true,
					grid_num: 5,
					step: 100,
				});
			});
		} catch (err) { }
	}

	// Review Rating
	const ratings = document.querySelectorAll('.rating');
	ratings.forEach(rating => {
		rating.addEventListener('click', () => {
			// reset all ratings to default state
			ratings.forEach(rating => {
				rating.classList.remove('active');
			});

			// add active class to clicked rating and all previous ratings
			rating.classList.add('active');
			let prevRating = rating.previousElementSibling;
			while (prevRating) {
				prevRating.classList.add('active');
				prevRating = prevRating.previousElementSibling;
			}
		});
	});

	// ToastBtn JS
	const toastTrigger = document.getElementById('liveToastBtn')
	const toastLiveExample = document.getElementById('liveToast')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}

	// Password JS
	try {
		const passwordInput = document.getElementById("password");
		const passwordToggleIcon = document.querySelector(".password-toggle-icon");

		passwordToggleIcon.addEventListener("click", function () {
			if (passwordInput.type === "password") {
				passwordInput.type = "text";
				passwordToggleIcon.classList.remove("ri-eye-off-line");
				passwordToggleIcon.classList.add("ri-eye-line");
			} else {
				passwordInput.type = "password";
				passwordToggleIcon.classList.remove("ri-eye-line");
				passwordToggleIcon.classList.add("ri-eye-off-line");
			}
		});

	} catch { }

	// Tagss
	document.addEventListener('DOMContentLoaded', function () {
		const tagContainer = document.getElementById('tagContainer');
		const tagInput = document.getElementById('tagInput');
		if (tagInput) {
			tagInput.addEventListener('keydown', function (event) {
				if (event.key === 'Enter' && tagInput.value.trim() !== '') {
					createTag(tagInput.value.trim());
					tagInput.value = '';
				}
			});
		}
		function createTag(tagText) {
			const tag = document.createElement('div');
			tag.classList.add('tag');
			tag.innerHTML = `${tagText} <span class="tag-close">&#10006;</span>`;

			tag.querySelector('.tag-close').addEventListener('click', function () {
				tag.remove();
			});

			tagContainer.appendChild(tag);
		}
	});

	// Media JS
	document.addEventListener('DOMContentLoaded', function () {
		const MediaContainer = document.getElementById('MediaContainer');
		const MediaInput = document.getElementById('MediaInput');
		if (MediaInput) {
			MediaInput.addEventListener('keydown', function (event) {
				if (event.key === 'Enter' && MediaInput.value.trim() !== '') {
					createTag(MediaInput.value.trim());
					MediaInput.value = '';
				}
			});
		}
		function createTag(tagText) {
			const tag = document.createElement('div');
			tag.classList.add('tag');
			tag.innerHTML = `${tagText} <span class="tag-close">&#10006;</span>`;

			tag.querySelector('.tag-close').addEventListener('click', function () {
				tag.remove();
			});

			MediaContainer.appendChild(tag);
		}
	});

	// Add Team Member JS
	document.addEventListener('DOMContentLoaded', function () {
		const AddTeamMemberContainer = document.getElementById('AddTeamMemberContainer');
		const AddTeamMemberInput = document.getElementById('AddTeamMemberInput');
		if (AddTeamMemberInput) {
			AddTeamMemberInput.addEventListener('keydown', function (event) {
				if (event.key === 'Enter' && AddTeamMemberInput.value.trim() !== '') {
					createTag(AddTeamMemberInput.value.trim());
					AddTeamMemberInput.value = '';
				}
			});
		}
		function createTag(tagText) {
			const tag = document.createElement('div');
			tag.classList.add('tag');
			tag.innerHTML = `${tagText} <span class="tag-close">&#10006;</span>`;

			tag.querySelector('.tag-close').addEventListener('click', function () {
				tag.remove();
			});

			AddTeamMemberContainer.appendChild(tag);
		}
	});

	// Input JS
	try {
		var resultEl = document.querySelector(".resultSet"),
			plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
		for (var i = 0; i < plusMinusWidgets.length; i++) {
			plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
			plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
			plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
		}
		function clickHandler(event) {
			var countEl = event.target.parentNode.querySelector(".count");
			if (event.target.className.match(/\bminusBtn\b/)) {
				countEl.value = Number(countEl.value) - 1;
			}
			else if (event.target.className.match(/\bplusBtn\b/)) {
				countEl.value = Number(countEl.value) + 1;
			}
			triggerEvent(countEl, "change");
		};
		function changeHandler(event) {
			resultEl.value = 0;
			for (var i = 0; i < plusMinusWidgets.length; i++) {
				resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
			}
		};
		function triggerEvent(el, type) {
			if ('createEvent' in document) {
				var e = document.createEvent('HTMLEvents');
				e.initEvent(type, false, true);
				el.dispatchEvent(e);
			}
			else {
				var e = document.createEventObject();
				e.eventType = type;
				el.fireEvent('on' + e.eventType, e);
			}
		}
	} catch { }

	// From Validation
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(() => {
		'use strict'

		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation')

		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
	})()

	// Quill Editor
	try {
		const getEditorId = document.getElementById('editor-container');
		if (getEditorId) {
			let quill = new Quill('#editor-container', {
				modules: {
					syntax: true,
					toolbar: '#toolbar-container'
				},
				placeholder: 'Write your message here',
				theme: 'snow'
			});
		}
		const getProductEditorId = document.getElementById('product-editor-container');
		if (getProductEditorId) {
			let quill = new Quill('#product-editor-container', {
				modules: {
					syntax: true,
					toolbar: '#toolbar-container'
				},
				theme: 'snow'
			});
		}
		const getMetaEditorId = document.getElementById('meta-editor-container');
		if (getMetaEditorId) {
			let quill = new Quill('#meta-editor-container', {
				modules: {
					syntax: true,
					toolbar: '#meta-toolbar-container'
				},
				theme: 'snow'
			});
		}
	} catch { }

	// myTable
	const getHeadersBurgerMenuId = document.getElementById('myTable');
	if (getHeadersBurgerMenuId) {
		let x = new RdataTB('myTable');
	}

	// Calendar JS
	try {
		const getHeaderssBurgerMenuId = document.getElementById('calendar-body');
		if (getHeaderssBurgerMenuId) {
			document.addEventListener('DOMContentLoaded', function () {
				updateCalendar(new Date());
			});

			function updateCalendar(date) {
				const calendarBody = document.getElementById('calendar-body');
				const monthYear = document.getElementById('month-year');

				// Clear existing content
				calendarBody.innerHTML = '';

				// Set the month and year
				const options = { month: 'long', year: 'numeric' };
				monthYear.textContent = date.toLocaleDateString('en-US', options);

				// Get the first day of the month
				const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
				const startingDay = firstDay.getDay();

				// Get the last day of the month
				const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
				const endingDay = lastDay.getDate();

				// Create calendar days
				let day = 1;
				for (let i = 0; i < 6; i++) {
					const row = document.createElement('tr');

					for (let j = 0; j < 7; j++) {
						if (i === 0 && j < startingDay) {
							const cell = document.createElement('td');
							row.appendChild(cell);
						} else if (day <= endingDay) {
							const cell = document.createElement('td');
							cell.textContent = day;

							// Highlight the active date
							if (day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
								cell.classList.add('active-date');
							}

							row.appendChild(cell);
							day++;
						}
					}

					calendarBody.appendChild(row);

					// Stop if all days are done
					if (day > endingDay) {
						break;
					}
				}
			}
		}
	} catch { }

	// Project Management Calendar JS
	const getProjectManagementId = document.getElementById('calendari');
	if (getProjectManagementId) {
		var mesos = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		var dies_abr = [
			'Mon',
			'Tue',
			'Wed',
			'Thu',
			'Fri',
			'Sat',
			'Sun'
		];
		Number.prototype.pad = function(num) {
			var str = '';
			for(var i = 0; i < (num-this.toString().length); i++)
				str += '0';
			return str += this.toString();
		}
		function calendari(widget, data)
		{
			var original = widget.getElementsByClassName('actiu')[0];
			if(typeof original === 'undefined')
			{
				original = document.createElement('table');
				original.setAttribute('data-actual',
				data.getFullYear() + '/' +
				data.getMonth().pad(2) + '/' +
				data.getDate().pad(2))
				widget.appendChild(original);
			}
			var diff = data - new Date(original.getAttribute('data-actual'));
			diff = new Date(diff).getMonth();
			var e = document.createElement('table');
			e.className = diff  === 0 ? 'amagat-esquerra' : 'amagat-dreta';
			e.innerHTML = '';
			widget.appendChild(e);
			e.setAttribute('data-actual',
			data.getFullYear() + '/' +
			data.getMonth().pad(2) + '/' +
			data.getDate().pad(2))
			var fila = document.createElement('tr');
			var titol = document.createElement('th');
			titol.setAttribute('colspan', 7);
			var boto_prev = document.createElement('button');
			boto_prev.className = 'boto-prev';
			boto_prev.innerHTML = '';
			var boto_next = document.createElement('button');
			boto_next.className = 'boto-next';
			boto_next.innerHTML = '';
			titol.appendChild(boto_prev);
			titol.appendChild(document.createElement('span')).innerHTML = 
				mesos[data.getMonth()] + '<span class="any">' + data.getFullYear() + '</span>';
			titol.appendChild(boto_next);
			boto_prev.onclick = function() {
				data.setMonth(data.getMonth() - 1);
				calendari(widget, data);
			};
			boto_next.onclick = function() {
				data.setMonth(data.getMonth() + 1);
				calendari(widget, data);
			};
			fila.appendChild(titol);
			e.appendChild(fila);
			fila = document.createElement('tr');
			for(var i = 1; i < 7; i++)
			{
				fila.innerHTML += '<th>' + dies_abr[i] + '</th>';
			}
			fila.innerHTML += '<th>' + dies_abr[0] + '</th>';
			e.appendChild(fila);
			/* Obtinc el dia que va acabar el mes anterior */
			var inici_mes =
				new Date(data.getFullYear(), data.getMonth(), -1).getDay();
			var actual = new Date(data.getFullYear(),
			data.getMonth(),
			-inici_mes);
			/* 6 setmanes per cobrir totes les posiblitats
			*  Quedaria mes consistent alhora de mostrar molts mesos 
			*  en una quadricula */
			for(var s = 0; s < 6; s++)
			{
				var fila = document.createElement('tr');
				for(var d = 1; d < 8; d++)
				{
				var cela = document.createElement('td');
				var span = document.createElement('span');
				cela.appendChild(span);
					span.innerHTML = actual.getDate();
					if(actual.getMonth() !== data.getMonth())
						cela.className = 'fora';
					/* Si es avui el decorem */
					if(data.getDate() == actual.getDate() &&
					data.getMonth() == actual.getMonth())
					cela.className = 'avui';
				actual.setDate(actual.getDate()+1);
					fila.appendChild(cela);
				}
				e.appendChild(fila);
			}
			setTimeout(function() {
				e.className = 'actiu';
				original.className +=
				diff === 0 ? ' amagat-dreta' : ' amagat-esquerra';
			}, 20);
			original.className = 'inactiu';
			setTimeout(function() {
				var inactius = document.getElementsByClassName('inactiu');
				for(var i = 0; i < inactius.length; i++)
					widget.removeChild(inactius[i]);
			}, 0);
		}
		calendari(document.getElementById('calendari'), new Date());
	}

	// Event Calendar JS
	const getEventCalendarId = document.getElementById('calendar');
	if (getEventCalendarId) {
		document.addEventListener('DOMContentLoaded', function() {
			var calendarEl = document.getElementById('calendar');
	
			var calendar = new FullCalendar.Calendar(calendarEl, {
			headerToolbar: {
				right: 'today,prev,next',
				left: 'title',
			},
			initialDate: '2024-06-30',
			navLinks: true, // can click day/week names to navigate views
			businessHours: true, // display business hours
			editable: true,
			selectable: true,
			events: [
				{
					title: '10:00 - 12:30 PM Annual Conference 2023',
					start: '2024-06-04',
					className: 'success'
				},
				{
					title: '2:30 - 5:00 PM Tech Summit 2024',
					start: '2024-06-14',
					className: 'primary'
				},
				{
					title: '6:00 - 9:00 PM Product Lunch Webinar',
					start: '2024-06-23',
					className: 'primary-div'
				},
				{
					title: '9:00 - 12:00 PM Web Development Seminar',
					start: '2024-06-28',
					className: 'danger'
				},
			],
		}); 
		calendar.render();
		});
	}
	
	// Courses Slider JS
	var swiper = new Swiper(".courses-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
    });

	// Upcoming Events JS
	var swiper = new Swiper(".upcoming-events-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
    });

	// Recent Property JS
	var swiper = new Swiper(".recent-property-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".swiper-pagination3",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 1,
			},
			1600: {
				slidesPerView: 1,
			},
			1700: {
				slidesPerView: 2,
			},
		}
    });

	// Team Slider JS
	var swiper = new Swiper(".team-slide", {
        slidesPerView: 1,
        spaceBetween: 25,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev",
          	prevEl: ".next",
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
		}
    });

	// Cryptocurrency Slider JS
	var swiper = new Swiper(".cryptocurrency-slide", {
        slidesPerView: 1,
        spaceBetween: 25,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev",
          	prevEl: ".next",
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},
		}
    });

	// NFT Slider JS
	var swiper = new Swiper(".nft-slide", {
        slidesPerView: 1,
        spaceBetween: 25,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev",
          	prevEl: ".next",
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},
		}
    });

	// NFT Slider Two JS
	var swiper = new Swiper(".nft-slide-two", {
        slidesPerView: 1,
        spaceBetween: 25,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev",
          	prevEl: ".next",
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 2,
			},
			1440: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
		}
    });

	// Top Collections JS
	var swiper = new Swiper(".top-collections-slide", {
        slidesPerView: 1,
        spaceBetween: 25,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			clickable: true,
			el: ".swiper-pagination-top-collections",
		},
    });

	// Thumb Images Upload JS
	const getImagePreviewId = document.getElementById('imagePreview');
	if (getImagePreviewId) {
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function(e) {
					var imagePreview = document.getElementById('imagePreview');
					imagePreview.style.backgroundImage = 'url(' + e.target.result + ')';
					imagePreview.style.display = 'none';
					setTimeout(function() {
						imagePreview.style.display = 'block';
						imagePreview.style.transition = 'opacity 0.65s';
						imagePreview.style.opacity = 1;
					}, 0);
				};
				reader.readAsDataURL(input.files[0]);
			}
		}
		
		document.getElementById('imageUpload').addEventListener('change', function() {
			readURL(this);
		});
	}

	// Days, Hrs, Min, Sec JS 
	const getCountDownId = document.getElementsByClassName('clockdiv');
	if (getCountDownId) {
		document.addEventListener('readystatechange', event => {
			if (event.target.readyState === "complete") {
				var clockdiv = document.getElementsByClassName("clockdiv");
				var countDownDate = new Array();
					for (var i = 0; i < clockdiv.length; i++) {
						countDownDate[i] = new Array();
						countDownDate[i]['el'] = clockdiv[i];
						countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
						countDownDate[i]['days'] = 0;
						countDownDate[i]['hours'] = 0;
						countDownDate[i]['seconds'] = 0;
						countDownDate[i]['minutes'] = 0;
					}
					var countdownfunction = setInterval(function() {
						for (var i = 0; i < countDownDate.length; i++) {
						var now = new Date().getTime();
						var distance = countDownDate[i]['time'] - now;
						countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
						countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
						if (distance < 0) {
							countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
						}
						else {
							countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
							countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
							countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
							countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
						}
					}  
				}, 1000);
			}
		});
	}

	// File Uploads JS
	try {
		const multipleEvents = (element, eventNames, listener) => {
			const events = eventNames.split(' ');
		
			events.forEach(event => {
				element.addEventListener(event, listener, false);
			});
		};
		const fileUpload = () => {
			const INPUT_FILE = document.querySelector('#upload-files');
			const INPUT_CONTAINER = document.querySelector('#upload-container');
			const FILES_LIST_CONTAINER = document.querySelector('#files-list-container')
			const FILE_LIST = [];
		
			multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
				INPUT_CONTAINER.classList.add('active');
			});
			
			multipleEvents(INPUT_FILE, 'dragleave dragend drop change', () => {
				INPUT_CONTAINER.classList.remove('active');
			});
			
			INPUT_FILE.addEventListener('change', () => {
			const files = [...INPUT_FILE.files];
			
			files.forEach(file => {
				const fileURL = URL.createObjectURL(file);
				const fileName = file.name;
				const uploadedFiles = {
					name: fileName,
					url: fileURL,
				};
				
				FILE_LIST.push(uploadedFiles);
			});
			FILES_LIST_CONTAINER.innerHTML = '';
			FILE_LIST.forEach(addedFile => {
				const content = `
					<div class="form__files-container">
					<span class="form__text">${addedFile.name}</span>
					<div>
						<a class="form__icon" href="${addedFile.url}" target="_blank" title="Preview">&#128065;</a>
						<a class="form__icon" href="${addedFile.url}" title="Download" download>&#11123;</a>
					</div>
					</div>
				`;
		
				FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
				});
			});
		};
		fileUpload();
	} catch { }


	// Sales By Locations Map JS
	const getSalesByLocationsMapId = document.getElementById('sales_by_locations_map');
	if (getSalesByLocationsMapId) {
		var markers = [
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "Germany", coords: [61.524, 105.3188] },
			{ name: "United Kingdom", coords: [56.1304, -106.3468] },
			{ name: "Canada", coords: [71.7069, -42.6043] },
			{ name: "Portugal", coords: [80.7069, -70.6043] },
			{ name: "Spain", coords: [0.7069, -40.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#sales_by_locations_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Enrolled by Countries Map JS
	const getEnrolledByCountriesMapId = document.getElementById('enrolled_by_countries_map');
	if (getEnrolledByCountriesMapId) {
		var markers = [
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "Germany", coords: [61.524, 105.3188] },
			{ name: "United Kingdom", coords: [56.1304, -106.3468] },
			{ name: "Canada", coords: [71.7069, -42.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#enrolled_by_countries_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Users by Country Map JS
	const getUsersByCountryMapId = document.getElementById('users_by_country_map');
	if (getUsersByCountryMapId) {
		var markers = [
			{ name: "Canada", coords: [56.1304, -106.3468] },
			{ name: "Australia", coords: [71.7069, -42.6043] },
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "United Kingdom", coords: [61.524, 105.3188] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#users_by_country_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Worldwide Top Creators Map JS
	const getWorldwideTopCreatorsMapId = document.getElementById('worldwide_top_creators_map');
	if (getWorldwideTopCreatorsMapId) {
		var markers = [
			{ name: "Japan", coords: [56.1304, -106.3468] },
			{ name: "Australia", coords: [71.7069, -42.6043] },
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "United Kingdom", coords: [61.524, 105.3188] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#worldwide_top_creators_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Sales By Country Map JS
	const getSalesByCountryMapId = document.getElementById('sales_by_country_map');
	if (getSalesByCountryMapId) {
		var markers = [
			{ name: "Japan", coords: [56.1304, -106.3468] },
			{ name: "Australia", coords: [71.7069, -42.6043] },
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "Germany", coords: [61.524, 105.3188] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#sales_by_country_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Most Sales Location Map JS
	const getMostSalesLocationId = document.getElementById('most_sales_location');
	if (getMostSalesLocationId) {
		var markers = [
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "Germany", coords: [61.524, 105.3188] },
			{ name: "United Kingdom", coords: [56.1304, -106.3468] },
			{ name: "Canada", coords: [71.7069, -42.6043] },
			{ name: "Portugal", coords: [80.7069, -70.6043] },
			{ name: "Spain", coords: [0.7069, -40.6043] },
			{ name: "France", coords: [70.7069, -100.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#most_sales_location",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Shipment To Top Map JS
	const getShipmentToTopId = document.getElementById('shipment_to_top');
	if (getShipmentToTopId) {
		var markers = [
			{ name: "United States", coords: [26.8206, 30.8025] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#shipment_to_top",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#ffffff' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#ffffff" },
				selected: { fill: "#ffffff" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Call Center Geography Map JS
	const getCallCenterGeographyId = document.getElementById('call_center_geography');
	if (getCallCenterGeographyId) {
		var markers = [
			{ name: "United States", coords: [26.8206, 30.8025] },
			{ name: "Canada", coords: [71.7069, -42.6043] },
			{ name: "Brazil", coords: [0.7069, -40.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#call_center_geography",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Range Datepicker JS
	const getRangeDatepickerId = document.getElementById('range_datepicker');
	if (getRangeDatepickerId) {
		var picker = new Lightpick({
			field: document.getElementById('range_datepicker'),
			singleDate: false,
			onSelect: function(start, end){
				var str = '';
				str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
				str += end ? end.format('Do MMMM YYYY') : '...';
				document.getElementById('range_datepicker').innerHTML = str;
			}
		});
	}

	// Stepper Tabs JS
	try {
		let currentTab = 0; // Initialize to the first tab
		function showTab(index) {
			const tabs = document.querySelectorAll('.tab');
			const contents = document.querySelectorAll('.tab-contents');
			// Remove 'active' class from all tabs and contents
			tabs.forEach(tab => tab.classList.remove('active'));
			contents.forEach(content => content.classList.remove('active'));
			// Set 'active' class on selected tab and content
			tabs[index].classList.add('active');
			contents[index].classList.add('active');
			currentTab = index;
		}
		function nextTab() {
			if (currentTab < 5) {
				showTab(currentTab + 1);
			}
		}
		function previousTab() {
			if (currentTab > 0) {
				showTab(currentTab - 1);
			}
		}
		document.querySelectorAll('.tab').forEach((tab, index) => {
			tab.addEventListener('click', () => showTab(index));
		});
		document.getElementById('nextButton').addEventListener('click', nextTab);
		document.getElementById('prevButton').addEventListener('click', previousTab);
	} catch { }

	//  Digital Date
	const getDigitalDateId = document.getElementById('digital_date');
	if (getDigitalDateId) {
		function updateDate() {
			var now = new Date();
			var date = now.getDate();
			var monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"];
			var month = monthNames[now.getMonth()];
			var year = now.getFullYear();
			var digitalDate = document.getElementById("digital_date");
			digitalDate.innerHTML = "Today - " + month + " " + date + ", " + year;
		}
		setInterval(updateDate, 1000);
	}

	// Upcoming Events JS
	var swiper = new Swiper(".upcoming-events-slide-two", {
        slidesPerView: 1,
        spaceBetween: 25,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			clickable: true,
			el: ".swiper-pagination-upcoming-events",
		},
    });
	
	// Theme Settings
	// Dark/Light Toggle
	const getSwitchToggleId = document.getElementById('switch-toggle');
	if (getSwitchToggleId) {
		const switchtoggle = document.querySelector(".switch-toggle");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("data-theme") === "dark") {
				document.body.setAttribute("data-theme", "light");
				localStorage.setItem("trezo_theme", "light");
			} else {
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("trezo_theme", "dark");
			}
		});
	}

	// Only Sidebar Light & Dark
	const getSidebarToggleId = document.getElementById('sidebar-light-dark');
	if (getSidebarToggleId) {
		const switchtoggle = document.querySelector(".sidebar-light-dark");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("sidebar-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-dark-light-data-theme") === "sidebar-dark") {
				document.body.setAttribute("sidebar-dark-light-data-theme", "sidebar-light");
				localStorage.setItem("trezo_theme", "sidebar-light");
			} else {
				document.body.setAttribute("sidebar-dark-light-data-theme", "sidebar-dark");
				localStorage.setItem("trezo_theme", "sidebar-dark");
			}
		});
	}

	// Only Header Light & Dark
	const getHeaderToggleId = document.getElementById('header-light-dark');
	if (getHeaderToggleId) {
		const switchtoggle = document.querySelector(".header-light-dark");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("header-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("header-dark-light-data-theme") === "header-dark") {
				document.body.setAttribute("header-dark-light-data-theme", "header-light");
				localStorage.setItem("trezo_theme", "header-light");
			} else {
				document.body.setAttribute("header-dark-light-data-theme", "header-dark");
				localStorage.setItem("trezo_theme", "header-dark");
			}
		});
	}

	// Only Footer Light & Dark
	const getFooterToggleId = document.getElementById('footer-light-dark');
	if (getFooterToggleId) {
		const switchtoggle = document.querySelector(".footer-light-dark");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("footer-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("footer-dark-light-data-theme") === "footer-dark") {
				document.body.setAttribute("footer-dark-light-data-theme", "footer-light");
				localStorage.setItem("trezo_theme", "footer-light");
			} else {
				document.body.setAttribute("footer-dark-light-data-theme", "footer-dark");
				localStorage.setItem("trezo_theme", "footer-dark");
			}
		});
	}

	// Only Card Radius & Square
	const getRadiusSquaresToggleId = document.getElementById('card-radius-square');
	if (getRadiusSquaresToggleId) {
		const switchtoggle = document.querySelector(".card-radius-square");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("card-radius-square-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("card-radius-square-data-theme") === "card-square") {
				document.body.setAttribute("card-radius-square-data-theme", "card-radius");
				localStorage.setItem("trezo_theme", "card-radius");
			} else {
				document.body.setAttribute("card-radius-square-data-theme", "card-square");
				localStorage.setItem("trezo_theme", "card-square");
			}
		});
	}

	// Only Card BG Style
	const getCardBgToggleId = document.getElementById('card-bg');
	if (getCardBgToggleId) {
		const switchtoggle = document.querySelector(".card-bg");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("card-bg-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("card-bg-data-theme") === "card-bg-normal") {
				document.body.setAttribute("card-bg-data-theme", "card-bg-gray");
				localStorage.setItem("trezo_theme", "card-bg-gray");
			} else {
				document.body.setAttribute("card-bg-data-theme", "card-bg-normal");
				localStorage.setItem("trezo_theme", "card-bg-normal");
			}
		});
	}

	// Only Fluid & Boxed Style
	const getBoxedToggleId = document.getElementById('boxed-style');
	if (getBoxedToggleId) {
		const switchtoggle = document.querySelector(".boxed-style");
		const savedTheme = localStorage.getItem("trezo_theme");
		if (savedTheme) {
			document.body.setAttribute("boxed-style-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("boxed-style-data-theme") === "boxed-style-fluid") {
				document.body.setAttribute("boxed-style-data-theme", "boxed-style-boxed");
				localStorage.setItem("trezo_theme", "boxed-style-boxed");
			} else {
				document.body.setAttribute("boxed-style-data-theme", "boxed-style-fluid");
				localStorage.setItem("trezo_theme", "boxed-style-fluid");
			}
		});
	}

	// Back to Top JS
	const getId = document.getElementById("backtotop");
	if (getId) {
		const topbutton = document.getElementById("backtotop");
		topbutton.onclick = function (e) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		};
		window.onscroll = function () {
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				topbutton.style.opacity = "1";
			} else {
				topbutton.style.opacity = "0";
			}
		};
	}

	// Admin Link Active Color JS
	document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll(".admin-item-link");
        const activeLink = localStorage.getItem("activeLink");

        // Apply active class from localStorage if it exists
        if (activeLink) {
            links.forEach(link => {
                if (link.getAttribute("href") === activeLink) {
                    link.classList.add("active");
                }
            });
        }

        // Add click event to each link
        links.forEach(link => {
            link.addEventListener("click", function() {
                // Remove active class from all links
                links.forEach(l => l.classList.remove("active"));
                // Add active class to the clicked link
                link.classList.add("active");
                // Save to localStorage
                localStorage.setItem("activeLink", link.getAttribute("href"));
            });
        });
    });

})();

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('trezo_rtl', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('trezo_rtl') === 'rtl') {
			setTheme('ltr');
		} else {
			setTheme('rtl');
		}
	}
	
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('trezo_rtl') === 'rtl') {
			setTheme('rtl');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('ltr');
		document.getElementById('slider').checked = true;
		}
	})();
} catch { }