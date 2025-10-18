$('document').ready(function(){
	
});

"use strict"
const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() || 
			isMobile.BlackBerry() || 
			isMobile.iOS() || 
			isMobile.Opera() || 
			isMobile.Windows());
	}
};

//if(isMobile.iOS()) {
// Любые манипуляции при определении мобильного устройства на операционной системе от Apple: iOS
//}

//if(isMobile.any()) {
// Любые манипуляции при определении айфона
// Доступны следующие условия для операционных систем
// isMobile.Android() - устройство на Андроиде
// isMobile.BlackBerry() - устройство на BlackBerry
// isMobile.iOS() - устройство на iOS
// isMobile.Opera() - устройство, использующее Opera Mini
// isMobile.Windows() - устройство на Windows
// isMobile.any() - устройство на любой мобильной платформе
//}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

    if ( document.documentElement.classList.contains('catalog-open') ) {
      document.documentElement.classList.remove('catalog-open');
    }
    if ( document.documentElement.classList.contains('sub-menu-open') ) {
      document.documentElement.classList.remove('sub-menu-open');
    }
    if ( document.querySelector('._sub-menu-open') ) {
      document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open');
    }
    if ( document.querySelector('._sub-menu-active') ) {
      document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active');
    }
    if ( document.querySelector('._sub-menu-show') ) {
      document.querySelector('._sub-menu-show').classList.remove('_sub-menu-show');
    }
	});
}

// open sub menu script
document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  if ( targetElement.closest('[data-parent]') ) {
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

    if ( subMenu ) {
      const activeLink = document.querySelector('._sub-menu-active');
      const activeBlock = document.querySelector('._sub-menu-open');
      const catalogMenu = document.querySelector('.sub-menu-catalog');

      if ( activeLink && activeLink !== targetElement ) {
        activeLink.classList.remove('_sub-menu-active');
        activeBlock ? activeBlock.classList.remove('_sub-menu-open') : null;
        catalogMenu.classList.remove('_sub-menu-show');
        document.documentElement.classList.remove('sub-menu-open');
      }
      targetElement.classList.toggle('_sub-menu-active');
      subMenu.classList.toggle('_sub-menu-open');
      catalogMenu.classList.toggle('_sub-menu-show');
      document.documentElement.classList.toggle('sub-menu-open');
    } else {
      console.log("Ой ой, нет такого подменю :(");
    }

    e.preventDefault();
  }
  if ( targetElement.closest('.menu__link_catalog') ) {
    //const catalogLink = targetElement.closest('.menu__link_catalog');
    document.documentElement.classList.add('catalog-open');
    e.preventDefault();
  }
  if ( targetElement.closest('.header-secondary-menu__back') ) {
    document.documentElement.classList.remove('catalog-open');

    document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
    document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
    e.preventDefault();
  }
  if ( targetElement.closest('.sub-menu-catalog__back') ) {
    document.documentElement.classList.remove('sub-menu-open');
    document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
    document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
    e.preventDefault();
  }
}

