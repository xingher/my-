Mock.mock('http://api_num.com', {
	"user|1-1": [{
		'number|1-100': 100, //100以内随机整数
	}]
});
Mock.mock('http://api_proxy.com', {
	"data|1-1": [{
		'name': '@cname', //中文名称
		'phone|11111111111-18999999999': 18999999999, //100以内随机整数
		'user_id|10000-20000': 20000,
		'start_date': '@date("yyyy-MM-dd")', //日期
		'end_date': '@date("yyyy-MM-dd")', //日期
		'get_date': '@date("yyyy-MM-dd")', //日期
	}]
});
//入库商品
Mock.mock('http://api_comeinGoods.com', {
	"data|30-40": [{
		'fahuoren': '@cname', //中文名称
		'goodsname':'@cname',
		'user_id|10000-20000': 20000,
		'start_date': '@date("yyyy-MM-dd")', //日期
	}]
});

//提现详情
Mock.mock('http://api_withdrawals_record.com', {
	"data|30-40": [{
		'kahao|700000000000-800000000000': 800000000000, 
		'jine|200000-300000': 300000,
		'date': '@date("yyyy-MM-dd")', //日期
		'status|1': ["已打款","未打款","已收款"] 
	}]
});