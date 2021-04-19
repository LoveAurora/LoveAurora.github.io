//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
	'url(https://img10.360buyimg.com/ddimg/jfs/t1/171831/30/5236/114424/607cffb9Efad4c70e/58629eeadba57370.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/168650/23/13991/80220/6056d5bdE4d4e5a94/288738d27af06408.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/162006/20/13991/82937/6056d5bdEa4d67c47/b22f76b41f85a3cb.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/163095/18/14260/73060/6056d5bcE8ce2f0b5/bfd47d0924329042.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/167380/10/19549/77137/607cffb9Eaf85bee1/0edfe66aac834683.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/167130/3/19695/69037/607cffb9E1524b43b/b90afad1d351fb2a.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/175899/21/5289/54028/607cffb9Ebd8c54e4/cf62239735b118bd.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/174130/14/5291/61206/607cffb9Eae7f76e6/fa88265486aa2257.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/165897/29/19595/44856/607cffb9Ead807d05/03976953c8bc9c83.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/175979/34/5143/56843/607cffb9E7c0ed56b/b581e10d93878146.jpg)',
	'url(https://img10.360buyimg.com/ddimg/jfs/t1/163791/2/13816/652298/6056d5d5E4c175719/7bca4fde3fc81392.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/162873/2/13780/447449/6056d5d8E4ad01c40/4cc33efe200da583.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/146653/31/12843/619671/5f9bdbe3E4176aba6/15a6ff669131e74c.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/115747/25/14693/415334/5f38a424E062c548f/25127dd32aa25c98.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170039/17/14003/97313/6056d5c0Eb0263f51/d41b9706dc22eed8.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/164381/37/13849/88442/6056d5beEab4baa41/24581ffb1fa9da79.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170168/39/13951/47210/6056d5b8E9de70d82/b2a8f10aac005687.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/160340/10/14489/78770/6056d5b7E93a5246e/5a1e25e61e3ed82e.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/171384/32/13934/74159/6056d5bcE2c175f9c/465667a0f4947f0e.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170039/17/14003/97313/6056d5c0Eb0263f51/d41b9706dc22eed8.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/163485/35/13926/98659/6056d5c0E18be2eca/7932898360b2c7be.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/163489/8/13941/90241/6056d5beE7f61ad2e/25a494207aa30f3d.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/163334/15/13808/104301/6056d5b8E3fc59a94/ded1fbd4d4a1e563.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170168/39/13951/47210/6056d5b8E9de70d82/b2a8f10aac005687.jpg)',
]
//获取背景图片总数，生成随机数
var bgindex = Math.ceil(Math.random() * (backimg.length - 1))
//重设背景图片
document.getElementById('web_bg').style.backgroundImage = backimg[bgindex]
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg = [
	'url(https://img10.360buyimg.com/ddimg/jfs/t1/171831/30/5236/114424/607cffb9Efad4c70e/58629eeadba57370.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/168650/23/13991/80220/6056d5bdE4d4e5a94/288738d27af06408.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/162006/20/13991/82937/6056d5bdEa4d67c47/b22f76b41f85a3cb.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/163095/18/14260/73060/6056d5bcE8ce2f0b5/bfd47d0924329042.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/167380/10/19549/77137/607cffb9Eaf85bee1/0edfe66aac834683.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/167130/3/19695/69037/607cffb9E1524b43b/b90afad1d351fb2a.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/175899/21/5289/54028/607cffb9Ebd8c54e4/cf62239735b118bd.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/174130/14/5291/61206/607cffb9Eae7f76e6/fa88265486aa2257.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/165897/29/19595/44856/607cffb9Ead807d05/03976953c8bc9c83.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/175979/34/5143/56843/607cffb9E7c0ed56b/b581e10d93878146.jpg)',
	'url(https://img10.360buyimg.com/ddimg/jfs/t1/163791/2/13816/652298/6056d5d5E4c175719/7bca4fde3fc81392.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/162873/2/13780/447449/6056d5d8E4ad01c40/4cc33efe200da583.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/146653/31/12843/619671/5f9bdbe3E4176aba6/15a6ff669131e74c.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/115747/25/14693/415334/5f38a424E062c548f/25127dd32aa25c98.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170039/17/14003/97313/6056d5c0Eb0263f51/d41b9706dc22eed8.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/164381/37/13849/88442/6056d5beEab4baa41/24581ffb1fa9da79.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170168/39/13951/47210/6056d5b8E9de70d82/b2a8f10aac005687.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/160340/10/14489/78770/6056d5b7E93a5246e/5a1e25e61e3ed82e.jpg)',
	'url(https://img13.360buyimg.com/ddimg/jfs/t1/171384/32/13934/74159/6056d5bcE2c175f9c/465667a0f4947f0e.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170039/17/14003/97313/6056d5c0Eb0263f51/d41b9706dc22eed8.jpg)',
	'url(https://img12.360buyimg.com/ddimg/jfs/t1/163485/35/13926/98659/6056d5c0E18be2eca/7932898360b2c7be.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/163489/8/13941/90241/6056d5beE7f61ad2e/25a494207aa30f3d.jpg)',
	'url(https://img11.360buyimg.com/ddimg/jfs/t1/163334/15/13808/104301/6056d5b8E3fc59a94/ded1fbd4d4a1e563.jpg)',
	'url(https://img14.360buyimg.com/ddimg/jfs/t1/170168/39/13951/47210/6056d5b8E9de70d82/b2a8f10aac005687.jpg)',
]
//获取banner图片总数，生成随机数
var bannerindex = Math.ceil(Math.random() * (bannerimg.length - 1))
//重设banner图片
document.getElementById('page-header').style.backgroundImage =
	bannerimg[bannerindex]