// Кастомный select language
const languageSelect = () => {
  const elements = document.querySelectorAll('.select-language');
  if(elements.length > 0) {
    elements.forEach(element => {
      const choices = new Choices(element, {
        silent: false,
        items: [],
        choices: [],
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: true,
        addItemFilter: null,
        removeItems: true,
        removeItemButton: false,
        editItems: false,
        allowHTML: true,
        duplicateItemsAllowed: true,
        delimiter: ',',
        paste: true,
        searchEnabled: false, //Поиск по селекту
        searchChoices: true,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ['label', 'value'],
        position: 'auto',
        resetScrollPosition: true,
        shouldSort: true,
        shouldSortItems: false,
        sorter: () => {},
        placeholder: false,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: 'auto',
        loadingText: 'Loading...',
        noResultsText: 'No results found', //Текст когда поиск по селекту не находит результата
        noChoicesText: 'No choices to choose from',
        itemSelectText: '',
        uniqueItemText: 'Only unique values can be added',
        customAddItemText: 'Only values matching specific conditions can be added',
        classNames: {
          containerOuter: 'choices',
          containerInner: 'choices__inner',
          input: 'choices__input',
          inputCloned: 'choices__input--cloned',
          list: 'choices__list',
          listItems: 'choices__list--multiple',
          listSingle: 'choices__list--single',
          listDropdown: 'choices__list--dropdown',
          item: 'choices__item',
          itemSelectable: 'choices__item--selectable',
          itemDisabled: 'choices__item--disabled',
          itemChoice: 'choices__item--choice',
          placeholder: 'choices__placeholder',
          group: 'choices__group',
          groupHeading: 'choices__heading',
          button: 'choices__button',
          activeState: 'is-active',
          focusState: 'is-focused',
          openState: 'is-open',
          disabledState: 'is-disabled',
          highlightedState: 'is-highlighted',
          selectedState: 'is-selected',
          flippedState: 'is-flipped',
          loadingState: 'is-loading',
          noResults: 'has-no-results',
          noChoices: 'has-no-choices'
        },
        // Choices uses the great Fuse library for searching. You
        // can find more options here: https://fusejs.io/api/options.html
        fuseOptions: {
          includeScore: true
        },
        labelId: '',
        callbackOnInit: null,
        callbackOnCreateTemplates: null
      });


      let areaLabel = element.getAttribute('aria-label');
      element.closest('.choices').setAttribute('aria-label', areaLabel);
    });
  }
}

languageSelect();



/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */

/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */

/**
 * @param {'min' | 'max'} type
 */

