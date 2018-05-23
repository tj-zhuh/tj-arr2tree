
// arr2tree是一个纯函数模块，此模块仅返回一个纯函数
// 该函数可以将数组转化为树，根据数组元素自己id、父级id来确定父子关系
// 需要传入根节点编码rootid，来确定树的根节点    

// 输入
// arr：待处理的数组
// fid：id字段名
// fparentid：父级id字段名
// rootid：根节点的id

// 输出
// 树的根节点
// 每个树节点包含以下几个字段    
// children：节点的孩子
// level：节点的层级（根节点为0）
// origin：对源数组节点的引用
// id：主键
// parent：父节点

let fn = function (arr, fid, fparentid, rootid) {

  // 复制一份，防止修改输入数组
  var carr = arr.slice();

  // 所有的即将被创建的对象
  var all = [];

  // 创建root对象
  var root = {};
  root.origin = null;
  root.children = [];
  root.id = rootid;
  root.level = 0;
  root.parent = null;

  // 将root添加到all
  all.push(root);

  // 循环控制变量
  var loopCount = 0;
  var maxCount = carr.length;

  // 方法：在all中，根据id找到对象
  var gbid = function (id) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === id)
        return all[i];
    }
  }

  // 执行循环（最多carr.length次）
  while (loopCount++ < maxCount) {

    for (var i = 0; i < carr.length; i++) {
      var item = carr[i];
      var parent = gbid(item[fparentid]);
      if (parent) {
        var obj = {};
        obj.origin = item;
        obj.children = [];
        obj.id = item[fid];
        obj.level = parent.level + 1;
        obj.parent = parent;
        parent.children.push(obj);
        all.push(obj);
        carr.splice(i, 1);
        break;
      }
    }
  }

  return root;
};

export default fn;