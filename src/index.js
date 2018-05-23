
// arr2tree��һ��������ģ�飬��ģ�������һ��������
// �ú������Խ�����ת��Ϊ������������Ԫ���Լ�id������id��ȷ�����ӹ�ϵ
// ��Ҫ������ڵ����rootid����ȷ�����ĸ��ڵ�    

// ����
// arr�������������
// fid��id�ֶ���
// fparentid������id�ֶ���
// rootid�����ڵ��id

// ���
// ���ĸ��ڵ�
// ÿ�����ڵ�������¼����ֶ�    
// children���ڵ�ĺ���
// level���ڵ�Ĳ㼶�����ڵ�Ϊ0��
// origin����Դ����ڵ������
// id������
// parent�����ڵ�

let fn = function (arr, fid, fparentid, rootid) {

  // ����һ�ݣ���ֹ�޸���������
  var carr = arr.slice();

  // ���еļ����������Ķ���
  var all = [];

  // ����root����
  var root = {};
  root.origin = null;
  root.children = [];
  root.id = rootid;
  root.level = 0;
  root.parent = null;

  // ��root��ӵ�all
  all.push(root);

  // ѭ�����Ʊ���
  var loopCount = 0;
  var maxCount = carr.length;

  // ��������all�У�����id�ҵ�����
  var gbid = function (id) {
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === id)
        return all[i];
    }
  }

  // ִ��ѭ�������carr.length�Σ�
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