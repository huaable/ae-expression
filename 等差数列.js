/**
 * 等差数列
 * @param step 公差
 * @param perFrame 每 perFrame 帧得到一个新数字, 如果不传参数，默认值为合成帧速率
 * @returns {number}
 */
function animate_step(step,perFrame){
	//帧速率
	fps = 1/thisComp.frameDuration;
	perFrame = !!perFrame?perFrame:fps;
	return Math.floor(time/perFrame*fps)*step;
}

animate_step(2,2);