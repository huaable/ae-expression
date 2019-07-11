/**
 *  圆周运动
 *  给 图层“位置”属性打表达式
 * @param radius 半径
 * @param speed 速度 运动一周所消耗的时长
 * @returns {*}
 */
function animate_circle(radius,speed){
	speed *=2*Math.PI;
	x = Math.sin(time * speed ) * radius;
	y = Math.cos(time * speed ) * radius;
	return value + [x,y,0]
}
animate_circle(250,1)
