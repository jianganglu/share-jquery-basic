

$('#testDiv').addClass('active');

var domObject = $('#testDiv')[0];

// 基本选择器

$('#divId')            //选择ID为divId的元素

$('.bgRed')            //选择所用CSS类为bgRed的元素

$('a')                 //选择所有<a>元素

$('#divId, a, .bgRed') //依次选择对应元素

$('*')                 //选择页面所有元素

//-------------------------------分割线----------------------------------

// 层叠选择器

$('.bgRed div')        //选择CSS类为bgRed的元素中的所有<div>元素.

$('.myList>li')        //选择CSS类为myList元素中的直接子节点<li>对象.

$('#news+img')         //选择id为news元素后面的img对象.(同级节点)

$('#someDiv~[title]')  //选择id为someDiv的对象后面所有带有title属性的元素


$('div').has('p');           //选择包含p元素的div元素

$('div').not('.myClass');    //选择class不等于myClass的div元素

$('div').filter('.myClass'); //选择class等于myClass的div元素

$('div').first();            //选择第1个div元素

$('div').eq(5);              //选择第6个div元素


$('div').next('p');       //选择div元素后面的第一个p元素

$('div').parent();        //选择div元素的父元素

$('div').closest('form'); //选择离div最近的那个form父元素

$('div').children();      //选择div的所有子元素

$('div').siblings();      //选择div的同级元素


$('div')
  .find('h3')
　.eq(2)
　.html('Hello')
　.end()          //退回到选中所有的h3元素
　.eq(0)          //选中第一个h3元素
　.html('World'); //将它的内容改为World

$('h1').html();        //html()没有参数，表示取出h1的值

$('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值

$('div').insertAfter('p');

$('p').after('div');

$('p').click(function(){
  alert('Hello');
});

//同时绑定click和change事件
$('input').on('click change', function() {
  alert(‘Hello’);
});

//只运行一次，以后的点击不会运行
$('p').one('click', function() {
  alert('Hello');
});

//.unbind()用来解除事件绑定。
$('p').unbind('click');


$('p').click(function(e) {
  alert(e.type);
});

$('a').click(function() {
  alert('Hello');
});
$('a').trigger('click');


$('a').click(function(){
  alert($(this).attr('id'));
});

$('a').click(function(){
  alert(this.id);
});

var cached = $('#top');
cached.find('p.classA');

$('div').find('h3').eq(2).html('Hello');

$('div').find('h3').eq(2).html('Hello').end().eq(0).html('World');W

<p class="hello">Hello</p> how are <p>you?</p>

$("p").detach(".hello");

how are <p>you?</p>
