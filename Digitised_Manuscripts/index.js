/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
VirtualScrolling:
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/VirtualScrolling/Knockout/Light/
Если компонент DataGrid привязан к большому набору данных, вы можете включить функцию виртуальной прокрутки, чтобы оптимизировать время загрузки данных и улучшить навигацию пользователя. Компонент вычисляет общее количество видимых строк и отображает полосу прокрутки, которая позволяет пользователям переходить к любому разделу строк. Когда пользователи отпускают ползунок прокрутки, элемент управления загружает записи для отображения в области просмотра и удаляет другие строки из памяти:
    dataSource: allData, //после dataSource: allData
            scrolling: {
                mode: "virtual"
            },          
            sorting: {		//без "none sorting"
                mode: "none"
            },
            onContentReady: function(e) {
                e.component.option("loadPanel.enabled", false);
            }


https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/InfiniteScrolling/jQuery/Light/
ВАРИАНТ с подгрузкой по мере прокрутки:
    dataSource: allData, //после dataSource: allData
        loadPanel: {
            enabled: false
        },
        scrolling: {
            mode: 'infinite'
        },
        sorting: {
            mode: "none"
        }




*/

$(function(){
  $('#gridContainer').dxDataGrid({
    allowColumnResizing: true,
    selection: {mode: "single"},  // выделение
    dataSource: allData,
            scrolling: {
                mode: "virtual"
            },
            onContentReady: function(e) {
                e.component.option("loadPanel.enabled", false);
            },
    searchPanel: {
      encodeHtml: false,
      visible: true,
      width: 250,
      placeholder: "Поиск..."
    },
    filterRow: {
        encodeHtml: false,
        visible: true,
        applyFilter: "auto"
    },
    headerFilter: {
        encodeHtml: false,
        visible: true
    },
    columns: [
      {
        //allowFiltering: false,
        //headerFilter: false,
        //allowSorting: false,
        encodeHtml: false,
        width: '20%',
        dataField: 'aaa',
        caption: 'browseheader', //ℹ source icon
        sortOrder: 'asc', //undefined | 'asc' | 'desc'
        cssClass: "cell-highlighted" //Задает класс CSS, применяемый к ячейкам:
                                     //.dx-data-row .cell-highlighted {
      },
      {
        encodeHtml: false,
        width: '20%',
        dataField: 'bbb',
        caption: 'daterange',
        cssClass: "ctg-rws" //Задает класс CSS, применяемый к ячейкам:
                                     //.dx-data-row .cell-highlighted {
      },
      {
        encodeHtml: false,
        width: '60%',
        dataField: 'ccc',
        caption: 'browsetitle',
        cssClass: "cell-highlighted" //Задает класс CSS, применяемый к ячейкам:
                                     //.dx-data-row .cell-highlighted {
      }
    ]
  });
});

//значение в файле dx.all.js	e.pageSize:
//значение в файле dx.all.js	exportAll":"Export all data","dxDataGrid-headerFilterEmptyValue":"
//значение в файле dx.all.js	headerFilter:{visible:!1,width:

//В файл dx.all.js, после:	createInput:function(){var e=i("<input
//<input onkeyup='fix(this)'>
//[ӀΙIl1]
function zzzfix(obj) {
}
function fix(obj) {

}