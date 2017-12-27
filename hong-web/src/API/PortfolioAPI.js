import CONF from '../Config.js';

export default {
	fetchPortfolio : function(){
		return $axios.get(CONF.FETCH);
	}
};