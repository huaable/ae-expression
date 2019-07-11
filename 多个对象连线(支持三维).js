L1 = thisComp.layer("空 76");
L2 = thisComp.layer("空 75");

p1 = fromCompToSurface(L1.toComp(L1.anchorPoint));
p2 = fromCompToSurface(L2.toComp(L2.anchorPoint));

points =[p1,p2]; //可传入更多个对象坐标
createPath(points);
//createPath(points , inTangents = [], outTangents = [], is_closed = true)


/*
toComp(point, t=time)
返回类型：数组 [2 或 3]。
参数类型：point 是数组 [2 或 3]，t 是数值。
将点从图层空间变换到合成空间

fromCompToSurface(point, t=time)
返回类型：数组 [2]。
参数类型：point 是数组 [2 或 3]，t 是数值。
在从活动摄像机中进行查看时出现的位置将位于合成空间中的点投影到图层表面上的点（零 z 值）。
此方法有助于设置效果控制点。仅用于 3D 图层

createPath() 方法 {pathProperty}.createPath(points = [[0,0],[100,0], [100,100], [0,100]], inTangents = [], outTangents =[], is_closed = true)
根据一组点和切线创建路径对象。这些点由表示其 x、y坐标的数偶数组的数组定义。数组的长度必须至少为 1，可以为任意更大的长度。
点的入点手柄和出点手柄由表示其 x、y 位移坐标的数偶数组的数组定义。
切线数组的长度必须与点参数完全相同。
切点坐标值是相对于父点的坐标的位移 - 值 [0,0] 在入点处不产生弯度。
可以将路径的 points()、inTangents()、outTangents() 和isClosed() 方法传递给 points、inTangents、outTangents 和 is_closed 参数来复制路径。
可以将同一路径的 points 和 tangents 传递给 createPath()，经过修改即可
生成不同结果。

 */