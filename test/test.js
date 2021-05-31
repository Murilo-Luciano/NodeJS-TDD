const assert = require('chai').assert;
const index = require('../index')
const axios = require('axios')

describe('index', function(){
    
    it('1 + 1 should return 2', function(){
        assert.equal(require('../index').addNumbers(1, 1), 2)
    })

    it('1 + 1 should not return 7', function(){
        assert.notEqual(require('../index').addNumbers(1, 1), 7)
    })

    it('[1,2,3,4,5] should contain 3', function(){
        assert.include(require('../index').array1, 3)
    })

    it('[6,7,8,9] should not contain TDD é Top', function(){
        assert.notInclude(require('../index').array2, 'TDD é Top')
    })

    it('Obj should contain attr1 attribute', function(){
        assert.property(require('../index').obj, 'attr1')
    })

    it('Obj2 should contain attr3 attribute', function(){
        assert.property(require('../index').obj2, 'attr3')
    })

    it('1 - Investtools should match with given phrase', function(){
        assert.match(require('../index').phrase1, /([Invesstools])/)
    })

    it('2 - Investtools should match with given phrase', function(){
        assert.match(require('../index').phrase2, /([Invesstools])/)
    })

    it('3 - Investtools should match with given phrase', function(){
        assert.match(require('../index').phrase3, /([Invesstools])/)
    })

    it('Sum 1+1 should return 2', function(){
        assert.equal(require('../soma').sum(1,1), 2)
    })

    it('Sum 2+2 should return 4', function(){
        assert.equal(require('../soma').sum(2,2), 4)
    })

    it('Sum 4+5 should return 9', function(){
        assert.equal(require('../soma').sum(4,5), 9)
    })

    it('Sum 6+7 should return 13', function(){
        assert.equal(require('../soma').sum(6,7), 13)
    })

    it('Sum 9+9 should return 18', function(){
        assert.equal(require('../soma').sum(9,9), 18)
    })

    it('Google html should contain the body tag', async function(){
        axios.get('http://www.google.com').then(resp => {
            assert.match(resp.data, /(<body)/)
            done()
        })
    })

})
