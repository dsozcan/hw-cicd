describe('ikinci odev', function() {
    const request ={
        method : 'POST',
        url : 'https://httpbin.org/post',
        qs : {
            "key" : "value"
        },
        headers : {
            'user-agent' : 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
            'cookie' : 'cookieName=cookieValue'
        },
        failOnStatusCode : false
    };

it('TC01 POST istek denemesi', function(){
    cy.request(request).then(response => {
        assert.equal(200, response.status);
    })
})

it('TC02 yanlis istek denemesi', function(){
    cy.request({url:'https://httpbin.org/get', method:'POST', failOnStatusCode:false}).then(response => {
        assert.equal(405, response.status);
    })
})

it('TC03 query parametresi deneme', function(){
    cy.request(request).then(response => {
        assert.equal("value", response.body.args.key);
    })
})

it('TC04 user agent denemesi', function(){
    cy.request(request).then(response => {
        assert.equal(request.headers['user-agent'], response.requestHeaders['user-agent']);
    })
})

it('TC05 cookie denemesi', function(){
    cy.request(request).then(response => {
        assert.equal("cookieName=cookieValue", response.requestHeaders['cookie']);
    })
})

it('TC06 complex response body kontrol', () => {
    cy.request(request).then(response => {
        const expectedBody ={
            "key" : "value"
        };
        expect(response.body.args).to.deep.equal({
            "key": "value"
        });
    })
})

it('TC07 single response body kontrol', () => {
    cy.request(request).then(response => {
        assert.equal('value', response.body.args['key'])
    })
})


it('TC08 header kontrol', () => {
    cy.request(request).then(response => {
        assert.equal('cookieName=cookieValue', response.requestHeaders.cookie)
    })
})

it('TC09 yanlis url denemesi', function(){
    cy.request({url:'https://httpbin.org/geta', method:'POST', failOnStatusCode:false}).then(response => {
        assert.equal(404, response.status);
    })
})

it('TC10 test suresi', () => {
    cy.request(request).then(response => {
        expect(response.duration).to.be.at.most(1500);
    })
})

})