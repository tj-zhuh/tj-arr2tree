
import arr2tree from '../src/index.js';

const testData = [
  {
    menuId: '1',
    parentId: '0',
    menuName: '报表管理'
  }, {
    menuId: '11',
    parentId: '1',
    menuName: '财务报表'
  }, {
    menuId: '111',
    parentId: '11',
    menuName: '日报'
  }, {
    menuId: '112',
    parentId: '11',
    menuName: '月报'
  }, {
    menuId: '2',
    parentId: '0',
    menuName: '系统管理'
  }, {
    menuId: '21',
    parentId: '2',
    menuName: '账号管理'
  }
];

const F_Id_Field = 'menuId';
const F_ParentId_Field = 'parentId';
const Root_Id = '0';

let root = arr2tree(testData, F_Id_Field, F_ParentId_Field, Root_Id);

console.log(root);