# tj-arr2tree
​	

## 说明

此模块提供一个纯函数，可以将数组转化为树。



## 使用

```react
import arr2tree from 'tj-arr2tree';

const arr = [
  {
    menuId: '1',
    parentId: '0',
    menuName: '报表管理'
  }, {
    menuId: '11',
    parentId: '1',
    menuName: '财务报表'
  }, {
    menuId: '12',
    parentId: '1',
    menuName: '产品报表'
  }
];

const F_Id_Field = 'menuId';
const F_ParentId_Field = 'parentId';
const Root_Id = '0';

let root = arr2tree(arr, F_Id_Field, F_ParentId_Field, Root_Id);
```

​	

## 参数列表

arr2tree函数共接收4个参数：

- arr

  将要被转化为树结构的原始数据，格式为对象数组

- f_id_field

  原始数组中，节点Id字段名

- f_parentId_field

  原始数组中，节点的父级Id字段名

- rootId

  约定的根节点的Id值

	​	

## 返回值结构

arr2tree函数返回一个对象，此对象是一个树结构。具体包含以下字段：

- id

  节点id

- level

  节点的层级，我们约定根节点root的层级是0，root的孩子的层级是1，以此类推

- parent

  指向节点的父亲

- children

  节点的全部孩子，类型为数组

- origin

  源数据，该字段保存对原始输入数组中节点所对应记录的引用