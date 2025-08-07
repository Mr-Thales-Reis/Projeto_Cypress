describe('API Adopet', ()=>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNTZlODBmYS1jMzFmLTQyOGEtODU3Mi1lODQzYzUwYWI5ODciLCJhZG9wdGVyTmFtZSI6Im9sYSIsImlhdCI6MTc1NDU5NTI1NiwiZXhwIjoxNzU0ODU0NDU2fQ.zPPDr_WhNdWFn9Qe0QONyMKadZ-vvVViVjl4YWAWsus`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-frontend-cypress.vercel.app/static/media/user.6f88cbe8973e0cd4ffe85b13a89c1b02.svg',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        })
    })
})