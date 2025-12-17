import { Category, Vendor } from './types';

export const CHINA_LOCATIONS: Record<string, string[]> = {
  "北京市": ["朝阳区", "海淀区", "东城区", "西城区", "昌平区"],
  "上海市": ["黄浦区", "徐汇区", "静安区", "浦东新区", "杨浦区", "金山区"],
  "广东省": ["广州市", "深圳市", "珠海市", "佛山市"],
  "浙江省": ["杭州市", "宁波市", "温州市", "绍兴市", "金华市", "台州市"],
  "江苏省": ["南京市", "苏州市", "无锡市", "昆山市", "太仓市"],
  "四川省": ["成都市", "绵阳市", "广元市"],
  "山东省": ["济南市", "青岛市", "临沂市"],
  "云南省": ["昆明市", "大理白族自治州", "丽江市", "西双版纳傣族自治州"],
};

export const PROVINCES = Object.keys(CHINA_LOCATIONS);

export const PRICE_RANGES = [
  { label: "¥", max: 5000 },
  { label: "¥¥", max: 20000 },
  { label: "¥¥¥", max: 50000 },
  { label: "¥¥¥¥", max: 200000 },
];

export const MOCK_VENDORS: Vendor[] = [
  // --- Beijing ---
  {
    id: "bj-1",
    name: "北遇映画 (北京店)",
    category: Category.PHOTO,
    location: "北京市-朝阳区",
    price: 16800,
    rating: 4.9,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop",
    description: "知名高端摄影工作室，风格独特。地址：朝阳区。导航：地图搜索 '北遇映画 (北京店)'",
    features: ["底片全送", "无隐形消费", "明星同款"],
    contact: { phone: "010-88886666", email: "bj@beiyu.com" },
    externalLinks: {
      xiaohongshu: "https://www.xiaohongshu.com/user/profile/beiyustudio06",
      douyin: "https://www.iesdouyin.com/share/video/7504332112175091001"
    }
  },
  {
    id: "bj-2",
    name: "雅叙、巴黎佳人",
    category: Category.PHOTO,
    location: "北京市",
    price: 12999,
    rating: 4.8,
    reviews: 560,
    image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=800&auto=format&fit=crop",
    description: "记录细腻情感。导航：地图搜索 '北京雅叙婚纱摄影' 或 '北京巴黎佳人婚纱摄影'",
    features: ["私人定制", "情感纪实"],
    contact: { phone: "13800000001", email: "yaxu@wedding.com" },
    externalLinks: {
       douyin: "https://www.iesdouyin.com/share/video/7551316685145443636"
    }
  },
  {
    id: "bj-4",
    name: "圆喜阁高端婚礼策划",
    category: Category.DECOR,
    location: "北京市",
    price: 45000,
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop",
    description: "专注于新中式与高端定制婚礼。导航：地图搜索 '圆喜阁婚礼策划'",
    features: ["新中式", "全案策划"],
    contact: { phone: "13911112222", email: "yuanxige@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/382281502",
        douyin: "https://www.iesdouyin.com/share/video/7514883161727110460"
    }
  },
  {
    id: "bj-5",
    name: "蜜柚婚礼",
    category: Category.DECOR,
    location: "北京市",
    price: 28800,
    rating: 4.8,
    reviews: 450,
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop",
    description: "清新唯美风格，深受年轻人喜爱。导航：地图搜索 '北京蜜柚婚礼策划'",
    features: ["韩式清新", "草坪婚礼"],
    contact: { phone: "13822223333", email: "miyou@wedding.com" },
    externalLinks: {
        douyin: "https://www.douyin.com/search/北京蜜柚婚礼"
    }
  },
  {
    id: "bj-6",
    name: "嘉柏俪一站式定制婚礼",
    category: Category.VENUE,
    location: "北京市",
    price: 68888,
    rating: 4.7,
    reviews: 600,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    description: "北京 6 大主城区均有场地，省心省力。导航：地图搜索 '嘉柏俪京城婚礼'",
    features: ["一站式服务", "多场地可选"],
    contact: { phone: "010-55558888", email: "jiaboli@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7447479856264269075"
    }
  },
  {
    id: "bj-7",
    name: "繁景一站式婚礼堂",
    category: Category.VENUE,
    location: "北京市-朝阳区",
    price: 88888,
    rating: 4.8,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1561912774-20b7ee1a79f7?q=80&w=800&auto=format&fit=crop",
    description: "鎏金秘境主题。地址：朝阳区东五环内北京塘悦影视小镇内。导航：地图搜索 '繁景一站式婚礼堂'",
    features: ["影视基地", "主题婚礼"],
    contact: { phone: "010-99990000", email: "fanjing@wedding.com" }
  },
  {
    id: "bj-8",
    name: "觅舍盛宴婚礼堂",
    category: Category.VENUE,
    location: "北京市-昌平区",
    price: 58888,
    rating: 4.6,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1544965850-6f8a627a8c8f?q=80&w=800&auto=format&fit=crop",
    description: "昌平区首选婚礼堂。导航：地图搜索 '觅舍盛宴婚礼堂'",
    features: ["性价比高", "宴会厅大"],
    contact: { phone: "010-77776666", email: "mishe@wedding.com" },
    externalLinks: {
        douyin: "https://www.douyin.com/search/觅舍盛宴"
    }
  },

  // --- Shanghai ---
  {
    id: "sh-1",
    name: "上海巴黎新娘婚纱摄影 (总店)",
    category: Category.PHOTO,
    location: "上海市-杨浦区",
    price: 15888,
    rating: 4.9,
    reviews: 3000,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop",
    description: "地址：杨浦区四平路 2158 号（五角场地铁站 3 号口步行 340 米）。导航：地图搜索 '上海巴黎新娘婚纱摄影 (总店)'",
    features: ["老牌名店", "外滩外景"],
    contact: { phone: "021-55556666", email: "shparis@wedding.com" }
  },
  {
    id: "sh-2",
    name: "上海时尚芭莎浦东尊荣馆",
    category: Category.PHOTO,
    location: "上海市-静安区",
    price: 18888,
    rating: 4.8,
    reviews: 1200,
    image: "https://images.unsplash.com/photo-1532009875865-b928038b3433?q=80&w=800&auto=format&fit=crop",
    description: "地址：静安区万荣路 700 号。导航：地图搜索 '上海时尚芭莎婚纱摄影 (尊荣馆)'",
    features: ["明星同款", "独家内景"],
    contact: { phone: "021-66669999", email: "bazaar@wedding.com" }
  },
  {
    id: "sh-3",
    name: "兰・婚礼",
    category: Category.DECOR,
    location: "上海市",
    price: 60000,
    rating: 5.0,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    description: "一站式高级婚礼定制。导航：地图搜索 '兰婚礼策划'",
    features: ["高级定制", "艺术感强"],
    contact: { phone: "13902102100", email: "lan@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/944254422",
        douyin: "https://www.iesdouyin.com/share/video/7474081248818810122"
    }
  },
  {
    id: "sh-4",
    name: "叙宴婚礼",
    category: Category.DECOR,
    location: "上海市",
    price: 38888,
    rating: 4.8,
    reviews: 220,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    description: "专注于新中式婚礼美学。导航：地图搜索 '叙宴婚礼'",
    features: ["新中式", "文化底蕴"],
    contact: { phone: "021-33334444", email: "xuyan@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7475726707169709371"
    }
  },
  {
    id: "sh-5",
    name: "东方薇婷一站式婚礼会所",
    category: Category.VENUE,
    location: "上海市-浦东新区",
    price: 99999,
    rating: 4.9,
    reviews: 500,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop",
    description: "陆家嘴滨江大道1658号。导航：地图搜索 '东方薇婷婚礼会所'",
    features: ["江景婚礼", "一站式"],
    contact: { phone: "021-88887777", email: "vting@wedding.com" }
  },
  {
    id: "sh-6",
    name: "贝拉丽雅婚礼一站式会馆",
    category: Category.VENUE,
    location: "上海市-金山区",
    price: 58888,
    rating: 4.7,
    reviews: 300,
    image: "https://images.unsplash.com/photo-1505944357481-9a71e5d6ce0e?q=80&w=800&auto=format&fit=crop",
    description: "金山区高性价比之选。导航：地图搜索 '贝拉丽雅婚礼会馆'",
    features: ["高性价比", "豪华宴会厅"],
    contact: { phone: "021-57999999", email: "bella@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7386479705521736970"
    }
  },

  // --- Jiangsu ---
  {
    id: "js-nj-1",
    name: "北遇映画 (南京店)",
    category: Category.PHOTO,
    location: "江苏省-南京市",
    price: 15800,
    rating: 4.9,
    reviews: 800,
    image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?q=80&w=800&auto=format&fit=crop",
    description: "北遇映画南京分店。导航：地图搜索 '北遇映画 (南京店)'",
    features: ["品牌保证", "高级质感"],
    contact: { phone: "025-88886666", email: "nj@beiyu.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/567788254",
        douyin: "https://www.iesdouyin.com/share/video/7469317055456513331"
    }
  },
  {
    id: "js-nj-2",
    name: "雪中彩影婚纱摄影",
    category: Category.PHOTO,
    location: "江苏省-南京市",
    price: 8999,
    rating: 4.7,
    reviews: 1500,
    image: "https://images.unsplash.com/photo-1545912453-3d3a95bad417?q=80&w=800&auto=format&fit=crop",
    description: "南京老字号，口碑之选。导航：地图搜索 '雪中彩影 (南京店)'",
    features: ["老字号", "服务周到"],
    contact: { phone: "025-66668888", email: "snow@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/4239489308",
        douyin: "https://www.iesdouyin.com/share/video/7469317055456513331"
    }
  },
  {
    id: "js-sz-1",
    name: "苏州婚庆 (一站式)",
    category: Category.DECOR,
    location: "江苏省-苏州市",
    price: 22888,
    rating: 4.6,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800&auto=format&fit=crop",
    description: "姑苏区一站式服务。导航：地图搜索 '苏州婚庆服务 (姑苏区)'",
    features: ["一站式", "姑苏区"],
    contact: { phone: "0512-66661111", email: "suzhou@wedding.com" }
  },
  {
    id: "js-sz-2",
    name: "苏州纳爱斯婚庆礼仪",
    category: Category.DECOR,
    location: "江苏省-苏州市",
    price: 16888,
    rating: 4.5,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1464002255390-2ae63a27c616?q=80&w=800&auto=format&fit=crop",
    description: "相城区优质婚庆。导航：地图搜索 '苏州纳爱斯婚庆礼仪 (相城区)'",
    features: ["相城区", "性价比"],
    contact: { phone: "0512-66662222", email: "nice@wedding.com" }
  },
  {
    id: "js-sz-3",
    name: "苏州玖约婚庆",
    category: Category.DECOR,
    location: "江苏省-苏州市",
    price: 22888,
    rating: 4.7,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop",
    description: "地址：相城区黄埭镇中市南路 3048 号。导航：地图搜索 '苏州玖约婚庆 (相城区)'",
    features: ["细致服务", "个性定制"],
    contact: { phone: "0512-66662222", email: "jiuyue@wedding.com" }
  },
  {
    id: "js-sz-4",
    name: "花小弄花艺",
    category: Category.DECOR,
    location: "江苏省-苏州市",
    price: 8888,
    rating: 4.8,
    reviews: 60,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0fee?q=80&w=800&auto=format&fit=crop",
    description: "吴江区专业婚礼花艺。导航：地图搜索 '花小弄花艺 (吴江店)'",
    features: ["鲜花定制", "森系风格"],
    contact: { phone: "0512-66663333", email: "flower@wedding.com" }
  },
  {
    id: "js-sz-5",
    name: "喜糖铺子",
    category: Category.MENUS,
    location: "江苏省-苏州市",
    price: 2000,
    rating: 4.5,
    reviews: 300,
    image: "https://images.unsplash.com/photo-1582650085888-251c62657df6?q=80&w=800&auto=format&fit=crop",
    description: "吴江区金家坝镇金鑫东路77号。导航：地图搜索 '喜糖铺子 (吴江店)'",
    features: ["伴手礼", "喜糖定制"],
    contact: { phone: "0512-66664444", email: "candy@wedding.com" }
  },
  {
    id: "js-ks-1",
    name: "成艺・永恒之约",
    category: Category.DECOR,
    location: "江苏省-昆山市",
    price: 25888,
    rating: 4.7,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?q=80&w=800&auto=format&fit=crop",
    description: "昆山知名婚庆。地址：昆山市同丰西路 371 号。导航：地图搜索 '成艺永恒之约 (昆山店)'",
    features: ["资深团队", "口碑好"],
    contact: { phone: "0512-57000000", email: "chengyi@wedding.com" }
  },
  {
    id: "js-ks-2",
    name: "茜茜公主婚纱摄影",
    category: Category.PHOTO,
    location: "江苏省-昆山市",
    price: 10888,
    rating: 4.8,
    reviews: 500,
    image: "https://images.unsplash.com/photo-1520606471850-89194e97669d?q=80&w=800&auto=format&fit=crop",
    description: "昆山旗舰店，唯美风格。导航：地图搜索 '茜茜公主婚纱摄影 (昆山店)'",
    features: ["公主风", "内景丰富"],
    contact: { phone: "0512-57999999", email: "sissi@wedding.com" },
    externalLinks: {
        douyin: "https://m.hunliji.com/merchant_132256/example_5566640"
    }
  },
  {
    id: "js-tc-1",
    name: "六福珠宝 (太仓万达店)",
    category: Category.RINGS,
    location: "江苏省-太仓市",
    price: 12000,
    rating: 4.9,
    reviews: 800,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    description: "地址：太仓市城厢镇上海东路 188 号万达广场一楼。导航：地图搜索 '六福珠宝 (太仓万达店)'",
    features: ["黄金首饰", "婚嫁系列"],
    contact: { phone: "0512-53000000", email: "lukfook@wedding.com" }
  },
  {
    id: "js-wx-1",
    name: "无锡麦睿觅婚礼策划",
    category: Category.DECOR,
    location: "江苏省-无锡市",
    price: 29888,
    rating: 4.7,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=800&auto=format&fit=crop",
    description: "精致婚礼策划。导航：地图搜索 '麦睿觅婚礼策划 (无锡店)'",
    features: ["小众精致", "服务好"],
    contact: { phone: "0510-88888888", email: "marryme@wedding.com" },
    externalLinks: {
        meituan: "https://i.meituan.com/poi/1769729725"
    }
  },

  // --- Zhejiang ---
  {
    id: "zj-hz-1",
    name: "花与千寻婚礼定制",
    category: Category.DECOR,
    location: "浙江省-杭州市",
    price: 36800,
    rating: 4.8,
    reviews: 260,
    image: "https://images.unsplash.com/photo-1532288007626-d62f447f5511?q=80&w=800&auto=format&fit=crop",
    description: "杭州口碑商家，擅长户外婚礼。导航：地图搜索 '花与千寻婚礼定制 (杭州店)'",
    features: ["户外婚礼", "鲜花布置"],
    contact: { phone: "0571-88881111", email: "flower@hangzhou.com" }
  },
  {
    id: "zj-hz-2",
    name: "费加罗婚礼策划",
    category: Category.DECOR,
    location: "浙江省-杭州市",
    price: 45800,
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
    description: "高端婚礼定制品牌。导航：地图搜索 '费加罗婚礼策划 (杭州店)'",
    features: ["高端定制", "宴会设计"],
    contact: { phone: "0571-88882222", email: "figaro@wedding.com" }
  },
  {
    id: "zj-nb-1",
    name: "大成唯爱婚礼",
    category: Category.DECOR,
    location: "浙江省-宁波市",
    price: 32800,
    rating: 4.7,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    description: "宁波知名婚庆。导航：地图搜索 '大成唯爱婚礼 (宁波店)'",
    features: ["创意策划", "执行力强"],
    contact: { phone: "0574-88883333", email: "dacheng@wedding.com" }
  },
  {
    id: "zj-wz-1",
    name: "嘉禧婚礼",
    category: Category.DECOR,
    location: "浙江省-温州市",
    price: 28888,
    rating: 4.6,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    description: "鹿城区大南路 5 号高乐大厦 1 楼。导航：地图搜索 '嘉禧婚礼 (温州店)'",
    features: ["性价比高", "老牌婚庆"],
    contact: { phone: "0577-88884444", email: "jiaxi@wedding.com" },
    externalLinks: {
        meituan: "https://i.meituan.com/deal/54927375/feedback"
    }
  },
  {
    id: "zj-tz-1",
    name: "宴夫人妈妈礼服馆",
    category: Category.DRESS,
    location: "浙江省-台州市",
    price: 3000,
    rating: 4.8,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1550785141-5a217596c56c?q=80&w=800&auto=format&fit=crop",
    description: "专注于妈妈装、宴会装。导航：抖音搜索 '宴夫人妈妈礼服馆'",
    features: ["妈妈装", "量身定做"],
    contact: { phone: "0576-88885555", email: "yanlady@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7549736811934829878"
    }
  },
  {
    id: "zj-sx-1",
    name: "倾晨婚纱摄影",
    category: Category.PHOTO,
    location: "浙江省-绍兴市",
    price: 8888,
    rating: 4.7,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800&auto=format&fit=crop",
    description: "绍兴本地热门摄影。导航：地图搜索 '倾晨婚纱摄影 (绍兴店)'",
    features: ["清新自然", "底片全送"],
    contact: { phone: "0575-88886666", email: "qingchen@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/SHW809",
        douyin: "https://www.iesdouyin.com/share/video/7385553894581046554"
    }
  },
  {
    id: "zj-jh-1",
    name: "浙中婚庆广场",
    category: Category.VENUE,
    location: "浙江省-金华市",
    price: 30000,
    rating: 4.5,
    reviews: 100,
    image: "https://images.unsplash.com/photo-1561488111-5d800fd56b32?q=80&w=800&auto=format&fit=crop",
    description: "一站式婚庆采购基地。导航：地图搜索 '浙中婚庆广场'",
    features: ["采购基地", "品类全"],
    contact: { phone: "0579-88887777", email: "zhezhong@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7309303980687953179"
    }
  },

  // --- Guangdong ---
  {
    id: "gd-gz-1",
    name: "GoldenLove 婚礼影像",
    category: Category.PHOTO,
    location: "广东省-广州市",
    price: 26800,
    rating: 5.0,
    reviews: 500,
    image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=800&auto=format&fit=crop",
    description: "顶尖婚礼摄像/摄影团队。地址：海珠区合创中心 2806-7。导航：地图搜索 'GoldenLove 婚礼影像 (广州店)'",
    features: ["电影质感", "高端定制"],
    contact: { phone: "020-88881111", email: "gl@wedding.com" }
  },
  {
    id: "gd-gz-2",
    name: "薇影像婚纱摄影 (广州总店)",
    category: Category.PHOTO,
    location: "广东省-广州市",
    price: 9999,
    rating: 4.8,
    reviews: 600,
    image: "https://images.unsplash.com/photo-1623190240176-373673f83191?q=80&w=800&auto=format&fit=crop",
    description: "广州总店。导航：地图搜索 '薇影像婚纱摄影 (广州总店)'",
    features: ["复古港风", "纪实拍摄"],
    contact: { phone: "020-88882222", email: "wei@wedding.com" },
    externalLinks: {
        douyin: "https://m.hunliji.com/package/detail_2529231"
    }
  },
  {
    id: "gd-sz-1",
    name: "莫兰迪婚纱摄影",
    category: Category.PHOTO,
    location: "广东省-深圳市",
    price: 13999,
    rating: 4.9,
    reviews: 800,
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=800&auto=format&fit=crop",
    description: "莫兰迪色系高级感。导航：地图搜索 '莫兰迪婚纱摄影 (深圳店)'",
    features: ["高级配色", "深圳周边旅拍"],
    contact: { phone: "0755-88883333", email: "morandi@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/26161290896"
    }
  },
  {
    id: "gd-sz-2",
    name: "公主嫁期婚礼婚庆",
    category: Category.DECOR,
    location: "广东省-深圳市",
    price: 26888,
    rating: 4.7,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1460364157752-926555421a7e?q=80&w=800&auto=format&fit=crop",
    description: "宝安区前进 2 路创建大厦 202 号。导航：地图搜索 '公主嫁期婚礼 (深圳宝安店)'",
    features: ["一站式", "高性价比"],
    contact: { phone: "0755-88884444", email: "princess@wedding.com" },
    externalLinks: {
        meituan: "https://i.meituan.com/poi/1829509805"
    }
  },
  {
    id: "gd-fs-1",
    name: "红满堂婚典",
    category: Category.DECOR,
    location: "广东省-佛山市",
    price: 18888,
    rating: 4.6,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop",
    description: "顺德区大吉中心街 3 号。导航：地图搜索 '红满堂婚典 (顺德店)'",
    features: ["传统中式", "顺德特色"],
    contact: { phone: "0757-88885555", email: "hmt@wedding.com" }
  },

  // --- Sichuan ---
  {
    id: "sc-cd-1",
    name: "成都红绣球婚礼",
    category: Category.DECOR,
    location: "四川省-成都市",
    price: 39800,
    rating: 4.9,
    reviews: 400,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop",
    description: "成都知名品牌。地址：锦江区华星路 16 号。导航：地图搜索 '成都红绣球婚礼策划'",
    features: ["老牌名店", "案例丰富"],
    contact: { phone: "028-88881111", email: "redball@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/search_result/成都红绣球婚礼"
    }
  },
  {
    id: "sc-cd-2",
    name: "成都喜影社",
    category: Category.PHOTO,
    location: "四川省-成都市",
    price: 11888,
    rating: 4.8,
    reviews: 350,
    image: "https://images.unsplash.com/photo-1616166330003-8e10464618a3?q=80&w=800&auto=format&fit=crop",
    description: "高种草商家。导航：地图搜索 '成都喜影社婚纱摄影'",
    features: ["网红风格", "极简"],
    contact: { phone: "028-88882222", email: "joyimage@wedding.com" }
  },
  {
    id: "sc-my-1",
    name: "慕希婚纱礼服馆",
    category: Category.DRESS,
    location: "四川省-绵阳市",
    price: 4800,
    rating: 4.8,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop",
    description: "绵阳高定婚纱。导航：地图搜索 '慕希婚纱礼服馆 (绵阳店)'",
    features: ["款式新", "服务好"],
    contact: { phone: "0816-88883333", email: "muxi@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/2654834652",
        douyin: "https://www.iesdouyin.com/share/video/7458841808433417484"
    }
  },
  {
    id: "sc-gy-1",
    name: "广元天赐良缘婚庆",
    category: Category.DECOR,
    location: "四川省-广元市",
    price: 15888,
    rating: 4.6,
    reviews: 60,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    description: "广元本地口碑。导航：抖音搜索 '广元天赐良缘婚庆'",
    features: ["性价比", "本地服务"],
    contact: { phone: "0839-88884444", email: "tianci@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7468096387800894777"
    }
  },

  // --- Shandong ---
  {
    id: "sd-jn-1",
    name: "济南梦马摄影",
    category: Category.PHOTO,
    location: "山东省-济南市",
    price: 8888,
    rating: 4.8,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop",
    description: "梦马摄影工作室。导航：地图搜索 '济南梦马摄影工作室'",
    features: ["年轻团队", "创意拍摄"],
    contact: { phone: "0531-88881111", email: "dreamhorse@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7482745130982690048"
    }
  },
  {
    id: "sd-jn-2",
    name: "凤求凰婚礼会馆",
    category: Category.VENUE,
    location: "山东省-济南市",
    price: 45888,
    rating: 4.7,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    description: "历下区工业南路高新万达广场 J2 号写字楼 1911 室。导航：地图搜索 '凤求凰婚礼会馆 (济南高新店)'",
    features: ["婚礼会馆", "省心"],
    contact: { phone: "0531-88882222", email: "fenghuang@wedding.com" },
     externalLinks: {
        douyin: "https://www.hunliji.com/jinan/merchant"
    }
  },
  {
    id: "sd-qd-1",
    name: "ZMBRIDAL 赵梦婚纱",
    category: Category.DRESS,
    location: "山东省-青岛市",
    price: 12800,
    rating: 4.9,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=800&auto=format&fit=crop",
    description: "延安三路 212 号华通中联云智产业园 A 座 5 楼。导航：地图搜索 'ZMBRIDAL 赵梦婚纱 (青岛店)'",
    features: ["设计师品牌", "高定"],
    contact: { phone: "0532-88883333", email: "zm@wedding.com" },
    externalLinks: {
        meituan: "https://i.meituan.com/poi/234934"
    }
  },
  {
    id: "sd-ly-1",
    name: "临沂华禧婚礼管家",
    category: Category.DECOR,
    location: "山东省-临沂市",
    price: 16800,
    rating: 4.7,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800&auto=format&fit=crop",
    description: "临沂专业婚礼管家。导航：地图搜索 '临沂华禧婚礼管家'",
    features: ["管家服务", "全程统筹"],
    contact: { phone: "0539-88884444", email: "huaxi@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7384395611627359538"
    }
  },

  // --- Yunnan ---
  {
    id: "yn-km-1",
    name: "魔戒婚礼策划",
    category: Category.DECOR,
    location: "云南省-昆明市",
    price: 26800,
    rating: 4.7,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop",
    description: "官渡区珥季路 1246 号 19 号。导航：地图搜索 '魔戒婚礼策划 (昆明店)'",
    features: ["主题定制", "创意"],
    contact: { phone: "0871-88881111", email: "mojie@wedding.com" },
    externalLinks: {
        meituan: "https://i.meituan.com/deal/54646384/feedback"
    }
  },
  {
    id: "yn-km-2",
    name: "博雅婚庆",
    category: Category.DECOR,
    location: "云南省-昆明市",
    price: 18800,
    rating: 4.6,
    reviews: 100,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    description: "西山区滇池路南亚风情第一城。导航：地图搜索 '博雅婚庆 (昆明店)'",
    features: ["本地老牌", "性价比"],
    contact: { phone: "0871-88882222", email: "boya@wedding.com" },
    externalLinks: {
        meituan: "https://i.meituan.com/poi/51798031"
    }
  },
  {
    id: "yn-dl-1",
    name: "九九摄影",
    category: Category.PHOTO,
    location: "云南省-大理白族自治州",
    price: 13800,
    rating: 4.8,
    reviews: 300,
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=800&auto=format&fit=crop",
    description: "大理旅拍热门。导航：地图搜索 '九九摄影 (大理店)'",
    features: ["洱海旅拍", "吉普车旅拍"],
    contact: { phone: "0872-88883333", email: "jiujiu@wedding.com" },
    externalLinks: {
        xiaohongshu: "https://www.xiaohongshu.com/user/profile/2879079660",
        douyin: "https://www.iesdouyin.com/share/video/7484614768754478363"
    }
  },
  {
    id: "yn-lj-1",
    name: "小野婚礼",
    category: Category.DECOR,
    location: "云南省-丽江市",
    price: 32000,
    rating: 4.9,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop",
    description: "丽江仟佰汇商业步行街 10 栋 102 商铺。导航：地图搜索 '小野婚礼 (丽江店)'",
    features: ["雪山婚礼", "草坪派对"],
    contact: { phone: "0888-88884444", email: "xiaoye@wedding.com" },
     externalLinks: {
        douyin: "https://xiaoyeweddingstudio.com"
    }
  },
  {
    id: "yn-lj-2",
    name: "屿见旅拍 / 北岸映画",
    category: Category.PHOTO,
    location: "云南省-丽江市",
    price: 12888,
    rating: 4.8,
    reviews: 250,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop",
    description: "丽江双子星。导航：地图搜索 '屿见旅拍 (丽江店)' 或 '北岸映画 (丽江店)'",
    features: ["雪山旅拍", "古城拍摄"],
    contact: { phone: "0888-88885555", email: "yujian@wedding.com" },
    externalLinks: {
        douyin: "https://www.iesdouyin.com/share/video/7521547561246641467"
    }
  },
  {
    id: "yn-bn-1",
    name: "云南爝摄婚纱摄影",
    category: Category.PHOTO,
    location: "云南省-西双版纳傣族自治州",
    price: 9999,
    rating: 4.7,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=800&auto=format&fit=crop",
    description: "曼景兰古城 1 期 4 栋 6 号。导航：地图搜索 '云南爝摄婚纱摄影 (西双版纳店)'",
    features: ["傣式风情", "热带雨林"],
    contact: { phone: "0691-88886666", email: "jueshe@wedding.com" },
    externalLinks: {
        douyin: "https://m.hunliji.com/merchant/detail_142997"
    }
  }
];