const tabar = [{
		id: 0,
		title: "受理中心",
		img_url: '/static/assistant/home.png',
		img_url_bg: '/static/assistant/home_origin.png',
	},
	{
		id: 1,
		title: "创建互动",
		img_url: '/static/assistant/add.png',
	},
	{
		id: 2,
		title: "我的跟进",
		img_url: '/static/assistant/genjin.png',
		img_url_bg: '/static/assistant/genjin_origin.png',
	}
]

const dataList = [{
		id: 1,
		avada_img: "/static/hudong/c3.jpg",
		avada_null: "/static/assistant/advada.png",
		name: '李昊天',
		nameNick: "李少爷",
		guanxi: '待受理',
		ruzhu: "入住人",
		shiming: "已实名",
		shiming_status: "1",
		himing_status: "1",
		time: '123',
		shouyue: "90%",
		shoushi: "100%",
		address: "深圳天长地久优居",
		call_time: "2020-03-18 19:27:49",
		bianhao: "F12312",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
	{
		id: 2,
		avada_null: "/static/assistant/advada.png",
		name: '用户的昵称第一',
		nameNick: "黄小姐",
		guanxi: '待受理',
		ruzhu: "入住人",
		shiming: "已实名",
		shiming_status: "1",
		himing_status: "0",
		time: '10',
		shouyue: "90%",
		shoushi: "90%",
		address: "广州天长地久优居",
		call_time: "2020-04-18 19:27:49",
		bianhao: "FFF0012",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
	{
		id: 3,
		avada_img: "/static/hudong/c1.jpg",
		avada_null: "/static/assistant/advada.png",
		name: '石铁龙',
		nameNick: "李少爷",
		guanxi: '待受理',
		ruzhu: "入住人",
		shiming: "未实名",
		shiming_status: "0",
		himing_status: "0",
		time: '123',
		shouyue: "99%",
		shoushi: "100%",
		address: "深圳天长地久优居",
		call_time: "2020-03-18 19:27:49",
		bianhao: "Q166312",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
	{
		id: 4,
		avada_img: "/static/hudong/c4.jpg",
		avada_null: "/static/assistant/advada.png",
		name: '程小刚',
		nameNick: "奥少爷",
		guanxi: '待受理',
		ruzhu: "入住人",
		shiming: "未实名",
		shiming_status: "0",
		himing_status: "0",
		time: '123',
		shouyue: "99%",
		shoushi: "100%",
		address: "深圳天长地久优居",
		call_time: "2020-03-18 19:27:49",
		bianhao: "Q166312",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
]

const followList = [{
		id: 1,
		avada_img: "/static/hudong/c3.jpg",
		avada_null: "/static/assistant/advada.png",
		name: '李昊天',
		nameNick: "李少爷",
		guanxi: '报名中',
		ruzhu: "入住人",
		shiming: "已实名",
		shiming_status: "1",
		himing_status: "1",
		time: '123',
		shouyue: "90%",
		shoushi: "100%",
		dcse: "想找一帮50后一起玩，素质太低的不要来，如果可以的话想跟象棋高手一起玩 ",
		activity_img: "/static/youju/s1-1.jpg",
		activity_title: "老年夫妻约会馆",
		activity_address: "平峦山公园东北门",
		activity_time: "2020年05月01日 9:30",
		status_name: "家庭主题",
		address: "深圳天长地久优居",
		call_time: "2020-03-18 19:27:49",
		bianhao: "F12312",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
	{
		id: 2,
		avada_null: "/static/assistant/advada.png",
		name: '用户的昵称第一',
		nameNick: "黄小姐",
		guanxi: '报名中',
		ruzhu: "入住人",
		shiming: "已实名",
		shiming_status: "1",
		himing_status: "0",
		time: '10',
		shouyue: "90%",
		shoushi: "90%",
		dcse: "想找一帮00后一起玩，然后一起去哈皮，过上年轻人不一样的生活，面朝大海",
		activity_img: "/static/youju/s1-2.jpg",
		activity_title: "老年人喝茶会",
		activity_address: "香蜜湖公园东北门",
		activity_time: "2020年05月24日 19:30",
		status_name: "助暖",
		address: "广州天长地久优居",
		call_time: "2020-04-18 19:27:49",
		bianhao: "FFF0012",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
	{
		id: 3,
		avada_img: "/static/hudong/c1.jpg",
		avada_null: "/static/assistant/advada.png",
		name: '石铁龙',
		nameNick: "李少爷",
		guanxi: '待受理',
		ruzhu: "入住人",
		shiming: "未实名",
		shiming_status: "0",
		himing_status: "0",
		time: '123',
		shouyue: "99%",
		shoushi: "100%",
		dcse: "想找一帮90后一起玩，一起在共同社区中吃喝玩乐，让生活更加朝气！少年加油...",
		activity_img: "/static/youju/s1-3.jpg",
		activity_title: "青年爬山",
		activity_address: "观澜高尔夫",
		activity_time: "2020年04月13日 12:30",
		status_name: "娱乐主题",
		address: "深圳天长地久优居",
		call_time: "2020-03-18 19:27:49",
		bianhao: "Q166312",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
	{
		id: 4,
		avada_img: "/static/hudong/c4.jpg",
		avada_null: "/static/assistant/advada.png",
		name: '程小刚',
		nameNick: "奥少爷",
		guanxi: '待开始',
		ruzhu: "入住人",
		shiming: "未实名",
		shiming_status: "0",
		himing_status: "0",
		time: '123',
		shouyue: "99%",
		shoushi: "100%",
		dcse: "想找一帮90后一起玩，一起在共同社区中吃喝玩乐，让生活更加朝气！少年加油...",
		activity_img: "/static/youju/s1-4.jpg",
		activity_title: "中国象棋",
		activity_address: "老街公园东北门",
		activity_time: "2020年04月12日 18:30",
		status_name: "90主题",
		address: "深圳天长地久优居",
		call_time: "2020-03-18 19:27:49",
		bianhao: "Q166312",
		shan_status: "删除",
		lianxi_status: "联系TA",
		order_status: "受理",
	},
]

// 筛选列表
// const filterData = [
// {
// 	"type": 'hierarchy',
// 	"allmenu": [{
// 			"name": "全部状态",
// 			"value": "全部状态"
// 		},
// 		{
// 			"name": "待开始",
// 			"value": "待开始"
// 		},
// 		{
// 			"name": "进行中",
// 			"value": "进行中"
// 		},
// 		{
// 			"name": "已完成",
// 			"value": "已取消"
// 		},
// 		{
// 			"name": "已失败",
// 			"value": "已失败"
// 		}
// 	]
// },
// {
// 	"type": 'hierarchy',
// 	"paixumenu": [{
// 			"name": "默认排序",
// 			"value": "默认排序"
// 		},
// 		{
// 			"name": "互动开始时间优先",
// 			"value": "互动开始时间优先"
// 		},
// 		{
// 			"name": "受理时间优先",
// 			"value": "受理时间优先"
// 		},
// 		{
// 			"name": "进行中时间优先",
// 			"value": "进行中时间优先"
// 		}
// 	]
// },
// ]

// 创建活动队员信息
const ranksData = [{
		id: 1,
		avada_img: "/static/hudong/c1.jpg",
		avada_null: "/static/assistant/advada.png",
		duizhang: "/static/hudong/qizhi.png",
		qians: "/static/hudong/qian.svg",
		ranks_status: "1",
		name: '李昊天',
		nameNick: "用户昵称最多显示7",
		user_id: "ID_365604",
		user_id_status: "1"
	},
	{
		id: 2,
		avada_img: "/static/hudong/c2.jpg",
		avada_null: "/static/assistant/advada.png",
		duizhang: "/static/hudong/qizhi.png",
		ranks_status: "0",
		name: '黄铜',
		nameNick: "设置0开始",
		user_id: "ID_30004",
		user_id_status: "1"
	},
	{
		id: 3,
		avada_img: "/static/hudong/c3.jpg",
		avada_null: "/static/assistant/advada.png",
		duizhang: "/static/hudong/qizhi.png",
		qians: "/static/hudong/qian.svg",
		ranks_status: "0",
		name: '谭小龙',
		nameNick: "淑搜索",
		user_id: "hzangkl",
		user_id_status: "0"
	},
	{
		id: 4,
		avada_img: "/static/hudong/c4.jpg",
		avada_null: "/static/assistant/advada.png",
		duizhang: "/static/hudong/qizhi.png",
		qians: "/static/hudong/qian.svg",
		ranks_status: "0",
		name: '梅西',
		nameNick: "煤球王",
		user_id: "hzangkl",
		user_id_status: "0"
	},
	{
		id: 5,
		avada_img: "/static/hudong/c3.jpg",
		avada_null: "/static/assistant/advada.png",
		duizhang: "/static/hudong/qizhi.png",
		qians: "/static/hudong/qian.svg",
		ranks_status: "0",
		name: '成豪庭',
		nameNick: "叉烧饭",
		user_id: "ID_36304",
		user_id_status: "0"
	}
]

// 创建活动队员信息
const assistantAddressSearch = [{
		id: 1,
		title: "美达健康活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 1
	},
	{
		id: 2,
		title: "生林秀香优居",
		address: "深圳市南山区学海路39号",
		address_status: 0
	},
	{
		id: 3,
		title: "美达健康活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 0
	},
	{
		id: 4,
		title: "美达健康活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 0
	},
	{
		id: 5,
		title: "男优优居",
		address: "南京市福明大街旁边的500-1号",
		address_status: 0
	},
	{
		id: 6,
		title: "老年人活动中心优居",
		address: "长沙市区光明区光明大街1000号一号店铺",
		address_status: 0
	},
	{
		id: 7,
		title: "南山60后活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 0
	},
	{
		id: 8,
		title: "福田60后活力优居",
		address: "深圳市南山区学海路39号",
		address_status: 0
	},
	{
		id: 9,
		title: "南山70后活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 0
	},
	{
		id: 10,
		title: "南山80后活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 0
	},
	{
		id: 11,
		title: "南山90后活力优居",
		address: "南京市福明大街旁边的500-1号",
		address_status: 0
	},
	{
		id: 12,
		title: "福田00后活力优居",
		address: "福田区光明区光明大街1000号一号店铺",
		address_status: 0
	},
	{
		id: 13,
		title: "美达健康活力优居",
		address: "深圳市光明区光明大街12号后面",
		address_status: 0
	},
	{
		id: 14,
		title: "北京清华优居",
		address: "北京颐和园白鹤路00号",
		address_status: 0
	},
	{
		id: 15,
		title: "北京60清华优居",
		address: "北京清湖路70号一号店",
		address_status: 0
	},
	{
		id: 16,
		title: "北京70清华优居",
		address: "北京王府井附近",
		address_status: 0
	},
	{
		id: 17,
		title: "北京90清华优居",
		address: "北京福明大街旁边的500-1号",
		address_status: 0
	},
	{
		id: 18,
		title: "北京00清华优居",
		address: "北京朝阳光明区光明大街1000号一号店铺",
		address_status: 0
	}
]

// 联系人
const mineLianXiRen = [{
	title: "可能认识",
	user: [{
			id: 1,
			advada_img: "/static/hudong/c1.jpg",
			name: "张三",
			status: true,
		},
		{
			id: 2,
			advada_img: "/static/hudong/c2.jpg",
			name: "太假了",
			status: true,
		},
		{
			id: 3,
			advada_img: "/static/hudong/c3.jpg",
			name: "里斯可达",
			status: true,
		},
		{
			id: 4,
			advada_img: "/static/hudong/c4.jpg",
			name: "普金",
			status: false,
		},
		{
			id: 5,
			advada_img: "/static/hudong/c1.jpg",
			name: "夏艺旋",
			status: false,
		},
	]
}]

// 推荐联系人
const mineTuijianLianXiRen = [{
		title: "社区助理",
		user: [{
				id: 1,
				advada_img: "/static/hudong/c1.jpg",
				name: "张三",
				status: true,
			},
			{
				id: 2,
				advada_img: "/static/hudong/c2.jpg",
				name: "太假了",
				status: true,
			},
			{
				id: 3,
				advada_img: "/static/hudong/c3.jpg",
				name: "里斯可达",
				status: true,
			},
			{
				id: 4,
				advada_img: "/static/hudong/c4.jpg",
				name: "普金",
				status: false,
			},
			{
				id: 5,
				advada_img: "/static/hudong/c1.jpg",
				name: "夏艺旋",
				status: false,
			},
		]
	},
	{
		title: "常用联系人",
		user: [{
				id: 1,
				advada_img: "/static/hudong/c1.jpg",
				name: "张三",
				status: true,
			},
			{
				id: 2,
				advada_img: "/static/hudong/c2.jpg",
				name: "太假了",
				status: true,
			},
			{
				id: 3,
				advada_img: "/static/hudong/c3.jpg",
				name: "里斯可达",
				status: true,
			},
			{
				id: 4,
				advada_img: "/static/hudong/c4.jpg",
				name: "普金",
				status: false,
			},
			{
				id: 5,
				advada_img: "/static/hudong/c1.jpg",
				name: "夏艺旋",
				status: false,
			},
		]
	},
	{
		title: "活动认识",
		user: [{
				id: 1,
				advada_img: "/static/hudong/c1.jpg",
				name: "张三",
				status: true,
			},
			{
				id: 2,
				advada_img: "/static/hudong/c2.jpg",
				name: "太假了",
				status: true,
			},
			{
				id: 3,
				advada_img: "/static/hudong/c3.jpg",
				name: "里斯可达",
				status: true,
			},
			{
				id: 4,
				advada_img: "/static/hudong/c4.jpg",
				name: "普金",
				status: false,
			},
			{
				id: 5,
				advada_img: "/static/hudong/c1.jpg",
				name: "夏艺旋",
				status: false,
			},
		]
	},
	{
		title: "名人，大V推荐",
		user: [{
				id: 1,
				advada_img: "/static/hudong/c1.jpg",
				name: "张三",
				status: true,
			},
			{
				id: 2,
				advada_img: "/static/hudong/c2.jpg",
				name: "太假了",
				status: true,
			},
			{
				id: 3,
				advada_img: "/static/hudong/c3.jpg",
				name: "里斯可达",
				status: true,
			},
			{
				id: 4,
				advada_img: "/static/hudong/c4.jpg",
				name: "普金",
				status: false,
			},
			{
				id: 5,
				advada_img: "/static/hudong/c1.jpg",
				name: "夏艺旋",
				status: false,
			},
		]
	},
]

const qinyouList = [{
	title: "全部关注",
	user: [{
			id: 1,
			advada_img: "/static/hudong/c1.jpg",
			name: "张三",
			guanxi: "亲人",
			beizhu: "张三丰",
		},
		{
			id: 2,
			advada_img: "/static/hudong/c2.jpg",
			name: "太假了",
			guanxi: "已关注",
			beizhu: "",
		},
		{
			id: 3,
			advada_img: "/static/hudong/c3.jpg",
			name: "里斯可达",
			guanxi: "相互关注",
			beizhu: "",
		},
		{
			id: 4,
			advada_img: "/static/hudong/c4.jpg",
			name: "普金",
			guanxi: "亲人",
			beizhu: "普大帝",
		},
		{
			id: 5,
			advada_img: "/static/hudong/c1.jpg",
			name: "夏艺旋",
			guanxi: "已关注",
			beizhu: "",
		},
	]
}, ]

const qinRenList = [{
	user: [{
			id: 1,
			advada_img: "/static/hudong/c1.jpg",
			name: "张三",
			guanxi: "亲人",
			beizhu: "张三丰",
		},
		{
			id: 2,
			advada_img: "/static/hudong/c2.jpg",
			name: "太假了",
			guanxi: "亲人",
			beizhu: "",
		},
		{
			id: 3,
			advada_img: "/static/hudong/c3.jpg",
			name: "里斯可达",
			guanxi: "亲人",
			beizhu: "",
		},
		{
			id: 4,
			advada_img: "/static/hudong/c4.jpg",
			name: "普金",
			guanxi: "亲人",
			beizhu: "普大帝",
		},
		{
			id: 5,
			advada_img: "/static/hudong/c1.jpg",
			name: "夏艺旋",
			guanxi: "亲人",
			beizhu: "",
		},
	]
}, ]

const mineFaPiao = [{
		type:0,
		id: 1,
		datas:"2-15",
		dcse: '深圳天长地久高级心居',
		fapiao:0,
		address:"南山区学海路139号",
		time_start:"12-30",
		time_end:"01-02",
		all_night:"3",
		price:"123.00",
	},
	{
		type:0,
		id: 2,
		datas:"2-01",
		dcse: '福田优仙高级心居',
		fapiao:1,
		address:"南山区北京路学和海路交叉处",
		time_start:"12-30",
		time_end:"01-02",
		all_night:"3",
		price:"99.00",
	},
	{
		type:0,
		id: 3,
		dcse: '南宁摩托车心居',
		fapiao:2,
		datas:"2-03",
		address:"南山区北京路学和海路交叉处",
		time_start:"12-30",
		time_end:"01-02",
		all_night:"3",
		price:"99.00",
	},
	{
		type:1,
		id: 4,
		datas:"2-12",
		dcse: '暖助 · 家政',
		fapiao:2,
		address:"助教费",
		time_start:"200元/次×1次",
		price:"200.00",
	},
	{
		type:1,
		id: 5,
		datas:"2-18",
		dcse: '暖助 · 清洁',
		fapiao:1,
		address:"清洁费",
		time_start:"50元/次×3次",
		price:"150.00",
	},
	{
		type:0,
		id: 6,
		datas:"4-01",
		dcse: '龙华宝贝甜甜优居',
		fapiao:1,
		address:"南山区北京路学和海路交叉处",
		time_start:"12-30",
		time_end:"01-02",
		all_night:"3",
		price:"99.00",
	},
	{
		type:0,
		id: 7,
		datas:"3-15",
		dcse: '福田优仙高级心居',
		fapiao:1,
		address:"南山区北京路学和海路交叉处",
		time_start:"12-30",
		time_end:"01-02",
		all_night:"3",
		price:"99.00",
	},
]

export default {
	tabar,
	dataList,
	followList,
	ranksData,
	assistantAddressSearch,
	mineLianXiRen,
	mineTuijianLianXiRen,
	qinyouList,
	qinRenList,
	mineFaPiao
}
