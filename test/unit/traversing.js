
describe('traversing 遍历，过滤', function () {

    it('.children() - 获得每个匹配元素集合元素的直接子元素(可以带上滤选择器)。', function () {
        var elm = document.getElementById("test")

        assert.lengthOf($('#test').children(),0)
        elm.innerHTML = '<div>Goodbye</div><span>Test</span>';
        assert.lengthOf($('#test').children(),2)
        assert.lengthOf($('#test').children('span'),1)
        assert.equal($('#test').children('span')[0].tagName,'SPAN')

    })

    it('.closest() - 获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。', function () {
        var elm = document.getElementById("test")
        elm.innerHTML = '<div>Goodbye<p><span>Test</span></p></div>';
        var elmdiv = $("#test p").closest('div')
        assert.lengthOf(elmdiv,1)
        assert.equal(elmdiv[0].innerText,'Goodbye\nTest')
        var elmdiv = $("#test span").closest('p',$('#test p')[0])
        assert.lengthOf(elmdiv,1)
        assert.equal(elmdiv[0].tagName,'P')
    })

    it('.find() - 后代节点的集合(可以带上滤选择器)。', function () {
        var elm = document.getElementById("test")
        elm.innerHTML = '<div>Goodbye<p><span>Test</span></p><p>Goodbye</p></div>';
        assert.lengthOf($('#test').find('p'),2)
        assert.lengthOf($('#test').find('span'),1)
        assert.lengthOf($('#test').find(),4)
    })

    it('.first() - 获取当前对象集合中的第一个元素。 first() ⇒ collection', function () {
        // var elm = document.getElementById("test")
        // elm.innerHTML = '<div>Goodbye<p><span>Test</span></p><p>Goodbye</p></div>';
        // assert.lengthOf($('#test p').first(),1)
        // assert.equal($('#test p').first()[0].innerText,'Goodbye\nTest')

    })

    it('.parent() - 对象集合中每个元素的直接父元素。', function () {

    })

    it('.parents() - 获取对象集合每个元素所有的祖先元素（不包含根元素）。', function () {

    })

    it('.siblings() - 获取对此对象【其它】所有兄弟对象(可以带上滤选择器)。', function () {

    })

    it('.contents() - 获得每个匹配元素集合元素的子元素，包括文字和注释节点。', function () {

    })

    it('.prev() - 获取对象集合每个元素的所有上一个对象(可以带上滤选择器)。', function () {

    })

    it('.next() - 获取对象集合每个元素的所有下一个对象(可以带上滤选择器)。', function () {

    })

    it('.prevAll() - 获取对此对象【上】所有兄弟对象(可以带上滤选择器)。', function () {

    })

    it('.nextAll() - 获取对此对象【下】所有兄弟对象(可以带上滤选择器)。', function () {

    })

    it('$.map() - 通过遍历集合中的节点对象，通过函数返回一个新的数组，null 或 undefined 将被过滤掉。', function () {

    })

    it('$.each() - 通用例遍方法，可用于例遍对象和数组', function () {

    })

    it('$.grep() - 使用过滤函数过滤数组元素。', function () {

    })

    it('.each() - 遍历一个 JSLite 集合对象，为每一个匹配元素执行一个函数。', function () {

    })

    it('.map() - 遍历节点对象集合中的所有节点对象返回一个新的集合对象', function () {

    })

    it('.forEach() - 类似 each，forEach遍历不会停止。', function () {

    })

    it('.eq() - 指定匹配元素的集合为的索引的哪一个元素。', function () {

    })

    it('.eq() - 指定匹配元素的集合为的索引的哪一个元素。', function () {

    })

    it('.index() - 获取一个元素的位置。', function () {

    })

    it('.indexOf() - 在当前获取的节点数组中获取一个元素在这个数组的位置。', function () {

    })

    it('.filter() - 筛选出与指定表达式匹配的元素集合。', function () {

    })

    it('.not() - 筛选出与指定表达式匹配的元素集合。', function () {

    })

})