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
        width: '30%',
        dataField: 'aaa',
        caption: 'Категория', //ℹ source icon
        cssClass: "ctg-rws" //Задает класс CSS, применяемый к ячейкам:
                                     //.dx-data-row .cell-highlighted {
      },
      {
        encodeHtml: false,
        width: '20%',
        dataField: 'bbb',
        caption: 'Eng.'
      },
      {
        encodeHtml: false,
        width: '23%',
        dataField: 'ccc',
        caption: 'Рус.',
        sortOrder: 'asc' //undefined | 'asc' | 'desc'
      },
      {
        encodeHtml: false,
        width: '42%',
        dataField: 'ddd',
        caption: 'Инг/Чеч',
        cssClass: "cell-highlighted" //Задает класс CSS, применяемый к ячейкам:
                                     //.dx-data-row .cell-highlighted {
      },
      {
        encodeHtml: false,
        width: '10%',
        dataField: 'eee',
        caption: 'Язык'
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
   obj.value = obj.value.replace('1', 'I');
   obj.value = obj.value.replace('Ι', 'I');
   obj.value = obj.value.replace('Ӏ', 'I');
   obj.value = obj.value.replace('I', 'I');
   obj.value = obj.value.replace('l', 'I');
}
function fix(obj) {
/*замена  отдельных  «Ιl»  и  «1ΙIl» в составе диграфов: —  на «Палочка (кириллица)»:*/

   obj.value = obj.value.replace('́', '');
   obj.value = obj.value.replace('̄', '');
   obj.value = obj.value.replace('|', '');


   obj.value = obj.value.replace('Ι', 'Ӏ');
   /*obj.value = obj.value.replace('Ӏ', 'Ӏ');
   obj.value = obj.value.replace('I', 'Ӏ');*/
   obj.value = obj.value.replace('l', 'Ӏ');

   obj.value = obj.value.replace('Ι', 'Ӏ');
   /*obj.value = obj.value.replace('Ӏ', 'Ӏ');
   obj.value = obj.value.replace('I', 'Ӏ');*/
   obj.value = obj.value.replace('l', 'Ӏ');

   obj.value = obj.value.replace('Ι', 'Ӏ');
   /*obj.value = obj.value.replace('Ӏ', 'Ӏ');
   obj.value = obj.value.replace('I', 'Ӏ');*/
   obj.value = obj.value.replace('l', 'Ӏ');

   obj.value = obj.value.replace('Ι', 'Ӏ');
   /*obj.value = obj.value.replace('Ӏ', 'Ӏ');
   obj.value = obj.value.replace('I', 'Ӏ');*/
   obj.value = obj.value.replace('l', 'Ӏ');

   obj.value = obj.value.replace('1й', 'Ӏй');
   obj.value = obj.value.replace('1у', 'Ӏу');
   obj.value = obj.value.replace('1е', 'Ӏе');
   obj.value = obj.value.replace('1ы', 'Ӏы');
   obj.value = obj.value.replace('1а', 'Ӏа');
   obj.value = obj.value.replace('1о', 'Ӏо');
   obj.value = obj.value.replace('1э', 'Ӏэ');
   obj.value = obj.value.replace('1я', 'Ӏя');
   obj.value = obj.value.replace('1и', 'Ӏи');
   obj.value = obj.value.replace('1ь', 'Ӏь');
   obj.value = obj.value.replace('1ю', 'Ӏю');

   obj.value = obj.value.replace('й1', 'йӀ');
   obj.value = obj.value.replace('у1', 'уӀ');
   obj.value = obj.value.replace('е1', 'еӀ');
   obj.value = obj.value.replace('ы1', 'ыӀ');
   obj.value = obj.value.replace('а1', 'аӀ');
   obj.value = obj.value.replace('о1', 'оӀ');
   obj.value = obj.value.replace('э1', 'эӀ');
   obj.value = obj.value.replace('я1', 'яӀ');
   obj.value = obj.value.replace('и1', 'иӀ');
   obj.value = obj.value.replace('ь1', 'ьӀ');
   obj.value = obj.value.replace('ю1', 'юӀ');

   obj.value = obj.value.replace('г1', 'гӀ');
   obj.value = obj.value.replace('к1', 'кӀ');
   obj.value = obj.value.replace('п1', 'пӀ');
   obj.value = obj.value.replace('т1', 'тӀ');
   obj.value = obj.value.replace('х1', 'хӀ');
   obj.value = obj.value.replace('ц1', 'цӀ');
   obj.value = obj.value.replace('ч1', 'чӀ');

   obj.value = obj.value.replace('1й', 'Ӏй');
   obj.value = obj.value.replace('1у', 'Ӏу');
   obj.value = obj.value.replace('1е', 'Ӏе');
   obj.value = obj.value.replace('1ы', 'Ӏы');
   obj.value = obj.value.replace('1а', 'Ӏа');
   obj.value = obj.value.replace('1о', 'Ӏо');
   obj.value = obj.value.replace('1э', 'Ӏэ');
   obj.value = obj.value.replace('1я', 'Ӏя');
   obj.value = obj.value.replace('1и', 'Ӏи');
   obj.value = obj.value.replace('1ь', 'Ӏь');
   obj.value = obj.value.replace('1ю', 'Ӏю');

   obj.value = obj.value.replace('й1', 'йӀ');
   obj.value = obj.value.replace('у1', 'уӀ');
   obj.value = obj.value.replace('е1', 'еӀ');
   obj.value = obj.value.replace('ы1', 'ыӀ');
   obj.value = obj.value.replace('а1', 'аӀ');
   obj.value = obj.value.replace('о1', 'оӀ');
   obj.value = obj.value.replace('э1', 'эӀ');
   obj.value = obj.value.replace('я1', 'яӀ');
   obj.value = obj.value.replace('и1', 'иӀ');
   obj.value = obj.value.replace('ь1', 'ьӀ');
   obj.value = obj.value.replace('ю1', 'юӀ');

   obj.value = obj.value.replace('г1', 'гӀ');
   obj.value = obj.value.replace('к1', 'кӀ');
   obj.value = obj.value.replace('п1', 'пӀ');
   obj.value = obj.value.replace('т1', 'тӀ');
   obj.value = obj.value.replace('х1', 'хӀ');
   obj.value = obj.value.replace('ц1', 'цӀ');
   obj.value = obj.value.replace('ч1', 'чӀ');



   obj.value = obj.value.replace('Ιй', 'Ӏй');
   obj.value = obj.value.replace('Ιу', 'Ӏу');
   obj.value = obj.value.replace('Ιе', 'Ӏе');
   obj.value = obj.value.replace('Ιы', 'Ӏы');
   obj.value = obj.value.replace('Ιа', 'Ӏа');
   obj.value = obj.value.replace('Ιо', 'Ӏо');
   obj.value = obj.value.replace('Ιэ', 'Ӏэ');
   obj.value = obj.value.replace('Ιя', 'Ӏя');
   obj.value = obj.value.replace('Ιи', 'Ӏи');
   obj.value = obj.value.replace('Ιь', 'Ӏь');
   obj.value = obj.value.replace('Ιю', 'Ӏю');

   obj.value = obj.value.replace('йΙ', 'йӀ');
   obj.value = obj.value.replace('уΙ', 'уӀ');
   obj.value = obj.value.replace('еΙ', 'еӀ');
   obj.value = obj.value.replace('ыΙ', 'ыӀ');
   obj.value = obj.value.replace('аΙ', 'аӀ');
   obj.value = obj.value.replace('оΙ', 'оӀ');
   obj.value = obj.value.replace('эΙ', 'эӀ');
   obj.value = obj.value.replace('яΙ', 'яӀ');
   obj.value = obj.value.replace('иΙ', 'иӀ');
   obj.value = obj.value.replace('ьΙ', 'ьӀ');
   obj.value = obj.value.replace('юΙ', 'юӀ');

   obj.value = obj.value.replace('гΙ', 'гӀ');
   obj.value = obj.value.replace('кΙ', 'кӀ');
   obj.value = obj.value.replace('пΙ', 'пӀ');
   obj.value = obj.value.replace('тΙ', 'тӀ');
   obj.value = obj.value.replace('хΙ', 'хӀ');
   obj.value = obj.value.replace('цΙ', 'цӀ');
   obj.value = obj.value.replace('чΙ', 'чӀ');


   obj.value = obj.value.replace('Ιй', 'Ӏй');
   obj.value = obj.value.replace('Ιу', 'Ӏу');
   obj.value = obj.value.replace('Ιе', 'Ӏе');
   obj.value = obj.value.replace('Ιы', 'Ӏы');
   obj.value = obj.value.replace('Ιа', 'Ӏа');
   obj.value = obj.value.replace('Ιо', 'Ӏо');
   obj.value = obj.value.replace('Ιэ', 'Ӏэ');
   obj.value = obj.value.replace('Ιя', 'Ӏя');
   obj.value = obj.value.replace('Ιи', 'Ӏи');
   obj.value = obj.value.replace('Ιь', 'Ӏь');
   obj.value = obj.value.replace('Ιю', 'Ӏю');

   obj.value = obj.value.replace('йΙ', 'йӀ');
   obj.value = obj.value.replace('уΙ', 'уӀ');
   obj.value = obj.value.replace('еΙ', 'еӀ');
   obj.value = obj.value.replace('ыΙ', 'ыӀ');
   obj.value = obj.value.replace('аΙ', 'аӀ');
   obj.value = obj.value.replace('оΙ', 'оӀ');
   obj.value = obj.value.replace('эΙ', 'эӀ');
   obj.value = obj.value.replace('яΙ', 'яӀ');
   obj.value = obj.value.replace('иΙ', 'иӀ');
   obj.value = obj.value.replace('ьΙ', 'ьӀ');
   obj.value = obj.value.replace('юΙ', 'юӀ');

   obj.value = obj.value.replace('гΙ', 'гӀ');
   obj.value = obj.value.replace('кΙ', 'кӀ');
   obj.value = obj.value.replace('пΙ', 'пӀ');
   obj.value = obj.value.replace('тΙ', 'тӀ');
   obj.value = obj.value.replace('хΙ', 'хӀ');
   obj.value = obj.value.replace('цΙ', 'цӀ');
   obj.value = obj.value.replace('чΙ', 'чӀ');




   obj.value = obj.value.replace('Iй', 'Ӏй');
   obj.value = obj.value.replace('Iу', 'Ӏу');
   obj.value = obj.value.replace('Iе', 'Ӏе');
   obj.value = obj.value.replace('Iы', 'Ӏы');
   obj.value = obj.value.replace('Iа', 'Ӏа');
   obj.value = obj.value.replace('Iо', 'Ӏо');
   obj.value = obj.value.replace('Iэ', 'Ӏэ');
   obj.value = obj.value.replace('Iя', 'Ӏя');
   obj.value = obj.value.replace('Iи', 'Ӏи');
   obj.value = obj.value.replace('Iь', 'Ӏь');
   obj.value = obj.value.replace('Iю', 'Ӏю');

   obj.value = obj.value.replace('йI', 'йӀ');
   obj.value = obj.value.replace('уI', 'уӀ');
   obj.value = obj.value.replace('еI', 'еӀ');
   obj.value = obj.value.replace('ыI', 'ыӀ');
   obj.value = obj.value.replace('аI', 'аӀ');
   obj.value = obj.value.replace('оI', 'оӀ');
   obj.value = obj.value.replace('эI', 'эӀ');
   obj.value = obj.value.replace('яI', 'яӀ');
   obj.value = obj.value.replace('иI', 'иӀ');
   obj.value = obj.value.replace('ьI', 'ьӀ');
   obj.value = obj.value.replace('юI', 'юӀ');

   obj.value = obj.value.replace('гI', 'гӀ');
   obj.value = obj.value.replace('кI', 'кӀ');
   obj.value = obj.value.replace('пI', 'пӀ');
   obj.value = obj.value.replace('тI', 'тӀ');
   obj.value = obj.value.replace('хI', 'хӀ');
   obj.value = obj.value.replace('цI', 'цӀ');
   obj.value = obj.value.replace('чI', 'чӀ');

   obj.value = obj.value.replace('Iй', 'Ӏй');
   obj.value = obj.value.replace('Iу', 'Ӏу');
   obj.value = obj.value.replace('Iе', 'Ӏе');
   obj.value = obj.value.replace('Iы', 'Ӏы');
   obj.value = obj.value.replace('Iа', 'Ӏа');
   obj.value = obj.value.replace('Iо', 'Ӏо');
   obj.value = obj.value.replace('Iэ', 'Ӏэ');
   obj.value = obj.value.replace('Iя', 'Ӏя');
   obj.value = obj.value.replace('Iи', 'Ӏи');
   obj.value = obj.value.replace('Iь', 'Ӏь');
   obj.value = obj.value.replace('Iю', 'Ӏю');

   obj.value = obj.value.replace('йI', 'йӀ');
   obj.value = obj.value.replace('уI', 'уӀ');
   obj.value = obj.value.replace('еI', 'еӀ');
   obj.value = obj.value.replace('ыI', 'ыӀ');
   obj.value = obj.value.replace('аI', 'аӀ');
   obj.value = obj.value.replace('оI', 'оӀ');
   obj.value = obj.value.replace('эI', 'эӀ');
   obj.value = obj.value.replace('яI', 'яӀ');
   obj.value = obj.value.replace('иI', 'иӀ');
   obj.value = obj.value.replace('ьI', 'ьӀ');
   obj.value = obj.value.replace('юI', 'юӀ');

   obj.value = obj.value.replace('гI', 'гӀ');
   obj.value = obj.value.replace('кI', 'кӀ');
   obj.value = obj.value.replace('пI', 'пӀ');
   obj.value = obj.value.replace('тI', 'тӀ');
   obj.value = obj.value.replace('хI', 'хӀ');
   obj.value = obj.value.replace('цI', 'цӀ');
   obj.value = obj.value.replace('чI', 'чӀ');




   obj.value = obj.value.replace('lй', 'Ӏй');
   obj.value = obj.value.replace('lу', 'Ӏу');
   obj.value = obj.value.replace('lе', 'Ӏе');
   obj.value = obj.value.replace('lы', 'Ӏы');
   obj.value = obj.value.replace('lа', 'Ӏа');
   obj.value = obj.value.replace('lо', 'Ӏо');
   obj.value = obj.value.replace('lэ', 'Ӏэ');
   obj.value = obj.value.replace('lя', 'Ӏя');
   obj.value = obj.value.replace('lи', 'Ӏи');
   obj.value = obj.value.replace('lь', 'Ӏь');
   obj.value = obj.value.replace('lю', 'Ӏю');

   obj.value = obj.value.replace('йl', 'йӀ');
   obj.value = obj.value.replace('уl', 'уӀ');
   obj.value = obj.value.replace('еl', 'еӀ');
   obj.value = obj.value.replace('ыl', 'ыӀ');
   obj.value = obj.value.replace('аl', 'аӀ');
   obj.value = obj.value.replace('оl', 'оӀ');
   obj.value = obj.value.replace('эl', 'эӀ');
   obj.value = obj.value.replace('яl', 'яӀ');
   obj.value = obj.value.replace('иl', 'иӀ');
   obj.value = obj.value.replace('ьl', 'ьӀ');
   obj.value = obj.value.replace('юl', 'юӀ');

   obj.value = obj.value.replace('гl', 'гӀ');
   obj.value = obj.value.replace('кl', 'кӀ');
   obj.value = obj.value.replace('пl', 'пӀ');
   obj.value = obj.value.replace('тl', 'тӀ');
   obj.value = obj.value.replace('хl', 'хӀ');
   obj.value = obj.value.replace('цl', 'цӀ');
   obj.value = obj.value.replace('чl', 'чӀ');


   obj.value = obj.value.replace('lй', 'Ӏй');
   obj.value = obj.value.replace('lу', 'Ӏу');
   obj.value = obj.value.replace('lе', 'Ӏе');
   obj.value = obj.value.replace('lы', 'Ӏы');
   obj.value = obj.value.replace('lа', 'Ӏа');
   obj.value = obj.value.replace('lо', 'Ӏо');
   obj.value = obj.value.replace('lэ', 'Ӏэ');
   obj.value = obj.value.replace('lя', 'Ӏя');
   obj.value = obj.value.replace('lи', 'Ӏи');
   obj.value = obj.value.replace('lь', 'Ӏь');
   obj.value = obj.value.replace('lю', 'Ӏю');

   obj.value = obj.value.replace('йl', 'йӀ');
   obj.value = obj.value.replace('уl', 'уӀ');
   obj.value = obj.value.replace('еl', 'еӀ');
   obj.value = obj.value.replace('ыl', 'ыӀ');
   obj.value = obj.value.replace('аl', 'аӀ');
   obj.value = obj.value.replace('оl', 'оӀ');
   obj.value = obj.value.replace('эl', 'эӀ');
   obj.value = obj.value.replace('яl', 'яӀ');
   obj.value = obj.value.replace('иl', 'иӀ');
   obj.value = obj.value.replace('ьl', 'ьӀ');
   obj.value = obj.value.replace('юl', 'юӀ');

   obj.value = obj.value.replace('гl', 'гӀ');
   obj.value = obj.value.replace('кl', 'кӀ');
   obj.value = obj.value.replace('пl', 'пӀ');
   obj.value = obj.value.replace('тl', 'тӀ');
   obj.value = obj.value.replace('хl', 'хӀ');
   obj.value = obj.value.replace('цl', 'цӀ');
   obj.value = obj.value.replace('чl', 'чӀ');

}