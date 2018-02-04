function calc() {
    var list = {
        value: document.test.first.value,
        next: {
            value: document.test.second.value,
            next: {
                value: document.test.third.value,
                next: {
                    value: document.test.fourth.value,
                    next: null
                }
            }
        }
    };
    /*var list = {
        value:1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value:4,
                    next: null
                }
            }
        }
    };*/

    function printList(list) {
        let arr = [];
        let tmp = list;

        while (tmp) {
            arr.push(tmp.value);
            tmp = tmp.next;
        };

        document.test.list.value=arr;
        document.test.listReverse.value=arr.reverse();
    };
    printList(list);

    /*function printForEach(list) {
        let arr = [];
        let arr2 = [];
        let tmp = list;

        while (tmp) {
            arr.push(tmp.value);
            tmp = tmp.next;
        };
        arr2.length = arr.length;

            arr.forEach(function (item) {
                 item * item;
                }
            );
            document.test.listForEach.value = arr;
    };
    printForEach(list);*/

    function set(index, item) {
        index = index - 1;
        let arr = [], newArr=[];
        let tmp = list;

        while (tmp) {
            arr.push(tmp.value);
            tmp = tmp.next;
        }
        arr.splice(index, 0, item);
        document.test.NewList.value=arr;
    }
    set(document.test.position.value,document.test.itemAdd.value);

    function addFirstAndLast(first, last) {
        let arr = [], newArr=[];
        let tmp = list;

        while (tmp) {
            arr.push(tmp.value);
            tmp = tmp.next;
        }
        arr.unshift(document.test.firstItem.value);
        arr.push(document.test.lastItem.value);
        document.test.NewList1.value=arr;
    }
    addFirstAndLast(document.test.firstItem.value,document.test.lastItem.value);

    function deleteFirst()
    {
        subButtonF.onclick  = function() {
            let arr = [];
            let tmp = list;

            while (tmp) {
                arr.push(tmp.value);
                tmp = tmp.next;
            }
            arr.shift();
            document.test.NewList2.value=arr;
        };
    }
    deleteFirst();

    function deleteLast()
    {
        subButtonL.onclick  = function() {
            let arr = [];
            let tmp = list;

            while (tmp) {
                arr.push(tmp.value);
                tmp = tmp.next;
            }
            arr.pop();
            document.test.NewList3.value=arr;
        };
    }
    deleteLast();

    function findItem(item){
            let arr = [];
            let tmp = list;

            while (tmp) {
                arr.push(tmp.value);
                tmp = tmp.next;
            }
           document.test.findItemProv.value=(arr.indexOf(item) != -1);
    }
    findItem( document.test.findItem.value);

}

$(document).ready(function(){
    $('input[name=findItem]').change(calc);
});