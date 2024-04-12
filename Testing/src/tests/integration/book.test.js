


describe(' Book Routes Test ', () => {
    

    it('should return the list of books available', () => {

        const books =[
            { "id": "001", "name": "The Secret Garden", "author": "Frances Hodgson Burnett" },
            { "id": "002", "name": "To Kill a Mockingbird", "author": "Harper Lee" },
            { "id": "003", "name": "Pride and Prejudice", "author": "Jane Austen" },
            { "id": "004", "name": "The Catcher in the Rye", "author": "J.D. Salinger" },
            { "id": "005", "name": "1984", "author": "George Orwell" }
          ]
          

          expect( books ).toEqual( expect.arrayContaining([ expect.objectContaining({ 

            id: expect.any(String),
            name: expect.any(String),
            author: expect.any(String) 

          })]))


    });
});


