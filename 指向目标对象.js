/**
 *  指向目标对象
 *  给图层的“旋转”打表达式
 * @param target_position 指向目标坐标
 * @param self_position 本身坐标 // 如果不传参数，则默认值为当前图层的位置
 * @returns {number}
 */
function calc_rotation_target(target_position,self_position){
    self_position=!!self_position?self_position:thisLayer.position;
    var angle=Math.atan2(target_position[1]-self_position[1],self_position[0]-target_position[0]);
    return -(angle*(180/Math.PI)+90);
}

var p1=thisComp.layer("目标").transform.position;
calc_rotation_target(p1);
