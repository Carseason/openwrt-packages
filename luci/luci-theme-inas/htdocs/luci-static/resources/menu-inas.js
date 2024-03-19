'use strict';
'require baseclass';
'require ui';

return baseclass.extend({
	__init__: function () {
		ui.menu.load().then(L.bind(this.render, this));
	},

	render: function (tree) {
		var node = tree,
			url = '',
			children = ui.menu.getChildren(tree);

		for (var i = 0; i < children.length; i++) {
			var isActive = (L.env.requestpath.length ? children[i].name == L.env.requestpath[0] : i == 0);

			if (isActive)
				this.renderMainMenu(children[i], children[i].name);
		}

		if (L.env.dispatchpath.length >= 3) {
			for (var i = 0; i < 3 && node; i++) {
				node = node.children[L.env.dispatchpath[i]];
				url = url + (url ? '/' : '') + L.env.dispatchpath[i];
			}

			if (node)
				this.renderTabMenu(node, url);
		}

		document.querySelector('a.showSide')
			.addEventListener('click', ui.createHandlerFn(this, 'handleSidebarToggle'));
		document.querySelector('.darkMask')
			.addEventListener('click', ui.createHandlerFn(this, 'handleSidebarToggle'));

		this.initMenuSearch();
	},

	handleMenuExpand: function (ev) {
		var a = ev.target, slide = a.parentNode, slide_menu = a.nextElementSibling;
		var collapse = false;

		document.querySelectorAll('.main .main-left .nav > li >ul.active').forEach(function (ul) {
			$(ul).stop(true).slideUp("fast", function () {
				ul.classList.remove('active');
				ul.previousElementSibling.classList.remove('active');
			});
			if (!collapse && ul === slide_menu) {
				collapse = true;
			}

		});

		if (!slide_menu)
			return;
		
		
		if (!collapse) {
			$(slide).find(".slide-menu").slideDown("fast",function(){
				slide_menu.classList.add('active');
				a.classList.add('active');
			});
			a.blur();
		}
		ev.preventDefault();
		ev.stopPropagation();
	},

	renderMainMenu: function (tree, url, level) {
		var l = (level || 0) + 1,
			ul = E('ul', { 'class': level ? 'slide-menu' : 'nav' }),
			children = ui.menu.getChildren(tree);

		if (children.length == 0 || l > 2)
			return E([]);

		for (var i = 0; i < children.length; i++) {
			var isActive = ((L.env.dispatchpath[l] == children[i].name) && (L.env.dispatchpath[l - 1] == tree.name)),
				submenu = this.renderMainMenu(children[i], url + '/' + children[i].name, l),
				hasChildren = submenu.children.length,
				slideClass = hasChildren ? 'slide' : null,
				menuClass = hasChildren ? 'menu' : null;
			if (isActive) {
				ul.classList.add('active');
				slideClass += " active";
				menuClass += " active";
			}

			ul.appendChild(E('li', { 'class': slideClass }, [
				E('a', {
					'href': L.url(url, children[i].name),
					'click': (l == 1) ? ui.createHandlerFn(this, 'handleMenuExpand') : null,
					'class': menuClass,
					'data-title': hasChildren ? children[i].title.replace(" ", "_") : children[i].title.replace(" ", "_"),
				}, [_(children[i].title)]),
				submenu
			]));
		}

		if (l == 1) {
			document.querySelector('#mainmenu').appendChild(ul);
			document.querySelector('#mainmenu').style.display = '';

		}
		return ul;
	},

	renderTabMenu: function (tree, url, level) {
		var container = document.querySelector('#tabmenu'),
			l = (level || 0) + 1,
			ul = E('ul', { 'class': 'tabs' }),
			children = ui.menu.getChildren(tree),
			activeNode = null;

		if (children.length == 0)
			return E([]);

		for (var i = 0; i < children.length; i++) {
			var isActive = (L.env.dispatchpath[l + 2] == children[i].name),
				activeClass = isActive ? ' active' : '',
				className = 'tabmenu-item-%s %s'.format(children[i].name, activeClass);

			ul.appendChild(E('li', { 'class': className }, [
				E('a', { 'href': L.url(url, children[i].name) }, [_(children[i].title)])
			]));

			if (isActive)
				activeNode = children[i];
		}

		container.appendChild(ul);
		container.style.display = '';

		if (activeNode)
			container.appendChild(this.renderTabMenu(activeNode, url + '/' + activeNode.name, l));

		return ul;
	},

	handleSidebarToggle: function (ev) {
		var showside = document.querySelector('a.showSide'),
			sidebar = document.querySelector('#mainmenu'),
			darkmask = document.querySelector('.darkMask'),
			scrollbar = document.querySelector('.main-right');

		if (showside.classList.contains('active')) {
			showside.classList.remove('active');
			sidebar.classList.remove('active');
			scrollbar.classList.remove('active');
			darkmask.classList.remove('active');
		}
		else {
			showside.classList.add('active');
			sidebar.classList.add('active');
			scrollbar.classList.add('active');
			darkmask.classList.add('active');
		}
	},
	initMenuSearch: function() {
		var ignore_blur = false;
		var search_result = document.querySelector('#search_result');
		var search = document.querySelector('#menu_search');
		var do_search = function() {
			var ul = search_result.querySelector("ul");
			var li = document.createElement("li");
			var tips = document.createElement("span");
			tips.innerText = _("Empty Input");
			li.appendChild(tips);
			ul.innerHTML="";
			ul.appendChild(li);
			if (search.value === "")
				return;
			var found = Array.prototype.slice.call(document.querySelector('#mainmenu .nav').querySelectorAll('a'))
				.filter(function(a){
					var href = a.getAttribute('href');
					href = href.substring(href.lastIndexOf('/') + 1);
					return [a.getAttribute("data-title"), a.innerText, href].some(function(s){return s && s.toLowerCase().indexOf(this) != -1}, this)
				}, search.value.toLowerCase());
			if (found.length > 0) {
				ul.innerHTML="";
			} else {
				tips.innerText = _("Not Found");
			}
			found.forEach(function(a){
				var na = document.createElement("a");
				na.href = a.getAttribute("href");
				na.innerText = a.innerText;
				if (!a.classList.contains("menu")) {
					var p = a.parentElement.parentElement;
					while(p) {
						if (p.tagName === "LI") {
							var m = p.querySelector("a.menu");
							if (m) {
								na.innerText = m.innerText + " > " + na.innerText;
							} else {
								break;
							}
						} else if (p.id == "mainmenu") {
							break;
						}
						p = p.parentElement;
					}
				}
				var li = document.createElement("li");
				li.appendChild(na);
				this.appendChild(li);
			}, ul);
		};
		var close_result = function() {
			search_result.style.display = "none";
		};
		search.addEventListener('keyup', function(e){
			if (e.isComposing)
				return;
			do_search();
			if (search_result.style.display === "none") {
				search_result.style.display = "";
			}
		});
		search.addEventListener('click', function(e){
			if (search_result.style.display === "none") {
				do_search();
				search_result.style.display = "";
			} else {
				close_result();
			}
		});
		search.addEventListener('blur', function(e){
			if (ignore_blur)
				return;
			close_result();
		});
		search_result.addEventListener('mousedown', function(e){
			ignore_blur = true;
		});
		search_result.addEventListener('mouseup', function(e){
			ignore_blur = false;
		});
		search_result.addEventListener('click', function(e){
			close_result();
		});
	},
});