function useDynamicAdapt(type = 'max') {
    const className = '_dynamic_adapt_'
    const attrName = 'data-da'
  
    /** @type {dNode[]} */
    const dNodes = getDNodes()
  
    /** @type {dMediaQuery[]} */
    const dMediaQueries = getDMediaQueries(dNodes)
  
    dMediaQueries.forEach((dMediaQuery) => {
      const matchMedia = window.matchMedia(dMediaQuery.query)
      // массив объектов с подходящим брейкпоинтом
      const filteredDNodes = dNodes.filter(({ breakpoint }) => breakpoint === dMediaQuery.breakpoint)
      const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
      matchMedia.addEventListener('change', mediaHandler)
  
      mediaHandler()
    })
  
    function getDNodes() {
      const result = []
      const elements = [...document.querySelectorAll(`[${attrName}]`)]
  
      elements.forEach((element) => {
        const attr = element.getAttribute(attrName)
        const [toSelector, breakpoint, order] = attr.split(',').map((val) => val.trim())
  
        const to = document.querySelector(toSelector)
  
        if (to) {
          result.push({
            parent: element.parentElement,
            element,
            to,
            breakpoint: breakpoint ?? '767',
            order: order !== undefined ? (isNumber(order) ? Number(order) : order) : 'last',
            index: -1,
          })
        }
      })
  
      return sortDNodes(result)
    }
  
    /**
     * @param {dNode} items
     * @returns {dMediaQuery[]}
     */
    function getDMediaQueries(items) {
      const uniqItems = [...new Set(items.map(({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`))]
  
      return uniqItems.map((item) => {
        const [query, breakpoint] = item.split(',')
  
        return { query, breakpoint }
      })
    }
  
    /**
     * @param {MediaQueryList} matchMedia
     * @param {dNodes} items
     */
    function getMediaHandler(matchMedia, items) {
      return function mediaHandler() {
        if (matchMedia.matches) {
          items.forEach((item) => {
            moveTo(item)
          })
  
          items.reverse()
        } else {
          items.forEach((item) => {
            if (item.element.classList.contains(className)) {
              moveBack(item)
            }
          })
  
          items.reverse()
        }
      }
    }
  
    /**
     * @param {dNode} dNode
     */
    function moveTo(dNode) {
      const { to, element, order } = dNode
      dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
      element.classList.add(className)
  
      if (order === 'last' || order >= to.children.length) {
        to.append(element)
  
        return
      }
  
      if (order === 'first') {
        to.prepend(element)
  
        return
      }
  
      to.children[order].before(element)
    }
  
    /**
     * @param {dNode} dNode
     */
    function moveBack(dNode) {
      const { parent, element, index } = dNode
      element.classList.remove(className)
  
      if (index >= 0 && parent.children[index]) {
        parent.children[index].before(element)
      } else {
        parent.append(element)
      }
    }
  
    /**
     * @param {HTMLElement} element
     * @param {HTMLElement} parent
     */
    function getIndexInParent(element, parent) {
      return [...parent.children].indexOf(element)
    }
  
    /**
     * Функция сортировки массива по breakpoint и order
     * по возрастанию для type = min
     * по убыванию для type = max
     *
     * @param {dNode[]} items
     */
    function sortDNodes(items) {
      const isMin = type === 'min' ? 1 : 0
  
      return [...items].sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.order === b.order) {
            return 0
          }
  
          if (a.order === 'first' || b.order === 'last') {
            return -1 * isMin
          }
  
          if (a.order === 'last' || b.order === 'first') {
            return 1 * isMin
          }
  
          return 0
        }
  
        return (a.breakpoint - b.breakpoint) * isMin
      })
    }
  
    function isNumber(value) {
      return !isNaN(value)
    }
  }
  
useDynamicAdapt();



// mini-cart open/close script
const buttonOpenMiniCart = document.querySelector('.button-open-mini-cart');
const miniCart = document.querySelector('.mini-cart');

if ( buttonOpenMiniCart ) {
  buttonOpenMiniCart.addEventListener("click", function (event) {
    const bodyLockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    miniCart.classList.add('_open-mini-cart');
    document.body.classList.add('_lock');
    document.body.style.paddingRight = bodyLockPaddingValue;
  });
}

if ( miniCart ) {
  miniCart.addEventListener("click", function (event) {
    if ( !event.target.closest('.mini-cart__content') || event.target.closest('.mini-cart__close') ) {
      miniCart.classList.remove('_open-mini-cart');
      document.body.classList.remove('_lock');
      document.body.style.paddingRight = "0px";
    }
  });
}



// Popups script
const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for(let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});



/*Для поддержки старых браузеров!
Полефилы для свойств closest и matches я их нашол в интернете*/

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверям поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMetchesSelector ||
			Element.prototype.mozMetchesSelector ||
			Element.prototype.msMetchesSelector
	}
})();



// Show/Hide password script
const signInForm = document.forms.signIn;

if ( signInForm ) {
	signInForm.addEventListener('click', function (event) {
		if ( event.target.closest('.form-sign-in-or-register__password-button') ) {
			const passwordHideShowButton = event.target;
			const passwordInput = event.target.previousElementSibling;
			if ( passwordInput.type === "password" ) {
				passwordInput.type = "text";
				passwordHideShowButton.classList.add('_eye-open');
				passwordHideShowButton.classList.remove('_eye-slash');
			} else {
				passwordInput.type = "password";
				passwordHideShowButton.classList.add('_eye-slash');
				passwordHideShowButton.classList.remove('_eye-open');
			}
		}
	});
}

const signUpForm = document.forms.signUp;

if ( signUpForm ) {
	signUpForm.addEventListener('click', function (event) {
		if ( event.target.closest('.form-sign-in-or-register__password-button') ) {
			const passwordHideShowButton = event.target;
			const passwordInput = event.target.previousElementSibling;
			if ( passwordInput.type === "password" ) {
				passwordInput.type = "text";
				passwordHideShowButton.classList.add('_eye-open');
				passwordHideShowButton.classList.remove('_eye-slash');
			} else {
				passwordInput.type = "password";
				passwordHideShowButton.classList.add('_eye-slash');
				passwordHideShowButton.classList.remove('_eye-open');
			}
		}
	});
}


// Go to top button script
function scrollToHeader(top) {
  const header = document.querySelector('.header');
  header.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

const buttonGoUp = document.querySelector('.footer__button-go-to-top');
buttonGoUp.addEventListener('click', function(event) {
  scrollToHeader();
});



// Main slider script
let mySlider = new Swiper('.main-slider', {
  navigation: {
		prevEl: '.main-slider__button_prev',
    nextEl: '.main-slider__button_next',
	},
  pagination: {
		el: '.main-slider__pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      const addZero = (index + 1) < 10 ? "0" : "";
			return '<span class="' + className + '">' + addZero + (index + 1) + '</span>';
		}
  },
  autoHeight: true,
});

// New arrivals slider script
let newArrivalsSlider = new Swiper('.new-arrivals-slider', {
  pagination: {
		el: '.new-arrivals-slider__pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
    1200: {
			slidesPerView: 4,
		},
    1510: {
			slidesPerView: 5,
		},
    1824: {
			slidesPerView: 6,
		},
	},
});

let sliderBlock = document.querySelector('.new-arrivals-slider');

if ( isMobile.any() ) {
  if ( sliderBlock ) {
    newArrivalsSlider.autoplay.stop();
  }
} else {
  if ( sliderBlock ) {
    newArrivalsSlider.params.autoplay.disableOnInteraction = false;
    newArrivalsSlider.params.autoplay.delay = 3000;
    newArrivalsSlider.autoplay.start();

    //Остановка автопрокрутки при наведении
    sliderBlock.addEventListener("mouseenter", function (e) {
      newArrivalsSlider.autoplay.stop();
    });

    sliderBlock.addEventListener("mouseleave", function (e) {
      newArrivalsSlider.params.autoplay.disableOnInteraction = false;
      newArrivalsSlider.params.autoplay.delay = 3000;
      newArrivalsSlider.autoplay.start();
    });
  }
}



let productSlider = new Swiper('.product-slider', {
  navigation: {
		prevEl: '.product-slider__button-prev',
    nextEl: '.product-slider__button-next',
	},
  loop: true,
  allowTouchMove: false,
});



// Trending products slider script
let trendingProductsSlider = new Swiper('.trending-products-slider', {
  navigation: {
		prevEl: '.trending-products-slider-button_prev',
    nextEl: '.trending-products-slider-button_next',
	},
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	},
});



// Sale products slider script
let saleProductsSlider = new Swiper('.sale-products-slider', {
  navigation: {
		prevEl: '.sale-products-slider-button_prev',
    nextEl: '.sale-products-slider-button_next',
	},
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	},
});



// Counter input
const productsPerPageCounter = document.querySelector('.products-per-page__container-input');
if ( productsPerPageCounter ) {
  const productsPerPageCounterInput = productsPerPageCounter.querySelector('input');
  const productsPerPageCounterInputMin = productsPerPageCounterInput.min;
  const productsPerPageCounterInputMax = productsPerPageCounterInput.max;
  
  productsPerPageCounter.addEventListener('click', function (event) {
    if (event.target.closest('.products-per-page__button-add') && Number(productsPerPageCounterInput.value) < productsPerPageCounterInputMax) {
      productsPerPageCounterInput.value++;
    }
    if (event.target.closest('.products-per-page__button-remove') && Number(productsPerPageCounterInput.value) > productsPerPageCounterInputMin) {
      productsPerPageCounterInput.value--;
    }
  });
}


// Кастомный main select
const mainSelect = () => {
  const elements = document.querySelectorAll('.select');
  if(elements.length > 0) {
    elements.forEach(element => {
      const choices = new Choices(element, {
        silent: false,
        items: [],
        choices: [],
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: true,
        addItemFilter: null,
        removeItems: true,
        removeItemButton: false,
        editItems: false,
        allowHTML: true,
        duplicateItemsAllowed: true,
        delimiter: ',',
        paste: true,
        searchEnabled: false, //Поиск по селекту
        searchChoices: true,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ['label', 'value'],
        position: 'auto',
        resetScrollPosition: true,
        shouldSort: true,
        shouldSortItems: false,
        sorter: () => {},
        placeholder: false,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: 'auto',
        loadingText: 'Loading...',
        noResultsText: 'No results found', //Текст когда поиск по селекту не находит результата
        noChoicesText: 'No choices to choose from',
        itemSelectText: '',
        uniqueItemText: 'Only unique values can be added',
        customAddItemText: 'Only values matching specific conditions can be added',
        classNames: {
          containerOuter: 'choices',
          containerInner: 'choices__inner',
          input: 'choices__input',
          inputCloned: 'choices__input--cloned',
          list: 'choices__list',
          listItems: 'choices__list--multiple',
          listSingle: 'choices__list--single',
          listDropdown: 'choices__list--dropdown',
          item: 'choices__item',
          itemSelectable: 'choices__item--selectable',
          itemDisabled: 'choices__item--disabled',
          itemChoice: 'choices__item--choice',
          placeholder: 'choices__placeholder',
          group: 'choices__group',
          groupHeading: 'choices__heading',
          button: 'choices__button',
          activeState: 'is-active',
          focusState: 'is-focused',
          openState: 'is-open',
          disabledState: 'is-disabled',
          highlightedState: 'is-highlighted',
          selectedState: 'is-selected',
          flippedState: 'is-flipped',
          loadingState: 'is-loading',
          noResults: 'has-no-results',
          noChoices: 'has-no-choices'
        },
        // Choices uses the great Fuse library for searching. You
        // can find more options here: https://fusejs.io/api/options.html
        fuseOptions: {
          includeScore: true
        },
        labelId: '',
        callbackOnInit: null,
        callbackOnCreateTemplates: null
      });


      let areaLabel = element.getAttribute('aria-label');
      element.closest('.choices').setAttribute('aria-label', areaLabel);
    });
  }
}

mainSelect();



//SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});

	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});
	
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});

		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});

			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}

	//Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}

	//Работа с контентом +
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}

	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}

//SlideToggle +
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;


		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');			
		}, duration);
	}
}

let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		
		window.setTimeout(() => {
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');

			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}



const rangeItems = document.querySelectorAll('[data-range]');

if (rangeItems.length) {
  rangeItems.forEach(rangeItem => {
    const fromValue = rangeItem.querySelector('[data-range-from]');
    const toValue = rangeItem.querySelector('[data-range-to]');
    const item = rangeItem.querySelector('[data-range-item]');
    var inputs = [fromValue, toValue];
    noUiSlider.create(item, {
      start: [Number(fromValue.value), Number(toValue.value)],
      // tooltips это подсказки над ползунками
      tooltips: [true, true],
      connect: true,
      range: {
          'min': [Number(fromValue.dataset.rangeFrom)],
          'max': [Number(toValue.dataset.rangeTo)]
      }
    });

    // Скрипт отображение значения слайдера в инпутах
    item.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    //Скрипт ввода значения в input и отображения его на слайдере
    inputs.forEach(function (input, handle) {

      input.addEventListener('change', function () {
        item.noUiSlider.setHandle(handle, this.value);
      });

      input.addEventListener('keydown', function (e) {

        var values = item.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = item.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

          case 13:
            item.noUiSlider.setHandle(handle, this.value);
            break;

          case 38:

            // Get step to go increase slider value (up)
            position = step[1];

            // false = no step is set
            if (position === false) {
                position = 1;
            }

            // null = edge of slider
            if (position !== null) {
                item.noUiSlider.setHandle(handle, value + position);
            }

            break;

          case 40:

            position = step[0];

            if (position === false) {
                position = 1;
            }

            if (position !== null) {
                item.noUiSlider.setHandle(handle, value - position);
            }

            break;
        }
      });
    });

  });
}



// Add zIndex for Shop products
const shopProducts = document.querySelectorAll('.shop__product');

for (let i = 0; i < shopProducts.length; i++) {
  shopProducts[i].style.zIndex = `${shopProducts.length - i}`;
}



// Show/hide filters script
const buttonShowHideFilters = document.querySelector('.button-open-filters');
const filters = document.querySelector('.filters');

if ( isMobile.any() ) {
  filters.setAttribute("hidden", "");
  filters.classList.remove('_active');
  buttonShowHideFilters.classList.remove('_active');
  _slideUp(filters, 0);
}

buttonShowHideFilters.addEventListener('click', function (event) {
  if ( filters.classList.contains('_active') ) {
    filters.classList.remove('_active');
    buttonShowHideFilters.classList.remove('_active');
    _slideUp(filters, 500);
  } else {
    filters.classList.add('_active');
    buttonShowHideFilters.classList.add('_active');
    _slideDown(filters, 500);
  }
});