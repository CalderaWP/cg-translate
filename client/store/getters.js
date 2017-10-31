import  { stateFactory, stateFactoryDispatching, stateFactoryReadOnly } from  './util/stateFactory';

export const GETTERS = {
	fieldId : state => {
		return state.hasOwnProperty( 'fieldId' ) && undefined != state.fieldId ? state.fieldId : false;
	},
	strings : state => {
		return state.strings;
	},
	data : state => {
		return state.data;
	},
	local : state => {
		return state.local;
	},
	form : state => {
		return state.form;
	},
	formId : state => {
		return state.form.ID;
	},
	forms : state => {
		return state.forms;
	},
	languages : state => {
		return state.languages;
	},
	language : state => {
		return undefined != state.language ? state.language : '';
	},
	fields: state => {
		if( undefined === state.fields ){
			return {}
		}
		return state.form.fields[state.language];
	},
	field: state => {
		if( 'object' !== typeof  state.field ){
			return {};
		}

		return state.field;
	},
	formLanguages: state => {
		return state.formLanguages;

	},
	showFormChoice: state => {
		return state.showFormChoice;
	},
	showAddLanguage: state => {
		if(  null !== state.showAddLanguage ) {
			state.showAddLanguage = false;
		}

		return state.showAddLanguage;
	},
	showLanguageChoice: state => {
		if(  null !== state.showLanguageChoice ) {
			state.showLanguageChoice = false;
		}
		console.log(state.showLanguageChoice);
		return state.showLanguageChoice;
	},
	saving: state => {
		return state.saving;
	},
	stateFactory: state => (getter, setter ) => {
		return new stateFactory(getter, setter);
	},
	stateFactoryReadOnly: state => ( getter ) => {
		return new stateFactoryReadOnly( getter );
	},
	stateFactoryDispatching: state => ( getter, action ) => {
		return new stateFactoryDispatching( getter, action );
	}
};