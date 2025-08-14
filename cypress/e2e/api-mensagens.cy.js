describe('API Adopet', ()=>{
    

    it('Mensagens da API', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://adopet-frontend-cypress.vercel.app/static/media/user.6f88cbe8973e0cd4ffe85b13a89c1b02.svg',
            headers: cyprees.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})