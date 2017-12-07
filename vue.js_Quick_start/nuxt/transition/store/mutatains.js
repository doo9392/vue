import Constant from './constant.js';

export default {
	[Constant.CHANGE_NO] : (state, payload) => {
		if(payload.no !== ""){
			state.no = payload.no;
		}
	}
};