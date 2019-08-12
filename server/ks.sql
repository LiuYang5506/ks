SET NAMES UTF8;
DROP DATABASE IF EXISTS ks;
CREATE DATABASE ks CHARSET=UTF8;
USE ks;

CREATE TABLE newhouse(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    /* 所在区 */
    area VARCHAR(32),
    /* 所在街道 */
    street VARCHAR(32),
    /* 详细地址 */
    full_address VARCHAR(128),
    /* 建筑面积 */
    measure VARCHAR(24),
    /* 单价 */
    unit_price INT,
    /* 总价 */
    total_price INT,
    /* 物业类型 */
    types VARCHAR(24),
    /* 开盘时间 */
    open_time VARCHAR(36),
    /* 在售 */
    onsale INT,
    /* 置业顾问id */
    consultant INT
);

INSERT INTO newhouse VALUES(null,'白市驿-上邦高尔夫国际社区','九龙坡区','白市驿','重庆九龙坡区上邦高尔夫国际社区','37-256',12000,45,'洋房、别墅','2019-07-01',1,001),(null,'保亿御景玖园','北碚区','蔡家','重庆北碚蔡家金兴大道(人民路小学旁)','83-134',15500,129,'普通住宅、跃层、洋房、别墅','2019-07-22',1,002),(null,'中骏东原阅璟山','九龙坡区','华岩新城','重庆九龙坡区龙门阵大道阅璄山销售中心','73-98',14000,102,'普通住宅','2019-06-25',1,003),(null,'和记黄埔御峰','南岸区','海棠溪','重庆南岸区御泰路201号','151-153',15500,234,'别墅','2018-12-08',1,004),(null,'泷悦华府','沙坪坝区','大学城','重庆市沙坪坝区大学城北路南150米','83-102',14000,116,'洋房','2019-08-03',1,005),(null,'格力两江总部公园','渝北区','龙兴','重庆市两江新区龙兴卧龙路南','43-86',9500,41,'公寓、Loft','2019-06-29',1,006);
