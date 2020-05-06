export const picker = {
	props:{
		themeColor:{
			type:String,
			default(){
				return "#f5a200"
			}
		},
		startYear:{
			type:[String,Number],
			default(){
				return "1970"
			}
		},
		endYear:{
			type:[String,Number],
			default(){
				return new Date().getFullYear()+''
			}
		},
		defaultVal:{
			type:[String,Array],
			default(){
				return [0,0,0,0,0,0,0]
			}
		},
		step:{
			type:[String,Number],
			default:1
		},
		current:{
			type:Boolean,
			default:true
		},
		selectList:{
			type:Array,
			default(){
				return [];
			}
		},
		//以下参数仅对mode==limit有效
		dayStep:{
			type:[String,Number],
			default:7
		},
		dayAfter:{
			type:[String,Number],
			default:0
		},
		startHour:{
			type:[String,Number],
			default:8
		},
		endHour:{
			type:[String,Number],
			default:20
		},
		minuteStep:{
			type:[String,Number],
			default:10
		},
		afterStep:{
			type:[String,Number],
			default:30
		},
		disabledAfter:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cardPatt : /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
		}
	}
}