Vue.component('journal-item', {
	props: ['item'],
	template: '<li class="mdl-list__item"><entry-icon v-bind:selected="item.icon" v-bind:id="item.id"></entry-icon>&nbsp;<textarea class="mdl-textfield__input" type="text" v-model="item.text"></textarea></li>'
});

/*
	To-do:		fiber_manual_record
	Done:		clear
	Scheduled:	keyboard_arrow_left
	Migrated:	keyboard_arrow_right
	Note:		remove
	Event:		panorama_fish_eye
*/
Vue.component('entry-icon', {
	props: ['selected', 'id'],
	template: '<div :id="id"><button class="mdl-button mdl-js-button msl-js-button--icon"><i class="material-icons">{{ selected }}</i></button><entry-icon-select v-bind:id="id" v-on:changeicon="selected = $event"></entry-icon-select></div>'
});
Vue.component('entry-icon-select', {
	data: function() {
		return  {
			icons: [
				{ icon: 'fiber_manual_record', text: 'To-do' },
				{ icon: 'clear', text: 'Done' },
				{ icon: 'keyboard_arrow_left', text: 'Scheduled' },
				{ icon: 'keyboard_arrow_right', text: 'Migrated' },
				{ icon: 'remove', text: 'Note' },
				{ icon: 'panorama_fish_eye', text: 'Event' }
			]
		}
	},
	props: ['id'],
	template: '<ul :for="id" class="mdl-menu mdl-menu--button-left mdl-js-menu mdl-js-menu mdl-js-ripple-effect"><li class="mdl-menu__item" v-for="icon in icons" v-on:click="$emit(\'changeicon\', icon.icon)"><i class="material-icons mdl-list__item-icon">{{ icon.icon }}</i> {{ icon.text }}</li></ul>'
});

var app = new Vue({
	el: '#app-list-items',
	data: {
		journalPage: [
			{ id: 'entryNo01', icon: 'clear', text: 'Learn JS' },
			{ id: 'entryNo02', icon: 'keyboard_arrow_left', text: 'Do something' },
			{ id: 'entryNo03', icon: 'panorama_fish_eye', text: 'Learn Vue' },
			{ id: 'entryNo04', icon: 'remove', text: 'XYZ' }
		]
	}
});